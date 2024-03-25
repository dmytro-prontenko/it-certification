import { useSelector } from "react-redux";
import { StyledTableWrapper } from "../../commonStyles/commonStyles";
import Table from "../../components/Table/Table";
import { tableData } from "../../redux/selectors/mainInfoSelectors";
import { ImageBottom, ImageTop } from "../../commonStyles/commonStyles";

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
    <>
      <ImageTop></ImageTop>
      <StyledTableWrapper className="container">
      <Table view={"Перелік кафедр"} data={department} columns={columns} />
    </StyledTableWrapper>
      <ImageBottom></ImageBottom>
    </>
  );
};

export default DepartmentPage;
