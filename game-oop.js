class Mobil {
  constructor(nama, kecepatan, senjata) {
    this.nama = nama;
    this.kecepatan = kecepatan;
    this.kecepatanAwal = kecepatan;
    this.senjata = senjata;
    this.posisi = 0;
    this.isBergerak = false;
    this.isSerang = false;
  }

  bergerak() {
    this.isBergerak = true;
    this.posisi += this.kecepatan;
    return `${this.nama} maju. Posisi saat ini: ${this.posisi}`;
  }

  serang(lawan) {
    this.isSerang = true;
    return `${this.nama} menyerang ${lawan.nama}!`;
  }
}

class Senjata {
  constructor(nama) {
    this.nama = nama;
  }
}

class D1 extends Mobil {
  constructor() {
    super("D1", 20, "Meriam");
  }

  serang(lawan) {
    const hasilSerangan = super.serang(lawan);
    this.kecepatan -= 5;
    const hasilGerak = this.bergerak();

    let hasil = `${hasilSerangan}\nKecepatan turun jadi ${this.kecepatan}\n${hasilGerak}`;
    alert(hasil);

    if (this.posisi >= lawan.posisi) {
      lawan.posisi -= 5;
      hasil += `\nTepat sasaran! ${lawan.nama} mundur, posisi sekarang: ${lawan.posisi}`;
    } else {
      hasil += `\nSerangan Meleset!`;
    }
    this.kecepatan = this.kecepatanAwal;
    hasil += `\nKecepatan ${this.nama} kembali ke ${this.kecepatan}`;
    alert(hasil);
    return hasil;
  }
}

class D2 extends Mobil {
  constructor() {
    super("D2", 15, "Meriam");
  }

  serang(lawan) {
    const hasilSerangan = super.serang(lawan);
    this.kecepatan -= 4;
    const hasilGerak = this.bergerak();

    let hasil = `${hasilSerangan}\nKecepatan turun jadi ${this.kecepatan}\n${hasilGerak}`;
    alert(hasil);
 

    if (this.posisi >= lawan.posisi) {
      lawan.posisi -= 4;
      hasil += `\nTepat sasaran! ${lawan.nama} mundur, posisi sekarang: ${lawan.posisi}`;
    } else {
      hasil += `\nSerangan Meleset!`;
    }
    this.kecepatan = this.kecepatanAwal;
    hasil += `\nKecepatan ${this.nama} kembali ke ${this.kecepatan}`;
    alert(hasil);
    return hasil;
  }
}

class D3 extends Mobil {
  constructor() {
    super("D3", 10, "Meriam");
  }

  serang(lawan) {
    const hasilSerangan = super.serang(lawan);
    this.kecepatan -= 3;
    const hasilGerak = this.bergerak();

    let hasil = `${hasilSerangan}\nKecepatan turun jadi ${this.kecepatan}\n${hasilGerak}`;
    alert(hasil);
 

    if (this.posisi >= lawan.posisi) {
      lawan.posisi -= 3;
      hasil += `\nTepat sasaran! ${lawan.nama} mundur, posisi sekarang: ${lawan.posisi}`;
    } else {
      hasil += `\nSerangan Meleset!`;
    }
    this.kecepatan = this.kecepatanAwal;
    hasil += `\nKecepatan ${this.nama} kembali ke ${this.kecepatan}`;
    alert(hasil);
    return hasil;
  }
}

class D4 extends Mobil {
  constructor() {
    super("D4", 7, "Meriam");
  }

  serang(lawan) {
    const hasilSerangan = super.serang(lawan);
    this.kecepatan -= 2;
    const hasilGerak = this.bergerak();

    let hasil = `${hasilSerangan}\nKecepatan turun jadi ${this.kecepatan}\n${hasilGerak}`;
    alert(hasil);
 

    if (this.posisi >= lawan.posisi) {
      lawan.posisi -= 2;
      hasil += `\nTepat sasaran! ${lawan.nama} mundur, posisi sekarang: ${lawan.posisi}`;
    } else {
      hasil += `\nSerangan Meleset!`;
    }
    this.kecepatan = this.kecepatanAwal;
    hasil += `\nKecepatan ${this.nama} kembali ke ${this.kecepatan}`;
    alert(hasil);
    return hasil;
  }
}

class D5 extends Mobil {
  constructor() {
    super("D5", 5, "Meriam");
  }

  serang(lawan) {
    const hasilSerangan = super.serang(lawan);
    this.kecepatan -= 1;
    const hasilGerak = this.bergerak();

    let hasil = `${hasilSerangan}\nKecepatan turun jadi ${this.kecepatan}\n${hasilGerak}`;
    alert(hasil);
 

    if (this.posisi >= lawan.posisi) {
      lawan.posisi -= 1;
      hasil += `\nTepat sasaran! ${lawan.nama} mundur, posisi sekarang: ${lawan.posisi}`;
    } else {
      hasil += `\nSerangan Meleset!`;
    }
    this.kecepatan = this.kecepatanAwal;
    hasil += `\nKecepatan ${this.nama} kembali ke ${this.kecepatan}`;
    alert(hasil);
    return hasil;
  }
}

const mobil1 = new D1();
const mobil2 = new D2();
const mobil3 = new D3();
const mobil4 = new D4();
const mobil = new D5();

class Mesin {
  constructor(playerMobil, computerMobil) {
    this.playerMobil = playerMobil;
    this.computerMobil = computerMobil;
    this.arenaLength = 100;
  }

  aksiGerak() {
    return this.playerMobil.bergerak();
  }

  aksiSerang() {
    return this.playerMobil.serang(this.computerMobil);
  }

  cekPemenang() {
    if (this.playerMobil.posisi >= this.arenaLength) return `Kamu`;
    if (this.computerMobil.posisi >= this.arenaLength) return `Komputer`;
  }

  komputerGerak() {
    return this.computerMobil.bergerak();
  }
}

class UI {
  constructor() {
    this.semuaMobil = [new D1(), new D2(), new D3(), new D4(), new D5()];
    this.playerMobil = null;
    this.computerMobil = null;
    this.mesin = null;
  }

  pilihMobil() {
    console.log("~ Selamat Datang di Game CTR V2 ~");
    alert("~ Selamat Datang di Game CTR V2 ~");

    let pilihan = prompt(`Pilih mobil Mu:
      1. D1 kecepatan 20m/s senjata Meriam
      2. D2 kecepatan 15m/s senjata Torpedo
      3. D3 kecepatan 10m/s senjata Bom
      4. D4 kecepatan 7m/s senjata Laser
      5. D5 kecepatan 5m/s senjata Rocket`);

    this.playerMobil =
      this.semuaMobil[parseInt(pilihan) - 1] || this.pilihMobil()   ;

    do {
      this.computerMobil =
        this.semuaMobil[Math.floor(Math.random() * this.semuaMobil.length)];
    } while (this.computerMobil === this.playerMobil);

    const pilihanPesan = `Kamu pilih: ${this.playerMobil.nama}, lawan: ${this.computerMobil.nama}`;
    console.log(pilihanPesan);
    alert(pilihanPesan);

    this.mesin = new Mesin(this.playerMobil, this.computerMobil);
    this.mulaiBalapan();
  }

  mulaiBalapan() {
    let pemenang = null;
    while (!pemenang) {
      let aksi = prompt("Aksi? (1: Bergerak, 2: Serang)");
      let hasilAksi;
      if (aksi === "1") {
        hasilAksi = this.mesin.aksiGerak();
      } else if (aksi === "2") {
        hasilAksi = this.mesin.aksiSerang();
      } else {
        const invalidAksi = "Aksi tidak valid. Pilih 1 atau 2.";
        console.log(invalidAksi);
        alert(invalidAksi);
        continue;
      }

      console.log(hasilAksi);
      alert(hasilAksi);

      const hasilGerakKomputer = this.mesin.komputerGerak();
      console.log(hasilGerakKomputer);
      alert(hasilGerakKomputer);

      pemenang = this.mesin.cekPemenang();
      if (pemenang) {
        const pemenangPesan = `${pemenang} menang!`;
        console.log(pemenangPesan);
        alert(pemenangPesan);
      }
    }
  }
}

const gameUI = new UI();
gameUI.pilihMobil();
