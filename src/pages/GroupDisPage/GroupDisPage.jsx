import { useDispatch, useSelector } from "react-redux";
import { StyledTableWrapper } from "../../commonStyles/commonStyles";
import Table from "../../components/Table/Table";
import { tableData } from "../../redux/selectors/mainInfoSelectors";
import { ImageBottom, ImageTop } from "../../commonStyles/commonStyles";
import { useLocation } from "react-router-dom";
import { selectCurrentPage } from "../../redux/selectors/serviceSelectors";
import { useEffect } from "react";
import { getTableDataThunk } from "../../redux/thunk/mainInfoThunks";
import { SIZE } from "../../service/constant";
import { disciplineGroupLevelTableData } from "../../helpers/dataToRender";

const GroupDisPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const disciplineGroup = useSelector(tableData);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(
      getTableDataThunk({
        endPoint: `${location.pathname}`,
        getParams: { page: currentPage, size: SIZE },
      })
    );
  }, []);

  const columns = ["№", "Група дисциплін", "Опис", "Блок", "Дисципліни", "Дія"];

  const dataToRender = disciplineGroupLevelTableData(
    columns,
    disciplineGroup.content
  );

  return (
    <>
      <StyledTableWrapper className="container">
        <ImageTop></ImageTop>
        <Table
          view={"Перелік груп дисциплін"}
          data={dataToRender}
          columns={columns}
        />
        <ImageBottom></ImageBottom>
      </StyledTableWrapper>
    </>
  );
};

export default GroupDisPage;
