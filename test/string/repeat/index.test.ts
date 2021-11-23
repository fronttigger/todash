import repeat from '../../../src/string/repeat';

describe('repeat', () => {
  it('빈 파라미터를 넘길시 빈 문자열을 반환한다.', () => {
    expect(repeat()).toEqual('');
  });

  it('문자열과 반복할 횟수를 넘기면 문자열을 반복 횟수만큼 추가한 문자열을 반환한다.', () => {
    expect(repeat('*', 3)).toEqual('***');
    expect(repeat('abc', 2)).toEqual('abcabc');
  });

  it('0번 반복시 빈 문자열이 반환된다.', () => {
    expect(repeat('abc', 0)).toEqual('');
  });
});
