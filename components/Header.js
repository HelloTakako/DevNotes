import { useEffect } from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {
  return (
    <Nav>
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
    </Nav>
  );
}

const Nav = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222;
  margin-bottom: 50px;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    padding: 0 15px;
    border-right: 1px solid #888;
  }
  li:last-child {
    border-right: none;
  }
  li a {
    text-decoration: none;
    color: #fff;
    transition: 0.3s;
  }
  li a:hover {
    opacity: 0.6;
  }
`;
