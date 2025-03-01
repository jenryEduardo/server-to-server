

async function getUserShort(params) {
    let previousResponse = null;
    let change = 0
    try {
        const initialResponse = await fetch("http://localhost:8080/users/");
        previousResponse = await initialResponse.json();
    } catch (error) {
        console.error("Error en la primera petición:", error);
        return;
    }

     setInterval(async () => {
        try {
            const response = await fetch("http://localhost:8080/users/");
            const currentResponse = await response.json();

          
            if (JSON.stringify(previousResponse) !== JSON.stringify(currentResponse)) {
                console.log("🔄 Hay cambios en la base de datos.");
                previousResponse = currentResponse; 
            } else {
                console.log("✅ No hay cambios.");
                console.log(previousResponse);
                
                change+=3
            }
        } catch (error) {
            console.error("Error al obtener los productos:", error);
        }   


    }, 3000); 
}


module.exports = {
    getUserShort
}