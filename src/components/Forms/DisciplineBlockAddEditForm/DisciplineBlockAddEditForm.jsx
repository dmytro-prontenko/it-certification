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
import { useState } from "react";

const DisciplineBlockAddEditForm = () => {
  const dataContent = useSelector(selectModalContent);
  const blockDisciplinesTitles = useSelector(selectDictionary);

  const dispatch = useDispatch();

  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { dirtyFields },
  } = useForm();

  // const [blockDisciplinesOptions, setBlockDisciplinesOptions] = useState([]);

  let actionTitle;
  let transformedData = {};

  // const handleUniversityChange = (selectedOption) => {
  //   setSelectedUniversity(selectedOption);
  //   if (selectedOption) {
  //     const departmentData =
  //       dictionary.university
  //         .find((el) => el.id === selectedOption.value)
  //         ?.department.map((cath) => ({
  //           value: cath.id,
  //           label: cath.name,
  //         })) || [];
  //     setDepartmentOptions(departmentData);
  //   } else {
  //     setDepartmentOptions([]);
  //     setSelectedDepartment(null);
  //   }
  // };

  let recordData;

  if (dataContent.action === "Add") {
    actionTitle = "Додати";
    recordData = dataContent.recordDataAdd;
  } else {
    actionTitle = "Редагувати";
    recordData = dataContent.recordDataEdit;
  }

  // const handleBlockDisciplinesClear = () => {
  //   setBlockDisciplinesOptions(null);
  // };

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
            transformedData.description = { id: item.value };
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
                  {...register(
                    "name",
                    dataContent.action !== "Edit"
                      ? {
                          required: {
                            value: true,
                            message: "Оберіть назву блоку дисципліни",
                          },
                        }
                      : { required: false }
                  )}
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
