import React from 'react';
import Image from 'next/image';

export async function getServerSideProps({ params }) {
  const { albumId } = params;

  // Fetch photos from JSONPlaceholder API based on albumId
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
  );
  const photos = await response.json();

  return {
    props: {
      photos,
    },
  };
}

const AlbumPhotosPage = ({ photos }) => {
  return (
    <div>
      <h1>Album Photos</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <Image src={photo.url} alt={photo.title} width={300} height={300} />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumPhotosPage;
