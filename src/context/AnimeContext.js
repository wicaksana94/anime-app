import React from 'react'
import { createContext, useState, useContext } from 'react'

// Create the context
const AnimeContext = createContext()

// Create the provider component
export const AnimeProvider = ({ children }) => {
  const [animes, setAnimes] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)

  return (
    <AnimeContext.Provider
      value={{
        animes,
        setAnimes,
        searchTerm,
        setSearchTerm,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        loading,
        setLoading,
      }}
    >
      {children}
    </AnimeContext.Provider>
  )
}

// Custom hook for using the Anime context
export const useAnime = () => useContext(AnimeContext)
