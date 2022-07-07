let Botão = document.getElementById("Botão")
let Select = document.getElementById("Select-Moedas")


async function ConverteMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (Resposta) {
        return Resposta.json()
    })

    let Dolar = moedas.USDBRL.high
    let Euro = moedas.EURBRL.high + 5000

    //Essa variavel guarda o valor somente em number do input do HTML
    let InputValorEmReais = Number(document.getElementById("input").value)
    //essa variavel puxa o paragrafo do HTML
    let InputReais = document.getElementById("Input-Reais")
    //essa variavel puxa o paragrafo do HTML
    let InputMoedas = document.getElementById("Input-Moedas")


    if (Select.value === "$ Dolar Americano") {
        // essa variavel divide o valor do inputValorEmReais com o ValorDolar
        let ValorEmDolares = InputValorEmReais / Dolar
        InputMoedas.innerHTML = ValorEmDolares.toLocaleString("en-US", { style: "currency", currency: "USD" })
    }

    if (Select.value === "€ Euro") {
        let ValorEmEuros = InputValorEmReais / Euro
        InputMoedas.innerHTML = ValorEmEuros.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
    }

    // essa função altera o a tag do HTML Traduzindo de humanas para javascript
    InputReais.innerHTML = InputValorEmReais.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}


// Essa function é responsalvel por trocar as bandeiras e os nomes das moedas
function TrocaDeMoeda() {
    let TextoMoedas = document.getElementById("texto-moedas")
    let BandeiraMoedas = document.getElementById("bandeira-moedas")

    if (Select.value === "$ Dolar Americano") {
        TextoMoedas.innerHTML = "Dolar Americano"
        BandeiraMoedas.src = "./assets/Estados Unidos.png"
    }

    if (Select.value === "€ Euro") {
        TextoMoedas.innerHTML = "Euro"
        BandeiraMoedas.src = "./assets/Euro.png"
    }

    ConverteMoedas()
}

// Este evento escuta o click no botão
Botão.addEventListener("click", ConverteMoedas);
// Este evento escuta o click no Select
Select.addEventListener("change", TrocaDeMoeda)






