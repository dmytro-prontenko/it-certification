import { Divider } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import CommonButton from "../../Buttons/CommonButton/CommonButton";
import selectStyles from "../../../commonStyles/SelectStyles";
import { setModalContent } from "../../../redux/slice/serviceSlice";
import { selectModalContent } from "../../../redux/selectors/serviceSelectors";

import {
  ModalAddEditTitle,
  StyledAddEditForm,
  StyledAddEditInputWrapper,
  StyledAddEditInputsWrapper,
  StyledAddEditLabel,
  StyledAddEditTextInput,
} from "../../../commonStyles/commonStyles";
import { selectDictionary } from "../../../redux/selectors/mainInfoSelectors";
import getDirtyFieldsValues from "../../../helpers/getDirtyFieldsValues";

const DisciplineBlockAddEditForm = () => {
  const dataContent = useSelector(selectModalContent);
  const blockDisciplinesTitles = useSelector(selectDictionary);

  // console.log(blockDisciplinesTitles.disciplineBlocks);
  // console.log(dataContent);

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
    control,
    handleSubmit,
    getValues,
    formState: { dirtyFields },
  } = useForm();

  const onSubmit = (data) => {
    const dirtyFieldsArray = getDirtyFieldsValues(dirtyFields, getValues);

    // console.log("data", data);
    if (dataContent.action !== "Edit") {
      transformedData = {
        name: data.id.label,
        description: data.description,
      };
    } else {
      //* Формування request body для Edit
      dirtyFieldsArray.forEach((item) => {
        console.log(item);
        switch (item.field) {
          case "name":
            transformedData.name = item;
            break;
          case "description":
            transformedData.description = { id: item.value.value };
            break;
          default:
            transformedData = {};
        }
      });
    }

    // console.log("transformedData", transformedData);

    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([, value]) => value !== undefined)
    );

    dispatch(
      setModalContent({
        action: "EditConfirm",
        editedData: { id: dataContent.recordDataEdit.id, ...filteredData },
      })
    );
  };
  // console.log(errors);

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
            <Controller
              name="id"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={[...blockDisciplinesTitles.disciplineBlocks].map(
                    (option) => ({
                      value: option.id,
                      label: option.name,
                    })
                  )}
                  placeholder="Оберіть назву блоку дисципліни"
                  styles={selectStyles}
                  isSearchable={true}
                  isClearable={true}
                  maxMenuHeight={150}
                  defaultValue={
                    dataContent.recordDataEdit
                      ? {
                          value: dataContent.recordDataEdit.id,
                          label: dataContent.recordDataEdit.id,
                        }
                      : null
                  }
                  // required
                />
              )}
            />
            {/* {errors.category && (
              <StyledErrorSelectMobile>
                {errors.category.message}
              </StyledErrorSelectMobile>
            )} */}
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
              defaultValue={dataContent.recordDataEdit?.link_standard || null}
              // required
              {...register("description", { required: true, maxLength: 100 })}
            />
          </StyledAddEditInputWrapper>
        </StyledAddEditInputsWrapper>

        <CommonButton buttonType={"submit"}>{actionTitle}</CommonButton>
      </StyledAddEditForm>
    </>
  );
};

export default DisciplineBlockAddEditForm;
