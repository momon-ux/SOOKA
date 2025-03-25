document.addEventListener("DOMContentLoaded", function () {
    function tunjukKategori(kategori) {
const rumusanKategori = {
    kekuatan: "Analisis perbandingan SKPM Kualiti @ Sekolah bagi tahun 2024 dan 2025 menunjukkan peningkatan dalam aspek guru (3.95 ke 5.44), kualiti PdP (17 ke 18.68), dan staf bukan guru (8.4 ke 9), yang mencerminkan usaha berterusan dalam memperkasakan pengajaran dan sokongan sekolah. Prasarana akademik (12) dan kokurikulum (10) kekal stabil, manakala persekitaran digital (10) dan sokongan ibu bapa serta komuniti (7.2 ke 7.55) menunjukkan sedikit peningkatan. Namun, prasarana hal ehwal murid mengalami sedikit penurunan (8.5 ke 8.12) disebabkan oleh ketiadaan bilik isolasi atau bilik sakit yang sebelum ini disediakan. Kesimpulannya, sekolah telah menunjukkan kemajuan dalam kebanyakan aspek, tetapi usaha berterusan perlu diberikan terhadap kemudahan kesihatan murid serta pengukuhan sokongan komuniti bagi memastikan kesejahteraan dan perkembangan pendidikan yang lebih menyeluruh..",
    standard1_5: "Berdasarkan perbandingan Standard 1-5, peningkatan ketara dapat dilihat dalam hampir semua aspek, mencerminkan usaha berterusan sekolah dalam memperkukuh pengurusan dan kualiti pendidikan. Standard 1 (Kepimpinan) meningkat daripada 82.72 kepada 96.54, menunjukkan kepimpinan sekolah yang semakin berkesan. Standard 2 (Pengurusan Organisasi) juga naik daripada 92.46 kepada 93.21, mencerminkan pengurusan yang lebih cekap. Standard 3.1 (Pengurusan Kurikulum), 3.2 (Pengurusan Kokurikulum), dan 3.3 (Pengurusan Hal Ehwal Murid) turut menunjukkan peningkatan, dengan Standard 3.2 melonjak daripada 82.09 kepada 97.21, membuktikan penambahbaikan ketara dalam pengurusan kokurikulum. Standard 4 (Pembelajaran dan Pemudahcaraan) kekal kukuh dengan sedikit peningkatan, manakala Standard 5 (Kemenjadian Murid, Pencapaian Murid dan Sekolah) meningkat daripada 53.01 kepada 63.48, menunjukkan perkembangan positif dalam hasil pembelajaran dan kejayaan pelajar. Secara keseluruhannya, data ini menggambarkan peningkatan prestasi sekolah yang berterusan dan sistematik.",
    standard5: "Berdasarkan analisis data Standard 5: Kemenjadian Murid, Pencapaian Murid dan Sekolah, terdapat peningkatan ketara dalam aspek akademik (Standard 5.1) daripada 17.17 kepada 25, menunjukkan kejayaan dalam meningkatkan prestasi murid dalam bidang akademik. Begitu juga dengan kemenjadian murid dalam kokurikulum (Standard 5.2) yang meningkat daripada 16.75 kepada 19.43, menandakan penglibatan murid yang lebih aktif dalam aktiviti luar bilik darjah. Standard 5.3 yang merangkumi kemenjadian sahsiah murid juga menunjukkan peningkatan daripada 16.09 kepada 16.56, mencerminkan pembangunan sahsiah yang semakin baik. Walau bagaimanapun, Standard 5.4.1 dan 5.4.2, yang merujuk kepada pencapaian guru dan sekolah dalam aktiviti yang diiktiraf oleh KPM, masih rendah meskipun terdapat sedikit peningkatan. Ini menunjukkan keperluan untuk memperbanyakkan penyertaan dalam program atau pertandingan yang diiktiraf bagi meningkatkan pencapaian sekolah secara keseluruhan.",
    standard1: "Berdasarkan data Standard 1: Kepimpinan, terdapat peningkatan ketara dalam semua aspek yang melibatkan Peranan Guru Besar (PGB). Aspek 1.1 (PGB sebagai peneraju) meningkat daripada 83.27 kepada 96.61, menonjolkan keupayaan PGB memimpin hala tuju sekolah dengan lebih berkesan. Aspek 1.2 (PGB sebagai pembimbing) juga menunjukkan peningkatan daripada 83.33 kepada 90.2, mencerminkan keupayaan PGB dalam membimbing warga sekolah mencapai matlamat bersama. Seterusnya, Aspek 1.3 (PGB sebagai pendorong) naik daripada 81.25 kepada 93.75, memperlihatkan keberkesanan PGB dalam memberi galakan dan motivasi yang berterusan kepada guru dan murid. Secara keseluruhan, pencapaian ini menggambarkan kepimpinan sekolah yang semakin mantap dan menyokong usaha penambahbaikan berterusan.",
    standard2: "Berdasarkan data perbandingan Standard 2: Pengurusan Organisasi yang merangkumi sub-standard 2.1 (Pengurusan Sumber Manusia), 2.2 (Pengurusan Aset), 2.3 (Pengurusan Kewangan), 2.4 (Pengurusan Sumber Pendidikan), 2.5 (Iklim), 2.6 (Pengurusan Perpaduan) dan 2.7 (Ermufakatan Strategik), didapati kebanyakan aspek menunjukkan peningkatan skor yang ketara, terutama dalam 2.7 dan 2.4, menandakan kerjasama strategik serta pengurusan sumber pendidikan yang semakin mantap. Pengurusan Sumber Manusia (2.1), Pengurusan Aset (2.2), dan Pengurusan Kewangan (2.3) turut menunjukkan prestasi memberangsangkan, menggambarkan kecekapan sekolah dalam mengurus sumber serta dana dengan sistematik. Walau beberapa sub-standard lain mencatat skor sederhana, keseluruhan data ini mengukuhkan keberkesanan strategi pengurusan organisasi yang diterapkan, seterusnya menyumbang kepada peningkatan kualiti pengoperasian sekolah secara menyeluruh.",
    standard3_1: "Berdasarkan data Standard 3.1: Pengurusan Kurikulum bagi tahun 2024 dan 2025, semua sub-standard menunjukkan peningkatan. Standard 3.1.1 melonjak daripada 81.25 ke 100, Standard 3.1.2 naik daripada 89.01 ke 90.28, Standard 3.1.3 meningkat daripada 93.75 ke 100, manakala Standard 3.1.4 turut bertambah daripada 85 ke 100, sekali gus mendorong skor keseluruhan Standard 3.1 daripada 87.91 ke 94.29. Pencapaian ini memperlihatkan pengurusan kurikulum yang semakin kukuh, dengan peningkatan ketara dalam pelaksanaan kurikulum, pengurusan mata pelajaran, penggunaan masa instruksional, serta penilaian murid.",
    standard3_2: "Berdasarkan perbandingan Standard 3.2: Pengurusan Kokurikulum, pada tahun 2024, keseluruhan skor dicatatkan pada 82.09% dengan sub-standard 3.2.1, 3.2.5, dan 3.2.7 masing-masing berada pada paras 75%, manakala sub-standard 3.2.2, 3.2.3, 3.2.4, dan 3.2.6 menunjukkan skor antara 84.37% hingga 88%. Pada tahun 2025, terdapat peningkatan menyeluruh yang ketara, khususnya bagi sub-standard yang sebelum ini rendah; nilai bagi 3.2.1, 3.2.5, dan 3.2.7 meningkat kepada paras yang lebih tinggi, menyumbang kepada kenaikan keseluruhan skor kepada anggaran sekitar 90%. Peningkatan ini mencerminkan usaha berterusan sekolah dalam memperbaiki pelaksanaan dan penilaian aktiviti kokurikulum, yang pada akhirnya meningkatkan penglibatan dan pencapaian murid dalam aspek bukan akademik serta menyokong pembangunan holistik sekolah.",
    standard3_3: "Standard 3.3 Pengurusan Hal Ehwal Murid menunjukkan peningkatan keseluruhan dari 86.94% pada tahun 2024 kepada 92.07% pada tahun 2025. Secara khusus, sub-standard 3.3.1 meningkat daripada 87.5% kepada 93.75% dan 3.3.2 melonjak kepada 95%, manakala 3.3.3, 3.3.5, dan 3.3.6 masing-masing meningkat kepada 93.75% daripada 87.5% pada tahun 2024. Walaupun begitu, aspek 3.3.4 (Pengurusan Kesihatan Murid) dan 3.3.7 (Pengurusan Pentadbiran Psikometrik) kekal pada 87.5% di kedua-dua tahun, menandakan bahawa bidang-bidang ini masih memerlukan perhatian tambahan. Secara keseluruhan, peningkatan yang ketara pada tahun 2025 mencerminkan usaha berterusan sekolah dalam memperbaiki pengurusan hal ehwal murid, sambil mengidentifikasi aspek yang perlu dikuatkan untuk mencapai kualiti yang lebih tinggi.",
    standard4: "Berdasarkan perbandingan Standard 4: Pembelajaran dan Pemudahcaraan (PdPc) antara tahun 2024 dan 2025, skor keseluruhan hampir tidak berubah (93.4% kepada 93.57%), mencerminkan kestabilan dalam kualiti PdPc. Pada tahun 2024, guru sebagai perancang, pengawal, pembimbing, pendorong, dan penilai mencatatkan skor masing-masing 96.56%, 95.58%, 94.41%, 95.24%, dan 95.58%, manakala murid sebagai pembelajar aktif hanya 86.55%. Pada tahun 2025, terdapat sedikit penurunan dalam peranan guru sebagai perancang (95.36%), pendorong (94.81%), dan penilai (95%), namun guru sebagai pengawal menunjukkan peningkatan (96.24%) dan guru sebagai pembimbing kekal hampir sama (94.44%); yang paling ketara ialah peningkatan skor murid sebagai pembelajar aktif daripada 86.55% kepada 89.08%. Secara keseluruhan, walaupun peranan guru menunjukkan sedikit perubahan, peningkatan dalam keaktifan murid mencadangkan bahawa strategi PdPc semakin menggalakkan penyertaan dan penglibatan pelajar dalam proses pembelajaran, sekaligus memperkukuh lagi kualiti pengajaran di sekolah.",
    triangulasi_kurikulum: "Berdasarkan data triangulasi untuk 2024 dan 2025, pada tahun 2024, Standard 3.1 (Pengurusan Kurikulum) dicatatkan pada 87.91%, Standard 5.1 (Kemenjadian Murid Dalam Akademik) pada 17.17%, dan Standard 4 (Pembelajaran dan Pemudahcaraan) pada 93.4%. Pada tahun 2025, Standard 3.1 meningkat kepada 94.29% dan Standard 5.1 meningkat kepada 25%, manakala Standard 4 hampir kekal pada 93.57%. Peningkatan dalam Standard 3.1 dan 5.1 menunjukkan usaha yang berkesan dalam memperkukuh pengurusan kurikulum dan meningkatkan pencapaian akademik murid, sementara kestabilan Standard 4 mencerminkan konsistensi dalam strategi pengajaran dan pemudahcaraan. Secara keseluruhan, data ini menggambarkan trend peningkatan yang positif dalam aspek-aspek kritikal pendidikan, menyokong usaha berterusan untuk penambahbaikan kualiti pengurusan dan pencapaian akademik di sekolah.",
    triangulasi_kokurikulum: "Berdasarkan data triangulasi pengurusan kokurikulum, pada tahun 2024, A5 Prasarana Sukan dan Kokurikulum mencatatkan skor 10%, Standard 3.2 Pengurusan Kokurikulum berada pada 82.09%, dan Standard 5.2 Kemenjadian Murid dalam Kokurikulum adalah 16.75%. Pada tahun 2025, walaupun A5 kekal pada 10%, terdapat peningkatan ketara dalam Standard 3.2 kepada 97.21% serta peningkatan Standard 5.2 kepada 19.43%. Peningkatan dalam aspek pengurusan kokurikulum dan kemenjadian murid menunjukkan usaha berkesan dalam mengoptimakan pelaksanaan aktiviti kokurikulum dan meningkatkan penglibatan murid, walaupun prasarana masih tidak berubah. Secara keseluruhan, data ini mencerminkan peningkatan yang memberangsangkan dalam keberkesanan pengurusan kokurikulum serta penglibatan murid, menyumbang kepada pengalaman pendidikan yang lebih holistik.",
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
