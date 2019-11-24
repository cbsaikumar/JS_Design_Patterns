import CumulativeSum from './cumulativeSum';
import Command from './command';
import SpecialMath from './specialMath';
import { arrayListener, listener } from './arrayListener';

//Task-A
const sum1 = new CumulativeSum();
console.log(sum1.add(10).add(2).add(50).sum);

//Task-B
const x = new Command(new SpecialMath(5));
x.execute('square');
x.execute('squareRoot');
x.execute('cube');

console.log(x.commandsExecuted); // ['square', 'squareRoot', 'cube']

//Task-C
const users = ["Alex Banks", "Eve Porcello"];
arrayListener(users, listener)

users.push('Bhargava', 'Sai')
users.push('Kumar')