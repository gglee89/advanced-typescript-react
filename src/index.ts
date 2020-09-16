import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection('xaaa');

// numbersCollection.sort();
// console.log(numbersCollection.data);

console.log(charactersCollection.data);
charactersCollection.sort();
console.log(charactersCollection.data);

// const list = new LinkedList();
// list.add(10);
// list.add(3);
// list.add(-5);
// list.add(0);
// list.sort();
// list.print();
