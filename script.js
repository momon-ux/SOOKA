document.addEventListener("DOMContentLoaded", function () {
    function tunjukKategori(kategori) {
const rumusanKategori = {
    kekuatan: "Analisis perbandingan SKPM Kualiti @ Sekolah bagi tahun 2024 dan 2025 menunjukkan peningkatan dalam aspek guru (3.95 ke 5.44), kualiti PdP (17 ke 18.68), dan staf bukan guru (8.4 ke 9), yang mencerminkan usaha berterusan dalam memperkasakan pengajaran dan sokongan sekolah. Prasarana akademik (12) dan kokurikulum (10) kekal stabil, manakala persekitaran digital (10) dan sokongan ibu bapa serta komuniti (7.2 ke 7.55) menunjukkan sedikit peningkatan. Namun, prasarana hal ehwal murid mengalami sedikit penurunan (8.5 ke 8.12) disebabkan oleh ketiadaan bilik isolasi atau bilik sakit yang sebelum ini disediakan. Kesimpulannya, sekolah telah menunjukkan kemajuan dalam kebanyakan aspek, tetapi usaha berterusan perlu diberikan terhadap kemudahan kesihatan murid serta pengukuhan sokongan komuniti bagi memastikan kesejahteraan dan perkembangan pendidikan yang lebih menyeluruh..",
    standard1_5: "Berdasarkan perbandingan Standard 1-5, peningkatan ketara dapat dilihat dalam hampir semua aspek, mencerminkan usaha berterusan sekolah dalam memperkukuh pengurusan dan kualiti pendidikan. Standard 1 (Kepimpinan) meningkat daripada 82.72 kepada 96.54, menunjukkan kepimpinan sekolah yang semakin berkesan. Standard 2 (Pengurusan Organisasi) juga naik daripada 92.46 kepada 93.21, mencerminkan pengurusan yang lebih cekap. Standard 3.1 (Pengurusan Kurikulum), 3.2 (Pengurusan Kokurikulum), dan 3.3 (Pengurusan Hal Ehwal Murid) turut menunjukkan peningkatan, dengan Standard 3.2 melonjak daripada 82.09 kepada 97.21, membuktikan penambahbaikan ketara dalam pengurusan kokurikulum. Standard 4 (Pembelajaran dan Pemudahcaraan) kekal kukuh dengan sedikit peningkatan, manakala Standard 5 (Kemenjadian Murid, Pencapaian Murid dan Sekolah) meningkat daripada 53.01 kepada 63.48, menunjukkan perkembangan positif dalam hasil pembelajaran dan kejayaan pelajar. Secara keseluruhannya, data ini menggambarkan peningkatan prestasi sekolah yang berterusan dan sistematik.",
    standard5: "Berdasarkan analisis data Standard 5: Kemenjadian Murid, Pencapaian Murid dan Sekolah, terdapat peningkatan ketara dalam aspek akademik (Standard 5.1) daripada 17.17 kepada 25, menunjukkan kejayaan dalam meningkatkan prestasi murid dalam bidang akademik. Begitu juga dengan kemenjadian murid dalam kokurikulum (Standard 5.2) yang meningkat daripada 16.75 kepada 19.43, menandakan penglibatan murid yang lebih aktif dalam aktiviti luar bilik darjah. Standard 5.3 yang merangkumi kemenjadian sahsiah murid juga menunjukkan peningkatan daripada 16.09 kepada 16.56, mencerminkan pembangunan sahsiah yang semakin baik. Walau bagaimanapun, Standard 5.4.1 dan 5.4.2, yang merujuk kepada pencapaian guru dan sekolah dalam aktiviti yang diiktiraf oleh KPM, masih rendah meskipun terdapat sedikit peningkatan. Ini menunjukkan keperluan untuk memperbanyakkan penyertaan dalam program atau pertandingan yang diiktiraf bagi meningkatkan pencapaian sekolah secara keseluruhan.",
    standard1: "Berdasarkan data Standard 1: Kepimpinan, terdapat peningkatan ketara dalam semua aspek yang melibatkan Peranan Guru Besar (PGB). Aspek 1.1 (PGB sebagai peneraju) meningkat daripada 83.27 kepada 96.61, menonjolkan keupayaan PGB memimpin hala tuju sekolah dengan lebih berkesan. Aspek 1.2 (PGB sebagai pembimbing) juga menunjukkan peningkatan daripada 83.33 kepada 90.2, mencerminkan keupayaan PGB dalam membimbing warga sekolah mencapai matlamat bersama. Seterusnya, Aspek 1.3 (PGB sebagai pendorong) naik daripada 81.25 kepada 93.75, memperlihatkan keberkesanan PGB dalam memberi galakan dan motivasi yang berterusan kepada guru dan murid. Secara keseluruhan, pencapaian ini menggambarkan kepimpinan sekolah yang semakin mantap dan menyokong usaha penambahbaikan berterusan.",
    standard2: "Berdasarkan data perbandingan Standard 2: Pengurusan Organisasi yang merangkumi sub-standard 2.1 (Pengurusan Sumber Manusia), 2.2 (Pengurusan Aset), 2.3 (Pengurusan Kewangan), 2.4 (Pengurusan Sumber Pendidikan), 2.5 (Iklim), 2.6 (Pengurusan Perpaduan) dan 2.7 (Ermufakatan Strategik), didapati kebanyakan aspek menunjukkan peningkatan skor yang ketara, terutama dalam 2.7 dan 2.4, menandakan kerjasama strategik serta pengurusan sumber pendidikan yang semakin mantap. Pengurusan Sumber Manusia (2.1), Pengurusan Aset (2.2), dan Pengurusan Kewangan (2.3) turut menunjukkan prestasi memberangsangkan, menggambarkan kecekapan sekolah dalam mengurus sumber serta dana dengan sistematik. Walau beberapa sub-standard lain mencatat skor sederhana, keseluruhan data ini mengukuhkan keberkesanan strategi pengurusan organisasi yang diterapkan, seterusnya menyumbang kepada peningkatan kualiti pengoperasian sekolah secara menyeluruh.",
    standard3_1: "Pengurusan kurikulum lebih terancang dengan pemantauan berkala dan strategi pemulihan.",
    standard3_2: "Kokurikulum lebih aktif dengan penyertaan murid meningkat sebanyak 20% berbanding tahun sebelumnya.",
    standard3_3: "HEM lebih sistematik dengan program kebajikan murid yang diperkukuh.",
    standard4: "PdPc lebih inovatif dengan penggunaan teknologi dalam bilik darjah meningkat.",
    triangulasi_kurikulum: "Analisis triangulasi menunjukkan peningkatan dalam pencapaian akademik berdasarkan data pentaksiran.",
    triangulasi_kokurikulum: "Triangulasi data kokurikulum menunjukkan murid lebih aktif dan prestasi pertandingan meningkat.",
    triangulasi_hem: "Analisis triangulasi HEM menunjukkan keselesaan dan keselamatan murid bertambah baik."
};


        // Senarai gambar berdasarkan kategori
        const gambarKategori = {
            kekuatan: { "2024": "Kekuatan kami 2024.png", "2025": "Kekuatan kami 2025.png" },
            standard1_5: { "2024": "Standard 1-5 2024.png", "2025": "Standard1-5 2025.png" },
            standard5: { "2024": "Standard 5 2024.png", "2025": "Standard 5 2025.png" },
            standard1: { "2024": "Standard 1 Kepimpinan 2024.png", "2025": "Standard 1 Kepimpinan 2025.png" },
            standard2: { "2024": "Standard 2 Pengurusan 2024.png", "2025": "Standard 2 Pengurusan 2025.png" },
            standard3_1: { "2024": "Standard 3.1 Kurikulum 2024.png", "2025": "Standard 3.1 Kurikulum 2025.png" },
            standard3_2: { "2024": "Standard 3.2 Kokurikulum 2024.png", "2025": "Standard 3.2 Kokurikulum 2025.png" },
            standard3_3: { "2024": "Standard 3.3 HEM 2024.png", "2025": "Standard 3.3 HEM 2025.png" },
            standard4: { "2024": "Standard 4 Pdpc 2024.png", "2025": "Standard 4 Pdpc 2025.png" },
            triangulasi_kurikulum: { "2024": "Triangulasi Kurikulum 2024.png", "2025": "Triangulasi Kurikulum 2025.png" },
            triangulasi_kokurikulum: { "2024": "Triangulasi Kokurikulum 2024.png", "2025": "Triangulasi Kokurikulum 2025.png" },
            triangulasi_hem: { "2024": "Triangulasi HEM 2024.png", "2025": "Triangulasi HEM 2025.png" }
        };

        if (gambarKategori[kategori]) {
            const gambar2024Src = gambarKategori[kategori]["2024"];
            const gambar2025Src = gambarKategori[kategori]["2025"];

            if (gambar2024Src) {
                gambar2024.src = gambar2024Src;
                tahun2024.style.display = "block";
            } else {
                tahun2024.style.display = "none";
            }

            if (gambar2025Src) {
                gambar2025.src = gambar2025Src;
                tahun2025.style.display = "block";
            } else {
                tahun2025.style.display = "none";
            }

            perbandingan.style.display = "flex";
            rumusan.textContent = rumusanKategori[kategori] || "Tiada rumusan untuk kategori ini.";

        } else {
            perbandingan.style.display = "none";
            rumusan.textContent = "Tiada data untuk kategori ini.";
        }
    }

    window.tunjukKategori = tunjukKategori;
});
// Fungsi kemas kini tarikh
function updateDateWidget() {
    const dateElement = document.getElementById("currentDate");
    const now = new Date();

    const days = ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"];
    const months = [
        "Januari", "Februari", "Mac", "April", "Mei", "Jun", 
        "Julai", "Ogos", "September", "Oktober", "November", "Disember"
    ];

    const dayName = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    dateElement.textContent = `${dayName}, ${day} ${month} ${year}`;
}

// Fungsi kira jumlah pelawat (simpanan dalam localStorage)
function updateVisitorCount() {
    let count = localStorage.getItem("visitorCount") || 0;
    count = parseInt(count) + 1;
    localStorage.setItem("visitorCount", count);
    document.getElementById("visitorCount").textContent = count;
}

// Fungsi ambil cuaca semasa (contoh guna API cuaca)
function fetchWeather() {
    const weatherElement = document.getElementById("weatherInfo");

    // Gantikan `YOUR_API_KEY` dengan API dari OpenWeatherMap atau sumber lain
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Tawau,my&units=metric&appid=YOUR_API_KEY")
        .then(response => response.json())
        .then(data => {
            const suhu = data.main.temp;
            const keadaan = data.weather[0].description;
            weatherElement.textContent = `Suhu: ${suhu}°C, ${keadaan}`;
        })
        .catch(error => {
            weatherElement.textContent = "Cuaca tidak tersedia";
        });
}

// Panggil fungsi selepas halaman dimuat
updateDateWidget();
updateVisitorCount();
fetchWeather();
