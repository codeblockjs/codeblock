(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{852:function(module,exports){!function(Prism){Prism.languages.latte={comment:/^\{\*[\s\S]*/,ld:{pattern:/^\{(?:[=_]|\/?(?!\d|\w+\()\w+|)/,inside:{punctuation:/^\{\/?/,tag:{pattern:/.+/,alias:"important"}}},rd:{pattern:/\}$/,inside:{punctuation:/.+/}},php:{pattern:/\S(?:[\s\S]*\S)?/,alias:"language-php",inside:Prism.languages.php}};var markupLatte=Prism.languages.extend("markup",{});Prism.languages.insertBefore("inside","attr-value",{"n-attr":{pattern:/n:[\w-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+))?/,inside:{"attr-name":{pattern:/^[^\s=]+/,alias:"important"},"attr-value":{pattern:/=[\s\S]+/,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],php:{pattern:/\S(?:[\s\S]*\S)?/,inside:Prism.languages.php}}}}}},markupLatte.tag),Prism.hooks.add("before-tokenize",(function(env){if("latte"===env.language){Prism.languages["markup-templating"].buildPlaceholders(env,"latte",/\{\*[\s\S]*?\*\}|\{[^'"\s{}*](?:[^"'/{}]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|\/\*[\s\S]*?\*\/)*?\}/g),env.grammar=markupLatte}})),Prism.hooks.add("after-tokenize",(function(env){Prism.languages["markup-templating"].tokenizePlaceholders(env,"latte")}))}(Prism)}}]);
//# sourceMappingURL=language.prism-latte.9de9e80296213fe1cbb4.js.map