import { useSelector } from "react-redux";
import { StyledTableWrapper } from "../../commonStyles/commonStyles";
import Table from "../../components/Table/Table";
import { tableData } from "../../redux/selectors/mainInfoSelectors";


const EducationLevelPage = () => {
const educationLevel = useSelector(tableData);
const columns = ["№", "Назва", "Дія"];

return (
  <StyledTableWrapper className="container">
    <Table
      view={"Перелік рівнів освіти"}
      data={educationLevel}
      columns={columns}
    />
  </StyledTableWrapper>
);
};

export default EducationLevelPage;
