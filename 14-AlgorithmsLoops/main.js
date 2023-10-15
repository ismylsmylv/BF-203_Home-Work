//1. Son rəqəmi 7 olan bütün iki rəqəmli ədədləri çapa verən proqram tərtib edin.
// for(let i=9; i<=99; i++){
//     if(i%10==7){
//         console.log(i);
//     }
// }

//2. Rəqəmləri eyni olan bütün iki rəqəmli ədələrin çapa verən proqram tərtib edin.
// for (let i = 9; i <= 99; i++) {
//     let str = String(i)
//     if (str[0] == str[1]) {
//         console.log(i);
//     }
// }

//3. Verilmiş ədədi rəqəmlərinə ayıran proqram tərtib edin.
// let num=Number(prompt("enter number:"))
// while(num>0){
//     let a =num%10;
//     num=(num-a)/10
//     console.log(a);
// }

//4. Verilmiş ədədin rəqəmlərindən ən böyük olanı təyin edən proqram tərtib edin.
// let num = Number(prompt("enter number:"))
// let max = 0
// while (num > 0) {
//     let a = num % 10;
//     num = (num - a) / 10
//     if (max < a) {
//         max = a
//     }
// }
// console.log(max);

//5. Verilmiş ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin. 
// let num = Number(prompt("enter number:"))
// let sum = 0
// let count = 0
// let product = 1
// while (num > 0) {
//     let a = num % 10;
//     num = (num - a) / 10
//     product=product*a
//     sum+=a
//     count++

// }
// console.log(`hasil ${product}, cəm ${sum}, ədədi orta ${Math.round((sum/count))}`);

//6. Verilmiş ədədin bütün bölənlərini tapan proqram tərtib edin.
// let num=Number(prompt("enter number:"))
// let count=0
// for(let i=0; i<=num; i++){
//     if(num%i==0){
//         console.log(i);
//     }
// }


//7. Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.
// let arr = [3, 8, 2, 5, 4, 10, 7, 6]
// let count = 0
// for (j = 0; j < arr.length; j++) {
//     for (let i = 0; i <= arr[j]; i++) {
//         if (arr[j] % i == 0) {
//             count++
//         }
//     }
//     console.log(`Array element ${arr[j]} has ${count} dividers `)
//     count = 0
// }

//8. Verilmiş array-in tək elementlərinin indeksini çapa verən proqram tərtib edin.
// let arr = [3, 8, 2, 5, 4, 10, 7, 6]
// for (j = 0; j < arr.length; j++) {
//     if (arr[j] % 2 == 1) {
//         console.log(j);
//     }
// }

//9. Verilmiş array-in tək indeksli elementlərini çapa verən proqram tərtib edin.
// let arr = [3, 8, 2, 5, 4, 10, 7, 6]
// for (let i = 1; i < arr.length; i++) {
//     if (i % 2 == 1) {
//         console.log(arr[i]);
//     }

// }

//10. Verilmiş array-in max elementini çapa verən proqram tərtib edin.
// let arr = [3, 8, 2, 5, 4, 10, 7, 6]
// let max=arr[0]
// for (let i = 1; i < arr.length; i++) {
//     if(max<arr[i]){
//         max=arr[i]
//     }

// }
// console.log(max);

//11. Verilmiş array-in cüt elementlərinin max elementini çapa verən proqram tərtib edin.
// let arr = [3, 8, 2, 5, 4, 10, 7, 6]
// let max=0
// for (let i = 1; i < arr.length; i++) {
//     if(arr[i]%2==0){
//         if(max<arr[i]){
//             max=arr[i]
//         }
//     }
// }
// console.log(max);

//12. Verilmiş array-in min elementinin indeksini çapa verən proqram tərtib edin.
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (min > arr[i]) {
//         min = arr[i];
//     }
// }
// for (let i = 0; i < arr.length; i++) {
//     if (min == arr[i]) {
//         console.log(i);
//     }
// }

//13. Verilmiş array-in min elementi ilə max elementinin yerini dəyişən proqram tərtib edin.
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// let min = arr[0];
// let minIndex = 0;
// let max = arr[0];
// let maxIndex = 0;

// for (let i = 1; i < arr.length; i++) {
//     if (min > arr[i]) {
//         min = arr[i];
//         minIndex = i;
//     }

//     if (max < arr[i]) {
//         max = arr[i];
//         maxIndex = i;
//     }
// }

// let temp = arr[minIndex];
// arr[minIndex] = arr[maxIndex];
// arr[maxIndex] = temp;

// console.log(arr);

//14. Verilmiş array-in  cüt elementlərinin min elementi ilə tək elementlərinin max elementinin yerini dəyişən proqram tərtib edin
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// let min = Infinity;
// let max = -Infinity;
// let minIndex = 0;
// let maxIndex = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//         if (max < arr[i]) {
//             max = arr[i];
//             maxIndex = i;
//         }
//     } else {
//         if (min > arr[i]) {
//             min = arr[i];
//             minIndex = i;
//         }
//     }
// }


// let temp = arr[minIndex];
// arr[minIndex] = arr[maxIndex];
// arr[maxIndex] = temp;
// console.log(arr);

//15. Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin.
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// let inc = false;
// let num = Number(prompt("Enter number:"));

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//         inc = true;
//         break;
//     }
// }

// if (inc) {
//     console.log("Included");
// } else {
//     console.log("Not included");
// }

//16. Verilmiş array-də min və max elementi nəzərə almadan yerdə qalan bütün elementlərin cəmini tapın.
// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
// let min = Infinity;
// let max = -Infinity;
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
//     if (min > arr[i]) {
//         min = arr[i];
//     }
// }

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === min || arr[i] === max) {
//         continue;
//     }
//     sum += arr[i];
// }
// console.log(sum);

//17. Verilmiş array-in bool tipinde olan elementin qonsu elementlerini ekrana cixaran proqram yazin
// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4]
// for (let i=0; i<arr.length; i++){
//     if(arr[i]===true || arr[i]===false){
//         console.log(`neighbours are  ${arr[i+1]} and  ${arr[i-1]}`)
//     }
// }

//18. Verilmiş array-in ən uzun sözünü ekrana çıxaran proqram yazın
// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4]
// let max = 0
// let word = 0
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string' && max < arr[i].length) {
//         max = arr[i].length
//         word = arr[i]
//     }
// }
// console.log(word)

//19. Verilmiş array-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.
// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string' && arr[i] === arr[i].toUpperCase()) {
//         console.log(`${arr[i]} at ${i} `);
//     }
// }

//20. Verilmiş array-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın
let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
        let count = 0;

        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] >= 'A' && arr[i][j] <= 'Z') {
                count++;
            }
        }

        if (count > 2) {
            console.log(arr[i]);
        }
    }
}
