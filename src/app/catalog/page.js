'use client'

import React, { useState } from 'react';
import { db } from '../db';
import { useLiveQuery } from "dexie-react-hooks";

export default function Home() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [minStars, setMinStars] = useState(0);

  const series = useLiveQuery(
    () => db.series.toArray()
  );

  const current = useLiveQuery(
    () => db.current.toArray()
  );

  let filteredSeries = series;

  return (

    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full items-center justify-center">
        <div className="h-12 w-full items-end m-4 text-center">
          <h1 className="text-3xl font-semibold justify-center">
            Catalog
          </h1>
        </div>

        <div className="flex h-12 w-full items-end justify-center mb-4">
          <p>In this section you can find information about your favorite movies, as well as comments made by other viewers. You can also add add new movies if you want.</p>
        </div>

        <div className="lg:grid lg:grid-cols-3 m-4 text-black lg:pl-16 lg:pr-16">
          <div className="">
            <label className="text-md font-semibold text-white items-center">Search</label>
            <br />
            <input className="border-2 rounded-md p-2 items-center" type="text" id='name' value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>

          <div>
            <label className="text-md font-semibold text-white items-center">Category</label>
            <br />
            <select className="border-2 rounded-md p-2 items-center" id='cat' value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="all">All</option>
              <option value="action">Action</option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="fantasy">Fantasy</option>
            </select>
          </div>

          <div className="">
            <label className="text-md font-semibold text-white items-center">Minimum Stars</label>
            <br />
            <input className="border-2 rounded-md p-2 items-center" type="number" min="0" max="10" id='star' value={minStars} onChange={(e) => setMinStars(e.target.value)} />
          </div>
        </div>

        <div className="flex h-12 w-full items-end justify-center">
          {(current && current.length > 0) ?
            <button className="bg-blue-500 text-white rounded-md p-2 mt-2">
              <a href="/series/new">
                Add new series
              </a>
            </button>
            : null}
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 m-4" id='series'>
          {filteredSeries ? filteredSeries.map((serie) => (validSerie(serie, search, category, minStars) ?
            <div key={serie.id}>
              <a href={`/series/${serie.id}`}>
                <img className='shadow-[1px_1px_5px_2px_rgba(255,255,255,1)]' src={serie.image} alt={serie.name} style={{ width: '300px', height: '450px', borderRadius: '10px' }} />
                <h3>{serie.name}</h3>
                <p>{serie.category}</p>
                <p>{serie.stars} stars</p>
              </a>
            </div>
            : null)) : <p>No series yet</p>}
        </div>
      </div>
    </main>
  );
}

function validSerie(serie, search, category, minStars) {
  const nameMatch = serie.name.toLowerCase().includes(search.toLowerCase());
  const categoryMatch = category === 'all' || serie.category.toLowerCase() === category.toLowerCase();
  const starsMatch = serie.stars >= minStars;
  return nameMatch && categoryMatch && starsMatch;
}