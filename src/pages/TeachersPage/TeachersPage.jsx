import { useSelector } from "react-redux";

import Table from "../../components/Table/Table";

import {
  ImageBottom,
  ImageTop,
  StyledTableWrapper,
} from "../../commonStyles/commonStyles";
import { tableData } from "../../redux/selectors/mainInfoSelectors";

const TeachersPage = () => {
  // const dispatch = useDispatch();
  const teachers = useSelector(tableData);

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
    <>
      <StyledTableWrapper className="container">
        <ImageTop></ImageTop>
        <Table view={"Перелік викладачів"} data={teachers} columns={columns} />
      </StyledTableWrapper>
      <ImageBottom></ImageBottom>
    </>
  );
};

export default TeachersPage;
