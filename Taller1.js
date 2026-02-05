let opcion = 1;
// acumuladores
let dineroTotalEstrato1 = 0;
let dineroTotalEstrato2 = 0;
let dineroTotalHijo0 = 0;
let dineroTotalHijo2 = 0;
let dineroTotalHijo3 = 0;

// contadores
let contadorEstrato1 = 0;
let contadorEstrato2 = 0;
let contadorHijo0 = 0;
let contadorHijo2 = 0;
let contadorHijo3 = 0;

while (opcion === 1) {
  opcion = Number(
    prompt(
      "Seleccione una opción:\n1. Sí deseo ingresar datos\n2. No deseo ingresar datos",
    ),
  );

  if (opcion === 1) {
    let estrato = Number(prompt("Ingrese el estrato: "))
    let hijos = Number(prompt("Ingresar numero de hijos: "))
    
    

    if(estrato === 2 && hijos === 0){
        dineroTotalEstrato2 = dineroTotalEstrato2 + 46500
        dineroTotalHijo0 = dineroTotalHijo0 + 46500
        contadorHijo0++
        contadorEstrato2++
    }

    else if (estrato === 1 && hijos === 0) {
        dineroTotalEstrato1 = dineroTotalEstrato1 + 50000
        dineroTotalHijo0 = dineroTotalHijo0 + 50000
        contadorHijo0++
        contadorEstrato1++
    }

    else if (estrato === 2 && (hijos === 2 || hijos === 1)) {
        dineroTotalEstrato2 = dineroTotalEstrato2 + 21500
        dineroTotalHijo2 = dineroTotalHijo2 + 21500
        contadorHijo2++
        contadorEstrato2++
    }

    else if (estrato === 1 && (hijos === 2 || hijos === 1)) {
        dineroTotalEstrato1 = dineroTotalEstrato1 + 25000
        dineroTotalHijo2 = dineroTotalHijo2 + 25000
        contadorEstrato1++
        contadorHijo2++
    }

    else if ( estrato === 2 && hijos >= 3) {
        dineroTotalEstrato2 = dineroTotalEstrato2 + 26500
        dineroTotalHijo3 = dineroTotalHijo3 + 26500
        contadorEstrato2++
        contadorHijo3++
    }

    else if (estrato === 1 && hijos >= 3) {
        dineroTotalEstrato1 = dineroTotalEstrato1 + 30000
        dineroTotalHijo3 = dineroTotalHijo3 + 30000
        contadorHijo3++
        contadorEstrato1++
    }

  } else if (opcion === 2) {
    console.log("Fin del programa");
    alert(`Total personas estrato 2:   ${dineroTotalEstrato2}`)
    alert(`Total personas estrato 1:   ${dineroTotalEstrato1}`)
    alert(`Total personas con 0 hijos:   ${contadorHijo0}`)
    alert(`Total personas con hasta 2 hijos:   ${contadorHijo2}`)
    alert(`Total personas con mas de 3 hijos:   ${contadorHijo3}`)

  } else {
    console.log("Opción inválida");
    opcion = 1;
  }
}
