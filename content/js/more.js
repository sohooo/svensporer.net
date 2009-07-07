document.observe('dom:loaded',function() {
/* dom:loaded event is fired by prototype.js
   when all html is loaded and the DOM tree built,
   but not yet all images and css are loaded */

// hide body when js is available
   $$('#more').invoke('hide');

// indicate button to flip page
   var flip = $('flip');
   new Effect.Pulsate(flip, {
     delay: 3,
     pulses: 3,
     from: 0.4,
     duration: 3
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
    new Effect.SlideDown(headr);
    new Effect.BlindUp(more, { queue: 'end', duration: 0.5 });

    headr.addClassName('headrOpen');
    headr.removeClassName('headrClosed');

    more.addClassName('moreClosed');
    more.removeClassName('moreOpen');

  }
}
