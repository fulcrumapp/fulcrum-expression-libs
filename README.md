# Fulcrum Expression Libraries

A collection of libraries that are prepared for use in Fulcrum expressions. The files in the `dist` directory are the scripts you can paste directly into Fulcrum Data Events scripts. At the bottom of each file is the variable name used to access the library.

## Adding new libraries

First install the dependencies needed to build.

```bash
yarn
```

Then install your new module via npm.

```bash
yarn add crypto-js
```

Once your npm module is installed, edit the `Makefile` to add it to the build step.

```make
all: build

build:
  mkdir -p dist
  ./build moment moment
  ./build crypto-js cryptojs

clean:
  rm -f dist/*

.PHONY: build clean
```

Now, running `make` should build all of the libraries including the one you just added.
