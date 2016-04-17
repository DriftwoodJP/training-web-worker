# sandbox-es6

## Installation

```
% git clone git@github.com:DriftwoodJP/sandbox-es6.git your-project && cd $_
% npm install
```


## Usage

```
% npm start
```

`npm run` will list the available scripts.

```
% npm run
Lifecycle scripts included in sandbox-es6:
  start
    parallelshell 'npm run serve' 'npm run build' 'npm run watch'
  test
    mocha test/**/*.test.js

available via `npm run-script`:
  build
    watchify ./src/basic.es6.js --debug --transform babelify --outfile 'exorcist ./lib/basic.js.map > ./lib/basic.js' --verbose
  doc
    esdoc -c .esdoc.json
  lint
    eslint src/**/*.es6.js test/**/*.test.js
  serve
    serve -p 3000 .
  watch
    watch 'npm run lint && npm run test' src/ test/
```
