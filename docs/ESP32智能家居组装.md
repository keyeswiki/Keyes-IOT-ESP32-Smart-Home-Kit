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



⚠ <span style="color: rgb(255, 76, 65);">**特别注意：安装前需要调节舵机角度，我们需要将窗户的舵机调整到0度再安装。**。</span>

舵机角度初始化

⚠ <span style="color: rgb(255, 76, 65);">**特别提醒：舵机已经安装到椴木板上，就不需要再把舵机拆下来，直接将舵机的线材连接到舵机控制模块上对应的引脚上即可**。</span>

**校准舵机所需额外零件**

![D1](media/D1.png)

**接线图：**

| 舵机 | 舵机控制模块 |
| :--: | :----------: |
| 棕线 |      G       |
| 红线 |      V       |
| 橙线 |      S       |

| 舵机控制模块 | ESP32主控板 |
| :----------: | :---------: |
|      5V      |     5V      |
|      G       |     GND     |



![D2](media/D2.png)

**手指按下这个舵机控制模块上的按钮，舵机就可以转到90°位置。**

![D3](media/D3.png)

⚠ <span style="color: rgb(200, 70, 100);">**提醒：按照上面图示完成舵机角度的校准后，请将所接线拆除，无需保留。**</span>



安装（需按照下图姿态安装）

![](media/ABC1.png)

⚠️ <span style="color: rgb(255, 76, 65);">**若使用 M1.4×6 自攻螺丝时，如下图所示**</span>

![](media/100.png)



![](media/ABC2.png)

⚠️ **<span style="color: rgb(255, 76, 65);">特别注意：</span>需按照下图姿态安装齿轮**



![](media/ABC3.png)

**检查：**

(1) 亚克力板与舵机的齿轮结构是否有良好的接触和受力点。

(2) 舵机的齿轮结构上的固定螺钉的尖端是否卡在舵机的塑料外壳上。如果是，请将固定螺钉稍微松开，以免其尖端接触舵机。

![](media/ZnNc_35-1.png)

完成

![](media/99_3.jpg)

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
