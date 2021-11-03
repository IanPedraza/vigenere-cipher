function code(message, key) {
  var message_size = message.length;
  var key_size = key.length;

  var key_values = new Array();

  for (i = 0; i < key_size; i++) {
    key_values[i] = key[i].charCodeAt();
  }

  // Cifrar
  var coded_message = new Array();

  for (i = 0; i < message_size; i++) {
    var char_pos = message[i].charCodeAt();
    var ascii_value = (key_values[i % key_size] + char_pos) % ALPH_SIZE;

    // for (j = 0; j < ALPH_SIZE; j++) {
    //   if (message[i] == alphabet[j]) {
    //     char_pos = j;
    //   }
    // }

    // coded_message[i] =
    //   alphabet[(key_values[i % key_size] + char_pos) % ALPH_SIZE];

    coded_message[i] = String.fromCharCode(ascii_value);
  }

  var result = "";

  for (i = 0; i < message_size; i++) {
    result += coded_message[i];
  }

  return result;
}

function modNeg(n1, n2) {
  var mod = n1;

  while (mod < 0) {
    mod += n2;
  }

  return mod;
}

function decode(message, key) {
  var key_size = key.length;
  var message_size = message.length;

  // Guardar valores de la key
  var key_values = new Array();

  for (i = 0; i < key_size; i++) {
    key_values[i] = key[i].charCodeAt();
  }

  // Descifrar
  var decoded_message = new Array();

  for (i = 0; i < message_size; i++) {
    var char_pos = message[i].charCodeAt();
    var ascii_value = modNeg(char_pos - key_values[i % key_size], ALPH_SIZE);

    // for (j = 0; j < ALPH_SIZE; j++) {
    //   if (message[i] == alphabet[j]) {
    //     char_pos = j;
    //   }
    // }

    // decoded_message[i] =
    //   alphabet[modNeg(char_pos - key_values[i % key_size], ALPH_SIZE)];

    decoded_message[i] = String.fromCharCode(ascii_value);
  }

  var result = "";

  for (i = 0; i < message_size; i++) {
    result += decoded_message[i];
  }

  return result;
}

const cipher = function () {
  errorInputText.innerText = null;
  errorInputKey.innerText = null;

  let input = inputText.value;

  if (!input) {
    errorInputText.innerText = "El mensaje no puede quedar vacío.";
    return;
  }

  let key = inputKey.value;

  if (!key) {
    errorInputKey.innerText = "La clave no puede quedar vacía.";
    return;
  }

  let coded = code(input, key);
  let decoded = decode(coded, key);

  inputCipher.innerText = coded;
  inputUncipher.innerText = decoded;
};

const inputKey = document.getElementById("inputKey");
const inputText = document.getElementById("inputText");
const inputCipher = document.getElementById("inputCipher");
const inputUncipher = document.getElementById("inputUncipher");
const errorInputText = document.getElementById("errorInputText");
const errorInputKey = document.getElementById("errorInputKey");

const ALPH_SIZE = 256;

// const alphabet = new Array();

// for (i = 0; i < ALPH_SIZE; i++) {
//   alphabet[i] = String.fromCharCode(0 + i);
// }
