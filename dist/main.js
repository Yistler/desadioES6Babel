"use strict";

var _cliente = require("./cliente.js");
var _impuestos = require("./impuestos.js");
$(document).ready(function () {
  $("#search-form").submit(function (event) {
    event.preventDefault();
    var montoBruto = $("#montoBruto").val();
    console.log(montoBruto);
    var deducciones = $('#deducciones').val();
    var nombre = $('#nombre').val();
    var impuestosCliente = new _impuestos.Impuestos(montoBruto, deducciones);
    var cliente1 = new _cliente.Cliente(nombre, impuestosCliente);
    var resultado = cliente1.calcularImpuesto();
    var out = "impuesto anual de ".concat(nombre, " a pagar es: ").concat(resultado);
    $('#resultado').html(out);
  });
});