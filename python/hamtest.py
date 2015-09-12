#!/usr/bin/pytho

import urllib2
import sys

import Adafruit_DHT


# Parse command line parameters.
sensor = Adafruit_DHT.DHT11
pin = 4

# Try to grab a sensor reading.  Use the read_retry method which will retry up
# to 15 times to get a sensor reading (waiting 2 seconds between each retry).
humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)

# Note that sometimes you won't get a reading and
# the results will be null (because Linux can't
# guarantee the timing of calls to read the sensor).  
# If this happens try again!
if humidity is not None and temperature is not None:
	print temperature
	sys.stdout.flush()
else:
	print 'Failed to get reading. Try again!'
