define(["jquery", "sticky"], function($) {
  return function(config, element) {
    $(element).sticky(config);

    $(element).on("sticky-start", function() {
      $(this).addClass("active");
    });
    $(element).on("sticky-end", function() {
      $(this).removeClass("active");
    });
  };
});
