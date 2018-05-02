/* 
/s - regex pega todos espaços em branco, tabulações e quebras de linha
/t - tabulações
/n - quebra de linha
. - qualquer caracter exceto quebra de linha

//// NEGAÇÃO: 

[^abc] - lista de negação, basicamente TUDO que não seja o que vem depois do ^,  quer dizer, match em qualquer coisa que não seja a,b,c. Nega eles de uma esquisa de todos elemtnos.
\W - qualquer caracter menos alfa numerico. o contratio do \w, que faz todos caracteres alfa-numericos.
\D - qualquer coisa menos digitos. ao contrario do \d que pega todo os dígitos
\S - todos menos espaço em branco, quebra de linha e tabulações

*/

//console.log(text.match([\S\s]));//<-- Faz com que selecione todos caracteres.


// repetidores

//repetidor de intervalo {n, m} n= minimo e m=maximo, é um intervalo para repetir a verificação dos caractres;
//repetidor de intervalo aberto {n, } n o valor minimo, e sem valor apos a virgula pega qualquer valor de no minimo x digitos.
//repetidor exato de vezes {n};
//repetidor ? - opicional. pode ou não existir. exemplo: \d\d? o segundo numero é opicional, se não tiver retorna os com 1 digito.
// repetidor + faz o valor ser verificado 1 ou quantas vezes ele existir; \d+ pega qualquer numero em sequencia, \w+ qualquer caracter alfa numerico em sequencia - como uma palavra
// repetidor * - \w* qualquer caracter alfanumerico (\w) seguido de qualquer caracter infinito. (*)

//exemplos reais


var myUrl = 'http://google.me.brrr';

console.log(myUrl.match(/https?:\/\/(www)?\.?\w+\.\w{1,3}\.?(\w{2})?/g));

var myEmail = 'igorthurow@gmail.com';

console.log(myEmail.match(/\w+@\w+\.\w{2,3}\.?(\w{2,3})?/g));