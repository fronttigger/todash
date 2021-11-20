import startsWith from '../../../src/string/startsWith';

describe('startsWith', () => {
  it('파라미터가 비어있을 때 false가 반환된다.', () => {
    expect(startsWith()).toEqual(false);
  });

  it('첫 번쨰 문자열 값만 넣었을 때 false를 반환된다.', () => {
    expect(startsWith('abc')).toEqual(false);
  });

  it('찾아낼 문자열을 입력하면 첫 문자와 비교한 값을 반환한다.', () => {
    expect(startsWith('abc', 'a')).toEqual(true);
  });

  it('찾아낼 문자열의 위치를 입력하면 입력한 위치의 문자열과 비교한 값을 반환한다.', () => {
    expect(startsWith('abc', 'b', 2)).toEqual(true);
  });
});
