#!/usr/bin/env bash

TAG=$1

# If no arguments were passed to this script, default tag to "latest"
if [ $# -eq 0 ] ; then
	TAG="latest"
fi

gulp dts ;
npm publish ./ --tag $1 ;
