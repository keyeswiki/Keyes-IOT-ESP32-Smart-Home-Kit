MFRC522 i2c
===========

Code is compatible to Arduino and ESP8266 (NodeMCU)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Tested on https://electronics.semaf.at/MFRC522-i2c-Tiny-Breakout-Board
|MFRC522 i2c Breakout Board|

**Set the Pin for the RST and i2c address!**

.. code:: c++

   #define RST_PIN 6 // Arduino UNO
   // #define RST_PIN 14 // D5 on NodeMCU

   // 0x28 is i2c address of the NFC Reader. Check your address with i2cscanner if not match.
   MFRC522 mfrc522(0x28, RST_PIN);   // Create MFRC522 instance.

Thanks to @arozcan for the `MFRC522 i2c
Library <https://github.com/arozcan/MFRC522-I2C-Library>`__

.. |MFRC522 i2c Breakout Board| image:: https://cdn.semaf.at/media/image/product/1748/md/mfrc522-i2c-tiny-breakout-board.jpg
