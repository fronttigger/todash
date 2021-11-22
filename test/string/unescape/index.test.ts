import unescape from '../../../src/string/unescape';

describe('unescape', () => {
  it('파라미터를 넘기지 않으면 빈 문자열이 반환된다.', () => {
    expect(unescape()).toEqual('');
  });

  it(`HTML 엔티티가 있으면 &, <, >, ", ' 기호로 변환하여 문자열을 반환한다.`, () => {
    expect(unescape('fred,&lt; &quot;&quot; barney, &amp; pebbles')).toEqual(
      'fred,< "" barney, & pebbles',
    );
  });
});
