import Table from "../../components/Table/Table";
import {
  ImageBottom,
  StyledTableWrapper,
} from "../../commonStyles/commonStyles";
import { useDispatch, useSelector } from "react-redux";
import { tableData } from "../../redux/selectors/mainInfoSelectors";
import { ImageTop } from "../../commonStyles/commonStyles";
import { useLocation } from "react-router-dom";
import { selectCurrentPage } from "../../redux/selectors/serviceSelectors";
import { useEffect } from "react";
import { getTableDataThunk } from "../../redux/thunk/mainInfoThunks";
import { SIZE } from "../../service/constant";
import { programsTableData } from "../../helpers/dataToRender";

const ProgramsPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const programs = useSelector(tableData);
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
    "Код",
    "Назва програми",
    "ЗВО",
    "Рівень освіти",
    "Гарант",
    "Кафедра",
    "Програма",
    "Сілабус",
    "Дія",
  ];

  const dataToRender = programsTableData(columns, programs.content);

  return (
    <>
      <StyledTableWrapper className="container">
        <ImageTop></ImageTop>
        <Table
          view={"Перелік освітніх програм"}
          data={dataToRender}
          columns={columns}
        />
        <ImageBottom></ImageBottom>
      </StyledTableWrapper>
    </>
  );
};

export default ProgramsPage;
