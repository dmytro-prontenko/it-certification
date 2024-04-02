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
import { universityTableData } from "../../helpers/dataToRender";

const UniversityPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const university = useSelector(tableData);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(
      getTableDataThunk({
        endPoint: `${location.pathname}`,
        getParams: { page: currentPage, size: SIZE },
      })
    );
  }, []);

  const columns = ["№", "ЗВО", "Абревіатура", "Перелік програм", "Сайт", "Дія"];

  const dataToRender = universityTableData(columns, university.content);

  return (
    <>
      <StyledTableWrapper className="container">
        <ImageTop></ImageTop>
        <Table view={"Перелік ЗВО"} data={dataToRender} columns={columns} />
        <ImageBottom></ImageBottom>
      </StyledTableWrapper>
    </>
  );
};

export default UniversityPage;
