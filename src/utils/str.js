export function encurtarTexto(text, size) {
  if (
    text == undefined ||
    text == 'undefined' ||
    text == '' ||
    size == undefined ||
    size == 'undefined' ||
    size == ''
  ) {
    return text;
  }

  var shortText = text;
  if (text.length >= size + 3) {
    shortText = text.substring(0, size).concat('...');
  }
  return shortText;
}
