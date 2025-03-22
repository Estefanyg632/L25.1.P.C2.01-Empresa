/* En una empresa se conoce el nombre y edad de su personal,
con un sueldo base de $150. Trabajan obreros (1) y
administrativos (2). Los obreros hasta con 3 hijos reciben $50
de bono, con más de 3 hijos reciben $70. Los administrativos
tienen nivel de estudio (1=bachiller, 2=técnico, 3=universitario),
y reciben un incentivo (sólo si son mayor de edad) de $50 para
bachilleres y $100 si tienen otro nivel.
nombre tipo edad cntHijos nivel mayorEdad() bono() incentivo() sueldo()
Luis    2    15    n/a      1       NO       n/a       0         150
Ana     1    20     2      n/a      SI        50      n/a        200
Raul    1    17     0      n/a      NO        50      n/a        200
Liz     2    19    n/a      3       SI       n/a      100        250
Eva     1    22     5      n/a      SI        70      n/a        220 */

import Cl_obreros from "./Cl_obreros.js";
import Cl_administrativo from "./Cl_administrativo.js";

let luis = new Cl_administrativo("Luis", 2, 15, 1);
let ana = new Cl_obreros("Ana", 1, 20, 2);
let raul = new Cl_obreros("Raul", 1, 17, 0);
let liz = new Cl_administrativo("Liz", 2, 19, 3);
let eva = new Cl_obreros("Eva", 1, 22, 5);

let salida = document.getElementById("salida");

salida.innerHTML = `
${luis.nombre} ${luis.mayorEdadSalida()} es mayor de edad, tiene un incentivo de ${luis.incentivo()}$ y el sueldo final es de ${luis.sueldo()}$
<br><br>${ana.nombre} ${ana.mayorEdadSalida()} es mayor de edad, tiene un bono de ${ana.bono()}$ y el sueldo final es de ${ana.sueldo()}$
<br><br>${raul.nombre} ${raul.mayorEdadSalida()} es mayor de edad, tiene un bono de ${raul.bono()}$ y el sueldo final es de ${raul.sueldo()}$
<br><br>${liz.nombre} ${liz.mayorEdadSalida()} es mayor de edad, tiene un incentivo de ${liz.incentivo()}$ y el sueldo final es de ${liz.sueldo()}$
<br><br>${eva.nombre} ${eva.mayorEdadSalida()} es mayor de edad, tiene un bono de ${eva.bono()}$ y el sueldo final es de ${eva.sueldo()}$
`