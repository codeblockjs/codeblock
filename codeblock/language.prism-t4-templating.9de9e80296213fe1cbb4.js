(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{930:function(module,exports){!function(Prism){function createBlock(prefix,inside,contentAlias){return{pattern:RegExp("<#"+prefix+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+prefix+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:inside,alias:contentAlias}}}}Prism.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:function createT4(insideLang){var grammar=Prism.languages[insideLang],className="language-"+insideLang;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:createBlock("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\w+(?=\s)/,"attr-name":/\w+/}),expression:createBlock("=",grammar,className),"class-feature":createBlock("\\+",grammar,className),standard:createBlock("",grammar,className)}}}}})}(Prism)}}]);
//# sourceMappingURL=language.prism-t4-templating.9de9e80296213fe1cbb4.js.map