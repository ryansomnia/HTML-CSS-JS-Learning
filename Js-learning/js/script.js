// challege 1
function tahunDalamHari() {
var tahunLahir = prompt('Tahun berapa lo lahir?');
var hitung = (2020 - tahunLahir)*365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('adalah ' + hitung + ' hari');

h1.setAttribute('id', 'tahunDalamHari');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('tahunDalamHari').remove();
    
}