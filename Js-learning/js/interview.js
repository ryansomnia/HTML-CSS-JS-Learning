// 1.	Buatlah algoritma untuk menampilkan angka 1 s/d n, dengan ketentuan:
// kelipatan 3 diganti “OK”, kelipatan 4 diganti “YES”, kelipatan 3 & 4 diganti “OKYES”
// Contoh output di bawah adalah ketika nilai “n” = 15


// deklarasi angka
// input angka = promp("Enter Number")
// 1 - n
// kondisi angka % 3 = OK
// kondisi angka % 4 = YES
// kondisi angka % 3 && angka % 4 = OKYES
// output angka = 1 2 OK YES 5 OK 7 YES OK 10 11 OKYES 13 14 OK

// console.log('Soal No 1');
// console.log('====================================');
// let input = 15;
// for (let i = 1; i <= input; i++)


//     if (i % 3 == 0) {
//         console.log('OK');
//     } else if (i % 4 == 0) {
//     console.log('YES');
// } else if ((i % 3 == 0) && (i % 4 == 0)) {
//     console.log('OKYES');
// } else {
//     console.log(i);
// }
// console.log('====================================');

// 2.	Buatlah algoritma untuk empat soal di bawah ini, sesuai dengan nilai “n”
// Contoh output di bawah adalah ketika nilai “n” = 5

// a. v
// 1
// 22
// 333
// 4444
// 55555

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         if (j < 2) {
//             let c = i;
//             document.write(c, " ", "");

//         } else {
//             if (j % 2 == 0) {
//                 if (j < 3) {
//                     document.write(x, " ", "");
//                     let x = x - 1;
//                 } else {
//                     document.write(y, " ", "");
//                     let y = y - 1;
//                 }
//             } else {
//                 let c = c + 10;
//                 document.write(c, " ", "");
//             }
//         }


//     }
//     document.write("<br>")

// }


// let m = 5;
// let t = m * 2;
// let t2 = t * 2;
// for (let n = 1; n <= m; n++) {
//     for (let a = 1; a <= m; a++) {
//         if (a < 2) {
//             let c = n;
//             document.write(c, ' ', '');
//         } else {
//             if (a % 2 == 0) {
//                 if (a < 3) {
//                     document.write(t, ' ', '');
//                     let t = t - 1;
//                 } else {
//                     document.write(t2, ' ', '');
//                     let t2 = t2 - 1;
//                 }
//             } else {
//                 let c = c + 10;
//                 document.write(c, ' ', '');
//             }
//         }
//     }
//     document.write("<br>");
// }


// let n = 5;
// let output = ' ';
// let m = 5;
// let x = m * 2;
// let y = x * 2;
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         if (j < 2) {
//             c = i;
//             output += c + ' ';
//         } else {
//             if (j % 2 == 0) {
//                 if (j < 3) {
//                     output += x + ' ';
//                     x -= 1;
//                 } else {
//                     output += y + ' ';
//                     y -= 1;
//                 }
//             } else {
//                 c += 10;
//                 output += c + ' ';
//             }
//         }
//     }
//     document.write(output);
//     document.write("<br>")
//     output = ' ';
// }

//b. 
// 1
// 21
// 321
// 4321
// 54321


// for (let i = 1; i <= 5; i++) {
//     for (let j = i; j >= 1; j--) {
//         document.write(j);
//     }
//     document.write("<br>");
// }

// document.write("<br>")

//c x
// 1
// 23
// 454
// 3212
// 34543





// let output = '';
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         output++;
//         document.write(output + " ");


//     }

//     document.write("<br>")


// }


//d
// 1   6   11  16  21
// 2   7   12  17  22
// 3   8   13  18  23
// 4   9   14  19  24
// 5   10  15  20  25



// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (j < 2) {
//             x = i;

//         } else {
//             x = x + 5
//         }
//         document.write(x + "  ")
//     }
//     document.write("<br>")

// }





// 3.	Perhatikan array berikut ini : 

// n = [ 12, 9, 13, 6 ,10, 4, 7, 2 ]

// Buatlah algoritma untuk
// membuang semua nilai dengan kelipatan tiga dan 
// mengurutkan sisanya ke dalam array baru secara 
//ascending ( dari kecil ke besar )

// Output yang diharapkan: 

//  n = [ 2, 4, 7, 10, 13 ]



// console.log('Soal No 3');
// console.log('====================================');

// let array = [12, 9, 13, 6, 10, 4, 7, 2]
// filterArray = array.filter(
//     function (value) {
//         return (value % 3)
//     }
// )
// console.log(filterArray.sort(function (a, b) {
//     return a - b
// }));

// console.log('====================================');
// let i = 0;
// let s = 0;
// let arr = [5, 7, 8, 3];

// function f() {
//     while (i < arr.length) {
//         s = s + arr[i]
//         i = i + 1

//     }


//     console.log(s);

// }
// f()


// let x = [11, 10, 10, 5, 10, 15, 20, 10, 7, 11]

// function foo(x, a, b, i, j) {
//     let k = j;
//     let ct = 0;
//     while (k > i - 1) {
//         if (x[k] <= b && !(x[k] <= a)) {
//             ct = ct + 1

//         }
//         k = k - 1
//     }


//     return ct
// }
// console.log(foo(x, 8, 18, 3, 6));
// console.log(foo(x, 10, 20, 0, 9));
// console.log(foo(x, 8, 18, 6, 3));
// console.log(foo(x, 20, 10, 0, 9));
// console.log(foo(x, 6, 7, 8, 8));

// function g(str) {
//     let i = 0;
//     let newStr = "";
//     let panjang = str.length
//     while (i < panjang - 1) {
//         newStr = newStr + str[i + 1]
//         i = i + 1;
//     }

//     return newStr

// }

// function f(str) {
//     if (str.length == 0) {
//         return "";
//     } else if (str.length == 1) {
//         return str

//     } else {
//         return f(g(str)) + str[0]
//     }

// }

// function h(n, str) {
//     while (n != 1) {
//         if (n % 2 == 0) {
//             n = n / 2;
//         } else {
//             n = 3 * n + 1
//         }
//         str = f(str)
//     }
//     return str;
// }

// function pow(x, y) {
//     if (y == 0) {
//         return 1;
//     } else {
//         return x * (pow(x, y - 1));

//     }

// }

// console.log(h(1, "fruits"));
// console.log(h(2, "fruits"));
// console.log(h(5, "fruits"));
// console.log(h(pow(2, 1000000000000000), "fruits"));
// console.log(h(pow(2, 9831050005000007), "fruits"));

// function map(array, func) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         result.push(func(array[i]))

//     }
//     return result;
// }

// function questionable(func) {
//     return function (array) {
//         return map(array, func);
//     };

// }

// g = function (x) { return x * x };
// console.log(questionable(g, [1, 2, 3]));



