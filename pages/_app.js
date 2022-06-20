import '../styles/globals.css'
import Footer from '../components/footer'
import '../styles/footer.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>  
  )
}

export default MyApp
