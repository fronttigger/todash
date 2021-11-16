function endsWith(value?: string, target?: string, position?: number): boolean {
  if (
    !value ||
    (value && !target && !position) ||
    (value && !target && position)
  ) {
    return false;
  }

  if (target) {
    return !!position
      ? value[position - 1] === target
      : value[value.length - 1] === target;
  }

  return false;
}

export default endsWith;
