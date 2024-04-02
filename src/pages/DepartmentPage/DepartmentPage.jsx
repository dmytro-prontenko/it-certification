import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  ImageBottom,
  ImageTop,
  StyledTableWrapper,
} from "../../commonStyles/commonStyles";
import Table from "../../components/Table/Table";
import { departmentTableData } from "../../helpers/dataToRender";
import { tableData } from "../../redux/selectors/mainInfoSelectors";
import { selectCurrentPage } from "../../redux/selectors/serviceSelectors";
import { getTableDataThunk } from "../../redux/thunk/mainInfoThunks";
import { SIZE } from "../../service/constant";

const DepartmentPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const department = useSelector(tableData);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(
      getTableDataThunk({
        endPoint: `${location.pathname}`,
        getParams: { page: currentPage, size: SIZE },
      })
    );
  }, []);

  const columns = [
    "№",
    "Назва кафедри",
    "ЗВО",
    "Опис",
    "Контакт",
    "Кафедра",
    "Дія",
  ];

  let dataToRender;

  if (Object.prototype.hasOwnProperty.call(department, "content")) {
    dataToRender = departmentTableData(columns, department.content);
  }

  return (
    <>
      <StyledTableWrapper className="container">
        <ImageTop></ImageTop>
        <Table view={"Перелік кафедр"} data={dataToRender} columns={columns} />
        <ImageBottom></ImageBottom>
      </StyledTableWrapper>
    </>
  );
};

export default DepartmentPage;
