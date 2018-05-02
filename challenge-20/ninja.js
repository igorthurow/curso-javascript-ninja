// Início do DOM, manipular classes e ids. Invoca a função com os métodos do window e do document, que é meu arquivo na qual o JS está sendo chamado, neste caso index.html
/*
(function ( win, doc ) {
    'use strict';

    console.log( doc.getElementById( 'my-link' ) );
    console.log( doc.getElementsByTagName( 'input' ) ); //pega pela marcação <tag>
    console.log( doc.getElementsByClassName( 'my-link' ) );
    var $inputs = doc.getElementsByTagName('input');
    console.log( 'Eu sou o ', $inputs )
    console.log( doc.getElementsByName( 'username' ) ); //<name= // TODOS comandos get fazem uma variavel dinamica, onde se alterar um valor, ele irá se alterar na variavel.
    

    console.log( doc.querySelector('[type="text"]')); // seleciona uma tag, estaticamente, "copia" pra dentro de uma variavel por exemplo.
    console.log( doc.querySelectorAll('input')); // seleciona TODAS tags, estaticamente, "copia" pra dentro de uma variavel por exemplo.
    console.log( doc.querySelector('.input')); // pega uma classe. SelectorAll pegaria todas classes
    console.log( doc.querySelector('#password')); // pega um id.
})(window, document);
*/
//alert, prompt e confirm. Manusear janelas e avisos com js.
/*
(function ( win ) { 
    'use strict';
    do {
        var name = prompt('Qual seu nome?');
        if (name) {
            alert('Olá ' + name)
            var change = confirm('Gostaria de alterar seu nome?')
        }
        else {
            alert('Coloque seu nome!');
            change = true;
        }
    }
    while ( change === true );
    alert('Nome salvo com sucesso!');
})(window);
*/

//métodos de input de formulário: .value() -- manipular valores e modificar, obter 

(function ( win, doc ) {
    'use strict';

    var $inputUsername = doc.querySelector('#username');
    var $inputPassword = doc.querySelector( '#password');
    //$inputUsername.value = 'Igor Thurow'; //setter = seta um valor 'set'
    //$inputPassword.value = 'Minha senha lala';

    console.log($inputUsername.value, $inputPassword.value); //getter = recebe um valor 'get'

})(window, document);

//.addEventListener() - método de eventos, 'click' 'scroll' entro MUITOS outros

(function( win, doc ) {
    'use strict';

    var $inputUsername = doc.querySelector('#username');
    var $inputPassword = doc.querySelector( '#password');
    var $button = doc.querySelector('#button');

    $button.addEventListener('click', function (event) { //evento click
        event.preventDefault(); //previne o evento padrão ao realizar o evento; no caso do botão previne de atualizar a tela.
        alert('Ninguém acertou!!!!');
    }, false);

    /*$button.addEventListener('submit', function (event) { //evento submit - faz algo DEPOIS do submit, portanto nao retorna nada por enquanto
        event.preventDefault(); //previne o evento padrão ao realizar o evento; no caso do botão previne de atualizar a tela.
        console.log('Ninguém acertou!!!!');
    }, false);
*/
    $inputUsername.addEventListener('click', function (event){
        alert('Preencha certinho!');
    }, false);

    document.addEventListener('click', function (event){
        alert('Errrrooooooo!');
    })

})(window, document);

