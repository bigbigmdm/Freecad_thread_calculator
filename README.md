# Freecad_thread_calculator
Freecad_thread_calculator in easy thread tooth profile calculator for Freecad helix instrument.

![Example](/img/th_gaika.jpg)

When you need to add a threaded hole on your product in [FreeCad](https://github.com/FreeCAD/FreeCAD) you need to create the hole using a circle and draw the thread profile in a plane perpendicular to that circle. For example, if the circle is created in the `XY` plane, the tooth profile must be drawn in the `XZ` plane. 

Then you need to create a helix (If you want to add a protruding thread it will be the Additive helix tool - ![Additive](/img/helix_plus.png), if you want to cut a thread in a hole it will be the Subtractive Helix tool - ![Subtractive](/img/helix_minus.png). Here you have to specify the thread pitch and length and press the execute button. 

This tool allows you to show a drawing of the thread profile with dimensions. To use it, just select the thread outside diameter and pitch, then press the `Calculate` button and you will get four different drawings - yellow for a nut with Additive helix tool ![Additive](/img/helix_plus.png) tool, red for a nut with Subtractive Helix tool ![Subtractive](/img/helix_minus.png) tool, yellow for a bolt with Additive helix tool ![Additive](/img/helix_plus.png) tool and red for a bolt with Subtractive Helix tool ![Subtractive](/img/helix_minus.png) tool.

![Screenshot](/img/th_calc-m.png)

![Screenshot](/img/th_calc-i.png)

To use the tool - visit the web version of this repository [here](https://bigbigmdm.github.io/Freecad_thread_calculator/).

Examples of calculator operation for 0.5 inch size:

![Screenshot](/img/tst05inch-0.png)

![Screenshot](/img/tst05inch-1.jpg)

![Screenshot](/img/tst05inch-2.jpg)
