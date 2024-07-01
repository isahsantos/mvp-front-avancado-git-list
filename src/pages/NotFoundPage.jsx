import React from 'react';
import '../assets/styles/not-found-style.css'; 
import { Header } from '../components/Header';
import GradientTitle from '../components/GradientTitle';
import notFoundGif from  '../assets/images/404-ilustracao.gif'
import GradientButton from '../components/GradientButton';
import { useNavigate } from 'react-router-dom';


const NotFoundPage = () => {
   

const navigateTo = useNavigate();

const handleClick = () => {
        navigateTo('');
};

  return (
    <div className='content'>
     <Header />
      <GradientTitle text="Página não encontrada" />
      <div className="not-found-content">
        <h1>404</h1>
        <p>Desculpe, a página que você está procurando não existe.</p>
        <GradientButton onClick={handleClick} text="VOLTAR PARA PÁGINA INICIAL" />
        <div>
        <img  src={notFoundGif} alt="Not Found GIF" width="600" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
