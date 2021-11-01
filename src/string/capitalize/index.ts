function capitalize(value?: string | number): string {
  if (!value) {
    return '';
  }

  if (typeof value === 'number') {
    return value.toString();
  }

  const stringToArray = value.split('');
  stringToArray[0] = value[0].toUpperCase();

  return stringToArray.join('');
}

export default capitalize;
