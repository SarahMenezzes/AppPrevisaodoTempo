const key = "984d3e8df69fc1cc0c490577f36df165"


function DadosTela(dados){
    console.log(dados)
    document.querySelector('.titulo-cidade').innerHTML = "Tempo em " + dados.name
    document.querySelector('.graus').innerHTML = Math.floor (dados.main.temp) + "°C"
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector('.umidade').innerHTML = " Umidade do ar: " + dados.main.humidity + "%"
   

}



 async function BuscarDados(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json());
    DadosTela(dados)


}




function CliqueBotao(){
    const cidade = document.querySelector('.input-cidade').value
    BuscarDados(cidade)
}