import React, { useState, useEffect } from 'react';
import UploadCV from '../components/UploadCV';
import '../assets/styles/favorite-style.css'
import { Header } from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import GradientTitle from '../components/GradientTitle';
import HomeIcon from '../assets/icons/home.svg';
import FavoritesIcon from '../assets/icons/favorite.svg';
import SearchResultsIcon from '../assets/icons/search.svg';

const FavoritesPage =() => {
    const [favorites, setFavorites] = useState([]);
    
    const paths = [
        { name: 'Home', url: '/', icon: HomeIcon },
        { name: 'Favoritos', url: '/results', icon: FavoritesIcon }
      ];


    useEffect(() => {
      const fetchFavorites = () => {
        const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(favoritesFromStorage);
      };
  
      fetchFavorites();
    }, []);
  
    const openPdf = (username) => {
      const pdfs = JSON.parse(localStorage.getItem('pdfs')) || {};
      const pdfFileName = pdfs[username];
      if (pdfFileName) {
        const pdfUrl = `/pdfs/${encodeURIComponent(pdfFileName)}`;
        window.open(pdfUrl, '_blank');
      }
    };
  
    return (
      <div>
        <Header></Header>
        <Breadcrumb paths={paths} />
        <GradientTitle text="Candidatos favoritos"></GradientTitle>
        {favorites.map((username) => (
            <>
            <section>
            <div key={username}>
                <span>Nome: {username} </span>
            <UploadCV username={username} />
            <div>
            <p>
              <span>Arquivo do curriculo:</span>{' '}
              <span style={{ cursor: 'pointer', color: 'blue' }} onClick={() => openPdf(username)}>
                {username}'s CV.pdf
              </span>
            </p>
            </div>
          
            <hr />
          </div>
            </section>
            </>
      
        ))}
      </div>
    );
  };
  export default FavoritesPage;
