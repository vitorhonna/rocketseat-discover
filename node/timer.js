process.stdout.write("Running");
let timer3s = setTimeout(() => {
  clearInterval(dots)
  console.log(" 3 seconds have passed!");
}, 3000);

// let dot1 = setTimeout(() => {
//   process.stdout.write(".");
//   let dot2 = setTimeout(() => {
//     process.stdout.write(".");
//     let dot3 = setTimeout(() => {
//       process.stdout.write(".");
//     }, 800);
//   }, 800);
// }, 800);

// console.log("Cancelling...");
// clearTimeout(timer3s);

let dots = setInterval(()=>{
  process.stdout.write(".");
}, 250)