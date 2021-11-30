import { LOWERCASE_ALPHABET_REGEX } from '../../shared/constants/regex';

function toUpper(value: string = ''): string {
  if (!value) {
    return '';
  }

  const toUpperedValueArray: string[] = [];
  const valueArray = value.split('');

  valueArray.forEach((value) => {
    if (LOWERCASE_ALPHABET_REGEX.test(value)) {
      toUpperedValueArray.push(value.toUpperCase());
    } else {
      toUpperedValueArray.push(value);
    }
  });

  return toUpperedValueArray.join('');
}

export default toUpper;
