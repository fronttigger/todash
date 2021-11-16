function split(
  value?: string,
  separator?: RegExp | string,
  limit?: number,
): string[] {
  if (!value) {
    return [''];
  }

  let array: string[] = [];

  if (separator && !limit) {
    array = value.split(separator);
  } else if (separator && limit) {
    array = value.split(separator).slice(0, limit);
  } else if (!separator && limit) {
    array = value.split('').slice(0, limit);
  } else if (!separator && !limit) {
    array = [value];
  }

  return array;
}

export default split;
