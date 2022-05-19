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
//FIM Botao codificar ou decodificar

//Inserindo campo de passos quando a opção Cifra de César for selecionada
var selectCode = document.getElementById('selectCode')
var steps = document.getElementById('steps')

selectCode.addEventListener('click', () => {

  if (selectCode.value == 'cesar') {
    steps.style.display = "flex";
    steps.classList.add('add')
  }else {
    steps.style.display = "none";
  }

})
//FIM Inserindo campo de passos quando a opção Cifra de César for selecionada

