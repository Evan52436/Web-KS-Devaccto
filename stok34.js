function minus () {
    document.getElementById('jumlah').value --;
    if (document.getElementById('jumlah').value > 0)
        return;
    else {
        document.getElementById('jumlah').value = 1;
        alert("lu beli apa jir quantity minus");
    }
}

function tambah () {
        document.getElementById('jumlah').value ++;
    if (document.getElementById('jumlah').value > 33)
        alert("maaf stok nya terbatas, hanya tersedia 34 item" );
    
}
