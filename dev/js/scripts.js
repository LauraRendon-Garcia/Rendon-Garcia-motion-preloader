// import { gsap } from "gsap";

import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { CustomWiggle, CustomEase } from "gsap/all";
// import { CustomWiggle } from "gsap/CustomWiggle";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
// import {GSDevTools} from "gsap/GSDevTools"




// CustomWiggle.create("tailWiggle", {wiggles: 6});
gsap.registerPlugin(Flip, MotionPathPlugin, DrawSVGPlugin, Physics2DPlugin, CustomWiggle, CustomEase);

// const mainTL = gsap.timeline();
// const myNum = 5;

// console.log("myNum1 ="+ myNum1a);

// function body(){
//     const myNum2 = 8;
//     console.log("myNum1 ="+ myNum1a);
//     console.log("myNum2 ="+ myNum2);
// }

function body(){

    CustomWiggle.create("tailWiggle", {wiggles: 8});
    let tl = gsap.timeline();
    tl.to("#logo", {duration:1,y:-100}, 'moveToTop');
    tl.to("#tail", {duration:1,y:20, ease: "tailWiggle"}, 'moveToTop')
    tl.to("#logo", {duration:1,y:120});
    tl.to("#logo", {duration:1,y:0});

    return tl; 

}
//console.log("myNum2 ="+ myNum2);

body();


// GSDevTools.create();

 // mainTL
 // ;