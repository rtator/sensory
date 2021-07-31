let templev = 0
let lightlev = 0
let accellev = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(templev)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(lightlev)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(accellev)
})
basic.forever(function () {
    templev = input.temperature()
    accellev = input.acceleration(Dimension.Z)
    lightlev = input.lightLevel()
})
