import Cl_personas from "./Cl_personas.js";
export default class Cl_obreros extends Cl_personas {
    constructor(nombre, tipo, edad, cntHijos) {
        super(nombre, tipo, edad);
        this.cntHijos = cntHijos;
    }

    bono() {
        return this.cntHijos <= 3 ? 50 : 70;
    }
    
    sueldo() {
        return this.sueldoBase() + this.bono();
    }
}