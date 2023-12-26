import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <nav className="global-nav">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/meta-tags">Meta Tags</Link>
        </li>
        <li>
          <Link href="/react-hooks">React Hooks</Link>
        </li>
        <li>
          <Link href="/graphql">GraphQL</Link>
        </li>
        <li>
          <Link href="/keyboard-shortcuts">Keyboard Shortcuts</Link>
        </li>
        <li>
          <Link href="/git">Git</Link>
        </li>
        {/* <li>
          <Link href="/robots-txt">
            robots.txt
          </Link>
        </li>
        <li>
          <Link href="/htaccess">
            .htaccess
          </Link>
        </li> */}
        <li>
          <Link href="/useful-links">Useful Links</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>

      <style jsx>{`
        .global-nav ul {
          display: flex;
          justify-content: space-between;
          padding: 0;
        }
        .global-nav ul li {
          list-style: none;
        }
      `}</style>
    </nav>
  );
}
