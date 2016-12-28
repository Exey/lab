#!/bin/sh

#  buildcpp.sh
#  ExeyHatesCPP
#
#  Created by Exey Panteleev on 28/12/2016.

g++ -c exey.cpp
ar r lib_exey.a exey.o
