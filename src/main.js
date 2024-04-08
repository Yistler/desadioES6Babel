import { Cliente } from "./cliente.js";
import { Impuestos } from "./impuestos.js";

$(document).ready(function () {
    $("#search-form").submit(function (event) {
      event.preventDefault();
      var montoBruto = $("#montoBruto").val();
      console.log(montoBruto)
      let deducciones = $('#deducciones').val();
      let nombre = $('#nombre').val();
    
      let impuestosCliente = new Impuestos(montoBruto, deducciones);
      let cliente1 = new Cliente(nombre, impuestosCliente)
      let resultado = cliente1.calcularImpuesto();

      let out = `impuesto anual de ${nombre} a pagar es: ${resultado}`;

      $('#resultado').html(out);
    });
  });
  
