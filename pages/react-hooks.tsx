import Head from 'next/head';
import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTopLink from '../components/BackToTopLink';

export default function ReactHooks() {
  return (
    <div className="container">
      <Head>
        <title>React Hooks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <h1 className="title">&#9998;React Hooks</h1>
      <p>React hooks are functions you can use inside functional components.</p>
      <div>
        <section>
          <h2>useState</h2>
          <p>
            <code>useState</code> allows you to manage states inside your
            components.
          </p>
        </section>
        <section>
          <h2>useEffect</h2>
          <p>
            <code>useEffect</code> adds side effects to your components.
            <br />
            Side Effects as in:
          </p>
          <ul>
            <li>Change the DOM created by React</li>
            <li>Communication with API</li>
            <li>Asynchronous tasks</li>
            <li>console.log</li>
          </ul>
          <p>
            With this hook, you can run side effects after the rendering of the
            component, or after the unmounting of the component.
            <br />
            Unmount means, deleting/removing a component from the DOM.
          </p>
          <h4>Clean-up function</h4>
          <p>
            When you return a function inside useEffect, the function will run
            when the component unmounts, or when the side effect re-runs.
            <br />
            This returned function is called "Clean-up function".
          </p>
          <pre>{`
            useEffect(() => {
              return () => {
                console.log('cleanup');
              }
            });
          `}</pre>

          <h4>Summary</h4>
          <small>
            Reference: https://qiita.com/ttk/items/9a9ea632f88c48f0c2c6
          </small>
          <pre>{`
import { useState, useEffect } from "react";

const Hoge = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count => count + 1);
  }

  useEffect(() => {
    console.log("component did mount");
  }, []);

  useEffect(() => {
    console.log("component did update");
    console.log(\`current count is \${count}\`);
  }, [count])

  useEffect(() => {
    return () => {
      console.log("component will unmount");
    };
  }, [])

  return (
    <>
      Current count：{count}
      <button onClick={countUp}>
        count up!
      </button>
    </>
  );
}`}</pre>
        </section>
        <section>
          <h2>useReducer</h2>
          <p>
            Returns <code>state</code> and <code>dispatch</code> function (a
            function to send actions).
            <br />
            By using this hook, you can do state management in a component. So
            it has similar usage with <code>useState</code>.
          </p>
          <h4>Syntax</h4>
          <pre>{`{const [state, dispatch] = useReducer(reducer, initial state)}`}</pre>
        </section>
        <BackToTopLink />
      </div>
      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
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
