//Botao codificar ou decodificar
const btn = document.getElementById('btn')
const radiocode = document.getElementById('radiocode')
const radiodecode = document.getElementById('radiodecode')

radiocode.addEventListener('click', () => {
  btn.innerText = 'Codificar'
})

radiodecode.addEventListener('click', () => {
  btn.innerText = 'Decodificar'
})
//FIM Botao codificar ou decodificar

//Inserindo campo de passos quando a opção Cifra de César for selecionada
const selectCode = document.getElementById('selectCode')
const steps = document.getElementById('steps')

selectCode.addEventListener('click', () => {

  if(selectCode.value == 'cesar'){
    steps.style.display = "grid";
    steps.classList.add('add')
  }else {
    steps.style.display = "none";
  }

})
//FIM Inserindo campo de passos quando a opção Cifra de César for selecionada

const passos = document.getElementById('passos')
const message = document.getElementById('text')
const result = document.getElementById('result')

//Cifra de césar - codificar
const cifraDeCesar = (message, steps) => {
  let encode = '';
  let result;

  for(let i = 0; i < message.length; i++){
    if(message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90){
      result = (((message.charCodeAt(i) - 65) + steps) % 26) + 65;
    }else if(message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122){
      result = (((message.charCodeAt(i) - 97) + steps) % 26) + 97;
    }else if(message.charCodeAt(i) === 32){
      result = 32;
    }
    encode += String.fromCharCode(result);
  }
  return encode.toLowerCase();
}
//FIM Cifra de césar - codificar

//Cifra de césar - decodificar
const decifraDeCesar = (message, steps) => {
  let decode = '';
  let result;

  for(let i = 0; i < message.length; i++){
    if(message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90){
      result = (((message.charCodeAt(i) - 90) - steps) % 26) + 90;
    }else if(message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122){
      result = (((message.charCodeAt(i) - 122) - steps) % 26) + 122;
    }else if(message.charCodeAt(i) === 32){
      result = 32;
    }
    decode += String.fromCharCode(result);
  }
  return decode.toLowerCase();
}
//FIM Cifra de césar - decodificar

btn.addEventListener('click', (e) => {
  e.preventDefault()
    //Cifra de cesar.
    if(selectCode.value == 'cesar'){
      if(radiocode.checked == true){
        result.innerText = cifraDeCesar(message.value, Number(passos.value))
      }else if(radiodecode.checked == true){
        result.innerText = decifraDeCesar(message.value, Number(passos.value))
      }}
    //FIM Cifra de cesar
    //Base64.
    else if(selectCode.value == 'base64'){
      if(radiocode.checked == true){
        result.innerText = btoa(message.value)
      }else if(radiodecode.checked == true){
        result.innerText = atob(message.value)
      }}
    //FIM Base64
    else return alert(`Escolha uma codificação`)
  })