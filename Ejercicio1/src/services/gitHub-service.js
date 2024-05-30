const axios = require('axios');

const getTopReposGoogleService = async () => {
  try {
    const response = await axios.get('https://api.github.com/users/google/repos', {
      headers: {
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      params: {
        sort: 'full_name',
        direction: 'desc',
        per_page: 10
      }
    });
    const data = response.data;

    const repos = data
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description,
        url: repo.html_url,
        stargazers: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language
      }));

    return repos;
  } catch (error) {
    if (error.response) {
      throw { status: error.response.status, message: error.response.data.message };
    } else if (error.request) {
      throw { status: 500, message: 'No response from server.' };
    } else {
      throw { status: error.status, message: error.message };
    }
  }
}

module.exports = { getTopReposGoogleService };