define(["jquery", "domReady!"], function($) {
  "use strict";
  $.widget("mage.alignitems", {
    _create: function(config, elements) {
      var elements = $(this.element[0]).children();
      var self = this;
      self.changeHeights(elements);

      $(document).on("swatch.initialized", function() {
        self.changeHeights(elements);
      });
    },
    changeHeights: function(elements) {
      var maxHeight = 0;

      $(elements).each(function() {
        var height_block = $(this).height();
        if (height_block > maxHeight) {
          maxHeight = height_block;
        }
        $(this).height(maxHeight);
      });
    }
  });

  return $.mage.alignitems;
});
