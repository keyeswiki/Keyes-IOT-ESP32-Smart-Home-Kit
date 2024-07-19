'use strict';

goog.provide('Blockly.Arduino.smart_home');

goog.require('Blockly.Arduino');



////////////////////模拟输出////////////////////

Blockly.Arduino.ke_a_Write= function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['include_analogWrite'] = '#include <analogWrite.h>';
  var code = 'analogWrite('+dropdown_pin+', '+value_num+');\n';
  return code;
};

////////////////////LED////////////////////
Blockly.Arduino.ke_led = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'
  return code;
};

////////////////////蜂鸣器////////////////////

Blockly.Arduino.ke_tone01 = function() {
  var code = this.getFieldValue('STAT');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

  Blockly.Arduino.ke_buzzer = function (block) {
      var pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
      var fre = Blockly.Arduino.valueToCode(block, 'FREQUENCY', Blockly.Arduino.ORDER_ATOMIC);
      var dur = this.getFieldValue('DURATION'); 

      Blockly.Arduino.definitions_['include_tone_init'] = '#include <ESP32Tone.h>\n';
      Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
      var code = 'tone('+pin+', '+fre+', '+dur+', 0);\n';
      return code;
  };

  Blockly.Arduino.ke_music = function (block) {
      var pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
      var play = this.getFieldValue('play');
      Blockly.Arduino.definitions_['include_music_init'] = '#include <ESP32Tone.h>\n#include<musicESP32.h>\n';

      Blockly.Arduino.definitions_[`music_${pin}`] = 'music Music('+pin+');';

      Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
  
      var code =  ''+play+'\n';
      return code;
    
  };

  Blockly.Arduino.ke_notone = function (block) {
      var pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
      Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
      
      var code = 'noTone('+pin+', 0);\n';
      return code;

  };

////////////////////电机////////////////////

Blockly.Arduino.ke_motor2 = function (block) {
  var pin1 = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
  var pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);
  //const val1 = Blockly.Arduino.valueToCode(block, 'SPEED1', Blockly.Arduino.ORDER_ATOMIC);
  var state1 = this.getFieldValue('STAT1');
  var val2 = Blockly.Arduino.valueToCode(this, 'SPEED2', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.setups_[`ke_motor2`] = 'pinMode('+pin1+', OUTPUT);\n  ledcSetup(5, 1200, 8);\n  ledcAttachPin('+pin2+', 5);\n';
  
  var code = 'digitalWrite('+pin1+','+state1+');\nledcWrite(5, '+val2+');\n';
  return code;

};



 ////////////////////舵机////////////////////
  Blockly.Arduino.ke_servo = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var value_degree = Blockly.Arduino.valueToCode(this, 'angle', Blockly.Arduino.ORDER_ATOMIC);
  //value_degree = value_degree.replace('(','').replace(')','')
  var delay_time = Blockly.Arduino.valueToCode(this, 'time', Blockly.Arduino.ORDER_ATOMIC) || '0'
  //delay_time = delay_time.replace('(','').replace(')','');
  
  Blockly.Arduino.definitions_['include_ESP32_Servo'] = '#include <ESP32_Servo.h>';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');';
  
  var code = 'servo_'+dropdown_pin+'.write('+value_degree+');\n'+'delay(' + delay_time + ');\n';
  return code;
};

Blockly.Arduino.ke_servo_r = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['include_ESP32_Servo'] = '#include <ESP32_Servo.h>';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');';
  
  var code = 'servo_'+dropdown_pin+'.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//////////////////////////数字传感器////////////////////////////////

Blockly.Arduino.ke_ir_g = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
 
/////////////////按键传感器////////////////
Blockly.Arduino.ke_button = Blockly.Arduino.ke_ir_g
/////////////////烟雾数字传感器/////////////////
Blockly.Arduino.ke_smoke_D = Blockly.Arduino.ke_ir_g

//////////////////////模拟传感器/////////////////////////
Blockly.Arduino.ke_sound = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

////////////////////水蒸气////////////////////
///
Blockly.Arduino.ke_steam = Blockly.Arduino.ke_sound;



////////////////////烟雾////////////////////

Blockly.Arduino.ke_smoke = Blockly.Arduino.ke_sound;


//////////////////////////DHT11///////////////////////////


Blockly.Arduino.ke_DHT = function () {
  var sensor_type = this.getFieldValue('TYPE');
  var dropdown_pin = this.getFieldValue('PIN');
  var what = this.getFieldValue('WHAT');
  Blockly.Arduino.definitions_['include_DHT'] = '#include <DHT.h>';
  Blockly.Arduino.definitions_['var_declare_dht' + dropdown_pin] = 'DHT dht'+dropdown_pin+'('+dropdown_pin+', '+sensor_type+');'
  Blockly.Arduino.setups_['DHT_SETUP'+dropdown_pin] = ' dht'+dropdown_pin+'.begin();';
  var code;
  if(what=="temperature")
    code= 'dht'+dropdown_pin+'.readTemperature()'
  else
    code= 'dht'+dropdown_pin+'.readHumidity()'
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}
////////////////////////////////////////////////////
//////////////////////////显示屏///////////////////
//////////////////////////////////////////////////////////

///////////////////////////RGB灯/////////////////
Blockly.Arduino.RGB_color_seclet = function () {
  var colour = this.getFieldValue('COLOR');
  colour = '0x' + colour.substring(1, colour.length);
  return [colour, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.RGB_color_rgb = function () {
  var R = Blockly.Arduino.valueToCode(this, 'R', Blockly.Arduino.ORDER_ATOMIC);
  var G = Blockly.Arduino.valueToCode(this, 'G', Blockly.Arduino.ORDER_ATOMIC);
  var B = Blockly.Arduino.valueToCode(this, 'B', Blockly.Arduino.ORDER_ATOMIC);
  var colour = "(("+R+" & 0xffffff) << 16) | (("+G+" & 0xffffff) << 8) | "+B;
  return [colour, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.display_rgb_init = function () {
  var dropdown_rgbpin = this.getFieldValue('PIN');
  var type = this.getFieldValue('TYPE');
  var value_ledcount = Blockly.Arduino.valueToCode(this, 'LEDCOUNT', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['include_Adafruit_NeoPixel'] = '#include <Adafruit_NeoPixel.h>';
  Blockly.Arduino.definitions_['var_declare_rgb_display' + dropdown_rgbpin] = 'Adafruit_NeoPixel rgb_display_' + dropdown_rgbpin + ' = Adafruit_NeoPixel(' + value_ledcount + ',' + dropdown_rgbpin + ','+type+' + NEO_KHZ800);';
  Blockly.Arduino.setups_['setup_rgb_display_begin_' + dropdown_rgbpin] = 'rgb_display_' + dropdown_rgbpin + '.begin();';
  return '';
};

Blockly.Arduino.display_rgb_Brightness = function () {
  var dropdown_rgbpin = this.getFieldValue('PIN');
  var Brightness = Blockly.Arduino.valueToCode(this, 'Brightness', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['include_Adafruit_NeoPixel'] = '#include <Adafruit_NeoPixel.h>';
  Blockly.Arduino.setups_['setup_rgb_display_begin_' + dropdown_rgbpin] = 'rgb_display_' + dropdown_rgbpin + '.begin();';
  var code = 'rgb_display_' + dropdown_rgbpin + '.setBrightness(' + Brightness + ');\n';
  return code;
};

Blockly.Arduino.display_rgb = function () {
  var dropdown_rgbpin = this.getFieldValue('PIN');
  var value_led = Blockly.Arduino.valueToCode(this, '_LED_', Blockly.Arduino.ORDER_ATOMIC);
  var Brightness = Blockly.Arduino.valueToCode(this, 'Brightness', Blockly.Arduino.ORDER_ATOMIC);
  var COLOR = Blockly.Arduino.valueToCode(this, 'COLOR', Blockly.Arduino.ORDER_ATOMIC);
  COLOR = COLOR.replace(/#/g, "0x");
  var code = 'rgb_display_' + dropdown_rgbpin + '.setPixelColor((' + value_led + ')-1, ' + COLOR + ');\n';
  return code;
};

Blockly.Arduino.RGB_color_HSV = function () {
  var dropdown_rgbpin = this.getFieldValue('PIN');
  var value_led = Blockly.Arduino.valueToCode(this, '_LED_', Blockly.Arduino.ORDER_ATOMIC);
  var H = Blockly.Arduino.valueToCode(this, 'H', Blockly.Arduino.ORDER_ATOMIC);
  var S= Blockly.Arduino.valueToCode(this, 'S', Blockly.Arduino.ORDER_ATOMIC);
  var V = Blockly.Arduino.valueToCode(this, 'V', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'rgb_display_' + dropdown_rgbpin + '.setPixelColor((' + value_led + ')-1, ' + 'rgb_display_' + dropdown_rgbpin + '.ColorHSV(' +H+','+S+','+V+ '));\n';
  return code;
};

Blockly.Arduino.display_rgb_show = function () {
  var board_type = JSFuncs.getPlatform();
  var dropdown_rgbpin = this.getFieldValue('PIN');
  var code = 'rgb_display_' + dropdown_rgbpin + '.show();\n';
  if (board_type.match(RegExp(/ESP32/))) {
    code+='rgb_display_' + dropdown_rgbpin + '.show();\n';
  }
  return code;
};

Blockly.Arduino.display_rgb_rainbow1 = function () {
  var dropdown_rgbpin = this.getFieldValue('PIN');
  var wait_time = Blockly.Arduino.valueToCode(this, 'WAIT', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_rgb_display_begin_' + dropdown_rgbpin] = 'rgb_display_' + dropdown_rgbpin + '.begin();\n';
  var funcName2 = 'Wheel';
  var code2 = 'uint32_t Wheel(byte WheelPos){\n'
  + '  if(WheelPos < 85){\n'
  + '    return rgb_display_' + dropdown_rgbpin + '.Color(WheelPos * 3, 255 - WheelPos * 3, 0);\n'
  + '  }\n'
  + '  else if(WheelPos < 170){\n'
  + '    WheelPos -= 85;\n'
  + '    return rgb_display_' + dropdown_rgbpin + '.Color(255 - WheelPos * 3, 0, WheelPos * 3);\n'
  + '  }\n '
  + '  else{\n'
  + '    WheelPos -= 170;\n'
  + '    return rgb_display_' + dropdown_rgbpin + '.Color(0, WheelPos * 3, 255 - WheelPos * 3);\n'
  + '  }\n'
  + '}\n';
  Blockly.Arduino.definitions_[funcName2] = code2;
  var funcName3 = 'rainbow';
  var code3 = 'void rainbow(uint8_t wait){\n'
  + '  uint16_t i, j;\n'
  + '  for(j=0; j<256; j++){\n'
  + '    for(i=0; i<rgb_display_' + dropdown_rgbpin + '.numPixels(); i++){\n'
  + '      rgb_display_' + dropdown_rgbpin + '.setPixelColor(i, Wheel((i+j) & 255));\n'
  + '    }\n'
  + '    rgb_display_' + dropdown_rgbpin + '.show();\n'
  + '    delay(wait);\n'
  + '  }\n'
  + '}\n';
  Blockly.Arduino.definitions_[funcName3] = code3;
  var code = 'rainbow(' + wait_time + ');\n'
  return code;
};

Blockly.Arduino.display_rgb_rainbow2 = function () {
  var dropdown_rgbpin = this.getFieldValue('PIN');
  var wait_time = Blockly.Arduino.valueToCode(this, 'WAIT', Blockly.Arduino.ORDER_ATOMIC);
  var funcName2 = 'Wheel';
  var code2 = 'uint32_t Wheel(byte WheelPos){\n'
  + '  if(WheelPos < 85){\n'
  + '    return rgb_display_' + dropdown_rgbpin + '.Color(WheelPos * 3, 255 - WheelPos * 3, 0);\n'
  + '  }\n'
  + '  else if(WheelPos < 170){\n'
  + '    WheelPos -= 85;\n'
  + '    return rgb_display_' + dropdown_rgbpin + '.Color(255 - WheelPos * 3, 0, WheelPos * 3);\n'
  + '  }\n'
  + '  else{\n'
  + '    WheelPos -= 170;\n'
  + '    return rgb_display_' + dropdown_rgbpin + '.Color(0, WheelPos * 3, 255 - WheelPos * 3);\n'
  + '  }\n'
  + '}\n';
  Blockly.Arduino.definitions_[funcName2] = code2;
  var funcName3 = 'rainbow';
  var code3 = 'void rainbow(uint8_t wait){\n'
  + '  uint16_t i, j;\n'
  + '  for(j=0; j<256; j++){\n'
  + '    for(i=0; i<rgb_display_' + dropdown_rgbpin + '.numPixels(); i++){\n'
  + '      rgb_display_' + dropdown_rgbpin + '.setPixelColor(i, Wheel((i+j) & 255));\n'
  + '    }\n'
  + '    rgb_display_' + dropdown_rgbpin + '.show();\n'
  + '    delay(wait);\n'
  + '  }\n'
  + '}\n';
  Blockly.Arduino.definitions_[funcName3] = code3;
  var funcName4 = 'rainbowCycle';
  var code4 = 'void rainbowCycle(uint8_t wait){\n'
  + '  uint16_t i, j;\n'
  + '  for(j=0; j<256*5; j++){\n'
  + '    for(i=0; i< rgb_display_' + dropdown_rgbpin + '.numPixels(); i++){\n'
  + '      rgb_display_' + dropdown_rgbpin + '.setPixelColor(i, Wheel(((i * 256 / rgb_display_' + dropdown_rgbpin + '.numPixels()) + j) & 255));\n'
  + '    }\n'
  + '    rgb_display_' + dropdown_rgbpin + '.show();\n'
  + '    delay(wait);\n'
  + '  }\n'
  + '}\n';
  Blockly.Arduino.definitions_[funcName4] = code4;
  var code = 'rainbowCycle(' + wait_time + ');\n'
  return code;
};

Blockly.Arduino.display_rgb_rainbow3 = function () {
  var dropdown_rgbpin = this.getFieldValue('PIN');
  var rainbow_color = Blockly.Arduino.valueToCode(this, 'rainbow_color', Blockly.Arduino.ORDER_ATOMIC);
  var type = this.getFieldValue('TYPE');
  var funcName2 = 'Wheel';
  var code2 = 'uint32_t Wheel(byte WheelPos){\n'
  + '  if(WheelPos < 85){\n'
  + '    return rgb_display_' + dropdown_rgbpin + '.Color(WheelPos * 3, 255 - WheelPos * 3, 0);\n'
  + '  }\n'
  + '  else if(WheelPos < 170){\n'
  + '    WheelPos -= 85;\n'
  + '    return rgb_display_' + dropdown_rgbpin + '.Color(255 - WheelPos * 3, 0, WheelPos * 3);\n'
  + '  }\n'
  + '  else{\n'
  + '    WheelPos -= 170;return rgb_display_' + dropdown_rgbpin + '.Color(0, WheelPos * 3, 255 - WheelPos * 3);\n'
  + '  }\n'
  + '}\n';
  Blockly.Arduino.definitions_[funcName2] = code2;
  if (type == "normal")
    var code3 = 'for(int RGB_RAINBOW_i = 0; RGB_RAINBOW_i < rgb_display_' + dropdown_rgbpin + '.numPixels(); RGB_RAINBOW_i++){\n'
  + '  rgb_display_' + dropdown_rgbpin + '.setPixelColor(RGB_RAINBOW_i, Wheel(' + rainbow_color + ' & 255));\n'
  + '}\n'
  + 'rgb_display_' + dropdown_rgbpin + '.show();\n';
  else
    var code3 = 'for(int RGB_RAINBOW_i = 0; RGB_RAINBOW_i < rgb_display_' + dropdown_rgbpin + '.numPixels(); RGB_RAINBOW_i++){\n'
  + '  rgb_display_' + dropdown_rgbpin + '.setPixelColor(RGB_RAINBOW_i, Wheel(((RGB_RAINBOW_i * 256 / rgb_display_' + dropdown_rgbpin + '.numPixels()) + ' + rainbow_color + ') & 255));\n'
  + '}\n'
  + 'rgb_display_' + dropdown_rgbpin + '.show();\n';
  return code3;
};


////////////////////////////////////lcd 1602////////////////////////////////////

Blockly.Arduino.group_lcd_init2 = function() {
  var varName = this.getFieldValue('VAR');
  var TYPE = this.getFieldValue('TYPE');
  var SCL = this.getFieldValue('SCL');
  var SDA = this.getFieldValue('SDA');
  var board_type = JSFuncs.getPlatform();
  var device = Blockly.Arduino.valueToCode(this, 'device', Blockly.Arduino.ORDER_ATOMIC) || '0x27';  
  if(SDA=="SDA"&&SCL=="SCL")
  {
    Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
    Blockly.Arduino.definitions_['include_LiquidCrystal_I2C'] = '#include <LiquidCrystal_I2C.h>';
    Blockly.Arduino.definitions_['var_declare_LiquidCrystal_I2C_'+varName] = 'LiquidCrystal_I2C '+varName+'('+device+','+TYPE+');';
  }
  else
  {
    if (board_type.match(RegExp(/AVR/))) {
      Blockly.Arduino.definitions_['include_SoftI2CMaster'] = '#include <SoftI2CMaster.h>';
      Blockly.Arduino.definitions_['include_LiquidCrystal_SoftI2C'] = '#include <LiquidCrystal_SoftI2C.h>';
      Blockly.Arduino.definitions_['var_declare_LiquidCrystal_SoftI2C_' + varName] = 'LiquidCrystal_SoftI2C ' + varName + '(' + device + ',' + TYPE + ',' + SCL + ',' + SDA + ');';
    }
    else{
      Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
      Blockly.Arduino.definitions_['include_LiquidCrystal_SoftI2C'] = '#include <LiquidCrystal_I2C.h>';
      Blockly.Arduino.definitions_['var_declare_LiquidCrystal_I2C_'+varName] = 'LiquidCrystal_I2C '+varName+'('+device+','+TYPE+');';
      Blockly.Arduino.setups_["setup_Wire"] ='Wire.begin(' +SDA+ ',' +SCL+ ');';
    }
  }
  Blockly.Arduino.setups_['setup_lcd_init_' + varName] = varName + '.init();';
  Blockly.Arduino.setups_['setup_lcd_backlight_' + varName] = varName + '.backlight();';    
  return '';
};



Blockly.Arduino.group_lcd_print = function() {
  var varName = this.getFieldValue('VAR');
  var str1 = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
  var str2 = Blockly.Arduino.valueToCode(this, 'TEXT2', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';

  var code = varName+'.setCursor(0, 0);\n'
  code+=varName+'.print('+str1+');\n';
  code+=varName+'.setCursor(0, 1);\n';
  code+=varName+'.print('+str2+');\n';  
  //code+=varName+'.setCursor(0, 2);\n';
  //code+=varName+'.print('+str3+');\n';
  //code+=varName+'.setCursor(0, 3);\n';
  //code+=varName+'.print('+str4+');\n';
  return code;
};



Blockly.Arduino.group_lcd_power = function() {
  var varName = this.getFieldValue('VAR');
  var dropdown_stat = this.getFieldValue('STAT');
  var code = varName+'.'+dropdown_stat+'();\n'
  return code;
};


////////////////////////////////通讯///////////////////////////////




//////////////////////RFID////////////////////////////
Blockly.Arduino.rc522_i2c_init = function() {
  Blockly.Arduino.definitions_['1include_rc522_iic_init'] = '#include <Wire.h>\n#include <MFRC522_I2C.h>\nMFRC522 mfrc522(0x28);\nString rfid_str = "";\n';
  Blockly.Arduino.definitions_['1include_rc522_iic_data'] = 'String return_rfid_data()\n'+
  '{\n'+
  '  if ( ! mfrc522.PICC_IsNewCardPresent() || ! mfrc522.PICC_ReadCardSerial() ) {\n'+
  '    delay(50);\n'+
  '    return "0";\n'+
  '  }\n'+
  '  rfid_str = "";\n'+
  '  for (byte i = 0; i < mfrc522.uid.size; i++) {\n'+
  '    rfid_str = rfid_str + String(mfrc522.uid.uidByte[i],HEX);\n'+
  '  }\n'+
  '  return rfid_str;\n'+
  '}\n';

  Blockly.Arduino.setups_['1setup_rc522_iic'] = 'Wire.begin();\nmfrc522.PCD_Init();\n';

  return '';
};


Blockly.Arduino.rc522_i2c_read = function () {
    return ['return_rfid_data()', Blockly.Arduino.ORDER_ATOMIC];
};


/////////////////////////////////////蓝牙////////////////////////////////////
Blockly.Arduino.ke_bluetooth = function () {
  var variable = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAL'), Blockly.Variables.NAME_TYPE);
  var val = this.getFieldValue('VAL');
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);


  Blockly.Arduino.definitions_['include_Soft'] = '#include <SoftwareSerial.h>\n';
  Blockly.Arduino.definitions_['mySerial'] = 'SoftwareSerial mySerial('+dropdown_pin1+', '+dropdown_pin2+');\n';
  Blockly.Arduino.definitions_['char'] = 'char '+val+';\n';

  Blockly.Arduino.setups_['mySerial23'] = 'mySerial.begin(9600);';

   var code = 'if (mySerial.available())\n{\n'+val+' = mySerial.read();\n';
   code += branch;
   code += '}\n';
  return code;
};

/////////////////////////////////////WIFI////////////////////////////////////
Blockly.Arduino.wifi_init = function (block) {
  var ssid = Blockly.Arduino.valueToCode(block, 'SSID', Blockly.Arduino.ORDER_ATOMIC);
  var passwd = Blockly.Arduino.valueToCode(block, 'PASSWD', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['wifi_init'] = '#include <WiFi.h>\n#include <ESPmDNS.h>\n#include <WiFiClient.h>\n';

  Blockly.Arduino.definitions_['wifi_init2'] = 'const char* ssid = '+ssid+';\nconst char* password = '+passwd+';\nWiFiServer server(80);\n';
  Blockly.Arduino.setups_['wifi_setup'] = 'Serial.begin(115200);\n   WiFi.begin(ssid, password);\n   while (WiFi.status() != WL_CONNECTED) {\n   delay(500);\n   Serial.print(".");\n    }\n    Serial.println("");\n    Serial.print("Connected to ");\n    Serial.println(ssid);\n    Serial.print("IP address: ");\n    Serial.println(WiFi.localIP());\n    server.begin();\n    Serial.println("TCP server started");\n    MDNS.addService("http", "tcp", 80);\n';
  
  return `WiFiClient client = server.available();\n    if (!client) {\n        return;\n    }\n    while(client.connected() && !client.available()){\n        delay(1);\n    }\n    String req = client.readStringUntil('\\r');\n    int addr_start = req.indexOf(' ');\n    int addr_end = req.indexOf(' ', addr_start + 1);\n    if (addr_start == -1 || addr_end == -1) {\n        Serial.print("Invalid request: ");\n        Serial.println(req);\n        return;\n    }\nreq = req.substring(addr_start + 1, addr_end);\n`;
  
};

Blockly.Arduino.wifi_read = function () {

  return [`req`, Blockly.Arduino.ORDER_ATOMIC];
  
};

Blockly.Arduino.client_print = function (block) {
   
  var data  = this.getFieldValue('DATA');

  var code = `client.println("${data}");\n`;

  return code;

};
Blockly.Arduino.dht_print = function (block) {
  var dropdown_pin = this.getFieldValue('PIN');
  var sata  = this.getFieldValue('SATA');

  var code = `client.println(${'dht'+dropdown_pin+sata});\n`;
  
  return code;

  return [];

};