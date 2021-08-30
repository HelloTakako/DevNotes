import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>Dev Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <h1 className="title">
        &#9998;Dev Notes
        </h1>

        {/* Don't add className to <Link> tag, add it to <a> tag. */}
        <div className="grid">
          <Link href="meta-tags">
            <a className="card">
              <h3>Meta Tags &rarr;</h3>
              <p>Meta tags cheatsheet for SEO</p>
            </a>
          </Link>
          {/* <Link href="/htaccess">
            <a className="card">
              <h3>.htaccess &rarr;</h3>
              <p>Apache .htaccess configuration cheatsheet</p>
            </a>
          </Link> */}
          {/* <Link href="/robots-txt">
            <a className="card">
              <h3>robots.txt &rarr;</h3>
              <p>Manage search engine crawlers traffic</p>
            </a>
          </Link> */}
          <Link href="/keyboard-shortcuts">
            <a className="card">
              <h3>Keyboard Shortcuts &rarr;</h3>
              <p>Useful Keyboard Shortcuts</p>
            </a>
          </Link>
          <Link href="/graphql">
            <a className="card">
              <h3>GraphQL &rarr;</h3>
              <p>GraphQL</p>
            </a>
          </Link>
          <Link href="/react-hooks">
            <a className="card">
              <h3>React Hooks &rarr;</h3>
              <p>React Hooks</p>
            </a>
          </Link>
          {/* <Link href="/devtools">
            <a className="card">
              <h3>Devtools &rarr;</h3>
              <p>Our vital tool</p>
            </a>
          </Link> */}
          <Link href="/useful-links">
            <a className="card">
              <h3>Useful Links &rarr;</h3>
              <p>Resources in the globe</p>
            </a>
          </Link>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
