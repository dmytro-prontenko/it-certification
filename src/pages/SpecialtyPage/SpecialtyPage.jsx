import { useSelector } from "react-redux";

import Table from "../../components/Table/Table";

import {
  ImageBottom,
  ImageTop,
  StyledTableWrapper,
} from "../../commonStyles/commonStyles";
import { tableData } from "../../redux/selectors/mainInfoSelectors";

const SpecialtyPage = () => {
  const specialty = useSelector(tableData);
  const columns = ["Номер", "Назва", "Посилання на стандарт", "Дія"];

  return (
    <>
      <StyledTableWrapper className="container">
        <ImageTop></ImageTop>
        <Table
          view={"Перелік спеціальностей"}
          data={specialty}
          columns={columns}
        />
        <ImageBottom></ImageBottom>
      </StyledTableWrapper>
    </>
  );
};

export default SpecialtyPage;
