import { Container } from "@mui/material";
import { Subtitle, Title } from "./BlocDisciplinesPage.styled";
const BlocDisciplinesPage = () => {
  return (
    <>
      <Container maxWidth="sm">
        <div>
          <Title>Перелік блоку дисциплін ВНЗ</Title>
        </div>
      </Container>
      <Container maxWidth="xs">
        <div>
          <Subtitle>
            Перелік блоку дисциплін ВНЗ Харкова та Харківської області
          </Subtitle>
        </div>
      </Container>
    </>
  );
};

export default BlocDisciplinesPage;
