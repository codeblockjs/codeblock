(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{794:function(module,exports){!function(Prism){Prism.languages.django={comment:/^{#[\s\S]*?#}$/,tag:{pattern:/(^{%[+-]?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^{[{%][+-]?|[+-]?[}%]}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},filter:{pattern:/(\|)\w+/,lookbehind:!0,alias:"function"},test:{pattern:/(\bis\s+(?:not\s+)?)(?!not\b)\w+/,lookbehind:!0,alias:"function"},function:/\b[a-z_]\w+(?=\s*\()/i,keyword:/\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,operator:/[-+*/%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,number:/\b\d+(?:\.\d+)?\b/,boolean:/[Tt]rue|[Ff]alse|[Nn]one/,variable:/\b\w+?\b/,punctuation:/[{}[\](),.:;]/};var pattern=/{{[\s\S]*?}}|{%[\s\S]*?%}|{#[\s\S]*?#}/g,markupTemplating=Prism.languages["markup-templating"];Prism.hooks.add("before-tokenize",(function(env){markupTemplating.buildPlaceholders(env,"django",pattern)})),Prism.hooks.add("after-tokenize",(function(env){markupTemplating.tokenizePlaceholders(env,"django")})),Prism.languages.jinja2=Prism.languages.django,Prism.hooks.add("before-tokenize",(function(env){markupTemplating.buildPlaceholders(env,"jinja2",pattern)})),Prism.hooks.add("after-tokenize",(function(env){markupTemplating.tokenizePlaceholders(env,"jinja2")}))}(Prism)}}]);
//# sourceMappingURL=language.prism-django.9de9e80296213fe1cbb4.js.map