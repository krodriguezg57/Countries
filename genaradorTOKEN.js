export async function generarTOKEN(){
    let TOKEN="gLwJ3-QDzuAjJjlFCh6fYYOu93pjk7zkYuHKfD2JWYO6z0ptkCgdI6jfMwrY-R2bg90" 
    let email="stelffin2002@gmail.com"
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

   return(`Bearer ${respuestaFINAL.auth_token}`) 
}
