import criarItem from "./item.js";
import * as car from "./carrinho.js";


const item1 = await criarItem("Lapis", 2 , 2.42);

const item2 = await criarItem("Boné", 3 , 5.52);

const item3 = await criarItem("Canete", 3 , 3.99);
const cart = [];

await car.addItem(cart, item1);
await car.addItem(cart, item2);
await car.addItem(cart, item3);

await car.imprimir(cart)
await car.CalcularTotal(cart);


await car.deleteItem(cart, item1.nome)
await car.diminuirItem(cart, "Boné" , 5)


await car.imprimir(cart)
await car.CalcularTotal(cart);