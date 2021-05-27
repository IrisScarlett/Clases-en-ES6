"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuesto = _interopRequireDefault(require("./impuesto.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuestoUno = new _impuesto["default"](80, 40);
var clienteUno = new _cliente["default"]('Iris', impuestoUno); //instanciacion 

console.log(clienteUno);
var resultado = clienteUno.calcularImpuesto();
console.log(resultado);