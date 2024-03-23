import { useSelector } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Table from "../../components/Table/Table";

import { StyledWrapper } from "../../components/Table/Table.styled";
import { tableData } from "../../redux/selectors/mainInfoSelectors";

const TeachersPage = () => {
  // const dispatch = useDispatch();
  const teachers = useSelector(tableData);
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

  return (
    <div>
      <Table view={"teachers"} data={teachers} columns={columns} />
      <Hero subtitle={subtitle} subtext={subtext} />

      <StyledWrapper className="container">
        <Table view={"Перелік викладачів"} data={teachers} columns={columns} />
      </StyledWrapper>
    </div>
  );
};

export default TeachersPage;
