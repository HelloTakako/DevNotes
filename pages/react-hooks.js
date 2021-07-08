import Head from 'next/head'
import styled from 'styled-components';

import Header from '../components/Header'
import Footer from '../components/Footer'
import BackToTopLink from '../components/BackToTopLink'

export default function ReactHooks() {

  return (
    <div className="container">
      <Head>
        <title>React Hooks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
        <h1 className="title">
            &#9998;React Hooks
        </h1>
      <p>React hooks are functions you can use inside functional components.</p>
      <main>
          <Section>
        <h2>useState</h2>
        <p><code>useState</code> allows you to manage states inside your components.</p>
        </Section>
          <Section>
        <h2>useEffect</h2>
        <p><code>useEffect</code> adds side effects to your components.<br/>
        Side Effects as in:</p>
        <ul>
          <li>
            Change the DOM created by React
          </li>
          <li>
            Communication with API
          </li>
          <li>
            Asynchronous tasks
          </li>
          <li>
            console.log
          </li>
          </ul>
          <p>With this hook, you can run side effects after the rendering of the component, or after the unmounting of the component.<br />
          Unmount means, deleting/removing a component from the DOM.</p>
          <h4>Clean-up function</h4>
          <p>When you return a function inside useEffect, the function will run when the component unmounts, or when the side effect re-runs.<br />
          This returned function is called "Clean-up function".</p>
          <pre>{`
            useEffect(() => {
              return () => {
                console.log('cleanup');
              }
            });
          `}</pre>
        </Section>
          <BackToTopLink />
      </main>
      <Footer />
    </div>
  )
}

const Section = styled.section`
  padding: 20px 0;
  margin: 20px 0;
  border-bottom: 1px solid #ccc;
`;