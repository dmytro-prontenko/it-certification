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
import getDirtyFieldsValues from "../../../helpers/getDirtyFieldsValues";

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

  let recordData;
  if (dataContent.action === "Add") {
    actionTitle = "Додати";
    recordData = dataContent.recordDataAdd;
  } else {
    actionTitle = "Редагувати";
    recordData = dataContent.recordDataEdit;
  }

  useEffect(() => {
    if (recordData && recordData.department) {
      setSelectedDepartment({
        value: recordData.department.id,
        label: recordData.department.name,
      });
    }
  }, [recordData]);
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

  // Збір обʼєкту зі зміненими полями форми при Edit
  // ======================================================
  // #region

  // #endregion
  // ======================================================

  // Submit форми Add/Edit
  // ======================================================
  // #region onSubmit
  const onSubmit = (data) => {
    const dirtyFieldsArray = getDirtyFieldsValues(dirtyFields, getValues);

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
            recordDataAdd: {
              ...data,
              degree: { id: data.degree.value, name: data.degree.label },
              department: {
                id: data.department.value,
                name: data.department.label,
              },
              position: { id: data.position.value, name: data.position.label },
              university: {
                id: data.university.value,
                name: data.university.label,
              },
            },
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
              defaultValue={recordData?.name || null}
              {...register(
                "name",
                dataContent.action !== "Edit"
                  ? {
                      required: {
                        value: true,
                        message: "Введіть імʼя викладача",
                      },
                      minLength: {
                        value: 1,
                        message: "Мінімальна довжина для імені 1 символ",
                      },
                      maxLength: {
                        value: 100,
                        message: "Максимальна довжина для імені 100 символів",
                      },
                      pattern: {
                        value: /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ']+$/,
                        message: "Ім'я повинно містити тільки літери",
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
                        }
                      : { required: false }
                  )}
                  {...field}
                  options={dictionary.position.map((el) => ({
                    value: el.id,
                    label: el.name,
                  }))}
                  placeholder="Оберіть посаду викладача"
                  styles={selectStyles}
                  isSearchable={true}
                  isClearable={true}
                  maxMenuHeight={150}
                  defaultValue={
                    recordData
                      ? {
                          value: recordData.position.id,
                          label: recordData.position.name,
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
                    recordData
                      ? {
                          value: recordData.degree.id,
                          label: recordData.degree.name,
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
              defaultValue={recordData?.email || null}
              {...register(
                "email",
                dataContent.action !== "Edit"
                  ? {
                      required: {
                        value: true,
                        message: "Введіть email викладача",
                      },
                      minLength: {
                        value: 6,
                        message: "Мінімальна довжина 6 символів",
                      },
                      maxLength: {
                        value: 100,
                        message: "Максимальна довжина для email 100 символів",
                      },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Введіть коректний email",
                      },
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
                            message: "Оберіть ЗВО викладача",
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
                    recordData
                      ? {
                          value: recordData.university.id,
                          label: recordData.university.name,
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
                      message: "Оберіть кафедру викладача",
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
                    recordData
                      ? {
                          value: recordData.department.id,
                          label: recordData.department.name,
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
              defaultValue={recordData?.comments || null}
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
