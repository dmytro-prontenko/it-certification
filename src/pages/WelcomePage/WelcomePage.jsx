import { useSelector } from "react-redux";
// import { getTeacherThunk } from "../../redux/thunk/mainInfoThunks";
import { dataTeacher } from "../../redux/selectors/mainInfoSelectors";
import Table from "../../components/Table/Table";

const WelcomePage = () => {
  // const dispatch = useDispatch();
  // dispatch(getTeacherThunk());

  const teachers = useSelector(dataTeacher);

  console.log(teachers);

  return (
    <>
      <Table />
    </>
  );
};

export default WelcomePage;
