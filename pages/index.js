import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/posts">
        <a>
          <h1>posts</h1>
        </a>
      </Link>
      <Link href="/albums">
        <a>
          <h1>albums</h1>
        </a>
      </Link>
      <Link href="/users">
        <a>
          <h1>users</h1>
        </a>
      </Link>
    </div>
  );
}
