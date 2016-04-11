#!/bin/sh

node_modules/.bin/watchify src/index.jsx \
	--detect-globals false \
	--extension=.jsx \
	--external react \
	--external classnames \
	--outfile build/index.js \
	--standalone HireFormsMultiSelect \
	--transform [ babelify --plugins object-assign ] \
	--verbose
