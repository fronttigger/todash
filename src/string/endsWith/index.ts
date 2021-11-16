// - [x] 파라미터가 비어있을 때
// value
// - [x] value만 있을 때 -> false
// target
// - [x] target만 있을 때 value의 마지막과 일치하는지 확인
// - [x] target과 position이 함께 있을 때 position 번째의 위치를 확인

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
