#!/usr/bin/env bash

JS_OUT=src/gen/
DART_OUT=../client/lib/gen/
PY_OUT=../../dara-server/pubsub_gen/

set -ex

# python

rm -rf $PY_OUT
mkdir -p $PY_OUT
touch $PY_OUT/__init__.py

protoc *.proto --python_out $PY_OUT --mypy_out $PY_OUT

# js

rm -rf $JS_OUT
mkdir -p $JS_OUT

pbjs -t static-module -w commonjs -o $JS_OUT/complied.js *.proto

# dart

rm -rf $DART_OUT
mkdir -p $DART_OUT

protoc *.proto --dart_out $DART_OUT
