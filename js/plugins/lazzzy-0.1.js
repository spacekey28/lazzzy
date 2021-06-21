(function ($) {
 
  $.fn.lazzzy = function( option ) {
    if (!this) return;

    if(option === "eager") {
      this.each(function() {
        $(this).attr("loading", "eager");
      });
    } else {
      this.each(function() {
        $(this).attr("loading", "lazy");
      });
    }
  };

}(jQuery));