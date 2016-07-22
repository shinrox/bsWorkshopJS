// Um problema comum do javascript, é quando tentamos acessar variáveis
// que nunca foram declaradas, isso faz com que um Erro ocorrá
// fazendo com que todo o resto do código não funcione
// para evitar este tipo de problema quando não temos nenhum controle 
// sobre o que uma determinada parte do nosso código irá receber
// é utilizado o `try{} catch(e) {}` para evitar que o resto do código não seja executado;

var a = 1;
bsWorkshop.log(b); // jogará um erro para o console, e impedirá a execução do resto do código

// nada a seguir será chamado
try {
  bsWorkshop.log(b);
} catch (e) {
  bsWorkshop.log('A variável "a" não foi definida.');
}

// comentando a linha `bsWorkshop.log(b)`  o try catch será executado, e por tratar o erro a chamada a seguir também será executada; 
bsWorkshop.log(a);
