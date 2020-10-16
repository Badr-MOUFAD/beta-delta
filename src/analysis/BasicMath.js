
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


function generateTuples(dimension, arrItems) {
    if(dimension === 1) {
        return arrItems.map(item => [item]);
    }

    let result = [];
    for(let item of arrItems) {
        for(let tuple of generateTuples(dimension - 1, arrItems)) {
            result.push(tuple.concat(item));
        }
    }

    return result;
 }



//example
//console.log(euclidienNorm([1, 0, 1]));
//console.log(lineSpace(-5, 5, 10));
//console.log(generateTuples(10, [0, 1]));

module.exports = { lineSpace, euclidienNorm, generateTuples };