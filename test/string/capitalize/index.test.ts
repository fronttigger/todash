import capitalzie from '../../../src/string/capitalize';

describe('capitalzie', () => {
  it('빈 문자열을 넣었을 때는 빈 문자열이 반환된다.', () => {
    expect(capitalzie('')).toEqual('');
  });

  it('숫자를 넣었을 때는 문자열로 변환되어 반환된다.', () => {
    expect(capitalzie(123)).toEqual('123');
  });

  it('전체가 소문자인 단어는 첫 문자를 대문자로 변경되어 반환한다.', () => {
    expect(capitalzie('fred')).toEqual('Fred');
  });

  it('숫자를 첫 글자에 포함한 문자는 있는 그대로 반환된다.', () => {
    expect(capitalzie('1234fred')).toEqual('1234fred');
  });

  it('문자를 첫 글자에 포함한 혼합 문자는 첫 문자를 대문자로 변경되어 반환된다.', () => {
    expect(capitalzie('sdf@#@!12')).toEqual('Sdf@#@!12');
  });

  it('공백에 대해 따로 처리하지 않는다.', () => {
    expect(capitalzie('  hello')).toEqual('  hello');
  });
});
