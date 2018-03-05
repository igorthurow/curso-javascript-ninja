/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?

console.log(var qualquer = ['igor', 69, 'buceta', true, false];)

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?

function myFunction(arr){
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?

myFunction(qualquer)[1]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
// ?

function myFunction2(arr, num) {
	return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?

var myArray = ['Igor', true, false, 1, null]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?

myFunction(myArray)

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?

function book(par) {
	var bookInfo = {
		'Livro 1': {
			quantidadePaginas: 190,
			autor: 'Carol Eberhardt',
			editora: 'Phirow'
		},
		'Livro 2': {
			quantidadePaginas: 120,
			autor: 'Philipe Surdo',
			editora: 'Phirow'
		},
		'Livro 3': {
			quantidadePaginas: 110,
			autor: 'Igor Thurow',
			editora: 'Phirow'
		}
	};
	return !par ? bookInfo : bookInfo[par]
}



/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
book()

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

'O livro Livro 1 tem ' + book('Livro 1').quantidadePaginas + ' páginas!'

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

'O autor do livro Livro 2 é ' + book('Livro 2').autor + '.'

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// 


'O livro Livro 2 foi publicado pela editora ' + book('Livro 2').editora + '.'