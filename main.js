const Pizzas = [{
        id: 1,
        nombre: 'Muzarela',
        precio: 550,
        Ingredientes: ['Muzarela', 'Oregano'],
    },
    {
        id: 2,
        nombre: 'Napolitana con Jamon',
        precio: 1100,
        Ingredientes: ['Muzarela', 'Tomate', 'Jamon'],
    },
    {
        id: 3,
        nombre: 'Calabresa',
        precio: 1200,
        Ingredientes: ['Muzarela', 'Salame'],
    },
    {
        id: 4,
        nombre: '4 Quesos',
        precio: 1400,
        Ingredientes: ['Muzarela', 'Roquefort', 'Parmesano', 'Provolone'],
    },
    {
        id: 5,
        nombre: 'Fugazeta',
        precio: 1100,
        Ingredientes: ['Muzarela', 'Cebolla'],
    },
    {
        id: 6,
        nombre: 'Baconator',
        precio: 1400,
        Ingredientes: ['Chedar', 'Bacon', 'Muzarela', 'Salchicha'],
    },
];
//Ejercicio A
Pizzas.forEach(numero => {
    if (numero.id % 2 != 0)
        console.log(`Las pizzas impares son: ${numero.nombre}`);
});
//Ejercicio B
//NO ENTIENDO COMO ENCARARLO AAAAAAAAA *MODO PANDA*

//Ejercicio C
Pizzas.forEach(nombres => { console.log(`Variedad de pizza : ${nombres.nombre}`) });
//Ejercicio D y E
Pizzas.forEach(precios => { console.log(`La variedad de pizza "${precios.nombre}" tiene un precio de $${precios.precio}`) });