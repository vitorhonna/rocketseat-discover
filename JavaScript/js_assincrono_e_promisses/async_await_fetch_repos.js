import fetch from 'node-fetch';

async function start() {
    try {
        const response = await fetch('https://api.github.com/users/vitorhonna');
        const user = await response.json();
        const reposResponse = await fetch(user.repos_url);
        const repos = await reposResponse.json();
        console.log(repos);
    } catch (error) {
        console.log(error);
    }
}

start();
