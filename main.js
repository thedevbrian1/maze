window.addEventListener('load', function() {


    function moveCar() {
        let tl = gsap.timeline();
        tl.fromTo('#van', {x: -50, y: -10, autoAlpha: 0}, {duration: 2, x: 0, y: 10, autoAlpha: 1});
        return tl;
    }

    function moveManWithCable() {
        let tl = gsap.timeline();
        tl.to('#carrying-wire', {duration: 2, x: 20, autoAlpha: 1, onComplete: clear});
        return tl;
    }

    function wireOnWall() {
        let tl = gsap.timeline();
        tl.to('#wire-on-wall', {duration: 2, autoAlpha: 1})
          .from('#man-cable', {duration: 2, x: -30, ease: 'linear'}, '<')
        //   .from('#wall', {duration: 2, y: -20, ease: 'linear'}, '<');
        return tl;
    }
   
    function openGrid() {
        let tl = gsap.timeline();
        tl.to('#opening-grid', {duration: 2, autoAlpha: 1, ease: 'linear'})
          .from('#man-opening-generator', {duration: 2, y: -10, x: 5}, '<')
          .from('#right-generator-door', {duration: 2, rotationZ: -2, y: -3, transformOrigin: '50% 50%', ease: 'linear'}, '<')
          .to('#opening-grid', {duration: 2, rotationY: 180, transformOrigin: '50% 50%', ease: 'linear'})
          .to('#opening-grid', {duration: 2, scale: 0.8, onComplete: clear}, '<');
        return tl;
    }

    function kneelOnGrid() {
        let tl = gsap.timeline();
        tl.to('#kneeling-grid', {duration: 2, autoAlpha: 1, ease: 'linear'});
        return tl;
    }

    function climbPole() {
        let tl = gsap.timeline();
        tl.to('#climbing-pole', {duration: 2, autoAlpha: 1})
         .fromTo('#man', {y: 27},{duration: 2, y: -10, ease: 'linear'}, '-=1');
         return tl;
    }

    function flipSwitch() {
        let tl = gsap.timeline();
        tl.to('#holding-switch', {duration: 2, autoAlpha: 1})
          .to('#switch', {duration: 2, rotationZ: -10, y: 1, transformOrigin: '100% 100%', ease: 'linear'});
        return tl;
    }

    function showHouse() {
      let tl = gsap.timeline();
      tl.to('#house', {duration: 2, autoAlpha: 1, ease: 'linear'});
      return tl;
    }

    function lightHouse() {
      let tl = gsap.timeline();
      let windows = ['#rect601', '#rect641', '#rect650', '#rect652', '#rect654', '#rect656', '#rect673', '#rect675', '#rect677', '#rect679', 
      '#rect717', '#rect719', '#rect721', '#rect723', '#rect696', '#rect698', '#rect700', '#rect702', '#rect770', '#rect772', '#rect774', '#rect776', '#rect792', '#rect794', '#rect796', '#rect798', '#rect800'];
      tl.to(windows, {duration: 1, fill: 'yellow', ease: 'bounce.inOut'});
      return tl;
    }
    function clear() {
        gsap.to('#carrying-wire', {duration: 1, autoAlpha: 0, ease: 'linear'});
        gsap.to('#opening-grid', {duration: 1, autoAlpha: 0, ease: 'linear'});
    }


    const tl = gsap.timeline();
    tl.add(moveCar())
      .add(showHouse(), '<')
      .add(moveManWithCable(), '>')
      .add(wireOnWall(), '>')
      .add(openGrid(), '>')
      .add(kneelOnGrid(), '-=0.5')
      .add(climbPole(), '>')
      .add(flipSwitch(), '>')
      .add(lightHouse(), '>')

      gsap.from('.outer', {duration: 0.3, scaleX:0});
      gsap.from('.inner', {duration: 0.65, yPercent: 100, ease: 'back.easeOut'});
 });
 const panels = document.querySelectorAll('.panel');
        const controller = new ScrollMagic.Controller();
        let wipe = gsap.timeline({defaults: {ease: 'linear.easeNone'}});
        wipe
           .fromTo(panels[1], {x: '-100%'}, {duration: 1, x: '0%'})
           .fromTo(panels[2], {x: '100%'}, {duration: 1, x: '0%'});

        new ScrollMagic.Scene({
            triggerElement: '#pin-container',
            triggerHook: 'onLeave',
            duration: '200%'
        })
        .setPin('#pin-container')
        .setTween(wipe)
        .addIndicators({
            colorTrigger: 'black',
            colorStart: 'black',
            colorEnd: 'black'
        })
        .addTo(controller);

// fetch('footer.html')
//     .then(response => {
//       return response.text();
//     })
//     .then(data => {
//       document.querySelector('footer').innerHTML = data;
//     })

