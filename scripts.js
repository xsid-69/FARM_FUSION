document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });



 gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


 var swiper = new Swiper(".mySwiper", {
   effect: "coverflow",
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: "auto",
   coverflowEffect: {
     rotate: 50,
     stretch: 0,
     depth: 100,
     modifier: 1,
     slideShadows: true,
   },
   pagination: {
     el: ".swiper-pagination",
   },
 });


 function cursorEffects(){
  var page1Content=document.querySelector(".hero")
var cursor=document.querySelector("#cursor")

page1Content.addEventListener("mousemove", function(dets){
  gsap.to(cursor,{
      x:dets.x,
      y:dets.y
  })
})

page1Content.addEventListener("mouseenter", function(){
  gsap.to(cursor,{
      scale:1
  })
})
page1Content.addEventListener("mouseleave", function(){
  gsap.to(cursor,{
      scale:0
  })
})
}
cursorEffects();