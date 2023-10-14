//1. Son rəqəmi 7 olan bütün iki rəqəmli ədədləri çapa verən proqram tərtib edin.
// let arr=[345, 17, 2357, 7, 90, 88, 37, 198]
// for(let i=0; i<=arr.length; i++){
//     if(arr[i]>=10 && arr[i]<=99 && arr[i]%10==7){
//         console.log(arr[i]);
//     }
// }

//2. Rəqəmləri eyni olan bütün iki rəqəmli ədələrin çapa verən proqram tərtib edin.
// let arr = [33, 222, 1, 87, 999, 66, 56]
// for (let i = 0; i < arr.length; i++) {
//     let arrStr = String(arr[i])
//     if (arr[i] > 10 && arr[i] < 100 && arrStr[0] == arrStr[1]) {
//         console.log(arr[i]);
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
let arr = [3, 8, 2, 5, 4, 10, 7, 6]
let max=arr[0]
for (let i = 1; i < arr.length; i++) {
    if(max<arr[i]){
        max=arr[i]
    }
    
}
console.log(max);
