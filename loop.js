// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(`${i} adalah angka genap`);
//   } else if (i % 2 == 1) {
//     console.log(`${i} adalah angka ganjil`);
//   }
// }

// let jumlah = 0;
// for (let i = 0; i <= 100; i++) {
//   jumlah += i;
//   console.log(jumlah);
// }

console.log("");
console.log("===Pola Segitiga Naik===");
console.log("");

let n = 5;
let star = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);

console.log("");
console.log("===Pola Segitiga Terbalik===");
console.log("");

let star2 = "";

for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    star2 += "*";
  }
  star2 += "\n";
}
console.log(star2);
