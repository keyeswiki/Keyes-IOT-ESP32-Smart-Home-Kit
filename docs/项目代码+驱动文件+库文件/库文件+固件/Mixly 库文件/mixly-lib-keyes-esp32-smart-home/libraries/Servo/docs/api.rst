Servo library
=============

Methods
-------

``attach()``
~~~~~~~~~~~~

Attach the Servo variable to a pin. Note that in Arduino 0016 and
earlier, the Servo library supports only servos on only two pins: 9 and
10.

Syntax
^^^^^^

::

   servo.attach(pin) 
   servo.attach(pin, min, max)

Parameters
^^^^^^^^^^

- *servo*: a variable of type ``Servo``
- *pin*: the number of the pin that the servo is attached to
- *min* (optional): the pulse width, in microseconds, corresponding to
  the minimum (0-degree) angle on the servo (defaults to 544)
- *max* (optional): the pulse width, in microseconds, corresponding to
  the maximum (180-degree) angle on the servo (defaults to 2400)

Example
^^^^^^^

::

   #include <Servo.h> 

   Servo myservo;

   void setup() 
   { 
     myservo.attach(9);
   } 

   void loop() {} 

See also
^^^^^^^^

- `attached() <#attached>`__
- `detach() <#detach>`__

``write()``
~~~~~~~~~~~

Writes a value to the servo, controlling the shaft accordingly. On a
standard servo, this will set the angle of the shaft (in degrees),
moving the shaft to that orientation. On a continuous rotation servo,
this will set the speed of the servo (with 0 being full-speed in one
direction, 180 being full speed in the other, and a value near 90 being
no movement).

.. _syntax-1:

Syntax
^^^^^^

::

   servo.write(angle)

.. _parameters-1:

Parameters
^^^^^^^^^^

- *servo*: a variable of type Servo
- *angle*: the value to write to the servo, from 0 to 180

.. _example-1:

Example
^^^^^^^

::

   #include <Servo.h> 

   Servo myservo;

   void setup() 
   { 
     myservo.attach(9);
     myservo.write(90);  // set servo to mid-point
   } 

   void loop() {} 

.. _see-also-1:

See also
^^^^^^^^

- `attach() <#attach>`__
- `read() <#read>`__

``writeMicroseconds()``
~~~~~~~~~~~~~~~~~~~~~~~

Writes a value in microseconds (uS) to the servo, controlling the shaft
accordingly. On a standard servo, this will set the angle of the shaft.
On standard servos a parameter value of 1000 is fully counter-clockwise,
2000 is fully clockwise, and 1500 is in the middle.

Note that some manufactures do not follow this standard very closely so
that servos often respond to values between 700 and 2300. Feel free to
increase these endpoints until the servo no longer continues to increase
its range. Note however that attempting to drive a servo past its
endpoints (often indicated by a growling sound) is a high-current state,
and should be avoided.

Continuous-rotation servos will respond to the writeMicrosecond function
in an analogous manner to the write function.

.. _syntax-2:

Syntax
^^^^^^

::

   servo.writeMicroseconds(uS)

.. _parameters-2:

Parameters
^^^^^^^^^^

- *servo*: a variable of type Servo
- *uS*: the value of the parameter in microseconds (int)

.. _example-2:

Example
^^^^^^^

::

   #include <Servo.h> 

   Servo myservo;

   void setup() 
   { 
     myservo.attach(9);
     myservo.writeMicroseconds(1500);  // set servo to mid-point
   } 

   void loop() {} 

.. _see-also-2:

See also
^^^^^^^^

- `attach() <#attach>`__
- `read() <#read>`__

``read()``
~~~~~~~~~~

Read the current angle of the servo (the value passed to the last call
to `write() <#write>`__).

.. _syntax-3:

Syntax
^^^^^^

::

   servo.read()

.. _parameters-3:

Parameters
^^^^^^^^^^

- *servo*: a variable of type ``Servo``

Returns
^^^^^^^

The angle of the servo, from 0 to 180 degrees.

.. _see-also-3:

See also
^^^^^^^^

- `write() <#write>`__

``attached()``
~~~~~~~~~~~~~~

Check whether the Servo variable is attached to a pin.

.. _syntax-4:

Syntax
^^^^^^

::

   servo.attached()

.. _parameters-4:

Parameters
^^^^^^^^^^

- *servo*: a variable of type ``Servo``

.. _returns-1:

Returns
^^^^^^^

``true`` if the servo is attached to pin; ``false`` otherwise.

.. _see-also-4:

See also
^^^^^^^^

- `attach() <#attach>`__
- `detach() <#detach>`__

``detach()``
~~~~~~~~~~~~

Detach the Servo variable from its pin. If all Servo variables are
detached, then pins 9 and 10 can be used for PWM output with
`analogWrite() <#analogwrite>`__.

.. _syntax-5:

Syntax
^^^^^^

::

   servo.detach()

.. _parameters-5:

Parameters
^^^^^^^^^^

- *servo*: a variable of type ``Servo``

.. _see-also-5:

See also
^^^^^^^^

- `attach() <#attach>`__
- `attached() <#attached>`__
