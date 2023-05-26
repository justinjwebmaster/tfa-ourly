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
  position: "sticky",
  top: "200px",
  
  scrollTrigger: {
    trigger: ".section--dev1",
    start: "top 200px",
    end: "bottom 200px",
  }});

gsap.to(".section--dev1", {
  scale: .9,

  scrollTrigger: {
    trigger: ".section--dev1",
    start: "top 220px",
    end: "bottom 200px",
    scrub: true,
  }});

gsap.to(".section--dev2", {
  position: "sticky",
  top: "240px",
  
  scrollTrigger: {
    trigger: ".section--dev2",
    start: "top 280px",
    end: "top 240px",
  }});

gsap.to(".section--dev2", {
  scale: .9,

  scrollTrigger: {
    trigger: ".section--dev2",
    start: "top 280px",
    end: "bottom 240px",
    scrub: true,
  }});


// gsap.to(".section--dev2", {
//     position: "sticky",
//     top: "240px",
    
//     scrollTrigger: {
//       trigger: ".section--dev2",
//       start: "top 240px",
//       end: "bottom 200px",
//       scrub: true,
//     }});
  
// gsap.to(".section--dev2", {
//     scale: .9,
  
//     scrollTrigger: {
//       trigger: ".section--dev2",
//       start: "top 240px",
//       end: "bottom 200px",
//       scrub: true,
//     }});

