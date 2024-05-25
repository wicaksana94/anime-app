import React from 'react'
import { createRoot } from 'react-dom/client'
import { render, cleanup } from '@testing-library/react'
import AnimeCard from '../components/AnimeCard'

afterEach(cleanup)

const anime = {
  title: 'Naruto',
  synopsis: 'A great anime about ninjas.',
  images: {
    jpg: {
      image_url: 'https://cdn.myanimelist.net/images/anime/1141/142503.jpg',
    },
  },
}

describe('AnimeCard', () => {
  it('renders the anime title', () => {
    const { getByText } = render(<AnimeCard anime={anime} />)
    expect(getByText('Naruto')).toBeInTheDocument()
  })

  it('renders the anime synopsis', () => {
    const { getByText } = render(<AnimeCard anime={anime} />)
    expect(getByText('A great anime about ninjas.')).toBeInTheDocument()
  })

  it('renders the anime image', () => {
    const { getByAltText } = render(<AnimeCard anime={anime} />)
    expect(getByAltText('Naruto')).toBeInTheDocument()
  })
})
