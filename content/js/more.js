document.observe('dom:loaded',function() {
/* dom:loaded event is fired by prototype.js
   when all html is loaded and the DOM tree built,
   but not yet all images and css are loaded */

// hide body when js is available
   $$('#more').invoke('hide');

// indicate button to flip page
   var flip = $('flip');
   new Effect.Pulsate(flip, {
     delay: 2,
     pulses: 2,
     from: 0.4,
     duration: 2
   });

});

function trigger() {

  var more = $('more');
  var headr = $('headr');

  if(more.hasClassName('moreClosed'))
  {
    // remove header, show details
    new Effect.BlindUp(headr);
    new Effect.BlindDown(more, { queue: 'end', duration: 0.5 });

    headr.addClassName('headrClosed');
    headr.removeClassName('headrOpen');

    more.addClassName('moreOpen');
    more.removeClassName('moreClosed');
  }
    else
  {
    // show header, remove details
    new Effect.BlindUp(more);
    new Effect.SlideDown(headr, { queue: 'end', duration: 0.3 });

    headr.addClassName('headrOpen');
    headr.removeClassName('headrClosed');

    more.addClassName('moreClosed');
    more.removeClassName('moreOpen');

  }
}
