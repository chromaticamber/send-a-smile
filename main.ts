input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("hallo")
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Happy)
})
radio.setGroup(3)
