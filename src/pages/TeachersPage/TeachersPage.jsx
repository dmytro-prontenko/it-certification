import { useSelector } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Table from "../../components/Table/Table";
import { dataTeachers } from "../../redux/selectors/mainInfoSelectors";
import { StyledWrapper } from "./TeachersPage.styled";

const TeachersPage = () => {
  // const dispatch = useDispatch();
  const teachers = useSelector(dataTeachers);
  const subtitle = "Перелік викладачів ЗВО";
  const subtext = "Перелік викладачів ЗВО Харкова та Харківської області";
  const columns = [
    "Номер",
    "Ім’я викладача Email",
    "Посада",
    "Наукова ступінь",
    "Кафедра",
    "Коментарі",
    "Дія",
  ];

  // useEffect(() => {
  //   dispatch(getTeachersThunk());
  // }, []);

  return (
    <>
      <Hero subtitle={subtitle} subtext={subtext} />

      <StyledWrapper>
        <Table view={"teachers"} data={teachers} columns={columns} />
      </StyledWrapper>
    </>
  );
};

export default TeachersPage;
