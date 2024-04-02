import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { selectModalContent } from "../../../redux/selectors/serviceSelectors";
import { selectDictionary } from "../../../redux/selectors/mainInfoSelectors";
import { setModalContent } from "../../../redux/slice/serviceSlice";
import Select from "react-select";
import {
  ErrorsContainer,
  ModalAddEditTitle,
  StyledAddEditForm,
  StyledAddEditInputWrapper,
  StyledAddEditInputsWrapper,
  StyledAddEditLabel,
  StyledAddEditTextInput,
} from "../../../commonStyles/commonStyles";
import CommonButton from "../../Buttons/CommonButton/CommonButton";
import { Divider } from "@mui/material";
import selectStyles from "../../../commonStyles/SelectStyles";
import getDirtyFieldsValues from "../../../helpers/getDirtyFieldsValues";

const ProgramsAddEditForm = () => {
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
      <ModalAddEditTitle>{`${actionTitle} інформацію про освітню програму`}</ModalAddEditTitle>
      <StyledAddEditForm onSubmit={handleSubmit(onSubmit)}>
        <StyledAddEditInputsWrapper>
          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Назва програми</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: "var(--accent-green-300)",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Введіть назву програми"
              defaultValue={recordData?.name || null}
              {...register("name", {
                required: {
                  value: true,
                  message: "Введіть назву програми",
                },
                minLength: {
                  value: 1,
                  message: "Мінімальна довжина для назву 1 символ",
                },
                maxLength: {
                  value: 100,
                  message: "Максимальна довжина для назву 100 символів",
                },
                pattern: {
                  value: /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ' ]+$/,
                  message: "Назву повинна містити тільки літери",
                },
              })}
            />
            {errors.name && (
              <ErrorsContainer>{errors.name.message}</ErrorsContainer>
            )}
          </StyledAddEditInputWrapper>

          {/* ================================= */}

          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Код спеціальності</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: "var(--accent-green-300)",
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
                            message: "Оберіть код спеціальності",
                          },
                        }
                      : { required: false }
                  )}
                  {...field}
                  options={dictionary.specialty.map((el) => ({
                    value: el.id,
                    label: el.code,
                  }))}
                  placeholder="Оберіть код спеціальності"
                  styles={selectStyles}
                  isSearchable={true}
                  isClearable={true}
                  maxMenuHeight={150}
                  defaultValue={
                    recordData
                      ? {
                          value: recordData.specialty.id,
                          label: recordData.specialty.name,
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
            <StyledAddEditLabel>ЗВО</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: "var(--accent-green-300)",
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
            <StyledAddEditLabel>Рівень освіти</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: "var(--accent-green-300)",
              }}
            />

            <Controller
              name="education_level"
              control={control}
              render={({ field }) => (
                <Select
                  {...register(
                    "education_level",
                    dataContent.action !== "Edit"
                      ? {
                          required: {
                            value: true,
                            message: "Оберіть рівень освіти",
                          },
                        }
                      : { required: false }
                  )}
                  {...field}
                  options={dictionary.educationLevels?.map((el) => ({
                    value: el.id,
                    label: el.name,
                  }))}
                  placeholder="Оберіть рівень освіти"
                  styles={selectStyles}
                  isSearchable={true}
                  isClearable={true}
                  maxMenuHeight={150}
                  defaultValue={
                    recordData
                      ? {
                          value: recordData.education_level.id,
                          label: recordData.education_level.name,
                        }
                      : null
                  }
                />
              )}
            />
            {errors.education_level && (
              <ErrorsContainer>
                {errors.education_level.message}
              </ErrorsContainer>
            )}
          </StyledAddEditInputWrapper>

          {/* ================================= */}
          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Гарант</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: "var(--accent-green-300)",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Додайте прізвище ім'я та по-батькові гаранта"
              defaultValue={recordData?.guarantor || null}
              {...register("guarantor", {
                required: {
                  value: true,
                  message: "Введіть прізвище ім'я та по-батькові гаранта",
                },
                minLength: {
                  value: 1,
                  message:
                    "Мінімальна довжина для прізвища, ім'я та по-батькові гаранта 1 символ",
                },
                maxLength: {
                  value: 100,
                  message: "Максимальна довжина для назву 100 символів",
                },
                pattern: {
                  value: /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ' ]+$/,
                  message: "Назву повинна містити тільки літери",
                },
              })}
            />
            {errors.name && (
              <ErrorsContainer>{errors.name.message}</ErrorsContainer>
            )}
          </StyledAddEditInputWrapper>

          {/* ================================= */}

          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Кафедра</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: "var(--accent-green-300)",
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
            <StyledAddEditLabel>Посилання на програму</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: "var(--accent-green-300)",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Введіть посилання на програму"
              defaultValue={recordData?.program_url || null}
              {...register("program_url", {
                required: {
                  value: true,
                  message: "Введіть посилання на програму",
                },
                minLength: {
                  value: 1,
                  message: "Мінімальна довжина для посилання 1 символ",
                },
                maxLength: {
                  value: 100,
                  message: "Максимальна довжина для посилання 100 символів",
                },
                pattern: {
                  value:
                    /^(https?:\/\/)[\w.-]+(?:\.[\w.-]+)+[/\w\-._~:/?#[\]@!$&'()*+,;=]+$/,
                  message:
                    "Посилання повинно починатися з 'http://' або 'https://' та бути правильним URL",
                },
              })}
            />
            {errors.program_url && (
              <ErrorsContainer>{errors.program_url.message}</ErrorsContainer>
            )}
          </StyledAddEditInputWrapper>

          {/* ================================= */}

          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Посилання на силабус</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: "var(--accent-green-300)",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Введіть посилання на силабус"
              defaultValue={recordData?.syllabus_url || null}
              {...register("syllabus_url", {
                required: {
                  value: true,
                  message: "Введіть посилання на силабус",
                },
                minLength: {
                  value: 1,
                  message: "Мінімальна довжина для посилання 1 символ",
                },
                maxLength: {
                  value: 100,
                  message: "Максимальна довжина для посилання 100 символів",
                },
                pattern: {
                  value:
                    /^(https?:\/\/)[\w.-]+(?:\.[\w.-]+)+[/\w\-._~:/?#[\]@!$&'()*+,;=]+$/,
                  message:
                    "Посилання повинно починатися з 'http://' або 'https://' та бути правильним URL",
                },
              })}
            />
            {errors.syllabus_url && (
              <ErrorsContainer>{errors.syllabus_url.message}</ErrorsContainer>
            )}
          </StyledAddEditInputWrapper>
        </StyledAddEditInputsWrapper>
        <CommonButton buttonType={"submit"}>{actionTitle}</CommonButton>
      </StyledAddEditForm>
    </>
  );
};

export default ProgramsAddEditForm;
