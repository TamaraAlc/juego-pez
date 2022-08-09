gdjs.gameCode = {};
gdjs.gameCode.GDpezObjects1= [];
gdjs.gameCode.GDpezObjects2= [];
gdjs.gameCode.GDBackgroundObjects1= [];
gdjs.gameCode.GDBackgroundObjects2= [];
gdjs.gameCode.GDEnemigoObjects1= [];
gdjs.gameCode.GDEnemigoObjects2= [];
gdjs.gameCode.GDEnemigo2Objects1= [];
gdjs.gameCode.GDEnemigo2Objects2= [];
gdjs.gameCode.GDconchaObjects1= [];
gdjs.gameCode.GDconchaObjects2= [];
gdjs.gameCode.GDBurbujaObjects1= [];
gdjs.gameCode.GDBurbujaObjects2= [];
gdjs.gameCode.GDPuntuacionObjects1= [];
gdjs.gameCode.GDPuntuacionObjects2= [];
gdjs.gameCode.GDMetaObjects1= [];
gdjs.gameCode.GDMetaObjects2= [];

gdjs.gameCode.conditionTrue_0 = {val:false};
gdjs.gameCode.condition0IsTrue_0 = {val:false};
gdjs.gameCode.condition1IsTrue_0 = {val:false};
gdjs.gameCode.condition2IsTrue_0 = {val:false};
gdjs.gameCode.conditionTrue_1 = {val:false};
gdjs.gameCode.condition0IsTrue_1 = {val:false};
gdjs.gameCode.condition1IsTrue_1 = {val:false};
gdjs.gameCode.condition2IsTrue_1 = {val:false};


gdjs.gameCode.eventsList0 = function(runtimeScene) {

};gdjs.gameCode.eventsList1 = function(runtimeScene) {

};gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDBurbujaObjects1Objects = Hashtable.newFrom({"Burbuja": gdjs.gameCode.GDBurbujaObjects1});
gdjs.gameCode.eventsList2 = function(runtimeScene) {

};gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDBurbujaObjects1Objects = Hashtable.newFrom({"Burbuja": gdjs.gameCode.GDBurbujaObjects1});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDEnemigoObjects1Objects = Hashtable.newFrom({"Enemigo": gdjs.gameCode.GDEnemigoObjects1});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDBurbujaObjects1Objects = Hashtable.newFrom({"Burbuja": gdjs.gameCode.GDBurbujaObjects1});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDEnemigo2Objects1Objects = Hashtable.newFrom({"Enemigo2": gdjs.gameCode.GDEnemigo2Objects1});
gdjs.gameCode.eventsList3 = function(runtimeScene) {

};gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDpezObjects1Objects = Hashtable.newFrom({"pez": gdjs.gameCode.GDpezObjects1});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDconchaObjects1Objects = Hashtable.newFrom({"concha": gdjs.gameCode.GDconchaObjects1});
gdjs.gameCode.eventsList4 = function(runtimeScene) {

};gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDpezObjects1Objects = Hashtable.newFrom({"pez": gdjs.gameCode.GDpezObjects1});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDMetaObjects1Objects = Hashtable.newFrom({"Meta": gdjs.gameCode.GDMetaObjects1});
gdjs.gameCode.eventsList5 = function(runtimeScene) {

{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("pez"), gdjs.gameCode.GDpezObjects1);
{for(var i = 0, len = gdjs.gameCode.GDpezObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDpezObjects1[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{


gdjs.gameCode.eventsList0(runtimeScene);
}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("pez"), gdjs.gameCode.GDpezObjects1);
{for(var i = 0, len = gdjs.gameCode.GDpezObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDpezObjects1[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("pez"), gdjs.gameCode.GDpezObjects1);
{for(var i = 0, len = gdjs.gameCode.GDpezObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDpezObjects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("pez"), gdjs.gameCode.GDpezObjects1);
{for(var i = 0, len = gdjs.gameCode.GDpezObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDpezObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


{


gdjs.gameCode.eventsList1(runtimeScene);
}


{


{
}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
{gdjs.gameCode.conditionTrue_1 = gdjs.gameCode.condition1IsTrue_0;
gdjs.gameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8841308);
}
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("pez"), gdjs.gameCode.GDpezObjects1);
gdjs.gameCode.GDBurbujaObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDBurbujaObjects1Objects, (( gdjs.gameCode.GDpezObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDpezObjects1[0].getPointX("")), (( gdjs.gameCode.GDpezObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDpezObjects1[0].getPointY("")), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "sonido3.ogg", false, 40, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Burbuja"), gdjs.gameCode.GDBurbujaObjects1);
{for(var i = 0, len = gdjs.gameCode.GDBurbujaObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDBurbujaObjects1[i].addPolarForce(0, 500, 0);
}
}}

}


{


gdjs.gameCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Burbuja"), gdjs.gameCode.GDBurbujaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemigo"), gdjs.gameCode.GDEnemigoObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDBurbujaObjects1Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDEnemigoObjects1Objects, false, runtimeScene, false);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDBurbujaObjects1 */
/* Reuse gdjs.gameCode.GDEnemigoObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "sonido-muerte.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.gameCode.GDEnemigoObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDEnemigoObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDBurbujaObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDBurbujaObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Burbuja"), gdjs.gameCode.GDBurbujaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemigo2"), gdjs.gameCode.GDEnemigo2Objects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDBurbujaObjects1Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDEnemigo2Objects1Objects, false, runtimeScene, false);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDBurbujaObjects1 */
/* Reuse gdjs.gameCode.GDEnemigo2Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "sonido-muerte.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.gameCode.GDEnemigo2Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDEnemigo2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDBurbujaObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDBurbujaObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.gameCode.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("concha"), gdjs.gameCode.GDconchaObjects1);
gdjs.copyArray(runtimeScene.getObjects("pez"), gdjs.gameCode.GDpezObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDpezObjects1Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDconchaObjects1Objects, false, runtimeScene, false);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Puntuacion"), gdjs.gameCode.GDPuntuacionObjects1);
/* Reuse gdjs.gameCode.GDconchaObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "sonido-puntos.mp3", false, 60, 1);
}{for(var i = 0, len = gdjs.gameCode.GDconchaObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDconchaObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.gameCode.GDPuntuacionObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDPuntuacionObjects1[i].setString("Puntos: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


{
}

}


{


gdjs.gameCode.eventsList4(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("pez"), gdjs.gameCode.GDpezObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDpezObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDpezObjects1[i].getX() > 675 ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDpezObjects1[k] = gdjs.gameCode.GDpezObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDpezObjects1.length = k;}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDpezObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDpezObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDpezObjects1[i].getBehavior("TopDownMovement").setXVelocity(0);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fin", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Meta"), gdjs.gameCode.GDMetaObjects1);
gdjs.copyArray(runtimeScene.getObjects("pez"), gdjs.gameCode.GDpezObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDpezObjects1Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDMetaObjects1Objects, false, runtimeScene, false);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fin", false);
}}

}


{


{
}

}


{


{
}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDpezObjects1.length = 0;
gdjs.gameCode.GDpezObjects2.length = 0;
gdjs.gameCode.GDBackgroundObjects1.length = 0;
gdjs.gameCode.GDBackgroundObjects2.length = 0;
gdjs.gameCode.GDEnemigoObjects1.length = 0;
gdjs.gameCode.GDEnemigoObjects2.length = 0;
gdjs.gameCode.GDEnemigo2Objects1.length = 0;
gdjs.gameCode.GDEnemigo2Objects2.length = 0;
gdjs.gameCode.GDconchaObjects1.length = 0;
gdjs.gameCode.GDconchaObjects2.length = 0;
gdjs.gameCode.GDBurbujaObjects1.length = 0;
gdjs.gameCode.GDBurbujaObjects2.length = 0;
gdjs.gameCode.GDPuntuacionObjects1.length = 0;
gdjs.gameCode.GDPuntuacionObjects2.length = 0;
gdjs.gameCode.GDMetaObjects1.length = 0;
gdjs.gameCode.GDMetaObjects2.length = 0;

gdjs.gameCode.eventsList5(runtimeScene);
return;

}

gdjs['gameCode'] = gdjs.gameCode;
