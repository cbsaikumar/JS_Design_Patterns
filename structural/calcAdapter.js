import NewCalculator from './newCalculator';

export default class calcAdapter{
    constructor(){
        this.newCalculator = new NewCalculator();
    }

    multiply(obj, n){
        this.newCalculator.multiply(obj.res, n)
    }
}