$(function() {
  // ----------------------------------------------------------
  // When you're lecturing, do this part last.
  var contribution = {
    "youbi-1-day-5": "log-yellow-green",
    "youbi-1-day-10": "log-green",
    "youbi-2-day-8": "log-yellow-green",
    "youbi-2-day-18": "log-green",
    "youbi-3-day-11": "log-yellow-green",
    "youbi-3-day-22": "log-green",
    "youbi-4-day-19": "log-yellow-green",
    "youbi-4-day-30": "log-green",
    "youbi-5-day-6": "log-yellow-green",
    "youbi-5-day-8": "log-green",
    "youbi-6-day-12": "log-yellow-green",
    "youbi-6-day-44": "log-green",
    "youbi-7-day-11": "log-yellow-green",
    "youbi-7-day-50": "log-green"
  };
  // ----------------------------------------------------------

  for (var youbi = 1; youbi <= 7; youbi++) {
    for (var day = 1; day <= 53; day++) {
      var box = $("<span class='main-box-log-square'></span>");

      // ----------------------------------------------------------
      // When you're lecturing, do this part last.
      var boxClass = contribution["youbi-" + youbi + "-day-" + day];
      if (boxClass) {
        box.addClass(boxClass);
      }
      // ----------------------------------------------------------

      $(".js-youbi-" + youbi).append(box);
    }
  };
});
