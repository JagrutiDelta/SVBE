		if(jQuery('#funfact-counter').length > 0){
		var counted = 0;
					jQuery(window).scroll(function() {

					  var oTop = jQuery('#funfact-counter').offset().top - window.innerHeight;
					  if (counted == 0 && jQuery(window).scrollTop() > oTop) {
					    //alert("hi");
					    jQuery('.funfact-count .count').each(function() {
					      var $this = jQuery(this),
					        countTo = $this.attr('data-count');
					      jQuery({
					        countNum: $this.text()
					      }).animate({
					          countNum: countTo
					        },

					        {

					          duration: 5000,
					          easing: 'swing',
					          step: function() {
					            $this.text(Math.floor(this.countNum));
					          },
					          complete: function() {
					            $this.text(this.countNum);
					            //alert('finished');
					          }

					        });
					    });
					    counted = 1;
					  }

					});
		}

jQuery(document).ready(function() {
					 jQuery('.play-video').on('click', function() {
					    var videoUrl = jQuery(this).data('video-url');
					    jQuery('#videoPlayer').attr('src', videoUrl);
					    var videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
					    videoModal.show();
					  });

					  // Reset video src when modal is closed
					  jQuery('#videoModal').on('hidden.bs.modal', function () {
					    jQuery('#videoPlayer').attr('src', '');
					  }); 
					});