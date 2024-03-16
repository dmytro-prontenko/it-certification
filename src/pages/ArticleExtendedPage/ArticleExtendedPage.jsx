import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import BothEyesForm from "../../components/Forms/BothEyesForm/BothEyesForm";
import SameEyesForm from "../../components/Forms/SameEyesForm/SameEyesForm";
import { StyledNavLinkBackWrapper } from "../Profile/Profile.styled";
import {
  StyledCheckboxWrapper,
  StyledDescriptonWparrer,
  StyledOrderParamsWrapper,
  StyledServiceItem,
  StyledServicesList,
  StyledServicesWrapper,
  StyledWrapper,
} from "./ArticleExtendedPage.styled";

import sprite from "../../assets/sprite.svg";
import {
  StyledBackSpan,
  StyledBoldSpan,
  StyledCommonText,
  StyledCommonTitleH2,
} from "../../commonStyles/commonStyles";

const ArticleExtendedPage = () => {
  const [sameEyes, SetSameEyes] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const location = useLocation();
  const goBackRef = useRef(location.state?.from || "/");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSameEyes = () => {
    SetSameEyes(!sameEyes);
  };

  return (
    <StyledWrapper>
      <NavLink to={goBackRef.current} type="button">
        <StyledNavLinkBackWrapper>
          <svg width="24px" height="24px">
            <use href={`${sprite}#icon-back`}></use>
          </svg>
          <StyledBackSpan>Повернутися</StyledBackSpan>
        </StyledNavLinkBackWrapper>
      </NavLink>

      <StyledOrderParamsWrapper>
        <StyledCheckboxWrapper>
          <StyledCommonTitleH2>Введіть свої параметри</StyledCommonTitleH2>
          <FormControlLabel
            control={
              <Checkbox
                onClick={handleSameEyes}
                defaultChecked
                sx={{
                  color: "black",
                  fontSize: 14,
                  fontWeight: 300,
                  "&.Mui-checked": {
                    color: "black",
                  },
                }}
              />
            }
            label={
              <Typography
                variant="body1"
                color="textSecondary"
                fontWeight={"fontWeightLight"}
              >
                У мене однакові очі
              </Typography>
            }
          />
        </StyledCheckboxWrapper>
      </StyledOrderParamsWrapper>
      {sameEyes ? <SameEyesForm /> : <BothEyesForm />}

      <StyledServicesWrapper>
        <StyledServicesList>
          <StyledServiceItem>
            <div>
              <svg width="24px" height="24px">
                <use href={`${sprite}#icon-card`}></use>
              </svg>
            </div>
            <StyledCommonText>
              Оплата готівкою та безготівковим платежем
            </StyledCommonText>
          </StyledServiceItem>
          <StyledServiceItem>
            <div>
              <svg width="24px" height="24px">
                <use href={`${sprite}#icon-box`}></use>
              </svg>
            </div>
            <StyledCommonText>
              Відправляємо товар 5 днів на тиждень
            </StyledCommonText>
          </StyledServiceItem>
          <StyledServiceItem>
            <div>
              <svg width="24px" height="24px">
                <use href={`${sprite}#icon-truck`}></use>
              </svg>
            </div>
            <StyledCommonText>
              Доставка здійснюється сервісом &quot;Нова пошта&quot;
            </StyledCommonText>
          </StyledServiceItem>
        </StyledServicesList>
      </StyledServicesWrapper>

      <StyledDescriptonWparrer>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={
              <div>
                <svg width="16" height="16">
                  <use href={`${sprite}#icon-check-selector`}></use>
                </svg>
              </div>
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Характеристики
          </AccordionSummary>
          <AccordionDetails>
            <StyledCommonText>
              <StyledBoldSpan>Режим заміни</StyledBoldSpan> - місяць <br />
              <StyledBoldSpan>Діаметр</StyledBoldSpan> - 14.5 <br />
              <StyledBoldSpan>Тип лінзи</StyledBoldSpan> - торичні <br />
              <StyledBoldSpan>Вологомісткість, %</StyledBoldSpan> - 48 <br />
              <StyledBoldSpan>Киснепроникність</StyledBoldSpan>,{" "}
              <StyledBoldSpan>Dk/t</StyledBoldSpan> - 116 <br />
              <StyledBoldSpan>Матеріал</StyledBoldSpan> - силікон-гідрогель
              (Comfilcon a) <br />
              <StyledBoldSpan>Виробник</StyledBoldSpan> - COOPER VISION
            </StyledCommonText>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={
              <div>
                <svg width="16" height="16">
                  <use href={`${sprite}#icon-check-selector`}></use>
                </svg>
              </div>
            }
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Опис
          </AccordionSummary>
          <AccordionDetails>
            <StyledCommonText>
              <StyledBoldSpan>Biofinity Toric</StyledBoldSpan> — це сучасні
              контактні лінзи для корекції астигматизму. Вони мають
              вдосконалений дизайн, який забезпечує їх правильну орієнтацію і
              стабільну посадку. Лінзи відрізняються високим вмістом вологи,
              низьким модулем пружності і хорошою кисневою проникністю.
              Контактні лінзи Biofinity Toric розраховані на 1 місяць носіння в
              денному режимі або 2 тижні — в пролонгованому.
            </StyledCommonText>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={
              <div>
                <svg width="16" height="16">
                  <use href={`${sprite}#icon-check-selector`}></use>
                </svg>
              </div>
            }
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Відгуки
          </AccordionSummary>
          <AccordionDetails>
            <StyledCommonText>Поки відгуків немає</StyledCommonText>
          </AccordionDetails>
          <AccordionActions></AccordionActions>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={
              <div>
                <svg width="16" height="16">
                  <use href={`${sprite}#icon-check-selector`}></use>
                </svg>
              </div>
            }
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Питання та відповіді
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
          <AccordionActions></AccordionActions>
        </Accordion>
      </StyledDescriptonWparrer>
    </StyledWrapper>
  );
};

export default ArticleExtendedPage;
