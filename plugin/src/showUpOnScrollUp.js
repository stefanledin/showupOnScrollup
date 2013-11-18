/*
 * showUpOnScrollUp
 * https://github.com/stefanledin/showupOnScrollup
 *
 * Copyright (c) 2013 Stefan Ledin
 * Licensed under the MIT license.
 */

(function($) {

  window.plugin = function (el) {
    // Cache the element
    this.el = el;
    // Cache the element wrapped in jQuery
    this.$el = $(el);
    // Cache the document
    this.$document = $(document);
    
    this.previousScrollTopValue = 0;
    this.currentScrollTopValue = 0;
    this.scrollDirection = 'down';

    this.hasShownUp = 0;

    // Boot the stuff
    this.init();
  }

  plugin.prototype.getScrollDirection = function() {
    var self = this;
    this.currentScrollTopValue = $(document).scrollTop();
    if (this.currentScrollTopValue < this.previousScrollTopValue) {
      self.scrollDirection = 'up';
    } else {
      self.scrollDirection = 'down';
    }
    this.previousScrollTopValue = this.currentScrollTopValue;
    return this.scrollDirection;
  }

  plugin.prototype.showUp = function($el) {
    if (!$el.hasClass('fixed')) {
      $el.addClass('fixed');
    }
  };

  plugin.prototype.init = function() {
    var self = this,
      direction,
      previousDirection = 'down',
      scrollTopValueWhenDirectionChanged,
      hasShownUp = 0;

    $(window).on('scroll', function () {
      direction = self.getScrollDirection();
      if ( (direction === 'down') && hasShownUp ) {
        self.$el.removeClass('fixed');
        hasShownUp = 0;
      }
      if (previousDirection !== direction) {
        scrollTopValueWhenDirectionChanged = $(document).scrollTop();
      } else {
        var diff = $(document).scrollTop() - scrollTopValueWhenDirectionChanged;
        if ( (diff < 0) && (diff > -20) ) {
          self.showUp(self.$el);
          hasShownUp = 1;
          scrollTopValueWhenDirectionChanged = 0;
        }
      }
      previousDirection = direction;
    });
  };

  // Collection method.
  $.fn.showUpOnScrollUp = function() {
    return this.each(function(i) {
      new plugin(this);
    });
  };

}(jQuery));
