import React from 'react'
import Layout from '../components/Layout'
import '../styles/globals.css'
import { AnimeProvider } from '../context/AnimeContext'

function MyApp({ Component, pageProps }) {
  return (
    <AnimeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimeProvider>
  )
}

export default MyApp
