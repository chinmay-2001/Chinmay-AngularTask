// import { interval, take, range, concat } from "rxjs";

// // const timer = interval(1000).pipe(take(4))
// // const sequence = range(1, 10);
// const timer1 = interval(1000).pipe(take(10));
// const timer2 = interval(2000).pipe(take(6));
// const timer3 = interval(500).pipe(take(10));
// const result = concat(timer1, timer2, timer3)
// result.subscribe(x => console.log(x))

// import { fromEvent, map, interval, take, concatAll } from 'rxjs';

// const clicks = fromEvent(, 'click');
// const higherOrder = clicks.pipe(
//     map(() => interval(1000).pipe(take(4)))
// );
// const firstOrder = higherOrder.pipe(concatAll());
// firstOrder.subscribe(x => console.log(x));