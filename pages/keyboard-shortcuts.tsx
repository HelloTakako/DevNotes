import React from 'react';

import BackToTopLink from '../components/BackToTopLink';
import Footer from '../components/Footer';

export default function KeyboardShortcuts() {
  return (
    <div>
      <main className="regular-width-container">
        <h2>Useful VS Code keyboard Shortcuts</h2>
        <ul className="keyboard-shortcuts">
          <li>
            Area focus : <span>Shift + Cursors</span>
          </li>
          <li>
            Move to the start/end of the line : <span>Cmd + Cursors</span>
          </li>
          <li>
            Move to previous/next word :{' '}
            <span>Option + left / right cursor</span>
          </li>
          <li>
            Copy : <span>Cmd + C</span>
          </li>
          <li>
            Paste : <span>Cmd + V</span>
          </li>
          <li>
            Cut : <span>Cmd + X</span>
          </li>
          <li>
            Undo a step : <span>Cmd + Z</span>
          </li>
          <li>
            Redo a step : <span>Cmd + Shift + Z</span>
          </li>
          <li>
            Multiple select : <span>Cmd + D</span>
          </li>
          <li>
            Search : <span>Cmd + F </span>
          </li>
          <li>
            Project search : <span>Cmd + Shift+ F</span>
          </li>
          <li>
            Refer the declaration origin : <span>F12</span>
          </li>
          <li>
            Peaking - Refer the declaration origin : <span>Option + F12</span>
          </li>
          <li>
            Display reference : <span>Shift + F12</span>
          </li>
          <li>
            Quick fix : <span>Cmd + .</span>
          </li>
          <li>
            Search files : <span>Cmd + P</span>
          </li>
          <li>
            Close the current tab : <span>Cmd + W</span>
          </li>
          <li>
            Save the current file : <span>Cmd + S</span>
          </li>
          <li>
            Move the line up/down : <span>Option + up/down cursor</span>
          </li>
          <li>
            Move to other files opened :{' '}
            <span>Cmd + Option + left/right cursor</span>
          </li>
          <li>
            Toggle line comment : <span>Cmd + /</span>
          </li>
          <li>
            Display command pallet : <span>Cmd + Shift + P / F1</span>
          </li>
          <li>
            Open a new window : <span>Cmd + Shift + N</span>
          </li>
          <li>
            Close the folder : <span>Cmd + K -&gt; F</span>
          </li>
          <li>
            Open a new tab : <span>Cmd + N</span>
          </li>
          <li>
            Save with another name : <span>Cmd + Shift + S</span>
          </li>
          <li>
            Reopen a previously closed tab : <span>Cmd + Shift + T</span>
          </li>
          <li>
            Open VSCode settings : <span>Cmd + ,</span>
          </li>
          <li>
            Chanage symbol name : <span>F2</span>
          </li>
          <li>
            Search symbol name over all files : <span>Cmd + T</span>
          </li>
          <li>
            Move to the symbols in the file : <span>Cmd + Shift + O</span>
          </li>
          <li>
            Move to the start/end of brackets : <span>Cmd + Shift + \</span>
          </li>
          <li>
            Select all which matched in search : <span>Cmd + F2</span>
          </li>
          <li>
            Toggle a block comment : <span>Option + Shift + A</span>
          </li>
          <li>
            Replace strings in the file : <span>Cmd + Option + F</span>
          </li>
          <li>
            See change history : <span>Ctrl + Tab</span>
          </li>
          <li>
            Open the previously edited file : <span>Ctrl + _ / Ctrl + -</span>
          </li>
          <li>
            Open a file : <span>Cmd + O</span>
          </li>
          <li>
            Zoom in : <span>Cmd + Shift + -</span>
          </li>
          <li>
            Zoom out : <span>Cmd + -</span>
          </li>
          <li>
            Delete a line : <span>Cmd + Shift + K</span>
          </li>
          <li>
            Copy a line to above/below :{' '}
            <span>Option + Shift + up/down cursor</span>
          </li>
          <li>
            Move to specific line : <span>Ctrl + G</span>
          </li>
          <li>
            Toggle side bar : <span>Cmd + B</span>
          </li>
          <li>
            Move to next problem : <span>F8</span>
          </li>
          <li>
            Move to previous problem : <span>Shift + F8</span>
          </li>
          <li>
            Select current line : <span>Cmd + L</span>
          </li>
          <li>
            Save all tabs : <span>Cmd + Option + S</span>
          </li>
          <li>
            Copy the current file&apos;s path : <span>Cmd + K -&gt; P</span>
          </li>
        </ul>
        <br />
        <br />
        <BackToTopLink />
      </main>

      <Footer />
      <style jsx global>{`
        .keyboard-shortcuts span {
          font-size: 120%;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
