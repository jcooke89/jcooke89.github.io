$(document).ready(function() {
	
// Tweets Cycle	
jQuery('#tweet-list').hide();
setTimeout(function() {
$('.tweets p').hide();
$('#tweet-list').show();
$('#tweet-list').cycle({ 
	    fx:'scrollDown', 
    	speed:500, 
    	timeout:3500,  
    	pause:1,
		cleartypeNoBg: true
	});							   
},5000);	
						   
 // Home page Open / Close setting					   
 if (matchMedia('only screen and (min-width: 1024px)').matches) {
  var pagecont = $('section[id]');

  $('.menu-cont a').click(function(e) {
								   
   e.preventDefault();
   
   pagecont.removeClass('openblock');
   pagecont.filter($(this.hash)).addClass('openblock');
   $('.openblock').hide();
   
   
   for (var i = 1; i <= $('.menu-cont a').length; i++) {
      $('.menu-cont a').eq(i - 1).delay(100).delay((i - 1) * 300).fadeOut(300,function() {
			
			setTimeout(function() {
								
			$('section.menu').hide();
			
			 $('.menu-cont a').css({'top': '-230px'});
			
			 $('.openblock').fadeIn(500,function(e) {
			 
			  $('.block').jScrollPane({
               verticalDragMinHeight: 100,
               verticalDragMaxHeight: 100
              });
             return false;
			});
			
			$(".container").animate({
             marginTop: "-310px"
            },
            {
             duration: 300,
             specialEasing: {
             marginTop: 'easeOutExpo'
            }
            });
			
			},1200);
		});
    };

  });
  
  /////////////////////////////////////
  
  $('a.close').click(function(e) {
	  
	  e.preventDefault();
	
      pagecont.hide();
		
	  $(".container").animate({
        marginTop: "-200px"
      },
      {
        duration: 300,
        specialEasing: {
          marginTop: 'easeOutExpo'
        }
      });

      $('section.menu').fadeIn(100,
      function() {

        for (var i = 1; i <= $('.menu-cont a').length; i++) {
          $('.menu-cont a').eq(i - 1).delay(100).delay((i - 1) * 300).fadeIn(300).animate({
            top: 0
          },
          {
            duration: 200,
            easing: 'easeOutExpo'
          });
        };

      });
  });
  
  //////////////////////////////////////////////////////////
  
  $('ul.portfolio li a').hover(function() {

    $(this).find('img').animate({
      width: "+=30px"
    },
    {
      duration: 500,
      specialEasing: {
        width: 'jswing'
      }
    });

  },

  function() {

    $(this).find('img').animate({
      width: "249px"
    },
    {
      duration: 500,
      specialEasing: {
        width: 'jswing'
      }
    });

    return false;
  });

  
 }
  
  if (matchMedia('(min-width: 478px) and (max-width: 489px)').matches) {
	  
	 var pagecont = $('section[id]');

  $('.menu-cont a').click(function(e) {
								   
   e.preventDefault();
   
   pagecont.removeClass('openblock');
   pagecont.filter($(this.hash)).addClass('openblock');
   $('.openblock').hide();
   
   
   for (var i = 1; i <= $('.menu-cont a').length; i++) {
      $('.menu-cont a').eq(i - 1).delay(100).delay((i - 1) * 300).fadeOut(300,function() {
			
			setTimeout(function() {
								
			$('section.menu').hide();
			
			 $('.menu-cont a').css({'top': '-100px'});
			
			 $('.openblock').fadeIn(500,function(e) {
			 
			  $('.block').jScrollPane({
               verticalDragMinHeight: 100,
               verticalDragMaxHeight: 100
              });
             return false;
			});
			
			$(".container").animate({
             marginTop: "-160px"
            },
            {
             duration: 300,
             specialEasing: {
             marginTop: 'easeOutExpo'
            }
            });
			
			},1200);
		});
    };

  });  
  
  ////////////////////////////////////////////
  
  $('a.close').click(function(e) {
	  
	  e.preventDefault();
	
      pagecont.hide();
		
	  $(".container").animate({
        marginTop: "-140px"
      },
      {
        duration: 300,
        specialEasing: {
          marginTop: 'easeOutExpo'
        }
      });

      $('section.menu').fadeIn(100,
      function() {

        for (var i = 1; i <= $('.menu-cont a').length; i++) {
          $('.menu-cont a').eq(i - 1).delay(100).delay((i - 1) * 300).fadeIn(300).animate({
            top: 0
          },
          {
            duration: 200,
            easing: 'easeOutExpo'
          });
        };

      });
  });
  
  ////////////////////////////////////////////////////
  
  $('ul.portfolio li a').hover(function() {

    $(this).find('img').animate({
      width: "+=30px"
    },
    {
      duration: 500,
      specialEasing: {
        width: 'jswing'
      }
    });

  },

  function() {

    $(this).find('img').animate({
      width: "135px"
    },
    {
      duration: 500,
      specialEasing: {
        width: 'jswing'
      }
    });

    return false;
  });

  
}
	
if (matchMedia('only screen and (max-width: 320px)').matches) {
	  
	 var pagecont = $('section[id]');

  $('.menu-cont a').click(function(e) {
								   
   e.preventDefault();
   
   pagecont.removeClass('openblock');
   pagecont.filter($(this.hash)).addClass('openblock');
   $('.openblock').hide();
   
   
   for (var i = 1; i <= $('.menu-cont a').length; i++) {
      $('.menu-cont a').eq(i - 1).delay(100).delay((i - 1) * 300).fadeOut(300,function() {
			
			setTimeout(function() {
								
			$('section.menu').hide();
			
			 $('.menu-cont a').css({'top': '-100px'});
			
			 $('.openblock').fadeIn(500,function(e) {
			 
			  $('.block').jScrollPane({
               verticalDragMinHeight: 100,
               verticalDragMaxHeight: 100
              });
             return false;
			});
			
			$(".container").animate({
             marginTop: "-160px"
            },
            {
             duration: 300,
             specialEasing: {
             marginTop: 'easeOutExpo'
            }
            });
			
			},1200);
		});
    };

  });  
  
  ////////////////////////////////////////////
  
  $('a.close').click(function(e) {
	  
	  e.preventDefault();
	
      pagecont.hide();
		
	  $(".container").animate({
        marginTop: "-100px"
      },
      {
        duration: 300,
        specialEasing: {
          marginTop: 'easeOutExpo'
        }
      });

      $('section.menu').fadeIn(100,
      function() {

        for (var i = 1; i <= $('.menu-cont a').length; i++) {
          $('.menu-cont a').eq(i - 1).delay(100).delay((i - 1) * 300).fadeIn(300).animate({
            top: 0
          },
          {
            duration: 200,
            easing: 'easeOutExpo'
          });
        };

      });
  });
  
  ////////////////////////////////////////////////////////////////
  
  $('ul.portfolio li a').hover(function() {

    $(this).find('img').animate({
      width: "+=30px"
    },
    {
      duration: 500,
      specialEasing: {
        width: 'jswing'
      }
    });

  },

  function() {

    $(this).find('img').animate({
      width: "88px"
    },
    {
      duration: 500,
      specialEasing: {
        width: 'jswing'
      }
    });

    return false;
  });

}

  if (matchMedia('(min-width: 598px) and (max-width: 800px)').matches) {
	  
	 var pagecont = $('section[id]');

  $('.menu-cont a').click(function(e) {
								   
   e.preventDefault();
   
   pagecont.removeClass('openblock');
   pagecont.filter($(this.hash)).addClass('openblock');
   $('.openblock').hide();
   
   
   for (var i = 1; i <= $('.menu-cont a').length; i++) {
      $('.menu-cont a').eq(i - 1).delay(100).delay((i - 1) * 300).fadeOut(300,function() {
			
			setTimeout(function() {
								
			$('section.menu').hide();
			
			 $('.menu-cont a').css({'top': '-100px'});
			
			 $('.openblock').fadeIn(500,function(e) {
			 
			  $('.block').jScrollPane({
               verticalDragMinHeight: 100,
               verticalDragMaxHeight: 100
              });
             return false;
			});
			
			$(".container").animate({
             marginTop: "-240px"
            },
            {
             duration: 300,
             specialEasing: {
             marginTop: 'easeOutExpo'
            }
            });
			
			},1200);
		});
    };

  });  
  
  ////////////////////////////////////////////
  
  $('a.close').click(function(e) {
	  
	  e.preventDefault();
	
      pagecont.hide();
		
	  $(".container").animate({
        marginTop: "-190px"
      },
      {
        duration: 300,
        specialEasing: {
          marginTop: 'easeOutExpo'
        }
      });

      $('section.menu').fadeIn(100,
      function() {

        for (var i = 1; i <= $('.menu-cont a').length; i++) {
          $('.menu-cont a').eq(i - 1).delay(100).delay((i - 1) * 300).fadeIn(300).animate({
            top: 0
          },
          {
            duration: 200,
            easing: 'easeOutExpo'
          });
        };

      });
  });
  
  /////////////////////////////////////////////////////
  $('ul.portfolio li a').hover(function() {

    $(this).find('img').animate({
      width: "+=30px"
    },
    {
      duration: 500,
      specialEasing: {
        width: 'jswing'
      }
    });

  },

  function() {

    $(this).find('img').animate({
      width: "168px"
    },
    {
      duration: 500,
      specialEasing: {
        width: 'jswing'
      }
    });

    return false;
  });
  
}

  
  
  // Social hover effect

  $('ul.socicon li').hover(function() {

    $(this).find('a').animate({
      marginTop: 5
    },
    {
      duration: 100,
      easing: 'easeOutExpo',
      complete: function() {
        //////
      }
    });
  },
  function() {
    $(this).find('a').animate({
      marginTop: 0
    },
    {
      duration: 100,
      easing: 'easeOutExpo',
      complete: function() {
        //////
      }
    });

  });
  
  // Rotate plugin

  if ($.browser.msie) {

    ///

  } else {

    $('a.close img').rotate({
      bind: {
        mouseover: function() {
          $(this).rotate({
            animateTo: 360,
            easing: $.easing.easeInOutSine
          });
        },
        mouseout: function() {
          $(this).rotate({
            animateTo: 0,
            easing: $.easing.easeInOutSine
          });
        }
      }
    });

  }

  $('span.rot img').rotate({
    bind: {
      mouseover: function() {
        $(this).rotate({
          animateTo: 360,
          easing: $.easing.easeInOutSine
        });
      },
      mouseout: function() {
        $(this).rotate({
          animateTo: 0,
          easing: $.easing.easeInOutSine
        });
      }
    }
  });

  $('span.rot img').trigger('mouseover');
  setTimeout(function() {
    $('span.rot img').trigger('mouseout');
  },
  1000);

  // Tipsy plugin

  $('[name=tipsy]').tipsy({
    fade: true,
    gravity: 's'
  });
  $('#form [title]').tipsy({
    trigger: 'focus',
    gravity: 'w'
  });

  // Nivo slider

  $('#nivo').nivoSlider({
    effect: 'random',
    slices: 15,
    boxCols: 8,
    boxRows: 4,
    animSpeed: 200,
    pauseOnHover: true,
    directionNavHide: false,
    controlNav: false // 1,2,3 
    //beforeChange: function (){},
    //afterChange: function (){}
    //controlNavThumbs:true
  });

  // prettyPhoto plugin

  $("a[rel^='prettyPhoto']").prettyPhoto();

  // Portfolio effect hover

  
  $('ul.portfolio li a').hover(function() {

    cap = $(this).find('span');

    cap.stop().animate({
      bottom: -450
    },
    500, 'easeInCubic',
    function() {});

  },
  function() {

    cap.stop().animate({
      bottom: 0
    },
    500, 'easeInCubic',
    function() {});

  });

  // Validator plugin

  $('#submit').formValidator({
    scope: '#form'
  });

  // Form plugin

  var options = {

    beforeSubmit: function() {
      $('.sending').show();

    },
    success: function() {
      $('.sending').hide();
      $('#form').hide();
      $(".mess").show().html('<h5>Thanks !</h5><h5>Your message has been sent.</h5>'); // Change Your message post send
      $('.mess').delay(3000).fadeOut(function() {

        $('#form').clearForm();
        $('#form').delay(3500).show();

      });
    },
    url: './php/contact.php'
  };

  $('#form').submit(function() {
    $(this).ajaxSubmit(options);
    return false;
  });

});