function endsWith(
  value: string = '',
  target?: string,
  position: number = value.length,
): boolean {
  if (!value || !target) {
    return false;
  }

  return value[position - 1] === target;
}

export default endsWith;
