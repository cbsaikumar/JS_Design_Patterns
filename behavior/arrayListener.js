export function arrayListener(array, callback) {
    Object.defineProperties(array, {
        push: {
            configurable: true,
            enumerable: false,
            writable: true,
            value: function(...args){
                const result = Array.prototype.push.apply(this, args)
                // Invoking the listener
                callback("push", args);

                return result;
            }
        },
        pop: {
            configurable: true,
            enumerable: false,
            writable: true,
            value: function(...args){
                const result = Array.prototype.pop.apply(this, args)
                // Invoking the listener
                callback("pop", result);

                return result;
            }
        }
    })
}

export function listener(operation, val) {
    console.log(`${operation} has been performed on the array with values ${val}`)
}