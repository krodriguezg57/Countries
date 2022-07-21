export async function generarTOKEN(){
    let TOKEN="IwlEJZvRc4vi6XOn1v0u2ZmLPclMxXAnUwl533DSX4x0Tl9x_-247qU3JdI7g0Sot-E" 
    let email="karenymanu1@gmail.com"
    let URI= "https://www.universal-tutorial.com/api/getaccesstoken"
   
    let parametros={
        method:"GET",
        headers:{
            "api-token":TOKEN, 
            "user-email":email
        }
    }

    let respuesta=await fetch(URI,parametros)
    let respuestaFINAL=await respuesta.json()

   console.log(`Bearer ${respuestaFINAL.auth_token}`) 
}
