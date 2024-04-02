import { Divider } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

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
// import { selectDictionary } from "../../../redux/selectors/mainInfoSelectors";
import getDirtyFieldsValues from "../../../helpers/getDirtyFieldsValues";
// import { useState } from "react";

const DisciplineBlockAddEditForm = () => {
  const dataContent = useSelector(selectModalContent);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, dirtyFields },
  } = useForm();

  let actionTitle;
  let transformedData = {};

  if (dataContent.action === "Add") {
    actionTitle = "Додати";
  } else {
    actionTitle = "Редагувати";
  }

  const onSubmit = (data) => {
    const dirtyFieldsArray = getDirtyFieldsValues(dirtyFields, getValues);

    if (dataContent.action !== "Edit") {
      transformedData = {
        name: data.description,
        description: data.description,
      };
    } else {
      //* Формування request body для Edit
      dirtyFieldsArray.forEach((item) => {
        switch (item.field) {
          case "name":
            transformedData.name = item.value;
            break;
          case "description":
            transformedData.description = item.value;
            break;
          default:
            transformedData = {};
        }
      });
    }

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
            },
            editedData: { ...transformedData },
          })
        );
  };

  return (
    <>
      <ModalAddEditTitle>{`${actionTitle} інформацію про блок дисциплін`}</ModalAddEditTitle>
      <StyledAddEditForm onSubmit={handleSubmit(onSubmit)}>
        <StyledAddEditInputsWrapper>
          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Назва блоку дисципліни</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                color: "var(--basic-grey)",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Додайте опис про блок дисциплін"
              defaultValue={dataContent.recordDataEdit?.name || null}
              // required
              {...register(
                "name",
                dataContent.action !== "Edit"
                  ? {
                      required: {
                        value: true,
                        message: "Введіть назву блоку дисципліни",
                      },
                      minLength: {
                        value: 1,
                        message: "Мінімальна довжина для імені 1 символ",
                      },
                      maxLength: {
                        value: 100,
                        message: "Максимальна довжина для імені 100 символів",
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
            <StyledAddEditLabel>Опис дисципліни</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                color: "var(--basic-grey)",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Додайте опис про блок дисциплін"
              defaultValue={dataContent.recordDataEdit?.description || null}
              // required
              {...register(
                "description",
                dataContent.action !== "Edit"
                  ? {
                      required: {
                        value: true,
                        message: "Введіть опис блоку дисципліни",
                      },
                    }
                  : { required: false }
              )}
            />
            {errors.name && (
              <ErrorsContainer>{errors.name.message}</ErrorsContainer>
            )}
          </StyledAddEditInputWrapper>
        </StyledAddEditInputsWrapper>

        <CommonButton buttonType={"submit"}>{actionTitle}</CommonButton>
      </StyledAddEditForm>
    </>
  );
};

export default DisciplineBlockAddEditForm;
