$(document).ready(function() {
	document.body.addEventListener('touchmove', function(e) {
	  // This prevents native scrolling from happening.
	  e.preventDefault();
	}, false);
	
	function reset() {$('span,i,img').remove();}
	
	
	var actionfinger = 1,
		lengthofdrag = 400;
	
	$('.menuBTn').live('click',function() {
		$('.menu').toggleClass('open');
	});
	$('.nav a').live('click',function() {
		$('.menu').toggleClass('open');
	});
	
	$("#s0").swipe({
		swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#s1').addClass('active');
			reset();
			tos1();
		},
		fingers:actionfinger,
		threshold: lengthofdrag 
	});
	
	$("#s1").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#s0').removeClass('done');
			reset();
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns2').addClass('active');
			reset();
			tons2();
		},
		fingers:actionfinger,
		threshold: lengthofdrag 
	});
	
	$("#ns2").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#s1').removeClass('done');
			reset
			tos1();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns3').addClass('active');
			reset();
			tons3();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	
	$("#ns3").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns2').removeClass('done');
			reset();
			tons2();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns4').addClass('active');
			reset();
			tons4();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	
	$("#ns4").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns3').removeClass('done');
			reset();
			tons3();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns5').addClass('active');
			reset();
			tons5();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns5").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns4').removeClass('done');
			reset();
			tons4();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns6').addClass('active');
			reset();
			tons6();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns6").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns5').removeClass('done');
			reset();
			tons5();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns7').addClass('active');
			reset();
			tons7();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns7").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns6').removeClass('done');
			reset();
			tons6();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns8').addClass('active');
			reset();
			tons8();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns8").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns7').removeClass('done');
			reset();
			tons7();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns9').addClass('active');
			reset();
			tons9();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns9").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns8').removeClass('done');
			reset();
			tons8();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns10').addClass('active');
			reset();
			tons10();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns10").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns9').removeClass('done');
			reset();
			tons9();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns11').addClass('active');
			reset();
			tons11();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns11").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns10').removeClass('done');
			reset();
			tons10();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns12').addClass('active');
			reset();
			tons12();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns12").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns11').removeClass('done');
			reset();
			tons11();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns13').addClass('active');
			reset();
			tons13();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns13").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns12').removeClass('done');
			reset();
			tons12();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns14').addClass('active');
			reset();
			tons14();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns14").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns13').removeClass('done');
			reset();
			tons13();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns15').addClass('active');
			reset();
			tons15();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns15").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns14').removeClass('done');
			reset();
			tons14();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns16').addClass('active');
			reset();
			tons16();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns16").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns15').removeClass('done');
			reset();
			tons15();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns17').addClass('active');
			reset();
			tons17();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns17").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns16').removeClass('done');
			reset();
			tons16();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns18').addClass('active');
			reset();
			tons18();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns18").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns17').removeClass('done');
			reset();
			tons17();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns19').addClass('active');
			reset();
			tons19();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns19").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns18').removeClass('done');
			reset();
			tons18();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns20').addClass('active');
			reset();
			tons20();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns20").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns19').removeClass('done');
			reset();
			tons19();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns21').addClass('active');
			reset();
			tons21();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns21").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns20').removeClass('done');
			reset();
			tons20();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns22').addClass('active');
			reset();
			tons22();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns22").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns21').removeClass('done');
			reset();
			tons21();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns23').addClass('active');
			reset();
			tons23();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns23").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns22').removeClass('done');
			reset();
			tons22();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns24').addClass('active');
			reset();
			tons24();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns24").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns23').removeClass('done');
			reset();
			tons23();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns25').addClass('active');
			reset();
			tons25();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns25").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns24').removeClass('done');
			reset();
			tons24();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns26').addClass('active');
			reset();
			tons26();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns26").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns25').removeClass('done');
			reset();
			tons25();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns27').addClass('active');
			reset();
			tons27();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns27").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns26').removeClass('done');
			reset();
			tons26();      
			
		}, swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).addClass('done');
			$('#ns28').addClass('active');
			reset();
			tons28();
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});
	$("#ns28").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$(this).removeClass('active');
			$('#ns27').removeClass('done');
			reset();
			tons27();      
			
		},
		fingers:actionfinger,
		threshold: lengthofdrag
	});

	
	
	
	
	
	/*ANIMATION*/
	function tos1() {
		$('#s1').html('<span class="s1a"></span><span class="s1b"></span><i></i>');
		setTimeout(function() {$('#s1 > .s1a,#s1 > i').addClass('anim');}, 500);
		setTimeout(function() {$('#s1 > .s1b').addClass('anim');}, 900);
	}
	function tons2() {
		$('#ns2').html('<i></i>');
		setTimeout(function() {$('#ns2 > i').addClass('anim');}, 1000);
	}
	function tons3() {
		$('#ns3').html('<span class="ns3a"></span><span class="ns3b"></span>');
		setTimeout(function() {$('#ns3 .ns3a').addClass('anim');}, 1000);
		setTimeout(function() {$('#ns3 .ns3b').addClass('anim');}, 1500);
	}
	function tons4() {
		$('#ns4').html('<span class="ns4a"></span><span class="ns4b1"></span><span class="ns4b2"></span><span class="ns4c"></span><i></i>');
		setTimeout(function() {$('#ns4 .ns4a').addClass('anim');}, 1000);
		setTimeout(function() {$('#ns4 .ns4b1,#ns4 > i').addClass('anim');}, 1500);
		setTimeout(function() {$('#ns4 .ns4b2').addClass('anim');}, 2500);
		setTimeout(function() {$('#ns4 .ns4b1').animate({opacity: '0'});}, 2500);
		setTimeout(function() {$('#ns4 .ns4c').addClass('anim');}, 3000);
		setTimeout(function() {$('#ns4 .ns4c').removeClass('anim');}, 3500);
	}
	function tons5() {
		$('#ns5').html('<span class="ns5a"></span><i></i>');
		setTimeout(function() {$('#ns5 > .ns5a,#ns5 > i').addClass('anim');}, 1000);
	}
	function tons6() {
		$('#ns6').html('<i></i><span class="ns6a"></span><span class="ns6b"></span><img src="css/images/ns6c.png" class="ns6c" alt=""/><img src="css/images/ns6d.png" class="ns6d" alt=""/><img src="css/images/ns6e.png" class="ns6e" alt=""/><img src="css/images/ns6f.png" class="ns6f" alt=""/><img src="css/images/ns6g.png" class="ns6g" alt=""/>');
		setTimeout(function() {$('#ns6 > .ns6a').addClass('anim');}, 1000);
		setTimeout(function() {$('#ns6 > .ns6b,#ns6 > i').addClass('anim');}, 1500);
		setTimeout(function() {$('#ns6 > .ns6c').addClass('anim');}, 1500);
		setTimeout(function() {$('#ns6 > .ns6d').addClass('anim');}, 2000);
		setTimeout(function() {$('#ns6 > .ns6e').addClass('anim');}, 2500);
		setTimeout(function() {$('#ns6 > .ns6f').addClass('anim');}, 3000);
		setTimeout(function() {$('#ns6 > .ns6g').addClass('anim');}, 3500);
	}
	function tons7() {
		$('#ns7').html('<span class="ns7a"></span><i></i>');		
		setTimeout(function() {$('#ns7 > .ns7a,#ns7 > i').addClass('anim');}, 1000);
	}
	function tons8() {
		$('#ns8').html('<span class="ns8a"></span><span class="ns8b"></span><span class="ns8c"></span><i></i>');
		setTimeout(function() {$('#ns8 > .ns8a,#ns8 > .ns8b').addClass('anim');}, 500);
		setTimeout(function() {$('#ns8 > .ns8c,#ns8 > i').addClass('anim');}, 1500);
	}
	function tons9() {
		$('#ns9').html('<span class="ns9a"></span><span class="ns9b"></span><i></i><span class="ns9c"></span><span class="ns9d"></span><span id="s3zoom"></span><span id="s3zoombox" ></span>');
		setTimeout(function() {$('#ns9 > .ns9a').addClass('anim');}, 1000);
		setTimeout(function() {$('#ns9 > .ns9b, #ns9 > i').addClass('anim');}, 1500);
		setTimeout(function() {$('#ns9 > .ns9c').addClass('anim');}, 2000);
		setTimeout(function() {$('#ns9 > .ns9d').addClass('anim');}, 2500);
		
		$("#s3zoom").swipe({
			pinchIn:function(event, direction, distance, duration, fingerCount, pinchZoom) {
				$('#s3zoombox').fadeIn();
			}, pinchOut:function(event, direction, distance, duration, fingerCount, pinchZoom) {
				$('#s3zoombox').fadeOut();
			},
			 fingers:2,  
	        pinchThreshold:0 
		});
	}
	function tons10() {
		$('#ns10').html('<span class="ns10a"></span><span class="ns10a2"></span><img src="css/images/s4b.png" alt="" class="ns10b"/><span class="ns10c"></span><span class="ns10d"></span><span id="s4zoom"></span><span id="s4zoombox" ></span>');
		setTimeout(function() {$('#ns10 > .ns10a').addClass('anim');},1000);
		setTimeout(function() {$('#ns10 > .ns10a2').addClass('anim');},1500);
		setTimeout(function() {$('#ns10 > .ns10b').addClass('anim');},2000);
		setTimeout(function() {$('#ns10 > .ns10c').addClass('anim');},2500);
		setTimeout(function() {$('#ns10 > .ns10d').addClass('anim');},3000);
		$("#s4zoom").swipe({
			pinchIn:function(event, direction, distance, duration, fingerCount, pinchZoom) {
				$('#s4zoombox').fadeIn();
			}, pinchOut:function(event, direction, distance, duration, fingerCount, pinchZoom) {
				$('#s4zoombox').fadeOut();
			},
			 fingers:2,  
	        pinchThreshold:0 
		});
		
	}
	function tons11() {
		$('#ns11').html('<span class="ns11a"></span><span class="ns11b"></span><span class="ns11c"></span><span class="ns11d"></span><span class="ns11e"></span><i></i><span id="s5zoom1"></span><span id="s5zoombox1" ></span><span id="s5zoom2"></span><span id="s5zoombox2" ></span><span id="s5zoom3"></span><span id="s5zoombox3" ></span>');
		setTimeout(function() {$('#ns11 > .ns11a').addClass('anim');},1000);
		setTimeout(function() {$('#ns11 > .ns11b, #ns11 > i').addClass('anim');},1500);
		setTimeout(function() {$('#ns11 > .ns11c').addClass('anim');},2000);
		setTimeout(function() {$('#ns11 > .ns11d').addClass('anim');},2500);
		setTimeout(function() {$('#ns11 > .ns11e').addClass('anim');},3000);
		$("#s5zoom1").swipe({
			pinchIn:function(event, direction, distance, duration, fingerCount, pinchZoom) {
				$('#s5zoombox1').fadeIn();
			},
			 fingers:2,  
	        pinchThreshold:0 
		});
		$("#s5zoom2").swipe({
			pinchIn:function(event, direction, distance, duration, fingerCount, pinchZoom) {
				$('#s5zoombox2').fadeIn();
			},
			 fingers:2,  
	        pinchThreshold:0 
		});
		$("#s5zoom3").swipe({
			pinchIn:function(event, direction, distance, duration, fingerCount, pinchZoom) {
				$('#s5zoombox3').fadeIn();
			},
			 fingers:2,  
	        pinchThreshold:0 
		});
		$("#s5zoombox1").swipe({
			pinchOut:function(event, direction, distance, duration, fingerCount, pinchZoom) {
				$(this).fadeOut();
			},
			 fingers:2,  
	        pinchThreshold:0 
		});
		$("#s5zoombox2").swipe({
			pinchOut:function(event, direction, distance, duration, fingerCount, pinchZoom) {
				$(this).fadeOut();
			},
			 fingers:2,  
	        pinchThreshold:0 
		});
		$("#s5zoombox3").swipe({
			pinchOut:function(event, direction, distance, duration, fingerCount, pinchZoom) {
				$(this).fadeOut();
			},
			 fingers:2,  
	        pinchThreshold:0 
		});
		
		
		
	}
	function tons12() {
		$('#ns12').html('<span class="ns12a"></span><i></i>');
		setTimeout(function() {$('#ns12 > .ns12a, #ns12  > i').addClass('anim');}, 1000);
	}
	function tons13() {
		$('#ns13').html('<span class="ns13a"></span><i></i>');
		setTimeout(function() {$('#ns13 > .ns13a, #ns13  > i').addClass('anim');}, 1000);
	}
	function tons14() {
		$('#ns14').html('<img src="css/images/s2a.png" alt=""/><span class="ns14b"></span><span class="ns14c"></span>');
		setTimeout(function() {$('#ns14 > .ns14b, #ns14  > .ns14c').addClass('anim');}, 1000);
	}
	function tons15() {
		$('#ns15').html('<span class="ns15a"></span><span class="ns15b"></span><span class="ns15c"></span><span class="ns15d"></span>');
		setTimeout(function() {
			$('#ns15 > .ns15a').addClass('anim');
			$('#ns15 > .ns15b').addClass('anim');
		},1000);
		setTimeout(function() {
			$('#ns15 > .ns15a').addClass('anim2');
		},1500);
		setTimeout(function() {
			$('#ns15 > .ns15a').addClass('anim3');
			$('#ns15 > .ns15c').addClass('anim');
		},2000);
		setTimeout(function() {
			$('#ns15 > .ns15a').addClass('anim4');
		},2500);
		setTimeout(function() {
			$('#ns15 > .ns15a').addClass('anim5');
			$('#ns15 > .ns15d').addClass('anim');
		},3000);
		setTimeout(function() {
			$('#ns15 > .ns15a').addClass('anim6');
		},3500);

	}
	function tons16() {
		$('#ns16').html('<span class="ns16a"></span><span class="ns16b"></span><span class="ns16c"></span><span class="ns16d"></span><span class="ns16e"></span>');
		setTimeout(function() {$('#ns16 > .ns16b').addClass('anim');},1500);
		setTimeout(function() {$('#ns16 > .ns16c').addClass('anim');},2000);
		setTimeout(function() {$('#ns16 > .ns16d').addClass('anim');},3000);
		setTimeout(function() {$('#ns16 > .ns16e').addClass('anim');},3500);
	}
	function tons17() {
		$('#ns17').html('<span class="ns17a"></span><span class="ns17b"></span><i></i><span id="s9zoom1"></span><span id="s9zoombox1"></span><span id="s9zoom2"></span><span id="s9zoombox2"></span><span id="s9zoom3"></span><span id="s9zoombox3"></span>');
		setTimeout(function() {$('#ns17 > .ns17b, #ns17 > i').addClass('anim');},1000);
		$("#s9zoom1").swipe({
			pinchIn:function(event, direction, distance, duration, fingerCount, pinchZoom) {
				$('#s9zoombox1').fadeIn();
			},
			 fingers:2,  
	        pinchThreshold:0 
		});
		$("#s9zoom2").swipe({
			pinchIn:function(event, direction, distance, duration, fingerCount, pinchZoom) {
				$('#s9zoombox2').fadeIn();
			},
			 fingers:2,  
	        pinchThreshold:0 
		});
		$("#s9zoom3").swipe({
			pinchIn:function(event, direction, distance, duration, fingerCount, pinchZoom) {
				$('#s9zoombox3').fadeIn();
			},
			 fingers:2,  
	        pinchThreshold:0 
		});
		$("#s9zoombox1").swipe({
			pinchOut:function(event, direction, distance, duration, fingerCount, pinchZoom) {
				$(this).fadeOut();
			},
			 fingers:2,  
	        pinchThreshold:0 
		});
		$("#s9zoombox2").swipe({
			pinchOut:function(event, direction, distance, duration, fingerCount, pinchZoom) {
				$(this).fadeOut();
			},
			 fingers:2,  
	        pinchThreshold:0 
		});
		$("#s9zoombox3").swipe({
			pinchOut:function(event, direction, distance, duration, fingerCount, pinchZoom) {
				$(this).fadeOut();
			},
			 fingers:2,  
	        pinchThreshold:0 
		});
		
	}
	function tons18() {
		$('#ns18').html('<span class="ns18a"></span><span class="ns18b"></span><i></i>');
		setTimeout(function() {$('#ns18 > .ns18a, #ns18 > i').addClass('anim');},1000);
		setTimeout(function() {$('#ns18 > .ns18b').addClass('anim');},1500);
	}
	function tons19() {
		$('#ns19').html('<span class="ns19a"></span><span class="ns19b"></span><i></i>');
		setTimeout(function() {$('#ns19 > .ns19a, #ns19 > i').addClass('anim');},1000);
		setTimeout(function() {$('#ns19 > .ns19b').addClass('anim');},1500);
	}
	function tons20() {
		$('#ns20').html('<span class="ns20a"></span>');
		setTimeout(function() {$('#ns20 > .ns20a').addClass('anim');},1000);
	}
	function tons21() {
		
	}
	function tons22() {
		$('#ns22').html('<span class="ns22a"></span><span class="ns22b"></span><i></i>');
		setTimeout(function() {$('#ns22 > .ns22a').addClass('anim');},1000);
		setTimeout(function() {$('#ns22 > .ns22b,#ns22 > i').addClass('anim');},1500);
	}
	function tons23() {
		$('#ns23').html('<span class="ns23a"></span>');
		setTimeout(function() {$('').addClass('anim');},1000);
	}
	function tons24() {
		$('#ns24').html('<span class="ns24a"></span><span class="ns24b"></span>');
		setTimeout(function() {$('#ns24 > .ns24a').addClass('anim');},1000);
		setTimeout(function() {$('#ns24 > .ns24b').addClass('anim');},1500);
	}
	function tons25() {
		$('#ns25').html('<span class="ns25a"></span><span class="ns25b"></span>');
		setTimeout(function() {$('').addClass('anim');},1000);
	}
	function tons26() {
		$('#ns26').html('<span class="ns26a"></span><span class="ns26b"></span><i></i>');
		setTimeout(function() {$('#ns26 > .ns26b').addClass('anim');},1000);
		setTimeout(function() {$('#ns26 > .ns26a,#ns26 > i').addClass('anim');},1500);
	}
	function tons27() {
		$('#ns27').html('<span class="ns27a"></span>');
		setTimeout(function() {$('#ns26 > .ns26b').addClass('anim');},1000);
		setTimeout(function() {$('#ns26 > .ns26a,#ns26 > i').addClass('anim');},1500);
	}
	function tons28() {
		$('#ns28').html('<span class="ns28a"></span><i></i>');
		setTimeout(function() {$('#ns28 > .ns28a,#ns28 > i').addClass('anim');},1000);
	}
	
	function resetall() {
		$('#s1,#ns2,#ns3,#ns4,#ns5,#ns6,#ns7,#ns8,#ns9,#ns10,#ns11,#ns12,#ns13,#ns14,#ns15,#ns16,#ns17,#ns18,#ns19,#ns20,#ns21,#ns22,#ns23,#ns25,#ns26,#ns27,#ns28').removeClass('active');
		$('span,i,img').remove();
		$('.slide').removeClass('done');
	}
	
	
	
	/*MENU*/
	$('.mtos1').live('click',function() {
		$('#s1').addClass('active');
		$('#s0').addClass('done');
		$('#ns2,#ns3,#ns4,#ns5,#ns6,#ns7,#ns8,#ns9,#ns10,#ns11,#ns12,#ns13,#ns14,#ns15,#ns16,#ns17,#ns18,#ns19,#ns20,#ns21,#ns22,#ns23,#ns24,#ns25,#ns26,#ns27,#ns28').removeClass('active');
		$('#s1,#ns2,#ns3,#ns4,#ns5,#ns6,#ns7,#ns8,#ns9,#ns10,#ns11,#ns12,#ns13,#ns14,#ns15,#ns16,#ns17,#ns18,#ns19,#ns20,#ns21,#ns22,#ns23,#ns24,#ns25,#ns26,#ns27,#ns28').removeClass('done');
		reset();
		tos1();
	});
	$('.mtos2').live('click',function() {
		$('#s1,#ns2').addClass('active');
		$('#s0,#s1').addClass('done');
		$('#ns3,#ns4,#ns5,#ns6,#ns7,#ns8,#ns9,#ns10,#ns11,#ns12,#ns13,#ns14,#ns15,#ns16,#ns17,#ns18,#ns19,#ns20,#ns21,#ns22,#ns23,#ns24,#ns25,#ns26,#ns27,#ns28').removeClass('active');
		$('#ns2,#ns3,#ns4,#ns5,#ns6,#ns7,#ns8,#ns9,#ns10,#ns11,#ns12,#ns13,#ns14,#ns15,#ns16,#ns17,#ns18,#ns19,#ns20,#ns21,#ns22,#ns23,#ns24,#ns25,#ns26,#ns27,#ns28').removeClass('done');
		reset();
		tons2();
	});
	$('.mtos3').live('click',function() {
		$('#s1,#ns2,#ns3').addClass('active');
		$('#s0,#s1,#ns2').addClass('done');
		$('#ns4,#ns5,#ns6,#ns7,#ns8,#ns9,#ns10,#ns11,#ns12,#ns13,#ns14,#ns15,#ns16,#ns17,#ns18,#ns19,#ns20,#ns21,#ns22,#ns23,#ns24,#ns25,#ns26,#ns27,#ns28').removeClass('active');
		$('#ns3,#ns4,#ns5,#ns6,#ns7,#ns8,#ns9,#ns10,#ns11,#ns12,#ns13,#ns14,#ns15,#ns16,#ns17,#ns18,#ns19,#ns20,#ns21,#ns22,#ns23,#ns24,#ns25,#ns26,#ns27,#ns28').removeClass('done');
		reset();
		tons3();
	});
	$('.mtos4').live('click',function() {
		$('#s1,#ns2,#ns3,#ns4,#ns5,#ns6,#ns7').addClass('active');
		$('#s0,#s1,#ns2,#ns3,#ns4,#ns5,#ns6').addClass('done');
		$('#ns8,#ns9,#ns10,#ns11,#ns12,#ns13,#ns14,#ns15,#ns16,#ns17,#ns18,#ns19,#ns20,#ns21,#ns22,#ns23,#ns24,#ns25,#ns26,#ns27,#ns28').removeClass('active');
		$('#ns7,#ns8,#ns9,#ns10,#ns11,#ns12,#ns13,#ns14,#ns15,#ns16,#ns17,#ns18,#ns19,#ns20,#ns21,#ns22,#ns23,#ns24,#ns25,#ns26,#ns27,#ns28').removeClass('done');
		reset();
		tons7();
	});
	$('.mtos5').live('click',function() {
		$('#s1,#ns2,#ns3,#ns4,#ns5,#ns6,#ns7,#ns8,#ns9,#ns10').addClass('active');
		$('#s0,#s1,#ns2,#ns3,#ns4,#ns5,#ns6,#ns7,#ns8,#ns9').addClass('done');
		$('#ns11,#ns12,#ns13,#ns14,#ns15,#ns16,#ns17,#ns18,#ns19,#ns20,#ns21,#ns22,#ns23,#ns24,#ns25,#ns26,#ns27,#ns28').removeClass('active');
		$('#ns10,#ns11,#ns12,#ns13,#ns14,#ns15,#ns16,#ns17,#ns18,#ns19,#ns20,#ns21,#ns22,#ns23,#ns24,#ns25,#ns26,#ns27,#ns28').removeClass('done');
		reset();
		tons10();
	});
	$('.mtos6').live('click',function() {
		$('#s1,#ns2,#ns3,#ns4,#ns5,#ns6,#ns7,#ns8,#ns9,#ns10,#ns11,#ns12').addClass('active');
		$('#s0,#s1,#ns2,#ns3,#ns4,#ns5,#ns6,#ns7,#ns8,#ns9,#ns10,#ns11').addClass('done');
		$('#ns13,#ns14,#ns15,#ns16,#ns17,#ns18,#ns19,#ns20,#ns21,#ns22,#ns23,#ns24,#ns25,#ns26,#ns27,#ns28').removeClass('active');
		$('#ns12,#ns13,#ns14,#ns15,#ns16,#ns17,#ns18,#ns19,#ns20,#ns21,#ns22,#ns23,#ns24,#ns25,#ns26,#ns27,#ns28').removeClass('done');
		reset();
		tons12();
	});
	$('.mtos7').live('click',function() {
		$('#s1,#ns2,#ns3,#ns4,#ns5,#ns6,#ns7,#ns8,#ns9,#ns10,#ns11,#ns12,#ns13,#ns14').addClass('active');
		$('#s0,#s1,#ns2,#ns3,#ns4,#ns5,#ns6,#ns7,#ns8,#ns9,#ns10,#ns11,#ns12,#ns13').addClass('done');
		$('#ns15,#ns16,#ns17,#ns18,#ns19,#ns20,#ns21,#ns22,#ns23,#ns24,#ns25,#ns26,#ns27,#ns28').removeClass('active');
		$('#ns14,#ns15,#ns16,#ns17,#ns18,#ns19,#ns20,#ns21,#ns22,#ns23,#ns24,#ns25,#ns26,#ns27,#ns28').removeClass('done');
		reset();
		tons14();
	});
	$('.mtos8').live('click',function() {
		$('#s1,#ns2,#ns3,#ns4,#ns5,#ns6,#ns7,#ns8,#ns9,#ns10,#ns11,#ns12,#ns13,#ns14,#ns15,#ns16,#ns17').addClass('active');
		$('#s0,#s1,#ns2,#ns3,#ns4,#ns5,#ns6,#ns7,#ns8,#ns9,#ns10,#ns11,#ns12,#ns13,#ns14,#ns15,#ns16').addClass('done');
		$('#ns18,#ns19,#ns20,#ns21,#ns22,#ns23,#ns24,#ns25,#ns26,#ns27,#ns28').removeClass('active');
		$('#ns17,#ns18,#ns19,#ns20,#ns21,#ns22,#ns23,#ns24,#ns25,#ns26,#ns27,#ns28').removeClass('done');
		reset();
		tons17();
	});
	$('.mtos9').live('click',function() {
		$('#s1,#ns2,#ns3,#ns4,#ns5,#ns6,#ns7,#ns8,#ns9,#ns10,#ns11,#ns12,#ns13,#ns14,#ns15,#ns16,#ns17,#ns18,#ns19,#ns20').addClass('active');
		$('#s0,#s1,#ns2,#ns3,#ns4,#ns5,#ns6,#ns7,#ns8,#ns9,#ns10,#ns11,#ns12,#ns13,#ns14,#ns15,#ns16,#ns17,#ns18,#ns19').addClass('done');
		$('#ns21,#ns22,#ns23,#ns24,#ns25,#ns26,#ns27,#ns28').removeClass('active');
		$('#ns20,#ns21,#ns22,#ns23,#ns24,#ns25,#ns26,#ns27,#ns28').removeClass('done');
		reset();
		tons20();
	});

	
	
	
	
	
	
	
	
	
	
	
});