import split from '../../../src/string/split';

describe('split', () => {
  it('파라미터에 아무 것도 넣지 않으면 빈 배열 내에 빈 문자열이 반환된다.', () => {
    expect(split()).toEqual(['']);
  });

  it('첫 번째 파라미터에 문자열을 넣으면 문자열을 포함한 배열이 반환된다.', () => {
    expect(split('a-b-c')).toEqual(['a-b-c']);
  });

  it('두 번째 파라미터에 정규표현식을 넣으면 정규표현식을 적용한 배열이 반환된다.', () => {
    expect(split('a-b-c', /-/g)).toEqual(['a', 'b', 'c']);
  });

  it('두 번째 파라미터에 문자열을 넣으면 문자열을 적용한 배열이 반환된다.', () => {
    expect(split('a-b-c', '-')).toEqual(['a', 'b', 'c']);
  });

  it('세 번째 파라미터에 숫자를 넣으면 배열의 처음부터 숫자까지의 배열을 반환한다.', () => {
    expect(split('a-b-c', '-', 2)).toEqual(['a', 'b']);
  });

  it('세 번째 파라미터는 있고 두 번째 파라미터를 넘기지 않으면 문자열의 배열을 숫자까지 반환한다.', () => {
    expect(split('a-b-c', null, 2)).toEqual(['a', '-']);
  });
});
