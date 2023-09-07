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

let n = 5;

console.log("");
console.log("===Pola Segitiga Naik===");
console.log("");

let row = "";
for (let i = 1; i <= n; i++) {
  row = "";
  for (let j = 0; j < i; j++) {
    row += "*";
  }
  console.log(row);
}

console.log("");
console.log("===Pola Segitiga Terbalik===");
console.log("");

for (let i = n; i >= 1; i--) {
  row = "";
  for (let j = 0; j < i; j++) {
    row += "*";
  }
  console.log(row);
}

console.log("");
console.log("===Pola Segitiga Berlian===");
console.log("");

// Loop untuk menciptakan segitiga atas dari pola berlian
let space = "";
let star = "";
let o = 4;

for (let i = 1; i < 2 * n; i++) {
  // console.log(i);
  if (i <= n) {
    space = "";
    star = "";
    for (let j = 1; j <= n - i; j++) {
      space += " ";
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      star += "*";
    }
    console.log(space + star);
  }
  if (i > n) {
    space = "";
    star = "";
    for (let j = 1; j <= i - n; j++) {
      space += " ";
    }
    for (let k = 1; k <= o * 2 - 1; k++) {
      star += "*";
    }
    o--;
    console.log(space + star);
  }
}

console.log("");
console.log("===Pola Segitiga Bilangan===");
console.log("");

let angka = "";
for (let i = 1; i <= n; i++) {
  angka = "";
  for (let j = 1; j <= i; j++) {
    angka += j;
    if (j < i) {
      angka += "*";
    }
  }
  console.log(angka);
}
