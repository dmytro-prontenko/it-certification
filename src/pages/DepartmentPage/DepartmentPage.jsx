import { useSelector } from "react-redux";
import {
  ImageBottom,
  StyledTableWrapper,
} from "../../commonStyles/commonStyles";
import Table from "../../components/Table/Table";
import { tableData } from "../../redux/selectors/mainInfoSelectors";
import { ImageTop } from "../../commonStyles/commonStyles";

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
      <StyledTableWrapper className="container">
        <ImageTop></ImageTop>
        <Table view={"Перелік кафедр"} data={department} columns={columns} />
        <ImageBottom></ImageBottom>
      </StyledTableWrapper>
    </>
  );
};

export default DepartmentPage;
