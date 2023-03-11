// Pedimos al usuario que ingrese su nombre utilizando la función prompt()

/*let nombreUsuario = prompt("Registre su user")
alert("Te registaste como " + nombreUsuario + "!")

let nombreUsuarioIngresado = prompt("Ingrese user")

let intentosFallidos = 1

for (let i = 0; i < 3; i++) {
	if (nombreUsuario == nombreUsuarioIngresado) {
		alert("Bienvenido/a " + nombreUsuarioIngresado + "!");
		break;
    
	} else {
		alert("Usuario incorrecto");
		intentosFallidos++;
		if (intentosFallidos >= 3) {
			break;
		}
		nombreUsuarioIngresado = prompt("Ingrese user");
	}
}*/














/*let nombreUsuario = prompt("Registre su user")
alert("Te registaste como " + nombreUsuario + "!")

let nombreUsuarioIngresado = prompt("Ingrese user")

let intentosFallidos = 1



for (i = 1; i <= 3 ; i++){
if (nombreUsuario == nombreUsuarioIngresado) {
alert("Bienvenido/a " + nombreUsuarioIngresado + "!")
break
} 




else{
alert("Usuario incorrecto")
nombreUsuarioIngresado = prompt("Ingrese user")
intentosFallidos++

}
}
*/


















/*let nombreUsuario = prompt("Registre su user")
alert("Te registaste como " + nombreUsuario + "!")

let nombreUsuarioIngresado = prompt("Ingrese user")

let contador = 1

while (contador < 3 ) {
  if (nombreUsuario == nombreUsuarioIngresado) {
    break
    }

  nombreUsuarioIngresado = prompt("Ingrese user")
  contador++


  
  
}

if (nombreUsuario == nombreUsuarioIngresado && contador <=3) {
  alert("Bienvenida/o " + nombreUsuarioIngresado + "!")
  }
  else {
    alert("Intente de nuevo mas tarde!")

  }*/






 
  let nombreUsuario = prompt("Registre su user")
  alert("Te registaste como " + nombreUsuario + "!")
  
  let nombreUsuarioIngresado = prompt("Ingrese user")
  



  let contador = 1

  while (contador < 3) {
    if (nombreUsuario == nombreUsuarioIngresado) {
      break
      
    }
    nombreUsuarioIngresado = prompt("Ingrese user")
    contador++
    
  }

  if (nombreUsuario == nombreUsuarioIngresado && contador <= 3) {
    alert("Bienvenida/o "  +  nombreUsuario + "!")

    

    let cuantoDineroTienes = Number (prompt ( "Cuanto dinero tienes?" )) 

if (cuantoDineroTienes >= 2500) {
  alert("Comprate las Nike re facheritas" + "!")
  }
  else if (cuantoDineroTienes >= 1500) {
    alert("Comprate las Adidas" + "!")
    }

    else if (cuantoDineroTienes >= 1000) {
      alert("Comprate la camperita Nike o adidas" + "!")
      
    }

    else if (cuantoDineroTienes == 900) {
      alert("Comprate la camperita adidas" + "!")
      
    }

    

    else {
      alert ("Lo siento, no te da para nada pobre de mierda")
    }

    let mensaje = ("Nuestros productos\n Ingrese el numero de lo que quiera comprar \n1 - Championes Nike $2500\n2 - Championes Adidas $1500\n3 - Campera Nike $1000\n4 - Campera Adidas $900\n5 - No tengo mas plata")
    let opcion = prompt (mensaje)










  if (opcion == 1 && cuantoDineroTienes >= 2500 && cuantoDineroTienes >= 900) {
    alert ("Gracias por comprar las nike, te quedan de 10 UwU")
   }

    else if (opcion == 1 && cuantoDineroTienes < 2500) {
    alert ( "No tienes suficiente dinero")
    
  }
   
   
   else if (opcion == 2 && cuantoDineroTienes >= 1500 && cuantoDineroTienes >= 900) {
    alert("Gracias por comprar las adidas, estan flama" + "!")
    
  }

  else if (opcion == 2 && cuantoDineroTienes < 1500) {
    alert ( "No tienes suficiente dinero")
    
  }

  else if (opcion == 3 && cuantoDineroTienes >= 1000 && cuantoDineroTienes >= 900) {
    alert("Gracias por comprar la camperita nike, estas de 10" + "!")
    
  }

  else if (opcion == 3 && cuantoDineroTienes < 1000) {
    alert ( "No tienes suficiente dinero")
    
  }


  else if (opcion == 4 && cuantoDineroTienes >= 900 && cuantoDineroTienes >= 900) {
    alert("Gracias por comprar la camperita adidas, que la disfrutes" + "!")
    
  }

  else if (opcion == 4 && cuantoDineroTienes < 900) {
    alert ( "No tienes suficiente dinero")
    
  }


  else if (opcion == 5 && cuantoDineroTienes < 900) {
    alert("Vuelve cuando tengas mas plata pobre" + "!")
    
  }
}







      
  
  else {
    alert ("Intente mas tarde")
    contador = 4
  }













/*for (let i = 0; i <= 3 ; i++){
if (nombreUsuario == nombreUsuarioIngresado) {
  alert("Bienvenido/a " + nombreUsuarioIngresado + "!")
  break
} else{
  alert("Usuario incorrecto")
  nombreUsuario = prompt("Registre su user")
   nombreUsuarioIngresado = prompt("Ingrese user")
   
}
}*/















//let unNumero = 5
/* console.log(typeof 5)
console.log(typeof "5")
console.log(5 == "5") // true
console.log(5 === "5") // false
console.log(5 === 5) */

/* if (unNumero == 4) {
  console.log("Es verdadero")
}

let nombreUsuarioBD = "juanca95"
let nombreUsuarioIngresado = prompt("Ingrese user")

console.log(nombreUsuarioBD == nombreUsuarioIngresado)
if (nombreUsuarioBD == nombreUsuarioIngresado) {
  alert("Bienvenido")
} else {
  alert("Usuario incorrecto")
} */

/* let precio = 40
// valor es 40
// tipo de dato Number => numerico
let nombre = "Juan"
// valor es "Juan"
// tipo de dato String => cadena de caracteres
console.log(nombre) // veo el valor
console.log(typeof nombre) // veo el tipo de dato

if (precio < 20) {
  alert("El precio es menor que 20");
} else if (precio < 50) {
  alert("El precio es menor que 50");
} else if (precio < 100) {
  alert("El precio es menor que 100");
} else {
  alert("El precio es mayor que 100");
} */

/* console.log(true && true) // true
console.log(true && false) // false
console.log(false && false) // false

console.log(true || true) // true
console.log(true || false) // true
console.log(false || false) // false

let nombreUsuarioBD = "juanca95"
let contraseniaBD = "juan1234"
let nombreUsuarioIngresado = prompt("Ingrese user")
let contraseniaUsuarioIngresado = prompt("Ingrese contraseña")

if (nombreUsuarioBD == nombreUsuarioIngresado && contraseniaBD == contraseniaUsuarioIngresado) {
  alert("Bienvenido")
} else {
  alert("Usuario/contraseña incorrecto/s")
} */

// de 0 a 5 años inclusive pagan $100
// de 6 a 10 años inclusive pagan $200
// de 11 a 15 años inclusive pagan $300
// de 16 en adelante pagan $500

/* let edad = Number(prompt("Ingrese edad"))

if (!isNaN(edad)) {
  if (edad >= 0 && edad <= 5) {
    alert("Debe pagar $100")
  } else if (edad >= 6 && edad <= 10) {
    alert("Debe pagar $200")
  } else if (edad >= 11 && edad <= 15) {
    alert("Debe pagar $300")
  } else if (edad <= 80) {
    alert("Debe pagar $500")
  } else {
    alert("Debe tener como máximo 80 años")
  }
} else {
  alert("El valor ingresado no es un número")
} */

/* let verdura = prompt("ingrese la verdura que desea comprar").toLowerCase()

switch (verdura) {
  case "cebolla":
    alert("El kilo de cebolla sale $350")
    break
  case "zanahoria":
    alert("El kilo de zanahoria sale $500")
    break
  case "papas":
    alert("El kilo de papas sale $400")
    break
  default:
    alert("No tenemos la verdura ingresada")
    break
} */

/* let edad = Number(prompt("Ingrese edad"))
if (!isNaN(edad)) {
  if (edad >= 0 && edad <= 5) {
    alert("Debe pagar $100")
  } else if (edad >= 6 && edad <= 10) {
    alert("Debe pagar $200")
  } else if (edad >= 11 && edad <= 15) {
    alert("Debe pagar $300")
  } else if (edad <= 80) {
    alert("Debe pagar $500")
  } else {
    alert("Debe tener como máximo 80 años")
  }
} else {
  alert("El valor ingresado no es un número")
}

console.log("FIN")

/* let numero = 10
numero = numero + 1
numero += 1
numero++ */

/* let cantidad = Number(prompt("Ingrese la cantidad de veces que quiere ver ejecutar"))
let porcentaje = Number(prompt("Ingrese el porcentaje a incrementar"))

for (let i = 0; i < cantidad; i++) {
  let numero = Number(prompt("Ingrese un numero para incrementar: "))
  alert(numero * (1 + porcentaje / 100))
} */

/* for (let i = 10; i > 0; i--) {
  console.log(i)
} */

/* for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue
  }
  console.log(i)
} */


/*
let nombreUsuarioBD = "juanca95"
let nombreUsuarioIngresado = prompt("Ingrese user")
let contador = 1
while (contador < 3) {
  if (nombreUsuarioBD == nombreUsuarioIngresado) {
    break
  }
  nombreUsuarioIngresado = prompt("Ingrese user")
  contador++
} */

/* let nombreUsuarioBD = "juanca95"
let nombreUsuarioIngresado = ""
let contador = 0
do {
  nombreUsuarioIngresado = prompt("Ingrese user")
  contador++
} while (contador < 3 && nombreUsuarioBD != nombreUsuarioIngresado)

if (nombreUsuarioBD == nombreUsuarioIngresado && contador <= 3) {
  alert("BIENVENIDO " + nombreUsuarioBD)
} else {
  alert("Intente nuevamente más tarde")
} */

/* let opcion = 0
do {
  let num1 = 0
  let num2 = 0
  // let num1 = Number(prompt("ingrese valor número 1: "))
  // let num2 = Number(prompt("ingrese valor número 2: "))
  let menu = "1 - para sumar\n2 - para restar\n3 - para multiplicar\n4 - para ingresar valores\n0 - para salir"
  alert(menu)

  opcion = Number(prompt("ingrese la opción: "))
  while (isNaN(opcion)) {
    opcion = Number(prompt("ingrese un número correcto: "))
  }
  if (opcion === 1) {
    alert("La suma es: " + (num1 + num2))
  } else if (opcion === 2) {
    alert("La diferencia es: " + (num1 - num2))
  } else if (opcion === 3) {
    alert("El producto es: " + (num1 * num2))
  }
  else if (opcion === 4) {
    num1 = Number(prompt("ingrese valor número 1: "))
    num2 = Number(prompt("ingrese valor número 2: "))
  }
} while (opcion != 0) */

//let numero = Number(prompt("Ingrese numero para ver su tabla del 1 al 10"))
//for (let i = 0; i < 10; i++) {
  //console.log(numero + " X " + (i + 1) + " = " + (numero * (i + 1))) }





