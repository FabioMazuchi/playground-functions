// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(array) {
  let digito = '';
  let group1 = '';
  let group2 = '';
  let cont = 0;
  let resultado;

  if (array.length !== 11) {
    resultado = 'Array com tamanho incorreto.';
  } else {
    for (let n = 0; n < array.length; n++) {
      if (array[n] < 0 || array[n] > 9) {
        resultado = 'não é possível gerar um número de telefone com esses valores';
        break;
      } else {
        for (let i = 0; i < array.length; i++) {
          if (array[i] < 0 || array[i] > 9) {
          } else if (array[n] == array[i]) {
            cont++;
          }
        }
        if (cont >= 3) {
          resultado = 'não é possível gerar um número de telefone com esses valores';
          break;
        } else {
          if (n < 2) {
            digito += array[n];
          } else if (n > 1 && n <= 6) {
            group1 += array[n];
          } else if (n > 6) {
            group2 += array[n];
          }
        }
        resultado = '(' + digito + ')' + ' ' + group1 + '-' + group2;
        cont = '';
      }
    }
  }
  return resultado;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
