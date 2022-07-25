import {generarTOKEN} from "./genaradorTOKEN.js"
import {getCountries,getCities,getStates} from "./consumidorAPI.js"
import {drawCities, drawCountries,drawStates} from "./pintardor.js"

let token=await generarTOKEN()
let countries=await getCountries(token)

drawCountries(countries)

let selectCountries=document.getElementById("sCountries")
let selectStates=document.getElementById("sStates")
let selectCities=document.getElementById("sCities")

selectCountries.addEventListener("change",async function(){
    selectStates.innerHTML=""
    let text=selectCountries.options[selectCountries.selectedIndex].text
   let states=await getStates(token, text)
   drawStates(states)
})

selectStates.addEventListener("change",async function(){
    selectCities.innerHTML=""
    let text=selectStates.options[selectStates.selectedIndex].text
   let cities=await getCities(token, text)
   drawCities(cities)
})



