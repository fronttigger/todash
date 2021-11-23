function upperFirst(value: string = ''): string {
  if (!value) {
    return '';
  }

  const stringArray = value.split('');
  stringArray[0] = stringArray[0].toUpperCase();

  return stringArray.join('');
}

export default upperFirst;
