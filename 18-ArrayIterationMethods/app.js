//1. Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran proqram yazın.
// let array = [23, 5, 98, 32]
// let returnArray = array.map(element =>
//     Math.pow(element, 2)
// )
// console.log(returnArray);


//2. Array-in müsbət elementlərinin cəmini tapan funksiya yazın. Əgər array-in bütün elementləri mənfidirsə geriyə 0 qaytarsın.
// let array = [-23, -5, -98, -32]
// let sum = 0
// let returnArray = array.map(element => {
//     sum += element
//     if (element < 0) {
//         return 0
//     }
//     else {
//         return sum
//     }
// }
// )
// console.log(returnArray);


//3. Array-in median və ədədi ortasını obyekt tərkibində return edən funksiya yazın. Median- ən kiçik element ilə ən böyük elementin ədədi ortasıdır.
// function calc(arr) {
//     arr.sort((a, b) => a - b);
//     let sum = 0
//     let returnArray = array.map(element => {
//         sum += element
//     })

//     let average = Math.round(sum / arr.length)
//     let min=Infinity
//     let max=-Infinity
//     arr.forEach(element => {
//         min = Math.min(min, element);
//         max = Math.max(max, element);
//     });
//     let median;
//     median=(min+max)/2

//     return {
//         median: median,
//         average: average
//     };
// }

// let array = [23, 5, 98, 32, 54, 72];
// let result = calc(array);
// console.log(result);


//4. Hər hansı bir cümlədə istənilən  böyük hərflə olan simvolları birləşdirib qaytaran funksiya yazın.
// let str = "Lorem IpsumDolar Sit"
// function capitals(string) {
//     let caps = string.split('').map(element => {
//         if (element == element.toUpperCase() && element != " ") {
//             return element
//         }
//     });
//     return caps.join('')
// }
// console.log(capitals(str));

//5. Cümlədə olan bütün sözləri ixtisar edən proqram tərtib edin. Əgər söz 4 hərfdən azdırsa o qısaldılmır. İxtisar zamanı başdakı və sondakı hərflər saxlanılır, ortada olan hərflərin sayı yazılır. Cümlədə heç bir durğu işarəsi olmayacaq. Məsələn qurban-q4n, stəkan-s4n, javascript-j8t
function changer(sentence) {
    return sentence.replace(/\b(\w)(\w{2,})(\w)\b/g, (match, first, middle, last) => {
        return first + (middle.length - 1) + last;
    });
}

let sentence = "longword longerword longestword";
let changedSentence = changer(sentence);

console.log(changedSentence);
