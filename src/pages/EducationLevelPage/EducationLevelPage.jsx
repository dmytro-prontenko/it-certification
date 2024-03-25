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
    <>
      <ImageTop />
      <StyledTableWrapper className="container">
        <Table
          view={"Перелік рівнів освіти"}
          data={educationLevel}
          columns={columns}
        />
      </StyledTableWrapper>
      <ImageBottom />
    </>
  );
};

export default EducationLevelPage;
