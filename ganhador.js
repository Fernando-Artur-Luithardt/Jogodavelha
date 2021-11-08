function ganhador(id) {
    //chamar todos dados da tabela
    td1 = document.getElementById(1.1)
    td1 = td1.innerText
    td2 = document.getElementById(1.2)
    td2 = td2.innerText
    td3 = document.getElementById(1.3)
    td3 = td3.innerText
    td4 = document.getElementById(2.1)
    td4 = td4.innerText
    td5 = document.getElementById(2.2)
    td5 = td5.innerText
    td6 = document.getElementById(2.3)
    td6 = td6.innerText
    td7 = document.getElementById(3.1)
    td7 = td7.innerText
    td8 = document.getElementById(3.2)
    td8 = td8.innerText
    td9 = document.getElementById(3.3)
    td9 = td9.innerText
    console.log(td1)
    console.log(td4)
    console.log(td7)

    if((td1 == td4 && td4 == td7 && td1 != "" && td4 !="" && td7 !="") || (td2 == td5 && td5 == td8 && td2 != "" && td5 !="" && td8 !="") || (td3 == td6 && td6 == td9 && td3 != "" && td6 !="" && td9 !="")
        || (td1 == td2 && td2 == td3 && td1 != "" && td2 !="" && td3 !="") || (td4 == td5 && td5 == td6 && td4 != "" && td5 !="" && td6 !="") || (td7 == td8 && td8 == td9 && td7 != "" && td8 !="" && td9 !="")
        || (td1 == td5 && td5 == td9 && td1 != "" && td5 !="" && td9 !="") || (td3 == td5 && td5 == td7 && td3 != "" && td5 !="" && td7 !="")) {
        tdGanhador = document.getElementById(id)
        tdGanhador = tdGanhador.innerText
        alert('ganhador ' + tdGanhador)
    }
} 