const BasicMath = require("./BasicMath");


export default function Workspace(R, r, L, H) {
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

    // algorithm
    const xLim = Math.floor(R);
    const yLim = Math.floor(R);
    const zLim = H - Math.sqrt(L ** 2 - DR ** 2);

    const nbPoints = 2 * xLim;  // number of points in plane
    const nbPlans = 50; // number of plans

    let X = BasicMath.lineSpace(-xLim, xLim, nbPoints);
    let Y = BasicMath.lineSpace(-yLim, yLim, nbPoints);
    let Z = BasicMath.lineSpace(0, zLim, nbPlans);

    let workSpace = [];

    for(let k = 0; k < Z.length; k++) {
        let workSpaceForZ = {
            x: [],
            y: []
        };

        for(let i = 0; i < X.length; i++) {
            for(let j = 0; j < Y.length; j++) {
                if (!belowD1([X[i] + u1[0], Y[j] + u1[1]]))
                    continue
    
                if (!belowD2([X[i] + u2[0], Y[j] + u2[1]]))
                    continue
    
                if (!aboveD3([X[i] + u3[0], Y[j] + u3[1]]))
                    continue

                let valueL1 = L1([X[i], Y[j], Z[k]]);
                let valueL2 = L2([X[i], Y[j], Z[k]]);
                let valueL3 = L3([X[i], Y[j], Z[k]]);
            
                if(valueL1 !== undefined && valueL2 !== undefined && valueL3 !== undefined) {
                    workSpaceForZ.x.push(X[i]);
                    workSpaceForZ.y.push(Y[j]);
                }         
            }
        }

        workSpace.push(workSpaceForZ);
    }

    return workSpace;
}


//example
//console.log(WorkSpace(225.61, 60, 210, 1200))
//console.log(Workspace(226, 60, 244, 1200));
