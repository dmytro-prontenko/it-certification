import sprite from "../../assets/it-sertification.svg";

const Icon = ({ styles, width, height, iconId }) => {
  return (
    <svg style={styles} width={width} height={height}>
      <use href={`${sprite}#${iconId}`}></use>
    </svg>
  );
};

Icon.propTypes;

export default Icon;
