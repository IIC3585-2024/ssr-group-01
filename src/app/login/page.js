'use client'

import { db } from '../db'

async function loginUser() {
  const email = document.querySelector('input[name="email"]').value;
  const pass = document.querySelector('input[name="pass"]').value;

  const users = await db.users.toArray();
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].pass === pass) {
      db.current.clear();
      db.current.add({'mail': email});
      window.location.href = '/';
      return
    }
  }

  alert('Invalid email or password');
}

export default function login() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    loginUser();
  };

  return (
    <div className="w-full items-center">
      <div className="flex h-12 w-full pt-2 pl-2 justify-center">
        <h1 className="text-3xl font-semibold">
          Login
        </h1>
      </div>
      <div className="flex flex-col pl-2 text-black items-center">
        <form className="justify-center" method="POST" action="/" onSubmit={handleSubmit}>
          <label className="text-md font-semibold text-white items-center">Email</label>
          <br />
          <input className="border-2 rounded-md p-2 items-center" type="email" required name='email' />
          <br />
          <label className="text-md font-semibold text-white">Password</label>
          <br />
          <input className="border-2 rounded-md p-2 " type="password" required name='pass' />
          <br />
          <button className="bg-blue-500 text-white rounded-md p-2 mt-2" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}