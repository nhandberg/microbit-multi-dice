radio.onReceivedNumber(function (receivedNumber) {
    if (dice < receivedNumber) {
        basic.showIcon(IconNames.Sad)
    } else if (dice > receivedNumber) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Meh)
    }
    basic.pause(1000)
    basic.showNumber(dice)
})
input.onGesture(Gesture.Shake, function () {
    dice = randint(0, 10)
    basic.showNumber(dice)
    radio.sendNumber(dice)
})
let dice = 0
radio.setGroup(1)
