import upperFirst from '../../../src/string/upperFirst';

describe('upperFirst', () => {
  it('파라미터를 넘기지 않으면 빈 문자열이 반환된다.', () => {
    expect(upperFirst()).toEqual('');
  });

  it('전체를 소문자로 넘기면 첫 문자열이 대문자로 변환되어 반환된다.', () => {
    expect(upperFirst('fred')).toEqual('Fred');
  });

  it('전체를 대문자로 넘기면 그대로 반환된다.', () => {
    expect(upperFirst('FRED')).toEqual('FRED');
  });
});
