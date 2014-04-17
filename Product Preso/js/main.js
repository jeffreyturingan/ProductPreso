$(document).ready(function() {
	document.body.addEventListener('touchmove', function(e) {
	  // This prevents native scrolling from happening.
	  e.preventDefault();
	}, false);

	$('#s0 a').each(function() {
		$(this).click(function() {
			var menuselected = $(this).attr('class');
			$(this).addClass('selected');
			$(this).siblings().addClass('unselected');
			
			
			$('#s0').delay(800).fadeOut();
			
			if (menuselected == 'lunch') {
				optionLunch();
			} else {
				optionDinner();
			}
			
 		});
	});
	
	function optionLunch() {
		$('body').attr('id','invitelunch');
		$('#s1').delay(800).fadeIn();
		$('.toslide2').click(function() {
			$('#s1').fadeOut(300,function() {
				$('#s2').fadeIn();
				$('.defpos').click(function() {
					$('#s2Btn').animate({top: '70px'}).removeClass('defpos').addClass('upPos');
					$('.s2Txt').animate({height: '202px'},function() {
						$('.upPos').click(function() {
							$('#s2').fadeOut(300,function() {
								$('#s3').fadeIn(300,function() {
									$('#s3Btn').click(function() {
										$('#s3').fadeOut(300,function() {
											$('#s4').fadeIn(300,function() {
												$(this).click(function() {
													$('#s5').fadeIn(300);
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
		$('.homeBtn').fadeIn();
	}
	
	function optionDinner() {
		$('body').attr('id','invitedinner');
		$('#s1').delay(800).fadeIn();
		$('.toslide2').click(function() {
			$('#s1').fadeOut(300,function() {
				$('#s2').fadeIn();
				$('.defpos').click(function() {
					$('#s2Btn').animate({top: '70px'}).removeClass('defpos').addClass('upPos');
					$('.s2Txt').animate({height: '202px'},function() {
						$('.upPos').click(function() {
							$('#s2').fadeOut(300,function() {
								$('#s6').fadeIn(300,function() {
									$('#s6Btn').click(function() {
										$('#s6').fadeOut(300);
										$('#s7').fadeIn(300,function() {
											$('#s7 > a').each(function() {
												$(this).click(function() {
													var idBtn = $(this).attr('id');
													
													if(idBtn == 's7Btn1') {
														$('#s7').fadeOut(300);
														$('#s8').fadeIn(300,function() {
															$('#s8Btn').click(function() {
																$('#s8').fadeOut(300);
																$('#s4').fadeIn(300,function() {
																	$('#s4').click(function() {
																		$('#s4').fadeOut(300);
																		$('#s7').fadeIn(300,function() {
																			$('#s7Btn1').css({display: 'none'});
																			$('#s7Btn2').click(function() {
																				$('#s7').fadeOut(300,function() {
																					$('#s9').fadeIn(300,function() {
																						$('#s9').click(function() {
																							$('#s7').css({display: 'none'});
																							$('#s9').fadeOut(300);
																							$('#s10').fadeIn(300);
																						});
																					});
																				});
																			});
																		});
																	});
																});

															});
														});
														
													} 
													
													if(idBtn == 's7Btn2') {
														$('#s7').fadeOut(300);
														$('#s9').fadeIn(300,function() {
															$('#s9').click(function() {
																$('#s9').fadeOut();
																$('#s7').fadeIn(300,function() {
																	$('#s7Btn2').css({display: 'none'});
																	$('#s7Btn1').click(function() {
																		$('#s8').fadeIn(300,function() {
																			$('#s8Btn').click(function() {
																				$('#s8').fadeOut(300);
																				$('#s4').fadeIn(300,function() {
																					$('#s4').click(function() {
																						$('#s7').css({display: 'none'});
																						$('#s4').fadeOut(300);
																						$('#s10').fadeIn(300);
																					});
																				});
				
																			});
																		});
																	});
																});

															});
														});

													}
													
													
													
												}) 
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});

		$('.homeBtn').fadeIn();
	}
	
	$('.homeBtn').click(function() {
		location.reload();
	});
	
});