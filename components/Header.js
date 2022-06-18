import Link from 'next/link';

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/meta-tags">
            <a>Meta Tags</a>
          </Link>
        </li>
        <li>
          <Link href="/react-hooks">
            <a>React Hooks</a>
          </Link>
        </li>
        <li>
          <Link href="/graphql">
            <a>GraphQL</a>
          </Link>
        </li>
        <li>
          <Link href="/keyboard-shortcuts">
            <a>Keyboard Shortcuts</a>
          </Link>
        </li>
        {/* <li>
          <Link href="/robots-txt">
            <a>robots.txt</a>
          </Link>
        </li>
        <li>
          <Link href="/htaccess">
            <a>.htaccess</a>
          </Link>
        </li> */}
        <li>
          <Link href="/useful-links">
            <a>Useful Links</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
