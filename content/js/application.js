jQuery.fn.extend({
  pulsate:function(fade) {
    $(this)
      .fadeTo(400, fade)
      .fadeTo(400, 1.0);
      
    return this;
  }
})

jQuery(function () {

  // first, hide 'more' page
  $('#more').hide();

  $('#flip')
    .delay(2000)
    .pulsate(0.5)
    .pulsate(0.5)
    .pulsate(0.5);

    
  // <-> slider for toggling 'more' page
  $('#flip').toggle(

    // front view; name
    // supplying a callback function allows fx stacking
    function(e) {
      $('#flip')
        .stop(true, true)
        .fadeTo('fast', 1.0)
        
      $('#header').slideUp('slow', function() {
        $('#more').slideDown();
      });
    },

    // back view; infos
    function(e) {
      $('#more').slideUp('slow', function() {
        $('#header').slideDown();
      });
    }
  );

});

