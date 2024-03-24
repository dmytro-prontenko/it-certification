import Icon from '../../Icon/Icon';
import { StyledCancelButton } from './CancelButton.styled';

const CancelButton = ({onClick}) => {
  return (
    <StyledCancelButton onClick={onClick}>
      Відмінити
      <Icon
        styles={{ fill: "var( --delete-red)" }}
        width={24}
        height={24}
        iconId={"close"}
      />
    </StyledCancelButton>
  );
}

export default CancelButton
