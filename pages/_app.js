import Head from 'next/head'
import '../styles/globals.css'
import Footer from '../components/footer'
import '../styles/footer.css'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <>
      <Head>
        <title>CarlyleCodes Next.js</title>
        <meta name='CEO' content='Next.js is amazing!' />
      </Head>

      <SessionProvider session={session}>
        <Component {...pageProps} />
        <Footer {...pageProps}/>
      </SessionProvider>
    </>  
  )
}

export default MyApp
