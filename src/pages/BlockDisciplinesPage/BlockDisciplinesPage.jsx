import { useSelector } from "react-redux";
import { ImageBottom, ImageTop, StyledTableWrapper } from "../../commonStyles/commonStyles";
import Table from "../../components/Table/Table";
import { tableData } from "../../redux/selectors/mainInfoSelectors";

const BlockDisciplinesPage = () => {
  const disciplineBlock = useSelector(tableData);
  const columns = ["№", "Назва блоку дисципліни", "Опис", "Дія"];

  return (
    <>
      <ImageTop/>
      <StyledTableWrapper className="container">
        <Table
          view={"Перелік блоків дисциплін"}
          data={disciplineBlock}
          columns={columns}
        />
      </StyledTableWrapper>
      <ImageBottom/>
    </>
  );
};

export default BlockDisciplinesPage;
