$(function() {
  // ----------------------------------------------------------
  // When you're lecturing, do this part last.
  var contribution = {
    "youbi-1-day-5": "c",
    "youbi-1-day-10": "cc",
    "youbi-2-day-8": "c",
    "youbi-2-day-18": "cc",
    "youbi-3-day-11": "c",
    "youbi-3-day-22": "cc",
    "youbi-4-day-19": "c",
    "youbi-4-day-30": "cc",
    "youbi-5-day-6": "c",
    "youbi-5-day-8": "cc",
    "youbi-6-day-12": "c",
    "youbi-6-day-44": "cc",
    "youbi-7-day-11": "c",
    "youbi-7-day-50": "cc"
  };
  // ----------------------------------------------------------

  for (var youbi = 1; youbi <= 7; youbi++) {
    for (var day = 1; day <= 53; day++) {
      var box = $("<span class='box'></span>");

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
