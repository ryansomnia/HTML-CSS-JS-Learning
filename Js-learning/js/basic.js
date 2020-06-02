// console.log('hello');
// alert('yooo');
// Manipulasi DOM dengan javascript

// var umur = prompt('Umur lo berapa?');

// document.getElementById('sebuahText').innerHTML = umur;
// console.log(umur);

//Numbers in Javascript

// var num1 = 9.8;
// var num2 = 3;

// var tambah = num1 + num2;
// console.log(tambah);

// var kurang = num1 - num2;
// console.log(kurang);

// var bagi = num1 / num2;
// console.log(bagi);

// var kali = num1 * num2;
// console.log(kali);

// num1++
// console.log(num1);

// num2--
// console.log(num2);

// console.log(num2 % 2);

// function
/*
1. buat fungsinya
2. panggil fungsinya
*/

//create
// function fun() {
//  alert('this is a function')   
// }

//call
// fun();


/*
Kita akan membuat fungsi dengan menggunakan
input = nama kita
output = hello "nama kita" 
*/
// function shalom() {
//   var nama = prompt(' Shalom... siapa nama mu?');
//   var result = 'Shalom ' + nama;
//   console.log(result);  
// } 

// shalom();

// function sumNumber(num1, num2) {
//   var result = num1 + num2;
//   console.log(result);
   
// }

// sumNumber(2,3);

// function shalom(nama) {
//     var result = 'Shalom ' + nama;
//     console.log(result);  
//   } 
//   var nama = prompt(' Shalom... siapa nama mu?');
  
//   shalom(nama);
  
// while and FOR LOOPS

// WHILE Loop
// var num = 0;

// while (num < 100) {
//   num += 1;
//   console.log(num);
// }

// FOR Loop
// for (let num = 0; num <= 100; num++) {
//   console.log(num); 
// }



// Data types

// let Umur = 24;                                // number
// let Nama = 'Heriyanto Sitorus';               // string  
// let dataNama = {                                
//      first: 'Heriyanto',                      // object  
//      last: 'Sitorus'
//   };
// let benar = false;                            // boolean
// let namaBuah = ['apel', 'pisang', 'jeruk'];       // array
// let random;                                   // undefined
// let kosong = null;                            // value null

// String in  Javascript (common methods) 

// let buah = 'banana';
// let buahBuahan = 'banana\napple'            // new line
// console.log(buah.length);
// console.log(buah.indexOf('nan'));
// console.log(buah.slice(2, 6));
// console.log(buah.replace('ban', '123'));
// console.log(buah.toLocaleUpperCase());
// console.log(buah.toLocaleLowerCase());
// console.log(buah.charAt(2));
// console.log(buah[2]);
// console.log(buah.split(','));   // split by comma 
// console.log(buah.split(''));    // split by character

//Array
// let kelompokBuah = ['pisang','apel','kedongdong','orange'];
// kelompokBuah = new Array('pisang','apel','kedongdong','orange');

// alert(kelompokBuah[3]);
// console.log(kelompokBuah[1]);

// kelompokBuah[1] = "jambu";
// console.log(kelompokBuah);

// for(let i = 0; i < kelompokBuah.length; i++ ) {
//   console.log(kelompokBuah[i]);
  
// }


// array common methods
// console.log('to string', kelompokBuah.toString());
// console.log(kelompokBuah.join('*'));
// console.log(kelompokBuah.pop(), kelompokBuah); //menghapus item terakhir
// console.log(kelompokBuah.push('mangga'), kelompokBuah); //menambahkan item
// console.log(kelompokBuah[3]);
// kelompokBuah[kelompokBuah.length] = 'buah baru'; //sama sebagai penambah
// console.log(kelompokBuah); 
// kelompokBuah.shift(); //hapus element pertama dari array
// console.log(kelompokBuah);
// kelompokBuah.unshift('kiwi'); //menambah element baru pada array
// console.log(kelompokBuah);

// let kelompokSayuran = ['tomat', 'bawang', 'sawi']
// let isiKulkas = kelompokBuah.concat(kelompokSayuran); //combinasi array

// console.log('===============ISI KULKAS=====================');
// console.log(isiKulkas);
// console.log('====================================');

// console.log(isiKulkas.slice(1, 4)); //hanya mengambil beberapa elemen menurut batas tertentu

// console.log(isiKulkas.reverse());//dibalik elementnya

// console.log(isiKulkas.sort());

// let angkaBulat = [5, 23, 131, 45, 352, 22, 1, 2, 11, 34, 5, 6,];
// console.log(angkaBulat.sort(
//   function (a, b) {
//     return a-b    //mensortir dari kecil ke besar
//   }
// ));

// console.log(angkaBulat.sort(
//   function (a, b) {
//     return b-a    //mensortir dari besar ke kecil
//   }
// ));


// let arrayKosong = new Array();
// for (let num = 0; num <= 10; num++) {
//  arrayKosong.push(num);
// }
// console.log(arrayKosong);



//OBJECT IN Js

// let siswa = {
//     firstName: 'Heriyanto',
//     lastName: 'Sitorus',
//     age: 24,
//     stack: 'javascript',
//     skillNinja: 'Konoha Wind Kick',
//     infoSiswa: function (){
//       return this.firstName + '\n' + this.lastName;
      
//     }

// };
// console.log(siswa);
// console.log(siswa.firstName);
// console.log(siswa.skillNinja);

// siswa.skillNinja = 'Byakugan';    //chage value
// console.log(siswa); 

// siswa.age++;
// console.log(siswa.age);

// console.log(siswa.infoSiswa());


// IF ELSE DAN SWITCH

// IF ELSE

// var umur = prompt("umurmu saat ini");

// if (umur >= 18) {
//   status = 'dewasa';
//   console.log(status);
  
// } else {
//   status = 'dibawah umur';
//   console.log(status);
    
// }

//&& = AND
// || = OR
// if ((umur >= 18) && (umur <= 35) ) {
//   status = 'lolos';
//   console.log(status);
  
// } else {
//   status = 'belum lolos';
//   console.log(status);
    
// }

// SWITCH
// contoh hari
//switch (5) {
//   case 0:
//     day = 'weekend';
//     break;
//   case 5:
//     day = 'weekend';
//     break;
//   case 6:
//     day = 'weekend';
//     break;  
//   default:
//     day = 'weekday';
    
// }
// console.log(day);







