#!/bin/bash

PORT=5432
HOST='0.0.0.0'
DIR=$PWD/dist

echo
echo -e "\e[35mrunning the temp server at $HOST:$PORT\e[0m"
echo

python3 -m http.server --bind $HOST --directory $DIR $PORT
