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

const hitungBiayaParkir = (lamaParkir, hari, liburnasional) => {
  let biayaParkir = 0;

  if (typeof lamaParkir !== "number" || isNaN(lamaParkir) || lamaParkir < 0) {
    return "lamaParkir tidak valid";
  }

  if (typeof hari !== "string") {
    return "hari tidak valid";
  } else {
    hari = hari.toLowerCase();
  }

  if (typeof liburnasional !== "boolean") {
    return "libur nasional tidak valid";
  }

  if (lamaParkir >= 1) {
    biayaParkir += 10000;
  }
  if (lamaParkir > 1) {
    biayaParkir += (lamaParkir - 1) * 5000;
  }

  if (lamaParkir > 5) {
    biayaParkir -= 10000;
  }

  if (hari == "minggu") {
    biayaParkir += 5000;
  }

  if (biayaParkir > 30000 && liburnasional) {
    biayaParkir -= 7000;
  }

  return `Biaya Parkir: ${biayaParkir}`;
};

console.log(hitungBiayaParkir(2, "Sabtu", false));
// Output: Biaya Parkir: Rp15000.
console.log(hitungBiayaParkir(6, "Minggu", true));
// Output: Biaya Parkir: Rp25000.

