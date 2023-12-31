'use client';

import CountdownRedirect from '@/components/CountdownRedirect';
import { NextPage } from 'next';

const NotFound: NextPage = () => {
  return (
    <div className="px-7 py-4 flex items-center justify-center h-[90vh] bg-slate-800">
      <div className="bg-slate-200 rounded-3xl max-md:w-full max-md:py-7 max-md:h-max w-1/2 h-1/2 flex items-center flex-col justify-center gap-4 text-slate-800">
        <h4 className="font-semibold">Page not found.</h4>
        <CountdownRedirect />
      </div>
    </div>
  );
};

export default NotFound;
