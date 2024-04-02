import { useDispatch, useSelector } from "react-redux";

import Table from "../../components/Table/Table";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  ImageBottom,
  ImageTop,
  StyledTableWrapper,
} from "../../commonStyles/commonStyles";
import { specialtyTableData } from "../../helpers/dataToRender";
import { tableData } from "../../redux/selectors/mainInfoSelectors";
import { selectCurrentPage } from "../../redux/selectors/serviceSelectors";
import { getTableDataThunk } from "../../redux/thunk/mainInfoThunks";
import { SIZE } from "../../service/constant";

const SpecialtyPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const specialty = useSelector(tableData);
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
    "Номер",
    "Назва",
    "Код спеціальності",
    "Посилання на стандарт",
    "Дія",
  ];

  let dataToRender;

  if (Object.prototype.hasOwnProperty.call(specialty, "content")) {
    dataToRender = specialtyTableData(columns, specialty.content);
  }

  return (
    <>
      <StyledTableWrapper className="container">
        <ImageTop></ImageTop>
        <Table
          view={"Перелік спеціальностей"}
          data={dataToRender}
          columns={columns}
        />
        <ImageBottom></ImageBottom>
      </StyledTableWrapper>
    </>
  );
};

export default SpecialtyPage;
