import Axios from "axios";

export async function getUserByUserName(username) {
  console.log("userName function => ", username);
  const response = await Axios.get("https://api.github.com/users/" + username);

  console.log("retorno => ", retorno);

  return response && response.data;
}

export async function getRepoByUser(username) {
  console.log("Repositorios function => ", username);
  const repos = await Axios.get(
    "https://api.github.com/users/" + username + "/repos"
  );

  console.log("Repositorios => ", repos);

  return repos && repos.data;
}


export async function getRepoStarred(username) {
  console.log("Repositorios function => ", username);
  const repos = await Axios.get(
    "https://api.github.com/users/" + username + "/starred"
  );

  console.log("Repositorios => ", repos);

  return repos && repos.data;
}