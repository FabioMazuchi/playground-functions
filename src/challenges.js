// Desafio 1
function compareTrue(par1, par2) {
  let resultado = '';

  if (par1 && par2) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let pos1 = array[0];
  let ultimaPos = array[array.length - 1];

  return ultimaPos + ', ' + pos1;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let cont = 0;
  let maior = array[0];

  for (let i = 0; i < array.length; i++) {
    if(array[i] > maior) {
      maior = array[i];
    }
  }

  for (let n = 0; n < array.length; n++) {
    if(array[n] == maior) {
      cont++;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado = '';
  let d1 = cat1 - mouse; //1 - 0 = 1
  let d2 = cat2 - mouse; //1-2 = -1 

  if(d1 < 0){
    d1 = d1 - d1 - d1;
  }

  if(d2 < 0){
    d2 = d2 - d2 - d2;
  }

  // console.log('d1:'+d1);
  // console.log('d2:'+d2);
  // console.log('mouse:'+mouse);
  // console.log('cat1:'+cat1);
  // console.log('cat2:'+cat2);
  
  if(d1 > d2) {
    resultado = 'cat2';
  }else if (d2 > d1) {
    resultado = 'cat1';
  }else if(d1 == d2){
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}

console.log(catAndMouse(1,0,2));

// Desafio 8
function fizzBuzz(numeros) {
  let resultado = [];
  let cont = 1;

for(let n of numeros){
    if(n % 5 == 0 && n % 3 == 0 && cont == 1) {
      cont++;  
      resultado.push('fizzBuzz');
    }else if (n % 3 == 0){
        resultado.push('fizz');
    }else if (n % 5 == 0){
        resultado.push('fizzBuzz');
    }else{
        resultado.push('bug!');
    }
  }
  return resultado;  
}

console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
