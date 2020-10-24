import '../styles/index.css'
import Footer from '../components/footer'
import Nav from '../components/nav'
import Head from 'next/head'
function App({ Component, pageProps }) {
  return (
    <>
  <Head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css" integrity="sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=" crossorigin="anonymous"></link>
  </Head>

  <div className="flex flex-col h-screen justify-between">
      <Nav />
        <Component {...pageProps} />
      <Footer className="m-5"/>
  </div>
  </>
  )

}

export default App;
