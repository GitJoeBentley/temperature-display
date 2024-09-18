input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    input.setSoundThreshold(SoundThreshold.Loud, 128)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Square)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
})
