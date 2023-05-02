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


let selectorMoneda = document.querySelector("#Moneda")
let selectorCripto = document.querySelector("#cripto")
let selectorCantidad = document.querySelector("#cantidad")
let oculto = document.querySelector(".oculto")
let oculto2 = document.querySelector(".oculto2")
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
selectorMoneda.addEventListener("input", (e)=>{
    console.log(e.target.value)
    MonedaSeleccionada = e.target.value
})

let criptoseleccionado 
selectorCripto.addEventListener("input", (e)=>{
    criptoseleccionado = e.target.value
    asignarvaloractual();
})
 let valorDelaConversion
async function asignarvaloractual(){
    const url = `https://min-api.cryptocompare.com/data/price?fsym=${criptoseleccionado}&tsyms=${MonedaSeleccionada}`;
    console.log(url)
    try {
        const respuesta = await fetch(url);
    let resultado = await respuesta.json();
    console.log(resultado);
    valorDelaConversion=resultado[`${MonedaSeleccionada}`];
    mostrarConversion();
    }
    catch (error) {
        console.log(error)
    }
}
function mostrarConversion(){
    oculto.style.display = "block"
    let spanNombre = document.querySelector("#criptoElegido")
    spanNombre.textContent =`${criptoseleccionado}`
    let SpanValor = document.querySelector("#valor")
    SpanValor.textContent = `${valorDelaConversion} ${MonedaSeleccionada}s`
}
let cantidadSeleccionada
let valorTotal
selectorCantidad.addEventListener("change", (e)=>{
    cantidadSeleccionada = e.target.value
    valorTotal = (cantidadSeleccionada*valorDelaConversion)
    mostrarConversionTotal();
})
function mostrarConversionTotal(){
    oculto2.style.display = "block"
    let SpanCantidad = document.querySelector("#cantidadElegida")
    SpanCantidad.textContent =`${cantidadSeleccionada}`
    let spanNombre2 = document.querySelector("#criptoElegido2")
    spanNombre2.textContent =`${criptoseleccionado}s`
    let SpanValor2 = document.querySelector("#valor2")
    SpanValor2.textContent = `${valorDelaConversion} ${MonedaSeleccionada}s`
}

let RegistroOperaciones = []
function añadirRegistro(){
    RegistroOperaciones.push({
        MonedaSeleccionada: MonedaSeleccionada,
        criptoseleccionado: criptoseleccionado,
        valorDelaConversion: valorDelaConversion,
        cantidadSeleccionada: cantidadSeleccionada,
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
            ${RegistroOperaciones[i].cantidadSeleccionada}
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
            <input type="number" min="0" max="${RegistroOperaciones[i].cantidadSeleccionada}" id="ElegirCantidad${i+1}">
        </td>
    </tr>`);
    let nombreInputPrecio = "inputPrecio"+(i+1);
    inputsPrecio[nombreInputPrecio] = document.querySelector(`#cambiarValor${i+1}`)

    inputsPrecio[nombreInputPrecio].value = RegistroOperaciones[i].valorDelaConversion
 
    let nombreInputCantidad = "inputCantidad"+(i+1);
    inputsCantidad[nombreInputCantidad] = document.querySelector(`#ElegirCantidad${i+1}`);
    inputsCantidad[nombreInputCantidad].value = RegistroOperaciones[i].cantidadSeleccionada; 

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
let tbody3 = document.querySelector("#tbody3");
function ganaciasPerdidas(){
    for (let i = 0; i < RegistroOperaciones.length; i++) {
        console.log(RegistroOperaciones[i]);
        let nombreInputCantidad = "inputCantidad"+(i+1);
        let nombreInputPrecio = "inputPrecio"+(i+1);
        let NuevoValorTotal = (inputsCantidad[nombreInputCantidad].value * inputsPrecio[nombreInputPrecio].value)
         if (NuevoValorTotal > RegistroOperaciones[i].valorTotal){
            tbody3.insertAdjacentHTML("beforeend", `
            <tr>
                <td>
                    ${RegistroOperaciones[i].criptoseleccionado}
                </td>
                <td>
                    ${NuevoValorTotal-RegistroOperaciones[i].valorTotal}
                </td>

                <td>    
                </td>

                <td>
                </td>
            </tr>
`)
         }
         else if (NuevoValorTotal < RegistroOperaciones[i].valorTotal){
            tbody3.insertAdjacentHTML("beforeend", `
            <tr>
                <td>
                </td>

                <td>
                </td>

                <td>
                ${RegistroOperaciones[i].criptoseleccionado}    
                </td>
                <td>
                ${NuevoValorTotal-RegistroOperaciones[i].valorTotal}
                </td>
            </tr>
            `)
         }
    }
}