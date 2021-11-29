import toLower from '../../../src/string/toLower';

describe('toLower', () => {
  it('파라미터가 비어있을 때 빈 문자열이 반환된다.', () => {
    expect(toLower()).toEqual('');
  });
});
