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

const InstitutionAddEditForm = () => {
  const dataContent = useSelector(selectModalContent);
  console.log(dataContent.recordDataEdit);

  const dispatch = useDispatch();

  let actionTitle;

  // let defaultData;

  if (dataContent.action === "Add") {
    actionTitle = "Додати";
  } else {
    actionTitle = "Редагувати";
  }

  const {
    register,
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // const transformedData = {
    //   status: data.status.value,
    //   position: data.role.value,
    //   institution: data.university.value,
    // };

    dataContent.action === "Edit"
      ? dispatch(
          setModalContent({
            action: "EditConfirm",
            recordDataEdit: {
              ...dataContent.recordDataEdit,
              ...data,
              // ...transformedData,
            },
          })
        )
      : dispatch(
          setModalContent({
            action: "AddConfirm",
            // editedData: { ...data, ...transformedData },
            editedData: { ...data },
          })
        );
  };
  // console.log(errors);

  return (
    <>
      <ModalAddEditTitle>{`${actionTitle} інформацію про ЗВО`}</ModalAddEditTitle>
      <StyledAddEditForm onSubmit={handleSubmit(onSubmit)}>
        <StyledAddEditInputsWrapper>
          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Назва ЗВО</StyledAddEditLabel>
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
                  placeholder="Оберіть назву ЗВО"
                  styles={selectStyles}
                  isSearchable={true}
                  isClearable={true}
                  maxMenuHeight={150}
                  defaultValue={
                    dataContent.recordDataEdit
                      ? {
                          value: dataContent.recordDataEdit.role,
                          label: dataContent.recordDataEdit.role,
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
            <StyledAddEditLabel>Абревіатура</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                color: "var(--basic-grey)",
              }}
            />
            <Controller
              name="abbr"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  // options={[...Array(20)].map((el, index) => ({
                  //   value: index,
                  //   label: index,
                  // }))}
                  placeholder="Оберіть абревіатуру"
                  styles={selectStyles}
                  isSearchable={true}
                  isClearable={true}
                  maxMenuHeight={150}
                  defaultValue={
                    dataContent.recordDataEdit
                      ? {
                          value: dataContent.recordDataEdit.role,
                          label: dataContent.recordDataEdit.role,
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
            <StyledAddEditLabel>Посилання на сайт ЗВО</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                color: "var(--basic-grey)",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Додайте посилання на сайт ЗВО"
              defaultValue={null}
              // required
              {...register("institutionLink", {
                required: true,
                maxLength: 100,
              })}
            />
          </StyledAddEditInputWrapper>
          {/* ================================= */}
          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Перелік прогамм</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                color: "var(--basic-grey)",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Додайте посилання на перелік прогамм"
              defaultValue={null}
              // required
              {...register("programLink", { required: true, maxLength: 100 })}
            />
          </StyledAddEditInputWrapper>
        </StyledAddEditInputsWrapper>

        <CommonButton buttonType={"submit"}>{actionTitle}</CommonButton>
      </StyledAddEditForm>
    </>
  );
};

export default InstitutionAddEditForm;
