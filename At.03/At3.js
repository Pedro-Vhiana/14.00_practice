//Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.


alert('Calcule sua circunferência!')
const diam = prompt('informe o diametro do circulo: ')
const raio = diam / 2
const perimetro = raio * 2
const area = (raio**2) * 3.14


alert('raio: ' + raio + '|' + ' perímetro: ' + perimetro + '|' + ' área: ' + area +'cm²'+ '|' + ' da circunferência.')