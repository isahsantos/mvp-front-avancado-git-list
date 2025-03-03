import Axios from "axios";

export async function getReposByUserSorted(username) {
  console.log("Repositorios function => ", username);
  const repos = await Axios.get(`https://api.github.com/users/${username}/repos`);

  if (repos && repos.data) {
    repos.data.sort((a, b) => b.stargazers_count - a.stargazers_count);
  }

  console.log("Repositorios Ordenados => ", repos.data);

  return repos && repos.data;
}

