import Head from 'next/head';
import React from 'react';

export async function getStaticProps({ params }) {
  const { postId } = params;

  // Fetch post data
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await postResponse.json();

  return {
    props: {
      post,
    },
    revalidate: 60 * 60, // Revalidate the data every 1 hour (adjust as per your requirement)
  };
}

export async function getStaticPaths() {
  // Fetch all posts to generate paths
  const postsResponse = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const posts = await postsResponse.json();

  const paths = posts.map((post) => ({
    params: { postId: String(post.id) },
  }));

  return {
    paths,
    fallback: 'blocking', // boolean , 'blocking' => Enable fallback for not-yet-generated pages
  };
}

const PostPage = ({ post }) => {
  return (
    <div>
      <Head>
        <title>Post | {post.title}</title>
      </Head>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostPage;
