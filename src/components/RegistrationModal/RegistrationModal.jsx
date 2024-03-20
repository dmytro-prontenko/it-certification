import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

export const RegistrationModal = ({ open, onClose, onRegisterSuccess }) => {
  const handleClose = () => {
    onClose();
  };

  const handleRegisterSuccess = () => {
    onRegisterSuccess();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <RegistrationForm onSuccess={handleRegisterSuccess} />
    </Modal>
  );
};

RegistrationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onRegisterSuccess: PropTypes.func.isRequired,
};

export default RegistrationModal;
