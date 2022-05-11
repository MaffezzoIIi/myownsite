import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Hello World!</h1>
      <button onClick={() => navigate('/apps/calculator')}>
        Calculadora
      </button>
    </>
  );
};

export default Home;
