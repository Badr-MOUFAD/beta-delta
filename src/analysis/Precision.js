import MatrixOperations from "./MatrixOperations";

const BasicMath = require("./BasicMath");
const VectorialFunction = require("./VetorialFunction");
const MatrixOperation = require("./MatrixOperations");


export default function Precision(R, r, L, H) {
    const cosPi3 = Math.cos(Math.PI / 3);
    const sinPi3 = Math.sin(Math.PI / 3);
    const DR = R - r;

    const h = r * cosPi3;
    const u1 = [-h * sinPi3, h * cosPi3];
    const u2 = [h * sinPi3, h * cosPi3];
    const u3 = [0, -h];

    // equation of motion
    const L1 = (x) => {
        const term = (DR * sinPi3 + x[0]) ** 2 + (DR * cosPi3 + x[1]) ** 2;
        
        if(L ** 2 < term) {
            return undefined;
        }

        const result = x[2] + Math.sqrt(L ** 2 - term);

        if(result > H) {
            return undefined;
        }

        return result;
    }

    const L2 = (x) => {
        const term = (-DR * sinPi3 + x[0]) ** 2 + (DR * cosPi3 + x[1]) ** 2;

        if(L ** 2 < term) {
            return undefined;
        }

        const result = x[2] + Math.sqrt(L ** 2 - term);

        if(result > H) {
            return undefined;
        }

        return result;
    }

    const L3 = (x) => {
        const term = x[0] ** 2 + (-DR + x[1]) ** 2;

        if(L ** 2 < term) {
            return undefined;
        }

        const result = x[2] + Math.sqrt(L ** 2 - term);

        if(result > H) {
            return undefined;
        }

        return result;
    }

    // constraint 
    const belowD1 = (x) => {
        if ((cosPi3 + 1) / sinPi3 * x[0] + R > x[1]) {
            return true;
        }

        return false;
    }

    const belowD2 = (x) => {
        if (-(cosPi3 + 1) / sinPi3 * x[0] + R > x[1]) {
            return true;
        }
        
        return false;
    }

    const aboveD3 = (x) => {
        if (x[1] > - R * cosPi3) {
            return true;
        }

        return false;
    }

    //precision algorithm
    const calculatePrecision = (x) => {
        let vectorFunction = new VectorialFunction([L1, L2, L3]);

        let matrix = MatrixOperations.inverse(vectorFunction.jacobienMatrix(x));
    }

}