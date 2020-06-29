import Head from 'next/head'
import Link from 'next/link'

import Counter from '../components/Counter'
import Footer from '../components/Footer'
import BackToTopLink from '../components/BackToTopLink'

export default function MetaTags() {

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
        &#9998;Meta Tags
        </h1>
        <div className="grid">
          <Counter />

                <div>
                  <dl>
                      <dt>On-Page</dt>
                      <dd>
                      For...<br />
                      - meta title: 50-60(max.75) characters. e.g. Your page title | Your brand name <br />
                      - meta description: 135-160(For mobile, &lt;130) characters. Avoid duplicated description over pages.(Google can penalize your site for it.)<br />
                      - each content-oriented page, minimum 400 words of content to be indexed correctly.
                  But 1000+ is recommended.<br />
                  - URL...less than 90 characters are recommended.<br />
                  Dynamic URL is not recommended for SEO. Consider using perma-links. e.g. Apache: mod_rewrite 
                      </dd>
                      <dt>On-Site</dt>
                      <dd> The structure of the webpage. Avoid duplicated pages, clear structure for crawlers, internal linking.<br />
                      robots.txt<br />
                      sitemap.xml
                      </dd>
                      <dt>Off-Site</dt>
                      <dd>Outside of the webpage. Third parties, other webpages, Social medias, etc.<br />
                      Google Analytics, Google Search Console.
                      </dd>
                  </dl>

                  <h3>Code Snippets</h3>

                  <h4>Basic Meta tags</h4>
                  <pre>{`<meta charset="utf-8">
          <title>Your Page Title</title>
          <link rel="canonical" href="https://www.#yoursite#.com/" />
          <meta name="description" content="Your description">
          <meta name="viewport" content="width=device-width, initial-scale=1">`}</pre>

                  <h4>OG meta tags</h4>
                  <pre>
                  &lt;meta property=”og:type” content=”article” /&gt; <br />
                  &lt;meta property=”og:title” content=”title of the page” /&gt;<br />
                  &lt;meta property=”og:description” content=”description of the page” /&gt;<br />
                  &lt;meta property=”og:image” content=”image thmbnail” /&gt;<br />
                  &lt;meta property=”og:url” content=”your url” /&gt;<br />
                  &lt;meta property=”og:site_name” content=”site name” /&gt;
                  </pre>

                  <h4>Twitter card meta tags</h4>
                  <pre>
                  &lt;meta name=”twitter:title” content=”title of the page”&gt;<br />
                  &lt;meta name=”twitter:description” content=”description of the page”&gt;<br />
                  &lt;meta name=”twitter:image” content=”image thumbnail”&gt;<br />
                  &lt;meta name=”twitter:site” content=”@username”&gt;<br />
                  &lt;meta name=”twitter:creator” content=”@username”&gt;
                  </pre>
                  <div>
                  <p>SDM...Structured Data Markup</p>
                  <p>Microdata...https://en.wikipedia.org/wiki/Microdata_(HTML)<br />
                  Google's Rich Snippet Testing Tool<br />
                  JSON-LD...https://en.wikipedia.org/wiki/JSON-LD<br/>
                  </p>

                  <h4>JSON-LD</h4>
                  <pre>{`<script type="application/ld+json">
                  {
                      "@context": {
                      "name": "http://xmlns.com/foaf/0.1/name",
                      "homepage": {
                          "@id": "http://xmlns.com/foaf/0.1/workplaceHomepage",
                          "@type": "@id"
                      },
                      "Person": "http://xmlns.com/foaf/0.1/Person"
                      },
                      "@id": "https://me.example.com",
                      "@type": "Person",
                      "name": "John Smith",
                      "homepage": "https://www.example.com/"
                  }
                  </script>
                  `}
                  </pre>
              </div> 
              <BackToTopLink />
          </div>
          
        </div>
        
        
      </main>

      <Footer />

      <style jsx>{`
        dt {
          margin-bottom: 10px;
          font-size: 20px;
          font-weight: bold; 
       }
       dd{
           margin-bottom: 20px;
       }
       pre{
           width: inherit;
           background-color: #333;
           color: white;
           padding: 10px;
           border-radius: 5px;
           word-wrap: break-word;
           margin-bottom: 20px;
           overflow: scroll;
           font-size: 16px;
       }
       
       h3{
           font-size: 2.5rem;
           font-weight: bold;
           color: green;
           margin-bottom: 10px;
       }
       `}</style>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
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
