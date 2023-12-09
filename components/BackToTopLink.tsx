import Link from 'next/link';
import React from 'react';

export default function BackToTopLink() {
  return (
    <>
      <Link href="/">
        Home
      </Link>
      <style>
        {`
          a {
            margin-top: 50px;
            text-decoration: underline;
            display: block;
            text-align: center;
          }
          a:hover {
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}
