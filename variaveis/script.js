//VARIÁVEIS
//Responsáveis por guardar dados na memória.

//Inicia com a palavra var, let ou const



//SINTAXE
//Palavra chave var seguida do nome, sinal de igual e o valor.
var nome = 'Jackson';
var idade = 33;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);


//EVITAM REPETIÇÕES
//DRY (Don't repeat yourself)

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco);


var sobrenome = 'Silva', 
    cidade = 'SP';

console.log(sobrenome, cidade);


//DECLARAR
//Erro ao tentar utilizar uma variável que não foi declarada.
console.log(nome);
// retorna nome is not defined

//Sem valor

var semDefinir;
console.log(semDefinir);

//HOISTING
//São movidas para cima do código, porém o valor atribuído não é movido.

console.log(nome);
var nome = 'Jackson';
// Retorna undefined

var profissao = 'Designer';
console.log(profissao);
// Retornar Designer

//MUDAR O VALOR ATRIBUÍDO
//É possível mudar os valores atribuídos a variáveis declaradas com var e let.
// Porém não é possível modificar valores das declaradas com const

var idade = 28;
idade = 29;

let preco = 50;
preco = 25;

const possuiFaculdade = true;
possuiFaculdade = false;
// Retorna um erro


// Declarar uma variável com o seu nome
var nome = 'Jackson';
console.log(nome);
// Declarar uma variável com a sua idade
var idade = '33';
// Declarar uma variável com a sua comida
// favorita e não atribuir valor
var hamburguer;
// Atribuir valor a sua comida favorita
hamburguer = 50;
// Declarar 5 variáveis diferentes sem valores
var sobrenome, 
    cidade,
    carro,
    estado,
    cachorro;