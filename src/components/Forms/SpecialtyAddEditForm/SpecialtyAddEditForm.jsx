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

const SpecialtyAddEditForm = () => {
  const dataContent = useSelector(selectModalContent);
  console.log(dataContent.recordDataEdit);

  const dispatch = useDispatch();

  let actionTitle;

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
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([, value]) => value !== undefined)
    );
    console.log(filteredData);

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
      <ModalAddEditTitle>{`${actionTitle} інформацію про спеціальність`}</ModalAddEditTitle>
      <StyledAddEditForm onSubmit={handleSubmit(onSubmit)}>
        <StyledAddEditInputsWrapper>
          <StyledAddEditInputWrapper>
            <StyledAddEditLabel>Номер cпеціальності</StyledAddEditLabel>
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
                  // options={[...Array(20)].map((el, index) => ({
                  //   value: index,
                  //   label: index,
                  // }))}
                  placeholder="Оберіть номер спеціальності"
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
            <StyledAddEditLabel>Назва cпеціальності</StyledAddEditLabel>
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
                  placeholder="Оберіть назву спеціальності"
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
            <StyledAddEditLabel>Посилання на стандарт</StyledAddEditLabel>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                color: "var(--basic-grey)",
              }}
            />
            <StyledAddEditTextInput
              type="text"
              placeholder="Додайте посилання на стандарт"
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

export default SpecialtyAddEditForm;
