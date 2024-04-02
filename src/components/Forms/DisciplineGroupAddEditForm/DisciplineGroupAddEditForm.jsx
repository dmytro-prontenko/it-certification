import { Divider } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import CommonButton from "../../Buttons/CommonButton/CommonButton";
import selectStyles from "../../../commonStyles/SelectStyles";
import { selectModalContent } from "../../../redux/selectors/serviceSelectors";
import { setModalContent } from "../../../redux/slice/serviceSlice";

import {
  ErrorsContainer,
  ModalAddEditTitle,
  StyledAddEditForm,
  StyledAddEditInputWrapper,
  StyledAddEditInputsWrapper,
  StyledAddEditLabel,
  StyledAddEditTextInput,
} from "../../../commonStyles/commonStyles";
import { selectDictionary } from "../../../redux/selectors/mainInfoSelectors";
import getDirtyFieldsValues from "../../../helpers/getDirtyFieldsValues";
import { useEffect, useState } from "react";

const DisciplineGroupAddEditForm = () => {
  const dataContent = useSelector(selectModalContent);
  const dictionary = useSelector(selectDictionary);

  const dispatch = useDispatch();

  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { errors, dirtyFields },
  } = useForm();

  const [disciplinesBlockOpton, setDisciplinesBlockOpton] = useState(null);

  let actionTitle;
  let transformedData = {};

  let recordData;

  if (dataContent.action === "Add") {
    actionTitle = "Додати";
    recordData = dataContent.recordDataAdd;
  } else {
    actionTitle = "Редагувати";
    recordData = dataContent.recordDataEdit;
  }

  useEffect(() => {
    if (recordData && recordData.block) {
      console.log("recordData", recordData);
      setDisciplinesBlockOpton({
        value: recordData.block.id,
        label: recordData.block.name,
      });
    }
  }, [recordData]);

  const onSubmit = (data) => {
    const dirtyFieldsArray = getDirtyFieldsValues(dirtyFields, getValues);
    if (dataContent.action !== "Edit") {
      transformedData = {
        name: data.description,
        description: data.description,
        block: { id: data.block.value },
        discipline_url: data.discipline_url,
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
          case "block":
            transformedData.block = { id: item.value.value };
            break;
          case "discipline_url":
            transformedData.discipline_url = item.value;
            break;
          default:
            transformedData = {};
        }
      });
    }

    // console.log("transformedData", transformedData);

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
  console.log(dataContent.recordDataEdit);
  return (
    <>
      <ModalAddEditTitle>{`${actionTitle} інформацію про групу дисциплін`}</ModalAddEditTitle>
      <StyledAddEditForm onSubmit={handleSubmit(onSubmit)}>
        <StyledAddEditInputsWrapper>
          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Назва групи дисципліни</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                color: "var(--basic-grey)",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Оберіть назву групи дисципліни"
              defaultValue={dataContent.recordDataEdit?.name || null}
              // required
              {...register(
                "name",
                dataContent.action !== "Edit"
                  ? {
                      required: {
                        value: true,
                        message: "Введіть опис блоку дисципліни",
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
            <StyledAddEditLabel>Опис</StyledAddEditLabel>
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

          {/* ================================= */}

          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Блок</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                color: "var(--basic-grey)",
              }}
            />
            <Controller
              name="block"
              control={control}
              render={({ field }) => (
                <Select
                  {...register(
                    "block",
                    dataContent.action !== "Edit"
                      ? {
                          required: {
                            value: true,
                            message: "Оберіть блок дисципліни",
                          },
                        }
                      : { required: false }
                  )}
                  {...field}
                  options={dictionary.disciplineBlocks.map((el) => ({
                    value: el.id,
                    label: el.name,
                  }))}
                  placeholder="Оберіть блок дисципліни"
                  styles={selectStyles}
                  sSearchable={true}
                  isClearable={true}
                  maxMenuHeight={145}
                  value={disciplinesBlockOpton}
                  defaultValue={dataContent.recordDataEdit?.block || null}
                />
              )}
            />
            {errors.name && (
              <ErrorsContainer>{errors.name.message}</ErrorsContainer>
            )}
          </StyledAddEditInputWrapper>

          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Посилання на дисципліну</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                color: "var(--basic-grey)",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Додайте посилання на дисципліну"
              defaultValue={dataContent.recordDataEdit?.discipline_url || null}
              // required
              {...register(
                "discipline_url",
                dataContent.action !== "Edit"
                  ? {
                      required: {
                        value: true,
                        message: "Введіть назву блоку дисципліни",
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

export default DisciplineGroupAddEditForm;
