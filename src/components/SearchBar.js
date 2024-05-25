import React from 'react'
import styles from '../styles/SearchBar.module.css'

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      onSearch(e.target.value)
    }
  }

  return (
    <input
      type="text"
      placeholder="Search for an anime..."
      onKeyDown={handleSearch}
      className={styles.searchBar}
    />
  )
}

export default SearchBar
