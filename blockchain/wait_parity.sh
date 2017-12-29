#!/usr/bin/env bash


set -e

host="authority0"
shift
cmd="$@"

until curl --data '{"method":"web3_clientVersion","params":[],"id":1,"jsonrpc":"2.0"}' -H "Content-Type: application/json" -X POST "$host":8545; do
    >&2 echo "Parity is unavailable - sleeping"
    sleep 1
done

>&2 echo "Parity is up - executing command"
exec $cmd
