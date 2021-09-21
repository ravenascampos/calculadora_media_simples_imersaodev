function calcularMedia() {
  let nota1 = parseFloat(document.getElementById("nota1").value);
  let nota2 = parseFloat(document.getElementById("nota2").value);
  let nota3 = parseFloat(document.getElementById("nota3").value);
  let nota4 = parseFloat(document.getElementById("nota4").value);
  let media = (nota1 + nota2 + nota3 + nota4) / 4;
  let resultado = document.getElementById("resultado");
  let imagem = document.getElementById("imagem");

  if (
    nota1 < 0 ||
    nota1 > 10 ||
    nota2 < 0 ||
    nota2 > 10 ||
    nota3 < 0 ||
    nota3 > 10 ||
    nota4 < 0 ||
    nota4 > 10
  ) {
    resultado.innerHTML =
      "Não foi possível calcular a média. Insira notas válidas";
    imagem.src =
      "https://pa1.narvii.com/6422/77003bc0022f9ed8c26632877f5b70671ad25d21_hq.gif";
  } else if (media < 6.0) {
    resultado.innerHTML = `Sua média é ${media.toFixed(1)}. Precisa melhorar!`;
    imagem.src =
      "https://i.pinimg.com/originals/6b/ac/ec/6bacec9df98d62ecef5472c863bdf452.gif";
  } else if (media >= 6.0 && media < 8.0) {
    resultado.innerHTML = `Sua média é ${media.toFixed(1)}. Parabéns!!`;
    imagem.src = "https://c.tenor.com/_86Uo0W7q34AAAAd/luffy-one-piece.gif";
  } else if (media >= 8.0 && media <= 10.0) {
    imagem.src =
      "https://pa1.narvii.com/6598/01bdde5d29b280102ba2d268032377195bd4c67f_hq.gif";
    resultado.innerHTML = `Sua média é ${media.toFixed(1)}. INCRÍVEL!!!`;
  } else {
    resultado.innerHTML = `erro`;
  }
}

function limpar() {
  let nota1 = (document.getElementById("nota1").value = null);
  let nota2 = (document.getElementById("nota2").value = null);
  let nota3 = (document.getElementById("nota3").value = null);
  let nota4 = (document.getElementById("nota4").value = null);
  let resultado = document.getElementById("resultado");
  let imagem = document.getElementById("imagem");

  if (nota1 == null && nota2 == null && nota3 == null && nota4 == null) {
    resultado.innerHTML = null;
    imagem.src = "";
  }
}
