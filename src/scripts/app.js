'use strict';

import { gsap } from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


// const devSections = gsap.utils.toArray(".section--dev");

// var i = 0;
// var j = 1;
// var topSpace;
// var endTopSpace;

// devSections.forEach(function(section) {

//   topSpace = 200 + i + "px";
//   endTopSpace = "bottom " + 200 + i + "px";

//   gsap.to(section,
//     {position: "sticky", top: topSpace, scale: .9},
//     {scrollTrigger: {
//       trigger: section,
//       start: "top 200px",
//       end: endTopSpace,
//       scrub: true,
//       }
//     });

//   i = i + 40;
    
// });
gsap.to(".section--dev1", {
  scale: 1,

  scrollTrigger: {
    trigger: ".section--dev1",
    start: "top bottom",
  }});

gsap.to(".section--dev1", {
  position: "sticky",
  top: "140px",
  
  scrollTrigger: {
    trigger: ".section--dev1",
    start: "top 300px",
  }});

gsap.to(".section--dev1", {
  scale: .9,

  scrollTrigger: {
    trigger: ".section--dev2",
    start: "top 340px",
    end: "top 240px",
    scrub: true,
  }});

gsap.to(".section--dev2", {
  position: "sticky",
  top: "180px",
  scale: 1,
  
  scrollTrigger: {
    trigger: ".section--dev2",
    start: "top 340px",
  }});

gsap.fromTo(".section--dev1", {scale: .9},{
  scale: .8,

  scrollTrigger: {
    trigger: ".section--dev3",
    start: "top 380px",
    end: "top 280px",
    scrub: true,
  }});

gsap.to(".section--dev2", {
  scale: .9,

  scrollTrigger: {
    trigger: ".section--dev3",
    start: "top 380px",
    end: "top 280px",
    scrub: true,
  }});

gsap.to(".section--dev3", {
  position: "sticky",
  top: "220px",
  scale: 1,
  
  scrollTrigger: {
    trigger: ".section--dev3",
    start: "top 380px",
  }});



  // Sticky nav

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {

  var currentScrollpos = window.pageYOffset;
  if(prevScrollpos > currentScrollpos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-120px";
  }

  prevScrollpos = currentScrollpos;
}