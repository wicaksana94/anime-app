import '../styles/globals.css'
import roboto from '../styles/fonts'

function MyApp({ Component, pageProps }) {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
