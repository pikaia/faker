#!/bin/bash

SRCS="
./content_script.js
./favicon-16x16.png
./favicon-32x32.png
./favicon-96x96.png
./manifest.json
"
mkdir -p ./target
rm -f target/*
rm -f faker.zip
for file in ${SRCS}; do cp ${file} target; done

# Create zip without directory structure.
cd target
zip -r faker.zip *