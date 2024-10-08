Laporan Praktiukum JavaScript
Aplikasi Buku Favorit

![image](https://github.com/user-attachments/assets/2f5e16f0-9fc3-44f8-9cfd-26c5b4e071de)

Nama         : Muhammad Zaidan Ahbab
NPM          : 4523210081
Mata Kuliah  : Praktikum Desain Web
Tanggal      : 8 Oktober 2024

Dosen Pembimbing :
Adi Wahyu Pribadi , S.Si., M.Kom.

FAKULTAS TEKNIK
UNIVERSITAS PANCASILA
JAKARTA
2024

Source Code index.html
![image](https://github.com/user-attachments/assets/5d96d055-f2d3-4115-93b8-68a1e7b56e8e)
  - <!DOCTYPE html>: Menandakan bahwa dokumen ini menggunakan HTML5.
  - <html lang=id>: Bahasa halaman diatur ke bahasa Indonesia.
  - <meta charset="UTF-8'>: Mengatur encoding karakter ke UTF-8.
  - <meta name="viewport" content="width=device-width, initial-scale=1.0>: Membuat halaman web responsif (terlihat baik di perangkat apa pun).
  - <title>Aplikasi Buku Favorit</title>: Menentukan judul yang ditampilkan di tab browser."

![image](https://github.com/user-attachments/assets/3f7a5f4a-4d6c-4f89-b1f4-a7e5d5148291)
   - "<h1>Aplikasi Buku Favorit</h1>": Judul utama halaman.
   1 Input Nama Pengguna:
     - Form input untuk pengguna memasukkan nama mereka dengan <input> dan tombol Simpan Nama untuk menyimpan nama. Nama ini nantinya akan ditampilkan dengan tag <h3>.

   2 Form Tambah Buku:
     - Formulir untuk menambah buku baru dengan 3 input: judul, penulis, dan tahun terbit. Ada juga tombol Tambah Buku untuk mengirim data.

   3 Daftar Buku:
     - Bagian untuk menampilkan buku yang sudah ditambahkan pengguna. Konten akan muncul di dalam <div id="daftar-buku'>.

   4 Buku Favorit:
     - Bagian ini digunakan untuk menampilkan buku-buku yang sudah ditandai sebagai favorit. Konten favorit muncul dalam <div id="buku-favorit'>.

   - <script src="script.js"></script>: Menghubungkan file JavaScript (script.js) yang mengatur logika aplikasi. 

Source Code script.js
// Definisi Class Buku
![image](https://github.com/user-attachments/assets/57fcd826-edd9-4bdd-ad87-7f170240866e)
  - Ini adalah template untuk membuat objek buku dengan informasi judul, penulis, dan tahun. 
  - Fungsi tampilkanInfo() mengembalikan informasi buku dalam format teks.

![image](https://github.com/user-attachments/assets/a36fbe72-00f4-418f-8197-245a82df2c26)

![image](https://github.com/user-attachments/assets/470018af-232e-46c6-9875-c64ad582167a)
  - Menambahkan buku baru berdasarkan input dari formulir (judul, penulis, tahun). 
  - Setelah validasi, buku disimpan ke daftar dan diperbarui di layar.

![image](https://github.com/user-attachments/assets/386a6585-bf88-4253-ae1e-49c8d0152838)
  - Menampilkan semua buku yang ada di daftar daftarBuku ke dalam elemen HTML (div daftar-buku).
  - Setiap buku disertai tombol "Tambah ke Favorit".

![image](https://github.com/user-attachments/assets/9331508f-6775-4058-bb2c-753f1efb08c7)
  - Memasukkan buku ke daftar favorit jika belum ada.
  - Jika buku sudah ada di favorit, menampilkan peringatan.
   
![image](https://github.com/user-attachments/assets/132cd184-2889-4e1e-a3ef-ab7623399e81)
  - Menampilkan buku yang ditandai sebagai favorit ke div buku-favorit, beserta tombol untuk menghapus dari favorit.

![image](https://github.com/user-attachments/assets/0acb9872-2a9f-4bf6-8a06-2c6da152cc9f)
  - Menghapus buku dari daftar favorit, memperbarui tampilan dan local storage.

![image](https://github.com/user-attachments/assets/c8734685-3266-4b5c-86fa-782d3c47ec00)
  - Menyimpan daftar buku atau favorit ke local storage agar tetap ada meski halaman direfresh.

![image](https://github.com/user-attachments/assets/5b5ab35f-7158-4715-8f6d-5951e1844545)
  - Menampilkan nama pengguna yang sebelumnya disimpan di session storage.

![image](https://github.com/user-attachments/assets/3bd3d8df-ddc3-492d-83d7-26196c8fad64)
  - Ketika halaman dimuat, mengambil daftar buku dan favorit dari local storage dan menampilkannya, serta menampilkan nama pengguna jika ada.

Source Code styles.css
![image](https://github.com/user-attachments/assets/0961685e-99a8-4ade-a48e-8fa442bd7a7a)


Uji Coba
1.	Buka index.html di browser
   ![image](https://github.com/user-attachments/assets/d6a70daf-0bf2-4234-bafd-c4984d5773ff)

2.	Tambahkan beberapa buku.
   ![image](https://github.com/user-attachments/assets/c2fae915-bf5c-4310-9735-387f5d118196)

3.	Tandai beberapa buku sebagai favorit
   ![image](https://github.com/user-attachments/assets/33e800f1-634e-42a6-9bb8-7d9b186ad1a9)
  	
4.	Refresh halaman dan pastikan buku favorit tetap ada
   ![image](https://github.com/user-attachments/assets/9273cd5c-8bf3-458c-acc1-0d5382269bc3)
  	
5.	Masukkan nama pengguna dan pastikan nama tersebut ditampilkan
   ![image](https://github.com/user-attachments/assets/0d70f5b8-d12b-4732-b435-acc576a511ba)

6.	Tutup tab atau browser, lalu buka kembali dan cek apakah nama pengguna masih ada (seharusnya tidak, karena menggunakan session storage)
   ![image](https://github.com/user-attachments/assets/ddf8a580-77d6-4fe1-b176-85c02b49b7ce)


Kesimpulan
Aplikasi ini merupakan Aplikasi Buku Favorit yang dibuat menggunakan HTML, CSS, dan JavaScript. Fungsinya memungkinkan pengguna untuk menambah buku ke dalam daftar, menandai buku favorit, serta menyimpan data tersebut ke Local Storage, sehingga data tetap ada meskipun halaman di-refresh. Pengguna juga dapat memasukkan nama mereka yang disimpan di Session Storage dan ditampilkan dalam bentuk salam personal di halaman.
