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

clean:
	rm -f dist/*

.PHONY: build clean
