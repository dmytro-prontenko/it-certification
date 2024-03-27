import { useSelector } from "react-redux";
import {
  ImageBottom,
  StyledTableWrapper,
} from "../../commonStyles/commonStyles";
import Table from "../../components/Table/Table";
import { tableData } from "../../redux/selectors/mainInfoSelectors";
import { ImageTop } from "../../commonStyles/commonStyles";

const InstitutionPage = () => {
  const institution = useSelector(tableData);
  const columns = ["№", "ЗВО", "Абревіатура", "Перелік прогам", "Сайт", "Дія"];

  return (
    <>
      <StyledTableWrapper className="container">
        <ImageTop></ImageTop>
        <Table view={"Перелік ЗВО"} data={institution} columns={columns} />
        <ImageBottom></ImageBottom>
      </StyledTableWrapper>
    </>
  );
};

export default InstitutionPage;
