import { useSelector } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Table from "../../components/Table/Table";
import { dataSpecialty } from "../../redux/selectors/mainInfoSelectors";
import { StyledTableWrapper } from "../../commonStyles/commonStyles";

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

      <StyledTableWrapper className="container">
        <Table view={"Перелік спеціальностей"} data={specialty} columns={columns} />
      </StyledTableWrapper>
    </>
  );
};

export default SpecialtyPage;
