import { Button, IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  StyledInputWrapper,
  StyledLabel,
  StyledTextField,
} from "../../../commonStyles/commonStyles";
import PasswordHidden from "../../Icons/PasswordHidden";
import PasswordVisible from "../../Icons/PasswordVisible";
import { StyledOutlinedInput, StyledSingInForm } from "./SignUpForm.styled";
import { useDispatch } from "react-redux";
import { signUpThunk } from "../../../redux/thunk/authThunks";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [showPassword, SetShowPassword] = useState(false);
  const {
    // register,
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const handleClickShowPassword = () => {
    SetShowPassword(!showPassword);
  };
  const onSubmit = async (data, e) => {
    e.preventDefault();
    console.log(data);
    await dispatch(signUpThunk(data));
  };

  return (
    <StyledSingInForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInputWrapper>
        <StyledLabel>Імʼя</StyledLabel>
        <Controller
          render={({ field }) => (
            <StyledTextField
              placeholder="Марія"
              variant="outlined"
              {...field}
            />
          )}
          name="firstName"
          control={control}
          defaultValue=""
          className="materialUIInput"
          type="text"
        />
      </StyledInputWrapper>

      <StyledInputWrapper>
        <StyledLabel>Прізвище</StyledLabel>
        <Controller
          render={({ field }) => (
            <StyledTextField
              placeholder="Шевченко"
              variant="outlined"
              {...field}
            />
          )}
          name="lastName"
          control={control}
          defaultValue=""
          className="materialUIInput"
          type="text"
        />
      </StyledInputWrapper>

      <StyledInputWrapper>
        <StyledLabel>Email</StyledLabel>
        <Controller
          render={({ field }) => (
            <StyledTextField
              placeholder="example.ua@gmail.com"
              variant="outlined"
              {...field}
            />
          )}
          name="email"
          control={control}
          defaultValue=""
          className="materialUIInput"
          type="email"
        />
      </StyledInputWrapper>

      <StyledInputWrapper>
        <StyledLabel>Пароль</StyledLabel>
        <Controller
          render={({ field }) => (
            <StyledOutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <PasswordHidden /> : <PasswordVisible />}
                  </IconButton>
                </InputAdornment>
              }
              placeholder="Password"
              {...field}
            />
          )}
          name="password"
          control={control}
          defaultValue=""
          className="materialUIInput"
        />
      </StyledInputWrapper>

      <StyledInputWrapper>
        <StyledLabel>Повторіть пароль</StyledLabel>
        <Controller
          render={({ field }) => (
            <StyledOutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <PasswordHidden /> : <PasswordVisible />}
                  </IconButton>
                </InputAdornment>
              }
              placeholder="Repeat password"
              {...field}
            />
          )}
          name="repeat-password"
          control={control}
          defaultValue=""
          className="materialUIInput"
        />
      </StyledInputWrapper>

      <StyledInputWrapper>
        <StyledLabel>Телефон</StyledLabel>
        <Controller
          render={({ field }) => (
            <StyledTextField
              placeholder="example.ua@gmail.com"
              variant="outlined"
              {...field}
            />
          )}
          name="phone"
          control={control}
          defaultValue=""
          className="materialUIInput"
          type="phone"
        />
      </StyledInputWrapper>

      <StyledInputWrapper>
        <StyledLabel>Місто</StyledLabel>
        <Controller
          render={({ field }) => (
            <StyledTextField
              placeholder="Шевченко"
              variant="outlined"
              {...field}
            />
          )}
          name="city"
          control={control}
          defaultValue=""
          className="materialUIInput"
          type="text"
        />
      </StyledInputWrapper>

      <StyledInputWrapper>
        <StyledLabel>Відділення &quot;Нової Пошти&quot;</StyledLabel>
        <Controller
          render={({ field }) => (
            <StyledTextField
              placeholder="23"
              variant="outlined"
              {...field}
            />
          )}
          name="novaPost_point"
          control={control}
          defaultValue=""
          className="materialUIInput"
          type="text"
        />
      </StyledInputWrapper>

      <Button variant="contained" color="primary" type="submit">
        Зареєструватись
      </Button>
    </StyledSingInForm>
  );
};

export default SignUpForm;
