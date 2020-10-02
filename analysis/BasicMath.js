
function lineSpace(xMin, xMax, nbPoints) {
    let result = [];
    let step = (xMax - xMin) / nbPoints;

    for(let i = xMin; i < xMax; i+=step) {
        result.push(i);
    }

    return result;
}


function euclidienNorm(vector) {
    let sumSqr = 0;

    vector.forEach(coordinate => {
        sumSqr += coordinate ** 2
    });

    return Math.sqrt(sumSqr);
}


//export const BasicMath = { lineSpace, euclidienNorm };

module.exports = { lineSpace, euclidienNorm };
//example
//console.log(euclidienNorm([1, 0, 1]));
//console.log(lineSpace(-5, 5, 10));
