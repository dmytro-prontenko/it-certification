import { Divider } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Select from "react-select";
import { ModalWrapper } from "../../commonStyles/commonStyles";
import { selectModalContent } from "../../redux/selectors/serviceSelectors";
import { setModalContent } from "../../redux/slice/serviceSlice";
import CommonButton from "../Buttons/CommonButton/CommonButton";
import {
  ModalTitle,
  StyledErrorSelectMobile,
  StyledForm,
  StyledInputWrapper,
  StyledInputsWrapper,
  StyledLabel,
  StyledTextInput,
} from "./AddEditModal.styled";
import selectStyles from "./SelectStyles";

const AddEditModal = () => {
  const dataContent = useSelector(selectModalContent);
  const location = useLocation();
  const dispatch = useDispatch();

  let actionTitle;
  let modalTitle;
  dataContent.action === "Add"
    ? (actionTitle = "Додати")
    : (actionTitle = "Редагувати");

  switch (location.pathname) {
    case "/specialty": {
      modalTitle = `${actionTitle} інформацію про спеціальність`;
      break;
    }
    case "/teachers": {
      modalTitle = `${actionTitle} інформацію про викладача`;
      break;
    }
  }

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(dataContent.action);

    dispatch(setModalContent({ action: "EditConfirm" }));
  };
  // console.log(errors);

  return (
    <ModalWrapper>
      <ModalTitle>{modalTitle}</ModalTitle>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInputsWrapper>
          <StyledInputWrapper>
            <StyledLabel>Номер</StyledLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                color: "var(--basic-grey)",
              }}
            />
            <Controller
              name="id"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={[...Array(20)].map((el, index) => ({
                    value: index,
                    label: index,
                  }))}
                  placeholder="Оберіть зі списку"
                  styles={selectStyles}
                  isSearchable={true}
                  isClearable={true}
                  maxMenuHeight={150}
                  required
                />
              )}
            />
            {errors.category && (
              <StyledErrorSelectMobile>
                {errors.category.message}
              </StyledErrorSelectMobile>
            )}
          </StyledInputWrapper>
          {/* ================================= */}
          <StyledInputWrapper>
            <StyledLabel>Назва</StyledLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                color: "var(--basic-grey)",
              }}
            />
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={[...Array(20)].map((el, index) => ({
                    value: index,
                    label: index,
                  }))}
                  placeholder="Оберіть зі списку"
                  styles={selectStyles}
                  sSearchable={true}
                  isClearable={true}
                  maxMenuHeight={145}
                  required
                />
              )}
            />
            {errors.category && (
              <StyledErrorSelectMobile>
                {errors.category.message}
              </StyledErrorSelectMobile>
            )}
          </StyledInputWrapper>
          {/* ================================= */}
          <StyledInputWrapper>
            <StyledLabel>Посилання</StyledLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                color: "var(--basic-grey)",
              }}
            />
            <StyledTextInput
              type="text"
              placeholder="link"
              required
              {...register("link", { required: true, maxLength: 100 })}
            />
          </StyledInputWrapper>
        </StyledInputsWrapper>

        <CommonButton buttonType={"submit"}>{actionTitle}</CommonButton>
      </StyledForm>
    </ModalWrapper>
  );
};

export default AddEditModal;
