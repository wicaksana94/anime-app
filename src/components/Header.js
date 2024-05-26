import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import axios from 'axios'
import { useAnime } from '../context/AnimeContext'
import SearchBar from '../components/SearchBar'
import styles from '../styles/Header.module.css'

const Header = () => {
  const {
    setAnimes,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    setTotalPages,
    setLoading,
  } = useAnime()

  const fetchAnimes = async (page = 1, query = '') => {
    try {
      setLoading(true)
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

  const handleSearchSubmit = (e) => {
    e.preventDefault()
  }

  const handleSearch = async (term) => {
    try {
      setSearchTerm(term)
      setCurrentPage(1) // Reset page to 1 when performing a new search
    } catch (error) {
      console.error('Error fetching anime:', error)
    }
  }

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <ul className={styles.header__navList}>
          <li className={styles.header__navItem}>
            <Link href="/">Home</Link>
          </li>
        </ul>
        <form
          className={styles.header__searchForm}
          onSubmit={handleSearchSubmit}
        >
          <SearchBar onSearch={handleSearch} />
        </form>
      </nav>
    </header>
  )
}

export default Header
