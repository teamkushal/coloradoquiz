#!/bin/bash

END=4000

for i in $(seq 1 $END)
do time ng generate service experiment/Experimental$i
done
