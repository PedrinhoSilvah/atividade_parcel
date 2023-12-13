const dataDoEvento = new Date("Mar 01, 2024 04:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();


    const TimeInauguracao = timeStampDoEvento - timeStampAtual;

    const diaEmMs =  1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;


     const diasAteInauguracao = Math.floor(TimeInauguracao / diaEmMs);
     const horasAteInauguracao = Math.floor((TimeInauguracao % diaEmMs) / horasEmMs );
     const minutosAteInauguracao = Math.floor((TimeInauguracao % horasEmMs) /  minutosEmMs) ;
     const segundosAteInauguracao = Math.floor((TimeInauguracao % minutosEmMs) / 1000);
     console.log(diasAteInauguracao);

     document.getElementById('time').innerHTML = `${diasAteInauguracao}d ${horasAteInauguracao}h ${minutosAteInauguracao}m ${segundosAteInauguracao}s`

     if(TimeInauguracao < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('time').innerHTML = `Restaurante inaugurado, Venha nos conhecer`;
     }

}, 1000);