import BackToTopLink from '../components/BackToTopLink';
import Footer from '../components/Footer';

export default function KeyboardShortcuts() {
  return (
    <div>
      <main className='regular-width-container'>
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
    </div>
  );
}
