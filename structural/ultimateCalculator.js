import NewCalculator from './newCalculator';
import OldCalculator from './oldCalculator';

export default class UltimateCalculator extends NewCalculator{
    constructor(){
        super();
        this.oldCalculator = new OldCalculator();
    };

    add(n1, n2){
        return this.oldCalculator.operations(n1, n2, 'add').res;
    };

    sub(n1, n2){
        return this.oldCalculator.operations(n1, n2, 'sub').res;
    }
}