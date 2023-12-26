import Head from 'next/head';
import React from 'react';
import Image from 'next/image';

import Header from '../../components/Header';
import BackToTopLink from '../../components/BackToTopLink';
import Footer from '../../components/Footer';

export default function AlgorithmsPage() {
  return (
    <div className="container">
      <Head>
        <title>Algorithms Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <h2>Big O</h2>
        <Image
          src="/assets/images/pages/algorithms/big-o-chart.png"
          width={500}
          alt=""
        />
        <br />
        <Image
          src="/assets/images/pages/algorithms/big-o-complexity.png"
          width={500}
          alt=""
        />
        <br />
        <small>reference: https://www.bigocheatsheet.com/</small>

        <h2>DS</h2>
        <ul>
          <li>
            <h3>Array</h3>
            <p>test</p>
          </li>
        </ul>
        <br />
        <br />
        <BackToTopLink />
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
  );
}
