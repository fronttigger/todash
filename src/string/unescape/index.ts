enum HtmlEntityEscape {
  '&amp;' = '&',
  '&lt;' = '<',
  '&gt;' = '>',
  '&quot;' = '"',
  '&#39;' = "'",
}

type HtmlEntityEscapeValueType =
  typeof HtmlEntityEscape[keyof typeof HtmlEntityEscape];

const HTML_ENTITY_ESCAPE: { [key in string]: HtmlEntityEscapeValueType } = {
  '&amp;': HtmlEntityEscape['&amp;'],
  '&lt;': HtmlEntityEscape['&lt;'],
  '&gt;': HtmlEntityEscape['&gt;'],
  '&quot;': HtmlEntityEscape['&quot;'],
  '&#39;': HtmlEntityEscape['&#39;'],
};

function unescape(value: string = ''): string {
  let replaceValue = value;

  for (const unescape of Object.keys(HTML_ENTITY_ESCAPE)) {
    if (value.includes(unescape)) {
      replaceValue = replaceValue.replace(
        new RegExp(unescape, 'g'),
        HTML_ENTITY_ESCAPE[unescape],
      );
    }
  }

  return replaceValue;
}

export default unescape;
