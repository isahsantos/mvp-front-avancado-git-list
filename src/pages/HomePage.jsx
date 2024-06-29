import React, { useState } from 'react';
import CustomCardComponent from '../components/CustomCard';
import anotherImage from '../assets/images/filter-banner.svg';
import favoriteImage from '../assets/icons/favorite-folder.svg'
import GradientButton from '../components/GradientButton';
import GradientInput from '../components/InputGradient';
import '../assets/styles/home-style.css';
import RepoCard from '../components/RepoCard';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { Header } from '../components/Header';
import GradientTitle from '../components/GradientTitle';
import HomeIcon from '../assets/icons/home.svg';
import FavoritesIcon from '../assets/icons/favorite.svg';
import SearchResultsIcon from '../assets/icons/search.svg';


const HomePage = () => {

  const [inputValue, setInputValue] = useState('');

  const [repos, setRepos] = useState([]);

  const paths = [
    { name: 'Home', url: '/', icon: HomeIcon },
  ];


  const navigateTo = useNavigate();


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    navigateTo(`/results/${inputValue}`);
  };

  const handleClickCard = () => {
    navigateTo(`/favorites`);
  };
  
  return (
    <>
      <Header></Header>
      <Breadcrumb paths={paths} />

      <section>
        <GradientTitle text="Busque por um cadidato"></GradientTitle>
        <CustomCardComponent
          title="Encontre o portifólio do candidato desjado"
          text="De maneira simples, sem toda a complexidade do github, acesse as informações do candidato que você escolheu "
          image={anotherImage}
        />
        <div className="container">
          <div className="text">
            <p>Para buscar um candidato:</p>
            <ol>
              <li>verifique a url do perfil do github - exemplo: <a href="https://github.com/isahsantos" target="_blank" rel="noopener noreferrer">https://github.com/isahsantos</a></li>
              <li>insira o nome perfil do candidato - exemplo: isahsantos</li>
            </ol>
          </div>
          <div className='content-form'>
          <GradientInput
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Digite o nome do perfil"
          />
          <GradientButton onClick={handleClick} text="BUSCAR" />
          </div>
     

        </div>
        <div>
          {repos && repos.length > 0 ? (
            repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)
          ) : (
            <p></p>
          )}
        </div>
        <CustomCardComponent
          title="Acesse seus candidatos favoritos."
          text="Veja os candidatos favoritados aqui.  "
          image={favoriteImage}
          onClick={handleClickCard}

        />
      </section>
    </>

  );
};

export default HomePage;
