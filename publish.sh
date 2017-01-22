#!/usr/bin/env bash

gulp dts ;
npm publish ./ --tag $1 ;
