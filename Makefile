all: build

build:
	mkdir -p dist
	# ./build libname varname
	./build moment moment
	./build turf turf
	./build turf-tag turftag
	./build proj4 proj4
	./build mgrs mgrs
	./build crypto-js cryptojs
	./build xml2js xml2js
	./build @fulcrum/fulcrum-expression-oauth oauth

clean:
	rm -f dist/*

.PHONY: build clean
