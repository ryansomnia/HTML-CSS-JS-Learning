// OBJECT pada Js


// 1.  OBJECT LITERAL

// let ninja = {
//     nama: 'Heriyanto', // propery : isinya nilai
//     cakra: 10,// ini property juga
//     makan: function (porsi) {  // method isinya fungsi
//         this.cakra = this.cakra + porsi;
//         console.log(`Selamat makan ${this.nama}, Cakra mu saat ini bertambah menjadi ${this.cakra}`);


//     } 

// }

// Kelemahan : tidak efektif untuk banyak yang object

// 2 . Function Declaration
// function Ninja(nama, cakra) {
//     let ninja = {}; // deklarasikan terlebih dahulu kalau kita ingin membuat object
//     ninja.nama = nama;
//     ninja.cakra = cakra;

//     ninja.makan = function (porsi) { // method makan
//         this.cakra += porsi;
//         console.log(`Halo ${this.nama}, selamat makan dan cakra mu bertambah menjadi ${this.cakra}`);
//     }

//     ninja.battle = function (jutsu) { // method bertarung
//         this.cakra -= jutsu;
//         console.log(`Arrrght... Cakra ku menjadi ${this.cakra} `);

//     }

//     ninja.sage = function (meditation) {
//         this.cakra = meditation * 2;
//         console.log(`Wadidaw anda sudah menambah Cakra menjadi ${this.cakra}`);

//     }

//     return ninja; //karena ini function harus mengembalikan nilai

// }

// let Heriyanto = Ninja('Heriyanto', 10); 

// dapat membuat beberapa object mengikuti function yang ada // intinya 1 fungsi untuk banyak object




// 3. Constructor Function

// - menggunakan keyword new
// function Ninja(nama, cakra) {
//     let ninja = {}; // tidak menggunakan ini karena Js paham anda ingin membuat construktor
//     this.nama = nama;
//     this.cakra = cakra; 

//     this.makan = function (porsi) { // method makan
//         this.cakra += porsi;
//         console.log(`Halo ${this.nama}, selamat makan dan cakra mu bertambah menjadi ${this.cakra}`);
//     }

//     this.battle = function (jutsu) { // method bertarung
//         this.cakra -= jutsu;
//         console.log(`Arrrght... Cakra ku menjadi ${this.cakra} `);

//     }

//     this.sage = function (meditation) {
//         this.cakra = meditation * 2;
//         console.log(`Wadidaw anda sudah menambah Cakra menjadi ${this.cakra}`);

//     }

//     // return ninja; //karena ini construktor tidak menggunakan return

// }

// let Heriyanto = new Ninja('Heriyanto', 10); // nah baru gunakan keywordnya "new"


// JAVASCRIPT LANJUTAN | 1.2 Object.create()

// Function Declaration dengan Object.create()
// const methodNinja = {
//     makan: function (porsi) { // method makan
//         this.cakra += porsi;
//         console.log(`Halo ${this.nama}, selamat makan dan cakra mu bertambah menjadi ${this.cakra}`);
//     },

//     battle: function (jutsu) { // method bertarung
//         this.cakra -= jutsu;
//         console.log(`Arrrght... Cakra ku menjadi ${this.cakra} `);

//     },

//     sage: function (meditation) {
//         this.cakra += meditation * 2;
//         console.log(`Wadidaw anda sudah menambah Cakra menjadi ${this.cakra}`);

//     }
// };


//     function Ninja(nama, cakra) {
//         let ninja = Object.create(methodNinja)// tidak menggunakan ini karena Js paham anda ingin membuat construktor
//         ninja.nama = nama;
//         ninja.cakra = cakra; 

//         return ninja;

//     }

//  let Heriyanto = Ninja('Heriyanto', 10); // nah baru gunakan keywordnya "new"

// Kelemahan = Perlu bantuan Object lain untuk mendukung object lain



// JAVASCRIPT LANJUTAN | 1.3 Prototype


// function Ninja(nama, cakra) {
//     this.nama = nama;
//     this.cakra = cakra; 

// }

// Ninja.prototype.makan = function(porsi) {
//     this.cakra += porsi;
//     return `Halo ${this.nama} selamat makan, Cakra mu bertambah manjadi ${this.cakra} point`
// }

// Ninja.prototype.battle = function(jutsu) {
//     this.cakra -= jutsu;
//     return `Arrrght... Cakra mu berkurang manjadi ${this.cakra} point`
// }
// Ninja.prototype.sage = function(meditation) {
//     this.cakra += meditation * 2;
//     return `Suggoi ${this.nama}-kun, Cakra mu bertambah manjadi ${this.cakra} point`
// }
// let Heriyanto = new Ninja('Heriyanto', 10);



// // versi Class 

// class Ninja {   
//     constructor(nama, cakra) {
//         this.nama = nama;
//         this.cakra = cakra;
//     }

//     makan(porsi) {
//     this.cakra += porsi;
//     return `Halo ${this.nama} selamat makan, Cakra mu bertambah manjadi ${this.cakra} point`
//     }

//     battle(jutsu) {
//         this.cakra -= jutsu;
//         return `Arrrght... Cakra mu berkurang manjadi ${this.cakra} point`
//     }
//     sage(meditation) {
//         this.cakra += meditation * 2;
//         return `Suggoi ${this.nama}-kun, Cakra mu bertambah manjadi ${this.cakra} point`
//     }

// }
// let Heriyanto = new Ninja('Heriyanto',10);

// 2.1 Execution Context, Hoisting & Scope

//latihan

// function satu() {
//     var nama = "Heriyanto";
//     console.log(nama);
// }


// function dua() {
//     console.log(nama);
// }

// console.log(nama);
// var nama = 'Erik';
// satu();
// dua('doddy');
// console.log(nama);

// 1. undifined
// 2. Heriyanto
// 3. doddy x harusnya erick why? awalnya dia mengecek variabel local, 
//ga ada, dia cek aergument, ga ada  akhirnya dia memilih global scope.
// 4. erick
// info lebih lanjut http://www.pythontutor.com/javascript.html#mode=edit




// 2.2 Closure

// function init() {
//     let nama = 'Heriyanto';

//     function tampilNama() {
//         console.log(nama);
//     }
//     tampilNama();
// }
// init(); 


// 3.1 Arrow Function

//function tampilPesan(nama) {
//alert('halo'+nama);
//}
//tampilPesan('Heriyanto');

//function expression

//let tampilPesan = function(nama) {
//  alert('halo'+nama);
//}
//tampilPesan('Heriyanto');

//Arrow function adalah bentuk lain lebih ringkas dari function expression


//let tampilPesan = (nama) => {
//  alert('halo'+nama);
//}
//tampilPesan('Heriyanto');


//function expression

// const tampilNama = function (nama) {
//     return (`halo ${nama}`);
// }

// console.log(tampilNama('Heriyanto'));


//Arrow function

// const tampilNama = (nama) => {
//     return nama;
// }
// console.log('Heriyanto');

//Arrow function lebih dari 1 parameter

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Heriyanto', 'Malam'));

//tidak menggunakan kurung a/ kurung kurawal pada parameter
//disebut implisit return
// const tampilNama = nama => `Wellcome back ${nama}`;

// console.log('Heriyanto');

//Arrow function tanpa parameter 
//maka wajib menggunaka kurung buka tutup

// const tampilNama = () => `Wellcome back`;

// console.log(tampilNama());

// let mahasiswa = ['dono', 'kuya', 'bedu'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;

// });
// console.log(jumlahHuruf);
// console.table(jumlahHuruf);//coba coba


//setelah di arrow function


// let jumlahHuruf = mahasiswa.map(nama => nama.length);

// console.log(jumlahHuruf);
// console.table(jumlahHuruf); //coba coba

// kalau mau dikembalikan dalam object

// let jumlahHuruf = mahasiswa.map(nama => ({
//     nama: nama,
//     jumlahHuruf: nama.length
// }));
// console.log(jumlahHuruf);
// console.table(jumlahHuruf); //coba coba



//3.2 this pada Arrow Function

//Constructor Function
// const Ninja = function () {
//     this.nama = 'Heriyanto';
//     this.umur = 24;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);

//     }
// }
// const heriyanto = new Ninja();


// Arrow Function
// const Ninja = function () {
//     this.nama = 'Heriyanto';
//     this.umur = 24;
//     this.sayHello = () => { //dalam case Constructor Function hanya method yang dapat menggunakan arrow function
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);

//     }
// }
// const heriyanto = new Ninja();



// OBJECT LITERAL w arrow f
// let ninja = {
//     nama: 'Heriyanto',
//     cakra: 10,
//     makan: () => {
//         console.log(`Selamat makan ${this.nama}, Cakra mu saat ini bertambah menjadi ${this.cakra}`);

//property akan undefined krena tidak ada this karena arrow function tidak memiliki konsep this
// }

// }


//Constructor Function
// const Ninja = function () {
//     this.nama = 'Heriyanto';
//     this.umur = 24;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);

//     }
//     setInterval(() => { ketika ada arrow fun berguna untuk this mencari lexical scope
//         console.log(this.umur++);

//     }, 500);
// }
// const heriyanto = new Ninja();


// 4.1 Higher Order Function


// function kerjakanTugas(matakuliah, selesai) {
//fungsi ini disebut Higher Order Function, 
//jika fungsi memiliki fungsi yang disimpan 
//dalam argumen argument maka selesai disebut 
//sebagai callback
//     console.log(`mulai kerjakan tugas ${matakuliah}...`);
//     selesai()
// }

// function selesai() {
//     alert('Selamat mengerjakan tugas');
// }
// kerjakanTugas('Pemograman Web', selesai)
//contoh lain

// let x = 7
// for (let i = 1; i <= x; i++) {
//     console.log(`tangga ke ${i}`);
// }


//dibuat dinamis dan efisien tanpa perlu membongkar coding looping dengan fungsi
// function tangga(y) {
//     for (let i = 1; i <= y; i++) {
//         console.log(`tangga ke ${i}`);
//     }
// }
// tangga(7)

//membuat kembali dinamis sebuah aksi.  kenapa? karena penggunaan Higher Oreder Function
// function tangga(y, action) {
//     for (let i = 1; i <= y; i++) {
//         action(`tangga ke ${i}`);
//     }
// }
// tangga(7, console.log);
// tangga(3, alert);



//Hikmahnya jika kita sudah mengerti hal ini 
//artinya kita sudah bisa membuat coding yg efisien dan dinamis
//kita menguasai paradigma fungtional programing


// JAVASCRIPT LANJUTAN | 4.2 Filter, Map & Reduce

// Filter   : Seperti namanya akan memfilter element yang masuk
// Map      : Biasa digunakan untuk : merubah semua elemen di dalam 
//suatu array menjadi elemen dengan nilai yang baru. 
// Reduce   : Biasa digunakan untuk : Mengakumulasikan atau mengurangi
// nilai berdasarkan elemen di dalam array.

//contoh :
//const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// mencari angka >= 3

//for

// const newAngka = [];

// for (let i = 0; i <= angka.length; i++) {
//     if (angka[i] >= 3) {

//         newAngka.push(angka[i]);

//     }

// }
// console.log(newAngka);

// kalau pakai FILTER 

// const newAngka = angka.filter(function (a) {
//     return a >= 3;
// });
// console.log(newAngka);

//modif lg ke arrow function
// const newAngka = angka.filter(a => a >= 3);

// console.log(newAngka);


// MAP
// kalikan semua angka dengan angka 2

// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);


//REDUCE
//jumlahkan semua angka
//memliki 2 argumen
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);

//Method Chaining

//1. cari angka > 5
//2. kalikan 2
//3. jumlahkan
// const hasil = angka.filter(a => a > 5) // 8, 9, 9
//     .map(a => a * 3) //24, 27, 27
//     .reduce((acc, cur) => acc + cur); //78
// console.log(hasil);

//JAVASCRIPT LANJUTAN | 4.3 Latihan Filter, Map & Reduce

//ambil semua element video
//const videos = Array.from(document.querySelectorAll('[data-duration]'));
// console.log(videos);


//pilih hanya yang javascript lanjutan
//let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))



// ambil durasi masing masing
//.map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
// .map(waktu => {
//     const parts = waktu.split(':').map(part => parseFloat(part));
//     return (parts[0] * 60) + parts[1];
// })
//jumlahkan semua detiknya

// .reduce((total, detik) => total + detik);

//ubahkan formatnya jadi jam menit dan detik
// const jam = Math.floor(jsLanjut / 3600);
// jsLanjut = jsLanjut - jam * 3600;
// const menit = Math.floor(jsLanjut / 60);
// const detik = jsLanjut - menit * 60;


//simpan di DOM
// const pDurasi = document.querySelector('.total-durasi');
// pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik. `;
// const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
// const pJmlVideo = document.querySelector('.jumlah-video');
// pJmlVideo.textContent = `${jmlVideo} Video`;



// JAVASCRIPT LANJUTAN | 6.1 Destructuring Assignment

//Desctruction Array
// const perkenalan = ['Halo', 'nama', 'saya', 'Heriyanto'];

// const [salam, satu, dua, nama] = perkenalan;


//skipping item
//const [salam, , , nama] = perkenalan;
//console.log(salam);

//swap item
// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b);

// [a, b] = [b, a];

// console.log(a);
// console.log(b);
//kesimpulan:bertukar tempat

//return value pada function
// function coba() {
//     return [1, 2];

// }

// const [a, b] = coba();
// console.log(a);
// console.log(b);


// Rest parameter

// const [a, b, ...value] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(b);

// console.log(value);

//Destructuring Object

// const ninja = {
//     nama: 'Heriyanto',
//     umur: 24
// }

// const { nama, umur } = ninja;
// console.log(nama);


//Assigment tanpa deklarasi object


// ({ nama, umur } = {
//     nama: 'Heriyanto',
//     umur: 24
// })

// console.log(umur);


// Assign ke variabel baru
// const ninja = {
//     nama: 'Heriyanto',
//     umur: 24
// }

// const { nama: n, umur: u } = ninja;
// console.log(n);


// Memberikan Default value + assign ke variabel baru
// const ninja = {
//     nama: 'Heriyanto',
//     umur: 24
// }

// const { nama: n, umur: u, email: e = 'email@email.com' } = ninja;
// console.log(e);


//Rest parameter
// const ninja = {
//     nama: 'Heriyanto',
//     umur: 24,
//     email: 'email@email.com'
// }

// const { nama, ...value } = ninja;
// console.log(nama);  
// console.log(value);



// Mengambil field pada Object, setelah dikirim sebagai parameter untuk function

// const ninja = {
//     id: 123,
//     nama: 'Heriyanto',
//     umur: 24,
//     email: 'email@email.com'
// }
// function getIdNinja({ id }) {
//     return id;

// }

// console.log(getIdNinja(ninja));


// 6.2 Destructuring Function

function kalkulasi(a, b) {
    return [a + b, a - b, a * b, a / b];

}
// const hasil = penjumlahanPerkalian(2, 3);
// console.log(hasil);

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// console.log(jumlah);

// const kali = penjumlahanPerkalian(2, 3)[1];
// console.log(kali);

// const [jumlah, kali] = penjumlahanPerkalian(5, 6);
// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);
// console.log(bagi);



//Jika urutan tidak berpengaruh

// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b,

//     }

// }

// const { bagi, tambah, kurang, kali } = kalkulasi(2, 3);
// console.log(kurang);


// Decstructuring function argument

// const ninja = {
//     nama: 'Heriyanto',
//     umur: 24,
//     email: 'email@email.com',
//     nilai: {
//         tugas: 90,
//         chunnin: 97,
//         jutsu: 'ninjutsu'
//     }

// }

// function cetak({ nama, umur, nilai: { tugas, chunnin, jutsu } }) {
//     return `Ohaiyouuu, nama saya ${nama},saya berumur ${umur} tahun,
//      dan hasil ujian saya ${chunnin}, tugas saya ${tugas},
//       dan saya mengambil konsentrasi ${jutsu}`;

// }
// console.log(cetak(ninja));


// JAVASCRIPT LANJUTAN | 7. for..of VS for..in
//for..of

//ARRAY
// const ninja = ['naruto', 'sakura', 'sasuke'];
// for (let i = 0; i < ninja.length; i++) {
//     console.log(ninja[i]);
// }

// ninja.forEach(m => console.log(m));

// for (const m of ninja) {
//     console.log(m);
// }


//STRING

// const nama = 'Heriyanto';
// for (const n of nama) {
//     console.log(n);

// }

//foreach bukan untuk string, hanya untuk array 


// const ninja = ['naruto', 'sakura', 'sasuke'];
// ninja.forEach((m, i) => {
//     console.log(`${m} adalah ninja ke-${i + 1}`);

// })




//for..in


const ninja = {
    nama: 'Heriyanto',
    umur: 24,
    email: 'email@email.com',
    nilai: {
        tugas: 90,
        chunnin: 97,
        jutsu: 'ninjutsu'
    }

}
//untuk memanggil property
// for (m in ninja) {
//     console.log(m);

// }
//untuk memanggil isi property
for (m in ninja) {
    console.log(ninja[m]);

}


