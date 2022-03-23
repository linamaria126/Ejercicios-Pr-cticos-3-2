alert("A CONTINUACIÓN RESOLVEREMOS EL ÁREA DE TRES FIGURAS GEOMÉTRICAS")

//Superficie rectángulo

var lado_1 
var lado_2

lado_1 = prompt("1. RECTÁNGULO - Ingrese el valor del primer lado del rectángulo: ")
lado_2 = prompt("Ingrese el valor del segundo lado del RECTÁNGULO: ")
superficie_rec = lado_1 * lado_2
alert("La superficie del RECTÁNGULO es: " + superficie_rec)

// //Superficie de un triángulo

var base
var altura
var superficie

base = prompt("2. TRIÁNGULO - Ingrese la base del triángulo: ")
altura = prompt("Ingrese la altura del TRIÁNGULO: ")
superficie_trian = (base * altura)/2
alert ("la superficie del TRIÁNGULO es: " + superficie_trian)


// //Superficie de un círculo

var radio
const pi = 3.1416

radio = parseFloat(prompt("3. CÍRCULO - Ingresa el área de el círculo: "))
superficie_circ = pi*(radio * radio)
alert ("La superficie del CÍRCULO es: " + superficie_circ)

// b) Crear 3  variables numéricas, calcular e imprimir producto, suma y el promedio. Mostrar los resultados.
alert("EJERCICIOS CON TRES VARIABLES")

var x
var y
var z


x = parseInt(prompt("Digite el valor  de la primera variable numérica: "))
y = parseInt(prompt("Digite el valor de la segunda variable numérica: "))
z = parseInt(prompt("Digite el valor de la tercera variable numérica"))

suma = x + y + z
producto = x * y * z
promedio = (x + y + z)/3

alert("El valor de la SUMA  de las tres variables es: "+suma)
alert("El valor del PRODUCTO de las tres variables es: "+ producto)
alert("El valor del PROMEDIO de las tres variables es: "+ promedio)

//c) Una tienda ofrece un descuento del 15% sobre el total de cada  compra y un cliente desea saber cuánto deberá pagar finalmente por su compra. Deberán crear 5 artículos los cuales tendrán sus nombres y valores, luego mostrar el descuento aplicado mas el total final

alert("CREAR CINCO ARTÍCULOS DE UNA TIENDA, MOSTRAR  EL VALOR TOTAL ASIGNANDO UN DESCUENTO DEL 15%")

var producto_1 
var producto_2
var producto_3

producto_1 = parseInt(prompt("El precio del Producto 1 es: " ))
producto_2 = parseInt(prompt("El precio del Producto 2 es: " ))
producto_3 = parseInt(prompt("El precio del Producto 3 es: " ))
producto_4 = parseInt(prompt("El precio del Producto 4 es: " ))
producto_5 = parseInt(prompt("El precio del Producto 5 es: " ))

total = producto_1 + producto_2 + producto_3 + producto_4 + producto_5
desc = total * 0.15
total_con_desc = total - desc

alert("El descuento aplicado a la compra es de: " + desc)
alert("El total de la compra después de aplicar descuentos es: " + total_con_desc)

//d) Dada una cantidad en pesos (el valor lo deben asignar ustedes), obtener la equivalencia en dólares, asumiendo que la unidad cambiaría es un dato desconocido.

alert("CAMBIAR DE PESOS COLOMBIANOS A DÓLARES")

var pesos
var dolares

pesos = prompt("Digite el valor en pesos que desea convertir a dólares: ")
dolares = pesos / 3763
alert("El valor en dólares es: "+ dolares)

// e) Un  cliente realizo una compra y necesita saber el importe del IVA de la misma. Realizar un algoritmo que dado el importe de una factura calcular el valor correspondiente al IVA.

alert("CALCULAR EL IVA DE UNA FACTURA")

var factura 
var iva

factura = prompt("digite el valor total de la compra")
iva = factura * 0.19

alert("El valor del IVA de la factura es: " + iva)
