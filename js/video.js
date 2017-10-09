
var video = document.getElementById('video')
video.volume = 0.5
$('.vol').css('width',35)
$('.volPoint').css('left',30)

$('.iconfont').eq(0).on('click', function(){
	$('.iconfont').eq(1).css('display', 'block')
	$(this).css('display','none')
	video.play()
})

$('.iconfont').eq(1).on('click', function(){
	$('.iconfont').eq(0).css('display', 'block')
	$(this).css('display','none')
	video.pause()
})

$('.iconfont').eq(2).on('click',function(){
	video.webkitRequestFullScreen()
})

$('.process').on('mousedown', function(e){
	var startX = e.clientX - $('.proPoint').offset().left
	$('.process').get(0).onmousemove = function(e){
		$('.proPoint').css('left', Math.max(0, Math.min(385, e.clientX - startX - $('.process').offset().left)))
		$('.pro').css('width',Math.max(0,Math.min(400, e.clientX - startX - $('.process').offset().left+15)))
		video.currentTime = parseInt(video.duration*Math.max(0, Math.min(385, e.clientX - startX - $('.process').offset().left))/400)
		video.play()
	}
})

$('.volume').on('mousedown', function(e){
	var startX = e.clientX - $('.volPoint').offset().left
	$('.volume').get(0).onmousemove = function(e){
		$('.volPoint').css('left', Math.max(0, Math.min(60, e.clientX - startX - $('.volume').offset().left)))
		$('.vol').css('width',Math.max(0,Math.min(70, e.clientX - startX - $('.volume').offset().left+10)))
	video.volume = Math.max(0,Math.min(70, e.clientX - startX - $('.volume').offset().left+10))/70
	}
})

$('.process').on('mouseup', function(e){
	$('.process').get(0).onmousemove = null
})

$('.volume').on('mouseup', function(e){
	$('.volume').get(0).onmousemove = null
})

var timer = setInterval(function(){
	if(parseInt(video.currentTime%60)<10){
		$('.control span').text(parseInt(video.currentTime/60)+":0"+parseInt(video.currentTime%60))
	}else{
		$('.control span').text(parseInt(video.currentTime/60)+":"+parseInt(video.currentTime%60))
	}
	$('.proPoint').css('left',video.currentTime/video.duration*385)
	$('.pro').css('width',video.currentTime/video.duration*400)
},1000)
