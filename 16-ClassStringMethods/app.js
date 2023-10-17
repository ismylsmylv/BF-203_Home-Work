// 1. Verilmiş string - dəki bütün _(underscore - ları) - (dash) ilə əvəz edin.
// let str = "words_between_underscores"
// console.log(str.replaceAll("-", "_"));

// 2. Bir function yazın. parametr olaraq bir string qəbul edir və həmin string -in bütün simvollarını kiçik hərflərlə əvəz edib return edin. (Arrow function yazmalısınız)
// let str = "MixedCaSe"
// toLower = (string) => {
//     return string.toLocaleLowerCase()
// }
// console.log(toLower(str));

// 3. Bir function yazın. parametr olaraq bir string qəbul edir.Function - ın içərisində string -in əvvəl və sonundakı boşluq - ları silməli və geri qalan bütün simvolları bir array element - i kimi array - ə çevirib onu return etməlisiniz.Məsələn("  hey  ") input olaraq daxil olunsa output => ['h', 'e', 'y'] olmalıdır. (Anonym function yazmalısınız)
// str = " salam "
// let modded = function (string) {
//     return string.trim().split('')
// }
// console.log(modded(str));

// 4. Bir function yazın.("Robin Singh from USA")) input olaraq belə bir string qəbul edərsə, output - a "robin-singh-from-usa" string - ini verməlidir.Arrow function yazmalısınız.
// let str = "Robin Singh from USA"
// changer = (string) => {
//     if (string === "Robin Singh from USA") {
//         return string.replaceAll(" ", "-").toLowerCase()
//     }
// }
// console.log(changer(str));

//5. Bir function yazın, input olaraq ('js string exercises') qəbul edərsə output-da "Js string exercises" string-ini qaytarmalıdır. Capitalize etməlidir. Regular function yazmalısınız.
// let str = "js string exercises"
// function upper(string) {
//     if (string === 'js string exercises') {

//         return (string[0].toUpperCase() + string.slice(1))
//     }
// }
// console.log(upper(str));

//6. Daxil edilmiş string-dəki böyük hərflərin sayını return edən bir anonym function yazın.
// let str = "stringCamelCase withSpace"
// let counter = function (string) {
//     let count = 0
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] == string[i].toUpperCase() && string[i] != " ") {
//             count++
//         }
//     }
//     return count
// }
// console.log(counter(str));

//7. Bir function yazın, parametr olaraq bir söz və bir cümlə qəbul edir. Əgər həmin söz cümlədə tapılarsa bir object return edir. Object-də isFound və index dəyərləri olur. Əgər tapılarsa həmin söz isFound true, index isə həmin sözün indeksi olur. Əgər tapılmasa isə isFound false, index isə -1 olmalıdır.
// function finder(word, sentence) {
//     let resObj = {
//         IsFound: false,
//         index: -1
//     }
//     word = prompt("enter word")
//     sentence = prompt("enter sentence")
//     if (sentence.toLowerCase().includes(word.toLowerCase())) {
//         resObj.IsFound = true
//         resObj.index = sentence.indexOf(word)
//     }
//     return resObj
// }
// console.log(finder());

//8. Bir Human Function Constructor yaradırsınız. Human-ın name, surname, birthYear, birthCity propert-ləri və getFullName adında bir metodu var, hansı ki fullname-ini qaytarmalıdır (name və surname-i). Bu function constructor-dan istifadə edib 4-5 human yaradın və bir people array-i yaradıb ora yığın. Daha sonra searchHuman adında bir function yazın və bu function sizdən bir search string-i və bir dənə isə haradan axtaracağı array-i qəbul edir. search string-inin dəyərini prompt-dan götürəcəksiniz. Search fullname-ə görə olmalıdır. Yəni mən yalnız name-i yazıb və ya yalnız surname-i yazıb axtarsan ona uyğun data-larımı qaytarmalıdır function. Eyni zaman-da həm name həm də surname-i yazıb axtarsam yenə tapıb qaytarmalıdır. searchByFullName function-ı yaratmalısınız və geriyə kimləri tapdısa, həmin human object-lərini bir array-ə yığıb onu return etməlisiniz.
function Human(name, surname, birthYear, birthCity) {
    this.name = name
    this.surname = surname
    this.birthYear = birthYear
    this.birthCity = birthCity
    this.getFullName = function () {
        return this.name + " " + this.surname
    }
}
let john = new Human("John", "Doe", 2000, "London")
let cassie = new Human("Cassie", "Taylor", 1990, "New York")
let carter = new Human("Knowles", "Carter", 1981, "Houston")
let adam = new Human("Adam", "Driver", 1983, "San Diego")
let people = []
people.push(john, cassie, carter, adam)

let search = prompt("enter name:");

function searchHuman(string, arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name.toLowerCase().includes(string.toLowerCase()) || arr[i].surname.toLowerCase().includes(string.toLowerCase())) {
            res.push(arr[i])
        }
    }
    return res
}
console.log(searchHuman(search, people));