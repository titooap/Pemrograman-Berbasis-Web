// Fungsi untuk menghasilkan deret Fibonacci
function cetakFibonacci(jumlah) {
    // Inisialisasi array untuk menyimpan deret Fibonacci
    let fibonacci = [];
    
    // Dua angka pertama dalam deret Fibonacci
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    
    // Membuat deret Fibonacci
    for (let i = 2; i < jumlah; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    
    // Mencetak deret Fibonacci
    console.log("Deret Fibonacci:");
    for (let i = 0; i < jumlah; i++) {
    console.log(fibonacci[i]);
    }
    
    return fibonacci;
}
cetakFibonacci(10);