import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import {
  StyledDecreaseButton,
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
  Wrapper,
} from "./SameEyesForm.styled";
import { Button } from "@mui/material";
import sprite from "../../../assets/sprite.svg";
import customStyles from "../../../commonStyles/react-select-styles";
import { useState } from "react";
import {
  StyledCommonText,
  StyledCommonTitleH2,
} from "../../../commonStyles/commonStyles";

const optionsListBC = [0, 0.1, 0.2, 0.3, 0.4, 0.5];
const optionsListSPH = [1, 2, 3, 4, 5, 6];
const optionsListCYL = [10, 11, 12, 13, 14, 15];
const optionsListAXE = [20, 21, 22, 23, 24, 25];

const SameEyesForm = () => {
  const { handleSubmit, control, register } = useForm({
    defaultValues: {
      BC: "",
      SPH: "",
      CYL: "",
      AXE: "",
    },
  });

  const [quantityBoth, SetQuantityBoth] = useState(1);

  const handleDecrease = (e) => {
    e.preventDefault();
    quantityBoth > 1 ? SetQuantityBoth(quantityBoth - 1) : SetQuantityBoth(1);
  };
  const handleIncrease = (e) => {
    e.preventDefault();
    SetQuantityBoth(quantityBoth + 1);
  };

  const onSubmit = (data) => {
    data.quant_both = quantityBoth;
    console.log(data);
  };
  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInputsWrapper>
          <StyledFormInputWrapper>
            <StyledFormLabel>Базова кривизна (BC)</StyledFormLabel>
            <Controller
              name="BC"
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
              name="SPH"
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
              name="CYL"
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
              name="AXE"
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
                <StyledRadioLabel htmlFor="one-pack">
                  <StyledInput
                    {...register("packType", { required: true })}
                    type="radio"
                    value="one_pack"
                    id="one-pack"
                    defaultChecked
                  />
                  Одна упаковка
                  <span></span>
                </StyledRadioLabel>
              </StyledCommonText>
            </StyledRadioOption>
            <StyledRadioOption>
              <StyledCommonText>
                <StyledRadioLabel htmlFor="one-pcs">
                  <StyledInput
                    {...register("packType", { required: true })}
                    type="radio"
                    value="one_pcs"
                    id="one-pcs"
                  />
                  <div>
                    Одна штука <strong>(375 грн за шт)</strong>
                  </div>
                  <span></span>
                </StyledRadioLabel>
              </StyledCommonText>
            </StyledRadioOption>
          </StyledPackValueWrapper>
          <StyledCommonText>Кількість</StyledCommonText>
          <StyledQuantityWrapper>
            <StyledDecreaseButton onClick={(e) => handleDecrease(e)}>
              <svg width="24px" height="24px">
                <use href={`${sprite}#icon-minus`}></use>
              </svg>
            </StyledDecreaseButton>
            <StyledQuantity>{quantityBoth}</StyledQuantity>
            <StyledIncreaseButton onClick={(e) => handleIncrease(e)}>
              <svg width="24px" height="24px">
                <use href={`${sprite}#icon-plus`}></use>
              </svg>
            </StyledIncreaseButton>
          </StyledQuantityWrapper>
        </StyledInputsWrapper>

        <StyledFormButtonsWrapper>
          <Button variant="contained" type="submit" sx={{ width: 190 }}>
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

export default SameEyesForm;
