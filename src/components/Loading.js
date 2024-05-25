import React from 'react'
import styles from '../styles/Loading.module.css'

const Loading = () => {
  return (
    <div className={styles['loading']}>
      <div className={styles['loading__spinner']}></div>
      <p>Loading...</p>
    </div>
  )
}

export default Loading
