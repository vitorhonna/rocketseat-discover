import axios from 'axios';

async function getRepos() {
    const user = await axios.get('https://api.github.com/users/vitorhonna')
    const reposResponse = await axios.get(user.data.repos_url)
    const repos = reposResponse.data
    console.log(repos)
}

getRepos().catch(error => console.error(error));
