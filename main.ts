function jaune () {
    pins.digitalWritePin(DigitalPin.P1, 1)
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P0, 1)
}
basic.forever(function () {
    vert()
    if (true) {
    	
    }
})
