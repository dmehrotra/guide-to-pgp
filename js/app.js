$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
	$('.encrypt').on('hover',function(){
		$(this).text('+DYqtIEdlYca+6')
	})
	$('.encrypt').on('click',function(){
		$(this).text('encrypted')
	})
	$(function(){
  		$('#video').css({ width: $(".slide-container").innerWidth() + 'px', height: $(".slide-coontainer").innerHeight() + 'px' });  
	  	$(window).resize(function(){
	    	$('#video').css({ width: $(".slide-container").innerWidth() + 'px', height: $(".slide-container").innerHeight() + 'px' });
	  	});
	});
});