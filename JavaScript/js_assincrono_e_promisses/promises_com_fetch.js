import fetch from 'node-fetch';

fetch('https://api.github.com/users/vitorhonna')
    .then((response) => response.json())
    .then((data) => fetch(data.repos_url))
    .then((r) => r.json())
    .then((d) => console.log(d))
    .catch((error) => console.log(error));
