'use strict';

import { gsap } from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function animDev(){
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
      start: "top 220px",
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
    scale: 1,
    
    scrollTrigger: {
      trigger: ".section--dev2",
      start: "top 280px",
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
  
}
animDev();

// Burger menu


const menuBurger = document.querySelector('.navigation__burger');
const menu = document.querySelector('.navigation');

menuBurger.addEventListener('click', function(){
  menu.classList.toggle('navigation--open');
})

