

#### algunsExercicios  
####
## Let, Var e Const
São diferentes tipos de variáveis que existem no JavaScript. Uma variável é um espaço na memória do computador que armazena um dado.  
Geralmente são declaradas nesse formato: `let a = 1` 
> **var** = é  a maneira mais antiga, possui escopo de função, ou seja, ela representará a mesma coisa em todo o escopo de uma função, independente dos blocos e pode ser declarada diversas vezes gerando muita confusão, além de ser inicializada no hoisting (move as declarações de variáveis para o topo do script). Atualmente a sua utilização não é mais recomendada.

> **let** = veio para substituir o `var`.  A variável `let` só vai existir dentro do escopo do bloco de código em que foi declarada (podendo ser declarada apenas uma vez). Além disso, esta não será inicializada no hoisting.
> 
> **const** = funciona da mesma forma que o `let` em relação à hoisting e escopo, mas o valor pode ser atribuído apenas na inicialização e não é alterado no decorrer do código. É ideal utilizar o `const` sempre que possível.

## Classes e Atributos
> **Classes** = é uma estrutura que descreve estados e comportamentos de um determinado objeto. O construtor é um método utilizado para criar e inicializar um objeto criado a partir de uma classe. 
> 
> **Atributos** = `.setAttribute('name', value);`
