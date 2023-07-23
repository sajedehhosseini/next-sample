import Link from 'next/link';
import { useRouter } from 'next/router';

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">
        <a>Go back to the homepage</a>
      </Link>
      <button onClick={() => router.push('/')}>Go back with router </button>
    </div>
  );
};

export default NotFoundPage;
