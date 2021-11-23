function repeat(value: string = '', n: number = 1): string {
  if (!n) {
    return '';
  }

  let repeatValue: string = '';

  for (let i = 0; i < n; i += 1) {
    repeatValue += value;
  }

  return repeatValue;
}

export default repeat;
