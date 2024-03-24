import { useSelector } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Table from "../../components/Table/Table";

import { StyledTableWrapper } from "../../commonStyles/commonStyles";
import { tableData } from "../../redux/selectors/mainInfoSelectors";

const SpecialtyPage = () => {
  const specialty = useSelector(tableData);
  const columns = ["Номер", "Назва", "Посилання на стандарт", "Дія"];
  const subtitle = "Перелік спеціальностей";
  const subtext =
    "Спеціальності в ЗВО Харкова та Харківської області, які належать до інформаційних технологій";

  return (
    <>
      <Hero subtitle={subtitle} subtext={subtext} />
      <StyledTableWrapper className="container">
        <Table
          view={"Перелік спеціальностей"}
          data={specialty}
          columns={columns}
        />
      </StyledTableWrapper>
    </>
  );
};

export default SpecialtyPage;
