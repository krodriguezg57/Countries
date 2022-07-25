export function drawCountries(countries){     
    let selectCountries=document.getElementById("sCountries")
    let sCountriesh=document.getElementById("sCountriesh")
    countries.forEach(function(country){
            let option=document.createElement("option")
            option.textContent=country.country_name
            let option2=document.createElement("option")
            option2.textContent=country.country_name
            selectCountries.appendChild(option)
            sCountriesh.appendChild(option2)
        })
}

export function drawStates(states){
    let selectStates=document.getElementById("sStates")
    states.forEach(function(state){
        let option=document.createElement("option")
        option.value=state.state_name
        option.textContent=state.state_name
        selectStates.appendChild(option)
    })

}

export function drawCities(cities){
    let selectCities=document.getElementById("sCities")
    cities.forEach(function(city){
        let option=document.createElement("option")
        option.value=city.city_name
        option.textContent=city.city_name
        selectCities.appendChild(option)
    })
}
