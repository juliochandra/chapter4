console.log("============ Soal Satu ============");

const kategoriUsia = (umur) => {
  if (typeof umur !== "number" || isNaN(umur) || umur < 0) {
    return "Umur tidak benar";
  }
  if (umur <= 12) {
    return "Anak - Anak";
  } else if (umur <= 19) {
    return "Remaja";
  } else if (umur <= 35) {
    return "Dewasa";
  } else {
    return "Lanjut usia";
  }
};

console.log(kategoriUsia(8));
// Output: Anak-anak

console.log(kategoriUsia(15));
// Output: Remaja

console.log(kategoriUsia(25));
// Output: Dewasa

console.log(kategoriUsia(40));
// Output: Lanjut Usia

console.log("============ Soal Dua ============");

const hitungBiayaParkir = (lamaParkir, hari, liburnasional) => {};
