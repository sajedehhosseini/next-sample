import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export async function getServerSideProps() {
  // Fetch posts from JSONPlaceholder API
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

const PostsPage = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link href={`/posts/${post.id}`}>
              <a>show more ...</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
