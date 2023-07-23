import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const UsersPage = ({ users }) => {
  return (
    <div>
      <Head>
        <title>Users</title>
      </Head>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <Link href={`/users/${user.id}/posts`}>
              <a>posts...</a>
            </Link>
            <br />
            <Link href={`/users/${user.id}/todos`}>
              <a>todos...</a>
            </Link>
            <br />
            <Link href={`/users/${user.id}/albums`}>
              <a>albums...</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return {
    props: {
      users,
    },
    revalidate: 60 * 60, // Revalidate the data every 1 hour (you can adjust the revalidation interval as per your requirement)
  };
}

export default UsersPage;
