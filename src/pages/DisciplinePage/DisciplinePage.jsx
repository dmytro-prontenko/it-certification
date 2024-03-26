import { useSelector } from "react-redux";
import { StyledTableWrapper } from "../../commonStyles/commonStyles";
import Table from "../../components/Table/Table";
import { tableData } from "../../redux/selectors/mainInfoSelectors";
import { ImageBottom, ImageTop } from "../../commonStyles/commonStyles";

const DisciplinePage = () => {
  const discipline= useSelector(tableData);
  const columns = [
    "№",
    "Дисципліна",
    "Викладач",
    "Блок",
    "Група",
    "Програма",
    "Сілабус",
    "РП",
    "Дія",
  ];

  return (

          <StyledTableWrapper className="container">
      <ImageTop></ImageTop>
      <Table
        view={"Перелік дисциплін"}
        data={discipline}
        columns={columns}
      />
      <ImageBottom></ImageBottom>
    </StyledTableWrapper>

  );
};

export default DisciplinePage;
