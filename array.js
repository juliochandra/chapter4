console.log("===Hapus item terkhir===");
let fruits = ["apple", "banana", "cherry"];
fruits.pop();
console.log(fruits);
// Output: ['apple', 'banana']

console.log("===Cari panjang array===");
let bulkAlphabet = ["a", "b", "c", "d", "e"];
console.log(bulkAlphabet.length);
// Output: 5

console.log("===Cari nilai tertinggi dan terendah===");
let angkaUnik = [21, 19, 10, 89, 3, 20, 33, 34];
let angkaTertinggi = 0;
let angkaTerendah = Infinity;

for (let i = 0; i < angkaUnik.length; i++) {
  if (angkaUnik[i] > angkaTertinggi) {
    angkaTertinggi = angkaUnik[i];
  }
}
for (let i = 0; i < angkaUnik.length; i++) {
  if (angkaUnik[i] < angkaTerendah) {
    angkaTerendah = angkaUnik[i];
  }
}
console.log(angkaTertinggi);
console.log(angkaTerendah);

console.log("===Gabungkan Dua Array===");
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result1 = [];

for (let i = 0; i < arr1.length; i++) {
  result1.push(arr1[i]);
}

for (let i = 0; i < arr2.length; i++) {
  result1.push(arr2[i]);
}

console.log(result2);

console.log("===Filter huruf ganjil===");
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let angkaGanjil = [];

for (let element of arr3) {
  if (element % 2 == 1) {
    angkaGanjil.push(element);
  }
}
console.log(angkaGanjil); // [1, 3, 5, 7, 9]

console.log("===Susun ulang array===");

let angkaKumupulan = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
angkaKumupulan.sort();
angkaKumupulan.reverse();

let uniqueArray = [];
for (let i = 0; i < angkaKumupulan.length; i++) {
  if (uniqueArray.indexOf(angkaKumupulan[i]) == -1) {
    uniqueArray.push(angkaKumupulan[i]);
  }
}
console.log(uniqueArray);
// Output : [9, 6, 5, 4, 3, 2, 1]

console.log("=== Menggabungkan Array dengan Spesifik ===");
let kumpulanAngka = [1, 2, 3];
let kumpulanHuruf = ["a", "b", "c"];
let hasilGabungan = [];

for (let i = 0; i < kumpulanAngka.length || i < kumpulanHuruf.length; i++) {
  hasilGabungan.push(kumpulanHuruf[i]);
  hasilGabungan.push(kumpulanAngka[i]);
}

console.log(hasilGabungan);

