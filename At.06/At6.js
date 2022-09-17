//Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.


alert('Calcule seu Quociente!')
const n1 = Number(prompt('Informe um numero: '))
const n2 = Number(prompt('Informe outro numero: '))
const rest = (n1 % n2)
const quo = n1 / n2



alert('Seu quociente é: ' + quo + ' e o resto é: '+ rest )