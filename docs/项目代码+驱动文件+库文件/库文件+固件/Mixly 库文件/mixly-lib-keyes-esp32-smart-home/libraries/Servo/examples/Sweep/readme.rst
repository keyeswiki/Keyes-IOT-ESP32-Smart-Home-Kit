Sweep
=====

Sweeps the shaft of a RC `servo
motor <http://en.wikipedia.org/wiki/Servo_motor#RC_servos>`__ back and
forth across 180 degrees.

Hardware Required
-----------------

- Arduino Board
- Servo Motor
- Hook-up wires

Circuit
-------

Servo motors have three wires: power, ground, and signal. The power wire
is typically red, and should be connected to the 5V pin on the Arduino
or Genuino board. The ground wire is typically black or brown and should
be connected to a ground pin on the board. The signal pin is typically
yellow, orange or white and should be connected to pin 9 on the board.

|image1|

(Images developed using Fritzing. For more circuit examples, see the
`Fritzing project page <http://fritzing.org/projects/>`__)

Schematic
---------

|image2|

See also
--------

- `attach() </docs/api.md#attach>`__
- `write() </docs/api.md#write>`__
- `map() <https://www.arduino.cc/en/Reference/Map>`__
- `Servo library reference </docs/readme.md>`__
- `Knob <../Knob>`__ - Sweep the shaft of a servo motor back and forth

.. |image1| image:: images/sweep_bb.png
.. |image2| image:: images/sweep_schem.png
