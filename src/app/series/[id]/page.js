'use client'

import { usePathname } from 'next/navigation';

export default function Serie() {
  const pathname = usePathname()
  const  id  = pathname.split('/').pop();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full items-center">
        <div className="flex h-12 w-full items-end justify-center">
          <h1 className="text-3xl font-semibold">
            {id}
          </h1>
        </div>

        <div>
          <p>The id from the serie is: {id}</p>
        </div>
      </div>
    </main>
  );
}