import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '../components/icons';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-md w-full">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Page Not Found</h2>
        <p className="mt-4 text-base text-slate-500">
          Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
