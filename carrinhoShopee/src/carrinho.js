const addItem = async (userCart, item) => {
  userCart.push(item)  
}

const deleteItem = async (userCart, name)=> {
const item =  userCart.findIndex((t) => t.nome === name)
if(item !== -1){
  userCart.splice(item, 1)
}
}

const diminuirItem = async (userCart, nome, quantidade)=> {
  userCart.forEach(i => {
    if(i.nome === nome)
      i.quant = quantidade
  })

}

const CalcularTotal = async (userCart)=> {
   console.log(userCart.reduce((total, item) => total + item.subTotal(), 0))
}

const imprimir = async (userCart) => {
  userCart.forEach((i , id) => {
  console.log(`${id}.Produto: ${i.nome} - Quant: ${i.quant} Preço: ${i.preco} \nSub-Total: R$${i.subTotal()}`)    
  });
}

export{
  addItem, CalcularTotal, diminuirItem, deleteItem, imprimir
}