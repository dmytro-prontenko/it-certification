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

const UniversityAddEditForm = () => {
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

    // * Формування request body для Add

    if (dataContent.action !== "Edit") {
      transformedData = {
        name: data.name,
        abbr: data.abbr,
        programs_list_url: data.programs_list_url,
        url: data.url,
      };
    } else {
      //* Формування request body для Edit

      dirtyFieldsArray.forEach((item) => {
        switch (item.field) {
          case "name":
            transformedData.name = item.value;
            break;
          case "abbr":
            transformedData.abbr = item.value;
            break;
          case "programs_list_url":
            transformedData.programs_list_url = item.value;
            break;
          case "url":
            transformedData.url = item.value;
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
              name: { name: data.name },
              abbr: {
                abbr: data.abbr,
              },
              programs_list_url: {
                programs_list_url: data.programs_list_url.value,
              },
              url: {
                url: data.url.value,
              },
            },
            editedData: { ...transformedData },
          })
        );
  };

  return (
    <>
      <ModalAddEditTitle>{`${actionTitle} інформацію про ЗВО`}</ModalAddEditTitle>
      <StyledAddEditForm onSubmit={handleSubmit(onSubmit)}>
        <StyledAddEditInputsWrapper>
          <StyledAddEditInputWrapper>
            {/* =============================== Назва ЗВО */}

            <StyledAddEditLabel>Назва ЗВО</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: "var(--accent-green-300)",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Введіть назву ЗВО"
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
                        message: "Введіть назву закладу",
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

          {/* ================================= Абревіатура */}

          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Абревіатура</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: "var(--accent-green-300)",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Введіть абревіатуру"
              defaultValue={
                dataContent.recordDataEdit
                  ? dataContent.recordDataEdit.abbr.toUpperCase()
                  : null
              }
              {...register(
                "abbr",
                dataContent.action
                  ? {
                      required: { value: true, message: "Введіть абревіатуру" },
                      minLength: {
                        value: 2,
                        message: "Мінімальна довжина для абревіатури 2 символи",
                      },
                      maxLength: {
                        value: 10,
                        message:
                          "Максимальна довжина для абревіатури 10 символів",
                      },
                      pattern: {
                        value: /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ']+$/,
                        message: "Абревіатура повинна містити тільки літери",
                      },
                    }
                  : { required: false }
              )}
            />
            {errors.abbr && (
              <ErrorsContainer>{errors.abbr.message}</ErrorsContainer>
            )}
          </StyledAddEditInputWrapper>

          {/* ================================= Перелік программ */}

          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Перелік программ</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: "var(--accent-green-300)",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Додайте посилання на перелік программ"
              defaultValue={
                dataContent.recordDataEdit
                  ? dataContent.recordDataEdit.programs_list_url
                  : null
              }
              onChange={handleUrlValidation}
              {...register(
                "programs_list_url",
                dataContent.action
                  ? {
                      required: {
                        value: true,
                        message: "Введіть посилання переліку программ",
                      },
                      minLength: {
                        value: 10,
                        message: "Мінімальна довжина посилання 10 символів",
                      },
                      maxLength: {
                        value: 100,
                        message:
                          "Максимальна довжина для посилання 100 символів",
                      },
                      pattern: {
                        value:
                          /^(https?:\/\/)[\w.-]+(?:\.[\w.-]+)+[/\w\-._~:/?#[\]@!$&'()*+,;=]+$/,
                        message:
                          "Посилання повинно починатися з 'http://' або 'https://' та бути правильним URL",
                      },
                    }
                  : { required: false }
              )}
            />
            {errors.programs_list_url && (
              <ErrorsContainer>
                {errors.programs_list_url.message}
              </ErrorsContainer>
            )}
          </StyledAddEditInputWrapper>

          {/* ================================= Посилання на сайт ЗВО */}
          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Посилання на сайт ЗВО</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: "var(--accent-green-300)",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Додайте посилання на сайт ЗВО"
              defaultValue={
                dataContent.recordDataEdit
                  ? dataContent.recordDataEdit.url
                  : null
              }
              onChange={handleUrlValidation}
              {...register(
                "url",
                dataContent.action
                  ? {
                      required: {
                        value: true,
                        message: "Введіть посилання ЗВО",
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
                          /^(https?:\/\/)[\w.-]+(?:\.[\w.-]+)+[/\w\-._~:/?#[\]@!$&'()*+,;=]+$/,
                        message:
                          "Посилання повинно починатися з 'http://' або 'https://' та бути правильним URL",
                      },
                    }
                  : { required: false }
              )}
            />
            {errors.url && (
              <ErrorsContainer>{errors.url.message}</ErrorsContainer>
            )}
          </StyledAddEditInputWrapper>

          {/* ================================= */}
        </StyledAddEditInputsWrapper>

        <CommonButton buttonType={"submit"}>{actionTitle}</CommonButton>
      </StyledAddEditForm>
    </>
  );
};

export default UniversityAddEditForm;
