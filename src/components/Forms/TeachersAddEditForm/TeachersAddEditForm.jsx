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

const TeachersAddEditForm = () => {
  const dataContent = useSelector(selectModalContent);
  console.log(dataContent.recordData);

  const dispatch = useDispatch();

  let actionTitle;

  // let defaultData;

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
    console.log(data);
    // const transformedData = {
    //   status: data.status.value,
    //   position: data.role.value,
    //   institution: data.university.value,
    // };

    dataContent.action === "Edit"
      ? dispatch(
          setModalContent({
            action: "EditConfirm",
            recordData: {
              ...dataContent.recordData,
              ...data,
              // ...transformedData,
            },
          })
        )
      : dispatch(
          setModalContent({
            action: "AddConfirm",
            // editedData: { ...data, ...transformedData },
            editedData: { ...data},
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
              {...register("name", dataContent.action !== "Edit" ? {
                required: { value: true, message: "Введіть імʼя викладача" },
                minLength: {
                  value: 2,
                  message: "Мінімальна довжина для імені 2 символи",
                },
                maxLength: {
                  value: 100,
                  message: "Максимальна довжина для імені 100 символів",
                },
              }: null)}
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
                  {...field}
                  {...register("role", {
                    required: {
                      value: true,
                      message: "Оберіть посаду викладача",
                    },
                  })}
                  // options={[...Array(20)].map((el, index) => ({
                  //   value: index,
                  //   label: index,
                  // }))}
                  defaultValue={
                    dataContent.recordData
                      ? {
                          value: dataContent.recordData.role,
                          label: dataContent.recordData.role,
                        }
                      : null
                  }
                  placeholder="Оберіть посаду викладача"
                  styles={selectStyles}
                  isSearchable={true}
                  isClearable={true}
                  maxMenuHeight={150}
                  // required
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
                  {...field}
                  {...register("status", {
                    required: {
                      value: true,
                      message: "Оберіть науковий ступінь викладача",
                    },
                  })}
                  // options={[...Array(5)].map((el, index) => ({
                  //   value: index,
                  //   label: index,
                  // }))}
                  placeholder="Оберіть науковий ступінь викладача"
                  styles={selectStyles}
                  isSearchable={true}
                  isClearable={true}
                  maxMenuHeight={150}
                  defaultValue={
                    dataContent.recordData
                      ? {
                          value: dataContent.recordData.status,
                          label: dataContent.recordData.status,
                        }
                      : null
                  }
                  // required
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
                  options={[...Array(5)].map((el, index) => ({
                    value: index,
                    label: index,
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
                  {...field}
                  {...register("department", {
                    required: {
                      value: true,
                      message: "Оберіть кафедру викладача",
                    },
                  })}
                  options={[...Array(5)].map((el, index) => ({
                    value: index,
                    label: index,
                  }))}
                  placeholder="Оберіть зі списку"
                  styles={selectStyles}
                  isSearchable={true}
                  isClearable={true}
                  maxMenuHeight={150}
                  defaultValue={
                    dataContent.recordData
                      ? {
                          value: dataContent.recordData.department,
                          label: dataContent.recordData.department,
                        }
                      : null
                  }
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
              {...register("details", { required: false, maxLength: 100 })}
            />
          </StyledAddEditInputWrapper>
        </StyledAddEditInputsWrapper>

        <CommonButton buttonType={"submit"}>{actionTitle}</CommonButton>
      </StyledAddEditForm>
    </>
  );
};

export default TeachersAddEditForm;
