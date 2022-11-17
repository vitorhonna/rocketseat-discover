import fetch from 'node-fetch';

async function start() {
    const user = await fetch('https://api.github.com/users/vitorhonna').then((r) => r.json());
    const repos = await fetch(user.repos_url).then((r) => r.json());
    console.log(repos);
}

start().catch((error) => console.log(error));
