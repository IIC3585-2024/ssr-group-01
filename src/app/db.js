import Dexie from 'dexie';
import { comment } from 'postcss';

export const db = new Dexie('myDatabase');
db.version(1).stores({
  users: '++id,mail,pass',
  series: '++id, name,streaming,episodes,description,category,image,stars,*comments,*starsList',
  current: '++id,mail'
});