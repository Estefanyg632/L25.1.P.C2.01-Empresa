import Cl_personas from "./Cl_personas.js";

export default class Cl_administrativo extends Cl_personas {
    constructor(nombre, tipo, edad, nivel) {
        super(nombre, tipo, edad);
        this.nivel = nivel;
    }

    incentivo() {
        if (this.mayorEdad())
            if (this.nivel > 1) return 100
            else return 50
        else return 0
    }

    sueldo() {
        return this.sueldoBase() + this.incentivo();
    }
}