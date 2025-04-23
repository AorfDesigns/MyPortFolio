import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full  border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col-reverse lg:py-6 ">
        <span>{new Date().getFullYear()} &copy; All Right Reserved.</span>
        <div className="flex items-center lg:py-2">
          Built by&nbsp;
          <Link
            href="https://x.com/heisabdulrahman"
            className="underline underline-offset-2"
            target="_blank"
          >
            {' '}
            AbdulRahman Aminu
          </Link>
          <span className="text-primary dark:text-primaryDark text-3xl px-1">
            {' '}
            &#9825;
          </span>{' '}
        </div>
        <Link
          href="mailto:rahformatives@gmail.com"
          // target="_blank"
          className="underline underline-offset-2"
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
