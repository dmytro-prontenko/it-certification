import { Divider } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { selectDictionary } from "../../../redux/selectors/mainInfoSelectors";
import CommonButton from "../../Buttons/CommonButton/CommonButton";
import selectStyles from "../../../commonStyles/SelectStyles";
import { setModalContent } from "../../../redux/slice/serviceSlice";
import { selectModalContent } from "../../../redux/selectors/serviceSelectors";
import getDirtyFieldsValues from "../../../helpers/getDirtyFieldsValues";

import {
  ErrorsContainer,
  ModalAddEditTitle,
  StyledAddEditForm,
  StyledAddEditInputWrapper,
  StyledAddEditInputsWrapper,
  StyledAddEditLabel,
  StyledAddEditTextInput,
} from "../../../commonStyles/commonStyles";

const DisciplineAddEditForm = () => {
  const dataContent = useSelector(selectModalContent);
  const dictionary = useSelector(selectDictionary);
  console.log(dictionary);

  const dispatch = useDispatch();

  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { errors, dirtyFields },
  } = useForm();

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

  const onSubmit = (data) => {
    const dirtyFieldsArray = getDirtyFieldsValues(dirtyFields, getValues);
    if (dataContent.action !== "Edit") {
      transformedData = {
        name: data.name,
        teacher: data.teacher,
        discipline_group: data.discipline_group,
        education_program: { id: data.block.value },
        syllabus_url: data.discipline_url,
        education_plan_url: "http://google.com",
      };
    } else {
      //* Формування request body для Edit
      dirtyFieldsArray.forEach((item) => {
        switch (item.field) {
          case "name":
            transformedData.name = item.value;
            break;
          case "discipline_group":
            transformedData.description = item.value;
            break;
          case "education_program":
            transformedData.block = { id: item.value.value };
            break;
          case "syllabus_url":
            transformedData.discipline_url = item.value;
            break;
          case "education_plan_url":
            transformedData.discipline_url = item.value;
            break;
          default:
            transformedData = {};
        }
      });
    }
  };

  return (
    <>
      <ModalAddEditTitle>{`${actionTitle} інформацію про дисципліну`}</ModalAddEditTitle>
      <StyledAddEditForm onSubmit={handleSubmit(onSubmit)}>
        <StyledAddEditInputsWrapper>
          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Назва дисципліни</StyledAddEditLabel>
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
              name="name"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  // options={[...Array(20)].map((el, index) => ({
                  //   value: index,
                  //   label: index,
                  // }))}
                  placeholder="Оберіть блок дисципліни"
                  styles={selectStyles}
                  sSearchable={true}
                  isClearable={true}
                  maxMenuHeight={145}
                  defaultValue={dataContent.recordDataEdit?.name || null}
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
            <StyledAddEditLabel>Група</StyledAddEditLabel>
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
                  // options={[...Array(20)].map((el, index) => ({
                  //   value: index,
                  //   label: index,
                  // }))}
                  placeholder="Оберіть групу дисципліни"
                  styles={selectStyles}
                  sSearchable={true}
                  isClearable={true}
                  maxMenuHeight={145}
                  defaultValue={dataContent.recordDataEdit?.name || null}
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
            <StyledAddEditLabel>Посилання на сілабус</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                color: "var(--basic-grey)",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Додайте посилання на силабус"
              defaultValue={dataContent.recordDataEdit?.link_standard || null}
              // required
              {...register("link_standard", { required: true, maxLength: 100 })}
            />
          </StyledAddEditInputWrapper>

          {/* ================================= */}

          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>
              Посилання на рабочу програму
            </StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                color: "var(--basic-grey)",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Додайте посилання на робочу програму"
              defaultValue={dataContent.recordDataEdit?.link_standard || null}
              // required
              {...register("link_standard", { required: true, maxLength: 100 })}
            />
          </StyledAddEditInputWrapper>
        </StyledAddEditInputsWrapper>

        <CommonButton buttonType={"submit"}>{actionTitle}</CommonButton>
      </StyledAddEditForm>
    </>
  );
};

export default DisciplineAddEditForm;
