import endsWith from '../../../src/string/endsWith';

describe('endsWith', () => {
  it('파라미터가 비어있을 때 false가 반환된다.', () => {
    expect(endsWith()).toEqual(false);
  });

  it('첫 번쨰 문자열 값만 넣었을 때 false를 반환된다.', () => {
    expect(endsWith('abc')).toEqual(false);
  });

  it('찾아낼 문자열을 입력하면 마지막 문자와 비교한 값을 반환한다.', () => {
    expect(endsWith('abc', 'c')).toEqual(true);
  });

  it('찾아낼 문자열의 위치를 입력하면 입력한 위치의 문자열과 비교한 값을 반환한다.', () => {
    expect(endsWith('abc', 'b', 2)).toEqual(true);
  });
});
