// Function yang dijalankan ketika tombol "-" di klik
function minus () {
    document.getElementById('jumlah').value --;
    if (document.getElementById('jumlah').value > 0)
        return;
    else {
        document.getElementById('jumlah').value = 1;
        alert("lu beli apa jir quantity minus");
    }
}
// Function yang dijalankan ketika tombol "+" di klik
function tambah () {
        document.getElementById('jumlah').value ++;
        //If = Jika, orang mencoba untuk menambah jumlah item lebih dari stok
    if (document.getElementById('jumlah').value > 2)
        //Maka = Akan muncul alert dibawah ini
        alert("maaf stok nya terbatas, hanya tersedia 3 item" );
    
}
