import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  StyledButtonsWrapper,
  StyledForm,
  StyledIMask,
} from "./PersonalDataForm.styled";
import {
  StyledInputWrapper,
  StyledLabel,
  StyledTextField,
} from "../../../commonStyles/commonStyles";
import { Button, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../../../redux/selectors";

const PersonalDataForm = () => {
  const [saveButtonStatus, SetSaveButtonStatus] = useState(true);
  const [formInputsStatus, SetFormInputsStatus] = useState(true);
  const [changeButtonStatus, SetChangeButtonStatus] = useState(false);
  const user = useSelector(selectUserInfo);
  // console.log({...user})

  const {
    // register,
    control,
    handleSubmit,
    formState: { errors },
    // setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    SetSaveButtonStatus(true);
    SetFormInputsStatus(true);
    SetChangeButtonStatus(false);
  };

  const handleSaveButtonStatus = () => {
    SetSaveButtonStatus(false);
    SetFormInputsStatus(false);
    SetChangeButtonStatus(true);
  };

  const validationRules = {
    firstName: {
      required: "Введіть ім'я",
      maxLength: {
        value: 10,
        message: "Ім'я не повинно перевищувати 10 символів",
      },
      pattern: {
        value: /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ']+$/,
        message: "Ім'я повинно містити тільки літери",
      },
    },
    lastName: {
      required: "Введіть прізвище",
      maxLength: {
        value: 30,
        message: "Прізвище не повинно перевищувати 30 символів",
      },
      pattern: {
        value: /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ']+$/,
        message: "Прізвище повинно містити тільки літери",
      },
    },
    email: {
      required: "Введіть email",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Введіть коректний email",
      },
    },
    city: {
      required: "Введіть назву населенного пункту",
      maxLength: {
        value: 40,
        message: "Назва населенного не повинна перевищувати 40 символів",
      },
      pattern: {
        value: /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ']+$/,
        message: "Назва населенного пункту повинна містити тільки літери",
      },
    },
    novaPost: {
      required: "Введіть номер відділення/поштомату",
      maxLength: {
        value: 5,
        message:
          "Номер відділення/поштомату не повинен перевищувати 5 символів",
      },
      pattern: {
        value: /^[0-9]{1,5}$/,
        message: "Номер відділення/поштомату повинен містити тільки цифри",
      },
    },
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInputWrapper>
        <StyledLabel>Ваше імʼя</StyledLabel>
        <Controller
          render={({ field }) => (
            <StyledTextField
              placeholder="Марія"
              variant="outlined"
              required
              error={!!errors.firstName}
              helperText={errors.firstName ? errors.firstName.message : ""}
              {...field}
            />
          )}
          name="firstName"
          control={control}
          defaultValue={user.name || ""}
          className="materialUIInput"
          type="text"
          disabled={formInputsStatus}
          rules={validationRules.firstName}
        />
      </StyledInputWrapper>

      <StyledInputWrapper>
        <StyledLabel>Прізвище</StyledLabel>
        <Controller
          render={({ field }) => (
            <StyledTextField
              placeholder="Шевченко"
              variant="outlined"
              required
              error={!!errors.lastName}
              helperText={errors.lastName ? errors.lastName.message : ""}
              {...field}
            />
          )}
          name="lastName"
          control={control}
          defaultValue={user.lastName || ""}
          className="materialUIInput"
          type="text"
          disabled={formInputsStatus}
          rules={validationRules.lastName}
        />
      </StyledInputWrapper>

      <StyledInputWrapper>
        <StyledLabel>Email</StyledLabel>
        <Controller
          render={({ field }) => (
            <StyledTextField
              placeholder="example.ua@gmail.com"
              variant="outlined"
              required
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
              {...field}
            />
          )}
          name="email"
          control={control}
          defaultValue={user.email || ""}
          className="materialUIInput"
          type="email"
          disabled={formInputsStatus}
          rules={validationRules.email}
        />
      </StyledInputWrapper>

      <StyledInputWrapper>
        <StyledLabel>Телефон</StyledLabel>
        <Controller
          render={({ field }) => (
            <StyledIMask
              mask="+38(099)999-99-99"
              placeholder="+38(000)000-00-00"
              value={field.value}
              required
              onChange={field.onChange}
              disabled={formInputsStatus}
            >
              {(inputProps) => (
                <TextField
                  {...inputProps}
                  placeholder="+38(000)000-00-00"
                  variant="outlined"
                />
              )}
            </StyledIMask>
          )}
          name="phone"
          control={control}
          defaultValue={user.phone || ""}
          className="materialUIInput"
          type="tel"
          disabled={formInputsStatus}
        />
      </StyledInputWrapper>

      <StyledInputWrapper>
        <StyledLabel>Місто</StyledLabel>
        <Controller
          render={({ field }) => (
            <StyledTextField
              placeholder="Київ"
              variant="outlined"
              required
              error={!!errors.city}
              helperText={errors.city ? errors.city.message : ""}
              {...field}
            />
          )}
          name="city"
          control={control}
          defaultValue={user.city || ""}
          className="materialUIInput"
          type="text"
          disabled={formInputsStatus}
          rules={validationRules.city}
        />
      </StyledInputWrapper>

      <StyledInputWrapper>
        <StyledLabel>Відділення Нової пошти</StyledLabel>
        <Controller
          render={({ field }) => (
            <StyledTextField
              placeholder='Відділення "Нової Пошти"'
              variant="outlined"
              required
              error={!!errors.novaPost}
              helperText={errors.novaPost ? errors.novaPost.message : ""}
              {...field}
            />
          )}
          name="novaPost"
          control={control}
          defaultValue={user.novaPost_point || ""}
          className="materialUIInput"
          type="text"
          disabled={formInputsStatus}
          rules={validationRules.novaPost}
        />
      </StyledInputWrapper>

      <StyledButtonsWrapper>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          // onClick={onSubmit}
          disabled={saveButtonStatus}
        >
          Зберегти
        </Button>

        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={handleSaveButtonStatus}
          disabled={changeButtonStatus}
        >
          Змінити інформацію
        </Button>

        <Button variant="outlined" color="primary" type="button">
          Вийти з акаунту
        </Button>
      </StyledButtonsWrapper>
    </StyledForm>
  );
};

export default PersonalDataForm;
