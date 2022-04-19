const PIZZAS = [
    { ID: 1, nombre: 'Muzzarella', ingredientes: ['Salsa de Tomate', 'Muzzarella', 'Aceitunas Verdes'], precio: 540 },
    { ID: 2, nombre: 'Huevo', ingredientes: ['Tomate', 'Muzzarella', 'Huevo Duro', 'Aceitunas negras'], precio: 570 },
    { ID: 3, nombre: 'Jamón y Morrones', ingredientes: ['Salsa de Tomate', 'Muzzarella', 'Jamon', 'Morron'], precio: 650 },
    { ID: 4, nombre: 'Napolitana', ingredientes: ['Tomate', 'Muzzarella', 'Tomate fresco', 'Oregano', 'Aceitunas verdes'], precio: 640 },
    { ID: 5, nombre: 'Margarita', ingredientes: ['Tomate', 'Muzzarella', 'Albahaca', 'Aceitunas negras '], precio: 690 },
    { ID: 6, nombre: 'Fugazzeta', ingredientes: ['Muzzarella', 'Cebolla', 'Oregano', 'Aceitunas verdes'], precio: 620 },
]

//Pizzas con ID impar
const impares = [];
PIZZAS.filter(pizza => {
    if (pizza.ID % 2 !== 0) {
        impares.push(pizza.nombre);
        impares.toString;
    }
})
console.log(`Las pizzas con ID impar son ${impares}.`);

//Pizzas con precio menor a $600

const valor = [];
PIZZAS.filter(pizza => {
    if (pizza.precio < 600) {
        valor.push(pizza.nombre);
        valor.toString;
    }
})

console.log(`Pizzas con precio menor a $600: ${valor}.`)

//Nombres de las pizzas
const nombrePizza = PIZZAS.map(pizza => pizza.nombre)
console.log(`Nombres de todas las pizzas:${nombrePizza}`);

//Precios de las pizzas 
const costoPizza = PIZZAS.map(pizza => pizza.precio)
console.log(`Precios de todas las pizzas:${costoPizza}`);

//Nombre y precio de cada pizza
const NameValor = PIZZAS.forEach(pizza => PIZZAS.nombre, PIZZAS.precio)
console.log(`Las pizzas se llaman ${nombrePizza} y sus valores son ${costoPizza}`);