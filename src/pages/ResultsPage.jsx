import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RepoCard from '../components/RepoCard';
import { getReposByUserSorted } from '../services/github-user';
import '../assets/styles/results-style.css';
import { Header } from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import GradientTitle from '../components/GradientTitle';
import HomeIcon from '../assets/icons/home.svg';
import SearchResultsIcon from '../assets/icons/search.svg';
import FavoriteButtonImage from '../assets/icons/favorite-button.svg';
import Toast from '../components/Toast';
import checkIcon from '../assets/icons/check.svg';
import warning from '../assets/icons/warning.svg';


const ResultsPage = () => {
  const { username } = useParams();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(5);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastIcon, setToastIcon] = useState('');
  const paths = [
    { name: 'Home', url: '/', icon: HomeIcon },
    { name: 'Resultado de busca', url: '/results', icon: SearchResultsIcon },
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      const fetchedRepos = await getReposByUserSorted(username);
      setRepos(fetchedRepos);
      setLoading(false);
    };

    fetchRepos();
  }, [username]);

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(username)) {
      favorites.push(username);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      openToastFavorite();
    } else {
      setToastMessage('Candidato já está na base de favoritos');
      setToastIcon(warning); 
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const openToastFavorite = () => {
    setToastMessage('Busca adicionada aos favoritos');
    setToastIcon(checkIcon); 
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <Header />
      <Breadcrumb paths={paths} />
      <section>
        <GradientTitle text="Resultado da busca" />
        <div>
          <div className='header'>
            <div className='content-title'>
              <h4>Repositórios de {username}</h4>
              <button className='favorite-button' onClick={handleFavorite}>
                Favoritar busca
                <img width={22} height={22} src={FavoriteButtonImage} alt="Descrição da Imagem" />
              </button>
            </div>

            <Pagination
              reposPerPage={reposPerPage}
              totalRepos={repos.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
          {loading ? (
            <p>Carregando...</p>
          ) : (
            <div>
              {currentRepos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          )}
        </div>
      </section>
      {showToast && <Toast title={toastMessage} icon={toastIcon} />}
    </>
  );
};

const Pagination = ({ reposPerPage, totalRepos, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='page-content'>
      {pageNumbers.map((number) => (
        <div key={number} className="page-item">
          <button
            onClick={() => paginate(number)}
            className={`page-link ${currentPage === number ? 'active' : ''}`}
          >
            {number}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ResultsPage;
