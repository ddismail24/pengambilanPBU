// =============================================
// DATA DUMMY — Dashboard Pengambilan Pelajar
// Politeknik Balik Pulau, Sesi 2026/2027
// =============================================

const kpiData = [
  { label: "Jumlah Permohonan",    value: 1245, icon: "fa-solid fa-file-lines",      color: "#1a56a8", sub: "+12% dari sesi lalu",   subClass: "kpi-positive", progress: null },
  { label: "Tawaran Dikeluarkan",  value: 920,  icon: "fa-solid fa-envelope-open-text", color: "#0891b2", sub: "73.9% kadar tawaran",   subClass: "kpi-neutral",  progress: null },
  { label: "Pelajar Didaftar",     value: 784,  icon: "fa-solid fa-user-check",        color: "#16a34a", sub: "85.2% kadar penerimaan", subClass: "kpi-positive", progress: null },
  { label: "Sasaran Pengambilan",  value: 800,  icon: "fa-solid fa-bullseye",          color: "#d97706", sub: "98% sasaran tercapai",   subClass: "kpi-neutral",  progress: 98  },
  { label: "Rayuan Menunggu",      value: 47,   icon: "fa-solid fa-hourglass-half",    color: "#dc2626", sub: "Perlu tindakan segera",  subClass: "kpi-negative", progress: null },
];

const trendData = {
  bulan: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogos", "Sep", "Okt", "Nov", "Dis"],
  permohonan: [52, 68, 145, 210, 185, 95, 88, 135, 162, 48, 35, 22],
  ditawarkan: [40, 55, 115, 170, 145, 75, 70, 110, 125, 38, 28, 19],
  // Sesi lalu 2025/2026 — untuk perbandingan YoY
  permohonanLalu: [38, 50, 118, 175, 152, 78, 72, 110, 138, 40, 29, 18],
};

const programData = {
  label: [
    "Diploma Kejuruteraan Mekanikal",
    "Diploma Kejuruteraan Elektrik",
    "Diploma Teknologi Maklumat",
    "Diploma Perakaunan",
    "Diploma Pengurusan Perniagaan",
    "Diploma Hospitaliti",
    "Diploma Kejuruteraan Awam",
    "Diploma Reka Bentuk Grafik",
  ],
  nilai: [235, 198, 214, 162, 148, 97, 105, 86],
  warna: ["#1a56a8","#2563eb","#0891b2","#16a34a","#d97706","#7c3aed","#dc2626","#059669"],
};

const funnelData = [
  { peringkat: "Mohon",         nilai: 1245 },
  { peringkat: "Layak",         nilai: 1102 },
  { peringkat: "Ditawarkan",    nilai: 920  },
  { peringkat: "Disahkan",      nilai: 845  },
  { peringkat: "Didaftar",      nilai: 784  },
];

const sekolahData = [
  { nama: "SMK Balik Pulau",            pemohon: 142 },
  { nama: "SMK Permatang Tok Jaya",     pemohon: 118 },
  { nama: "SMK Pantai Remis",           pemohon: 97  },
  { nama: "SMK Teluk Bahang",           pemohon: 85  },
  { nama: "SMK Kepala Batas",           pemohon: 79  },
  { nama: "SMK Seberang Jaya",          pemohon: 74  },
  { nama: "SMKA Dato Harun",            pemohon: 68  },
  { nama: "SMK Batu Maung",             pemohon: 63  },
  { nama: "SMK Kubang Semang",          pemohon: 58  },
  { nama: "SMK Penanti",                pemohon: 52  },
];

const demografiData = {
  jantina: { label: ["Lelaki", "Perempuan"], nilai: [612, 633], warna: ["#1a56a8","#db2777"] },
  kaum: {
    label: ["Melayu", "Cina", "India", "Lain-lain"],
    nilai: [848, 224, 118, 55],
    warna: ["#1a56a8","#d97706","#16a34a","#7c3aed"],
  },
  gred: {
    label: ["1A", "2A", "3B", "4B", "5C", "6C"],
    nilai: [88, 215, 342, 298, 188, 114],
  },
};

const sosialData = [
  { platform: "Facebook",  ikon: "fa-brands fa-facebook",  warna: "#1877f2", reach: "48,200", pertanyaan: 312, perubahan: "+8%",  arah: "up"   },
  { platform: "Instagram", ikon: "fa-brands fa-instagram", warna: "#e1306c", reach: "32,500", pertanyaan: 245, perubahan: "+15%", arah: "up"   },
  { platform: "TikTok",    ikon: "fa-brands fa-tiktok",    warna: "#010101", reach: "61,800", pertanyaan: 189, perubahan: "+34%", arah: "up"   },
  { platform: "WhatsApp",  ikon: "fa-brands fa-whatsapp",  warna: "#25d366", reach: "—",      pertanyaan: 524, perubahan: "-3%",  arah: "down" },
];

const notifikasiData = [
  { tahap: "kritikal", ikon: "fa-solid fa-triangle-exclamation", tajuk: "Kuota Belum Penuh: Diploma Hospitaliti",       hurai: "Masih 53 tempat kosong. Sasaran tidak akan tercapai tanpa tindakan promosi segera.", masa: "2 jam lalu" },
  { tahap: "amaran",   ikon: "fa-solid fa-clock",                tajuk: "47 Rayuan Menunggu Lebih 5 Hari",              hurai: "Sila semak dan proses rayuan dalam sistem UPU sebelum tarikh akhir 10 Nov 2026.",   masa: "5 jam lalu" },
  { tahap: "info",     ikon: "fa-solid fa-calendar-check",       tajuk: "Open Day dijadualkan pada 22 Nov 2026",         hurai: "Semua bahagian perlu bersedia. Jangkaan pengunjung: 500 orang.",                     masa: "1 hari lalu" },
  { tahap: "berjaya",  ikon: "fa-solid fa-circle-check",         tajuk: "Program IT Mencapai 100% Sasaran",             hurai: "Diploma Teknologi Maklumat telah penuh. Senarai tunggu telah dibuka.",                masa: "2 hari lalu" },
  { tahap: "amaran",   ikon: "fa-solid fa-bullhorn",             tajuk: "Kempen Media Sosial November Belum Dilancarkan", hurai: "Jadual posting untuk Nov 2026 masih belum dimuat naik.",                            masa: "3 hari lalu" },
];

const kegiatanData = [
  { nama: "Lawatan Promosi SMK Balik Pulau",          tarikh: "8 Nov 2026",  lokasi: "Balik Pulau, Pulau Pinang",   status: "akan"     },
  { nama: "Pameran Pendidikan PESONA 2026",            tarikh: "12 Nov 2026", lokasi: "PISA, Georgetown",            status: "akan"     },
  { nama: "Program Jejak Kerjaya",                     tarikh: "15 Nov 2026", lokasi: "Politeknik Balik Pulau",      status: "akan"     },
  { nama: "Open Day Politeknik Balik Pulau",           tarikh: "22 Nov 2026", lokasi: "Politeknik Balik Pulau",      status: "akan"     },
  { nama: "Lawatan Alumni ke SMK Pantai Remis",        tarikh: "1 Nov 2026",  lokasi: "Pantai Remis, Perak",         status: "berjalan" },
  { nama: "Kempen Media Sosial November",              tarikh: "Nov 2026",    lokasi: "Online",                      status: "berjalan" },
  { nama: "Lawatan ke SMK Kepala Batas",               tarikh: "25 Okt 2026", lokasi: "Kepala Batas, Pulau Pinang",  status: "selesai"  },
  { nama: "Taklimat Ibu Bapa — Sesi Jun 2026",         tarikh: "10 Okt 2026", lokasi: "Dewan Politeknik Balik Pulau",status: "selesai"  },
];

const programKuotaData = [
  { nama: "D. Kejuruteraan Mekanikal", kuota: 120, didaftar: 112 },
  { nama: "D. Kejuruteraan Elektrik",  kuota: 100, didaftar: 94  },
  { nama: "D. Teknologi Maklumat",     kuota: 110, didaftar: 110 },
  { nama: "D. Perakaunan",             kuota: 90,  didaftar: 78  },
  { nama: "D. Pengurusan Perniagaan",  kuota: 90,  didaftar: 72  },
  { nama: "D. Hospitaliti",            kuota: 80,  didaftar: 47  },
  { nama: "D. Kejuruteraan Awam",      kuota: 100, didaftar: 82  },
  { nama: "D. Reka Bentuk Grafik",     kuota: 60,  didaftar: 49  },
];

const permohonanData = [
  { nama: "Ahmad Syafiq bin Zulkifli",    sekolah: "SMK Balik Pulau",         program: "D. Kejuruteraan Mekanikal", gred: "2A", tarikh: "3 Sep 2026",  status: "Didaftar"    },
  { nama: "Nurul Izzah binti Hamidon",    sekolah: "SMK Permatang Tok Jaya",  program: "D. Teknologi Maklumat",    gred: "1A", tarikh: "5 Sep 2026",  status: "Didaftar"    },
  { nama: "Muhammad Haziq bin Roslan",    sekolah: "SMK Pantai Remis",        program: "D. Perakaunan",            gred: "3B", tarikh: "6 Sep 2026",  status: "Ditawarkan"  },
  { nama: "Siti Norfazilah binti Rahim",  sekolah: "SMK Teluk Bahang",        program: "D. Hospitaliti",           gred: "4B", tarikh: "7 Sep 2026",  status: "Menunggu"    },
  { nama: "Lim Wei Xiang",               sekolah: "SMK Kepala Batas",        program: "D. Reka Bentuk Grafik",    gred: "2A", tarikh: "8 Sep 2026",  status: "Ditawarkan"  },
  { nama: "Priya a/p Subramaniam",       sekolah: "SMK Seberang Jaya",       program: "D. Pengurusan Perniagaan", gred: "3B", tarikh: "9 Sep 2026",  status: "Didaftar"    },
  { nama: "Mohamad Amirul bin Ghazali",   sekolah: "SMKA Dato Harun",         program: "D. Kejuruteraan Elektrik", gred: "2A", tarikh: "10 Sep 2026", status: "Ditawarkan"  },
  { nama: "Nur Hidayah binti Ismail",     sekolah: "SMK Batu Maung",          program: "D. Perakaunan",            gred: "3B", tarikh: "12 Sep 2026", status: "Ditolak"     },
  { nama: "Tan Jun Kai",                 sekolah: "SMK Kubang Semang",       program: "D. Teknologi Maklumat",    gred: "1A", tarikh: "13 Sep 2026", status: "Didaftar"    },
  { nama: "Farah Adlina binti Sulaiman",  sekolah: "SMK Penanti",             program: "D. Hospitaliti",           gred: "4B", tarikh: "14 Sep 2026", status: "Menunggu"    },
  { nama: "Khairul Nizam bin Othman",     sekolah: "SMK Balik Pulau",         program: "D. Kejuruteraan Awam",     gred: "3B", tarikh: "15 Sep 2026", status: "Ditawarkan"  },
  { nama: "Aina Syahirah binti Mazlan",   sekolah: "SMK Permatang Tok Jaya",  program: "D. Reka Bentuk Grafik",    gred: "2A", tarikh: "16 Sep 2026", status: "Didaftar"    },
  { nama: "Hazwan bin Abdul Halim",       sekolah: "SMK Pantai Remis",        program: "D. Kejuruteraan Mekanikal", gred: "4B", tarikh: "17 Sep 2026", status: "Ditolak"     },
  { nama: "Wong Mei Ling",               sekolah: "SMK Kepala Batas",        program: "D. Pengurusan Perniagaan", gred: "3B", tarikh: "18 Sep 2026", status: "Didaftar"    },
  { nama: "Nurain binti Baharudin",       sekolah: "SMK Teluk Bahang",        program: "D. Kejuruteraan Elektrik", gred: "2A", tarikh: "19 Sep 2026", status: "Ditawarkan"  },
  { nama: "Arif Haikal bin Nordin",       sekolah: "SMKA Dato Harun",         program: "D. Teknologi Maklumat",    gred: "1A", tarikh: "20 Sep 2026", status: "Didaftar"    },
  { nama: "Kavitha a/p Rajendran",       sekolah: "SMK Seberang Jaya",       program: "D. Perakaunan",            gred: "3B", tarikh: "21 Sep 2026", status: "Menunggu"    },
  { nama: "Muhammad Firdaus bin Kassim",  sekolah: "SMK Batu Maung",          program: "D. Hospitaliti",           gred: "5C", tarikh: "22 Sep 2026", status: "Ditolak"     },
  { nama: "Nur Syazwani binti Zainol",    sekolah: "SMK Kubang Semang",       program: "D. Pengurusan Perniagaan", gred: "2A", tarikh: "23 Sep 2026", status: "Ditawarkan"  },
  { nama: "Danish Irfan bin Ramli",       sekolah: "SMK Penanti",             program: "D. Kejuruteraan Awam",     gred: "3B", tarikh: "24 Sep 2026", status: "Didaftar"    },
];
