all: build

build:
	mkdir -p dist
	# ./build libname varname
	./build moment moment
	./build turf turf
	./build turf-tag turftag
	./build turf-distance turfdistance
	./build turf-line-distance turflinedistance
	./build turf-buffer turfbuffer
	./build proj4 proj4
	./build mgrs mgrs
	./build crypto-js cryptojs
	./build xml2js xml2js
	./build alasql alasql
	./build geopoint geopoint
	./build topojson-client topojson
	./build geolib geolib
	./build vcard-js vcard
	./build @fulcrum/fulcrum-expression-oauth oauth
	./build string-mask mask
	./build game-of-life-logic life
	./build open-location-code openlocationcode

clean:
	rm -f dist/*

.PHONY: build clean
