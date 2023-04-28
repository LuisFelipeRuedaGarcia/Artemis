//
const fromatter = new Intl.NumberFormat('en-US', {
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
    if(Object.keys(resultado).length === 0) {return null;}
    let preciobtc= resultado.PRICE;
    console.log(preciobtc)
     preciobtc=parseFloat(preciobtc.replace(/[COP,]/g, ""));
     console.log(preciobtc)
     
}
btccop()