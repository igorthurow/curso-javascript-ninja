// propriedades e métodos de função.

// .name -  Informa o nome da função
// .lenght - informa a quantidade de parãmetros que esta função espera receber.
// .toString() - Ele é um método que se comporta diferente de acordo com o tipo de valor que o está invocando.
// .call() - permite passar o 'this' como parâmetro para uma função. Dessa forma eu posso controlar quem será o this.

(function IIFE(w, d) {
    'use strict';

    function igor( lastName, age, sign) {
        'use strict';
        /*//name
        console.log(igor.name);
        //length
        console.log(igor.length);
        // array
        var arr = [1, 2, 3, 4, 5];
        console.log(arr.toString());
        // obj - retorna o
        var obj = { p: 'p1', p2: 'p2', p3: 'p3'};
        console.log(obj.toString());
        //function - retorna a função de forma literal.
        console.log(igor.toString());
        //this para o call - naturalmente o this dentro de uma função, aponta para o objeto global Window. Como eu vou invocar através do call e passar um obj. O this vai apontar para o obj passado por parâmetro no método call.*/
        console.log(this.name);
        this.lastName = lastName;
        console.log(this.lastName);
        this.totalName = this.name + ' ' + this.lastName;
        console.log(this.totalName);
        this.age = age;
        console.log(this.age);
        this.sign = sign;
        console.log(this.sign);
        console.log(this);
    };
        // call - invoca a função e passa um obj por parâmetro para servir de this.
        var objName = {name: 'Igor'};
        console.log(igor.call(objName, 'Thurow', 23, 'Canceriano'));

        //aply - invoca a função, passa um obj por parâmetro para servir de this, e passa um arr como parâmetro. Este array será percorrido e transformado cada item em um parâmetro.
        var person = ['da Silveira', 24, 'Acqua'];
        console.log(igor.apply(objName, person));

        //construtores: Função construtora leva o this, que irá apontar para o novo objeto criado (como uma atribuição a uma variavel por exemplo. E utilizando o .prototype é possivel estender uma função construtora e adicionar mais propriedades e métodos).
        //Como os construtores são dinâmicos e "vivos", não importa se eu tiver um objeto instanciado "antigo", caso eu estenda seu protótipo (seu "pai"), ele irá herdar o novo método/parâmetro também.

        function address( street, number, country ) {
            this.street = street;
            this.number = number;
            this.country = country;
            this.anotherMethod = function(){
                return 'This is an other any method.'
            }
        }
        //estender - irá adicionar nova propriedade ou método ao prototipo do construtor. Assim, irá herdar tudo que já foi previamente criado, e adicionar mais heranças.

        //adicionando novo método fullAddress ao PROTÓTIPO do construtor.
        address.prototype.fullAddress = function(){
            return 'Street: ' + this.street + '\nNumber: ' + this.number + '\nCountry: ' + this.country;
        }

        var igorAddress = new address( 'Vereador Carlos Eli Bilhão', '170', 'Brasil' );
        var thiagoAddress = new address( null, null, 'Canadian' );
        var leoAddress = new address( 'Salgado Filho', '1041', 'Brasil' );

        console.log(igorAddress.anotherMethod());
        console.log(igorAddress.fullAddress());
        console.log(thiagoAddress.fullAddress());
        console.log(leoAddress.fullAddress());

        //prototype com array like para tratar arraylike como array normal e poder usar toda herança do protótipo como métodos e propriedades.

    function argumentsFunction() {
        var parametros = Array.prototype.forEach.call( arguments, function( item, index, array) {
            console.log(item);
        });
        console.log(parametros);
    }

    argumentsFunction( 1, 2, 3, 4, 5, 6);


})(window, document);

