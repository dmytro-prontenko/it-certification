import sprite from "../../assets/sprite.svg";

const PasswordHidden = () => {
  return (
    <>
      <svg width="28px" height="28px">
        <use href={`${sprite}#icon-eye`}></use>
      </svg>
    </>
  );
}

export default PasswordHidden
