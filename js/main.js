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
const fectSelectCripto = async () => {
    const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD';
    const respuesta = await fetch(url);
    let resultado = await respuesta.json();
    let data = resultado.Data
    
    insertarOptions(data, selectorCripto)
}
fectSelectCripto();
 function insertarOptions(d, slctr){
 d.forEach(dato => {
    console.log(d);
    let option = document.createElement("option")
    option.value=dato.CoinInfo.FullName
    option.textContent=dato.CoinInfo.FullName
    console.log(option);
    console.log(slctr);
    slctr.appendChild(option)
});
 }

let monedasFiduciarias =[
    {CoinInfo: {SYMBOL:"USD", FullName : "dólar estadounidense"}},
    {CoinInfo: {SYMBOL:"EUR", FullName : "euro europeo"}},
    {CoinInfo: {SYMBOL:"JPY", FullName : "yen japonés"}},
    {CoinInfo: {SYMBOL:"GBP", FullName : "libra esterlina británica"}},
    {CoinInfo: {SYMBOL:"CAD", FullName : "dólar canadiense"}},
    {CoinInfo: {SYMBOL:"MXN", FullName : "peso mexicano"}},
    {CoinInfo: {SYMBOL:"COP", FullName : "peso colombiano"}},
    {CoinInfo: {SYMBOL:"ARS", FullName : "peso argentino"}},
    {CoinInfo: {SYMBOL:"BRL", FullName : "real brasileño"}},
    {CoinInfo: {SYMBOL:"CLP", FullName : "peso chileno"}},

]

insertarOptions(monedasFiduciarias, selectorMoneda)