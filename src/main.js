import Cliente from './cliente.js';
import Impuesto from './impuesto.js';

let impuestoUno = new Impuesto(80, 40);
let clienteUno = new Cliente('Iris', impuestoUno); //instanciacion 
console.log(clienteUno);

let resultado = clienteUno.calcularImpuesto();
console.log(resultado);