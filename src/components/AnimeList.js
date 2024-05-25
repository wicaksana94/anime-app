import React from 'react'
import AnimeCard from './AnimeCard'
import styles from '../styles/AnimeList.module.css'

const AnimeList = ({ animes }) => {
  return (
    <div className={styles['anime-list']}>
      {animes.map((anime, index) => (
        <AnimeCard key={index} anime={anime} />
      ))}
    </div>
  )
}

export default AnimeList
