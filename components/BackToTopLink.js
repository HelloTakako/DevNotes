import Link from 'next/link';

export default function BackToTopLink() {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <style jsx>
        {`
          a {
            margin-top: 50px;
            text-decoration: underline;
          }
          a:hover {
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}
