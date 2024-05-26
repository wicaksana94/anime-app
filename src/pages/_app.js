import React from 'react'
import Layout from '../components/Layout'
import '../styles/globals.css'
import { AnimeProvider } from '../context/AnimeContext'
import Head from 'next/head'

function AnimeApp({ Component, pageProps }) {
  return (
    <AnimeProvider>
      <Head>
        <title>Anime App</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimeProvider>
  )
}

export default AnimeApp
