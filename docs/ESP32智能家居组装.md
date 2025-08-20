# 6. ESP32智能家居组装步骤

<span style="color: rgb(255, 76, 65);">**注意：**</span>这个套件的亚克力板使用时需要先撕去上面的保护膜。

![](media/A00.png)

**安装1**

安装所需零件

![](media/A1.png)

安装

![](media/A1-1.jpg)

完成

![](media/A1-2.jpg)

**安装2**

安装所需零件

![](media/A2.png)

安装

![](media/A2-1.png)

完成

![](media/A2-2.jpg)

**安装3**

安装所需零件

![](media/A3.png)

安装（注意电池盒线材朝下安装）

![](media/A3-1.jpg)

完成

![](media/A3-2.jpg)

**安装4**

安装所需零件

![](media/A4.png)

安装

![](media/A4-1.png)

完成

![](media/A4-2.png)

**安装5**

安装所需零件

![](media/A5.png)

安装

![](media/A5-1.png)

完成

![](media/A5-2.png)

**安装6**

安装所需零件

![](media/A6.png)

安装（<span style="color: rgb(255, 76, 65);">注意自锁螺母不可拧紧</span>）

![](media/A6-1.png)

完成

![](media/A6-2.png)

**安装7**

安装所需零件

![](media/99_1.png)

⚠️ <span style="color: rgb(255, 76, 65);">**安装前需要调节舵机角度，我们需要将窗户的舵机调整到0度再安装**</span>

|    舵机    |     主板     |
| :---------: | :---------: |
| 棕线  |      G      |
|  红线   |     V      |
| 橙黄线 | IO5 |

![Img](./media/A7.png)


⚠️ 请先下载调节窗户上舵机角度的代码：[窗户上的舵机初始化角度_代码](./窗户上的舵机初始化角度_代码.7z)，保存至您方便使用的路径下。

![Img](./media/A7-1.png)

⚠️ **特别提醒: 以下四种方法，根据自己的情况自由选择。**

**方法一：Arduino 代码**

<span style="color: rgb(255, 76, 65);">**⚠️特别提示:** </span> 在编写代码并上传之前，必须安装Arduino IDE，请进入链接：[Arduino IDE开发环境设置](https://www.keyesrobot.cn/projects/KE3050/zh-cn/latest/docs/Arduino%20%E6%95%99%E7%A8%8B.html#arduino-ide)

```c++
/*
 * 文件名 : window_servo
 * 功能   : 初始化舵机的角度为0°
 * 编译IDE：ARDUINO IDE
 * 作者   : https://www.keyesrobot.cn/
*/

#include <ESP32Servo.h>
Servo myservo;
#define servoPin 5

void setup() {
  myservo.attach(servoPin,500,2500);
  myservo.write(0);
  delay(300);
  myservo.write(90);
  delay(300);
  myservo.write(0);
  delay(300);
}

void loop() {
  // put your main code here, to run repeatedly:
}

```
如何得到它？

资料提供了调整窗户舵机的代码，请打开并烧录到主板，如下图所示。在文件夹 **..\窗户上的舵机初始化角度_代码** ，打开文件**window_servo.ino**。或将上述测试代码复制粘贴到Arduino IDE中。

![Img](./media/A7-2.png)

将上述测试代码上传至主板之后，未发现舵机转动，可以按下主板上的复位键。

**方法二：Python 代码**

<span style="color: rgb(255, 76, 65);">**⚠️特别提示:** </span> 在编写代码并上传之前，必须安装 Thonny IDE，请进入链接：[Thonny IDE开发环境设置](https://www.keyesrobot.cn/projects/KE3050/zh-cn/latest/docs/Python%20%E6%95%99%E7%A8%8B.html#thonny-ide)

```python
# 作者 : www.keyes-robot.com

from machine import Pin, PWM
import time
pwm = PWM(Pin(5))  
pwm.freq(50)

'''
与角度对应的占空比 
0°----2.5%----25
45°----5%----51.2
90°----7.5%----77
135°----10%----102.4
180°----12.5%----128
'''
angle_0 = 25
angle_90 = 77
angle_180 = 128

pwm.duty(angle_0)
time.sleep(1)
pwm.duty(angle_90)
time.sleep(1)
pwm.duty(angle_0)
time.sleep(1)

# while True:
```
如何得到它？

资料提供了调整窗户舵机的代码，请打开并烧录到主板，如下图所示。在文件夹 **..\窗户上的舵机初始化角度_代码** ，打开文件**window_servo.py**。或将上述测试代码复制粘贴到Thonny IDE中。

![Img](./media/A7-3.png)

单击![Img](./media/WORK.png)运行上述测试代码，未发现舵机转动，可以按下主板上的复位键。

**方法三：Mixly 代码**

<span style="color: rgb(255, 76, 65);">**⚠️特别提示:** </span> 在编写代码并上传之前，必须安装 Mixly IDE，请进入链接：[Mixly IDE开发环境设置](https://www.keyesrobot.cn/projects/KE3050/zh-cn/latest/docs/Mixly%20%E6%95%99%E7%A8%8B.html#mixly-ide)

![Img](./media/A7-4.png)

如何得到它？

资料提供了调整窗户舵机的代码，请打开并烧录到主板，如下图所示。在文件夹 **..\窗户上的舵机初始化角度_代码** ，使用 Mixly IDE 打开文件**window_servo.mix**。或在Mixly IDE中直接拖动代码块编写上述测试代码。

![Img](./media/A7-5.png)

上传上述测试代码，未发现舵机转动，可以按下主板上的复位键。

**方法四：KidsBlock(Scratch) 代码**

<span style="color: rgb(255, 76, 65);">**⚠️特别提示:** </span> 在编写代码并上传之前，必须安装 KidsBlock IDE，请进入链接：[KidsBlock IDE开发环境设置](https://www.keyesrobot.cn/projects/KE3050/zh-cn/latest/docs/KidsBlock%28Scratch%29%20%E6%95%99%E7%A8%8B.html#kidsblock-ide)

![Img](./media/A7-6.png)

如何得到它？

资料提供了调整窗户舵机的代码，请打开并烧录到主板，如下图所示。在文件夹 **..\窗户上的舵机初始化角度_代码** ，使用 KidsBlock IDE 打开文件**window_servo.sb3**。或在KidsBlock IDE中直接拖动代码块编写上述测试代码。

![Img](./media/A7-7.png)

上传上述测试代码，未发现舵机转动，可以按下主板上的复位键。


安装（需按照下图姿态安装）

![](media/99_2.png)

<span style="background: rgb(255, 251, 0);">若使用为M1.4*6MM自攻螺丝时，如下图</span>

![](media/100.png)

完成

![](media/99_3.png)

**安装8**

安装所需零件

![](media/A8.png)

安装

![](media/A8-1.png)

完成

![](media/A8-2.png)

**安装9**

安装所需零件

![](media/A9.png)

安装

![](media/A9-1.png)

完成

![](media/A9-2.png)

**安装10**

安装所需零件

![](media/A10.png)

安装

![](media/A10-1.png)

完成

![](media/A10-2.png)

**安装11**

安装所需零件

![](media/A11.jpg)

安装

![](media/A11-1.jpg)

完成

![](media/A11-2.jpg)

**安装12**

安装所需零件

![](media/A12.jpg)

安装

![](media/A12-1.jpg)

完成

![](media/A12-2.jpg)

**安装13**

安装所需零件

![](media/A13.jpg)

安装

![](media/A13-1.jpg)

完成

![](media/A13-2.jpg)

**安装14**

安装所需零件

![](media/A14.jpg)

安装

![](media/A14-1.jpg)

完成

![](media/A14-2.jpg)

**安装15**

安装所需零件

![](media/A15.jpg)

安装

![](media/A15-1.jpg)

完成

![](media/A15-2.jpg)

**安装16**

安装所需零件

![](media/A16.jpg)

安装

![](media/A16-1.jpg)

完成

![](media/A16-2.jpg)

**安装17**

安装所需零件

![](media/A17.jpg)

安装

![](media/A17-1.jpg)

完成

![](media/A17-2.png)

**安装18**

安装所需零件

![](media/A18.jpg)

安装

![](media/A18-1.jpg)

完成

![](media/A18-2.jpg)

**安装19**

安装所需零件

![](media/A19.jpg)

安装

![](media/A19-1.jpg)

完成

![](media/A19-2.jpg)

**接线部分**


将温湿度模块接到io17接口

![](media/A20.png)

![](media/A21.png)

将黄色led模块接到io12接口

![](media/A22.png)

![](media/A23.png)

将水滴传感器接到io34接口

![](media/A24.png)

![Img](./media/A25.png)

风扇模块接线(IN+对应io19，IN-对应io18）使用的杜邦线：4根散开的杜邦线

![](media/A26.png)

![Img](./media/A27.png)


将人体红外传感器接到io14接口

![](media/A28.png)

![Img](./media/A29.png)

将左边按键模块接到io16接口

![](media/A30.png)

![Img](./media/A31.png)


将右边按键模块接到io27接口

![](media/A32.png)

![Img](./media/A33.png)


将RFID模块接到IIC接口

![](media/A34.png)

![](media/A35.png)

将LCD1602显示屏接到IIC接口

![](media/A36.png)

![Img](./media/A37.png)


将6812RGB灯接到io26接口

![](media/A38.png)

![Img](./media/A39.png)


将气体传感器的白线接到io23接口，棕线不用接。

![](media/A40.png)

![Img](./media/A41.png)

将蜂鸣器接到io25接口

![](media/A42.png)

![Img](./media/A43.png)


将控制窗户的舵机接到io5接口

![Img](./media/A44.png)


![Img](./media/A45.png)


将控制门的舵机接到io13接口

![](media/A46.png)

![Img](./media/A47.png)

电源接线

![Img](./media/A48.png)


**安装20**

安装所需零件

![](media/A49.jpg)

安装

![](media/A50.jpg)

完成

![](media/A51.jpg)

安装所需零件

![](media/A52.jpg)

安装

![](media/A53.jpg)

完成

![](media/A54.jpg)
