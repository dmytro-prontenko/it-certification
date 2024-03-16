import { Button, Divider } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import sprite from "../../../assets/sprite.svg";
import {
  StyledCommonText,
  StyledCommonTitleH2,
  StyledCommonTitleH3,
} from "../../../commonStyles/commonStyles";
import customStyles from "../../../commonStyles/react-select-styles";
import {
  StyledDecreaseButton,
  StyledEyeWrapper,
  StyledForm,
  StyledFormButtonsWrapper,
  StyledFormInputWrapper,
  StyledFormLabel,
  StyledIncreaseButton,
  StyledInput,
  StyledInputsWrapper,
  StyledPackValueWrapper,
  StyledQuantity,
  StyledQuantityWrapper,
  StyledRadioLabel,
  StyledRadioOption,
  Wrapper
} from "./BothEyesForm.styled";
const optionsListBC = [0, 0.1, 0.2, 0.3, 0.4, 0.5];
const optionsListSPH = [1, 2, 3, 4, 5, 6];
const optionsListCYL = [10, 11, 12, 13, 14, 15];
const optionsListAXE = [20, 21, 22, 23, 24, 25];

const BothEyesForm = () => {
  const [quantityLeft, SetQuantityLeft] = useState(1);
  const [quantityRight, SetQuantityRight] = useState(1);

  const handleDecrease = (e, side) => {
    e.preventDefault()
    switch (side) {
      case "left":
        quantityLeft > 1
          ? SetQuantityLeft(quantityLeft - 1)
          : SetQuantityLeft(1);
        break;
      case "right":
        quantityRight > 1
          ? SetQuantityRight(quantityRight - 1)
          : SetQuantityRight(1);
        break

      default:
        return
    }
  };
  const handleIncrease = (e,side) => {
    e.preventDefault()
    switch (side) {
      case "left":
        SetQuantityLeft(quantityLeft + 1);
        break;
      case "right":
        SetQuantityRight(quantityRight + 1);
        break;
      default:
        return;
    }
  };

  const { handleSubmit, control, register } = useForm({
    defaultValues: {
      BC_left: "",
      SPH_left: "",
      CYL_left: "",
      AXE_left: "",
      BC_right: "",
      SPH_right: "",
      CYL_right: "",
      AXE_right: "",
      packTypeLeft: "",
      packTypeRight: "",
    },
  });
  const onSubmit = (data) => {
    data.quant_left = quantityLeft
    data.quant_right = quantityRight
    console.log(data)
  };
  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInputsWrapper>
          {/*
          │ =========================
          │     Left eye form
          │ =========================
          */}
          <StyledEyeWrapper>
            <Divider variant="middle" />
            <StyledCommonTitleH3>Ліве око</StyledCommonTitleH3>
            <StyledFormInputWrapper>
              <StyledFormLabel>Базова кривизна (BC)</StyledFormLabel>
              <Controller
                name="BC_left"
                control={control}
                render={({ field }) => (
                  <Select
                    placeholder={"Оберіть"}
                    {...field}
                    styles={customStyles}
                    options={optionsListBC.map((el) => ({
                      value: el,
                      label: el,
                    }))}
                  />
                )}
              />
            </StyledFormInputWrapper>
            <StyledFormInputWrapper>
              <StyledFormLabel>Діоптрійність (Sph)</StyledFormLabel>
              <Controller
                name="SPH_left"
                control={control}
                render={({ field }) => (
                  <Select
                    placeholder={"Оберіть"}
                    {...field}
                    styles={customStyles}
                    options={optionsListSPH.map((el) => ({
                      value: el,
                      label: el,
                    }))}
                  />
                )}
              />
            </StyledFormInputWrapper>
            <StyledFormInputWrapper>
              <StyledFormLabel>Циліндр (Cyl)</StyledFormLabel>
              <Controller
                name="CYL_left"
                control={control}
                render={({ field }) => (
                  <Select
                    placeholder={"Оберіть"}
                    {...field}
                    styles={customStyles}
                    options={optionsListCYL.map((el) => ({
                      value: el,
                      label: el,
                    }))}
                  />
                )}
              />
            </StyledFormInputWrapper>
            <StyledFormInputWrapper>
              <StyledFormLabel>Вісь (AXE)</StyledFormLabel>
              <Controller
                name="AXE_left"
                control={control}
                render={({ field }) => (
                  <Select
                    placeholder={"Оберіть"}
                    {...field}
                    styles={customStyles}
                    options={optionsListAXE.map((el) => ({
                      value: el,
                      label: el,
                    }))}
                  />
                )}
              />
            </StyledFormInputWrapper>

            <StyledPackValueWrapper>
              <StyledCommonTitleH2>Тип упаковки</StyledCommonTitleH2>
              <StyledRadioOption>
                <StyledCommonText>
                  <StyledRadioLabel htmlFor="one-pack-left">
                    <StyledInput
                      {...register("packTypeLeft", { required: true })}
                      type="radio"
                      value="one_pack"
                      id="one-pack-left"
                      defaultChecked
                    />
                    Одна упаковка
                    <span></span>
                  </StyledRadioLabel>
                </StyledCommonText>
              </StyledRadioOption>
              <StyledRadioOption>
                <StyledCommonText>
                  <StyledRadioLabel htmlFor="one-pcs-left">
                    <StyledInput
                      {...register("packTypeLeft", { required: true })}
                      type="radio"
                      value="one_pcs"
                      id="one-pcs-left"
                    />
                    <div>
                      Одна штука <strong>(375 грн за шт)</strong>
                    </div>
                    <span></span>
                  </StyledRadioLabel>
                </StyledCommonText>
              </StyledRadioOption>
            </StyledPackValueWrapper>
          </StyledEyeWrapper>

          <StyledCommonText>Кількість</StyledCommonText>
          <StyledQuantityWrapper>
            <StyledDecreaseButton onClick={(e) => handleDecrease(e, "left")}>
              <svg width="24px" height="24px">
                <use href={`${sprite}#icon-minus`}></use>
              </svg>
            </StyledDecreaseButton>
            <StyledQuantity>{quantityLeft}</StyledQuantity>
            <StyledIncreaseButton onClick={(e) => handleIncrease(e, "left")}>
              <svg width="24px" height="24px">
                <use href={`${sprite}#icon-plus`}></use>
              </svg>
            </StyledIncreaseButton>
          </StyledQuantityWrapper>

          {/*
          │ =========================
          │     Right eye form
          │ =========================
          */}
          <StyledEyeWrapper>
            <Divider variant="middle" />
            <StyledCommonTitleH3>Праве око</StyledCommonTitleH3>
            <StyledFormInputWrapper>
              <StyledFormLabel>Базова кривизна (BC)</StyledFormLabel>
              <Controller
                name="BC_right"
                control={control}
                render={({ field }) => (
                  <Select
                    placeholder={"Оберіть"}
                    {...field}
                    styles={customStyles}
                    options={optionsListBC.map((el) => ({
                      value: el,
                      label: el,
                    }))}
                  />
                )}
              />
            </StyledFormInputWrapper>
            <StyledFormInputWrapper>
              <StyledFormLabel>Діоптрійність (Sph)</StyledFormLabel>
              <Controller
                name="SPH_right"
                control={control}
                render={({ field }) => (
                  <Select
                    placeholder={"Оберіть"}
                    {...field}
                    styles={customStyles}
                    options={optionsListSPH.map((el) => ({
                      value: el,
                      label: el,
                    }))}
                  />
                )}
              />
            </StyledFormInputWrapper>
            <StyledFormInputWrapper>
              <StyledFormLabel>Циліндр (Cyl)</StyledFormLabel>
              <Controller
                name="CYL_right"
                control={control}
                render={({ field }) => (
                  <Select
                    placeholder={"Оберіть"}
                    {...field}
                    styles={customStyles}
                    options={optionsListCYL.map((el) => ({
                      value: el,
                      label: el,
                    }))}
                  />
                )}
              />
            </StyledFormInputWrapper>
            <StyledFormInputWrapper>
              <StyledFormLabel>Вісь (AXE)</StyledFormLabel>
              <Controller
                name="AXE_right"
                control={control}
                render={({ field }) => (
                  <Select
                    placeholder={"Оберіть"}
                    {...field}
                    styles={customStyles}
                    options={optionsListAXE.map((el) => ({
                      value: el,
                      label: el,
                    }))}
                  />
                )}
              />
            </StyledFormInputWrapper>
            <StyledPackValueWrapper>
              <StyledCommonTitleH2>Тип упаковки</StyledCommonTitleH2>
              <StyledRadioOption>
                <StyledCommonText>
                  <StyledRadioLabel htmlFor="one-pack-right">
                    <StyledInput
                      {...register("packTypeRight", { required: true })}
                      type="radio"
                      value="one_pack"
                      id="one-pack-right"
                      defaultChecked
                    />
                    Одна упаковка
                    <span></span>
                  </StyledRadioLabel>
                </StyledCommonText>
              </StyledRadioOption>
              <StyledRadioOption>
                <StyledCommonText>
                  <StyledRadioLabel htmlFor="one-pcs-right">
                    <StyledInput
                      {...register("packTypeRight", { required: true })}
                      type="radio"
                      value="one_pcs"
                      id="one-pcs-right"
                    />
                    <div>
                      Одна штука <strong>(375 грн за шт)</strong>
                    </div>
                    <span></span>
                  </StyledRadioLabel>
                </StyledCommonText>
              </StyledRadioOption>
            </StyledPackValueWrapper>
          </StyledEyeWrapper>

          {/*
          │ =========================
          │          Quantity
          │ =========================
          */}
          <StyledCommonText>Кількість</StyledCommonText>
          <StyledQuantityWrapper>
            <StyledDecreaseButton onClick={(e) => handleDecrease(e, "right")}>
              <svg width="24px" height="24px">
                <use href={`${sprite}#icon-minus`}></use>
              </svg>
            </StyledDecreaseButton>
            <StyledQuantity>{quantityRight}</StyledQuantity>
            <StyledIncreaseButton onClick={(e) => handleIncrease(e, "right")}>
              <svg width="24px" height="24px">
                <use href={`${sprite}#icon-plus`}></use>
              </svg>
            </StyledIncreaseButton>
          </StyledQuantityWrapper>
        </StyledInputsWrapper>

        {/*
          │ =========================
          │          Buttons
          │ =========================
          */}
        <StyledFormButtonsWrapper>
          <Button
            variant="contained"
            type="submit"
            name="button2"
            sx={{ width: 190 }}
          >
            <svg width="24px" height="24px" fill="white">
              <use href={`${sprite}#icon-basket`}></use>
            </svg>
            <span>В кошик</span>
          </Button>
          <Button variant="outlined" color="secondary" type="button">
            <svg width="24px" height="24px">
              <use href={`${sprite}#icon-favorite`}></use>
            </svg>
          </Button>
        </StyledFormButtonsWrapper>
      </StyledForm>
    </Wrapper>
  );
};

export default BothEyesForm;
