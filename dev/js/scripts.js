// import { gsap } from "gsap";

import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { CustomWiggle, CustomEase } from "gsap/all";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";

gsap.registerPlugin(Flip, MotionPathPlugin, DrawSVGPlugin, Physics2DPlugin, CustomWiggle, CustomEase);

function body(){

    CustomWiggle.create("tailWiggle", {wiggles: 8});
    let tl = gsap.timeline({repeat: -1});
    tl.to("#logo", {duration:1,y:-100}, 'moveToTop');
    tl.to("#tail", {duration:1,y:10, ease: "tailWiggle"}, 'moveToTop')
    tl.to("#wing", {duration:1,rotate: 30, transformOrigin: '50% 50%'}, 'moveToTop')
    tl.to("#beak", {duration:1,x: 10}, 'moveToTop')
    tl.to("#beak", {duration:1,rotate: 30, transformOrigin: '50% 50%'}, 'moveToTop')
    tl.to("#beak", {duration:1,x: -10}, 'birdGoingDown')
    tl.to("#wing", {duration:1,rotate: -20, transformOrigin: '50% 50%'}, 'birdGoingDown')
    tl.to("#logo", {duration:1,y:120}, 'birdGoingDown');
    tl.to("#wing", {duration:1,rotate: 0, transformOrigin: '50% 50%'}, 'birdGoesStart')
    tl.to("#logo", {duration:1,y:0}, 'birdGoesStart');

    return tl; 

}

body();