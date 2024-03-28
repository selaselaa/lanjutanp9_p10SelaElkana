// tipe number
const input_uji_number = document.getElementById("input_uji_number");
const hasil_uji_number = document.getElementById("hasil_uji_number");
const hitung_infinity = document.getElementById("hitung_infinity");
const hitung_NaN = document.getElementById("hitung_NaN");

input_uji_number.addEventListener("input", function() {
    const uji_number = input_uji_number.value;
    const nilai = parseFloat(uji_number); // Mengonversi nilai input menjadi angka
    const isInteger = Number.isInteger(nilai);
    const isFloat = !isInteger && Number.isFinite(nilai);
    hasil_hitung = nilai / 0;

    if (!isNaN(nilai)) {
        if (isInteger) {
            hasil_uji_number.textContent = " tipe data number | integer.";
        } else if (isFloat) {
            hasil_uji_number.textContent = " tipe data number | float.";
        } 
        hitung_infinity.textContent = nilai + " / 0 = " + hasil_hitung;
    } else {
        hasil_uji_number.textContent = "bukan tipe data number";
        hitung_NaN.textContent = uji_number + " / 0 = " + hasil_hitung;
    }
});


// tipe bigInt
function maksimum_bigInt() {
    const nilaiMaksBigInt = BigInt(Number.MAX_SAFE_INTEGER);
    document.getElementById("hasil_bigInt").textContent = "Nilai maksimum tipe data number : " + nilaiMaksBigInt;
}

// type string
const word = "Dunia"
const uji_string = document.getElementById("uji-string");
uji_string.textContent = `Hello, ${word}`;


// type boolean
function hitung_boolean() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    const operator = document.getElementById("operatorr").value;
    let hasil;
    if (operator == '>') {
        hasil = angka1 > angka2
    } else if (operator == '<') {
        hasil = angka1 < angka2
    } 
    document.getElementById("hasil_boolean").textContent = "Hasil : " + hasil;
  }


// type null
const nilai = null;
const uji_null = document.getElementById("uji-null");
uji_null.textContent = "Output : " + nilai;


// type undefined
let nama;
const uji_undefined = document.getElementById("uji-undefined");
uji_undefined.textContent = "Output : " + nama;

  
// type symbol
const prodi = Symbol('Teknik Informatika');
document.getElementById("output-uji-symbol").textContent = prodi.toString();
document.getElementById("uji-symbol").textContent = prodi.description.toString();


// operator aritmatika
function operator_aritmatika() {
    const angka_1 = parseFloat(document.getElementById("angka-1").value);
    const angka_2 = parseFloat(document.getElementById("angka-2").value);

    const hasilPenjumlahan = angka_1 + angka_2;
    const hasilPengurangan = angka_1 - angka_2;
    const hasilPerkalian = angka_1 * angka_2;
    const hasilPemangkatan = angka_1 ** angka_2;
    const hasilPembagian = angka_1 / angka_2;
    const hasilSisaBagi = angka_1 % angka_2;

    const hasilText = angka_1 + " + " + angka_2 + " = " + hasilPenjumlahan + "\n" +
                    angka_1 + " - " + angka_2 + " = " + hasilPengurangan  + "\n" +
                    angka_1 + " * " + angka_2 + " = " + hasilPerkalian + "\n" +
                    angka_1 + " ** " + angka_2 + " = " + hasilPemangkatan + "\n" +
                    angka_1 + " / " + angka_2 + " = " + hasilPembagian + "\n" +
                    angka_1 + " % " + angka_2 + " = " + hasilSisaBagi;

    document.getElementById("hasil_aritmatika").style.whiteSpace = "pre-line";
    document.getElementById("hasil_aritmatika").textContent = hasilText;
}


// operator penugasan
function operator_penugasan() {
    let angka_3 = parseFloat(document.getElementById("angka-3").value);
    let nilaiAwal = angka_3;

    let pengisianNilai = angka_3;
    let pengisianPenjumlahanNilai = nilaiAwal + angka_3;
    let pengisianPenguranganNilai = nilaiAwal - angka_3;
    let pengisianPemangkatanNilai = nilaiAwal ** angka_3; 
    let pengisianPembagianNilai = nilaiAwal / angka_3; 
    let pengisianSisaBagiNilai = nilaiAwal % angka_3; 

    let hasilText = 
        angka_3 + " = " + pengisianNilai + "\n" +
        angka_3 + " += " + pengisianPenjumlahanNilai + "\n" +
        angka_3 + " -= " + pengisianPenguranganNilai + "\n" +
        angka_3 + " **= " + pengisianPemangkatanNilai + "\n" +
        angka_3 + " /= " + pengisianPembagianNilai + "\n" +
        angka_3 + " %= " + pengisianSisaBagiNilai + "\n" ;

    document.getElementById("hasil_penugasan").style.whiteSpace = "pre-line";
    document.getElementById("hasil_penugasan").textContent = hasilText;
}


// operator perbandingan 
function operator_perbandingan() {
    const angka_1 = parseFloat(document.getElementById("perbandingan-1").value);
    const angka_2 = parseFloat(document.getElementById("perbandingan-2").value);

    const lebihBesar = angka_1 > angka_2;
    const lebihKecil = angka_1 < angka_2;
    const samaDengan = angka_1 === angka_2;
    const tidakSamaDengan = angka_1 != angka_2;
    const lebihBesarSamaDengan = angka_1 >= angka_2;
    const lebihKecilSamaDengan = angka_1 <= angka_2;

    const hasilText = angka_1 + " > " + angka_2 + " = " + lebihBesar + "\n" +
                    angka_1 + " < " + angka_2 + " = " + lebihKecil  + "\n" +
                    angka_1 + " == " + angka_2 + " = " + samaDengan + "\n" +
                    angka_1 + " != " + angka_2 + " = " + tidakSamaDengan + "\n" +
                    angka_1 + " >= " + angka_2 + " = " + lebihBesarSamaDengan + "\n" +
                    angka_1 + " <= " + angka_2 + " = " + lebihKecilSamaDengan;

    document.getElementById("hasil_perbandingan").style.whiteSpace = "pre-line";
    document.getElementById("hasil_perbandingan").textContent = hasilText;
}


// operator logika
function operator_logika() {
    const angka_1 = document.getElementById("logika-1").value;
    const angka_2 = document.getElementById("logika-2").value;

    const AND = angka_1 && angka_2;
    const OR = angka_1 || angka_2;
    const Negasi_1 = !angka_1;
    const Negasi_2 = !angka_2;

    const hasilText = angka_1 + " && " + angka_2 + " = " + AND + "\n" +
                    angka_1 + " || " + angka_2 + " = " + OR + "\n" +
                    " ! " + angka_1 + " = " + Negasi_1 + "\n" +
                    " ! " + angka_2 + " = " + Negasi_2;

    document.getElementById("hasil_logika").style.whiteSpace = "pre-line";
    document.getElementById("hasil_logika").textContent = hasilText;
}


function operator_bitwise() {
    let angka_1 = parseInt(document.getElementById("bitwise-1").value, 2);
    let angka_2 = parseInt(document.getElementById("bitwise-2").value, 2);

    let hasilAnd = angka_1 & angka_2;
    let hasilOr = angka_1 | angka_2;
    let hasilXor = angka_1 ^ angka_2;
    let hasilNegasi1 = ~angka_1;
    let hasilNegasi2 = ~angka_2;
    let hasilLeftShift = angka_1 << angka_2;
    let hasilRightShift = angka_1 >> angka_2;

    const hasilText = "Angka 1 = " + angka_1 + "\n" +
                    "Angka 2 = " + angka_2 + "\n" +
                    angka_1 + " & " + angka_2 + " = " + hasilAnd + "\n" +
                    angka_1 + " | " + angka_2 + " = " + hasilOr + "\n" +
                    angka_1 + " ^ " + angka_2 + " = " + hasilXor + "\n" +
                    " ~ " + angka_1 + " = " + hasilNegasi1 + "\n" +
                    " ~ " + angka_2 + " = " + hasilNegasi2 + "\n" +
                    angka_1 + " << " + angka_2 + " = " + hasilLeftShift + "\n" +
                    angka_1 + " >> " + angka_2 + " = " + hasilRightShift;

    document.getElementById("hasil_bitwise").style.whiteSpace = "pre-line";
    document.getElementById("hasil_bitwise").textContent = hasilText;
}


// alert
function coba_alert() {
    alert('Ini adalah contoh alert')
}

// prompt
function coba_prompt() {
    var input_prompt = prompt('Masukkan teks di sini', 'Ini adalah contoh prompt');
    var hasil_prompt = document.getElementById('hasil_prompt');
    hasil_prompt.innerHTML = 'Input yang dimasukkan : ' + input_prompt;
}

// confirm
function coba_confirm() {
    var input_confirm = confirm('Ini adalah contoh confirm')
    var hasil_confirm = document.getElementById('hasil_confirm');
    hasil_confirm.innerHTML = 'Value yang dihasilkan : ' + input_confirm;
}

// if else if
function cek_kondisi() {
    const kondisi = document.getElementById("kondisi").value;
    let hasil;
    if (kondisi <= 100 && kondisi >= 90) {
        hasil = "Anda mendapat A";
    } else if (kondisi <= 89 && kondisi >=80) {
        hasil = "Anda mendapat B";
    } else if (kondisi <=79  && kondisi >=70) {
        hasil =  "Anda mendapat C";
    } else {
        hasil =  "Anda mendapat D";
    }
    document.getElementById("hasil_kondisi").textContent = "Hasil : " + hasil;
}

// switch statement
document.getElementById("switch_kondisi").addEventListener("input", cek_switch);
function cek_switch() {
    const kondisi = parseInt(document.getElementById("switch_kondisi").value);
    let hasil;
    switch (kondisi) {
        case 10:
        case 9:
            hasil = "Sangat Baik";
            break;
        case 8:
        case 7:
            hasil = "Baik";
            break;
        case 6:
        case 5:
            hasil = "Cukup";
            break;
        default:
            hasil = "Kurang";
            break;
    }
    document.getElementById("hasil_switch").textContent = "Hasil : " + hasil;
}

// forloop
let forloop = '';
for (let i = 1; i <= 5; i++) {
    forloop += i + ' | ';
    document.getElementById('hasil_forloop').textContent = forloop;
}

// whileloop
let whileloop = '';
let j = 1;
while (j <= 5) {
    whileloop += j + ' | ';
    j++
    document.getElementById('hasil_whileloop').textContent = whileloop;
}

// dowhile
let do_while = '';
let k = 1;
do {
    do_while += k + ' | ';
    k++;
    document.getElementById('hasil_dowhile').textContent = do_while;
} while (k <= 5);

// looping-break
let output_break = '';
for (let a = 1; a <= 5; a++) {
    if (a == 3) {
        break
    }
    output_break += a + ' | ';
    document.getElementById('output_break').textContent = output_break;
}

// looping-continue
let output_continue = '';
for (let a = 1; a <= 5; a++) {
    if (a == 3) {
        continue
    }
    output_continue += a + ' | ';
    document.getElementById('output_continue').textContent = output_continue;
}