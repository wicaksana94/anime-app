import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
import styles from '../styles/Header.module.css'

const Header = () => {
  const [search, setSearch] = useState('')
  const [animes, setAnimes] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

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

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Search query:', search)
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
          <li className={styles.header__navItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.header__navItem}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <form
          className={styles.header__searchForm}
          onSubmit={handleSearchSubmit}
        >
          {/* <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search..."
            className={styles.header__searchInput}
          /> */}
          <SearchBar onSearch={handleSearch} />
          <button type="submit" className={styles.header__searchButton}>
            Search
          </button>
        </form>
      </nav>
    </header>
  )
}

export default Header
