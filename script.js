function criptografar() {
  acao();
}

const inserirTexto = document.getElementById("input-texto");
const btnCriptografar = document.getElementById("btn-criptografar");
const btnDescriptografar = document.getElementById("btn-descriptografar");
const inputTexto = document.getElementById("btn-copy");
const copiarTexto = document.getElementById("copiar-text");

document.addEventListener("click", function (event) {
  
  event.preventDefault();
  let button = event.target.value;

  if (button == "CRIPTOGRAFAR") {
    criptografador();
    
  } else if (button == "DESCRIPTOGRAFAR") {
    descriptografar();
  } else if (button == "COPIAR") {
    copiar();
  }
  ;
});

function criptografador() {
 
  let valorTexto = inserirTexto.value;
  let resultado = valorTexto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  copiarTexto.value = resultado;
  
  
}

function descriptografar() {
  let textoValor = inserirTexto.value;
  let resultado = textoValor
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  copiarTexto.value = resultado;
}

function copiar() {
  var content = copiarTexto.value;

  if (content != "") {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        alert("Copiado");
      })
      .catch((erro) => {
        alert("regra invalida");
      });
  } else {
  }
}
footer {
  width: 100%;
  height: 80px;
  background: rgb(0, 238, 255);
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 20px;
}
