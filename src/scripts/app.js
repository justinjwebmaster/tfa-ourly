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
    top: "100px",

    scrollTrigger: {
      trigger: ".section--dev1",
      start: "top 300px",
    }});

  gsap.to(".section--dev1", {
    scale: .9,

    scrollTrigger: {
      trigger: ".section--dev2",
      start: "top 300px",
      end: "top 240px",
      scrub: true,
    }});

  gsap.to(".section--dev2", {
    position: "sticky",
    top: "140px",
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
    top: "180px",
    scale: 1,

    scrollTrigger: {
      trigger: ".section--dev3",
      start: "top 380px",
    }});
}
// effectuée l'animation de la section--dev uniquement sur desktop
function startStickyDev(){
  if (window.innerWidth > 1024 && window.innerHeight > 800){
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
  if (prevScrollpos < currentScrollpos && document.querySelector(".navigation__list").classList.contains("navigation__list--active") == false) {
    document.getElementById("navbar").style.top = "-120px";
  } else {
    document.getElementById("navbar").style.top = "0";
  }

  prevScrollpos = currentScrollpos;
}


// animation animRota au scroll (Rotation sur 3 axes) (CTA)
document.querySelectorAll(".animRota").forEach(function(el){
gsap.fromTo(el, {
    rotationZ: "1deg",
    rotationX: "-10deg",
    rotationY: "-20deg",
  },
  {
    rotationZ: "-1deg",
    rotationX: "20deg",
    rotationY: "20deg",

    scrollTrigger: {
    trigger: el,
    start: "bottom bottom",
    end: "top top",
    scrub: .8,
  }
});
});


// burger menu
document.querySelector(".navigation__burger").addEventListener("click", function(){
  document.querySelector(".navigation__burger").classList.toggle("navigation__burger--active");
  document.querySelector(".navigation__list").classList.toggle("navigation__list--active");
  document.querySelectorAll(".navigation__el").forEach(function(el){
    el.addEventListener("click", function() {
      document.querySelector(".navigation__burger").classList.remove("navigation__burger--active");
      document.querySelector(".navigation__list").classList.remove("navigation__list--active");
    })});

  document.querySelector(".navigation__brand").addEventListener("click", function() {
    document.querySelector(".navigation__burger").classList.remove("navigation__burger--active");
    document.querySelector(".navigation__list").classList.remove("navigation__list--active");
  });
});
