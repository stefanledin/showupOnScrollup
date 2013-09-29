;(function ($, window, document, undefined) {

	var previousScrollTopValue = 0;
	var currentScrollTopValue = 0;
	var direction;
	
	function determineScrollDirection () {
		currentScrollTopValue = $(document).scrollTop();
		if (currentScrollTopValue < previousScrollTopValue) {
			direction = 'up';
		} else {
			direction = 'down';
		}
		previousScrollTopValue = currentScrollTopValue;
		return direction;
	}

	function init () {
		var previousDirection;
		var scrollTopValueWhenDirectionChanged;
		
		$(window).on('scroll', function () {
			direction = determineScrollDirection();
			if (previousDirection !== direction) {
				scrollTopValueWhenDirectionChanged = $(document).scrollTop();
			} else {
				var diff = $(document).scrollTop() - scrollTopValueWhenDirectionChanged;
				if ( (diff < 0) && (diff > -20) ) {
					console.log('plask');
					scrollTopValueWhenDirectionChanged = 0;
				}
			}
			previousDirection = direction;
		});
	}
	
	$.fn.showupOnScrollup = function () {
		init();
		
		return this;
	};

})(jQuery, window, document);