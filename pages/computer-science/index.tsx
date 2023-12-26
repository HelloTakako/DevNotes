import Head from 'next/head';
import React from 'react';

import Header from '../../components/Header';
import BackToTopLink from '../../components/BackToTopLink';
import Footer from '../../components/Footer';

export default function Devtools() {
  return (
    <div className="container">
      <Head>
        <title>Chrome Devtools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <h2>Tabs</h2>
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
    </div>
  );
}
