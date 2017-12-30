#!/usr/bin/env bash


set -e
shift
cmd="$@"

until ls contract_address/contract_address.txt;  do
    >&2 echo "Waiting for deploy"
    sleep 1
done

>&2 echo "Contract is deployed"
exec $cmd
