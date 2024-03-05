import React, { useState } from 'react';
import axios from 'axios';
import CustomModal from './Modal';

const Login = () => {
  const [username, setUsername] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/login', { username, password });
      setModalContent('Algo generation successful');
      setShowModal(true);
    } catch (error) {
      setModalContent('Algo generation failed failed: ' + error.response.data);
      setShowModal(true);
    }
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <CustomModal showModal={showModal} handleClose={handleClose} title="Login Status" children={modalContent} />
      <form onSubmit={handleLogin}>
        <label>
          Prompt:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
          <button type="submit">Algo Generation</button>
      </form>
    </>
  );
};

export default Login;
