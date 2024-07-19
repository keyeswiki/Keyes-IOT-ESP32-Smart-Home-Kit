'use strict';

//////////////////颜色/////////////////////
goog.provide('Blockly.Blocks.smart_home');

Blockly.Blocks.smart_home.HUE = 80;

goog.require('Blockly.Blocks');

/////////////////模拟输出//////////////////////

Blockly.Blocks.ke_a_Write = {
  init: function() {
    this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_ANALOGWRITE_PIN)
        .setCheck(Number);
    this.appendValueInput("NUM", Number)
        .appendField(Blockly.MIXLY_VALUE2)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_ANALOG_WRITE);
    this.setHelpUrl("");
  }
};



//////////////////LED////////////////
Blockly.Blocks.ke_led = {
  init: function() {
    this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.ke_LED)
        .appendField(new Blockly.FieldImage("../../media/keyes/ke_led_yellow.png", 43, 32));
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_STAT)
        .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
/////////////////蜂鸣器//////////////////////

var TONE_NOTES=[["NOTE_C3", "131"],["NOTE_D3", "147"],["NOTE_E3", "165"],["NOTE_F3", "175"],["NOTE_G3", "196"],["NOTE_A3", "220"],["NOTE_B3", "247"],
           ["NOTE_C4", "262"],["NOTE_D4", "294"],["NOTE_E4", "330"],["NOTE_F4", "349"],["NOTE_G4", "392"],["NOTE_A4", "440"],["NOTE_B4", "494"],
           ["NOTE_C5", "532"],["NOTE_D5", "587"],["NOTE_E5", "659"],["NOTE_F5", "698"],["NOTE_G5", "784"],["NOTE_A5", "880"],["NOTE_B5", "988"]];


Blockly.Blocks.ke_tone01 = {
   init: function() {
    this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(TONE_NOTES), 'STAT');
    this.setOutput(true, Number);
  }
};


Blockly.Blocks.ke_buzzer={
init:function(){
    this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_ke_BUZZER2)
        .appendField(new Blockly.FieldImage("../../media/keyes/ke_buzzer_w.png", 39, 32));  
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.appendValueInput('FREQUENCY')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.kids_tone);
    this.appendDummyInput("")
        .appendField(Blockly.kids_beat)
        .appendField(new Blockly.FieldDropdown([["1/8", "125"],["3/8", "375"],["1/4", "250"],["3/4", "750"],["1/2", "500"],["1", "1000"]]), 'DURATION');
    
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_TONE);
  }
};


///////////music////////////////////
Blockly.Blocks.ke_music = {
  init: function() {
    this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.kids_play_tone)
        .appendField(new Blockly.FieldImage("../../media/keyes/ke_buzzer_w.png", 39, 32));
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);   
    this.appendDummyInput("")
        //.appendField(new Blockly.FieldDropdown([["Birthday", "Birthday"],["City of Sky", "City of Sky"],["Ode to Joy", "Ode to Joy"]]), 'play');
        .appendField(new Blockly.FieldDropdown([['Birthday', 'Music.birthday();'],
        ['Tetris', 'Music.tetris();'],
        ['Ode to Joy', 'Music.Ode_to_Joy();'],
        ['Christmas', 'Music.christmas();'],
        ['Super mario', 'Music.super_mario();'],
        ['Star war tone', 'Music.star_war_tone();']]), 'play');
    
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
  }
};

////////////////////关闭蜂鸣器////////////////////////
Blockly.Blocks.ke_notone={
init:function(){
  this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.kids_notone)
        .appendField(new Blockly.FieldImage("../../media/keyes/ke_buzzer_w.png", 39, 32));
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);   
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
  }
};
  
////////////////////////电机///////////////////////////////////

Blockly.Blocks.ke_motor2 = {
  init: function() {
    this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_ke_MOTOR)
        .appendField(new Blockly.FieldImage("../../media/keyes/ke_fs.png", 43, 32));
    this.appendValueInput("PIN1", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.appendDummyInput("")
        .appendField('INA')
        .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT1");
    this.appendValueInput("PIN2", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.appendDummyInput("")
        .appendField('INB');
    this.appendValueInput("SPEED2", Number)
        .appendField(Blockly.MIXLY_MOTOR_ANALOG)
        .setCheck(Number);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

///////////////////////////舵机///////////////////////////////////
Blockly.Blocks.ke_servo = {
  init: function() {
    this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_ke_SERVO)
        .appendField(new Blockly.FieldImage("../../media/keyes/ke_servo.png", 70, 32))
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.appendValueInput("angle", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_DEGREE_0_180);
    this.appendValueInput("time", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_DELAY+'('+Blockly.MIXLY_DELAY_MS+')');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_SERVO_MOVE);
  }
};

Blockly.Blocks.ke_servo_r = {
  init: function() {
    this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_ke_SERVO)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_READ_DEGREES);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_SERVO_READ);
  }
};


///////////人体红外传感器////////////////////
Blockly.Blocks.ke_ir_g = {
  init: function() {
    this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_ke_IR_G)
        .appendField(new Blockly.FieldImage("../../media/keyes/ke_rentihongwai.png", 43, 32));
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////按键传感器////////////////////
Blockly.Blocks.ke_button = {
  init: function() {
    this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_ke_BUTTON)
        .appendField(new Blockly.FieldImage("../../media/keyes/ke_button.png", 43, 32));
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////烟雾数字传感器////////////////////
Blockly.Blocks.ke_smoke_D = {
  init: function() {
    this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_ke_SMOKE_DATA)
        .appendField(new Blockly.FieldImage("../../media/keyes/ke_gas.png", 60, 48));
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////水蒸气传感器///////////////
Blockly.Blocks.ke_steam = {
  init: function() {
    this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_ke_STEAM)
        .appendField(new Blockly.FieldImage("../../media/keyes/ke_steam.png", 50, 40));
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};
//////////烟雾传感器///////////////
Blockly.Blocks.ke_smoke = {
  init: function() {
    this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_ke_SMOKE_ANALOG)
        .appendField(new Blockly.FieldImage("../../media/keyes/ke_gas.png", 60, 48));
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};


var WHAT = [[Blockly.MIXLY_GETTEMPERATUE, 'temperature'], [Blockly.MIXLY_GETHUMIDITY, 'humidity']];

Blockly.Blocks.ke_DHT = {
  init: function () {
    this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([['DHT11', '11'], ['DHT21', '21'], ['DHT22', '22']]), 'TYPE')
        .appendField(new Blockly.FieldImage("../../media/keyes/ke_dht11.png", 50, 40))
        .appendField(Blockly.MIXLY_PIN)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendField(new Blockly.FieldDropdown(WHAT), "WHAT");
    this.setOutput(true, Number);
    var thisBlock = this;
    this.setTooltip(function () 
    {
      var op = thisBlock.getFieldValue('WHAT');
      var TOOLTIPS = {
        'temperature': Blockly.MIXLY_TOOLTIP_BLOCKGROUP_GET_TEM,
        'humidity': Blockly.MIXLY_TOOLTIP_BLOCKGROUP_GET_HUM
      };
      return TOOLTIPS[op];
    });
  }
};

//////////////////RGB灯////////////////////////////
Blockly.Blocks.RGB_color_seclet = {
  init: function () {
    this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldColour("ff0000"), "COLOR");
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.OLED_DRAW_PIXE_TOOLTIP);
  }
};

Blockly.Blocks.RGB_color_rgb = {
  init: function () {
    this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendValueInput("R")
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_RGB_R);
    this.appendValueInput("G")
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_RGB_G);
    this.appendValueInput("B")
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_RGB_B);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

var DISPLAY_RGB_TYPE = [
["NEO_GRB", "NEO_GRB"],
["NEO_RGB", "NEO_RGB"],
["NEO_RGBW", "NEO_RGBW"]
];

//RGB
Blockly.Blocks.display_rgb_init = {
init: function () {
  this.setColour(Blockly.Blocks.smart_home.HUE);
  this.appendDummyInput("")
      .appendField(Blockly.MIXLY_RGB+Blockly.MIXLY_SETUP)
      .appendField(Blockly.MIXLY_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendDummyInput("")
      .appendField(Blockly.MIXLY_MICROPYTHON_SOCKET_TYPE)
      .appendField(new Blockly.FieldDropdown(DISPLAY_RGB_TYPE), "TYPE");
  this.appendValueInput("LEDCOUNT")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_COUNT);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setTooltip('');
//  this.setFieldValue("12", "PIN");
}
};

Blockly.Blocks.display_rgb_Brightness = {
init: function () {
  this.setColour(Blockly.Blocks.smart_home.HUE);
  this.appendDummyInput("")
      .appendField(Blockly.MIXLY_RGB)
      .appendField(Blockly.MIXLY_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendValueInput("Brightness")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_BRIGHTNESS);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setTooltip('');
//  this.setFieldValue("12", "PIN");
}
};


Blockly.Blocks.display_rgb = {
init: function () {
  this.setColour(Blockly.Blocks.smart_home.HUE);
  this.appendDummyInput("")
      .appendField(Blockly.MIXLY_RGB)
      .appendField(Blockly.MIXLY_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendValueInput("_LED_")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_NUM);
  this.appendDummyInput("")
      .appendField(Blockly.Msg.HTML_COLOUR);
  this.appendValueInput("COLOR", Number)
      .setCheck(Number);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setTooltip('');
 // this.setFieldValue("12", "PIN");
}
};

Blockly.Blocks.display_rgb_show = {
init: function () {
  this.setColour(Blockly.Blocks.smart_home.HUE);
  this.appendDummyInput("")
      .appendField(Blockly.MIXLY_RGB_SHOW)
      .appendField(Blockly.MIXLY_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
      .setAlign(Blockly.ALIGN_RIGHT);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
}
};

var DISPLAY_RAINBOW_TYPE = [
[Blockly.MIXLY_RGB_DISPLAY_RAINBOW_TYPE_1, "normal"],
[Blockly.MIXLY_RGB_DISPLAY_RAINBOW_TYPE_2, "change"]
];


Blockly.Blocks.display_rgb_rainbow1 = {
init: function () {
  this.setColour(Blockly.Blocks.smart_home.HUE);
  this.appendDummyInput("")
      .appendField(Blockly.MIXLY_RGB)
      .appendField(Blockly.MIXLY_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendValueInput("WAIT")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGBdisplay_rgb_rainbow1);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
 // this.setFieldValue("12", "PIN");
}
};

Blockly.Blocks.display_rgb_rainbow3 = {
init: function () {
  this.setColour(Blockly.Blocks.smart_home.HUE);
  this.appendDummyInput("")
      .appendField(Blockly.MIXLY_RGB)
      .appendField(Blockly.MIXLY_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown(DISPLAY_RAINBOW_TYPE), "TYPE");
  this.appendValueInput("rainbow_color")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_display_rgb_rainbow3);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
 // this.setFieldValue("12", "PIN");
}
};

Blockly.Blocks.RGB_color_HSV = {
init: function () {
  this.setColour(Blockly.Blocks.smart_home.HUE);
  this.appendDummyInput("")
      .appendField(Blockly.MIXLY_RGB)
      .appendField(Blockly.MIXLY_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
      .setAlign(Blockly.ALIGN_RIGHT);
  this.appendValueInput("_LED_")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_RGB_NUM);
  this.appendValueInput("H")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.HSV_H);
  this.appendValueInput("S")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.HSV_S);
  this.appendValueInput("V")
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.HSV_V);
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setTooltip('色调范围0-65536;饱和度范围0-255;明度范围0-255');
}
};

///////////////////1602LCD IIC//////////////////////
Blockly.Blocks.group_lcd_init2 = {
  init: function () {
  this.setColour(Blockly.Blocks.smart_home.HUE);
  this.appendValueInput('device')
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_SETUP)
    .appendField(Blockly.MIXLY_DF_LCD)
    .appendField(new Blockly.FieldDropdown([['1602', '16,2'], ['2004', '20,4']]), 'TYPE')
    .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
    .appendField(Blockly.MIXLY_LCD_ADDRESS);
  this.appendDummyInput("")
    .appendField('SCL')
    .appendField(Blockly.MIXLY_PIN)
    .appendField(new Blockly.FieldDropdown(profile.default.digital), "SCL")
    .appendField('SDA')
    .appendField(Blockly.MIXLY_PIN)
    .appendField(new Blockly.FieldDropdown(profile.default.digital), "SDA");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setInputsInline(true);
  this.setTooltip(Blockly.MIXLY_TOOLTIP_LCD_INIT2);
  this.setFieldValue("SCL", "SCL");
  this.setFieldValue("SDA", "SDA");
  }
};


Blockly.Blocks.group_lcd_print = {
  init: function () {
    this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendValueInput("TEXT", String)
        .setCheck([String, Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_DF_LCD)
        .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
        .appendField(Blockly.MIXLY_LCD_PRINT1);
    this.appendValueInput("TEXT2", String)
        .setCheck([String, Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_PRINT2);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_LCD_PRINT);
        }
      };



Blockly.Blocks.group_lcd_power = {
  init: function () {
    this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_DF_LCD)
        .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ON, "display"], [Blockly.MIXLY_OFF, "noDisplay"], [Blockly.MIXLY_LCD_STAT_CURSOR, "cursor"], [Blockly.MIXLY_LCD_STAT_NOCURSOR, "noCursor"], [Blockly.MIXLY_LCD_STAT_BLINK, "blink"], [Blockly.MIXLY_LCD_STAT_NOBLINK, "noBlink"], [Blockly.MIXLY_LCD_STAT_CLEAR, "clear"], [Blockly.MIXLY_LCD_NOBACKLIGHT, "noBacklight"], [Blockly.MIXLY_LCD_BACKLIGHT, "backlight"]]), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_LCD_POWER);
        }
      };
  
//////////////////////RFID////////////////////////////
Blockly.Blocks.rc522_i2c_init = {
  init: function() {
    this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_rc522_iic_init)
        .appendField(new Blockly.FieldImage("../../media/keyes/rc522_iic.png", 60, 40));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks.rc522_i2c_read = {
  init: function() {
    this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_rc522_iic_read)
        .appendField(new Blockly.FieldImage("../../media/keyes/rc522_iic.png", 60, 40));
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

//////////////////////蓝牙////////////////////////////
Blockly.Blocks.ke_bluetooth = {
    init: function () {
      this.setColour(Blockly.Blocks.smart_home.HUE);
        this.appendValueInput("PIN1", Number)
            .appendField(new Blockly.FieldTextInput('val'), 'VAL')
            .appendField(Blockly.MIXLY_ke_BLUETOOTH)
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_bluetooth.png", 70, 32))
            .appendField("RX:")
            .setCheck(Number);
        this.appendValueInput("PIN2", Number)
            .appendField("TX:")
            .setCheck(Number);
        this.appendStatementInput('DO')
            .appendField(Blockly.MIXLY_ke_read);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip("bluetooth");
    },
    getVars: function () {
        return [this.getFieldValue('VAL')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAL')))
         {
            this.setTitleValue(newName, 'VAL');
        }
    }
};



////////////////////WIFI////////////////////////////

Blockly.Blocks.wifi_init = {
  init: function() {
    this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_WIFI_INIT);
        //.appendField(new Blockly.FieldImage("../../media/keyes/rc522_iic.png", 60, 40));
    this.appendValueInput("SSID", String)
        .setCheck([String, Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("SSID")
        .appendField(Blockly.MIXLY_WIFI_NAME);
    this.appendValueInput("PASSWD", String)
        .setCheck([String, Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("PASSWD")
        .appendField(Blockly.MIXLY_WIFI_PASSWORD);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};


Blockly.Blocks.wifi_read = {
  init: function() {
    this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_WIFI_READ);
        //.appendField(new Blockly.FieldImage("../../media/keyes/rc522_iic.png", 60, 40));
   
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

Blockly.Blocks.client_print = {
  init: function () {
  this.setColour(Blockly.Blocks.smart_home.HUE);
  this.appendDummyInput("")
      .appendField(Blockly.MIXLY_CLIENT_PRINT)
      .appendField(new Blockly.FieldDropdown([
    ["led_on", "turn on the LED"],
    ["led_off", "turn off the LED"],
    ["window_on", "open the window"],
    ["window_off", "close the window"],
    ["play_musis", "play music"],
    ["buzzer_on", "buzzer on"],
    ["buzzer_off", "buzzer off"],
    ["door_open", "open the door"],
    ["door_close", "close the door"],
    ["fan_on", "turn on the fan"],
    ["fan_off", "turn off the fan"],
    ["red_on", "red on"],
    ["red_off", "red off"],
    ["oringe_on", "oringe on"],
    ["oringe_off", "oringe off"],
    ["yellow_on", "yellow on"],
    ["yellow_off", "yellow off"],
    ["geeen_on", "green on"],
    ["green_off", "green off"],
    ["cyan_on", "cyan on"],
    ["cyan_off", "cyan off"],
    ["blue_on", "blue on"],
    ["blue_off", "blue off"],
    ["purple_on", "purple on"],
    ["purple_off", "purple off"],
    ["white_on", "white on"],
    ["white_off", "white off"],
    ["sfx1_on", "sfx1 on"],
    ["sfx1_off", "sfx1 off"],
    ["sfx2_on", "sfx2 on"],
    ["sfx2_off", "sfx2 off"],
    ["off", "off"],
    ["on", "on"],
    ["safety", "safety"],
    ["dangerous", "dangerous"],
    ["some_one", "someone"],
    ["no_one", "no one"]]), 'DATA');
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setTooltip();
  }
};


Blockly.Blocks.dht_print = {
  init: function () {
    this.setColour(Blockly.Blocks.smart_home.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_DHT_PRINT)  
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendField(new Blockly.FieldDropdown([

          ["temp_on", '.readTemperature()'],

          ["humidity_on", '.readHumidity()']]), 'SATA'); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    }
  };

  
