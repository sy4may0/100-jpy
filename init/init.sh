#!/bin/bash

SCRIPT_DIR=$(cd $(dirname $(readlink -f $0 || echo $0));pwd -P)
JS_ENV=${SCRIPT_DIR%/*}/.env

mongo_conf=$(cat $JS_ENV | grep "MONGO_URI")
mongo_url=${mongo_conf%/*}
mongo_url=${mongo_url##*/}
mongo_db=${mongo_conf##*/}

cmd="mongoimport --host ${mongo_url} --db ${mongo_db} --collection user --drop --file ${SCRIPT_DIR}/init.json"
echo $cmd