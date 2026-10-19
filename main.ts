input.onButtonPressed(Button.A, function () {
    if (stato == 0) {
        stato = 1
        basic.showIcon(IconNames.Diamond)
    }
})
input.onButtonPressed(Button.AB, function () {
    stato = 0
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, function () {
    if (stato == 1) {
        stato = 2
        basic.showIcon(IconNames.Yes)
    }
})
let stato = 0
basic.showIcon(IconNames.No)
