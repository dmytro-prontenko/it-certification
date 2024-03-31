import { Divider } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import selectStyles from "../../../commonStyles/SelectStyles";
import { selectModalContent } from "../../../redux/selectors/serviceSelectors";
import { setModalContent } from "../../../redux/slice/serviceSlice";
import CommonButton from "../../Buttons/CommonButton/CommonButton";

import { useEffect, useState } from "react";
import {
  ErrorsContainer,
  ModalAddEditTitle,
  StyledAddEditForm,
  StyledAddEditInputWrapper,
  StyledAddEditInputsWrapper,
  StyledAddEditLabel,
  StyledAddEditTextInput,
} from "../../../commonStyles/commonStyles";
import { selectDictionary } from "../../../redux/selectors/mainInfoSelectors";

const TeachersAddEditForm = () => {
  const dataContent = useSelector(selectModalContent);
  const dictionary = useSelector(selectDictionary);
  const dispatch = useDispatch();

  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { errors, dirtyFields },
  } = useForm();

  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  let actionTitle;
  let transformedData = {};

  // Наповнення select для кафедр
  // ======================================================
  // #region department

  const handleUniversityChange = (selectedOption) => {
    setSelectedUniversity(selectedOption);
    if (selectedOption) {
      const departmentData =
        dictionary.university
          .find((el) => el.id === selectedOption.value)
          ?.department.map((cath) => ({
            value: cath.id,
            label: cath.name,
          })) || [];
      setDepartmentOptions(departmentData);
    } else {
      setDepartmentOptions([]);
      setSelectedDepartment(null);
    }
  };

  useEffect(() => {
    // Проверяем, что есть данные для редактирования и что в объекте recordData есть кафедра
    if (dataContent.recordData && dataContent.recordData.department) {
      // Устанавливаем значение выбранной кафедры
      setSelectedDepartment({
        value: dataContent.recordData.department.id,
        label: dataContent.recordData.department.name,
      });
    }
  }, [dataContent.recordData]);
  // #endregion
  // ======================================================

  // Очистка select для кафедр
  // ======================================================
  // #region department clean

  const handleUniversityClear = () => {
    setSelectedUniversity(null);
    setDepartmentOptions([]);
    setSelectedDepartment(null);
  };
  // #endregion
  // ======================================================

  if (dataContent.action === "Add") {
    actionTitle = "Додати";
  } else {
    actionTitle = "Редагувати";
  }

  // Збір обʼєкту зі зміненими полями форми при Edit
  // ======================================================
  // #region

  const getDirtyFieldsValues = () => {
    const dirtyFieldsArray = [];
    Object.keys(dirtyFields).forEach((field) => {
      if (dirtyFields[field]) {
        const value = getValues(field);
        dirtyFieldsArray.push({ field, value });
      }
    });
    return dirtyFieldsArray;
  };

  // #endregion
  // ======================================================

  // Submit форми Add/Edit
  // ======================================================
  // #region onSubmit
  const onSubmit = (data) => {
    const dirtyFieldsArray = getDirtyFieldsValues();

    //* Формування request body для Add
    if (dataContent.action !== "Edit") {
      transformedData = {
        name: data.name,
        department: {
          id: data.department.value,
        },
        position: {
          id: data.position.value,
        },
        degree: {
          id: data.degree.value,
        },
        email: data.email,
        comments: data.comments || "",
      };
    } else {
      //* Формування request body для Edit
      dirtyFieldsArray.forEach((item) => {
        switch (item.field) {
          case "name":
            transformedData.name = item.value;
            break;
          case ("department", "university"):
            transformedData.department = { id: item.value.value };
            break;
          case "position":
            transformedData.position = { id: item.value.value };
            break;
          case "degree":
            transformedData.degree = { id: item.value.value };
            break;
          case "email":
            transformedData.email = item.value;
            break;
          case "comments":
            transformedData.comments = item.value;
            break;
          default:
            transformedData = {};
        }
      });
    }

    // Відкриття модального вікна Confirmation modal
    dataContent.action === "Edit"
      ? dispatch(
          setModalContent({
            action: "EditConfirm",
            editedData: {
              ...transformedData,
            },
          })
        )
      : dispatch(
          setModalContent({
            action: "AddConfirm",
            editedData: { ...transformedData },
          })
        );
  };

  // #endregion
  // ======================================================

  return (
    <>
      <ModalAddEditTitle>{`${actionTitle} інформацію про викладача`}</ModalAddEditTitle>
      <StyledAddEditForm onSubmit={handleSubmit(onSubmit)}>
        <StyledAddEditInputsWrapper>
          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Імʼя викладача</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                color: "var(--accent-green-300)",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Введіть ПІБ викладача"
              defaultValue={dataContent.recordData?.name || null}
              // required
              {...register(
                "name",
                dataContent.action !== "Edit"
                  ? {
                      required: {
                        value: true,
                        message: "Введіть імʼя викладача",
                      },
                      minLength: {
                        value: 2,
                        message: "Мінімальна довжина для імені 2 символи",
                      },
                      maxLength: {
                        value: 100,
                        message: "Максимальна довжина для імені 100 символів",
                      },
                    }
                  : { required: false }
              )}
            />
            {errors.name && (
              <ErrorsContainer>{errors.name.message}</ErrorsContainer>
            )}
          </StyledAddEditInputWrapper>

          {/* ================================= */}

          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Посада викладача</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                color: "var(--accent-green-300)",
              }}
            />

            <Controller
              name="position"
              control={control}
              render={({ field }) => (
                <Select
                  {...register(
                    "position",
                    dataContent.action !== "Edit"
                      ? {
                          required: {
                            value: true,
                            message: "Оберіть посаду викладача",
                          },
                          minLength: {
                            value: 3,
                            message: "Мінімальна довжина 6 символів",
                          },
                        }
                      : { required: false }
                  )}
                  {...field}
                  options={dictionary.position.map((el) => ({
                    value: el.id,
                    label: el.name,
                  }))}
                  placeholder="Оберіть зі списку"
                  styles={selectStyles}
                  isSearchable={true}
                  isClearable={true}
                  maxMenuHeight={150}
                  defaultValue={
                    dataContent.recordData
                      ? {
                          value: dataContent.recordData.position.id,
                          label: dataContent.recordData.position.name,
                        }
                      : null
                  }
                />
              )}
            />
            {errors.position && (
              <ErrorsContainer>{errors.position.message}</ErrorsContainer>
            )}
          </StyledAddEditInputWrapper>

          {/* ================================= */}

          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Науковий ступінь</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                color: "var(--accent-green-300)",
              }}
            />

            <Controller
              name="degree"
              control={control}
              render={({ field }) => (
                <Select
                  {...register(
                    "degree",
                    dataContent.action !== "Edit"
                      ? {
                          required: {
                            value: true,
                            message: "Оберіть науковий ступінь викладача",
                          },
                          minLength: {
                            value: 3,
                            message: "Мінімальна довжина 6 символів",
                          },
                        }
                      : { required: false }
                  )}
                  {...field}
                  options={dictionary.degree?.map((el) => ({
                    value: el.id,
                    label: el.name,
                  }))}
                  placeholder="Оберіть науковий ступінь викладача"
                  styles={selectStyles}
                  isSearchable={true}
                  isClearable={true}
                  maxMenuHeight={150}
                  defaultValue={
                    dataContent.recordData
                      ? {
                          value: dataContent.recordData.degree.id,
                          label: dataContent.recordData.degree.name,
                        }
                      : null
                  }
                />
              )}
            />
            {errors.degree && (
              <ErrorsContainer>{errors.degree.message}</ErrorsContainer>
            )}
          </StyledAddEditInputWrapper>

          {/* ================================= */}

          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Email</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                color: "var(--accent-green-300)",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Введіть Email викладача"
              defaultValue={dataContent.recordData?.email || null}
              // required
              {...register(
                "email",
                dataContent.action !== "Edit"
                  ? {
                      required: {
                        value: true,
                        message: "Введіть email викладача",
                      },
                      minLength: {
                        value: 3,
                        message: "Мінімальна довжина 6 символів",
                      },
                      pattern: /^\S+@\S+$/i,
                    }
                  : { required: false }
              )}
            />
            {errors.email && (
              <ErrorsContainer>{errors.email.message}</ErrorsContainer>
            )}
          </StyledAddEditInputWrapper>

          {/* ================================= */}

          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>ЗВО</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                color: "var(--accent-green-300)",
              }}
            />
            <Controller
              name="university"
              control={control}
              render={({ field }) => (
                <Select
                  {...register(
                    "university",
                    dataContent.action !== "Edit"
                      ? {
                          required: {
                            value: true,
                            message: "Введіть ЗВО викладача",
                          },
                          minLength: {
                            value: 3,
                            message: "Мінімальна довжина 6 символів",
                          },
                        }
                      : { required: false }
                  )}
                  {...field}
                  options={dictionary.university?.map((el) => ({
                    value: el.id,
                    label: el.name,
                  }))}
                  placeholder="Оберіть зі списку"
                  styles={selectStyles}
                  isSearchable={true}
                  isClearable={true}
                  maxMenuHeight={150}
                  defaultValue={
                    dataContent.recordData
                      ? {
                          value: dataContent.recordData.university.id,
                          label: dataContent.recordData.university.name,
                        }
                      : null
                  }
                  onChange={(selectedOption) => {
                    field.onChange(selectedOption);
                    handleUniversityChange(selectedOption);
                    setSelectedDepartment(null);
                  }}
                  onMenuClose={() => {
                    if (!selectedUniversity) {
                      handleUniversityClear();
                    }
                  }}
                />
              )}
            />
            {errors.university && (
              <ErrorsContainer>{errors.university.message}</ErrorsContainer>
            )}
          </StyledAddEditInputWrapper>

          {/* ================================= */}

          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Кафедра</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                color: "var(--accent-green-300)",
              }}
            />

            <Controller
              name="department"
              control={control}
              render={({ field }) => (
                <Select
                  {...register("department", {
                    required: {
                      value: false,
                      message: "Введіть ЗВО викладача",
                    },
                    minLength: {
                      value: 3,
                      message: "Мінімальна довжина 6 символів",
                    },
                  })}
                  {...field}
                  key={JSON.stringify(departmentOptions)}
                  options={departmentOptions}
                  placeholder="Оберіть зі списку"
                  styles={selectStyles}
                  isSearchable={true}
                  isClearable={true}
                  maxMenuHeight={150}
                  value={selectedDepartment}
                  defaultValue={
                    dataContent.recordData
                      ? {
                          value: dataContent.recordData.department.id,
                          label: dataContent.recordData.department.name,
                        }
                      : null
                  }
                  onChange={(selectedOption) => {
                    setSelectedDepartment(selectedOption);
                    field.onChange(selectedOption);
                  }}
                />
              )}
            />
            {errors.department && (
              <ErrorsContainer>{errors.department.message}</ErrorsContainer>
            )}
          </StyledAddEditInputWrapper>

          {/* ================================= */}

          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Коментарі</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                color: "var(--accent-green-300)!importany",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Введіть коментар"
              defaultValue={dataContent.recordData?.comments || null}
              // required
              {...register("comments", { required: false, maxLength: 100 })}
            />
          </StyledAddEditInputWrapper>
        </StyledAddEditInputsWrapper>

        <CommonButton buttonType={"submit"}>{actionTitle}</CommonButton>
      </StyledAddEditForm>
    </>
  );
};

export default TeachersAddEditForm;
