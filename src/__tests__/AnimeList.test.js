import React from 'react'
import { render } from '@testing-library/react'
import AnimeList from '../components/AnimeList'

const animes = [
  {
    mal_id: 20,
    title: 'Naruto',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1141/142503.jpg',
      },
    },
    synopsis: 'A great anime about ninjas.',
    url: 'https://myanimelist.net/anime/20/Naruto',
  },
]

describe('AnimeList', () => {
  it('renders anime cards', () => {
    const { getByText } = render(<AnimeList animes={animes} />)
    expect(getByText('Naruto')).toBeInTheDocument()
  })
})
