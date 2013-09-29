;(function ($, window, document, undefined) {

	var previousScrollTopValue = 0;
	var currentScrollTopValue = 0;
	var direction;
	
	function getScrollDirection () {
		currentScrollTopValue = $(document).scrollTop();
		if (currentScrollTopValue < previousScrollTopValue) {
			direction = 'up';
		} else {
			direction = 'down';
		}
		previousScrollTopValue = currentScrollTopValue;
		return direction;
	}

	function showUp ($el) {
		if (!$el.hasClass('fixed')) {
			$el.addClass('fixed');
		}
	}

	function init ($el) {
		var previousDirection = 'down';
		var scrollTopValueWhenDirectionChanged;
		var hasShownUp = 0;
		
		$(window).on('scroll', function () {
			direction = getScrollDirection();
			if ( (direction === 'down') && hasShownUp ) {
				$el.removeClass('fixed');
				hasShownUp = 0;
			}
			if (previousDirection !== direction) {
				scrollTopValueWhenDirectionChanged = $(document).scrollTop();
			} else {
				var diff = $(document).scrollTop() - scrollTopValueWhenDirectionChanged;
				if ( (diff < 0) && (diff > -20) ) {
					showUp($el);
					hasShownUp = 1;
					scrollTopValueWhenDirectionChanged = 0;
				}
			}
			previousDirection = direction;
		});
	}
	
	$.fn.showupOnScrollup = function () {
		init(this);
		
		return this;
	};

})(jQuery, window, document);