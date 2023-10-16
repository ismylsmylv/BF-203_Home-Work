//main array cut due performance issues
{
    data = [
        {
            "iso2": "AF",
            "iso3": "AFG",
            "country": "Afghanistan",
            "cities": [
                "Herat",
                "Kabul",
                "Kandahar",
                "Molah",
                "Rana",
                "Shar",
                "Sharif",
                "Wazir Akbar Khan"
            ]
        },
        {
            "iso2": "AL",
            "iso3": "ALB",
            "country": "Albania",
            "cities": [
                "Elbasan",
                "Petran",
                "Pogradec",
                "Shkoder",
                "Tirana",
                "Ura Vajgurore"
            ]
        },
        {
            "iso2": "DZ",
            "iso3": "DZA",
            "country": "Algeria",
            "cities": [
                "Algiers",
                "Annaba",
                "Azazga",
                "Batna City",
                "Blida",
                "Bordj",
                "Bordj Bou Arreridj",
                "Bougara",
                "Cheraga",
                "Chlef",
                "Constantine",
                "Djelfa",
                "Draria",
                "El Tarf",
                "Hussein Dey",
                "Illizi",
                "Jijel",
                "Kouba",
                "Laghouat",
                "Oran",
                "Ouargla",
                "Oued Smar",
                "Relizane",
                "Rouiba",
                "Saida",
                "Souk Ahras",
                "Tamanghasset",
                "Tiaret",
                "Tissemsilt",
                "Tizi",
                "Tizi Ouzou",
                "Tlemcen"
            ]
        },
        {
            "iso2": "AD",
            "iso3": "AND",
            "country": "Andorra",
            "cities": [
                "Andorra la Vella",
                "Canillo",
                "Encamp",
                "Engordany",
                "Escaldes-Engordany",
                "La Massana",
                "Llorts",
                "Ordino",
                "Santa Coloma",
                "Sispony",
                "Soldeu"
            ]
        },
        {
            "iso2": "AO",
            "iso3": "AGO",
            "country": "Angola",
            "cities": [
                "Ambriz",
                "Benguela",
                "Cabinda",
                "Cacole",
                "Camabatela",
                "Cazeta",
                "Huambo",
                "Kuito",
                "Lobito",
                "Luanda",
                "Lubango",
                "Lucapa",
                "Lumeje",
                "Malanje",
                "Menongue",
                "Muxaluando",
                "Namibe",
                "Ondjiva",
                "Piri",
                "Saurimo",
                "Talatona"
            ]
        },
        {
            "iso2": "AI",
            "iso3": "AIA",
            "country": "Anguilla",
            "cities": [
                "The Valley",
                "Blowing Point Village",
                "Sandy Ground Village",
                "Sandy Hill",
                "East End Village",
                "George Hill",
                "Island Harbour",
                "North Hill Village",
                "North Side",
                "South Hill Village",
                "Stoney Ground",
                "Farrington",
                "The Quarter",
                "West End Village"
            ]
        },
        {
            "iso2": "AG",
            "iso3": "ATG",
            "country": "Antigua and Barbuda",
            "cities": [
                "All Saints",
                "Cassada Gardens",
                "Codrington",
                "Old Road",
                "Parham",
                "Woods"
            ]
        }]

}


//1. Sadəcə ölkə adlarının olduğu array-ı return edən funksiya yazın
// function countryNames(arr) {
//     let countries = []
//     for (let i = 0; i < arr.length; i++) {
//         countries.push(arr[i].country)
//     } return countries
// }
// console.log(countryNames(data));


//2. Hərfə görə ölkə sayının olduğu object return edən funksiya yazın
// function countByNames(arr, letter) {
//     let count = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (letter === arr[i].country[0])
//             count++
//     }
//     return (count)
// }
// console.log(countByNames(data, "A"));


//3. Ən çox şəhəri olan ölkə adını return edən funksiya yazın
// function countryCities(arr) {
//     let maxCities = 0;
//     let countryCities = '';
//     for (let i = 0; i < arr.length; i++) {
//         let citiesCount = arr[i].cities.length;
//         if (citiesCount > maxCities) {
//             maxCities = citiesCount;
//             countryCities = arr[i].country;
//         }
//     }
//     return countryCities;
// }
// console.log(countryCities(data));


//4. Ölkə adı ən uzun olan ölkənin şəhərlərini return edən funksiya
// function countryCities(arr) {
//     let maxName = 0;
//     let cityCountry = '';

//     for (let i = 0; i < arr.length; i++) {
//         let countryName = arr[i].country.length;

//         if (countryName > maxName) {
//             maxName = countryName;
//             cityCountry = arr[i].cities;
//         }
//     }

//     return cityCountry;
// }
// console.log(countryCities(data));

//5.  Bütün ölkələrin şəhər saylarının olduğu objecti return edən funksiya yazın .Nümunə {"Azerbaijan":70,"Turkey":300}
function makeObj(arr) {
    let result = {};

    for (let i = 0; i < arr.length; i++) {
        result[arr[i].country] = arr[i].cities.length;
    }

    return result;
}
console.log(makeObj(data));