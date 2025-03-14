let Zufall = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (Zufall == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . # . # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (Zufall == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . # . # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
basic.forever(function () {
    Zufall = randint(0, 1)
    if (Zufall == 0) {
        basic.showLeds(`
            . . . . .
            # . # . .
            # . # . .
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . #
            . . # . #
            . . # . .
            . . # . .
            `)
    }
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
})
