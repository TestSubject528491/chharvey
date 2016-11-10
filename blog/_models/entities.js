var groups = [
  'Text Delimiters'
, 'Quotation Marks'
, 'Slashes'
, 'Accents'
, 'Miscellaneous Text Symbols'
, 'Arrows'
, 'Miscellaneous Technical Symbols'
, 'Mathematical Delimiters'
, 'Binary Relations — Logic'
, 'Binary Relations — Set Theory'
, 'Binary Relations — Arithmetic'
, 'Binary Relations — Geometry'
, 'Functions'
, 'Miscellaneous Mathematical Symbols'
, 'Greek Letters'
]
var entities = [
  //-########################-//
  //- template -//
  //-########################-//
  {
    name   : 'null'
  , unicode: '0000'
  , html   : ''
  , latex  : ''
  , mac    : ''
  , comment: ''
  , group  : ''
  }
  //-########################-//
  //- Text Delimiters -//
  //-########################-//
, {
    name   : 'apostrophe'
  , unicode: '0027'
  , html   : '&apos;'
  , mac    : '\''
  , comment: '<code>&amp;apos;</code> only in XML'
  , group  : 'Text Delimiters'
  }
, {
    name   : 'quotation mark'
  , unicode: '0022'
  , html   : '&quot;'
  , mac    : 'shift \''
  , group  : 'Text Delimiters'
  }
, {
    name   : 'left parenthesis'
  , unicode: '0028'
  , mac    : 'shift 9'
  , group  : 'Text Delimiters'
  }
, {
    name   : 'right parenthesis'
  , unicode: '0029'
  , mac    : 'shift 0'
  , group  : 'Text Delimiters'
  }
, {
    name   : 'left square bracket'
  , unicode: '005b'
  , mac    : '['
  , group  : 'Text Delimiters'
  }
, {
    name   : 'right square bracket'
  , unicode: '005d'
  , mac    : ']'
  , group  : 'Text Delimiters'
  }
, {
    name   : 'left curly bracket'
  , unicode: '007b'
  , mac    : 'shift ['
  , group  : 'Text Delimiters'
  }
, {
    name   : 'right curly bracket'
  , unicode: '007d'
  , mac    : 'shift ]'
  , group  : 'Text Delimiters'
  }
, {
    name   : 'left-pointing angle bracket'
  , unicode: '2329'
  , html   : '&lang;'
  , comment: 'see U+003c for HTML delimiter'
  , group  : 'Text Delimiters'
  }
, {
    name   : 'right-pointing angle bracket'
  , unicode: '232a'
  , html   : '&rang;'
  , comment: 'see U+003e for HTML delimiter'
  , group  : 'Text Delimiters'
  }
  //-########################-//
  //- Quotation Marks -//
  //-########################-//
, {
    name   : 'left single quotation mark'
  , unicode: '2018'
  , html   : '&lsquo;'
  , mac    : 'option ]'
  , group  : 'Quotation Marks'
  }
, {
    name   : 'right single quotation mark'
  , unicode: '2019'
  , html   : '&rsquo;'
  , mac    : 'option shift ]'
  , group  : 'Quotation Marks'
  }
, {
    name   : 'left double quotation mark'
  , unicode: '201c'
  , html   : '&ldquo;'
  , mac    : 'option ['
  , group  : 'Quotation Marks'
  }
, {
    name   : 'right double quotation mark'
  , unicode: '201d'
  , html   : '&rdquo;'
  , mac    : 'option shift ['
  , group  : 'Quotation Marks'
  }
, {
    name   : 'single left-pointing angle quotation mark'
  , unicode: '2039'
  , html   : '&lsaquo;'
  , mac    : 'option shift 3'
  , comment: 'single guillemet'
  , group  : 'Quotation Marks'
  }
, {
    name   : 'single right-pointing angle quotation mark'
  , unicode: '203a'
  , html   : '&rsaquo;'
  , mac    : 'option shift 4'
  , comment: 'single guillemet'
  , group  : 'Quotation Marks'
  }
, {
    name   : 'left-pointing double angle quotation mark'
  , unicode: '00ab'
  , html   : '&laquo;'
  , mac    : 'option \\'
  , comment: 'guillemet'
  , group  : 'Quotation Marks'
  }
, {
    name   : 'right-pointing double angle quotation mark'
  , unicode: '00bb'
  , html   : '&raquo;'
  , mac    : 'option shift \\'
  , comment: 'guillemet'
  , group  : 'Quotation Marks'
  }
  //-########################-//
  //- Slashes -//
  //-########################-//
, {
    name   : 'solidus'
  , unicode: '002f'
  , mac    : '/'
  , group  : 'Slashes'
  }
, {
    name   : 'reverse solidus'
  , unicode: '005c'
  , mac    : '\\'
  , group  : 'Slashes'
  }
, {
    name   : 'fraction slash'
  , unicode: '2044'
  , html   : '&frasl;'
  , mac    : 'option shift 1'
  , group  : 'Slashes'
  }
, {
    name   : 'division slash'
  , unicode: '2215'
  , group  : 'Slashes'
  }
  //-########################-//
  //- Accents -//
  //-########################-//
, {
    name   : 'cirumflex accent'
  , unicode: '005e'
  , mac    : 'shift 6'
  , group  : 'Accents'
  }
, {
    name   : 'grave accent'
  , unicode: '0060'
  , mac    : '`'
  , comment: '<kbd>option `</kbd> if over a glyph'
  , group  : 'Accents'
  }
, {
    name   : 'acute accent'
  , unicode: '00b4'
  , mac    : 'option e'
  , group  : 'Accents'
  }
  //-########################-//
  //- Miscellaneous Text Symbols -//
  //-########################-//
, {
    name   : 'space'
  , unicode: '0020'
  , mac    : 'spacebar'
  , comment: 'character not shown (not parsed in HTML)'
  , group  : 'Miscellaneous Text Symbols'
  , is_annotated: true
  }
, {
    name   : 'no-break space'
  , unicode: '00a0'
  , html   : '&nbsp;'
  , mac    : 'option spacebar'
  , comment: 'character annotated to show width'
  , group  : 'Miscellaneous Text Symbols'
  , is_annotated: true
  }
, {
    name   : 'en space'
  , unicode: '2002'
  , html   : '&ensp;'
  , mac    : 'option spacebar'
  , comment: 'character annotated to show width'
  , group  : 'Miscellaneous Text Symbols'
  , is_annotated: true
  }
, {
    name   : 'em space'
  , unicode: '2003'
  , html   : '&emsp;'
  , mac    : 'option spacebar'
  , comment: 'character annotated to show width'
  , group  : 'Miscellaneous Text Symbols'
  , is_annotated: true
  }
, {
    name   : 'en dash'
  , unicode: '2013'
  , html   : '&ndash;'
  , mac    : 'option -'
  , group  : 'Miscellaneous Text Symbols'
  }
, {
    name   : 'em dash'
  , unicode: '2014'
  , html   : '&mdash;'
  , mac    : 'option shift -'
  , group  : 'Miscellaneous Text Symbols'
  }
, {
    name   : 'modifier letter apostrophe'
  , unicode: '02bc'
  , comment: 'it has been suggested this replace U+2019 for contraction apostrophes'
  , group  : 'Miscellaneous Text Symbols'
  }
, {
    name   : 'asterisk'
  , unicode: '002a'
  , mac    : 'shift 8'
  , group  : 'Miscellaneous Text Symbols'
  }
, {
    name   : 'ampersand'
  , unicode: '0026'
  , html   : '&amp;'
  , latex  : '\\And'
  , mac    : 'shift 7'
  , group  : 'Miscellaneous Text Symbols'
  }
, {
    name   : 'horizontal ellipsis'
  , unicode: '2026'
  , html   : '&hellip;'
  , latex  : '\\dots'
  , mac    : 'option ;'
  , group  : 'Miscellaneous Text Symbols'
  }
, {
    name   : 'bullet'
  , unicode: '2022'
  , html   : '&bull;'
  , mac    : 'option 8'
  , group  : 'Miscellaneous Text Symbols'
  }
, {
    name   : 'black small square'
  , unicode: '25aa'
  , group  : 'Miscellaneous Text Symbols'
  }
, {
    name   : 'section sign'
  , unicode: '00a7'
  , html   : '&sect;'
  , mac    : 'option 6'
  , group  : 'Miscellaneous Text Symbols'
  }
, {
    name   : 'pillcrow sign'
  , unicode: '00b6'
  , html   : '&para;'
  , mac    : 'option 7'
  , comment: 'paragraph'
  , group  : 'Miscellaneous Text Symbols'
  }
, {
    name   : 'copyright sign'
  , unicode: '00a9'
  , html   : '&copy;'
  , mac    : 'option g'
  , group  : 'Miscellaneous Text Symbols'
  }
, {
    name   : 'registered sign'
  , unicode: '00ae'
  , html   : '&reg;'
  , mac    : 'option r'
  , group  : 'Miscellaneous Text Symbols'
  }
, {
    name   : 'trade mark sign'
  , unicode: '2122'
  , html   : '&trade;'
  , mac    : 'option 2'
  , group  : 'Miscellaneous Text Symbols'
  }
, {
    name   : 'ditto mark'
  , unicode: '3003'
  , group  : 'Miscellaneous Text Symbols'
  }
  //-########################-//
  //- Arrows -//
  //-########################-//
, {
    name   : 'leftwards arrow'
  , unicode: '2190'
  , html   : '&larr;'
  , latex  : '\\leftarrow'
  , group  : 'Arrows'
  }
, {
    name   : 'rightwards arrow'
  , unicode: '2192'
  , html   : '&rarr;'
  , latex  : '\\rightarrow or \\to'
  , comment: 'approaches'
  , group  : 'Arrows'
  }
, {
    name   : 'left right arrow'
  , unicode: '2194'
  , html   : '&harr;'
  , latex  : '\\leftrightarrow'
  , group  : 'Arrows'
  }
, {
    name   : 'upwards arrow'
  , unicode: '2191'
  , html   : '&uarr;'
  , latex  : '\\uparrow'
  , group  : 'Arrows'
  }
, {
    name   : 'downwards arrow'
  , unicode: '2193'
  , html   : '&darr;'
  , latex  : '\\downarrow'
  , group  : 'Arrows'
  }
, {
    name   : 'up down arrow'
  , unicode: '2195'
  , latex  : '\\updownarrow'
  , group  : 'Arrows'
  }
, {
    name   : 'leftwards double arrow'
  , unicode: '21d0'
  , html   : '&lArr;'
  , latex  : '\\Leftarrow or \\impliedby'
  , group  : 'Arrows'
  }
, {
    name   : 'rightwards double arrow'
  , unicode: '21d2'
  , html   : '&rArr;'
  , latex  : '\\Rightarrow or \\implies'
  , comment: 'material implication'
  , group  : 'Arrows'
  }
, {
    name   : 'left right double arrow'
  , unicode: '21d4'
  , html   : '&hArr;'
  , latex  : '\\Leftrightarrow or \\iff'
  , comment: 'material equivalence'
  , group  : 'Arrows'
  }
, {
    name   : 'upwards double arrow'
  , unicode: '21d1'
  , html   : '&uArr;'
  , latex  : '\\Uparrow'
  , comment: 'alternative denial'
  , group  : 'Arrows'
  }
, {
    name   : 'downwards double arrow'
  , unicode: '21d3'
  , html   : '&dArr;'
  , latex  : '\\Downarrow'
  , comment: 'joint denial'
  , group  : 'Arrows'
  }
, {
    name   : 'up down double arrow'
  , unicode: '21d5'
  , latex  : '\\Updownarrow'
  , group  : 'Arrows'
  }
, {
    name   : 'rightwards arrow from bar'
  , unicode: '21a6'
  , latex  : '\\mapsto'
  , comment: 'function'
  , group  : 'Arrows'
  }
, {
    name   : 'rightwards two headed arrow'
  , unicode: '21a0'
  , comment: 'injection'
  , group  : 'Arrows'
  }
, {
    name   : 'rightwards arrow with tail'
  , unicode: '21a3'
  , comment: 'surjection'
  , group  : 'Arrows'
  }
, {
    name   : 'left right arrow with vertical stroke'
  , unicode: '21f9'
  , comment: 'bijection'
  , group  : 'Arrows'
  }
  //-########################-//
  //- Miscellaneous Technical Symbols -//
  //-########################-//
, {
    name   : 'place of interest sign'
  , unicode: '2318'
  , mac    : 'command'
  , group  : 'Miscellaneous Technical Symbols'
  }
, {
    name   : 'option key'
  , unicode: '2325'
  , mac    : 'option'
  , group  : 'Miscellaneous Technical Symbols'
  }
, {
    name   : 'up arrowhead'
  , unicode: '2303'
  , mac    : 'control'
  , comment: 'control key (Mac)'
  , group  : 'Miscellaneous Technical Symbols'
  }
  //-########################-//
  //- Mathematical Delimiters -//
  //-########################-//
, {
    name   : 'mathematical left angle bracket'
  , unicode: '27e8'
  , latex  : '\\langle'
  , comment: 'bra'
  , group  : 'Mathematical Delimiters'
  }
, {
    name   : 'mathematical right angle bracket'
  , unicode: '27e9'
  , latex  : '\\rangle'
  , comment: 'ket'
  , group  : 'Mathematical Delimiters'
  }
, {
    name   : 'mathematical left double angle bracket'
  , unicode: '27ea'
  , group  : 'Mathematical Delimiters'
  }
, {
    name   : 'mathematical right double angle bracket'
  , unicode: '27eb'
  , group  : 'Mathematical Delimiters'
  }
, {
    name   : 'left ceiling'
  , unicode: '2308'
  , html   : '&lceil;'
  , latex  : '\\lceil'
  , group  : 'Mathematical Delimiters'
  }
, {
    name   : 'right ceiling'
  , unicode: '2309'
  , html   : '&rceil;'
  , latex  : '\\rceil'
  , group  : 'Mathematical Delimiters'
  }
, {
    name   : 'left floor'
  , unicode: '230a'
  , html   : '&lfloor;'
  , latex  : '\\lfloor'
  , group  : 'Mathematical Delimiters'
  }
, {
    name   : 'right floor'
  , unicode: '230b'
  , html   : '&rfloor;'
  , latex  : '\\rfloor'
  , group  : 'Mathematical Delimiters'
  }
  //-########################-//
  //- Binary Relations — Logic -//
  //-########################-//
, {
    name   : 'logical or'
  , unicode: '2228'
  , html   : '&or;'
  , latex  : '\\lor'
  , comment: 'disjunction'
  , group  : 'Binary Relations — Logic'
  }
, {
    name   : 'logical and'
  , unicode: '2227'
  , html   : '&and;'
  , latex  : '\\land'
  , comment: 'conjunction'
  , group  : 'Binary Relations — Logic'
  }
, {
    name   : 'right tack'
  , unicode: '22a2'
  , latex  : '\\vdash'
  , comment: 'forward syntactic consequence'
  , group  : 'Binary Relations — Logic'
  }
, {
    name   : 'left tack'
  , unicode: '22a3'
  , latex  : '\\dashv'
  , comment: 'backward syntactic consequence'
  , group  : 'Binary Relations — Logic'
  }
, {
    name   : 'left and right tack'
  , unicode: '27db'
  , comment: 'logical equivalence; <code>\\dashv\\vdash</code>'
  , group  : 'Binary Relations — Logic'
  }
, {
    name   : 'models'
  , unicode: '22a7'
  , comment: 'forward semantic consequence (1)'
  , group  : 'Binary Relations — Logic'
  }
, {
    name   : 'true'
  , unicode: '22a8'
  , latex  : '\\models or \\vDash'
  , comment: 'forward semantic consequence (2)'
  , group  : 'Binary Relations — Logic'
  }
  //-########################-//
  //- Binary Relations — Set Theory -//
  //-########################-//
, {
    name   : 'element of'
  , unicode: '2208'
  , html   : '&isin;'
  , latex  : '\\in'
  , group  : 'Binary Relations — Set Theory'
  }
, {
    name   : 'not element of'
  , unicode: '2209'
  , html   : '&notin;'
  , latex  : '\\notin or \\not\\in'
  , group  : 'Binary Relations — Set Theory'
  }
, {
    name   : 'has element'
  , unicode: '220b'
  , html   : '&ni;'
  , latex  : '\\owns'
  , group  : 'Binary Relations — Set Theory'
  }
, {
    name   : 'proper subset'
  , unicode: '2282'
  , html   : '&sub;'
  , latex  : '\\subset'
  , group  : 'Binary Relations — Set Theory'
  }
, {
    name   : 'proper superset'
  , unicode: '2283'
  , html   : '&sup;'
  , latex  : '\\superset'
  , group  : 'Binary Relations — Set Theory'
  }
, {
    name   : 'subset'
  , unicode: '2286'
  , html   : '&sube;'
  , latex  : '\\subseteq'
  , group  : 'Binary Relations — Set Theory'
  }
, {
    name   : 'superset'
  , unicode: '2287'
  , html   : '&supe;'
  , latex  : '\\superseteq'
  , group  : 'Binary Relations — Set Theory'
  }
, {
    name   : 'not proper subset'
  , unicode: '2284'
  , html   : '&nsub;'
  , latex  : '\\notsubset'
  , group  : 'Binary Relations — Set Theory'
  }
, {
    name   : 'not proper superset'
  , unicode: '2285'
  , html   : '&nsup;'
  , latex  : '\\notsuperset'
  , group  : 'Binary Relations — Set Theory'
  }
, {
    name   : 'union'
  , unicode: '222a'
  , html   : '&cup;'
  , latex  : '\\cup'
  , group  : 'Binary Relations — Set Theory'
  }
, {
    name   : 'intersection'
  , unicode: '2229'
  , html   : '&cap;'
  , latex  : '\\cap'
  , group  : 'Binary Relations — Set Theory'
  }
  //-########################-//
  //- Binary Relations — Arithmetic -//
  //-########################-//
, {
    name   : 'not equal to'
  , unicode: '2260'
  , html   : '&ne;'
  , latex  : '\\ne'
  , mac    : 'option ='
  , group  : 'Binary Relations — Arithmetic'
  }
, {
    name   : 'approximate'
  , unicode: '2248'
  , html   : '&asymp;'
  , latex  : '\\approx'
  , mac    : 'option x'
  , group  : 'Binary Relations — Arithmetic'
  }
, {
    name   : 'less-than sign'
  , unicode: '003c'
  , html   : '&lt;'
  , latex  : '\\lt'
  , mac    : 'shift ,'
  , comment: 'also used in HTML source'
  , group  : 'Binary Relations — Arithmetic'
  }
, {
    name   : 'greater-than sign'
  , unicode: '003e'
  , html   : '&gt;'
  , latex  : '\\gt'
  , mac    : 'shift .'
  , comment: 'also used in HTML source'
  , group  : 'Binary Relations — Arithmetic'
  }
, {
    name   : 'less than or equal to'
  , unicode: '2264'
  , html   : '&le;'
  , latex  : '\\le'
  , mac    : 'option ,'
  , group  : 'Binary Relations — Arithmetic'
  }
, {
    name   : 'greater than or equal to'
  , unicode: '2265'
  , html   : '&ge;'
  , latex  : '\\ge'
  , mac    : 'option .'
  , group  : 'Binary Relations — Arithmetic'
  }
, {
    name   : 'precedes'
  , unicode: '227a'
  , latex  : '\\prec'
  , comment: 'injection into'
  , group  : 'Binary Relations — Arithmetic'
  }
, {
    name   : 'succeeds'
  , unicode: '227b'
  , latex  : '\\succ'
  , comment: 'surjection onto'
  , group  : 'Binary Relations — Arithmetic'
  }
, {
    name   : 'precedes above single-line equals sign'
  , unicode: '2aaf'
  , latex  : '\\preceq'
  , group  : 'Binary Relations — Arithmetic'
  }
, {
    name   : 'succedes above single-line equals sign'
  , unicode: '2ab0'
  , latex  : '\\succeq'
  , group  : 'Binary Relations — Arithmetic'
  }
, {
    name   : 'precedes or equal to'
  , unicode: '227c'
  , latex  : '\\preccurlyeq'
  , group  : 'Binary Relations — Arithmetic'
  }
, {
    name   : 'succeeds or equal to'
  , unicode: '227d'
  , latex  : '\\succcurlyeq'
  , group  : 'Binary Relations — Arithmetic'
  }
, {
    name   : 'minus sign'
  , unicode: '2212'
  , html   : '&minus;'
  , latex  : '-'
  , comment: 'same width as en dash; use hyphen in \\(\\LaTeX\\)'
  , group  : 'Binary Relations — Arithmetic'
  }
, {
    name   : 'plus-minus sign'
  , unicode: '00b1'
  , html   : '&plusmn;'
  , latex  : '\\pm'
  , mac    : 'option shift ='
  , group  : 'Binary Relations — Arithmetic'
  }
, {
    name   : 'minus-or-plus sign'
  , unicode: '2213'
  , latex  : '\\mp'
  , group  : 'Binary Relations — Arithmetic'
  }
, {
    name   : 'dot operator'
  , unicode: '22c5'
  , html   : '&sdot;'
  , latex  : '\\cdot'
  , comment: 'dot product'
  , group  : 'Binary Relations — Arithmetic'
  }
, {
    name   : 'cross product'
  , unicode: '00d7'
  , html   : '&times;'
  , latex  : '\\times'
  , group  : 'Binary Relations — Arithmetic'
  }
, {
    name   : 'divide'
  , unicode: '00f7'
  , html   : '&divide;'
  , latex  : '\\div'
  , mac    : 'option /'
  , group  : 'Binary Relations — Arithmetic'
  }
, {
    name   : 'low asterisk'
  , unicode: '2217'
  , html   : '&lowast;'
  , latex  : '\\ast'
  , group  : 'Binary Relations — Arithmetic'
  }
, {
    name   : 'pound'
  , unicode: '0023'
  , html   : '#'
  , latex  : '\\#'
  , mac    : 'shift 3'
  , group  : 'Binary Relations — Arithmetic'
  }
, {
    name   : 'circled plus'
  , unicode: '2295'
  , html   : '&oplus;'
  , latex  : '\\oplus'
  , group  : 'Binary Relations — Arithmetic'
  }
, {
    name   : 'circled times'
  , unicode: '2297'
  , html   : '&otimes;'
  , latex  : '\\otimes'
  , group  : 'Binary Relations — Arithmetic'
  }
  //-########################-//
  //- Binary Relations — Geometry -//
  //-########################-//
, {
    name   : 'identical to'
  , unicode: '2261'
  , html   : '&equiv;'
  , latex  : '\\equiv'
  , comment: 'general equivalnce'
  , group  : 'Binary Relations — Geometry'
  }
, {
    name   : 'approximately equal to'
  , unicode: '2245'
  , html   : '&cong;'
  , latex  : '\\cong'
  , comment: 'congruent'
  , group  : 'Binary Relations — Geometry'
  }
, {
    name   : 'tilde operator'
  , unicode: '223c'
  , html   : '&sim;'
  , latex  : '\\sim'
  , comment: 'similar'
  , group  : 'Binary Relations — Geometry'
  }
, {
    name   : 'proportional to'
  , unicode: '221d'
  , html   : '&prop;'
  , latex  : '\\varpropto'
  , group  : 'Binary Relations — Geometry'
  }
, {
    name   : 'parallel to'
  , unicode: '2225'
  , group  : 'Binary Relations — Geometry'
  }
, {
    name   : 'perpendicular'
  , unicode: '27c2'
  , latex  : '\\perp'
  , comment: 'see U+22a5 for <code>&amp;perp;</code>'
  , group  : 'Binary Relations — Geometry'
  }
  //-########################-//
  //- Functions -//
  //-########################-//
, {
    name   : 'not sign'
  , unicode: '00ac'
  , html   : '&not;'
  , latex  : '\\lnot'
  , mac    : 'option l'
  , comment: 'logical not'
  , group  : 'Functions'
  }
, {
    name   : 'there exists'
  , unicode: '2203'
  , html   : '&exist;'
  , latex  : '\\exists'
  , group  : 'Functions'
  }
, {
    name   : 'for all'
  , unicode: '2200'
  , html   : '&forall;'
  , latex  : '\\forall'
  , group  : 'Functions'
  }
, {
    name   : 'complement'
  , unicode: '2201'
  , latex  : '\\complement'
  , group  : 'Functions'
  }
, {
    name   : 'no break here'
  , unicode: '0083'
  , html   : '&fnof;'
  , mac    : 'option f'
  , comment: 'function of'
  , group  : 'Functions'
  }
, {
    name   : 'square root'
  , unicode: '221a'
  , html   : '&radic;'
  , latex  : '\\sqrt'
  , mac    : 'option v'
  , group  : 'Functions'
  }
, {
    name   : 'summation'
  , unicode: '2211'
  , html   : '&sum;'
  , latex  : '\\sum'
  , mac    : 'option w'
  , group  : 'Functions'
  }
, {
    name   : 'product'
  , unicode: '220f'
  , html   : '&prod;'
  , latex  : '\\prod'
  , mac    : 'option shift p'
  , group  : 'Functions'
  }
, {
    name   : 'partial'
  , unicode: '2202'
  , html   : '&part;'
  , latex  : '\\partial'
  , mac    : 'option d'
  , group  : 'Functions'
  }
, {
    name   : 'integral'
  , unicode: '222b'
  , html   : '&int;'
  , latex  : '\\int'
  , mac    : 'option b'
  , group  : 'Functions'
  }
, {
    name   : 'nabla'
  , unicode: '2207'
  , html   : '&nabla;'
  , group  : 'Functions'
  }
  //-########################-//
  //- Miscellaneous Mathematical Symbols -//
  //-########################-//
, {
    name   : 'down tack'
  , unicode: '22a4'
  , latex  : '\\top'
  , comment: 'tautology'
  , group  : 'Miscellaneous Mathematical Symbols'
  }
, {
    name   : 'up tack'
  , unicode: '22a5'
  , html   : '&perp;'
  , latex  : '\bot'
  , comment: 'contradiction; see U+27c2 for perpendicular'
  , group  : 'Miscellaneous Mathematical Symbols'
  }
, {
    name   : 'therefore'
  , unicode: '2234'
  , html   : '&there4;'
  , latex  : '\\therefore'
  , comment: 'punctuation (not relation)'
  , group  : 'Miscellaneous Mathematical Symbols'
  }
, {
    name   : 'because'
  , unicode: '2235'
  , latex  : '\\because'
  , comment: 'punctuation (not relation)'
  , group  : 'Miscellaneous Mathematical Symbols'
  }
, {
    name   : 'empty set'
  , unicode: '2205'
  , html   : '&empty;'
  , latex  : '\\varnothing'
  , group  : 'Miscellaneous Mathematical Symbols'
  }
, {
    name   : 'infinity'
  , unicode: '221e'
  , html   : '&infin;'
  , latex  : '\\infty'
  , mac    : 'option 5'
  , group  : 'Miscellaneous Mathematical Symbols'
  }
, {
    name   : 'angle'
  , unicode: '2220'
  , html   : '&ang;'
  , latex  : '\\angle'
  , group  : 'Miscellaneous Mathematical Symbols'
  }
, {
    name   : 'degree'
  , unicode: '00b0'
  , html   : '&deg;'
  , mac    : 'option k'
  , group  : 'Miscellaneous Mathematical Symbols'
  }
, {
    name   : 'prime'
  , unicode: '2032'
  , html   : '&prime;'
  , latex  : '\\prime'
  , group  : 'Miscellaneous Mathematical Symbols'
  }
, {
    name   : 'double prime'
  , unicode: '2033'
  , html   : '&Prime;'
  , latex  : '\\Prime'
  , group  : 'Miscellaneous Mathematical Symbols'
  }
, {
    name   : 'triple prime'
  , unicode: '2034'
  , group  : 'Miscellaneous Mathematical Symbols'
  }
, {
    name   : 'script capital p'
  , unicode: '2118'
  , html   : '&weierp;'
  , latex  : '\\wp'
  , comment: 'Weierstrass p'
  , group  : 'Miscellaneous Mathematical Symbols'
  }
  //-########################-//
  //- Greek Letters -//
  //-########################-//
, {
    name   : 'Greek capital letter Alpha'
  , unicode: '0391'
  , html   : '&Alpha;'
  , latex  : '\\Alpha'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek capital letter Beta'
  , unicode: '0392'
  , html   : '&Beta;'
  , latex  : '\\Beta'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek capital letter Gamma'
  , unicode: '0393'
  , html   : '&Gamma;'
  , latex  : '\\Gamma'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek capital letter Delta'
  , unicode: '0394'
  , html   : '&Delta;'
  , latex  : '\\Delta'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek capital letter Epsilon'
  , unicode: '0395'
  , html   : '&Epsilon;'
  , latex  : '\\Epsilon'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek capital letter Zeta'
  , unicode: '0396'
  , html   : '&Zeta;'
  , latex  : '\\Zeta'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek capital letter Eta'
  , unicode: '0397'
  , html   : '&Eta;'
  , latex  : '\\Eta'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek capital letter Theta'
  , unicode: '0398'
  , html   : '&Theta;'
  , latex  : '\\Theta'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek capital letter Iota'
  , unicode: '0399'
  , html   : '&Iota;'
  , latex  : '\\Iota'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek capital letter Kappa'
  , unicode: '039a'
  , html   : '&Kappa;'
  , latex  : '\\Kappa'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek capital letter Lambda'
  , unicode: '039b'
  , html   : '&Lambda;'
  , latex  : '\\Lambda'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek capital letter Mu'
  , unicode: '039c'
  , html   : '&Mu;'
  , latex  : '\\Mu'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek capital letter Nu'
  , unicode: '039d'
  , html   : '&Nu;'
  , latex  : '\\Nu'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek capital letter Xi'
  , unicode: '039e'
  , html   : '&Xi;'
  , latex  : '\\Xi'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek capital letter Omicron'
  , unicode: '039f'
  , html   : '&Omicron;'
  , latex  : '\\Omicron'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek capital letter Pi'
  , unicode: '03a0'
  , html   : '&Pi;'
  , latex  : '\\Pi'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek capital letter Rho'
  , unicode: '03a1'
  , html   : '&Rho;'
  , latex  : '\\Rho'
  , group  : 'Greek Letters'
  }
, {
    unicode: '03a2'
  }
, {
    name   : 'Greek capital letter Sigma'
  , unicode: '03a3'
  , html   : '&Sigma;'
  , latex  : '\\Sigma'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek capital letter Tau'
  , unicode: '03a4'
  , html   : '&Tau;'
  , latex  : '\\Tau'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek capital letter Upsilon'
  , unicode: '03a5'
  , html   : '&Upsilon;'
  , latex  : '\\Upsilon'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek capital letter Phi'
  , unicode: '03a6'
  , html   : '&Phi;'
  , latex  : '\\Phi'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek capital letter Chi'
  , unicode: '03a7'
  , html   : '&Chi;'
  , latex  : '\\Chi'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek capital letter Psi'
  , unicode: '03a8'
  , html   : '&Psi;'
  , latex  : '\\Psi'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek capital letter Omega'
  , unicode: '03a9'
  , html   : '&Omega;'
  , latex  : '\\Omega'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter alpha'
  , unicode: '03b1'
  , html   : '&alpha;'
  , latex  : '\\alpha'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter beta'
  , unicode: '03b2'
  , html   : '&beta;'
  , latex  : '\\beta'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter gamma'
  , unicode: '03b3'
  , html   : '&gamma;'
  , latex  : '\\gamma'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter delta'
  , unicode: '03b4'
  , html   : '&delta;'
  , latex  : '\\delta'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter epsilon'
  , unicode: '03b5'
  , html   : '&epsilon;'
  , latex  : '\\epsilon'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter zeta'
  , unicode: '03b6'
  , html   : '&zeta;'
  , latex  : '\\zeta'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter eta'
  , unicode: '03b7'
  , html   : '&eta;'
  , latex  : '\\eta'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter theta'
  , unicode: '03b8'
  , html   : '&theta;'
  , latex  : '\\theta'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter iota'
  , unicode: '03b9'
  , html   : '&iota;'
  , latex  : '\\iota'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter kappa'
  , unicode: '03ba'
  , html   : '&kappa;'
  , latex  : '\\kappa'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter lambda'
  , unicode: '03bb'
  , html   : '&lambda;'
  , latex  : '\\lambda'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter mu'
  , unicode: '03bc'
  , html   : '&mu;'
  , latex  : '\\mu'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter nu'
  , unicode: '03bd'
  , html   : '&nu;'
  , latex  : '\\nu'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter xi'
  , unicode: '03be'
  , html   : '&xi;'
  , latex  : '\\xi'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter omicron'
  , unicode: '03bf'
  , html   : '&omicron;'
  , latex  : '\\omicron'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter pi'
  , unicode: '03c0'
  , html   : '&pi;'
  , latex  : '\\pi'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter rho'
  , unicode: '03c1'
  , html   : '&rho;'
  , latex  : '\\rho'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter final sigma'
  , unicode: '03c2'
  , latex  : '\\varsigma'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter sigma'
  , unicode: '03c3'
  , html   : '&sigma;'
  , latex  : '\\sigma'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter tau'
  , unicode: '03c4'
  , html   : '&tau;'
  , latex  : '\\tau'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter upsilon'
  , unicode: '03c5'
  , html   : '&upsilon;'
  , latex  : '\\upsilon'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter phi'
  , unicode: '03c6'
  , html   : '&phi;'
  , latex  : '\\phi'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter chi'
  , unicode: '03c7'
  , html   : '&chi;'
  , latex  : '\\chi'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter psi'
  , unicode: '03c8'
  , html   : '&psi;'
  , latex  : '\\psi'
  , group  : 'Greek Letters'
  }
, {
    name   : 'Greek small letter omega'
  , unicode: '03c9'
  , html   : '&omega;'
  , latex  : '\\omega'
  , group  : 'Greek Letters'
  }
]

module.exports = {
  groups : groups
, entities : entities
}
