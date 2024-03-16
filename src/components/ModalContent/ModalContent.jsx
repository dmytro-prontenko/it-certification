import { useSelector } from "react-redux";
import { selectModalContent } from "../../redux/selectors";
import ModalMenu from "../ModalMenu/ModalMenu";
import Cabinet from "../Cabinet/Cabinet";

const ModalContent = () => {
  const modalContent = useSelector(selectModalContent);

  switch (modalContent) {
    case "Modal Menu":
      return <ModalMenu />;
    case "Favorites":
      return <div>Favorites</div>;
    case "Cabinet":
      return <Cabinet />;

    default:
      return null;
  }
};

export default ModalContent;
