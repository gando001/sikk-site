var sikkApps = {

  init: function() {
    new WOW().init();

    $("a[href^='#']").on('click', function(e) {
      // prevent default anchor click behavior
      e.preventDefault();

      // store hash
      var hash = this.hash;

      // alter the offset based on the image clicked
      var offset = ($(this).attr("id") == "down-arrow") ? 50 : 150;

      // animate
      $('html, body').animate({
        scrollTop: $(hash).offset().top - offset
      }, 
      1000,
      function(){
         // when done, add hash to url
         // (default click behaviour)
         window.location.hash = hash;
      });
    });
  }
}