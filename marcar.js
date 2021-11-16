let P1 = "X"
let P2 = "O"

let sinal = P1

function marcar(id) {
    
    //Apontar para td pelo id recebido
    td = document.getElementById(id)
    //se já tiver sido marcado retornar
    if(td.innerText != "") return
    //colocar o texto no td indicado pelo id acima
    td.innerText = sinal
    //trocar o sinal de letra
    if(sinal == "X") {
        sinal = "O"
    }else{
        sinal = "X"
    }
    ganhador(id)
}