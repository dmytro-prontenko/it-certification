import { Container } from "@mui/material";
import { Subtitle, Title } from "./DepartmentPage.styled";
const DepartmentPage = () => {
  return (
    <>
      <Container maxWidth="xs">
        <div>
          <Title>Перелік кафедер ВНЗ</Title>
        </div>
      </Container>
      <Container maxWidth="sm">
        <div>
          <Subtitle>Перелік кафедр ВНЗ Харкова та Харківської області</Subtitle>
        </div>
      </Container>
    </>
  );
};

export default DepartmentPage;
