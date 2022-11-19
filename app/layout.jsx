import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }) {
  return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				<nav className="bg-white dark:bg-gray-800 md:flex md:justify-around px-2 sm:px-4 py-2.5">
          <div className='text-white'>
            Logo
          </div>

          <button data-collapse-toggle="navbar" className="inline-flex items-center p-2 rounded-lg md:hidden">
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>

					<ul className="hidden md:flex flex-col md:flex-row space-x-8 font-medium border-0" id="navbar">
						<li>
              <Link href="/" className="block text-gray-400 dark:text-white hover:text-green-600">Dashboard</Link>
            </li>
						<li>
              <Link href="/transfer" className="block text-gray-400 dark:text-white hover:text-green-600">Transfer</Link>
            </li>
						<li>
              <Link href="/convert" className="block text-gray-400 dark:text-white hover:text-green-600">Convert</Link>
            </li>
					</ul>
				</nav>
				{children}
			</body>
		</html>
  );
}
