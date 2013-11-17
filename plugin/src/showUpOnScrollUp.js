/*
 * showUpOnScrollUp
 * https://github.com/stefanledin/showupOnScrollup
 *
 * Copyright (c) 2013 Stefan Ledin
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.showUpOnScrollUp = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

}(jQuery));
