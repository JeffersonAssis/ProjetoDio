const criarItem= async (nome, quant, preco)=> {
  return {
    nome, 
    quant,
    preco,
    subTotal:()=> preco*quant,
  }
}

export default criarItem;