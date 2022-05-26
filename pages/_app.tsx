import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Rick and Morty Characters</title>
      </Head>
      <main>
        <Component {...pageProps}/>
      </main>
    </div>
  )
}

export default MyApp
