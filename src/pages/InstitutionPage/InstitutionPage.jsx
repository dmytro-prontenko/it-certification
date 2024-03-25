import { useSelector } from "react-redux";
import { StyledTableWrapper } from "../../commonStyles/commonStyles";
import Table from "../../components/Table/Table";
import { tableData } from "../../redux/selectors/mainInfoSelectors";

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
      <Table view={"Перелік ЗВО"} data={institution} columns={columns} />
    </StyledTableWrapper>
  );
};

export default InstitutionPage;
