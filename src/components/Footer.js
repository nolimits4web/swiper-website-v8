import menuList from '../shared/menu-list';
import Link from 'next/link';
// import { trackOutbound } from 'src/shared/track-outbound';
// import Image from 'next/image';

const menu = [{ name: 'Swiper', link: '/' }, ...menuList].map(
  ({ name, link }) => {
    return (
      <Link key={link} href={link}>
        {name}
      </Link>
    );
  }
);

export default function Footer() {
  return (
    <footer className="border-t border-t-black border-opacity-10 py-10 px-4 text-center dark:border-t-transparent dark:bg-dark-1 dark:bg-opacity-80 sm:px-6 lg:px-8 xl:px-10">
      <div className="mx-auto max-w-5xl font-medium">
        <nav className="my-8 flex flex-wrap justify-center space-x-4 text-sm">
          {menu}
        </nav>
        <div className="text-gray-700 dark:text-gray-400">
          {new Date().getFullYear()} © Swiper by{' '}
          <a href="https://nolimits4web.com" target="_blank">
            <img
              src="/images/n4w-logo.svg"
              alt="nolimits4web"
              className="inline-block h-12 w-12"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
