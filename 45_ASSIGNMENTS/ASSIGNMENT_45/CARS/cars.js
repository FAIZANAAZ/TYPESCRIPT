"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function car_infomation(manufacture, modeName, ...extraoption) {
    const carinfo = Object.assign({ manufacture,
        modeName }, Object.assign({}, ...extraoption));
    return carinfo;
}
;
let answer = car_infomation('HONDA', 'Civic', { Color: 'Black' }, { features: ['Navigation', 'power window'] });
console.log(answer);
