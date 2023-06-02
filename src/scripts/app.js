'use strict';

import { gsap } from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


// Animation section--dev
function stickyDev(){
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
    marginBottom: "0px",
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
}
// effectuée l'animation de la section--dev uniquement sur desktop
function startStickyDev(){
  if (window.innerWidth > 1024) {
    stickyDev();
  }else{
    // all mt-100 et supprimer mt-100
    document.querySelectorAll(".mt-100").forEach(function(el){
      el.classList.remove("mt-100");
    });
  }
}
startStickyDev();


// Sticky nav
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {

  var currentScrollpos = window.pageYOffset;
  if (prevScrollpos > currentScrollpos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-120px";
  }

  prevScrollpos = currentScrollpos;
}


// animation du bouton CTA au scroll (Rotation sur deux axes)
gsap.fromTo(".cta--big", {
    rotationZ: "1deg",
    rotationX: "-10deg",
    rotationY: "-20deg",
  },
  {
    rotationZ: "-1deg",
    rotationX: "20deg",
    rotationY: "20deg",

    scrollTrigger: {
    trigger: ".cta--big",
    start: "bottom bottom",
    end: "top top",
    scrub: .8,
      markers: true,
  }
});

