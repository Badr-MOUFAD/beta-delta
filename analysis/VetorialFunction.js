
export default class VectorialFunction {
    constructor(coordinatesFunctions) {
        // an array of function
        this.coordinatesFunctions = coordinatesFunctions;
    }

    valueIn(x0) {
        let result = [];

        for(let f of this.coordinatesFunctions) {
            result.push(f(x0));
        }

        return result;
    }

    // partial derevative of the i-th coordinate function with regards to the j-th variable
    partialDerevative(i, j, x0) {
        const f = this.coordinatesFunctions[i];
        const h = Math.pow(10, -5);
        const x0_ = [...x0];

        x0_[j] += h 

        return (f(x0_) - f(x0)) / h;
    }

    jacobienMatrix(x0) {
        let matrix = [];

        for(let i=0; i < this.coordinatesFunctions.length; i++) {
            let row = [];

            for(let j=0; j < x0.length; j++) {
                row.push(this.partialDerevative(i, j, x0));
            }

            matrix.push(row);
        }

        return matrix;
    }
}


//example 
/* const vectorfunction = new VectorielFunction([x => 2 * x[0], x => x[1]])
console.log(vectorfunction.valueIn([1, 2]));
console.log(vectorfunction.partialDerevative(0, 0, [1, 1]));
console.log(vectorfunction.jacobienMatrix([1, 1])); */
