# Fulcrum Expression Libraries

A collection of libraries that are prepared for use in Fulcrum expressions.

## Adding new libraries

First install the dependencies needed to build.

```bash
npm install
```

Then install your new module via npm. Note the use of the `--save` flag to ensure the new dependency is added to `package.json`.

```bash
npm install --save crypto-js
```

Once your npm module is installed, edit the `Makefile` to add it to the build step.

```make
all: build

build:
  mkdir -p dist
  # ./build libname varname
  ./build moment moment
  ./build crypto-js cryptojs

clean:
  rm -f dist/*

.PHONY: build clean
```

Now, running `make` should build all of the libraries including the one you just added.

```bash
jasonsanford@jason fulcrum-expression-libs (master) $ make
mkdir -p dist
# ./build libname varname
./build moment moment
node_modules/.bin/browserify -r 'moment' -s 'moment' | node_modules/.bin/uglifyjs > dist/moment.js --mangle && echo '\nvar moment = module.exports;' >> dist/moment.js
./build crypto-js cryptojs
node_modules/.bin/browserify -r 'crypto-js' -s 'cryptojs' | node_modules/.bin/uglifyjs > dist/crypto-js.js --mangle && echo '\nvar cryptojs = module.exports;' >> dist/crypto-js.js
(node) util.print is deprecated. Use console.log instead.
```
