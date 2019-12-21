const dots = (($) => {
  function ballsAnimate() {
    const box1 = $('.box1');
    const box2 = $('.box2');
    const box3 = $('.box3');
    const topText = $('.top-text');
    const middleText = $('.middle-text');
    const bottomText = $('.bottom-text');
    const floor = $('.floor');

    const tl = new TimelineMax();

    tl.set([topText, middleText, bottomText], {
      scale: 0.1,
      autoAlpha: 0,
    })
      .set(topText, { y: '0' })
      .set(middleText, { x: '+=2000' })
      .set(bottomText, { y: '+=1000' })
      .from(box1, 3, { // box 1 rotation and falling
        y: '-100vh',
        rotation: 100,
        ease: Bounce.easeOut,
      })
      .from(box2, 3, { // box 2 rotation and falling
        y: '-200vh',
        rotation: 100,
        ease: Bounce.easeOut,
      }, '-=1')
      .from(box3, 2, { // box 3 rotation and falling
        y: '-200vh',
        rotation: 50,
        ease: Bounce.easeOut,
      }, '-=4')
      .addLabel('boxes')
      .from($('body'), 10, {     //bg change color
        backgroundColor: '#000',
        ease: Expo.easeOut,
      }, 'boxes')
      .to(box1, 10, { // box 1 rotation right
        right: '300',
        y: '-=200',
        rotation: 360,
        scale: 0.6,
        ease: Elastic.easeOut,
      }, 'boxes')
      .to(box2, 10, { // box 2 rotation left
        left: '300',
        y: '+=200',
        rotation: -360,
        scale: 0.5,
        ease: Elastic.easeOut,
      }, 'boxes')
      .to(box3, 10, { // box 3 scale
        scale: 1.3,
        ease: Elastic.easeOut,
      }, 'boxes')
      .to([box1, box2], 1, { // boxes 1 and 2 scale down and disappear
        rotationX: 180,
        scale: 0,
      }, '-=8');

    const tl2 = new TimelineMax({
      delay: 5.5,
    });
    tl2.to(topText, 0.5, { // text animation begins
      scale: 1,
      autoAlpha: 1,
      rotation: 360,
      y: 0,
    })
      .to(middleText, 0.5, {
        scale: 1,
        autoAlpha: 1,
        rotation: -360,
        x: 0,
      }, '-=0.3')
      .to(bottomText, 0.5, {
        scale: 1,
        autoAlpha: 1,
        y: 0,
      }, '-=0.3')
      .to(topText, 0.8, {
        y: '-=50',
        scale: 1.2,
        ease: Back.easeOut.config(4),
      }, '+=0.4')
      .to(middleText, 0.6, {
        y: '+=50',
        x: '+=20',
        ease: Back.easeOut.config(4),
      }, '-=1')
      .to(bottomText, 0.5, {
        y: '-=35',
        scale: 1.5,
      });

    const tl3 = new TimelineMax({
      delay: 5,
    });

    tl3.to($('body'), 2, {
      backgroundColor: '#fff',
    })
      .to(box3, 2, {
        boxShadow: '#fff',
        backgroundColor: '#fff',
        scale: 1.3,
      });


    const tl4 = new TimelineMax();

    tl4.to(floor, 10, {  //floor falls
      skewX: 180,
      delay: 5,
      y: '+=1000',
    });
  }

  const init = () => {
    ballsAnimate();
  };

  return { init };
})(jQuery);

export default dots;
