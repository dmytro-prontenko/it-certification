import { Divider } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import Select from "react-select";

import CommonButton from "../../Buttons/CommonButton/CommonButton";
// import selectStyles from "../../../commonStyles/SelectStyles";
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

const UniversityAddEditForm = () => {
  const dataContent = useSelector(selectModalContent);
  console.log(dataContent.recordDataEdit);

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
    console.log(data);

    // * Формування request body для Add

    if (dataContent.action !== "Edit") {
      transformedData = {
        name: data.name,
        abbr: {
          id: data.abbr.value,
        },
        programLink: {
          id: data.programLink.value,
        },
        universityLink: {
          id: data.universityLink.value,
        },
      };
    } else {
      //* Формування request body для Edit

      dirtyFieldsArray.forEach((item) => {
        switch (item.field) {
          case "name":
            transformedData.name = item.value;
            break;
          case ("abbr", "university"):
            transformedData.abbr = { id: item.value.value };
            break;
          case "programLink":
            transformedData.programLink = { id: item.value.value };
            break;
          case "universityLink":
            transformedData.universityLink = { id: item.value.value };
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
              name: { name: data.name.label },
              abbr: {
                abbr: data.department.label,
              },
              programLink: { programLink: data.programLink.value },
              universityLink: {
                universityLink: data.universityLink.value,
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
                dataContent.action !== "Edit"
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
                  ? dataContent.recordDataEdit.abbr
                  : null
              }
              {...register(
                "abbr",
                dataContent.action !== "Edit"
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
                    }
                  : { required: false }
              )}
            />
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
              // required
              {...register(
                "programLink",
                dataContent.action !== "Edit"
                  ? {
                      required: {
                        value: true,
                        message: "Введіть посилання переліку программ",
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
                    }
                  : { required: false }
              )}
            />
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
              {...register(
                "universityLink",
                dataContent.action !== "Edit"
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
                    }
                  : { required: false }
              )}
            />
          </StyledAddEditInputWrapper>

          {/* ================================= */}
        </StyledAddEditInputsWrapper>

        <CommonButton buttonType={"submit"}>{actionTitle}</CommonButton>
      </StyledAddEditForm>
    </>
  );
};

export default UniversityAddEditForm;
