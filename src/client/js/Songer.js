class SongerClass {

	constructor(){
		this.audio = $('audio').get(0)
		this.LoadUserState()
	}

	Pause(){
		this.audio.pause()
		this.$current.removeClass('playing').addClass('paused')
	}

	Stop(){
		this.audio.pause()
		if(this.$current) 
			this.$current.removeClass('paused').removeClass('playing')
	}

	Play($song){
		this.audio.load()
		this.audio.play()
		this.$current = $song
		this.$current.removeClass('paused').addClass('playing')

		store.set('lastPlayedSongID', $song.attr('song-id'))
	}

	TouchClip($newSong){

		// if($newSong.hasClass('paused'))
		// 	return this.Play($newSong)
		// if ($newSong.hasClass('playing'))
		// 	return this.Pause()
	

		this.Stop()
		
		this.SetAudioClip('static/music/'+$newSong.text()+'.mp3')
		
		this.Play($newSong)

	}

	SetAudioClip(path){
		$(this.audio).attr('src', path)
	}

	SetVolume(volume){
		volume = volume < 0.0001 ? 0 : volume
		this.audio.volume = this.volume = volume

		store.set('volume', volume)
	}

	LoadUserState(){

		var _rawVol = store.get('volume')
		this.audio.volume = _rawVol === undefined ? 0.1 : _rawVol
		$('.pisya').css('left', $('.volume').width() * this.audio.volume)

		this.TouchClip(store.get('lastPlayedSongID') === undefined ?
				$('.song-name').first() :
				$('.song-name[song-id='+store.get('lastPlayedSongID')+']'))
		

	}

	PlayNext(){
		this.TouchClip(this.$current.next())
	}

}

var Songer = new SongerClass()

$('.song-name').on('click', function(e) {

	if($(this).hasClass('playing')){
		if($(this) !== undefined)
			Songer.audio.currentTime = e.offsetX / $(this).width() * Songer.audio.duration
		return
	}

	Songer.TouchClip($(this))

})

$('.volume').on('click', function(e) {

	$('.pisya').css('left',  e.offsetX)
	var calcVol = e.offsetX / $(this).width()
	Songer.SetVolume(calcVol)
})

Songer.audio.onended = function() {
	console.log('Next song begins...')
	Songer.PlayNext()
}