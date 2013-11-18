(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#showUpOnScrollUp', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
      this.navBar = $('nav');
      this.navBar.showUpOnScrollUp();

      window.scroll(0,0);
    }
  });

  test('Is a property in the jQuery object', 1, function () {
    ok($.fn.showUpOnScrollUp);
  });

  test('Plugin is available in the window object', 1, function () {
    ok(window.plugin);
  });

  test('getScrollDirection returns something', 1, function () {
    var plugin = new window.plugin();
    equal(plugin.getScrollDirection(), 'down');
  });

  test('getScrollDirection returns the right thing', 6, function () {
    var plugin = new window.plugin();
    equal(plugin.getScrollDirection(), 'down');
    window.scroll(0, 100);
    equal(plugin.getScrollDirection(), 'down');
    window.scroll(0, 50);
    equal(plugin.getScrollDirection(), 'up');
    notEqual(plugin.getScrollDirection(), 'up');
    window.scroll(0, 51);
    notEqual(plugin.getScrollDirection(), 'up');
    equal(plugin.getScrollDirection(), 'down');
  });

  test('element does not have a class from the beginning ', 1, function () {
    notEqual(this.navBar.hasClass('fixed'));
  });

  test('element gets a class when the user scrolls up', 2, function () {
    window.scroll(0, 100);
    equal(this.navBar.hasClass('fixed'), false);
    //window.scroll(0, 50);
    $(window).trigger('scroll', {x: 0, y: 50});
    equal(this.navBar.hasClass('fixed'), true);
  });
  
}(jQuery));
