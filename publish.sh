#!/usr/bin/env bash

gulp dts ;
cp package.json dist/package.json
cp ReadMe.md dist/ReadMe.md
cd dist ;
npm publish . ;
gulp clean ;
