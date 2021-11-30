import toUpper from '../../../src/string/toUpper';

describe('toUpper', () => {
  it('파라미터가 비어있을 때 빈 문자열이 반환된다.', () => {
    expect(toUpper()).toEqual('');
  });

  it('알파벳이 아닌 값과 함께 입력하면 알파벳만 소문자로 바꾸어 반환된다.', () => {
    expect(toUpper('--foo-bar--')).toEqual('--FOO-BAR--');
  });

  it('알파벳이 아닌 값과 함께 소문자만 입력하면 알파벳만 대문자로 바꾸어 반환된다.', () => {
    expect(toUpper('__foo_bar__')).toEqual('__FOO_BAR__');
  });

  it('소문자와 대문자를 함께 입력하면 소문자만 대문자로 변경되어 문자열이 반환된다.', () => {
    expect(toUpper('fooBar')).toEqual('FOOBAR');
  });
});
