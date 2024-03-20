import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

const LoginModal = ({ open, onClose, onLoginSuccess }) => {
  const handleClose = () => {
    onClose();
  };

  const handleLoginSuccess = () => {
    onLoginSuccess();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <LoginForm onSuccess={handleLoginSuccess} />
    </Modal>
  );
};

LoginModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginModal;