import { Table } from "@mui/material";
import { useSelector } from "react-redux";
import { dataTeachers } from "../../redux/selectors/mainInfoSelectors";
import Hero from "../../components/Hero/Hero";

const TeachersPage = () => {
  const subtitle = "Перелік викладачів ЗВО";
  const subtext = "Перелік викладачів ЗВО Харкова та Харківської області";
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
      <Table view={"teachers"} data={teachers} columns={columns} />
      <Hero subtitle={subtitle} subtext={subtext} />

      <StyledWrapper>
        <Table view={"teachers"} data={teachers} columns={columns} />
      </StyledWrapper>
    </>
  );
};

export default TeachersPage;
