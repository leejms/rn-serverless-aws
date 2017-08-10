#!/bin/bash
OLDIFS=$IFS
IFS=","
while read f1 f2 f3 f4 f5
do
        USER=$f1
        ACCESS_KEY=$f3
        SECRET=$f4
done < credentials.csv
IFS=$OLDIFS
echo 'Dploying for user '$USER
export AWS_ACCESS_KEY_ID=$ACCESS_KEY
export AWS_SECRET_ACCESS_KEY=$SECRET
serverless deploy