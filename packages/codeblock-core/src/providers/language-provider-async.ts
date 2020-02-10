import { PrismLanguageProvider } from '@codeblock/core/types';

export const asyncLanguageProvider: PrismLanguageProvider = {
  abap: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-abap' */ 'prismjs/components/prism-abap'
    );
  },
  actionscript: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-actionscript' */ 'prismjs/components/prism-actionscript'
    );
  },
  ada: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-ada' */ 'prismjs/components/prism-ada'
    );
  },
  apacheconf: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-apacheconf' */ 'prismjs/components/prism-apacheconf'
    );
  },
  apl: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-apl' */ 'prismjs/components/prism-apl'
    );
  },
  applescript: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-applescript' */ 'prismjs/components/prism-applescript'
    );
  },
  arduino: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-arduino' */ 'prismjs/components/prism-arduino'
    );
  },
  arff: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-arff' */ 'prismjs/components/prism-arff'
    );
  },
  asciidoc: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-asciidoc' */ 'prismjs/components/prism-asciidoc'
    );
  },
  asm6502: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-asm6502' */ 'prismjs/components/prism-asm6502'
    );
  },
  aspnet: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-aspnet' */ 'prismjs/components/prism-aspnet'
    );
  },
  autohotkey: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-autohotkey' */ 'prismjs/components/prism-autohotkey'
    );
  },
  autoit: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-autoit' */ 'prismjs/components/prism-autoit'
    );
  },
  bash: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-bash' */ 'prismjs/components/prism-bash'
    );
  },
  basic: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-basic' */ 'prismjs/components/prism-basic'
    );
  },
  batch: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-batch' */ 'prismjs/components/prism-batch'
    );
  },
  bison: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-bison' */ 'prismjs/components/prism-bison'
    );
  },
  brainfuck: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-brainfuck' */ 'prismjs/components/prism-brainfuck'
    );
  },
  bro: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-bro' */ 'prismjs/components/prism-bro'
    );
  },
  c: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-c' */ 'prismjs/components/prism-c'
    );
  },
  clike: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-clike' */ 'prismjs/components/prism-clike'
    );
  },
  clojure: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-clojure' */ 'prismjs/components/prism-clojure'
    );
  },
  coffeescript: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-coffeescript' */ 'prismjs/components/prism-coffeescript'
    );
  },
  core: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-core' */ 'prismjs/components/prism-core'
    );
  },
  cpp: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-cpp' */ 'prismjs/components/prism-cpp'
    );
  },
  crystal: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-crystal' */ 'prismjs/components/prism-crystal'
    );
  },
  csharp: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-csharp' */ 'prismjs/components/prism-csharp'
    );
  },
  csp: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-csp' */ 'prismjs/components/prism-csp'
    );
  },
  css: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-css' */ 'prismjs/components/prism-css'
    );
  },
  'css-extras': () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-css-extras' */ 'prismjs/components/prism-css-extras'
    );
  },
  d: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-d' */ 'prismjs/components/prism-d'
    );
  },
  dart: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-dart' */ 'prismjs/components/prism-dart'
    );
  },
  diff: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-diff' */ 'prismjs/components/prism-diff'
    );
  },
  django: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-django' */ 'prismjs/components/prism-django'
    );
  },
  docker: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-docker' */ 'prismjs/components/prism-docker'
    );
  },
  eiffel: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-eiffel' */ 'prismjs/components/prism-eiffel'
    );
  },
  elixir: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-elixir' */ 'prismjs/components/prism-elixir'
    );
  },
  elm: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-elm' */ 'prismjs/components/prism-elm'
    );
  },
  erb: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-erb' */ 'prismjs/components/prism-erb'
    );
  },
  erlang: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-erlang' */ 'prismjs/components/prism-erlang'
    );
  },
  flow: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-flow' */ 'prismjs/components/prism-flow'
    );
  },
  fortran: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-fortran' */ 'prismjs/components/prism-fortran'
    );
  },
  fsharp: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-fsharp' */ 'prismjs/components/prism-fsharp'
    );
  },
  gedcom: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-gedcom' */ 'prismjs/components/prism-gedcom'
    );
  },
  gherkin: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-gherkin' */ 'prismjs/components/prism-gherkin'
    );
  },
  git: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-git' */ 'prismjs/components/prism-git'
    );
  },
  glsl: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-glsl' */ 'prismjs/components/prism-glsl'
    );
  },
  go: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-go' */ 'prismjs/components/prism-go'
    );
  },
  graphql: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-graphql' */ 'prismjs/components/prism-graphql'
    );
  },
  groovy: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-groovy' */ 'prismjs/components/prism-groovy'
    );
  },
  haml: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-haml' */ 'prismjs/components/prism-haml'
    );
  },
  handlebars: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-handlebars' */ 'prismjs/components/prism-handlebars'
    );
  },
  haskell: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-haskell' */ 'prismjs/components/prism-haskell'
    );
  },
  haxe: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-haxe' */ 'prismjs/components/prism-haxe'
    );
  },
  hpkp: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-hpkp' */ 'prismjs/components/prism-hpkp'
    );
  },
  hsts: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-hsts' */ 'prismjs/components/prism-hsts'
    );
  },
  http: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-http' */ 'prismjs/components/prism-http'
    );
  },
  ichigojam: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-ichigojam' */ 'prismjs/components/prism-ichigojam'
    );
  },
  icon: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-icon' */ 'prismjs/components/prism-icon'
    );
  },
  inform7: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-inform7' */ 'prismjs/components/prism-inform7'
    );
  },
  ini: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-ini' */ 'prismjs/components/prism-ini'
    );
  },
  io: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-io' */ 'prismjs/components/prism-io'
    );
  },
  j: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-j' */ 'prismjs/components/prism-j'
    );
  },
  java: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-java' */ 'prismjs/components/prism-java'
    );
  },
  javascript: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-javascript' */ 'prismjs/components/prism-javascript'
    );
  },
  jolie: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-jolie' */ 'prismjs/components/prism-jolie'
    );
  },
  json: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-json' */ 'prismjs/components/prism-json'
    );
  },
  jsx: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-jsx' */ 'prismjs/components/prism-jsx'
    );
  },
  julia: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-julia' */ 'prismjs/components/prism-julia'
    );
  },
  keyman: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-keyman' */ 'prismjs/components/prism-keyman'
    );
  },
  kotlin: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-kotlin' */ 'prismjs/components/prism-kotlin'
    );
  },
  latex: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-latex' */ 'prismjs/components/prism-latex'
    );
  },
  less: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-less' */ 'prismjs/components/prism-less'
    );
  },
  liquid: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-liquid' */ 'prismjs/components/prism-liquid'
    );
  },
  lisp: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-lisp' */ 'prismjs/components/prism-lisp'
    );
  },
  livescript: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-livescript' */ 'prismjs/components/prism-livescript'
    );
  },
  lolcode: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-lolcode' */ 'prismjs/components/prism-lolcode'
    );
  },
  lua: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-lua' */ 'prismjs/components/prism-lua'
    );
  },
  makefile: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-makefile' */ 'prismjs/components/prism-makefile'
    );
  },
  markdown: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-markdown' */ 'prismjs/components/prism-markdown'
    );
  },
  markup: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-markup' */ 'prismjs/components/prism-markup'
    );
  },
  'markup-templating': () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-markup-templating' */ 'prismjs/components/prism-markup-templating'
    );
  },
  matlab: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-matlab' */ 'prismjs/components/prism-matlab'
    );
  },
  mel: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-mel' */ 'prismjs/components/prism-mel'
    );
  },
  mizar: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-mizar' */ 'prismjs/components/prism-mizar'
    );
  },
  monkey: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-monkey' */ 'prismjs/components/prism-monkey'
    );
  },
  n4js: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-n4js' */ 'prismjs/components/prism-n4js'
    );
  },
  nasm: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-nasm' */ 'prismjs/components/prism-nasm'
    );
  },
  nginx: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-nginx' */ 'prismjs/components/prism-nginx'
    );
  },
  nim: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-nim' */ 'prismjs/components/prism-nim'
    );
  },
  nix: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-nix' */ 'prismjs/components/prism-nix'
    );
  },
  nsis: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-nsis' */ 'prismjs/components/prism-nsis'
    );
  },
  objectivec: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-objectivec' */ 'prismjs/components/prism-objectivec'
    );
  },
  ocaml: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-ocaml' */ 'prismjs/components/prism-ocaml'
    );
  },
  opencl: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-opencl' */ 'prismjs/components/prism-opencl'
    );
  },
  oz: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-oz' */ 'prismjs/components/prism-oz'
    );
  },
  parigp: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-parigp' */ 'prismjs/components/prism-parigp'
    );
  },
  parser: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-parser' */ 'prismjs/components/prism-parser'
    );
  },
  pascal: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-pascal' */ 'prismjs/components/prism-pascal'
    );
  },
  perl: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-perl' */ 'prismjs/components/prism-perl'
    );
  },
  php: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-php' */ 'prismjs/components/prism-php'
    );
  },
  'php-extras': () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-php-extras' */ 'prismjs/components/prism-php-extras'
    );
  },
  plsql: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-plsql' */ 'prismjs/components/prism-plsql'
    );
  },
  powershell: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-powershell' */ 'prismjs/components/prism-powershell'
    );
  },
  processing: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-processing' */ 'prismjs/components/prism-processing'
    );
  },
  prolog: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-prolog' */ 'prismjs/components/prism-prolog'
    );
  },
  properties: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-properties' */ 'prismjs/components/prism-properties'
    );
  },
  protobuf: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-protobuf' */ 'prismjs/components/prism-protobuf'
    );
  },
  pug: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-pug' */ 'prismjs/components/prism-pug'
    );
  },
  puppet: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-puppet' */ 'prismjs/components/prism-puppet'
    );
  },
  pure: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-pure' */ 'prismjs/components/prism-pure'
    );
  },
  python: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-python' */ 'prismjs/components/prism-python'
    );
  },
  q: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-q' */ 'prismjs/components/prism-q'
    );
  },
  qore: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-qore' */ 'prismjs/components/prism-qore'
    );
  },
  r: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-r' */ 'prismjs/components/prism-r'
    );
  },
  reason: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-reason' */ 'prismjs/components/prism-reason'
    );
  },
  renpy: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-renpy' */ 'prismjs/components/prism-renpy'
    );
  },
  rest: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-rest' */ 'prismjs/components/prism-rest'
    );
  },
  rip: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-rip' */ 'prismjs/components/prism-rip'
    );
  },
  roboconf: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-roboconf' */ 'prismjs/components/prism-roboconf'
    );
  },
  ruby: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-ruby' */ 'prismjs/components/prism-ruby'
    );
  },
  rust: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-rust' */ 'prismjs/components/prism-rust'
    );
  },
  sas: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-sas' */ 'prismjs/components/prism-sas'
    );
  },
  sass: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-sass' */ 'prismjs/components/prism-sass'
    );
  },
  scala: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-scala' */ 'prismjs/components/prism-scala'
    );
  },
  scheme: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-scheme' */ 'prismjs/components/prism-scheme'
    );
  },
  scss: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-scss' */ 'prismjs/components/prism-scss'
    );
  },
  smalltalk: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-smalltalk' */ 'prismjs/components/prism-smalltalk'
    );
  },
  smarty: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-smarty' */ 'prismjs/components/prism-smarty'
    );
  },
  soy: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-soy' */ 'prismjs/components/prism-soy'
    );
  },
  sql: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-sql' */ 'prismjs/components/prism-sql'
    );
  },
  stylus: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-stylus' */ 'prismjs/components/prism-stylus'
    );
  },
  swift: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-swift' */ 'prismjs/components/prism-swift'
    );
  },
  tap: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-tap' */ 'prismjs/components/prism-tap'
    );
  },
  tcl: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-tcl' */ 'prismjs/components/prism-tcl'
    );
  },
  textile: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-textile' */ 'prismjs/components/prism-textile'
    );
  },
  tsx: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-tsx' */ 'prismjs/components/prism-tsx'
    );
  },
  tt2: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-tt2' */ 'prismjs/components/prism-tt2'
    );
  },
  twig: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-twig' */ 'prismjs/components/prism-twig'
    );
  },
  typescript: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-typescript' */ 'prismjs/components/prism-typescript'
    );
  },
  vbnet: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-vbnet' */ 'prismjs/components/prism-vbnet'
    );
  },
  velocity: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-velocity' */ 'prismjs/components/prism-velocity'
    );
  },
  verilog: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-verilog' */ 'prismjs/components/prism-verilog'
    );
  },
  vhdl: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-vhdl' */ 'prismjs/components/prism-vhdl'
    );
  },
  vim: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-vim' */ 'prismjs/components/prism-vim'
    );
  },
  'visual-basic': () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-visual-basic' */ 'prismjs/components/prism-visual-basic'
    );
  },
  wasm: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-wasm' */ 'prismjs/components/prism-wasm'
    );
  },
  wiki: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-wiki' */ 'prismjs/components/prism-wiki'
    );
  },
  xeora: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-xeora' */ 'prismjs/components/prism-xeora'
    );
  },
  xojo: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-xojo' */ 'prismjs/components/prism-xojo'
    );
  },
  xquery: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-xquery' */ 'prismjs/components/prism-xquery'
    );
  },
  yaml: () => {
    return import(
      /* webpackChunkName: 'codeblock/language.prism-yaml' */ 'prismjs/components/prism-yaml'
    );
  }
};
