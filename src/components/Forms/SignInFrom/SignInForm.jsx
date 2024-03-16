import { Button, IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  StyledInputWrapper,
  StyledLabel,
  // StyledPrimaryButton,
  StyledTextField,
} from "../../../commonStyles/commonStyles";
import PasswordHidden from "../../Icons/PasswordHidden";
import PasswordVisible from "../../Icons/PasswordVisible";
import { StyledOutlinedInput, StyledSingInForm } from "./SignInForm.styled";
import { useDispatch } from "react-redux";
import { signInThunk } from "../../../redux/thunk/authThunks";

const SignInForm = () => {
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
  const onSubmit = (data, e) => {
    console.log(data);
    e.preventDefault();
    dispatch(signInThunk(data));
  };

  return (
    <StyledSingInForm onSubmit={handleSubmit(onSubmit)}>
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

      <Button variant="contained" color="primary" type="submit">
        Увійти
      </Button>
      <Button variant="outlined" color="primary">
        Забули пароль?
      </Button>
    </StyledSingInForm>
  );
};

export default SignInForm;
