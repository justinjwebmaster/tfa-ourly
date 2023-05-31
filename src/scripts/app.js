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
  top: "200px",
  
  scrollTrigger: {
    trigger: ".section--dev1",
    start: "top 200px",
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
  top: "240px",
  zIndex: 110,
  
  scrollTrigger: {
    trigger: ".section--dev2",
    start: "top 240px",
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
  top: "280px",
  
  scrollTrigger: {
    trigger: ".section--dev3",
    start: "top 380px",
    end: "top 280px",
    scrub: true,
  }});