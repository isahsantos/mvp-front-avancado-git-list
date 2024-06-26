import React from 'react';
import   '../assets/styles/repo-card-style.css';
; 
const RepoCard = ({ repo }) => {
  return (
    <div className="repo-card">
      <h3>{repo.name}</h3>
      <p><strong>Descrição:</strong> {repo.description || "Nenhuma descrição"}</p>
      <p><strong>Site do projeto:</strong> <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.html_url}</a></p>
      <p><strong>Cópias(forks):</strong> {repo.forks_count}</p>
      <p><strong>Estrelas:</strong> {repo.stargazers_count}</p>
      <p><strong>Linguagem:</strong> {repo.language || "Não especificada"}</p>
      <p><strong>Última atualização:</strong> {new Date(repo.updated_at).toLocaleDateString()}</p>
    </div>
  );
};

export default RepoCard;