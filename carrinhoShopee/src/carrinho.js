const addItem = async (userCart, item) => {
  userCart.push(item)  
}

const deleteItem = async (userCart, name)=> {
const item =  userCart.findIndex((t) => t.nome === name)
if(item !== -1){
  userCart.splice(item, 1)
}

}

const diminuirItem = async (userCart, nome, op, quantidade)=> {
  var index = userCart.findIndex((v) => v.nome === nome)
  if(userCart[index].quant > quantidade && op === 0){
      userCart[index].quant -=quantidade
  }else if(op === 1){
    userCart[index].quant +=quantidade
  }else {
    userCart.splice(index,1)
  }
}



const imprimir = async (userCart) => {
  userCart.forEach((i , id) => {
  console.log(`${id}.Produto: ${i.nome} - Quant: ${i.quant} Preço: ${i.preco} \nSub-Total: R$${i.subTotal(i.preco,i.quant)}`)    
  });
}

const CalcularTotal = async (userCart)=> {
  console.log(userCart.reduce((total, item) => total + item.subTotal(item.preco,item.quant), 0))
}

export{
  addItem,  diminuirItem, deleteItem, imprimir, CalcularTotal
}