/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
//

(function(d, w){
    'use strict';

    //Botões
    var $start = d.querySelector('[data-js=start]');
    var $stop = d.querySelector('[data-js=stop]');
    var $reset = d.querySelector('[data-js=reset]');

    //Cronômetro
    var $area = d.querySelector('[data-js=cronometer]');

    //Entrada do usuário
    var $uservalue = d.querySelector('[data-js=uservalue]');

    //Variáveis que serão usadas
    var interval = 1;
    var limit;
    var temporizador;

    //Função para startar o cronômetro
    function timer(){
        if (interval <= (limit ? limit : Infinity)) {
            temporizador = setTimeout(cronometerSystem, 1000);
        }
        $stop.addEventListener('click', stopCronometer, false);
        $reset.addEventListener('click', resetCronometer, false);
    }; $start.addEventListener('click', startCronometer, false);

    //Funcões do cronômetro 
    var cronometerSystem = function(){
        $area.innerHTML = interval;
        interval++;
        if (limit == $area.innerHTML) {
            $uservalue.disabled = false;
            $start.disabled = false;
        }
        return timer();
    };
    function stopCronometer(){
        $start.disabled = false;
        $uservalue.disabled = false;
        return clearTimeout(temporizador);
    }
    function resetCronometer(){
        interval = 1;
        $area.innerHTML = '0';
        stopCronometer();
    }
    function startCronometer(){
        this.disabled = true;
        $uservalue.disabled = true;
        limit = $uservalue.value;
        return timer();
    }

})(document, window);