import '../styles/index.css'
import Footer from '../components/footer'
import Nav from '../components/nav'
import Head from 'next/head'

function App({ Component, pageProps }) {
  return (
    <>
  <html lang="en">
    <div className="flex flex-col h-screen justify-between">
        <Nav />
          <Component {...pageProps} />
        <Footer className="m-5"/>
    </div>

    <Head>
      
      <meta name="image" content="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
      <meta name="title" content="The Devs Guild Community" />
      <meta name="description" content="Learn Python, JS, SQL, C#, C/C++ and more! https://discord.gg/xqUN8KY" />
      
      <meta name="og:image" 
        content="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" 
        key="ogimage"
      />
      
      <meta name="og:title" 
        content="The Devs Guild Community" 
        key="ogtitle"
      />
      
      <meta 
        name="og:description" 
        content="Join our Discord to Get Help With and Learn Python, JS, SQL, C#, C/C++ and more!" 
        key="ogdesc"  
      />

      <title>
        The Devs' Guild Community
      </title>

      <link
        rel="stylesheet" 
        media="print" 
        onLoad="this.media='all'; this.onload=null;"
        href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet" 
      /> 
      
      <link 
        rel="stylesheet" 
        media="print" 
        onLoad="this.media='all'; this.onload=null;"
        href="https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css" 
        integrity="sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=" 
        crossOrigin="anonymous"
      />

      
    </Head>
  </html>
  </>
  )

}

export default App;
