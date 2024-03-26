import { useSelector } from "react-redux";
import { StyledTableWrapper } from "../../commonStyles/commonStyles";
import Table from "../../components/Table/Table";
import { tableData } from "../../redux/selectors/mainInfoSelectors";
import { ImageBottom, ImageTop } from "../../commonStyles/commonStyles";

const InstitutionPage = () => {
  const institution = useSelector(tableData);
  const columns = [
    "№",
    "ЗВО",
    "Абревіатура",
    "Перелік прогам",
    "Сайт",
    "Дія",
  ];


  return (
    <StyledTableWrapper className="container">
      <ImageTop></ImageTop>
      <StyledTableWrapper className="container">
        <Table view={"Перелік ЗВО"} data={institution} columns={columns} />
      </StyledTableWrapper>
      <ImageBottom></ImageBottom>
    </StyledTableWrapper>
  );
};

export default InstitutionPage;
