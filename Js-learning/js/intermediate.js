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

