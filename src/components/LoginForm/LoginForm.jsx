import { useState } from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ onSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Ім&apos;я та прізвище:</label>
      <input type="text" id="username" value={username} onChange={handleUsernameChange} />
      <label htmlFor="password">Пароль:</label>
      <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      <button type="submit">Вхід</button>
    </form>
  );
};

LoginForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default LoginForm;
