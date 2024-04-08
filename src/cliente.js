 //clase cliente recibe como parametro nombre y impuestos que es un objeto de impuestos
 export class Cliente{
    constructor(nombre, impuestos){
        this._nombre = nombre
        this._impuestos = impuestos
    }

    get nombre(){
        return this._nombre
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre
    }

    //funcion que llama al objeto _impuesto y accede a sus metodos 
    calcularImpuesto(){
        return ((this._impuestos.montoBrutoAnual - this._impuestos.deducciones) * 0.21 )
    }
}