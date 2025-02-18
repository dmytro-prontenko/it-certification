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

const BlockDisciplinesPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const disciplineBlock = useSelector(tableData);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(
      getTableDataThunk({
        endPoint: `${location.pathname}`,
        getParams: { page: currentPage, size: SIZE },
      })
    );
  }, []);

  const columns = ["№", "Назва блоку дисципліни", "Опис", "Дія"];

  let dataToRender;

  if (Object.prototype.hasOwnProperty.call(disciplineBlock, "content")) {
    dataToRender = disciplineBlockTableData(columns, disciplineBlock.content);
  }


  return (
    <>
      <StyledTableWrapper className="container">
        <ImageTop />
        <Table
          view={"Перелік блоків дисциплін"}
          data={dataToRender}
          columns={columns}
        />
        <ImageBottom></ImageBottom>
      </StyledTableWrapper>
    </>
  );
};

export default BlockDisciplinesPage;
