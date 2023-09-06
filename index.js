console.log("============ Soal Satu ============");

const kategoriUsia = (umur) => {
  // validation
  if (typeof umur !== "number" || isNaN(umur) || umur < 0) {
    return "Umur tidak benar";
  }
  // validation

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

  // validation
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
  // validation

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

console.log("============ Soal Tiga ============");

function jadwalFestival(hari, cuaca, suhu, angin) {
  let daftarAcara = "Pameran seni, ";

  // validation
  if (typeof hari !== "string") {
    return "hari tidak valid";
  } else {
    hari = hari.toLowerCase();
  }
  if (typeof cuaca !== "string") {
    return "cuaca tidak valid";
  } else {
    cuaca = cuaca.toLowerCase();
  }
  if (typeof suhu !== "number") {
    return "suhu tidak valid";
  }
  if (typeof angin !== "number") {
    return "angin tidak valid";
  }
  // validation

  if (cuaca === "hujan" && angin > 20) {
    daftarAcara += "semua acara di luar ruangan akan dibatalkan, ";
  } else if (cuaca === "hujan" && angin < 20) {
    daftarAcara += "acara dalam ruangan, ";
  }
  if (suhu < 5) {
    daftarAcara += "acara dalam ruangan,";
  }
  if (cuaca === "cerah" && suhu > 25) {
    daftarAcara += "pesta es krim, ";
  }
  if (hari === "minggu" && cuaca === "cerah") {
    daftarAcara += "maraton senja";
  }

  return `Daftar Acara: ${daftarAcara} `;
}

console.log(jadwalFestival("Sabtu", "Hujan", 23, 30));
// Output: Daftar Acara: Pameran Seni.
console.log(jadwalFestival("Sabtu", "Hujan", 23, 10));
// Output: Daftar Acara: Pameran Seni, Acara Dalam Ruangan.
console.log(jadwalFestival("Minggu", "Cerah", 27, 8));
// Output: Daftar Acara: Pameran Seni, Pesta Es Krim, Maraton Senja.
