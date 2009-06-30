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
