/**
 * FUNGSI: triggerTab
 * Menghubungkan tombol aksi (seperti 'Lihat Karya') ke sistem Tab Bootstrap
 */
function triggerTab(tabId) {
    // Cari elemen tombol tab di navigasi berdasarkan ID targetnya
    const targetTabButton = document.querySelector(`.nav-link[data-bs-target="#${tabId}"]`);
    
    if (targetTabButton) {
        // Aktifkan tab menggunakan API Bootstrap 5
        const tabInstance = new bootstrap.Tab(targetTabButton);
        tabInstance.show();

        // Scroll otomatis ke posisi paling atas agar perpindahan terasa mulus
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

/**
 * INISIALISASI FORM & ANIMASI
 */
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    // Cek apakah form kontak ada di halaman
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Mencegah reload halaman
            
            // Animasi Loading pada Tombol
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalContent = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin me-2"></i> Mengirim...';
            submitBtn.disabled = true;

            // Simulasi pengiriman pesan (delay 1.5 detik)
            setTimeout(() => {
                alert('Pesan Anda telah berhasil terkirim! Saya akan segera menghubungi Anda.');
                
                // Kembalikan tombol ke keadaan semula
                submitBtn.innerHTML = originalContent;
                submitBtn.disabled = false;
                
                // Reset semua kolom input
                contactForm.reset();
            }, 1500);
        });
    }

    // Efek Transisi Navbar saat Scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('shadow-sm');
        }
    });
});