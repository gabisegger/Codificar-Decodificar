//Botao codificar ou decodificar
var btn = document.getElementById('btn')
var radiocode = document.getElementById('radiocode')
var radiodecode = document.getElementById('radiodecode')

radiocode.addEventListener('click', () => {
  btn.innerText = 'Codificar'
})

radiodecode.addEventListener('click', () => {
  btn.innerText = 'Decodificar'
})

