import { Table } from "@mui/material";
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
      <Table view={"teachers"} data={teachers} columns={columns} />
    </>
  );
};

export default TeachersPage;
