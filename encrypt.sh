#!/bin/bash

read -p "Enter the file name to encrypt: " INPUT_FILE

if [ ! -f "$INPUT_FILE" ]; then
  echo "Error: File '$INPUT_FILE' not found."
  exit 1
fi

read -s -p "Enter the encryption password: " PASSWORD
echo
read -s -p "Confirm the encryption password: " PASSWORD_CONFIRM
echo

if [ "$PASSWORD" != "$PASSWORD_CONFIRM" ]; then
  echo "Error: Passwords do not match."
  exit 1
fi

OUTPUT_FILE="${INPUT_FILE}.enc"

openssl enc -aes-256-cbc -salt -pbkdf2 -iter 100000 \
  -in "$INPUT_FILE" \
  -out "$OUTPUT_FILE" \
  -pass pass:"$PASSWORD"

if [ $? -eq 0 ]; then
  echo "File encrypted successfully: $OUTPUT_FILE"
else
  echo "Encryption failed."
  exit 1
fi
