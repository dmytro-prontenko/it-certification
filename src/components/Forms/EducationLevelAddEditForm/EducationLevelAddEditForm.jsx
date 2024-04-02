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

const EducationLevelAddEditForm = () => {
  const dataContent = useSelector(selectModalContent);

  const dispatch = useDispatch();

  let actionTitle;
  let transformedData = {};

  // let defaultData;

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
        education_level: data.education_level,
        name: data.name,
      };
    } else {
      //* Формування request body для Edit

      dirtyFieldsArray.forEach((item) => {
        switch (item.field) {
          case "education_level":
            transformedData.education_level = item.value;
            break;
          case "name":
            transformedData.name = item.value;
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
              education_level: { education_level: data.education_level },
              name: {
                name: data.name,
              },
            },
            editedData: { ...transformedData },
          })
        );
  };

  return (
    <>
      <ModalAddEditTitle>{`${actionTitle} інформацію про рівень освіти`}</ModalAddEditTitle>
      <StyledAddEditForm onSubmit={handleSubmit(onSubmit)}>
        <StyledAddEditInputsWrapper>
          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Номер рівня освіти</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: "var(--accent-green-300)",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Оберіть номер спеціальності"
              defaultValue={
                dataContent.recordDataEdit
                  ? dataContent.recordDataEdit.education_level
                  : null
              }
              {...register(
                "education_level: 2,",
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
            {errors.education_level && (
              <ErrorsContainer>
                {errors.education_level.message}
              </ErrorsContainer>
            )}
          </StyledAddEditInputWrapper>

          {/* ================================= */}
          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Назва рівня освіти</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: "var(--accent-green-300)",
              }}
            />

            <StyledAddEditTextInput
              type="text"
              placeholder="Оберіть рівень освіти"
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
                        message: "Введіть назву рівня освіти",
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
        </StyledAddEditInputsWrapper>

        <CommonButton buttonType={"submit"}>{actionTitle}</CommonButton>
      </StyledAddEditForm>
    </>
  );
};

export default EducationLevelAddEditForm;
