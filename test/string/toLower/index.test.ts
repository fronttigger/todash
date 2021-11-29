import toLower from '../../../src/string/toLower';

describe('toLower', () => {
  it('파라미터가 비어있을 때 빈 문자열이 반환된다.', () => {
    expect(toLower()).toEqual('');
  });

  it('알파벳이 아닌 값과 함께 입력하면 알파벳만 소문자로 바꾸어 반환된다.', () => {
    expect(toLower('--Foo-Bar--')).toEqual('--foo-bar--');
  });

  it('알파벳이 아닌 값과 함께 입력하면 알파벳만 소문자로 바꾸어 반환된다.', () => {
    expect(toLower('__FOO_BAR__')).toEqual('__foo_bar__');
  });

  it('소문자만 입력할 시 동일한 문자열이 반환된다.', () => {
    expect(toLower('foobar')).toEqual('foobar');
  });
});
