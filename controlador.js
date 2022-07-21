import {consumirAPI} from "./consumidorAPI.js"
import {generarTOKEN} from "./genaradorTOKEN.js"


let token=await generarTOKEN()
let paises=await consumirAPI(token)

console.log(token)
console.log(paises)