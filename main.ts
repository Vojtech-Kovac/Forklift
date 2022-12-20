function right () {
    wuKong.setAllMotor(0, -15)
}
function left () {
    wuKong.setAllMotor(-15, 0)
}
input.onButtonPressed(Button.A, function () {
    PlanetX_AILens.learnObject(PlanetX_AILens.learnID.ID1)
})
input.onButtonPressed(Button.B, function () {
    PlanetX_AILens.ClearlearnObject()
})
function forward () {
    wuKong.setAllMotor(25, 25)
}
PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Things)
basic.forever(function () {
	
})
basic.forever(function () {
    if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID1)) {
        music.playMelody("A A A - - - - - ", 120)
    }
})
