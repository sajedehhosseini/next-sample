import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const AlbumsPage = ({ albums }) => {
  return (
    <div>
      <Head>
        <title>Albums</title>
      </Head>
      <h1>Albums</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <h2>{album.title}</h2>
            <p>User ID: {album.userId}</p>
            <Link href={`/albums/${album.id}`}>
              <a>show album ...</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  // Fetch albums from JSONPlaceholder API
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');
  const albums = await response.json();

  return {
    props: {
      albums,
    },
  };
}

export default AlbumsPage;
