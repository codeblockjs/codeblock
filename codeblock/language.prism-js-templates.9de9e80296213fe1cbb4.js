(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{842:function(module,exports){!function(Prism){var templateString=Prism.languages.javascript["template-string"],templateLiteralPattern=templateString.pattern.source,interpolationObject=templateString.inside.interpolation,interpolationPunctuationObject=interpolationObject.inside["interpolation-punctuation"],interpolationPattern=interpolationObject.pattern.source;function createTemplate(language,tag){if(Prism.languages[language])return{pattern:RegExp("((?:"+tag+")\\s*)"+templateLiteralPattern),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:language}}}}function getPlaceholder(counter,language){return"___"+language.toUpperCase()+"_"+counter+"___"}function tokenizeWithHooks(code,grammar,language){var env={code:code,grammar:grammar,language:language};return Prism.hooks.run("before-tokenize",env),env.tokens=Prism.tokenize(env.code,env.grammar),Prism.hooks.run("after-tokenize",env),env.tokens}function tokenizeInterpolationExpression(expression){var tempGrammar={};tempGrammar["interpolation-punctuation"]=interpolationPunctuationObject;var tokens=Prism.tokenize(expression,tempGrammar);if(3===tokens.length){var args=[1,1];args.push.apply(args,tokenizeWithHooks(tokens[1],Prism.languages.javascript,"javascript")),tokens.splice.apply(tokens,args)}return new Prism.Token("interpolation",tokens,interpolationObject.alias,expression)}function tokenizeEmbedded(code,grammar,language){var _tokens=Prism.tokenize(code,{interpolation:{pattern:RegExp(interpolationPattern),lookbehind:!0}}),placeholderCounter=0,placeholderMap={},embeddedTokens=tokenizeWithHooks(_tokens.map((function(token){if("string"==typeof token)return token;for(var placeholder,interpolationExpression=token.content;-1!==code.indexOf(placeholder=getPlaceholder(placeholderCounter++,language)););return placeholderMap[placeholder]=interpolationExpression,placeholder})).join(""),grammar,language),placeholders=Object.keys(placeholderMap);return placeholderCounter=0,function walkTokens(tokens){for(var i=0;i<tokens.length;i++){if(placeholderCounter>=placeholders.length)return;var token=tokens[i];if("string"==typeof token||"string"==typeof token.content){var placeholder=placeholders[placeholderCounter],s="string"==typeof token?token:token.content,index=s.indexOf(placeholder);if(-1!==index){++placeholderCounter;var before=s.substring(0,index),middle=tokenizeInterpolationExpression(placeholderMap[placeholder]),after=s.substring(index+placeholder.length),replacement=[];if(before&&replacement.push(before),replacement.push(middle),after){var afterTokens=[after];walkTokens(afterTokens),replacement.push.apply(replacement,afterTokens)}"string"==typeof token?(tokens.splice.apply(tokens,[i,1].concat(replacement)),i+=replacement.length-1):token.content=replacement}}else{var content=token.content;Array.isArray(content)?walkTokens(content):walkTokens([content])}}}(embeddedTokens),new Prism.Token(language,embeddedTokens,"language-"+language,code)}Prism.languages.javascript["template-string"]=[createTemplate("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),createTemplate("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),createTemplate("svg",/\bsvg/.source),createTemplate("markdown",/\b(?:md|markdown)/.source),createTemplate("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),templateString].filter(Boolean);var supportedLanguages={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function stringContent(value){return"string"==typeof value?value:Array.isArray(value)?value.map(stringContent).join(""):stringContent(value.content)}Prism.hooks.add("after-tokenize",(function(env){env.language in supportedLanguages&&function findTemplateStrings(tokens){for(var i=0,l=tokens.length;i<l;i++){var token=tokens[i];if("string"!=typeof token){var content=token.content;if(Array.isArray(content))if("template-string"===token.type){var embedded=content[1];if(3===content.length&&"string"!=typeof embedded&&"embedded-code"===embedded.type){var code=stringContent(embedded),alias=embedded.alias,language=Array.isArray(alias)?alias[0]:alias,grammar=Prism.languages[language];if(!grammar)continue;content[1]=tokenizeEmbedded(code,grammar,language)}}else findTemplateStrings(content);else"string"!=typeof content&&findTemplateStrings([content])}}}(env.tokens)}))}(Prism)}}]);
//# sourceMappingURL=language.prism-js-templates.9de9e80296213fe1cbb4.js.map