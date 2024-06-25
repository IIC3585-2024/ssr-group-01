'use client'

import { db } from '../db';
import { useLiveQuery } from "dexie-react-hooks";

const Navbar = () => {

  db.current.clear();

  window.location.href = '/';

  return (
    <div className="">
    </div>
  );
};

export default Navbar;