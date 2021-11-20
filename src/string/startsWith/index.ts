function startsWith(
  value: string = '',
  target?: string,
  position: number = 0,
): boolean {
  if (!value || !target) {
    return false;
  }

  return value[!!position ? position - 1 : position] === target;
}

export default startsWith;
