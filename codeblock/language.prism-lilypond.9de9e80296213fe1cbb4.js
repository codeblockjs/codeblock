(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{854:function(module,exports){!function(Prism){for(var schemeExpression=/\((?:[^();"#\\]|\\[\s\S]|;.*|"(?:[^"\\]|\\.)*"|#(?:\{(?:(?!#\})[\s\S])*#\}|[^{])|<expr>)*\)/.source,i=0;i<5;i++)schemeExpression=schemeExpression.replace(/<expr>/g,schemeExpression);schemeExpression=schemeExpression.replace(/<expr>/g,/[^\s\S]/.source);var lilypond=Prism.languages.lilypond={comment:/%(?:(?!\{).*|\{[\s\S]*?%\})/,"embedded-scheme":{pattern:RegExp(/(^|[=\s])#(?:"(?:[^"\\]|\\.)*"|[^\s()"]*(?:[^\s()]|<expr>))/.source.replace(/<expr>/g,schemeExpression),"m"),lookbehind:!0,greedy:!0,inside:{scheme:{pattern:/^(#)[\s\S]+$/,lookbehind:!0,alias:"language-scheme",inside:{"embedded-lilypond":{pattern:/#\{[\s\S]*?#\}/,greedy:!0,inside:{punctuation:/^#\{|#\}$/,lilypond:{pattern:/[\s\S]+/,alias:"language-lilypond",inside:null}}},rest:Prism.languages.scheme}},punctuation:/#/}},string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0},"class-name":{pattern:/(\\new\s+)[\w-]+/,lookbehind:!0},keyword:{pattern:/\\[a-z][-\w]*/i,inside:{punctuation:/^\\/}},operator:/[=|]|<<|>>/,punctuation:{pattern:/(^|[a-z\d])(?:'+|,+|[_^]?-[_^]?(?:[-+^!>._]|(?=\d))|[_^]\.?|[.!])|[{}()[\]<>^~]|\\[()[\]<>\\!]|--|__/,lookbehind:!0},number:/\b\d+(?:\/\d+)?\b/};lilypond["embedded-scheme"].inside.scheme.inside["embedded-lilypond"].inside.lilypond.inside=lilypond,Prism.languages.ly=lilypond}(Prism)}}]);
//# sourceMappingURL=language.prism-lilypond.9de9e80296213fe1cbb4.js.map