import sprite from "../../assets/sprite.svg";

const PasswordVisible = () => {
  return (
    <>
      {" "}
      <svg width="28px" height="28px">
        <use href={`${sprite}#icon-eye-filled`}></use>
      </svg>
    </>
  );
};

export default PasswordVisible;
