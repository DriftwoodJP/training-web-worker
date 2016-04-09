# sandbox-es6

## Installation

```
% git clone git@github.com:DriftwoodJP/sandbox-es6.git && cd $_
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
    npm run serve & npm run watch
  test
    echo "Error: no test specified" && exit 1

available via `npm run-script`:
  build
    browserify src/basic.es6 --debug --transform babelify --outfile lib/basic.js
  lint
    eslint src/**/*.es6
  serve
    serve -p 3000 .
  watch:build
    watch 'npm run build' src/
  watch:lint
    watch 'npm run lint' src/
  watch
    npm run watch:build & npm run watch:lint
```
