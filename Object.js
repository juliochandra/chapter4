console.log("===>Konversi Array ke Objek<===");
let fruits = ["Apel", "Mangga", "Pisang", "Jeruk"];
let amount = [4, 6, 6, 5];
let result = {};
for (let i = 0; i < fruits.length; i++) {
  result[fruits[i]] = amount[i];
}
console.log(result);

console.log("===>Menghitung Kemunculan Kata<===");
let favWord = "saya suka makan nasi goreng dan saya juga suka minum teh";
let favWordObj = {};
let words = favWord.split(" ");
for (let word of words) {
  if (!favWordObj[word]) {
    favWordObj[word] = 1;
  } else {
    favWordObj[word]++;
  }
}
console.log(favWordObj);

console.log("===>Grup Orang Berdasarkan Usia<===");
const peoples = [
  { nama: "Budi", usia: 25 },
  { nama: "Ana", usia: 20 },
  { nama: "Citra", usia: 25 },
  { nama: "Dewi", usia: 32 },
  { nama: "Eka", usia: 30 },
];
let collectionUmur = {};
for (let people of peoples) {
  const { usia, nama } = people;

  if (!collectionUmur[usia]) {
    collectionUmur[usia] = [];
  }
  collectionUmur[usia].push({ nama, usia });
}
let umurDewi;
for (let age in collectionUmur) {
  const peopleWithAge = collectionUmur[age];
  for (let person of peopleWithAge) {
    if (person.nama === "Dewi") {
      umurDewi = person.usia;
    }
  }
}
console.log(collectionUmur);
console.log("Usia Dewi:", umurDewi);

console.log("===>Mengakses Properti Bertingkat<===");
const data = {
  user: {
    profile: {
      name: "John Doe",
      address: {
        city: "Jakarta",
        postalCode: "12345",
      },
    },
  },
};

let result2 = data.user.profile.address.city;
console.log(result2);

console.log("===>Penghitungan Suara Pemilihan<===");
const suara = [
  "Budi",
  "Ana",
  "Budi",
  "Citra",
  "Ana",
  "Budi",
  "Dewi",
  "Dewi",
  "Ana",
];
let hasilHitungSuara = {};
for (let caleg of suara) {
  if (!hasilHitungSuara[caleg]) {
    hasilHitungSuara[caleg] = 1;
  } else {
    hasilHitungSuara[caleg]++;
  }
}
console.log(hasilHitungSuara);

console.log("===>Menggabungkan Beberapa Objek<===");
const obj1 = { a: 5, b: 7, c: 3 };
const obj2 = { a: 4, b: 1, c: 8 };
const obj3 = { a: 9, b: 2, c: 5 };
const objGabungan = {};
for (let key in obj1) {
  objGabungan[key] = obj1[key] + obj2[key] + obj3[key];
}
console.log(objGabungan);

console.log("===>Penyusunan Ulang Objek<===");
const kota = {
  Jakarta: 10,
  Bandung: 5,
  Surabaya: 7,
  Medan: 4,
};

console.log("===>Konversi Objek ke Array<===");
let arrayKota = [];
for (let key in kota) {
  let tampObj = {
    namaKota: key,
    nilai: kota[key],
  };
  arrayKota.push(tampObj);
}
console.log(arrayKota);
