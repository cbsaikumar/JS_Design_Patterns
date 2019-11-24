import SpecialMath from "./specialMath";

export default class Command{
    constructor(specialMath){
        this.specialMath = specialMath;
        this.commandsExecuted = [];
    }

    execute(command){
        /*If we want, we can add a check on the operations, but it is out of scope
         if(!this.specialMath.hasOwnProperty(command))
             this.commandsExecuted.push('not a valid operation')*/

        this.specialMath[command]();
        this.commandsExecuted.push(command);
    }
}