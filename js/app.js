//Arrays
const climas = ["mayormente soleado", "parcialmente soleado", "mayormente nublado", "parcialmente nublado", "lluvioso"];
const provincia = [];
const temperatura = [10,5,8,20,18,25,12,14,17,11,13,3];
const humedad = [30,25,60,76,88,48,90,100];
const viento = [6,10,11,8,14,16,18];


//Funciones y eventos, al hacer click en las opciones se genera el evento y se llama a la funcion.
//Muestra el clima de manera aleatoria, segun el array "climas"
function mostrarClima () {

    let climaRandom = climas[Math.floor(Math.random()*climas.length)];
    let clima = document.querySelector('.op1');
    clima.addEventListener("click", ()=> {

        
        Swal.fire({
            title: 'Clima',
            text: `El clima esta ${climaRandom}`,
            background: '#131313',
            color: '#fff',
            showConfirmButton: false,
            showCloseButton: true,
            backdrop: 'rgba(0, 0, 0, 0.6)',
        });
    }) 
}
mostrarClima(); 

//Muestrar la temperatura de manera aleatoria segun elarray de "temperatura"
function mostrarTemperatura() {

    let tempRandom = temperatura[Math.floor(Math.random()*temperatura.length)];
    let temperaturas = document.querySelector('.op2');
    temperaturas.addEventListener("click", ()=> {

        Swal.fire({
            title: 'Temperatura',
            text: `La temperatura es de ${tempRandom}°c`,
            background: '#131313',
            color: '#fff',
            showConfirmButton: false,
            showCloseButton: true,
            backdrop: 'rgba(0, 0, 0, 0.6)',
        });
    })
}
mostrarTemperatura();

//Muestra la velocidad del viento de manera aleatoria segun el array de "viento"
function mostrarViento() {

    let vientoRandom = viento[Math.floor(Math.random()*viento.length)];
    let vtn = document.querySelector('.op3');
    vtn.addEventListener("click", ()=> {

        Swal.fire({
            title: 'Viento',
            text: `La velocidad del viento es de ${vientoRandom}km/h`,
            background: '#131313',
            color: '#fff',
            showConfirmButton: false,
            showCloseButton: true,
            backdrop: 'rgba(0, 0, 0, 0.6)',
        });
    })  
}
mostrarViento();

//Muestra la humedad de manera aleatoria segun el array de "humedad"
function mostrarHumedad() {

    let humedadRandom = humedad[Math.floor(Math.random()*humedad.length)];
    let hmd = document.querySelector('.op4');
    hmd.addEventListener("click", ()=> {

        Swal.fire({
            title: 'Humedad',
            text: `La humedad es de ${humedadRandom}%`,
            background: '#131313',
            color: '#fff',
            showConfirmButton: false,
            showCloseButton: true,
            backdrop: 'rgba(0, 0, 0, 0.6)',
        });
    })
}
mostrarHumedad();

//Cuando el usuario ingrese un dato en el input y presione ENTER se muestra el alert, si el usuario no ingresa un string se ejecuta el ELSE 
let input = document.querySelector('#search-box');

input.addEventListener("keypress", (event)=> {

    if (event.keyCode === 13) {

            provincia.push(input.value);
            sessionStorage.setItem("provincias", (provincia)); //La provincia que ingrese el usuario se guarda en el sessionStorage

        if (!isNaN(input.value)) {
            Swal.fire({
                icon: 'error',
                text: 'Ingrese una ciudad valida.',
                background: '#131313',
                color: '#fff',
                confirmButtonColor: '#CAC463',
                backdrop: 'rgba(0, 0, 0, 0.6)',
            });
        } else {
            Swal.fire({
                icon: 'success',
                text: 'Provincia encontrada, seleccione 1 o mas opciones que se muestran debajo.',
                background: '#131313',
                color: '#fff',
                confirmButtonColor: '#CAC463',
                backdrop: 'rgba(0, 0, 0, 0.6)',
            });   
        }
    }
    input.value = "";
})


//SessionStorage
let provinciaGuardada = (sessionStorage.getItem("provincias"));



