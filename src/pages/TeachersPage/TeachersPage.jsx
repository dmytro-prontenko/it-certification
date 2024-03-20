import { Table } from "@mui/material";
import { StyledWrapper, Subtitle, Title } from "./TeachersPage.styled";
import { useSelector } from "react-redux";
import { dataTeachers } from "../../redux/selectors/mainInfoSelectors";

const TeachersPage = () => {
  const teachers = useSelector(dataTeachers);
  const columns = [
    "Номер",
    "Ім’я викладача Email",
    "Посада",
    "Наукова ступінь",
    "Кафедра",
    "Коментарі",
    "Дія",
  ];
  return (
    <>
      <div>
        <Title>Перелік викладачів ВНЗ</Title>
      </div>
      <div>
        <Subtitle>
          Перелік викладачів ВНЗ Харкова та Харківської області
        </Subtitle>
      </div>
      <StyledWrapper>
        <Table view={"teachers"} data={teachers} columns={columns} />
      </StyledWrapper>
    </>
  );
};

export default TeachersPage;
