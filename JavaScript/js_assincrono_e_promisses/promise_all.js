import axios from 'axios';

Promise.all([
    axios.get('https://api.github.com/users/vitorhonna'),
    axios.get('https://api.github.com/users/vitorhonna/repos'),
])
    .then((responses) => {
        console.log(responses[0].data.login);
        console.log(responses[1].data.length);
    })
    .catch((error) => console.error(error.message));
