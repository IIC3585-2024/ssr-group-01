'use client'

import { db } from '../../db'

function create_serie() {
  const seriesName = document.querySelector('input[name="seriesName"]').value;
  const streamingService = document.querySelector('select[name="streamingService"]').value;
  const episodesPerSeason = document.querySelector('input[name="episodesPerSeason"]').value;
  const description = document.querySelector('input[name="description"]').value;
  const category = document.querySelector('select[name="category"]').value;
  const posterURL = document.querySelector('input[name="posterURL"]').value;

  if (!/^\d+(,\d+)*$/.test(episodesPerSeason)) {
    alert('Invalid format for episodesPerSeason. Please use the format int,int,int...');
  }
  else {
    db.series.add({
      'name': seriesName,
      'streaming': streamingService,
      'episodes': episodesPerSeason,
      'description': description,
      'category': category,
      'image': posterURL ? posterURL : '/image.jpg',
      'stars': 0,
      'comments': [],
      'starsList': []
    });
    window.location.href = '/catalog';
  }

}

export default function newSerie() {
  const handleSubmit = (event) => {
    event.preventDefault();
    create_serie();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="lg:w-3/4 md:w-3/4 items-center m-2">
        <div className="flex h-12 w-full justify-left">
          <h1 className="text-3xl font-semibold">
            New series
          </h1>
        </div>

        <div className="flex w-full items-end justify-center">
          <form className="w-full" onSubmit={handleSubmit}>
            <label className="text-md font-semibold text-white items-center">Series name</label>
            <br />
            <input className="border-2 rounded-md p-2 items-center w-full mb-3 text-black" type="text" name="seriesName" required/>
            <br />
            <label className="text-md font-semibold text-white items-center">Streaming service</label>
            <br />
            <select className="border-2 rounded-md p-2 items-center w-full mb-3 text-black" name="streamingService">
                <option value="Netflix">Netflix</option>
                <option value="Disney">Disney+</option>
                <option value="HBO">HBO</option>
              </select>
            <br />
            <label className="text-md font-semibold text-white items-center">Episodes per season (write in format 1,2,3)</label>
            <br />
            <input className="border-2 rounded-md p-2 items-center w-full mb-3 text-black" type="text" name="episodesPerSeason" required/>
            <br />
            <label className="text-md font-semibold text-white items-center">Description</label>
            <br />
            <input className="border-2 rounded-md p-2 items-center w-full mb-3 text-black" type="text" name="description" required/>
            <br />
            <label className="text-md font-semibold text-white items-center">Category</label>
            <br />
            <select className="border-2 rounded-md p-2 items-center w-full mb-3 text-black" id='cat' name="category">
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="fantasy">Fantasy</option>
              </select>
            <br />
            <label className="text-md font-semibold text-white items-center">Poster URL (optional)</label>
            <br />
            <input className="border-2 rounded-md p-2 items-center w-full mb-3 text-black" type="text" name="posterURL" />
            <br />
            
            <button className="bg-blue-500 text-white rounded-md p-2 mt-2" type="submit">Add</button>
          </form>
        </div>
      </div>
    </main>
  );
}