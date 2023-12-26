import { getSortedPostsData } from '../../lib/posts';
import Link from 'next/link';

export default function BlogPost({ allPostsData }: any) {
  return (
    <div>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }: any) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
              <br />
              {/* <Link href={}>See posts</Link> */}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
