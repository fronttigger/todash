function lowerFirst(value: string = ''): string {
  if (!value) {
    return '';
  }

  const stringArray = value.split('');
  stringArray[0] = stringArray[0].toLowerCase();

  return stringArray.join('');
}

export default lowerFirst;
