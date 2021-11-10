function _code(message, key) {
  var message_size = message.length;
  var key_size = key.length;

  var key_values = [];

  for (i = 0; i < key_size; i++) {
    key_values[i] = key[i].charCodeAt();
  }

  var coded_message = "";

  for (i = 0; i < message_size; i++) {
    var char_pos = message[i].charCodeAt();
    var ascii_value = (key_values[i % key_size] + char_pos) % ALPH_SIZE;
    coded_message += String.fromCharCode(ascii_value);
  }

  return coded_message;
}

function _decode(message, key) {
  var key_size = key.length;
  var message_size = message.length;

  var key_values = [];

  for (i = 0; i < key_size; i++) {
    key_values[i] = key[i].charCodeAt();
  }

  var decoded_message = "";

  for (i = 0; i < message_size; i++) {
    var char_pos = message[i].charCodeAt();
    var ascii_value = negMod(char_pos - key_values[i % key_size], ALPH_SIZE);
    decoded_message += String.fromCharCode(ascii_value);
  }

  return decoded_message;
}

function negMod(n1, n2) {
  var mod = n1;

  while (mod < 0) {
    mod += n2;
  }

  return mod;
}

const code = function () {
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

  let coded = _code(input, key);
  let decoded = _decode(coded, key);

  inputCipher.innerText = coded;
  inputUncipher.innerText = decoded;
};

const decode = function () {
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

  let decoded = _decode(input, key);

  inputCipher.innerText = input;
  inputUncipher.innerText = decoded;
};

const clean = function () {
  inputText.value = null;
  inputKey.value = null;

  errorInputText.innerText = null;
  errorInputKey.innerText = null;

  inputCipher.value = null;
  inputUncipher.value = null;
};

const inputKey = document.getElementById("inputKey");
const inputText = document.getElementById("inputText");
const inputCipher = document.getElementById("inputCipher");
const inputUncipher = document.getElementById("inputUncipher");
const errorInputText = document.getElementById("errorInputText");
const errorInputKey = document.getElementById("errorInputKey");

const ALPH_SIZE = 256;
