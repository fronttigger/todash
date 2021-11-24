import lowerFirst from '../../../src/string/lowerFirst';

describe('lowerFirst', () => {
  it('파라미터를 넘기지 않으면 빈 문자열이 반환된다.', () => {
    expect(lowerFirst()).toEqual('');
  });

  it('첫 글자만 대문자로 넘기면 첫 글자가 소문자로 변환되어 반환된다.', () => {
    expect(lowerFirst('Fred')).toEqual('fred');
  });

  it('전체를 대문자로 넘기면 첫 번째 문자열이 소문자가 변환되어 반환된다.', () => {
    expect(lowerFirst('FRED')).toEqual('fRED');
  });
});
