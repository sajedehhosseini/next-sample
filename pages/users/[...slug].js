import Head from 'next/head';
import React from 'react';

const UsersPage = ({ params }) => {
  return (
    <div>
      <Head>
        <title>
          User | {params[0]} | {params[1]}
        </title>
      </Head>
      {JSON.stringify(params)}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  return {
    props: {
      params: params.slug,
    },
  };
}

export default UsersPage;
