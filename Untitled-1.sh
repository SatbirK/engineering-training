#!/bin/bash

# Set timestamp
timestamp=$(date +%Y%m%d%H%M%S)

# Set filename
filename="feature-list-$timestamp.csv"

# Find features and generate CSV
find /Users/SMehta/Documents/GitHub/tw_hybris/tests/src/test/resources/features/ -name '*.feature' -print0 | while IFS= read -r -d '' file; do
    feature=$(grep -m 1 "^Feature:" "$file" | sed 's/^Feature: //')
    tags=$(grep -Eo '\s@[^\s]+' "$file" | tr '\n' ' ')
    scenario=$(sed -n '/^[[:space:]]*[Ss]cenario:/,/^$/p' "$file" | sed 's/^ *//;s/ *$//' | head -n 1)
    dirname=$(dirname "$file")
    dirname=$(echo "$dirname" | sed 's|/Users/SMehta/Documents/GitHub/tw_hybris/tests|https://github.com/TotalWineLabs/tw_hybris/tree/automated-tests/tests%7C')
    basename=$(basename "$file")
    dirname="$dirname/$basename"
    team=""
    if [[ "$tags" == *"@Orderb"* ]]; then
        team="Law and Order"
    elif [[ "$tags" == *"@Upfunnel"* ]]; then
        team="UpFunnel"
    elif [[ "$tags" == *"@Cart"* ]]; then
        team="Cart & Checkout Crew"
    fi
    fedex=""
    if [[ "$tags" == *"@FedExDependent"* ]]; then
        fedex="FedEx Dependent"
    fi
    shipcompliance=""
    if [[ "$tags" == *"@ShipComplianceDependent"* ]]; then
        shipcompliance="Ship Compliance Dependent"
    fi
    csbackoffice=""
    if [[ "$tags" == *"@CSBackOffice"* ]]; then
        csbackoffice="CS Back Office"
    fi
    api=""
    if [[ "$tags" == *"@API"* ]]; then
        api="API"
    fi
    printf '%s,%s,%s,%s,%s,%s,%s,%s,%s\n' "$dirname" "$feature" "$tags" "$scenario" "$team" "$fedex" "$shipcompliance" "$csbackoffice" "$api"
done > "$filename"