import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RepoCard from '../components/RepoCard';
import { getReposByUserSorted } from '../services/github-user'; 
import  '../assets/styles/results-style.css';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import GradientTitle from '../components/GradientTitle';
import HomeIcon from '../assets/icons/home.svg';
import FavoritesIcon from '../assets/icons/favorite.svg';
import SearchResultsIcon from '../assets/icons/search.svg';

const ResultsPage = () => {

  const { username } = useParams();

  const [repos, setRepos] = useState([]);

  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const [reposPerPage] = useState(5); 

  const paths = [
    { name: 'Home', url: '/', icon: HomeIcon },
    { name: 'Resultado de busca', url: '/resul', icon: SearchResultsIcon },
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
    }
  };

  return (
    <>
     <Header></Header>
     <Breadcrumb paths={paths} />
    <section>
      <GradientTitle text="Resultado da busca"></GradientTitle>
       <div>
        <div className='header'>
        <h4>Repositórios de {username}</h4>
        <button onClick={handleFavorite}>Favoritar</button>
        <Pagination
            reposPerPage={reposPerPage}
            totalRepos={repos.length}
            paginate={paginate}
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
    </>
   
   
  );
};

const Pagination = ({ reposPerPage, totalRepos, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='page-content'>
        {pageNumbers.map((number) => (
          <div key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </div>
        ))}
    </div>
  );
};
export default ResultsPage;
