function right () {
    wuKong.setAllMotor(0, -15)
}
function left () {
    wuKong.setAllMotor(-15, 0)
}
function forward () {
    wuKong.setAllMotor(25, 25)
}
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P15) == 0 && pins.digitalReadPin(DigitalPin.P14) == 0) {
        forward()
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1 && pins.digitalReadPin(DigitalPin.P14) == 0) {
        right()
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0 && pins.digitalReadPin(DigitalPin.P14) == 1) {
        left()
    }
})
