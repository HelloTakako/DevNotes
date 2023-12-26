import Head from 'next/head';
import React from 'react';

import Header from '../components/Header';
import BackToTopLink from '../components/BackToTopLink';
import Footer from '../components/Footer';

export default function Git() {
  return (
    <div className="container">
      <Head>
        <title>Git</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <h1>Git</h1>
        <section>
          <h3>Add an alias for Git command</h3>
          <code>git config --global alias.ci commit</code><br />
          <code>git config --global alias.br branch</code><br />
          etc...
        </section>

        <BackToTopLink />
      </main>

      <Footer />
    </div>
  );
}
