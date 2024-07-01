import React, { useState, useEffect } from 'react';
import UploadCV from '../components/UploadCV';
import '../assets/styles/favorite-style.css';
import { Header } from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import GradientTitle from '../components/GradientTitle';
import HomeIcon from '../assets/icons/home.svg';
import FavoritesIcon from '../assets/icons/favorite.svg';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  
  const paths = [
    { name: 'Home', url: '/', icon: HomeIcon },
    { name: 'Favoritos', url: '/favorites', icon: FavoritesIcon }
  ];

  useEffect(() => {
    const fetchFavorites = () => {
      const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(favoritesFromStorage);
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      <Header />
      <Breadcrumb paths={paths} />
      <GradientTitle text="Candidatos favoritos" />
      {favorites.length === 0 ? (
        <p>Nenhum favorito adicionado ainda.</p>
      ) : (
        favorites.map((favorite) => (
          <section key={favorite.username}>
            <div className='card-favorite'>
              <span>Nome: {favorite.username}</span>
              <div>
                <p>
                  <span>Quantidade de repositórios: {favorite.reposCount}</span>
                </p>
              </div>
              <div>
                <p>
                  Url do perfil: <a href={favorite.url} target="_blank" rel="noopener noreferrer">{favorite.url}</a>
                </p>
              </div>
            </div>
          </section>
        ))
      )}
    </div>
  );
};

export default FavoritesPage;
