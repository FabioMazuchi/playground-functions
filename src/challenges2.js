// Desafio 10
function techList(array, nome) {
  array = array.sort();

  if (array.length !== 0) {
    return array.map((el) => ({
      tech: el,
      name: nome,
    }));
  }
  return 'Vazio!';
}

const templatePhone = (array) => {
  let string = '(';
  array.forEach((n, i) => {
    if (i < 2) {
      string += n;
    } else if (i < 3) {
      string += `) ${n}`;
    } else if (i < 7) {
      string += n;
    } else if (i < 8) {
      string += `-${n}`;
    } else {
      string += n;
    }
  });
  return string;
};

const checkMenorZero = (array) => array.some((n) => n < 0 || n > 9);

const checkRepeat = (array) => {
  const newArray = array.map((n) => n.toString());

  const res = newArray.reduce((acc, atual) => {
    acc[atual] = (acc[atual] || 0) + 1;
    return acc;
  }, {});
  return Object.values(res).some((num) => num >= 3);
};

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  } if (checkMenorZero(array) || checkRepeat(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return templatePhone(array);
}

// Desafio 12
function triangleCheck(a, b, c) {
  abs_b_c = Math.abs(b - c);
  abs_a_c = Math.abs(a - c);
  abs_a_b = Math.abs(a - b);

  if (
    (abs_b_c < a && a >= b + c) ||
    (abs_a_c < b && b >= a + c) ||
    (abs_a_b < c && c >= a + c)
  ) {
    resultado = false;
  } else {
    resultado = true;
  }
  return resultado;
}

// Desafio 13
function hydrate(string) {
  let soma = 0;
  let resultado = '';

  for (let s of string) {
    if (
      s === '1' ||
      s === '2' ||
      s === '3' ||
      s === '4' ||
      s === '5' ||
      s === '6' ||
      s === '7' ||
      s === '8' ||
      s === '9'
    ) {
      soma += Number(s);
    }
  }
  if (soma > 1) {
    resultado = `${soma} copos de água`;
  } else {
    resultado = `${soma} copo de água`;
  }
  return resultado;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
