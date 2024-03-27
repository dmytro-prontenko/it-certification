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

  const [cathedraOptions, setCathedraOptions] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedCathedra, setSelectedCathedra] = useState(null);

  let actionTitle;

  const handleUniversityChange = (selectedOption) => {
    setSelectedUniversity(selectedOption);
    if (selectedOption) {
      const cathedraData =
        dictionary.university
          .find((el) => el.id === selectedOption.id)
          ?.cathedra.map((cath) => ({
            value: cath.value,
            label: cath.value,
          })) || [];
      setCathedraOptions(cathedraData);
    } else {
      setCathedraOptions([]);
      setSelectedCathedra(null);
    }
  };

  const handleUniversityClear = () => {
    setSelectedUniversity(null);
    setCathedraOptions([]);
    setSelectedCathedra(null);
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
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const transformedData = {
      cathedra: data.cathedra.value,
      university: data.university.value,
      institution: data.university.value,
      role: data.role.value,
      status: data.status.value,
      comment: data.comment || "",
    };
    console.log({ ...data, ...transformedData });

    dataContent.action === "Edit"
      ? dispatch(
          setModalContent({
            action: "EditConfirm",
            recordData: {
              ...dataContent.recordData,
              // ...data,
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
              name="role"
              control={control}
              render={({ field }) => (
                <Select
                  {...register("role", {
                    required: {
                      value: true,
                      message: "Оберіть посаду викладача",
                    },
                    minLength: {
                      value: 3,
                      message: "Мінімальна довжина 6 символів",
                    },
                  })}
                  {...field}
                  options={dictionary.position.map((el) => ({
                    value: el.value,
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
                          value: dataContent.recordData.university,
                          label: dataContent.recordData.university,
                        }
                      : null
                  }
                />
              )}
            />
            {errors.role && (
              <ErrorsContainer>{errors.role.message}</ErrorsContainer>
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
              name="status"
              control={control}
              render={({ field }) => (
                <Select
                  {...register("status", {
                    required: {
                      value: true,
                      message: "Оберіть науковий ступінь викладача",
                    },
                    minLength: {
                      value: 3,
                      message: "Мінімальна довжина 6 символів",
                    },
                  })}
                  {...field}
                  options={dictionary.degree.map((el) => ({
                    value: el.value,
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
                          value: dataContent.recordData.university,
                          label: dataContent.recordData.university,
                        }
                      : null
                  }
                />
              )}
            />
            {errors.status && (
              <ErrorsContainer>{errors.status.message}</ErrorsContainer>
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
              {...register("email", {
                required: { value: true, message: "Введіть email викладача" },
                minLength: {
                  value: 3,
                  message: "Мінімальна довжина 6 символів",
                },
                pattern: /^\S+@\S+$/i,
              })}
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
                  {...register("university", {
                    required: {
                      value: true,
                      message: "Введіть ЗВО викладача",
                    },
                    minLength: {
                      value: 3,
                      message: "Мінімальна довжина 6 символів",
                    },
                  })}
                  {...field}
                  options={dictionary.university.map((el) => ({
                    value: el.name,
                    label: el.name,
                    id: el.id,
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
                    setSelectedCathedra(null);
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
              name="cathedra"
              control={control}
              render={({ field }) => (
                <Select
                  {...register("cathedra", {
                    required: {
                      value: true,
                      message: "Введіть ЗВО викладача",
                    },
                    minLength: {
                      value: 3,
                      message: "Мінімальна довжина 6 символів",
                    },
                  })}
                  {...field}
                  key={JSON.stringify(cathedraOptions)}
                  options={cathedraOptions}
                  placeholder="Оберіть зі списку"
                  styles={selectStyles}
                  isSearchable={true}
                  isClearable={true}
                  maxMenuHeight={150}
                  value={selectedCathedra}
                  onChange={(selectedOption) => {
                    setSelectedCathedra(selectedOption);
                    field.onChange(selectedOption);
                  }}
                />
              )}
            />
            {errors.cathedra && (
              <ErrorsContainer>{errors.cathedra.message}</ErrorsContainer>
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
              {...register("comment", { required: false, maxLength: 100 })}
            />
          </StyledAddEditInputWrapper>
        </StyledAddEditInputsWrapper>

        <CommonButton buttonType={"submit"}>{actionTitle}</CommonButton>
      </StyledAddEditForm>
    </>
  );
};

export default TeachersAddEditForm;
