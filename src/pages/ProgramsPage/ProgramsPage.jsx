import Table from "../../components/Table/Table";
import { StyledTableWrapper } from "../../commonStyles/commonStyles";
import { useSelector } from "react-redux";
import { tableData } from "../../redux/selectors/mainInfoSelectors";

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
    <StyledTableWrapper className="container">
      <Table
        view={"Перелік освітніх програм"}
        data={programs}
        columns={columns}
      />
    </StyledTableWrapper>
  );
};

export default ProgramsPage;
