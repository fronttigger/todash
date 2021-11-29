import {
  ALL_ALPHABET_REGEX,
  LOWERCASE_ALPHABET_REGEX,
} from '../../shared/constants/regex';

function toLower(value: string = ''): string {
  if (!value) {
    return '';
  }

  const toLoweredValueArray: string[] = [];
  const valueArray = value.split('');

  valueArray.forEach((value) => {
    if (
      ALL_ALPHABET_REGEX.test(value) &&
      !LOWERCASE_ALPHABET_REGEX.test(value)
    ) {
      toLoweredValueArray.push(value.toLowerCase());
    } else {
      toLoweredValueArray.push(value);
    }
  });

  return toLoweredValueArray.join('');
}

export default toLower;
