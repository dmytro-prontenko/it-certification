import { useDispatch, useSelector } from "react-redux";
import {
  ImageBottom,
  StyledTableWrapper,
} from "../../commonStyles/commonStyles";
import Table from "../../components/Table/Table";
import { tableData } from "../../redux/selectors/mainInfoSelectors";
import { ImageTop } from "../../commonStyles/commonStyles";
import { useLocation } from "react-router-dom";
import { selectCurrentPage } from "../../redux/selectors/serviceSelectors";
import { useEffect } from "react";
import { getTableDataThunk } from "../../redux/thunk/mainInfoThunks";
import { SIZE } from "../../service/constant";
import { departmentTableData } from "../../helpers/dataToRender";

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

  const dataToRender = departmentTableData(columns, department.content);

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
