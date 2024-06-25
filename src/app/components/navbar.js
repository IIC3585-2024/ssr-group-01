'use client'

import Link from 'next/link';

import { db } from '../db';
import { useLiveQuery } from "dexie-react-hooks";

const Navbar = () => {

  const current = useLiveQuery(
    () => db.current.toArray()
  );

  return (
    <div className="w-full h-10 border-b border-gray-300 bg-gradient-to-b from-emerald-1000 pb-6 pt-8 backdrop-blur dark:border-neutral-800 dark:bg-emerald-600/30 dark:from-inherit sticky top-0 ">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <ul className="flex gap-x-6 text-white">
            <li>
              <Link href="/"><p>Home</p></Link>
            </li>
            <li>
              <Link href="/catalog"><p>Catalog</p></Link>
            </li>
          </ul>
          <ul className="flex gap-x-6 text-white">
            {(current && current.length > 0) ?
            <>
              <li>
                <p>{current[0].mail}</p>
              </li>
              <li>
                  <Link href="/logout"><p>Logout</p></Link>
                </li>
              </>
              :
              <>
                <li>
                  <Link href="/login"><p>Login</p></Link>
                </li>
                <li>
                  <Link href="/register"><p>Register</p></Link>
                </li>
              </>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;