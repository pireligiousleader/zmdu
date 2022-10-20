input.onButtonPressed(Button.A, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    control.waitMicros(4)
})
let an = 0
let an1 = 0
OLED.init(128, 64)
let a1 = 0
let a2 = 1
let an2 = a1 + a2
an1 = a2 + an1
basic.forever(function () {
    OLED.init(128, 64)
    an = an1 + an2
    OLED.writeNumNewLine(an)
    basic.pause(500)
    an2 = an1
    an1 = an
})
