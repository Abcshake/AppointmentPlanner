#!/bin/bash

export PGPASSWORD='node_password'

echo "Configuring schedulerdb"

dropdb -U node_user schedulerdb
createdb -U node_user schedulerdb

psql -U node_user schedulerdb < ./bin/sql/scheduler.sql


echo "schedulerdb configured"