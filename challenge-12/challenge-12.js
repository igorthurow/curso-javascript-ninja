( function IIFEGlobal() {

/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
// ?
person = {
	name: 'Igor',
	lastname: 'Thurow',
	age: 23
}

console.log( 'Propriedades de "person":' );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
//

console.log( Object.keys(person) );

/*
Crie um array vazio chamado `books`.
*/
// 

books = []

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
// ?

books.push(livro1 = {
	name: 'Contos de Esteio',
	pages: 666
}, livro2 = {
	name: 'Sapucaia',
	pages: 265
},
	livro1 = {
	name: 'A cidade baixa',
	pages: 142
});


console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
// ?

console.log (books)

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
// ?
var removed = books.pop();
console.log(removed);

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
// 

console.log(books);

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' );

var books = JSON.stringify(books);

/*
Mostre os livros nesse formato no console:
*/
// ?

console.log(books);

/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:' );

var books = JSON.parse(books);

console.log(books);

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
// ?

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?

myName = ['I', 'G', 'O', 'R', 'T', 'H', 'U', 'R', 'O', 'W'];

console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?

console.log(myName)

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?

myName.reverse()
console.log(myName)

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
// 

myName.sort()
console.log(myName);

})();