import Factory from './factory';

const factory = new Factory();
const alex = factory.getInstance('shopper', 'Alex Banks', 100);
const eve = factory.getInstance('employee', 'Eve Porcello', 100);

//Should return the same instance
const eve2= factory.getInstance('employee', 'Another Eve Porcello', 100);
console.log(alex, eve, eve2)