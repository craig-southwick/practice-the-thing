input.onGesture(Gesture.Shake, function () {
    I_HUMAN_er_number = randint(0, 3)
    if (I_HUMAN_er_number == 0) {
        basic.showString("For the most wanted man in the sector you ain't that hard to find.")
    }
    if (I_HUMAN_er_number == 1) {
        basic.showString("With a woman like that, there is only one thing TOO do.")
    }
    if (I_HUMAN_er_number == 2) {
        basic.showString("40,000 gigawatts The power of the sun at your fingertips")
    }
    if (I_HUMAN_er_number == 3) {
        basic.showString("I'm a bad bad man")
    }
})
let I_HUMAN_er_number = 0
basic.showString("For random Tychus quote's shake.")
