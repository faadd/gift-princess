// Tunggu sampai animasi cake selesai (misalnya 1 detik saja untuk percobaan)
window.addEventListener("load", function () {
  setTimeout(function () {
    // Setelah 1 detik, aktifkan pointer events untuk link
    document.getElementById("birthday-link").style.pointerEvents = "auto";
  }, 8000); // 1000 ms = 1 detik untuk percobaan
});
