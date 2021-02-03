function validateByName(name) {
  if (name.length >= 2 && name.length <= 15) {
    for (let i = 0; i < name.length; i += 1) {
      const invalidSymbols = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '<',
        '?',
        '>',
        '/',
        '+',
        '.',
        '*',
        '"',
        '~',
        '=',
        ':',
        ';',
        '_',
        ')',
        '(',
        '$',
        '#',
        '№',
      ];
      for (let g = 0; g < invalidSymbols.length; g += 1) {
        if (name[i] === invalidSymbols[g]) {
          return 'error';
        }
      }
    }
    return 'ok';
  }
  return 'error';
}

function validation(profile) {
  const isFirstNameValid = validateByName(profile.firstName);
  const isLastNameValid = validateByName(profile.lastName);

  if (isFirstNameValid === 'ok' && isLastNameValid === 'ok') {
    return 'ok';
  }
  return 'error';
}

module.exports = validation;
