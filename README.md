# Exercise 3 - Web Client Development (WCD)

## Workoutaja Landing Page

This is repository for Exercise 3 Web Client Development (WCD).

## Tentang Proyek
Proyek ini adalah landing page untuk platform fitness "Workoutaja" yang menawarkan program latihan eksklusif dan personal. Halaman ini dirancang dengan tampilan modern dan bersih untuk menarik calon pelanggan.

## Perbaikan Kode

Selama pengembangan, beberapa bagian CSS yang penting tidak lengkap atau hilang. Tugas ini berfokus pada melengkapi kode CSS yang masih kosong. Berikut adalah daftar kode yang telah diperbaiki:

### 1. Styling Navigasi
- Menambahkan `margin-bottom: 55px` pada elemen navigasi
- Menerapkan `list-style: none` untuk menghilangkan bullet point pada daftar menu
- Menambahkan styling lengkap untuk tautan navigasi (warna, ukuran, opacity)
- Mengimplementasikan efek hover yang membuat teks menjadi tebal dan lebih gelap

### 2. Styling Teks Utama
- Melengkapi styling untuk heading H1 dengan ukuran font, berat, dan margin yang tepat
- Menambahkan warna khusus (#89C5CC) untuk kata "EXCLUSIVE" di heading
- Mengatur styling paragraf dengan warna, ukuran, dan jarak baris yang sesuai

### 3. Styling Tombol
- Menambahkan padding, warna latar belakang, dan border-radius untuk tombol
- Mengatur teks tombol menjadi uppercase, putih, dan tebal
- Mengimplementasikan efek hover yang mengubah warna latar belakang menjadi lebih gelap
- Menambahkan cursor pointer untuk UX yang lebih baik

### 4. Perbaikan Layout
- Menambahkan `box-sizing: border-box` untuk penanganan dimensi elemen yang lebih baik
- Memperbaiki posisi elemen dekoratif (bola) ke kiri bawah halaman
- Menambahkan `z-index: -1` untuk memastikan elemen dekoratif tetap di belakang konten

### 5. Koreksi HTML
- Memperbaiki duplikasi atribut `href` pada elemen logo: 
  ```html
  <a href="#" id="logo" href="#"> <!-- Sebelum -->
  <a id="logo" href="#"> <!-- Sesudah -->
  ```

### 6. Detail Koreksi CSS
Berikut bagian CSS yang diperbaiki:

1. **Box Model**: Menambahkan `box-sizing: border-box` pada selector universal
2. **Navigasi**: 
   - Menambahkan `margin-bottom: 55px` pada nav
   - Menambahkan `list-style: none` pada nav ul
   - Melengkapi styling `nav ul li a` dengan warna, opacity, dan transisi
   - Menambahkan efek hover pada tautan navigasi

3. **Konten Utama**:
   - Melengkapi styling heading dengan ukuran font, berat, dan margin
   - Menambahkan warna cyan (#89C5CC) untuk span "EXCLUSIVE"
   - Melengkapi styling paragraf dengan warna, ukuran, dan spacing
   - Melengkapi styling tombol dengan padding, background, border-radius
   - Menambahkan efek hover pada tombol

4. **Footer dan Dekorasi**:
   - Melengkapi styling footer dengan text-align dan warna
   - Menambahkan efek hover pada link footer
   - Memperbaiki posisi bola dekoratif dari `right` ke `left`
   - Menambahkan `z-index: -1` pada bola dekoratif
   - Menambahkan `display: block` pada logo

## Teknologi yang Digunakan
- HTML5
- CSS3
- Google Fonts (Mulish & Open Sans)

## Cara Menggunakan
1. Clone repository ini
2. Buka file `index.html` di browser Anda
3. Untuk melakukan perubahan, edit file HTML dan CSS sesuai kebutuhan

## Hasil Akhir
Landing page ini menampilkan:
- Navigation bar dengan logo dan menu
- Section utama dengan headline yang menarik
- Call-to-action button yang terhubung dengan WhatsApp
- Footer dengan informasi kontak
