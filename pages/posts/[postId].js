import Head from 'next/head';
import React from 'react';

export async function getServerSideProps({ params }) {
  const { postId } = params;

  // Fetch post from JSONPlaceholder API based on postId
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await response.json();

  return {
    props: {
      post,
    },
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
