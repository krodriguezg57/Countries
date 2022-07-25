export async function getCountries(token){
    let URI= "https://www.universal-tutorial.com/api/countries"  
    let parameters={
        method:"GET",
        headers:{
            "Authorization": token, 
            "Accept": "application/json"
        }
       
    }
    let answer=await fetch(URI,parameters)
    let countries=await answer.json()
    return countries
}

export async function getStates(token,country){
    let URI=`https://www.universal-tutorial.com/api/states/${country}`
    let parameters={
        method:"GET",
        headers:{
            "Authorization": token, 
            "Accept": "application/json"
        }
    }
    let answer=await fetch(URI,parameters)
    let states=await answer.json()
    return states

}

export async function getCities(token,state){
    let URI=`https://www.universal-tutorial.com/api/cities/${state}`
    let parameters={
        method:"GET",
        headers:{
            "Authorization": token, 
            "Accept": "application/json"
        }
    }
    let answer=await fetch(URI,parameters)
    let cities=await answer.json()
    return cities
}
