import Table from "../../components/Table/Table";
import {
  ImageBottom,
  StyledTableWrapper,
} from "../../commonStyles/commonStyles";
import { useSelector } from "react-redux";
import { tableData } from "../../redux/selectors/mainInfoSelectors";
import { ImageTop } from "../../commonStyles/commonStyles";

const ProgramsPage = () => {
  const programs = useSelector(tableData);
  const columns = [
    "№",
    "Назва програми",
    "ЗВО",
    "Рівень освіти",
    "Гарант",
    "Кафедра",
    "Програма",
    "Сілабус",
    "Дія",
  ];

  return (
    <>
      <StyledTableWrapper className="container">
        <ImageTop></ImageTop>
        <Table
          view={"Перелік освітніх програм"}
          data={programs}
          columns={columns}
        />
        <ImageBottom></ImageBottom>
      </StyledTableWrapper>
    </>
  );
};

export default ProgramsPage;
