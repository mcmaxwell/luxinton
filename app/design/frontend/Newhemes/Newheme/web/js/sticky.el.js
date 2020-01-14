define(["jquery", "sticky"], function($) {
  return function(config, element) {
    $(element).sticky(config);
  };
});
