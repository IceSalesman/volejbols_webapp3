#!/bin/bash

TEST=$(grep -oP '(?<=TEST: )[^ ]+' file.yml)
EMAIL=$(grep -oP '(?<=EMAIL: )[^ ]+' file.yml)
EMAIL_PASSWORD=$(grep -oP '(?<=EMAIL_PASSWORD: )[^ ]+' file.yml)

echo "TEST=$TEST" > .env
echo "EMAIL=$EMAIL" >> .env
echo "EMAIL_PASSWORD=$EMAIL_PASSWORD" >> .env