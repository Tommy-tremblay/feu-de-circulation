function jaune () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P8, 1)
})
function blanc () {
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function orange () {
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P0, 0)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
pins.digitalWritePin(DigitalPin.P16, 0)
pins.digitalWritePin(DigitalPin.P8, 1)
basic.forever(function () {
    vert()
    basic.pause(1000)
    jaune()
    basic.pause(500)
    rouge()
    basic.pause(1000)
})
