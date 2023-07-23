import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const UsersPage = (props) => {
  const {
    query: { slug },
  } = useRouter();

  return (
    <div>
      <Head>
        <title>
          User | {slug[0]} | {slug[1]}
        </title>
      </Head>
      {props[slug[1]].map((item) => (
        <>
          <div key={item.id}>{JSON.stringify(item)}</div>
          <br />
        </>
      ))}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const user = slug[0];
  const type = slug[1]; // posts | albums | todos

  // Fetch user data
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${user}/${type}`
  );
  const data = await response.json();

  return {
    props: {
      [type]: data,
    },
  };
}

export default UsersPage;
