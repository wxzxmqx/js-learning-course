'use strict';

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`); // will be shown
        return retirement;
        console.log(`test`); // unreachable code after 'return'
    } else {
        console.log(`${firstName} has already retired`); // will be shown
        return -1;
        console.log(`test`); // unreachable code after 'return'
    }
}

console.log(yearsUntilRetirement(1991, 'Max'));
console.log(yearsUntilRetirement(1950, 'Mike'));