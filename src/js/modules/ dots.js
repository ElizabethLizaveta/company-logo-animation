const dots = (($) => {
  const horizontalCenter = $('.dots-container').innerWidth() / 2;
  const verticalCenter = $('.dots-container').innerHeight();

  function dotsEffect() {
    const tl = new TimelineMax();
    const ball2= $('.ball-2');

    tl.to('.ball-1', 5, {
      x: horizontalCenter, y: verticalCenter, ease: Power1.easeOut,
    });

    ball2.click(() => {
      TweenMax.to('.ball-2', 3, {
        x: -1 * horizontalCenter, y: verticalCenter, ease: Bounce.easeOut,
      });
    });

    // eslint-disable-next-line no-undef
    /* tl.addLabel('top')
      .to('.ball-1', 5, {
        x: horizontalCenter, y: verticalCenter, ease: Bounce.easeOut,
      }, 'top')
      .to('.ball-2', 3, {
        x: -1 * horizontalCenter, y: verticalCenter, ease: Bounce.easeOut,
      }, 'top')
      .to('.ball-3', 3, {
        x: horizontalCenter, y: -1 * verticalCenter, ease: Bounce.easeOut,
      }, 'top')
      .to('.ball-4', 5, {
        x: -1 * horizontalCenter, y: -1 * verticalCenter, ease: Bounce.easeOut,
      }, 'top'); */
  }
  const init = () => {
    dotsEffect();
  };

  return { init };
})(jQuery);

export default dots;
