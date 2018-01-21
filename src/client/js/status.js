// Server status

var config = require('../cfg.json')

checkStatus()

function checkStatus() {
	$.getJSON('https://api.mcsrvstat.us/1/' + config.ip, function(s){
		console.log(s)
		setStatus(s)
	})
}

function setStatus(s) {



	$('.status').text(!s.offline 
					? s.players.online + '/' + s.players.max 
					: 'ОФФЛАЙН')

	$('.status').css('color', !s.offline ? 'lightgreen' : 'red')

	if(s.players.list !== undefined)
		$('.players .list').append(TreatNicks(s.players.list))
	else $('.players').hide()
}

function TreatNicks(list) {
	return list.map(function(e,i,a) {
		var treatedNick = ''
		config.nicknames.admin.forEach(function(admin) {
			if(e === admin) 
				e = $('<span>').css('color', config.nicknames.adminColor).text(e).append(', ')
		})		
		config.nicknames.cunts.forEach(function(cunt) {
			if(e === cunt) 
				e = $('<span>').css('color', config.nicknames.cuntColor).text(e).append(', ')
		})

		return typeof e === 'string' ? e + ', ' : e
	})
}
