// import { gsap } from "gsap";

import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(Flip, MotionPathPlugin, DrawSVGPlugin, Physics2DPlugin);

const mainTL = gsap.timeline();

GSDevTools.create();