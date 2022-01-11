// const simple=require("./modulesecond");     // Common Module
// simple();
import {simple2} from  "./modulethird.mjs"
simple2();
import  simple3  from "./modulethird.mjs";
simple3();
import * as a from "./modulethird.mjs"
console.log(a);                
console.log(a.simple2());      // We have to return value in function   
// console.log(a.simple3());   // This won't work as default function
