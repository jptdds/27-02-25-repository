// verificar se tem estoque  para atender pedido// 
let estoque
let pedido
function verificar_estoque(estoque, pedido):
    var  estoque >= pedido;
    
        return "Estoque suficiente para atender o pedido."
    else:
        return "Estoque insuficiente para atender o pedido."

# Exemplo de uso
estoque_atual = 20
quantidade_pedido = 15

resultado = verificar_estoque(estoque_atual, quantidade_pedido)
print(resultado)
