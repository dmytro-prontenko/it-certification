import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  ImageBottom,
  ImageTop,
  StyledTableWrapper,
} from "../../commonStyles/commonStyles";
import Table from "../../components/Table/Table";
import { educationLevelTableData } from "../../helpers/dataToRender";
import { tableData } from "../../redux/selectors/mainInfoSelectors";
import { selectCurrentPage } from "../../redux/selectors/serviceSelectors";
import { getTableDataThunk } from "../../redux/thunk/mainInfoThunks";
import { SIZE } from "../../service/constant";

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

  let dataToRender;

  if (Object.prototype.hasOwnProperty.call(educationLevel, "content")) {
    dataToRender = educationLevelTableData(columns, educationLevel.content);
  }

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
