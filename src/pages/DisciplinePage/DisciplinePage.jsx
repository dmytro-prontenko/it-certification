import { Container } from "@mui/material";
import { Subtitle, Title } from "./DisciplinePage.styled";
const DisciplinePage = () => {
  return (
    <>
      {/* <Container maxWidth="sm"> */}
      <div>
        <Title>Перелік дисциплін ВНЗ</Title>
      </div>
      {/* </Container> */}
      <Container maxWidth="sm">
        <div>
          <Subtitle>
            Перелік дисциплін ВНЗ Харкова та Харківської області
          </Subtitle>
        </div>
      </Container>
    </>
  );
};

export default DisciplinePage;
