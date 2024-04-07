// 3. Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando
// pergunte para ele o salário que está ganhando. Para cada pessoa

// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000

let pessoas = [];
let continuarCadastro = true;

while (continuarCadastro) {
  let nome = prompt("Qual é o seu nome?");
  let idade = Number(prompt("Qual é a sua idade?"));
  let trabalho = confirm("Você está trabalhando?");

  let salario = 0;
  
  if (trabalho) {
    salario = Number(prompt("Qual é o seu salário?"));
  }

  let pessoa = {
    nome: nome,
    idade: idade,
    trabalho: trabalho,
    salario: salario,
  };

  pessoas.push(pessoa);

  continuarCadastro = confirm("Deseja continuar cadastrando?");
}

let desempregado = [];
let salarioMaior2500 = [];
let salarioMenor2500 = [];

for (let i = 0; i < pessoas.length; i++) {
  let pessoa = pessoas[i];
  if (!pessoa.trabalho) {
    desempregado.push(pessoa);
  } else if (pessoa.salario >= 2500) {
    salarioMaior2500.push(pessoa);
  } else {
    salarioMenor2500.push(pessoa);
  }
}

document.write(`Pessoas desempregadas: <br>`);
for (let i = 0; i < desempregado.length; i++) {
  let pessoa = desempregado[i];
  document.write(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade} <br>`);
}

document.write(`Pessoas empregadas com salários maiores ou iguais a 2500: <br>`);
for (let i = 0; i < salarioMaior2500.length; i++) {
  document.write(
    `Nome: ${salarioMaior2500[i].nome}, Idade: ${salarioMaior2500[i].idade}, Salário: ${salarioMaior2500[i].salario} <br> `);
}

document.write(`Pessoas empregadas com salários menores que 2500: <br>`);
for (let i = 0; i < salarioMenor2500.length; i++) {
  document.write(
    `Nome: ${salarioMenor2500[i].nome}, Idade: ${salarioMenor2500[i].idade}, Salário: ${salarioMenor2500[i].salario} <br> `);
}