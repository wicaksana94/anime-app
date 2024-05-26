import React from 'react'
import Link from 'next/link'
import styles from '../styles/AnimeCard.module.css'

const AnimeCard = ({ anime }) => {
  return (
    <div className={styles['anime-card']}>
      <Link href={`/anime/${anime.mal_id}`}>
        <img
          className={styles['anime-card__image']}
          src={anime.images.jpg.image_url}
          alt={anime.title}
        />
        <div className={styles['anime-card__content']}>
          <h3 className={styles['anime-card__title']}>{anime.title}</h3>
          <p className={styles['anime-card__synopsis']}>{anime.synopsis}</p>
        </div>
      </Link>
    </div>
  )
}

export default AnimeCard
