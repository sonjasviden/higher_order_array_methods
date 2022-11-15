/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map()
 * .reduce()
 *
 * - Clone an array
 * - Shuffle an array
 */

// names
const names = ["Johan", "Fredrik", "Saman", "Alicia", "Maja", "Elliot"];
console.log("Names in chaos:", names);

names.sort(); // Namnen hamnar i alfabetisk ordning

names.reverse(); // Namnen hamnar i baklänges alfabetisk ordning



const numbers = [47, 5, 9, 15, 20, 49, 10, 34, 38, 103, 11, 23, 45, 31];

numbers.sort( (a, b) => {

    // if (a < b) {
    //     return -1;
    // }

    // if (a > b) {
    //     return -1;
    // }

    return (a-b);
})

console.log(numbers);