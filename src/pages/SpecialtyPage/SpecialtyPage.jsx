import { useSelector } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Table from "../../components/Table/Table";
import { dataSpecialty } from "../../redux/selectors/mainInfoSelectors";

const SpecialtyPage = () => {
  // const dispatch = useDispatch();
  const specialty = useSelector(dataSpecialty);
  const columns = ["Номер", "Назва", "Посилання на стандарт", "Дія"];
  const subtitle = "Перелік спеціальностей";
  const subtext =
    "Спеціальності в ЗВО Харкова та Харківської області, які належать до інформаційних технологій";

  // useEffect(() => {
  //   dispatch(getSpecialtyThunk());
  // }, []);

  return (
    <>
      <Hero subtitle={subtitle} subtext={subtext} />
      <Table view={"specialty"} data={specialty} columns={columns} />
    </>
  );
};

export default SpecialtyPage;
