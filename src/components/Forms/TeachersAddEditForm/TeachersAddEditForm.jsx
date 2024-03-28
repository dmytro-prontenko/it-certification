import { Divider } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import CommonButton from "../../Buttons/CommonButton/CommonButton";
import selectStyles from "../../../commonStyles/SelectStyles";
import { setModalContent } from "../../../redux/slice/serviceSlice";
import { selectModalContent } from "../../../redux/selectors/serviceSelectors";

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
import { useState } from "react";

const TeachersAddEditForm = () => {
  const dataContent = useSelector(selectModalContent);
  const dictionary = useSelector(selectDictionary);
  const dispatch = useDispatch();

  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  let actionTitle;

  const handleUniversityChange = (selectedOption) => {
    setSelectedUniversity(selectedOption);
    console.log("selected option - ", selectedOption)
    console.log(dictionary.university.map(el=>console.log(el.value)))

    if (selectedOption) {
      const departmentData =
        dictionary.university
          .find((el) => el.id === selectedOption.value)
          ?.cathedra.map((cath) => ({
            value: cath.id,
            label: cath.value,
          })) || [];
      setDepartmentOptions(departmentData);
    } else {
      setDepartmentOptions([]);
      setSelectedDepartment(null);
    }
  };

  const handleUniversityClear = () => {
    setSelectedUniversity(null);
    setDepartmentOptions([]);
    setSelectedDepartment(null);
  };

  if (dataContent.action === "Add") {
    actionTitle = "Додати";
  } else {
    actionTitle = "Редагувати";
  }

  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { errors, dirtyFields },
  } = useForm();

  const getDirtyFieldsValues = () => {
    const dirtyValues = {};
    Object.keys(dirtyFields).forEach((field) => {
      dirtyValues[field] = getValues(field);
    });
    return dirtyValues;
  };

  const onSubmit = (data) => {
    console.log(data);
    const dirtyValues = getDirtyFieldsValues();
    let transformedData;
    dataContent.action !== "Edit"
      ? (transformedData = {
          department: data.department.value,
          university: data.university.value.value,
          position: data.position.value,
          degree: data.degree.value,
          comments: data.comments || "",
        })
      : (transformedData = dirtyValues);



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
            editedData: { ...data, ...transformedData },
          })
        );
  };
  // console.log(errors);

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
                    label: el.value,
                  }))}
                  placeholder="Оберіть зі списку"
                  styles={selectStyles}
                  isSearchable={true}
                  isClearable={true}
                  maxMenuHeight={150}
                  defaultValue={
                    dataContent.recordData
                      ? {
                          value: dataContent.recordData.position,
                          label: dataContent.recordData.position,
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
                    label: el.value,
                  }))}
                  placeholder="Оберіть науковий ступінь викладача"
                  styles={selectStyles}
                  isSearchable={true}
                  isClearable={true}
                  maxMenuHeight={150}
                  defaultValue={
                    dataContent.recordData
                      ? {
                          value: dataContent.recordData.degree,
                          label: dataContent.recordData.degree,
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
                    // id: el.id,
                  }))}
                  placeholder="Оберіть зі списку"
                  styles={selectStyles}
                  isSearchable={true}
                  isClearable={true}
                  maxMenuHeight={150}
                  defaultValue={
                    dataContent.recordData
                      ? {
                          value: dataContent.recordData.university,
                          label: dataContent.recordData.university,
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
                  {...register(
                    "department",
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
                          value: dataContent.recordData.department,
                          label: dataContent.recordData.department,
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
              defaultValue={dataContent.recordData?.details || null}
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
