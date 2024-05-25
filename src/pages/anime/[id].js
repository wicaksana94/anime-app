import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Loading from '../../components/Loading'
import styles from '../../styles/AnimeDetail.module.css'

const AnimeDetails = () => {
  const router = useRouter()
  const { id } = router.query
  const [anime, setAnime] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      const fetchAnimeDetails = async () => {
        try {
          const response = await axios.get(
            `https://api.jikan.moe/v4/anime/${id}`
          )
          setAnime(response.data.data)
          setLoading(false)
        } catch (error) {
          console.error('Error fetching anime details:', error)
          setLoading(false)
        }
      }

      fetchAnimeDetails()
    }
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (!anime) {
    return <div>Error loading anime details.</div>
  }

  return (
    <div className={styles['anime-details']}>
      <div className={styles['anime-details__header']}>
        <img
          className={styles['anime-details__image']}
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
        />
        <div className={styles['anime-details__info']}>
          <h1 className={styles['anime-details__title']}>{anime.title}</h1>
          <p className={styles['anime-details__synopsis']}>{anime.synopsis}</p>
        </div>
      </div>
      <div className={styles['anime-details__content']}>
        <h2>Details</h2>
        <p>
          <strong>Type:</strong> {anime.type}
        </p>
        <p>
          <strong>Episodes:</strong> {anime.episodes}
        </p>
        <p>
          <strong>Status:</strong> {anime.status}
        </p>
        <p>
          <strong>Duration:</strong> {anime.duration}
        </p>
        <p>
          <strong>Rating:</strong> {anime.rating}
        </p>
        <p>
          <strong>Score:</strong> {anime.score}
        </p>
        <p>
          <strong>Rank:</strong> {anime.rank}
        </p>
        <p>
          <strong>Popularity:</strong> {anime.popularity}
        </p>
        <p>
          <strong>Members:</strong> {anime.members}
        </p>
        <p>
          <strong>Favorites:</strong> {anime.favorites}
        </p>
        <h2>Producers</h2>
        <ul>
          {anime.producers.map((producer) => (
            <li key={producer.mal_id}>{producer.name}</li>
          ))}
        </ul>
        <h2>Genres</h2>
        <ul>
          {anime.genres.map((genre) => (
            <li key={genre.mal_id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AnimeDetails
