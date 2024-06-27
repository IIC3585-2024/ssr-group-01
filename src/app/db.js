import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(1).stores({
  users: '++id,mail,pass',
  series: '++id, name,streaming,episodes,description,category,image,stars,*comments,*starsList',
  current: '++id,mail'
});

db.on('populate', (transaction) => {
  transaction.series.add({name: 'The Mandalorian', streaming: 'Disney+', episodes: '16', description: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.', category: 'Sci-Fi', image: 'https://www.themoviedb.org/t/p/original/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg', stars: 4, comments: [], starsList: [3, 5]});
  transaction.series.add({name: 'The Queen\'s Gambit', streaming: 'Netflix', episodes: '7', description: 'Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.', category: 'Drama', image: 'https://www.themoviedb.org/t/p/original/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg', stars: 5, comments: [], starsList: [4, 6]});
});

db.open();
