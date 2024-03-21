import { useSelector } from "react-redux";
import Table from "../../components/Table/Table";
import { dataSpecialty } from "../../redux/selectors/mainInfoSelectors";
import Hero from "../../components/Hero/Hero";

const SpecialtyPage = () => {
  const specialty = useSelector(dataSpecialty);
  const columns = ["Номер", "Назва", "Посилання на стандарт", "Дія"];
  const subtitle = "Перелік спеціальностей";
  const subtext =
    "Спеціальності в ЗВО Харкова та Харківської області, які належать до інформаційних технологій";

  return (
    <>
      <Hero subtitle={subtitle} subtext={subtext} />
      <Table view={"specialty"} data={specialty} columns={columns} />
    </>
  );
};

export default SpecialtyPage;
