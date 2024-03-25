import { useSelector } from "react-redux";

import Table from "../../components/Table/Table";

import { StyledTableWrapper } from "../../commonStyles/commonStyles";
import { tableData } from "../../redux/selectors/mainInfoSelectors";

const SpecialtyPage = () => {
  const specialty = useSelector(tableData);
  const columns = ["Номер", "Назва", "Посилання на стандарт", "Дія"];

  return (
    <>
      <StyledTableWrapper className="container">
        <Table
          view={"Перелік спеціальностей"}
          data={specialty}
          columns={columns}
        />
      </StyledTableWrapper>
    </>
  );
};

export default SpecialtyPage;
