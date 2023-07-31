import type { AppProps } from 'next/app'

import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component className="w-full" {...pageProps} />
    </>
  )
}

export default App
