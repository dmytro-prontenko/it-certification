import { useSelector } from "react-redux";
import { StyledTableWrapper } from "../../commonStyles/commonStyles";
import Table from "../../components/Table/Table";
import { tableData } from "../../redux/selectors/mainInfoSelectors";
import { ImageBottom, ImageTop } from "../../commonStyles/commonStyles";

const GroupDisPage = () => {
const disciplineGroup = useSelector(tableData);
const columns = ["№", "Група дисциплін", "Опис","Блок", "Дисципліни", "Дія"];

  return (
    <>
      <ImageTop></ImageTop>
        <StyledTableWrapper className="container">
    <Table
      view={"Перелік груп дисциплін"}
      data={disciplineGroup}
      columns={columns}
    />
  </StyledTableWrapper>
      <ImageBottom></ImageBottom>
    </>
  );
};

export default GroupDisPage;
