function split(
  value?: string,
  separator?: RegExp | string,
  limit?: number,
): string[] {
  if (!value) {
    return [''];
  }

  let array: string[] = [];

  // 1. separator
  // - [x] limit가 없을 수 있다.
  // - [x] limit가 있을 수 있다.
  // 2. limit가 있냐 없냐
  // - [ ] separator와 함께 있다.
  // - [ ] limit가 있어도 separator는 없을 수 있다.

  if (separator && !limit) {
    array = value.split(separator);
  } else if (separator && limit) {
    array = value.split(separator).slice(0, limit);
  } else if (!separator && !limit) {
    array = [value];
  }

  return array;
}

export default split;
