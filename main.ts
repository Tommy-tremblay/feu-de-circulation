function jaune () {
    pins.digitalWritePin(DigitalPin.P1, 1)
}
input.onButtonPressed(Button.A, function () {
	
})
function blanc () {
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function orange () {
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P0, 1)
}
loops.everyInterval(500, function () {
    vert()
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(5000)
    jaune()
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(1000)
    rouge()
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(5000)
})
basic.forever(function () {
    vert()
})
