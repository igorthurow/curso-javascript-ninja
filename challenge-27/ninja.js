(function (){
'use strict'

var ajax = new XMLHttpRequest();
ajax.open('GET', '/');
ajax.send(null);

ajax.addEventListener('readystatechange', function() {

  if (ajax.readyState == 2)
    console.log(ajax.readyState, 'Headers Recebidos')
  if (ajax.readyState == 3)
    console.log(ajax.readyState, 'Carregando o corpo do request, carregando o conteúdo para que eu possa manipular')
  if (ajax.readyState == 4)
    console.log(ajax.readyState, 'Conteúdo concluído com sucesso')
/*
    switch (ajax.status) {
      case 200:
        console.log('Foi foda!')
        break;
    }*/

    function isRequestOk( status, state ) {
      if (status === 200 && state === 4) {
        console.log(status, state)
        return true;
      }
    }
    isRequestOk()

    if ( isRequestOk(ajax.status, ajax.readyState) ) {
      console.log('Requisição OK!');
    }
    else {
      console.log('Carregando...');
    }
})

/**
 * Instanciar um novo objeto ajax. Open, Send. ReadyStateChange. State. ReadyState.
 */



})();
