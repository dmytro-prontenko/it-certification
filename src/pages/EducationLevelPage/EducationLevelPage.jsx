import { useDispatch, useSelector } from "react-redux";
import {
  ImageBottom,
  ImageTop,
  StyledTableWrapper,
} from "../../commonStyles/commonStyles";
import Table from "../../components/Table/Table";
import { tableData } from "../../redux/selectors/mainInfoSelectors";
import { useLocation } from "react-router-dom";
import { selectCurrentPage } from "../../redux/selectors/serviceSelectors";
import { useEffect } from "react";
import { getTableDataThunk } from "../../redux/thunk/mainInfoThunks";
import { SIZE } from "../../service/constant";
import { educationLevelTableData } from "../../helpers/dataToRender";

const EducationLevelPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const educationLevel = useSelector(tableData);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(
      getTableDataThunk({
        endPoint: `${location.pathname}`,
        getParams: { page: currentPage, size: SIZE },
      })
    );
  }, []);

  const columns = ["№", "Рівень", "Назва", "Дія"];

  const dataToRender = educationLevelTableData(columns, educationLevel.content);

  return (
    <>
      <StyledTableWrapper className="container">
        <ImageTop />
        <Table
          view={"Перелік рівнів освіти"}
          data={dataToRender}
          columns={columns}
        />
        <ImageBottom></ImageBottom>
      </StyledTableWrapper>
    </>
  );
};

export default EducationLevelPage;
