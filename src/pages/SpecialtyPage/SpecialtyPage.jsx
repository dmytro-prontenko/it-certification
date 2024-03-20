import { useSelector } from "react-redux";
import Table from "../../components/Table/Table";
import { dataSpecialty } from "../../redux/selectors/mainInfoSelectors";

const SpecialtyPage = () => {
  const specialty = useSelector(dataSpecialty);
  const columns = ["Номер", "Назва", "Посилання на стандарт", "Дія"];

  return (
    <>
      <Table view={"specialty"} data={specialty} columns={columns} />
    </>
  );
};

export default SpecialtyPage;
