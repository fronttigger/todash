enum HtmlEscape {
  '&' = '&amp;',
  '<' = '&lt;',
  '>' = '&gt;',
  '"' = '&quot;',
  "'" = '&#39;',
}

type HtmlEscapeValueType = typeof HtmlEscape[keyof typeof HtmlEscape];

const HTML_ESCAPE: { [key in string]: HtmlEscapeValueType } = {
  '&': HtmlEscape['&'],
  '<': HtmlEscape['<'],
  '>': HtmlEscape['>'],
  '"': HtmlEscape['"'],
  "'": HtmlEscape["'"],
};

function escape(value?: string): string {
  if (!value) {
    return '';
  }

  const valueArray = value.split('');

  for (const escape of Object.keys(HTML_ESCAPE)) {
    valueArray.forEach((char, index) => {
      if (char === escape) {
        valueArray[index] = HTML_ESCAPE[char];
      }
    });
  }

  return valueArray.join('');
}

export default escape;
