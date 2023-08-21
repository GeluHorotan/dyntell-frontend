import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';
import Link from 'next/link';

const CountdownRedirect = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      router.push('/');
    }
  }, [countdown, router]);

  return (
    <div className="flex flex-col gap-4 items-center justify-center ">
      <div className="flex items-center flex-col px-14 bg-slate-800 text-white py-4 rounded-3xl ">
        <h6 className="">Redirecting in</h6>
        <h4>{countdown}s</h4>
      </div>
      <Button
        type="button"
        className="bg-slate-800 px-4 py-1 rounded-lg w-max text-white"
      >
        <Link href="/">HOME</Link>
      </Button>
    </div>
  );
};

export default CountdownRedirect;
