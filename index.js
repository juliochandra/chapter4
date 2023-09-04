let umur = 20;

const kategoriUsia = (usia) => {
  if (typeof usia != "number") {
    return "bukan number";
  }
  console.log(usia);
  if (usia <= 12) {
    return "anak-anak";
  } else if (13 <= usia && usia <= 19) {
    return "remaja";
  } else if (20 <= usia && usia <= 35) {
    return "dewasa";
  } else {
    return "lanjut usia";
  }
};

console.log(kategoriUsia(umur));

let lamaParkir = 1;
let hari = "senin";
let liburNasional = true;

const hitungBiayaParkir = (lamaParkir, hari, liburNasional) => {
  let biayaParkir = 0;
  if (lamaParkir <= 1) {
    return (biayaParkir += 10000);
  } else if (lamaParkir >= 2) {
    biayaParkir += 10000;
    return biayaParkir + (lamaParkir - 1) * 5000;
  } else if (lamaParkir > 5) {
    biayaParkir += 10000;
    biayaParkir + (lamaParkir - 1) * 5000;
    return biayaParkir - 10000;
  } else if (hari == "minggu") {
    biayaParkir += 5000;
    return biayaParkir + 10000 + (lamaParkir - 1) * 5000 - 10000;
  } else if (biayaParkir > 30000 && liburNasional == true) {
    biayaParkir + 10000 + (lamaParkir - 1) * 5000 - 10000;
    return biayaParkir - 7000;
  }
};

console.log(hitungBiayaParkir(2, "Sabtu", false));
console.log(hitungBiayaParkir(6, "Minggu", true));
