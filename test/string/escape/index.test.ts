import escape from '../../../src/string/escape';

describe('escape', () => {
  it('파라미터를 넘기지 않으면 빈 문자열이 반환된다.', () => {
    expect(escape()).toEqual('');
  });

  it(`&, <, >, ", ' 기호가 있으면 HTML 엔티티로 변환하여 문자열을 반환한다.`, () => {
    expect(escape('fred,< "" barney, & pebbles')).toEqual(
      'fred,&lt; &quot;&quot; barney, &amp; pebbles',
    );
  });
});
