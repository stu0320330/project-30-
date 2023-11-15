input.onPinReleased(TouchPin.P2, function () {
    basic.showIcon(IconNames.Heart)
    for (let index = 0; index < 4; index++) {
        music.play(music.tonePlayable(sound_02, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        sound_02 += 25
    }
    sound_02 = 698
})
input.onPinReleased(TouchPin.P1, function () {
    basic.showIcon(IconNames.Heart)
    for (let index = 0; index < 4; index++) {
        music.play(music.tonePlayable(sound_01, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        sound_01 += 25
    }
    sound_01 = 440
})
let sound_02 = 0
let sound_01 = 0
sound_01 = 440
sound_02 = 698
basic.forever(function () {
	
})
