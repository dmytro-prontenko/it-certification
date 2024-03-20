import { useState } from 'react';
import { Container } from '@mui/material';
import NavMenu from '../NavMenu/NavMenu';
import { useSelector, useDispatch } from 'react-redux';
import { setModalStatus, setModalContent } from '../../redux/slice/serviceSlice';
import { setEmptyToken } from '../../redux/slice/authSlice';
import RegistrationModal from '../RegistrationModal/RegistrationModal';

const Header = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(state => state.auth.isSignedIn);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const handleLogout = () => {
    dispatch(setEmptyToken());
    dispatch(setModalStatus(true));
    dispatch(setModalContent('You have been logged out successfully.'));
  };

  const handleOpenRegistrationModal = () => {
    setIsRegistrationModalOpen(true);
  };

  const handleCloseRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  const handleLogin = () => {
    window.location.href = '/login';
  };

  const handleRegisterSuccess = () => {
    handleCloseRegistrationModal();
  };

  return (
    <Container maxWidth="md">
      <header>
        <div>Logo</div>
        <NavMenu />
        <div>
          {isSignedIn && (
            <button onClick={handleLogout}>Logout</button>
          )}
          <button onClick={handleLogin}>Вхід</button>
          <button onClick={handleOpenRegistrationModal}>Реєстрація</button>
          <RegistrationModal open={isRegistrationModalOpen} onClose={handleCloseRegistrationModal} onRegisterSuccess={handleRegisterSuccess} />
        </div>
      </header>
    </Container>
  );
};

export default Header;
