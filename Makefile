all: build

build:
	mkdir -p dist
	# ./build libname varname
	./build moment moment
	./build @turf/turf turf
	./build @turf/tag turfTag
	./build @turf/area turfArea
	./build @turf/distance turfDistance
	./build @turf/line-distance turfLineDistance
	./build @turf/buffer turfBuffer
	./build @turf/points-within-polygon turfPointsWithinPolygon
	./build @turf/centroid turfCentroid
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
