// definir el valord del ticket
const ticket = 200;

// definir los descuentos
let desEstudiantes = 0.2; //equivale al 80%
let desTrainee = 0.5; //equivale al 50%
let desJunior = 0.85; //equivale al 15%

// tomar los elementos
const correo =document.getElementById('exampleFormControlInput1')
const nombre =document.getElementById('nombre')
const apellido =document.getElementById('apellido')
const cantidad = document.getElementById('cantidad')
const categoria = document.getElementById('categoria')
const totalAPagar = document.getElementById('totalAPagar')
const btnResumen = document.getElementById('resumen')
const btnBorrar = document.getElementById('borrar')

function calcularPago(){
    let total = cantidad.value * ticket
    //condicionar por descuentos
    switch (categoria.value){
        case 'estudiante':
            total*=desEstudiantes;
            break;
        case 'trainee':
            total*=desTrainee;
            break;
        case 'junior':
            total*=desJunior;
            break;
        }
    totalAPagar.textContent=`Total a Pagar: $${total}`

}


btnResumen.addEventListener('click',(evento)=>{
    //evento para prevenir que se refresque la pagina en el formulario
    evento.preventDefault();
    calcularPago();
    
});

btnBorrar.addEventListener('click',(evento)=>{
    evento.preventDefault();
    nombre.value =''
    apellido.value =''
    correo.value =''
    cantidad.value=''
    categoria.value = ''
    totalAPagar.textContent='Total a Pagar: $'

});

/*
let ver=""   
let tickets = document.getElementById('tickets-form')
let principal = document.getElementById('principal')
function visible(evento){
    //Funcion para ocultar y mostrar el contenido principal
    //e 
    evento.preventDefault();
  
    if (ver==""){
        principal.style.display = "none";
        tickets.style.display = "";
        ver="hidden"
        
    }else   {
        principal.style.display = "";
        tickets.style.display = "none";
        ver = ""
    } 
} 
function mostrar(){
    principal.style.display = "";
    tickets.style.display = "none";
    console.log("aca esta");
}*/
let btn_tickets = document.getElementById('tickets');
btn_tickets.addEventListener('click',(evento)=>visible(evento));

