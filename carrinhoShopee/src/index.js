import criarItem from "./item.js";
import * as car from "./carrinho.js";

const cart = [];

const item1 = await criarItem("Lapis", 2 , 2.42);

const item2 = await criarItem("Boné", 3 , 5.52);

const item3 = await criarItem("Canete", 3 , 3.99);


await car.addItem(cart, item1);
await car.addItem(cart, item2);
await car.addItem(cart, item3);

await car.imprimir(cart)
await car.CalcularTotal(cart)


await car.deleteItem(cart, item1.nome)

await car.diminuirItem(cart, "Boné", 1 , 3)
await car.addItem(cart, item1)

await car.imprimir(cart)
await car.CalcularTotal(cart)


await car.diminuirItem(cart, "Canete", 0 , 2)
await car.imprimir(cart)
await car.CalcularTotal(cart)