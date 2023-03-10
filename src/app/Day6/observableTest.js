"use strict";
// import { interval, take, range, concat } from "rxjs";
exports.__esModule = true;
// // const timer = interval(1000).pipe(take(4))
// // const sequence = range(1, 10);
// const timer1 = interval(1000).pipe(take(10));
// const timer2 = interval(2000).pipe(take(6));
// const timer3 = interval(500).pipe(take(10));
// const result = concat(timer1, timer2, timer3)
// result.subscribe(x => console.log(x))
var rxjs_1 = require("rxjs");
var clicks = (0, rxjs_1.fromEvent)(document, 'click');
var higherOrder = clicks.pipe((0, rxjs_1.map)(function () { return (0, rxjs_1.interval)(1000).pipe((0, rxjs_1.take)(4)); }));
var firstOrder = higherOrder.pipe((0, rxjs_1.concatAll)());
firstOrder.subscribe(function (x) { return console.log(x); });
