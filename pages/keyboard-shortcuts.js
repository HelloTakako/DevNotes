import Head from 'next/head';

import BackToTopLink from '../components/BackToTopLink';
import Footer from '../components/Footer';

export default function JavaScript() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2>Useful VS Code keyboard Shortcuts</h2>
        <ul>
          <li>Area focus : Shift + Cursors</li>
          <li>Move to the start/end of the line : Cmd + Cursors</li>
          <li>Move to previous/next word : Option + left / right cursor</li>
          <li>Copy : Cmd + C</li>
          <li>Paste : Cmd + V</li>
          <li>Cut : Cmd + X</li>
          <li>Undo a step : Cmd + Z</li>
          <li>Redo a step : Cmd + Shift + Z</li>
          <li>Multiple select : Cmd + D</li>
          <li>Search : Cmd + F </li>
          <li>Project search : Cmd + Shift+ F</li>
          <li>Refer the declaration origin : F12</li>
          <li>Peaking: Refer the declaration origin : Option + F12</li>
          <li>Display reference : Shift + F12</li>
          <li>Quick fix : Cmd + .</li>
          <li>Search files : Cmd + P</li>
          <li>Close the current tab : Cmd + W</li>
          <li>Save the current file : Cmd + S</li>
          <li>Move the line up/down : Option + up/down cursor</li>
          <li>Move to other files opened : Cmd + Option + left/right cursor</li>
          <li>Toggle line comment : Cmd + /</li>
          <li>Display command pallet : Cmd + Shift + P / F1</li>
          <li>Open a new window : Cmd + Shift + N</li>
          <li>Close the folder : Cmd + K -&gt; F</li>
          <li>Open a new tab : Cmd + N</li>
          <li>Save with another name : Cmd + Shift + S</li>
          <li>Reopen a previously closed tab : Cmd + Shift + T</li>
          <li>Open VSCode settings : Cmd + ,</li>
          <li>Chanage symbol name : F2</li>
          <li>Search symbol name over all files : Cmd + T</li>
          <li>Move to the symbols in the file : Cmd + Shift + O</li>
          <li>Move to the start/end of brackets : Cmd + Shift + \</li>
          <li>Select all which matched in search : Cmd + F2</li>
          <li>Toggle a block comment : Option + Shift + A</li>
          <li>Replace strings in the file : Cmd + Option + F</li>
          <li>See change history : Ctrl + Tab</li>
          <li>Open the previously edited file : Ctrl + _ / Ctrl + -</li>
          <li>Open a file : Cmd + O</li>
          <li>Zoom in : Cmd + Shift + -</li>
          <li>Zoom out : Cmd + -</li>
          <li>Delete a line : Cmd + Shift + K</li>
          <li>Copy a line to above/below : Option + Shift + up/down cursor</li>
          <li>Move to specific line : Ctrl + G</li>
          <li>Toggle side bar : Cmd + B</li>
          <li>Move to next problem : F8</li>
          <li>Move to previous problem : Shift + F8</li>
          <li>Select current line : Cmd + L</li>
          <li>Save all tabs : Cmd + Option + S</li>
          <li>Copy the current file&apos;s path : Cmd + K -&gt; P</li>
        </ul>
        <br />
        <br />
        <BackToTopLink />
      </main>

      <Footer />

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
  );
}
