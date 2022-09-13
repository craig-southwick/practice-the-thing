let Findly = 0
let I_HUMAN_er_number = 0
input.onButtonPressed(Button.A, function () {
    Findly = randint(0, 1)
    if (Findly == 0) {
        basic.showString("Dare")
    }
    if (Findly == 1) {
        basic.showString("Truth")
    }
})
input.onButtonPressed(Button.B, function () {
    I_HUMAN_er_number = randint(0, 3)
    if (I_HUMAN_er_number == 0) {
        basic.showArrow(ArrowNames.South)
    }
    if (I_HUMAN_er_number == 1) {
        basic.showArrow(ArrowNames.North)
    }
    if (I_HUMAN_er_number == 2) {
        basic.showArrow(ArrowNames.East)
    }
    if (I_HUMAN_er_number == 3) {
        basic.showArrow(ArrowNames.West)
    }
})
