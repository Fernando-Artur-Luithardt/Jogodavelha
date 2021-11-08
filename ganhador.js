function ganhador(id) {
    //chamar todos dados da tabela
    td1 = document.getElementById(1.1).innerText

    td2 = document.getElementById(1.2).innerText
    td3 = document.getElementById(1.3).innerText
    td4 = document.getElementById(2.1).innerText
    td5 = document.getElementById(2.2).innerText
    td6 = document.getElementById(2.3).innerText
    td7 = document.getElementById(3.1).innerText
    td8 = document.getElementById(3.2).innerText
    td9 = document.getElementById(3.3).innerText

    if((td1 == td4 && td4 == td7 && td1 != "" && td4 !="" && td7 !="") || (td2 == td5 && td5 == td8 && td2 != "" && td5 !="" && td8 !="") || (td3 == td6 && td6 == td9 && td3 != "" && td6 !="" && td9 !="")
        || (td1 == td2 && td2 == td3 && td1 != "" && td2 !="" && td3 !="") || (td4 == td5 && td5 == td6 && td4 != "" && td5 !="" && td6 !="") || (td7 == td8 && td8 == td9 && td7 != "" && td8 !="" && td9 !="")
        || (td1 == td5 && td5 == td9 && td1 != "" && td5 !="" && td9 !="") || (td3 == td5 && td5 == td7 && td3 != "" && td5 !="" && td7 !="")) {
        tdGanhador = document.getElementById(id).innerText
        alert('ganhador ' + tdGanhador)
    } else if (td1 != "" && td2 != "" && td3 != "" && td4 != "" && td5 != "" && td6 != "" && td7 != "" && td8 != "" && td9 != "") {
        alert("Nenhum ganhador")
    }
} 