import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AnimeList from '../components/AnimeList'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'
import Loading from '../components/Loading'
import styles from '../styles/Home.module.css'
import { useAnime } from '../context/AnimeContext'

const Home = () => {
  const { animes, currentPage, setCurrentPage, totalPages, loading } =
    useAnime()

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
      <AnimeList animes={animes} />
      {!animes || animes.length === 0 ? (
        <Loading />
      ) : (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  )
}

export default Home
