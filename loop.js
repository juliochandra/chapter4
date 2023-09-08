for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`${i} adalah angka genap`);
  } else if (i % 2 == 1) {
    console.log(`${i} adalah angka ganjil`);
  }
}

/*
Break Down

iteration 1
let i = 1
1 <= 20 // => true
  run code :
    check condition :
      1 % 2 == 0 // => false
      1 % 2 == 1 // => true
        run code :
          console.log(`${i} adalah angka ganjil`)
          print "1 adalah angka ganjil"
i++ // => i + 1

iteration 2
i = 2
2 <= 20 // => true
run code :
    check condition :
      2 % 2 == 0 // => true
        run code :
          console.log(`${i} adalah angka genap`)
          print "2 adalah angka genap"
i++ // => i + 1

iteration 3
let i = 3
3 <= 20 // => true
  run code :
    check condition :
      3 % 2 == 0 // => false
      3 % 2 == 1 // => true
        run code :
          console.log(`${i} adalah angka ganjil`)
          print "3 adalah angka ganjil"
i++ // => i + 1
*/

let jumlah = 0;
for (let i = 1; i <= 100; i++) {
  jumlah += i;
  console.log(jumlah);
}

/*
Break Down

iteration 1
let jumlah = 0
let i = 1
1 <= 100 // => true
  run code :
    0 + 1 = 1
    console.log(jumlah)
    print "1"
i++ // => i + 1

iteration 2
jumlah = 1
i = 2
2 <= 100 // => true
  run code :
    1 + 2 = 3
    console.log(jumlah)
    print "3"
i++ // => i + 1

iteration 3
jumlah = 3
i = 3
3 <= 100 // => true
  run code :
    3 + 3 = 6
    console.log(jumlah)
    print "6"
i++ // => i + 1

*/

let n = 5;

console.log("");
console.log("===Pola Segitiga Naik===");
console.log("");

let row = "";
for (let i = 1; i <= n; i++) {
  row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

/*
Break Down

iteration 1
let n = 5
let row = ""
let i = 1
1 <= 5 // => true
  run code :
    row = ""
    iteration 1.1
    let j = 1
    j <= i
    1 <= 1 // => true
      run code :
        row +="*"
        row ="*"
    j++
    iteration 1.2
    j = 2
    2 <= 1 // => false
    console.log(row)
    print "*"
i++

iteration 2
i = 2
2 <= 5 // true
  run code : 
    row =""
    iteration 1.1
    let j = 1
    j <= i
    1 <= 2 // => true
      run code :
        row += "*"
        row = "*"
    j++
    iteration 1.2
    j = 2
    2 <= 2 // => true
      run code :
        row += "*"
        row ="**"
    j++
    iteration 1.3
    j = 3
    3 <= 2 // => false
    console.log(row)
    print "**"
i++
*/

console.log("");
console.log("===Pola Segitiga Terbalik===");
console.log("");

for (let i = n; i >= 1; i--) {
  row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

/*
Break Down

iteration 1
let n = 5
let row = ""
let i = 5
5 >= 1 // => true
  run code :
    row = ""
    iteration 1.1
    let j = 1
    j <= i
    1 <= 5 // => true
      run code :
        row +="*"
        row ="*"
    j++
    iteration 1.2
    j = 2
    2 <= 5 // => true
      run code :
        row += "*"
        row ="**"
    j++
    iteration 1.3
    j = 3
    3 <= 5 // => true
      run code :
        row +="*"
        row ="***"
    j++
    iteration 1.4
    j = 4
    4 <= 5 // => true
      run code :
        row +="*"
        row ="****"
    j++
    iteration 1.5
    j = 5
    5 <= 5 // => true
      run code :
        row +="*"
        row ="*****"
    j++
    iteration 1.6
    j = 6
    6 <= 5 // => false
    console.log(row)
    print "*****"
i--
*/

console.log("");
console.log("===Pola Berlian===");
console.log("");

// Loop untuk menciptakan segitiga atas dari pola berlian
let space = "";
let star = "";

for (let i = 1; i < 2 * n; i++) {
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
  } else if (i > n) {
    space = "";
    star = "";
    for (let j = 1; j <= i - n; j++) {
      space += " ";
    }
    for (let k = 1; k <= (n - (i - n)) * 2 - 1; k++) {
      star += "*";
    }
    console.log(space + star);
  }
}

console.log("");
console.log("===Pola Berlian Cara Kedua===");
console.log("");

for (let i = 1; i <= n; i++) {
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

for (let i = 1; i < n; i++) {
  space = "";
  star = "";
  for (let j = 1; j <= i; j++) {
    space += " ";
  }
  for (let k = 1; k <= (n - i) * 2 - 1; k++) {
    star += "*";
  }
  console.log(space + star);
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

console.log("");
console.log("===Pola Berlian===");
console.log("");

for (let i = 1; i < 2 * n; i++) {
  // console.log(i);
  space = "";
  star = "";
  if (i <= n) {
    for (let j = 1; j <= n - i; j++) {
      // console.log(j);
      space += " ";
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      // console.log(k);
      star += "*";
    }
  } else if (i > n) {
    for (let j = 1; j <= i - n; j++) {
      // console.log(j);
      space += " ";
    }
    for (let k = 1; k <= (n - (i - n)) * 2 - 1; k++) {
      // console.log(k);
      star += "*";
    }
  }
  console.log(space + star);
}
