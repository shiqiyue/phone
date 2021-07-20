var fs = require('fs')

const iso3166_data = require('./iso3166Data');
const countryJson = require('./country.json')
const countryCityJson = require('./countryCity.json')



function findCnNameByCode(code) {
    for (let country of countryJson) {
        if (country.countryCode === code) {
            return country
        }
    }
}

function findCityByCountryName(countryName){
    for (let country of countryCityJson.Countries) {
        if(country.CountryName === countryName){
            return getCitys(country)
        }
    }
}

function getCitys(country){
    var citys = []
    for (let state of country.States) {
        citys.push(...state.Cities)
    }
    return citys
}


/*
console.log(iso3166_data)
*/
/*console.log(countryJson)
console.log(countryCityJson)*/


for (let country of iso3166_data) {
    var c = findCnNameByCode(country.alpha2)
    if (c){
        country.cn_country_name = c.cnName
    }
    var citys = findCityByCountryName(country.country_name)
    if(citys){
        country.citys = citys
    }
}

fs.writeFileSync('./final.json', JSON.stringify(iso3166_data, null, '\t'))
