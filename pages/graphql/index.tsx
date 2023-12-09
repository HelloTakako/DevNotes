import Head from 'next/head';
import React from 'react';

import Header from '../../components/Header';
import BackToTopLink from '../../components/BackToTopLink';
import Footer from '../../components/Footer';

export default function Devtools() {
  // const Nav = styled.section`
  //   display: flex;
  //   justify-content: space-between;
  //   width: 100%;
  //   border-bottom: 1px solid;
  //   li {
  //     list-style: none;
  //     &:before {
  //       content: '・';
  //     }
  //   }
  // `;

  return (
    <div className="container">
      <Head>
        <title>Chrome Devtools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <h1 className="title">&#9998;GraphQL</h1>
        <ul>
          <li>
            <a href="#apollo">Apollo Client</a>
          </li>
          <li>
            <a href="#schema">Schema</a>
          </li>
          <li>
            <a href="#resolver">Resolver</a>
          </li>
        </ul>
        <section id="apollo">
          <h2>Apollo Client</h2>
          <p>
            Apollo Client ... GraphQL client. A library to deal with GraphQL
            client simpler.
          </p>
          <div>
            <pre>{`
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './App';

const GITHUB_BASE_URL = 'https://api.github.com/graphql';

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: \`Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}\`
  }
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache
});
`}</pre>
            <p>
              <b>HttpLink</b>... Set a GraphQL endpoint
            </p>
            <pre>
              {`ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);`}
            </pre>
            <p>
              <b>Apollo Provider</b>... Wrap the whole app component
            </p>
          </div>
        </section>
        <section id="schema">
          <h2>Schema</h2>
        </section>
        <section id="resolver">
          <h2>Resolver</h2>
        </section>
        <section id="query">
          <h2>Query</h2>
        </section>
        <BackToTopLink />
      </main>

      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
        }

        main {
          padding: 5rem;
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
