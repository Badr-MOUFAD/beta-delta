
function add(...args) {
    if(args.length == 0) {
        return ;
    }

    let result = [];

    const nbRow = args[0].length;
    const nbCol = args[0][0].length;

    for(let i = 0; i < nbRow; i++) {
        let row = [];

        for(let j = 0; j < nbCol; j++) {
            let entry = 0;

            for(matrix of args) {
                entry += matrix[i][j];
            }

            row.push(entry);
        }

        result.push(row);
    }

    return result;
}


function multiply(A, B) {
    let result = [];

    const nbRow = A.length;
    const nbCol = B[0].length;

    for(let i = 0; i < nbRow; i++) {
        let row = [];

        for(let j = 0; j < nbCol; j++) {
            let entry = 0;

            for(let k = 0; k < nbCol; k++) {
                entry += A[i][k] * B[k][j];
            }

            row.push(entry);
        }

        result.push(row);
    }

    return result
}


function inverse(A) {
    const nbRow = A.length;
    const nbCol = A[0].length;

    if(nbRow !== nbCol) {
        throw new Error("None invertible matrix");
    }

    let identity = createIdentity(nbRow);

    const findAndSwapPivot = (i, j) => {
        for(let k = i; k < nbRow; k++) {
            // swap the row with first one
            if(A[k][j] !== 0) {
                for(let s = 0; s < nbCol; s++) {
                    let swapA = A[k][s];
                    let swapI = identity[k][s]

                    A[k][s] = A[i][s];
                    identity[k][s] = identity[i][s];

                    A[i][s] = swapA;
                    identity[i][s] = swapI;
                }

                return ;
            }
        }

        throw new Error("Singular matrix");
    }

    const patternDown = (i, j) => {     
        let pivot = A[indexPivot][j];

        for(let s = i; s < nbCol; s++) {
            let lamda = A[s][j];

            for(let k = 0; k < nbCol; k++) {
                A[s][k] = A[s][k] - A[indexPivot][k] / pivot * lamda;
                identity[s][k] = identity[s][k] - identity[indexPivot][k] / pivot * lamda;
            }
        }
    }

    const patternUp = (i, j) => {
        let pivot = A[indexPivot][j];

        for(let s = i; s >= 0; s--) {
            let lamda = A[s][j];

            for(let k = j; k >= 0; k--) {
                A[s][k] = A[s][k] - A[indexPivot][k] / pivot * lamda;
                identity[s][k] = identity[s][k] - identity[indexPivot][k] / pivot * lamda;
            }
        }
    }

    const patternDiag = () => {
        for(let i = 0; i < nbRow; i++) {
            let lambda = A[i][i];

            for(let j = 0; j < nbCol; j++) {
                A[i][j] /= lambda;
                identity[i][j] /= lambda;
            }      
        }
    }

    // algorithm
    let indexPivot = 0;
    for(let i = 0; i < nbRow - 1; i++) {
        indexPivot = i;
        findAndSwapPivot(i, i);

        patternDown(i + 1, i);
    }

    for(let i = nbRow - 1; i > 0; i--) {
        indexPivot = i;
        
        patternUp(i - 1, i);
    }

    patternDiag();

    return identity;
}


function createIdentity(n) {
    let result = [];

    for (let i = 0; i < n; i++) {
        let row = [];

        for (let j = 0; j < n; j++) {
            if(i === j) {
                row.push(1);
            }
            else {
                row.push(0);
            }
        }

        result.push(row);
    }

    return result;
}


module.exports = { add, multiply, inverse }

//example
//console.log(createIdentity(3));
//let A = [[4, 0, 0], [2, 5, 0], [1, 5, 9]];
//let B = [[4, 0, 0], [2, 5, 0], [1, 5, 9]];
//let A = [[4, 1, 0], [2, 0, 0], [1, 5, 9]];
//let A_inv = inverse(A)
//
//console.log(A_inv)



/* A = inverse([[1, 2, 3], [5, 5, 6], [2, 0, 9]])
console.log(inverse(A)) */