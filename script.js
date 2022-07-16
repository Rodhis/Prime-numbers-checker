function verificarPrimo() {
  let num = Number(document.getElementById('txtnum').value)
  let divisoes = 0
  if (num <= 1 || num.length == 0){
    alert('Insira um número maior ou igual a 2! Definição de números primos!')
  } else {
    for (let n = 1; n <= num; n++) { 
        if (num % n == 0) { 
           divisoes++
        }
    }
    if (divisoes == 2) { 
       res.innerHTML = `<p>O número ${num} é primo!</p>`
   } else {
       res.innerHTML = `<p>O número ${num} não é primo!</p>`
    }
  }
}