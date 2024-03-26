import { useSelector } from "react-redux";
import {
  ImageBottom,
  ImageTop,
  StyledTableWrapper,
} from "../../commonStyles/commonStyles";
import Table from "../../components/Table/Table";
import { tableData } from "../../redux/selectors/mainInfoSelectors";

const EducationLevelPage = () => {
  const educationLevel = useSelector(tableData);
  const columns = ["№", "Назва", "Дія"];

  return (

      <StyledTableWrapper className="container">
      <ImageTop />
        <Table
          view={"Перелік рівнів освіти"}
          data={educationLevel}
          columns={columns}
        />
      <ImageBottom />
      </StyledTableWrapper>

  );
};

export default EducationLevelPage;
