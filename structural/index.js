import CleverCalculator from './cleverCalculator';
import UltimateCalculator from './ultimateCalculator';
import CalcAdapter from './calcAdapter';
import OldCalculator from './oldCalculator';
import LogCalculator from './logCalculator';

//Task-A
const oldCalculator = new OldCalculator();
const calcAdapter = new CalcAdapter();
calcAdapter.multiply(oldCalculator.operations(3,2,'sub'), 6);

//Task-B
const ultimateCalculator = new UltimateCalculator();
console.log('multiplication', ultimateCalculator.multiply(3,200))
console.log('addition', ultimateCalculator.add(3,200))

//Task-C
const cleverCalculator = new CleverCalculator();
console.log('clever add', cleverCalculator.operations('add', 99, 99))
console.log('clever sub', cleverCalculator.operations('sub', 88, 99))
console.log('clever multiply', cleverCalculator.operations('multiply', 3, 22))
console.log('clever divide', cleverCalculator.operations('divide', 99, 3))

//Task-D
const logCalculator = new LogCalculator();
logCalculator.log('add', 99, 13);