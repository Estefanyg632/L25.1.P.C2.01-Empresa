export default class Cl_Personas {
    constructor(nomnbre, edad,tipo) {
        this.nombre = nomnbre;
        this.edad = edad;
        this.tipo = tipo
    }
    set nombre(n) {
        this._nomnbre = n;
    }
    get nombre() {
        return this._nomnbre;
    }
    set edad(e) {
        this._edad = e;
    }
    get edad() {
        return this._edad;
    }
    set tipo(t) {
        this._tipo = t;
    }
    get tipo() {
        return this._tipo;
    }
    mayorEdad() {
        return this.edad >= 18;
    }
        mayorEdadSalida() {
            if (this.edad >= 18) return "SI"
            else return "NO"
        }
    
    sueldoBase() {
        return 150;
    }
}