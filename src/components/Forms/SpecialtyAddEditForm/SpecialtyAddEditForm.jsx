import { Divider } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import CommonButton from "../../Buttons/CommonButton/CommonButton";
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
import getDirtyFieldsValues from "../../../helpers/getDirtyFieldsValues";
import handleUrlValidation from "../../../helpers/handleUrlValidation";

const SpecialtyAddEditForm = () => {
  const dataContent = useSelector(selectModalContent);

  const dispatch = useDispatch();

  let actionTitle;
  let transformedData = {};

  if (dataContent.action === "Add") {
    actionTitle = "Додати";
  } else {
    actionTitle = "Редагувати";
  }

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, dirtyFields },
  } = useForm();

  const onSubmit = (data) => {
    const dirtyFieldsArray = getDirtyFieldsValues(dirtyFields, getValues);

    if (dataContent.action !== "Edit") {
      transformedData = {
        code: data.code,
        name: data.name,
        standard_url: data.standard_url,
      };
    } else {
      //* Формування request body для Edit

      dirtyFieldsArray.forEach((item) => {
        switch (item.field) {
          case "code":
            transformedData.code = item.value;
            break;
          case "name":
            transformedData.name = item.value;
            break;
          case "standard_url":
            transformedData.standard_url = item.value;
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
              code: { code: data.code },
              name: {
                name: data.name,
              },
              standard_url: {
                standard_url: data.standard_url.value,
              },
            },
            editedData: { ...transformedData },
          })
        );
  };


  return (
    <>
      <ModalAddEditTitle>{`${actionTitle} інформацію про спеціальність`}</ModalAddEditTitle>
      <StyledAddEditForm onSubmit={handleSubmit(onSubmit)}>
        <StyledAddEditInputsWrapper>
          <StyledAddEditInputWrapper>
            {/* =============================== Номер cпеціальності */}
            <StyledAddEditLabel>Номер cпеціальності</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: "var(--accent-green-300)",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Введіть номер спеціальності"
              defaultValue={
                dataContent.recordDataEdit
                  ? dataContent.recordDataEdit.code
                  : null
              }
              {...register(
                "code",
                dataContent.action 
                  ? {
                      required: {
                        value: true,
                        message: "Введіть номер спеціальності",
                      },
                      minLength: {
                        value: 1,
                        message: "Мінімальна довжина спецільності 1 символ",
                      },
                      maxLength: {
                        value: 100,
                        message:
                          "Максимальна довжина спецільності 100 символів",
                      },
                      pattern: {
                        value: /^\d+$/,
                        message: "Номер спецільності має містити тільки цифри",
                      },
                    }
                  : { required: false }
              )}
            />
            {errors.code && (
              <ErrorsContainer>{errors.code.message}</ErrorsContainer>
            )}
          </StyledAddEditInputWrapper>

          {/* ================================= */}
          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Назва cпеціальності</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: "var(--accent-green-300)",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Введіть назву спеціальності"
              defaultValue={
                dataContent.recordDataEdit
                  ? dataContent.recordDataEdit.name
                  : null
              }
              {...register(
                "name",
                dataContent.action 
                  ? {
                      required: {
                        value: true,
                        message: "Введіть назву спеціальності",
                      },
                      minLength: {
                        value: 2,
                        message: "Мінімальна довжина для назви 2 символи",
                      },
                      maxLength: {
                        value: 100,
                        message: "Максимальна довжина для назви 100 символів",
                      },
                      pattern: {
                        value: /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\s']+$/u,
                        message: "Назва повинна містити тільки літери",
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
            <StyledAddEditLabel>Посилання на стандарт</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: "var(--accent-green-300)",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Додайте посилання на стандарт"
              defaultValue={
                dataContent.recordDataEdit
                  ? dataContent.recordDataEdit?.standard_url
                  : null
              }
              onChange={handleUrlValidation}
              {...register(
                "standard_url",
                dataContent.action 
                  ? {
                      required: {
                        value: true,
                        message: "Введіть посилання на стандарт",
                      },
                      minLength: {
                        value: 10,
                        message:
                          "Мінімальна довжина посилання 10 символів, та  має починатись з 'http'",
                      },
                      maxLength: {
                        value: 100,
                        message:
                          "Максимальна довжина для посилання 100 символів",
                      },
                      pattern: {
                        value:
                          /^(https?|ftp):\/\/[a-zA-Zа-яА-Я0-9-.]+\.[a-zA-Zа-яА-Я]{2,}(\/\S*)?$/,
                        message:
                          "Посилання має починатись з 'http' або 'https' та містити тільки латинські символи",
                      },
                    }
                  : { required: false }
              )}
            />

            {errors.standard_url && (
              <ErrorsContainer>{errors.standard_url.message}</ErrorsContainer>
            )}
          </StyledAddEditInputWrapper>
        </StyledAddEditInputsWrapper>

        <CommonButton buttonType={"submit"}>{actionTitle}</CommonButton>
      </StyledAddEditForm>
    </>
  );
};

export default SpecialtyAddEditForm;
