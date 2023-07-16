import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const AlbumPage = ({ album }) => {
  return (
    <div>
      <Head>
        <title>Album | {album.title}</title>
      </Head>
      <h1>{album.title}</h1>
      <p>User ID: {album.userId}</p>
      <Link href={`/albums/${album.id}/photos`}>
        <a>show photos ...</a>
      </Link>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { albumId } = params;

  // Fetch album from JSONPlaceholder API based on albumId
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${albumId}`
  );
  const album = await response.json();

  return {
    props: {
      album,
    },
  };
}

export default AlbumPage;
