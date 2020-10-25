import '../styles/index.css'
import Footer from '../components/footer'
import Nav from '../components/nav'
import Head from 'next/head'
function App({ Component, pageProps }) {
  return (
    <>
  <html lang="en">
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet" /> 
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css" integrity="sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=" crossorigin="anonymous"></link>
      
      <meta name="image" content="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
      <meta name="title" content="The Developers Guild Community" />
      <meta name="description" content="Learn Python, JS, SQL, C#, C/C++ and more!" />

      <meta name="og:image" 
        content="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" 
        key="ogimage"
      />

      <meta name="og:title" 
        content="The Developers Guild Community" 
        key="ogtitle"
      />
      <meta 
        name="og:description" 
        content="Learn Python, JS, SQL, C#, C/C++ and more!" 
        key="ogdesc"  
      />

    </Head>
      <title>
        The Developers' Guild Community
      </title>
    <div className="flex flex-col h-screen justify-between">
        <Nav />
          <Component {...pageProps} />
        <Footer className="m-5"/>
    </div>
  </html>
  </>
  )

}

export default App;
