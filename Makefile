all: clean build

build:
	mkdir -p dist
	./build moment moment
	./build @turf/turf turf
	./build @turf/tag turfTag
	./build @turf/area turfArea
	./build @turf/distance turfDistance
	./build @turf/line-distance turfLineDistance
	./build @turf/buffer turfBuffer
	./build @turf/points-within-polygon turfPointsWithinPolygon
	./build @turf/centroid turfCentroid
	./build @turf/length turfLength
	./build @turf/midpoint turfMidpoint
	./build @turf/nearest-point-on-line turfNearestPointOnLine
	./build @turf/boolean-crosses turfBooleanCrosses
	./build @turf/boolean-equal turfBooleanEqual
	./build @turf/boolean-crosses turfBooleanCrosses
	./build @turf/boolean-intersects turfBooleanIntersects
	./build @turf/boolean-overlap turfBooleanOverlap
	./build @turf/boolean-point-in-polygon turfBooleanPointInPolygon
	./build @turf/boolean-within turfBooleanWithin
	./build proj4 proj4
	./build mgrs mgrs
	./build crypto-js cryptojs
	./build xml2js xml2js
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