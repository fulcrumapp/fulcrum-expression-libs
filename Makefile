all: build

build:
	mkdir -p dist
	# ./build libname varname
	./build moment moment
	./build turf turf
	./build turf-tag turftag
	./build turf-distance turfdistance
	./build turf-line-distance turflinedistance
	./build proj4 proj4
	./build mgrs mgrs
	./build crypto-js cryptojs
	./build xml2js xml2js

clean:
	rm -f dist/*

.PHONY: build clean
