import axios from 'axios'

const fetchAnimes = async (page = 1, query = '') => {
  const response = await axios.get(
    `https://api.jikan.moe/v4/search/anime?q=${query}&page=${page}`
  )
  return response.data
}

const fetchAnimeById = async (id) => {
  const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`)
  return response.data
}

export { fetchAnimes, fetchAnimeById }
