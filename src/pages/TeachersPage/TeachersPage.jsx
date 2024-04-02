import { useDispatch, useSelector } from "react-redux";

import Table from "../../components/Table/Table";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  ImageBottom,
  ImageTop,
  StyledTableWrapper,
} from "../../commonStyles/commonStyles";
import { teacherTableData } from "../../helpers/dataToRender";
import { tableData } from "../../redux/selectors/mainInfoSelectors";
import { selectCurrentPage } from "../../redux/selectors/serviceSelectors";
import { getTableDataThunk } from "../../redux/thunk/mainInfoThunks";
import { SIZE } from "../../service/constant";

const TeachersPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const teachers = useSelector(tableData);
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
    "Ім`я викладача",
    "Посада",
    "Наукова ступінь",
    "ЗВО",
    "Кафедра",
    "Email",
    "Коментарі",
    "Дія",
  ];

  let dataToRender;

  if (Object.prototype.hasOwnProperty.call(teachers, "content")) {
    dataToRender = teacherTableData(columns, teachers.content);
  }

  return (
    <>
      <StyledTableWrapper className="container">
        <ImageTop></ImageTop>

        <Table
          view={"Перелік викладачів"}
          data={dataToRender}
          columns={columns}
        />
        <ImageBottom></ImageBottom>
      </StyledTableWrapper>
    </>
  );
};

export default TeachersPage;
