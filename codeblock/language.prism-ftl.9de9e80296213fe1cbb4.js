(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{809:function(module,exports){!function(Prism){for(var FTL_EXPR=/(?!<#--)[^()"']|\((?:<expr>)*\)|<#--[\s\S]*?-->|"(?:[^\\"]|\\.)*"|'(?:[^\\']|\\.)*'/.source,i=0;i<2;i++)FTL_EXPR=FTL_EXPR.replace(/<expr>/g,FTL_EXPR);FTL_EXPR=FTL_EXPR.replace(/<expr>/g,"[^sS]");var ftl={comment:/<#--[\s\S]*?-->/,string:[{pattern:/\br("|')(?:(?!\1)[^\\]|\\.)*\1/,greedy:!0},{pattern:RegExp(/("|')(?:(?!\1|\$\{)[^\\]|\\.|\$\{(?:<expr>)*?\})*\1/.source.replace(/<expr>/g,FTL_EXPR)),greedy:!0,inside:{interpolation:{pattern:RegExp(/((?:^|[^\\])(?:\\\\)*)\$\{(?:<expr>)*?\}/.source.replace(/<expr>/g,FTL_EXPR)),lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:null}}}}],keyword:/\b(?:as)\b/,boolean:/\b(?:true|false)\b/,"builtin-function":{pattern:/((?:^|[^?])\?\s*)\w+/,lookbehind:!0,alias:"function"},function:/\w+(?=\s*\()/,number:/\d+(?:\.\d+)?/,operator:/\.\.[<*!]?|->|--|\+\+|&&|\|\||\?{1,2}|[-+*/%!=<>]=?|\b(?:gt|gte|lt|lte)\b/,punctuation:/[,;.:()[\]{}]/};ftl.string[1].inside.interpolation.inside.rest=ftl,Prism.languages.ftl={"ftl-comment":{pattern:/^<#--[\s\S]*/,alias:"comment"},"ftl-directive":{pattern:/^<[\s\S]+>$/,inside:{directive:{pattern:/(^<\/?)[#@][a-z]\w*/i,lookbehind:!0,alias:"keyword"},punctuation:/^<\/?|\/?>$/,content:{pattern:/[\s\S]*\S[\s\S]*/,alias:"ftl",inside:ftl}}},"ftl-interpolation":{pattern:/^\$\{[\s\S]*\}$/,inside:{punctuation:/^\$\{|\}$/,content:{pattern:/[\s\S]*\S[\s\S]*/,alias:"ftl",inside:ftl}}}},Prism.hooks.add("before-tokenize",(function(env){var pattern=RegExp(/<#--[\s\S]*?-->|<\/?[#@][a-zA-Z](?:<expr>)*?>|\$\{(?:<expr>)*?\}/.source.replace(/<expr>/g,FTL_EXPR),"gi");Prism.languages["markup-templating"].buildPlaceholders(env,"ftl",pattern)})),Prism.hooks.add("after-tokenize",(function(env){Prism.languages["markup-templating"].tokenizePlaceholders(env,"ftl")}))}(Prism)}}]);
//# sourceMappingURL=language.prism-ftl.9de9e80296213fe1cbb4.js.map