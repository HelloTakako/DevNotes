import Head from 'next/head';
import React from 'react';

import Header from '../../components/Header';
import BackToTopLink from '../../components/BackToTopLink';
import Footer from '../../components/Footer';

export default function UxPage() {
  return (
    <div className="container">
      <Head>
        <title>Chrome UxPage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <h2>UX Design</h2>
        <ul>
          <li>
            <h3>Elements</h3>
            <p>
              For styling.
              <br />
              You can check HTML markups and CSS stylings.
            </p>
          </li>
          <li>
            <h3>Console</h3>
          </li>
          <li>
            <h3>Sources</h3>
          </li>
          <li>
            <h3>Network</h3>
          </li>
          <li>
            <h3>Performance</h3>
          </li>
          <li>
            <h3>Application</h3>
          </li>
          <li>
            <h3>Security</h3>
          </li>
          <li>
            <h3>Lighthouse</h3>
          </li>
        </ul>
        <br />
        <br />
        <BackToTopLink />
      </main>

      <Footer />

      <style>{`
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

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      
    </div>
  );
}
