import { useSelector } from "react-redux";
import { StyledTableWrapper } from "../../commonStyles/commonStyles";
import Table from "../../components/Table/Table";
import { tableData } from "../../redux/selectors/mainInfoSelectors";

const BlockDisciplinesPage = () => {
  const disciplineBlock = useSelector(tableData);
  const columns = ["№", "Назва блоку дисципліни", "Опис", "Дія"];

  return (
    <StyledTableWrapper className="container">
      <Table
        view={"Перелік дисциплін"}
        data={disciplineBlock}
        columns={columns}
      />
    </StyledTableWrapper>
  );
};

export default BlockDisciplinesPage;
