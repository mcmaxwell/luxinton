var config = {
  paths: {
    sticky: "js/sticky"
  },
  shim: {
    sticky: {
      deps: ["jquery"]
    }
  },
  map: {
    "*": {
      stickyEl: "js/sticky.el",
      sticky: "js/sticky"
    }
  }
};
