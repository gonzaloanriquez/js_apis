var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();
var formattedDate = (day < 10 ? '0' : '') + day + '-' + (month < 10 ? '0' : '') + month + '-' + year;
var todayFormatted = formattedDate;
console.log(todayFormatted);


async function main(){
    try{ 
        let divisa = document.getElementById("selector_moneda_cambio");
        let monto = document.getElementById("cantidad");
        let botonBusqueda = document.querySelector("#boton");
        let valorFinal = document.getElementById("monto_final");
    
        botonBusqueda.addEventListener("click", async function() {
            const monedaDestinoSeleccionada = divisa.value;
            const montoIngresado = parseFloat(monto.value);
            console.log(montoIngresado);
            console.log(monedaDestinoSeleccionada);
            const url = "https://mindicador.cl/api/" + monedaDestinoSeleccionada + "/" + todayFormatted;
            try{
                const res = await fetch(url);
                const data = await res.json();
                var tipoCambio = parseFloat(data.serie[0].valor);
                var resultado = montoIngresado/tipoCambio;
                resultado=resultado.toFixed(2);
                valorFinal.textContent = resultado;
            }
            catch (error) {
            console.error("Error al buscar el tipo de cambio:", error);
            }
        });
    } catch (error) {
        console.error("Error. Nada funciona:", error);
    }
        }

main();