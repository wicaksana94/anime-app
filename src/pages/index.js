import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AnimeList from '../components/AnimeList'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'
import Loading from '../components/Loading'
import styles from '../styles/Home.module.css'

const Home = () => {
  const [animes, setAnimes] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)

  const fetchAnimes = async (page = 1, query = '') => {
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime`, {
        params: {
          q: query,
          page: page,
        },
      })
      setAnimes(response.data.data)
      setTotalPages(
        Math.ceil(
          response.data.pagination.items.total /
            response.data.pagination.items.per_page
        )
      )
      setLoading(false)
    } catch (error) {
      console.error('Error fetching anime:', error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAnimes(currentPage, searchTerm)
  }, [currentPage, searchTerm])

  const handleSearch = async (term) => {
    setLoading(true)
    try {
      setSearchTerm(term)
      setCurrentPage(1) // Reset page to 1 when performing a new search
      setLoading(false)
    } catch (error) {
      console.error('Error fetching anime:', error)
      setLoading(false)
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  if (loading) {
    return <Loading />
  }

  if (!animes) {
    return <div>Error loading animes.</div>
  }

  return (
    <div className={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <AnimeList animes={animes} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default Home