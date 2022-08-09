gdjs.FinCode = {};
gdjs.FinCode.GDNewSpriteObjects1= [];
gdjs.FinCode.GDNewSpriteObjects2= [];
gdjs.FinCode.GDNewSprite2Objects1= [];
gdjs.FinCode.GDNewSprite2Objects2= [];
gdjs.FinCode.GDNewSprite3Objects1= [];
gdjs.FinCode.GDNewSprite3Objects2= [];
gdjs.FinCode.GDNewSprite4Objects1= [];
gdjs.FinCode.GDNewSprite4Objects2= [];

gdjs.FinCode.conditionTrue_0 = {val:false};
gdjs.FinCode.condition0IsTrue_0 = {val:false};
gdjs.FinCode.condition1IsTrue_0 = {val:false};
gdjs.FinCode.condition2IsTrue_0 = {val:false};
gdjs.FinCode.condition3IsTrue_0 = {val:false};
gdjs.FinCode.conditionTrue_1 = {val:false};
gdjs.FinCode.condition0IsTrue_1 = {val:false};
gdjs.FinCode.condition1IsTrue_1 = {val:false};
gdjs.FinCode.condition2IsTrue_1 = {val:false};
gdjs.FinCode.condition3IsTrue_1 = {val:false};


gdjs.FinCode.eventsList0 = function(runtimeScene) {

};gdjs.FinCode.mapOfGDgdjs_46FinCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.FinCode.GDNewSpriteObjects1});
gdjs.FinCode.eventsList1 = function(runtimeScene) {

{


{
}

}


{


gdjs.FinCode.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.FinCode.GDNewSprite3Objects1);

gdjs.FinCode.condition0IsTrue_0.val = false;
gdjs.FinCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FinCode.GDNewSprite3Objects1.length;i<l;++i) {
    if ( gdjs.FinCode.GDNewSprite3Objects1[i].getY() > 120 ) {
        gdjs.FinCode.condition0IsTrue_0.val = true;
        gdjs.FinCode.GDNewSprite3Objects1[k] = gdjs.FinCode.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs.FinCode.GDNewSprite3Objects1.length = k;}if ( gdjs.FinCode.condition0IsTrue_0.val ) {
{
{gdjs.FinCode.conditionTrue_1 = gdjs.FinCode.condition1IsTrue_0;
gdjs.FinCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9872028);
}
}}
if (gdjs.FinCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.FinCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.FinCode.GDNewSprite2Objects1);
/* Reuse gdjs.FinCode.GDNewSprite3Objects1 */
{for(var i = 0, len = gdjs.FinCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.FinCode.GDNewSprite3Objects1[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs.FinCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.FinCode.GDNewSprite2Objects1[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs.FinCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.FinCode.GDNewSpriteObjects1[i].activateBehavior("SineMovement", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.FinCode.GDNewSpriteObjects1);

gdjs.FinCode.condition0IsTrue_0.val = false;
gdjs.FinCode.condition1IsTrue_0.val = false;
gdjs.FinCode.condition2IsTrue_0.val = false;
{
gdjs.FinCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FinCode.mapOfGDgdjs_46FinCode_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if ( gdjs.FinCode.condition0IsTrue_0.val ) {
{
gdjs.FinCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.FinCode.condition1IsTrue_0.val ) {
{
{gdjs.FinCode.conditionTrue_1 = gdjs.FinCode.condition2IsTrue_0;
gdjs.FinCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11609044);
}
}}
}
if (gdjs.FinCode.condition2IsTrue_0.val) {
/* Reuse gdjs.FinCode.GDNewSpriteObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.FinCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.FinCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.FinCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.FinCode.GDNewSprite3Objects1[i].activateBehavior("SineMovement", true);
}
}{for(var i = 0, len = gdjs.FinCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.FinCode.GDNewSpriteObjects1[i].activateBehavior("SineMovement", true);
}
}{for(var i = 0, len = gdjs.FinCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.FinCode.GDNewSprite2Objects1[i].activateBehavior("SineMovement", true);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.FinCode.GDNewSprite3Objects1);

gdjs.FinCode.condition0IsTrue_0.val = false;
gdjs.FinCode.condition1IsTrue_0.val = false;
gdjs.FinCode.condition2IsTrue_0.val = false;
{
gdjs.FinCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.FinCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.FinCode.GDNewSprite3Objects1.length;i<l;++i) {
    if ( gdjs.FinCode.GDNewSprite3Objects1[i].getCenterYInScene() < -(337) ) {
        gdjs.FinCode.condition1IsTrue_0.val = true;
        gdjs.FinCode.GDNewSprite3Objects1[k] = gdjs.FinCode.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs.FinCode.GDNewSprite3Objects1.length = k;}if ( gdjs.FinCode.condition1IsTrue_0.val ) {
{
{gdjs.FinCode.conditionTrue_1 = gdjs.FinCode.condition2IsTrue_0;
gdjs.FinCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11610348);
}
}}
}
if (gdjs.FinCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


};

gdjs.FinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FinCode.GDNewSpriteObjects1.length = 0;
gdjs.FinCode.GDNewSpriteObjects2.length = 0;
gdjs.FinCode.GDNewSprite2Objects1.length = 0;
gdjs.FinCode.GDNewSprite2Objects2.length = 0;
gdjs.FinCode.GDNewSprite3Objects1.length = 0;
gdjs.FinCode.GDNewSprite3Objects2.length = 0;
gdjs.FinCode.GDNewSprite4Objects1.length = 0;
gdjs.FinCode.GDNewSprite4Objects2.length = 0;

gdjs.FinCode.eventsList1(runtimeScene);
return;

}

gdjs['FinCode'] = gdjs.FinCode;
