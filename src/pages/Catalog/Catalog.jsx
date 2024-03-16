import { Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import {
  StyledCommonTitle,
  StyledTextField,
} from "../../commonStyles/commonStyles";
import Article from "../../components/Article/Article";
import {
  StyledActualInfo,
  StyledActualInfoItem,
  StyledArticlesList,
  StyledCatalogWrapper,
  StyledSearchForm,
} from "./Catalog.styled";

import { format } from "@formkit/tempo";
import sprite from "../../assets/sprite.svg";

const Catalog = () => {
  const {
    // register,
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <StyledCatalogWrapper>
      <StyledCommonTitle>Каталог</StyledCommonTitle>
      <StyledSearchForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field }) => (
            <StyledTextField
              placeholder="Пошук"
              variant="outlined"
              {...field}
            />
          )}
          name="search-query"
          control={control}
          defaultValue=""
          className="materialUIInput"
          type="text"
        />
        <Button variant="outlined" color="secondary" type="submit">
          <svg width="24px" height="24px">
            <use href={`${sprite}#icon-search`}></use>
          </svg>
        </Button>
      </StyledSearchForm>
      <StyledActualInfo>
        <StyledActualInfoItem>Кількість товарів</StyledActualInfoItem>
        <StyledActualInfoItem>
          Інформація станом на {format(new Date(), "short")}
        </StyledActualInfoItem>
      </StyledActualInfo>

      <StyledArticlesList>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
      </StyledArticlesList>
    </StyledCatalogWrapper>
  );
};
export default Catalog;
