let fruits = ["Apel", "Mangga", "Pisang", "Jeruk"];
let amount = [4, 6, 6, 5];

let result = {};

for (let i = 0; i < fruits.length; i++) {
  result[fruits[i]] = amount[i];
}

// console.log(result);

let favWord = "saya suka makan nasi goreng dan saya juga suka minum teh";
let word = favWord.split(" ");



console.log(word);



const kota = {
  Jakarta: 10,
  Bandung: 5,
  Surabaya: 7,
  Medan: 4,
};

let arrayKota = [];
for (let key in kota) {
  let tampObj = {
    namaKota: key,
    nilai: kota[key],
  };
  arrayKota.push(tampObj);
}
// console.log(arrayKota);
