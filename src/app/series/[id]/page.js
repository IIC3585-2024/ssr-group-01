'use client'

import { db } from '../../db';
import { useLiveQuery } from "dexie-react-hooks";
import { usePathname } from 'next/navigation';

let serie
let id
let current

function getSerieInfo(series, id) {
  let s = { 'episodes': [], 'comments': [] };

  if (!series) return s;

  for (let i = 0; i < series.length; i++) {
    if (series[i].id == id) {
      s = series[i];
      return {
        id,
        name: s.name,
        streaming: s.streaming,
        description: s.description,
        episodes: s.episodes.split(','),
        rating: s.stars,
        rating_count: s.starsList.length,
        category: s.category,
        image: s.image,
        comments: s.comments,
        starsList: s.starsList,
      };
    }
  }
  return s;

}

function postComment() {
  const comment = document.getElementById('comment').value;
  const rating = document.getElementById('rating').value;

  if (comment === '') {
    alert('Please write a comment');
    return;
  }

  let comments = serie.comments;
  comments.push({ user: current[0].mail, comment: comment });
  let stars = serie.starsList;
  stars.push(rating);

  const s = stars.map(star => parseInt(star));
  const sum = s.reduce((acc, star) => acc + star, 0);
  const average = sum / s.length;
  db.series.update(parseInt(id), {stars: average, comments: comments, starsList: stars});
}

export default function Serie() {
  const pathname = usePathname()
  id = pathname.split('/').pop();

  const series = useLiveQuery(
    () => db.series.toArray()
  );

  current = useLiveQuery(
    () => db.current.toArray()
  );

  serie = getSerieInfo(series, id);

  console.log(series);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full items-center">
        <div className="flex h-12 w-full items-end justify-center mb-3">
          <h1 className="text-3xl font-semibold">
            {serie ? serie.name : ''}
          </h1>
        </div>

        <div className="items-center lg:grid lg:grid-cols-3 gap-4 mb-4">
          <div className="items-center">
            <img src={serie ? serie.image : ''} alt="The Witcher" className="mx-auto shadow-[1px_1px_10px_2px_rgba(255,255,255,1)]" style={{ width: '300px', height: '450px', borderRadius: '10px' }} />
          </div>
          <div className="col-span-2 m-4 text-2xl">
            <p className="mb-3">{serie ? serie.description : ''}</p>
            <p className="mb-3">Streaming: {serie ? serie.streaming : ''}</p>
            <p className="mb-3">Episodes per season:</p>
            <ul className="mb-3 text-[#aaaaaa]">
              {serie ? serie.episodes.map((episodes, index) => (
                <li key={index} className="mb-1">Season {index + 1}: {episodes}</li>
              )) : ''}
            </ul>
            <p>Category: {serie ? serie.category : ''}</p>
          </div>
        </div>

        <div className="flex grid w-full justify-center text-2xl">
          <p>Rating: {serie ? serie.rating : ''} ({serie ? serie.rating_count : ''})</p>
        </div>

        <div>
          <div className="flex justify-center m-2 text-2xl">
            <p>Comments:</p>
          </div>

          <div className="justify-center items-center m-2">
            {serie ? serie.comments.length === 0 ? <p>No comments yet</p> : serie.comments.map((comment, index) => (
              <div key={index} className="flex-col m-2">
                <p>{comment.user}</p>
                <p>{comment.comment}</p>
              </div>
            )) : ''}
          </div>
        </div>

        <div className="flex w-full justify-center">
          {(current && current.length > 0) ?
            <>
              <input type="text" id="comment" className="border-2 rounded-md p-2 m-2 text-black" placeholder="Write a comment" />
              <input type="number" id="rating" className="border-2 rounded-md p-2 m-2 text-black" placeholder="Rating" min="1" max="10" defaultValue={1}/>
              <button className="bg-blue-500 text-white rounded-md p-2 m-2" onClick={() => postComment()}>Post</button>
            </>
            :
            <p>Please log in to post a comment</p>}

        </div>
      </div>
    </main>
  );
}