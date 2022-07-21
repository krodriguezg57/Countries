export async function consumirAPI(token){
  
    let URI= "https://www.universal-tutorial.com/api/countries"  
    let parametros={
        method:"GET",
        headers:{
            "Authorization": token, 
            "Accept": "application/json"
        }
       
    }

    let respuesta=await fetch(URI,parametros)
    let paises=await respuesta.json()
    
    return paises
}


