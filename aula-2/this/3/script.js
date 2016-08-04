function alterarCorDeFundoDoElemento() {
  this.style.backgroundColor = bsWorkshop.getRandomColor();
}


function alterarTodos() {
  var elementos = document.getElementsByClassName('coluna'), i = 0, len = elementos.length;

  for (i; i < len; i++) {
    alterarCorDeFundoDoElemento.call(elementos[i]);
  }
}

document.getElementById('btn').addEventListener('click', function() {
  alterarTodos();
});