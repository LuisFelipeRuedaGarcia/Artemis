// API key: da30f1fc610d0f8892f9149bb4c10ff3c08cbfef3fbbf201e343753e3aecfee3
/* const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
})
const btccop = async () => {
    const url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=COP';
    const respuesta = await fetch(url);
    let resultado = await respuesta.json();
    console.log(resultado.DISPLAY['BTC']
    ['COP'])
    resultado = resultado.DISPLAY['BTC']
    ['COP']
    console.log(resultado)
    if(Object.keys(resultado).length === 0) return null;
    let preciobtc= resultado.PRICE;
    console.log(preciobtc)
     preciobtc=parseFloat(preciobtc.replace(/[COP,]/g, ""));
     console.log(preciobtc)
     console.log(formatter.format(parseInt(preciobtc))+" COP");
    document.querySelector("#crypto1").innerHTML=formatter.format(parseInt(preciobtc))+" COP"
}
btccop(); */


let selectorMoneda = document.querySelector("#elegirMoneda");
let selectorCripto = document.querySelector("#elegirCripto");
let selectorCantidadCripto = document.querySelector("#elegirCantidadCripto");
let selectorCantidadMoneda =document.querySelector("#elegirCantidadMoneda");

let oculto = document.querySelector(".oculto");
let oculto2 = document.querySelector(".oculto2");
let criptosMasPopulares
const fectSelectCripto = async () => {
    const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD';
    try {
        const respuesta = await fetch(url);
    let resultado = await respuesta.json();
    criptosMasPopulares = resultado.Data
    insertarOptions(criptosMasPopulares, selectorCripto)

    criptoseleccionado = criptosMasPopulares[0].CoinInfo.Name
    }
    catch (error) {
        console.log(error)
    }
}
fectSelectCripto();
 function insertarOptions(data, slctr){
 data.forEach(dato => {
    let option = document.createElement("option")
    option.value=dato.CoinInfo.Name
    option.textContent=dato.CoinInfo.FullName
    slctr.appendChild(option)
});
 }

let monedasFiduciarias =[
    {CoinInfo: {Name:"USD", FullName : "dólar estadounidense"}},
    {CoinInfo: {Name:"EUR", FullName : "euro europeo"}},
    {CoinInfo: {Name:"JPY", FullName : "yen japonés"}},
    {CoinInfo: {Name:"GBP", FullName : "libra esterlina británica"}},
    {CoinInfo: {Name:"CAD", FullName : "dólar canadiense"}},
    {CoinInfo: {Name:"MXN", FullName : "peso mexicano"}},
    {CoinInfo: {Name:"COP", FullName : "peso colombiano"}},
    {CoinInfo: {Name:"ARS", FullName : "peso argentino"}},
    {CoinInfo: {Name:"BRL", FullName : "real brasileño"}},
    {CoinInfo: {Name:"CLP", FullName : "peso chileno"}},

]

insertarOptions(monedasFiduciarias, selectorMoneda)

let MonedaSeleccionada /* = monedasFiduciarias[0].CoinInfo.Name // en caso de que no se seleccione una moneda, el selector mostrará por defecto "dólar estadounidense", por tanto se le asiga ese valor a la varaible también por defecto para que la operación se efectue con ese valor */
let count = 0
selectorMoneda.addEventListener("input", (e)=>{
    MonedaSeleccionada = e.target.value
    if(count!=0){asignarvaloractual();
        spans();}

    count++
})

let criptoseleccionado 
selectorCripto.addEventListener("input", (e)=>{
    criptoseleccionado = e.target.value
    asignarvaloractual();
})
 let valorDelaConversion
async function asignarvaloractual(){
    const url = `https://min-api.cryptocompare.com/data/price?fsym=${criptoseleccionado}&tsyms=${MonedaSeleccionada}`;

    try {
        const respuesta = await fetch(url);
    let resultado = await respuesta.json();

    valorDelaConversion=resultado[`${MonedaSeleccionada}`];
    mostrarConversion();
    }
    catch (error) {
        console.log(error)
    }
}
function mostrarConversion(){
    oculto.style.display = "block";
    spans();
    
}

function spans(){
    let SpansMonedaElegida =document.querySelectorAll(".monedaElegida");
    let spansCriptoElegido =document.querySelectorAll(".criptoElegido");
    let spansCantidadElegida= document.querySelectorAll(".cantidadElegida");
    let spansValorConversion = document.querySelectorAll(".valorConversion");
    let spanValorConversionTotal = document.querySelectorAll(".valorConversionTotal");
    for (let i = 0; i < SpansMonedaElegida.length; i++){

        spansCriptoElegido[i].textContent =`${criptoseleccionado}`
        SpansMonedaElegida[i].textContent = `${MonedaSeleccionada}`
    }

    spansCantidadElegida[0].textContent =`${cantidadCriptoSeleccionada}`;
    spansValorConversion[0].textContent = `${valorDelaConversion}`;
    spanValorConversionTotal[0].textContent = `${valorTotal}`;
}
let cantidadCriptoSeleccionada
let valorTotal
selectorCantidadCripto.addEventListener("input", (e)=>{
    cantidadCriptoSeleccionada = e.target.value
    valorTotal = (cantidadCriptoSeleccionada*valorDelaConversion)

    selectorCantidadMoneda.value = (selectorCantidadCripto.value*valorDelaConversion);

})
let cantidadMonedaSeleccionada
selectorCantidadMoneda.addEventListener("input", (e)=>{

    cantidadMonedaSeleccionada = e.target.value
     valorTotal = cantidadMonedaSeleccionada 
     cantidadCriptoSeleccionada = (cantidadMonedaSeleccionada/valorDelaConversion)

     selectorCantidadCripto.value = (cantidadMonedaSeleccionada/valorDelaConversion) 
    mostrarConversionTotal();
})

function mostrarConversionTotal(){
    oculto2.style.display = "block"
spans();
}

let RegistroOperaciones = []
function añadirRegistro(){
    RegistroOperaciones.push({
        MonedaSeleccionada: MonedaSeleccionada,
        criptoseleccionado: criptoseleccionado,
        valorDelaConversion: valorDelaConversion,
        cantidadCriptoSeleccionada: cantidadCriptoSeleccionada,
        valorTotal: valorTotal
    })
    console.log(RegistroOperaciones);
    Tabla();
}

let tbody = document.querySelector("#tbody");
let tbody2 = document.querySelector("#tbody2");
let inputsPrecio
let inputsCantidad
function Tabla(){
    inputsPrecio = {};
    inputsCantidad = {};
    tbody.innerHTML="";
    tbody2.innerHTML="";
    for (let i = 0; i < RegistroOperaciones.length; i++) {
    tbody.insertAdjacentHTML("beforeend", `
    <tr>
        <td>
            ${RegistroOperaciones[i].MonedaSeleccionada}
        </td>
        <td>
            ${RegistroOperaciones[i].criptoseleccionado}
        </td>
        <td>
            ${RegistroOperaciones[i].valorDelaConversion}
        </td>
        <td>
            ${RegistroOperaciones[i].cantidadCriptoSeleccionada}
        </td>
        <td>
            ${RegistroOperaciones[i].valorTotal}
        </td>
    </tr>
    `)
    tbody2.insertAdjacentHTML("beforeend", `
    <tr>
        <td>
            ${RegistroOperaciones[i].MonedaSeleccionada}
        </td>
        <td>
            ${RegistroOperaciones[i].criptoseleccionado}
        </td>
        <td>
            <input type="number" min="0" id="cambiarValor${i+1}">
        </td>
        <td>
            <input type="number" min="0" max="${RegistroOperaciones[i].cantidadCriptoSeleccionada}" id="ElegirCantidad${i+1}">
        </td>
    </tr>`);
    let nombreInputPrecio = "inputPrecio"+(i+1);
    inputsPrecio[nombreInputPrecio] = document.querySelector(`#cambiarValor${i+1}`)

    inputsPrecio[nombreInputPrecio].value = RegistroOperaciones[i].valorDelaConversion
 
    let nombreInputCantidad = "inputCantidad"+(i+1);
    inputsCantidad[nombreInputCantidad] = document.querySelector(`#ElegirCantidad${i+1}`);
    inputsCantidad[nombreInputCantidad].value = RegistroOperaciones[i].cantidadCriptoSeleccionada;


    }
}


let buttonCompra = document.querySelector("#comprar")
buttonCompra.addEventListener("click", añadirRegistro);

let buttonVenta = document.querySelector("#vender");
buttonVenta.addEventListener("click", ()=>{
    ganaciasPerdidas()
/*     let valor = 0;
    for (let i = 0; i < Object.keys(inputsPrecio).length; i++) {
        console.log(inputsPrecio[`inputPrecio${i+1}`]);
        console.log(inputsPrecio[`inputPrecio${i+1}`].value);
        console.log(valor);
        RegistroOperaciones[i].valorTotal = inputsPrecio[i].value
    }
    console.log(valor);
    Tabla(); */
});
let tbody3g = document.querySelector("#tbody3g");
let tbody3p = document.querySelector("#tbody3p");
function ganaciasPerdidas(){
    for (let i = 0; i < RegistroOperaciones.length; i++) {
        console.log(RegistroOperaciones[i]);
        let nombreInputCantidad = "inputCantidad"+(i+1);
        let nombreInputPrecio = "inputPrecio"+(i+1);
        let NuevoValorCripto = inputsPrecio[nombreInputPrecio].value
        let CantidadAVender = inputsCantidad[nombreInputCantidad].value
        /* let ValorVentaTotal = (inputsCantidad[nombreInputCantidad].value * inputsPrecio[nombreInputPrecio].value) */
         if (NuevoValorCripto > RegistroOperaciones[i].valorDelaConversion){
            tbody3g.insertAdjacentHTML("beforeend", `
            <tr>
                <td>
                    ${RegistroOperaciones[i].criptoseleccionado}
                </td>
                <td>
                    +${(NuevoValorCripto-RegistroOperaciones[i].valorDelaConversion)*CantidadAVender}${RegistroOperaciones[i].MonedaSeleccionada}s
                </td>
            </tr>
`)
         }
         else if (NuevoValorCripto < RegistroOperaciones[i].valorDelaConversion){
            tbody3p.insertAdjacentHTML("beforeend", `
            <tr>
                <td>
                ${RegistroOperaciones[i].criptoseleccionado}    
                </td>
                <td>
                -${(RegistroOperaciones[i].valorDelaConversion-NuevoValorCripto)*CantidadAVender}${RegistroOperaciones[i].MonedaSeleccionada}s
                </td>
            </tr>
            `)
         }
         RegistroOperaciones[i].cantidadCriptoSeleccionada-=inputsCantidad[nombreInputCantidad].value
         if (RegistroOperaciones[i].cantidadCriptoSeleccionada == 0){
            RegistroOperaciones.splice(i, 1);
         }else{

         inputsPrecio[nombreInputPrecio].value = RegistroOperaciones[i].valorDelaConversion
 
         inputsCantidad[nombreInputCantidad].value = RegistroOperaciones[i].cantidadCriptoSeleccionada;}
        Tabla();
    }
}
