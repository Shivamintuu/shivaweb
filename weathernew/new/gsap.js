
 var tl=gsap.timeline();
 tl.from(".input",{duration:1,opacity:0,delay:1.5,scale:0.3,stagger:0.25});
tl.to(".weatherimg",{rotation:360,repat:5,stagger:0.5})
tl.from(".temp",{duration:1,opacity:0,delay:0.5,x:-200,stagger:0.25});
tl.from(".city",{duration:1,opacity:0,delay:1,x:200,stagger:0.25});
 
//  document.addEventListener("DOMContentLoaded", function () {
//     const searchbtn = document.querySelector("button");
//     var tl=gsap.timeline();
//     tl.to(".weatherimg",{rotation:360,repat:5,})
//     tl.from(".temp",{duration:1,opacity:0,delay:1.5,x:-200,stagger:0.25});
//     tl.from(".city",{duration:2,opacity:0,delay:1.5,x:200,stagger:0.25});
     
//  });



// document.addEventListener("DOMContentLoaded", (event) => {
//      gsap.to(".weatherimg",{
//        rotation:360,
//        repat:5,
//      })
// });


// gsap.from(".city",{duration:2,opacity:0,delay:1.5,stagger:0.25});
// gsap.from(".temp",{duration:2,opacity:0,delay:1.5,stagger:0.25});

// gsap.registerPlugin(SplitText) 
// var split = new SplitText("#speed", {type: "chars"});
// gsap.from(split.chars, {
//   duration: 1, 
//   y: 100, 
//   autoAlpha: 0, 
//   stagger: 0.05
// });