import { useSelector } from "react-redux";
import { StyledTableWrapper } from "../../commonStyles/commonStyles";
import Table from "../../components/Table/Table";
import { tableData } from "../../redux/selectors/mainInfoSelectors";

const DepartmentPage = () => {
  const department = useSelector(tableData);
  const columns = [
    "№",
    "Назва кафедри",
    "ЗВО",
    "Опис",
    "Контакт",
    "Кафедра",
    "Дія",
  ];

  return (
    <StyledTableWrapper className="container">
      <Table view={"Перелік кафедр"} data={department} columns={columns} />
    </StyledTableWrapper>
  );
};

export default DepartmentPage;
