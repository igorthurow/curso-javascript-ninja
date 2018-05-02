// ^ fora da lista representa verificação no início de string

// ^<h1>  // verifica se a string começa com <h1>

// $ representa no fim da string.

// </h1>$ verifica se a string termina com </h1>

//flag m = multiline, verficiar a regex uma vez por linha

var multiline = /(<\w+>)[^<]+(<\/\w+>)/gm;

var text = '<h1>igor</h2>\n<h1>igor</h2>\n<h1>igor</h2>';

console.log (text.match(multiline));

//captura NÃO GULOSA, é aquela que faz o match com o mínimo de caracteres possiveis. simbolo ?
//acima fizemos a lista [^<] para o match com as tags, abaixo não precisa, pois com o simbolo ? após um REPETIDOR (+) faz ele faz o match o quanto antes, fazendo com que capture todas tags

var multiline = /(<\w+>).+?(<\/\w+>)/gm;


//agrupar e não capturar = ?: antes da captura. exemplo:

var regexnaocapturar = /ju(?:n|l)ho/g; 

// não captura o n ou l pra ser usado no $1 ou qualquer outro metodo como replace, apenas agrupa para ser utilizado como no exemplo acima e outras exceções;


//match apenas com a refecencia previa da captura. Exemplo:

var matchcomcaptura = /<(\w+)>.+<\/(\1)>/g; // neste caso o \1 se refere a primeira captura, portanto irá garantir que a tag de fechamento seja igual a de abertura, pois se trata do $1;

// outros métodos além do .match() e .replace();

// método split(); quebra o array no parâmetro passado

var cpfqualquer = '111.111.111-58';

console.log (cpfqualquer.split('.')); // quebra o array no ponto.

console.log (cpfqualquer.split(/\D/)); // quebra o array onde NÃO é número;

// método search(); retorna o índice de onde foi encontrado o caracter passado por parâmetro dentro de uma string;

console.log(cpfqualquer.search('.')); // retorna o índice do primeiro ponto.

console.log (cpfqualquer.search(/\./)); // pode usar regex nele. Igual o indexOf, porém aceita regex;

// construtor regExp();

var textoqualquer = /\d/g;

var textoqualquer = new RegExp ('igor'); //mesma coisa que acima, acima chama-se regex literal, aqui com construtor.

console.log(textoqualquer.test('igor')); // método test, método de regex. retorna true/false;

var textoqualquer = /\d/g;

//método de regex exec(); retorna o parametro, o indice onde ele se encontra. Caso executado novamente, executa no parâmetro a seguir, quando executa todos parametros retorna null;
//pra executar o .exec é necessário que a regex tenha a flag /g;


console.log (textoqualquer.exec('1'));
console.log (textoqualquer.exec('12')); 
console.log (textoqualquer.exec('123')); 
console.log (textoqualquer.exec('123'));

(function whileexec () {
    'use strict';
    var regex = /\d/g;
    var name = 'igor123thurow';
    var results;

    while (results = regex.exec(name) !== null ) {
        console.log(results);
    }
})();

// lembrando: \n \s = espaço \t = tabulação

// escapar um ' ou " na string;

console.log ('Igor\'s '); //Assim consigo usar um apóstrofe adicional;