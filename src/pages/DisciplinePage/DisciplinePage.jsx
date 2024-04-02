import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  ImageBottom,
  ImageTop,
  StyledTableWrapper,
} from "../../commonStyles/commonStyles";
import Table from "../../components/Table/Table";
import { disciplineBlockTableData } from "../../helpers/dataToRender";
import { tableData } from "../../redux/selectors/mainInfoSelectors";
import { selectCurrentPage } from "../../redux/selectors/serviceSelectors";
import { getTableDataThunk } from "../../redux/thunk/mainInfoThunks";
import { SIZE } from "../../service/constant";

const DisciplinePage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const discipline = useSelector(tableData);
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
    "Дисципліна",
    "Викладач",
    "Блок",
    "Група",
    "Програма",
    "Сілабус",
    "РП",
    "Дія",
  ];

  let dataToRender;

  if (Object.prototype.hasOwnProperty.call(discipline, "content")) {
    dataToRender = disciplineBlockTableData(columns, discipline.content);
  }

  return (
    <>
      <StyledTableWrapper className="container">
        <ImageTop></ImageTop>
        <Table
          view={"Перелік дисциплін"}
          data={dataToRender}
          columns={columns}
        />
        <ImageBottom></ImageBottom>
      </StyledTableWrapper>
    </>
  );
};

export default DisciplinePage;
