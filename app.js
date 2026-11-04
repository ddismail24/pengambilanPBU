// =============================================
// app.js — Dashboard Pengambilan Pelajar
// Politeknik Balik Pulau, Sesi 2026/2027
// =============================================

// --- HEADER DATE ---
function setHeaderDate() {
  const el = document.getElementById("header-date");
  if (!el) return;
  const opts = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  el.textContent = new Date().toLocaleDateString("ms-MY", opts);
}

// =============================================
// ST3: KPI CARDS
// =============================================
function renderKPICards() {
  const grid = document.getElementById("kpi-grid");
  if (!grid) return;
  grid.innerHTML = kpiData.map(k => `
    <div class="kpi-card" style="border-left-color:${k.color}">
      <div class="kpi-icon" style="color:${k.color}"><i class="${k.ikon || k.icon}"></i></div>
      <div class="kpi-value">${k.value.toLocaleString("ms-MY")}</div>
      <div class="kpi-label">${k.label}</div>
      <div class="kpi-sub ${k.subClass}">${k.sub}</div>
      ${k.progress !== null ? `
        <div class="progress-bar-wrap">
          <div class="progress-bar-fill" style="width:${Math.min(k.progress,100)}%;background:${k.color}"></div>
        </div>` : ""}
    </div>
  `).join("");
}

// =============================================
// ST3: NOTIFIKASI
// =============================================
function renderNotifikasi() {
  const list = document.getElementById("notif-list");
  if (!list) return;
  list.innerHTML = notifikasiData.map((n, i) => `
    <div class="notif-item ${n.tahap}" id="notif-${i}" onclick="toggleNotif(${i})">
      <div class="notif-icon"><i class="${n.ikon}"></i></div>
      <div class="notif-content">
        <div class="notif-title">${n.tajuk}</div>
        <div class="notif-desc">${n.hurai}</div>
        <div class="notif-masa"><i class="fa-regular fa-clock"></i> ${n.masa}</div>
      </div>
      <div class="notif-check" id="check-${i}"><i class="fa-regular fa-circle"></i></div>
    </div>
  `).join("");
  updateNotifBadge();
}

function toggleNotif(i) {
  const item = document.getElementById(`notif-${i}`);
  const check = document.getElementById(`check-${i}`);
  if (!item || !check) return;
  item.classList.toggle("done");
  check.innerHTML = item.classList.contains("done")
    ? `<i class="fa-solid fa-circle-check" style="color:#16a34a"></i>`
    : `<i class="fa-regular fa-circle"></i>`;
  updateNotifBadge();
}

// TB3: Kemas kini badge kiraan notifikasi di sidebar
function updateNotifBadge() {
  const badge = document.getElementById("notif-badge");
  if (!badge) return;
  const belumSelesai = document.querySelectorAll(".notif-item:not(.done)").length;
  badge.textContent = belumSelesai > 0 ? belumSelesai : "";
  badge.style.display = belumSelesai > 0 ? "inline-flex" : "none";
}

// =============================================
// ST4: CHARTS
// =============================================
// Simpan rujukan carta untuk dikemas kini oleh toggle
let trendChartInstance = null;

function renderTrendChart() {
  const ctx = document.getElementById("chartTrend");
  if (!ctx) return;
  trendChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: trendData.bulan,
      datasets: [
        {
          label: "Permohonan 2026/2027",
          data: trendData.permohonan,
          borderColor: "#1a56a8",
          backgroundColor: "rgba(26,86,168,0.08)",
          borderWidth: 2.5,
          pointRadius: 4,
          pointBackgroundColor: "#1a56a8",
          fill: true,
          tension: 0.4,
        },
        {
          label: "Ditawarkan 2026/2027",
          data: trendData.ditawarkan,
          borderColor: "#0891b2",
          backgroundColor: "rgba(8,145,178,0.06)",
          borderWidth: 2,
          pointRadius: 3,
          pointBackgroundColor: "#0891b2",
          fill: true,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "top" },
        tooltip: { mode: "index", intersect: false },
      },
      scales: {
        y: { beginAtZero: true, grid: { color: "#eef0f4" } },
        x: { grid: { display: false } },
      },
    },
  });
}

// TB1: Toggle YoY — tambah/buang dataset sesi lalu
function toggleTrendYoY(mode, btn) {
  if (!trendChartInstance) return;

  // Kemas kini butang aktif
  document.querySelectorAll(".toggle-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  if (mode === "bandingkan") {
    // Tambah dataset sesi lalu jika belum ada
    const sudahAda = trendChartInstance.data.datasets.find(d => d.label === "Permohonan 2025/2026");
    if (!sudahAda) {
      trendChartInstance.data.datasets.push({
        label: "Permohonan 2025/2026",
        data: trendData.permohonanLalu,
        borderColor: "#94a3b8",
        backgroundColor: "rgba(148,163,184,0.05)",
        borderWidth: 2,
        borderDash: [5, 4],
        pointRadius: 3,
        pointBackgroundColor: "#94a3b8",
        fill: false,
        tension: 0.4,
      });
    }
  } else {
    // Buang dataset sesi lalu
    trendChartInstance.data.datasets = trendChartInstance.data.datasets.filter(
      d => d.label !== "Permohonan 2025/2026"
    );
  }
  trendChartInstance.update();
}

function renderProgramChart() {
  const ctx = document.getElementById("chartProgram");
  if (!ctx) return;
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: programData.label,
      datasets: [{
        data: programData.nilai,
        backgroundColor: programData.warna,
        borderWidth: 2,
        borderColor: "#fff",
      }],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom", labels: { font: { size: 11 }, boxWidth: 12 } },
        tooltip: {
          callbacks: {
            label: ctx => ` ${ctx.label}: ${ctx.parsed} permohonan`
          }
        }
      },
    },
  });
}

function renderFunnelChart() {
  const ctx = document.getElementById("chartFunnel");
  if (!ctx) return;
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: funnelData.map(f => f.peringkat),
      datasets: [{
        label: "Bilangan",
        data: funnelData.map(f => f.nilai),
        backgroundColor: ["#1a56a8","#2563eb","#0891b2","#16a34a","#059669"],
        borderRadius: 6,
        borderSkipped: false,
      }],
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, grid: { color: "#eef0f4" } },
        x: { grid: { display: false } },
      },
    },
  });
}

function renderSekolahChart() {
  const ctx = document.getElementById("chartSekolah");
  if (!ctx) return;
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: sekolahData.map(s => s.nama),
      datasets: [{
        label: "Bilangan Pemohon",
        data: sekolahData.map(s => s.pemohon),
        backgroundColor: "#1a56a8",
        borderRadius: 4,
        borderSkipped: false,
      }],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { beginAtZero: true, grid: { color: "#eef0f4" } },
        y: { grid: { display: false }, ticks: { font: { size: 12 } } },
      },
    },
  });
}

// =============================================
// ST5: DEMOGRAFI & MEDIA SOSIAL
// =============================================
function renderDemografiCharts() {
  const ctxJ = document.getElementById("chartJantina");
  if (ctxJ) {
    new Chart(ctxJ, {
      type: "pie",
      data: {
        labels: demografiData.jantina.label,
        datasets: [{
          data: demografiData.jantina.nilai,
          backgroundColor: demografiData.jantina.warna,
          borderWidth: 2,
          borderColor: "#fff",
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "bottom", labels: { font: { size: 12 }, boxWidth: 14 } },
        },
      },
    });
  }

  const ctxK = document.getElementById("chartKaum");
  if (ctxK) {
    new Chart(ctxK, {
      type: "pie",
      data: {
        labels: demografiData.kaum.label,
        datasets: [{
          data: demografiData.kaum.nilai,
          backgroundColor: demografiData.kaum.warna,
          borderWidth: 2,
          borderColor: "#fff",
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "bottom", labels: { font: { size: 12 }, boxWidth: 14 } },
        },
      },
    });
  }

  const ctxG = document.getElementById("chartGred");
  if (ctxG) {
    new Chart(ctxG, {
      type: "bar",
      data: {
        labels: demografiData.gred.label,
        datasets: [{
          label: "Bilangan Pemohon",
          data: demografiData.gred.nilai,
          backgroundColor: ["#1a56a8","#2563eb","#0891b2","#16a34a","#d97706","#dc2626"],
          borderRadius: 4,
          borderSkipped: false,
        }],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: "#eef0f4" } },
          x: { grid: { display: false } },
        },
      },
    });
  }
}

function renderSosialCards() {
  const grid = document.getElementById("sosial-grid");
  if (!grid) return;
  grid.innerHTML = sosialData.map(s => `
    <div class="sosial-card">
      <div class="sosial-icon" style="color:${s.warna}"><i class="${s.ikon}"></i></div>
      <div class="sosial-platform">${s.platform}</div>
      <div class="sosial-val">${s.pertanyaan.toLocaleString("ms-MY")}</div>
      <div class="sosial-label">Pertanyaan Diterima</div>
      <div class="sosial-sub">Jangkauan: <strong>${s.reach}</strong></div>
      <div class="sosial-change ${s.arah === 'up' ? 'kpi-positive' : 'kpi-negative'}">
        <i class="fa-solid fa-arrow-${s.arah}"></i> ${s.perubahan} bulan ini
      </div>
    </div>
  `).join("");
}

// =============================================
// TB2: METER SASARAN PER PROGRAM
// =============================================
function renderMeterProgram() {
  const grid = document.getElementById("kuota-grid");
  if (!grid) return;
  grid.innerHTML = programKuotaData.map(p => {
    const peratusan = Math.round((p.didaftar / p.kuota) * 100);
    const warnaKelas = peratusan >= 80 ? "kuota-hijau" : peratusan >= 50 ? "kuota-oren" : "kuota-merah";
    const warnaBatang = peratusan >= 80 ? "#16a34a" : peratusan >= 50 ? "#d97706" : "#dc2626";
    const statusLabel = peratusan >= 100 ? "Penuh" : peratusan >= 80 ? "Hampir Penuh" : peratusan >= 50 ? "Sederhana" : "Perlu Perhatian";
    return `
      <div class="kuota-card">
        <div class="kuota-nama">${p.nama}</div>
        <div class="kuota-angka">
          <span class="kuota-didaftar">${p.didaftar}</span>
          <span class="kuota-slash"> / ${p.kuota} tempat</span>
          <span class="kuota-status ${warnaKelas}">${statusLabel}</span>
        </div>
        <div class="kuota-bar">
          <div class="kuota-fill" style="width:${Math.min(peratusan,100)}%;background:${warnaBatang}"></div>
        </div>
        <div class="kuota-peratus" style="color:${warnaBatang}">${peratusan}%</div>
      </div>
    `;
  }).join("");
}

// =============================================
// ST6: JADUAL PERMOHONAN
// =============================================
let jadualAllData = [];

function statusBadge(status) {
  const map = {
    "Ditawarkan": "badge-ditawarkan",
    "Menunggu":   "badge-menunggu",
    "Ditolak":    "badge-ditolak",
    "Didaftar":   "badge-didaftar",
  };
  return `<span class="badge ${map[status] || ''}">${status}</span>`;
}

function renderJadualPermohonan(data) {
  const tbody = document.getElementById("jadual-body");
  const count = document.getElementById("jadual-count");
  if (!tbody) return;
  tbody.innerHTML = data.map((p, i) => `
    <tr>
      <td>${i + 1}</td>
      <td><strong>${p.nama}</strong></td>
      <td>${p.sekolah}</td>
      <td>${p.program}</td>
      <td>${p.gred}</td>
      <td>${p.tarikh}</td>
      <td>${statusBadge(p.status)}</td>
    </tr>
  `).join("");
  if (count) count.textContent = `Menunjukkan ${data.length} daripada ${permohonanData.length} rekod`;
}

function filterJadual() {
  const carian = (document.getElementById("carian-input").value || "").toLowerCase();
  const status = document.getElementById("filter-status").value;
  const filtered = permohonanData.filter(p => {
    const matchCarian = !carian || p.nama.toLowerCase().includes(carian) || p.sekolah.toLowerCase().includes(carian);
    const matchStatus = !status || p.status === status;
    return matchCarian && matchStatus;
  });
  renderJadualPermohonan(filtered);
}

// =============================================
// ST6: AKTIVITI PROMOSI
// =============================================
function renderAktiviti() {
  const grid = document.getElementById("aktiviti-grid");
  if (!grid) return;
  const statusLabel = { akan: "Akan Datang", berjalan: "Sedang Berjalan", selesai: "Selesai" };
  const statusClass = { akan: "akt-akan", berjalan: "akt-berjalan", selesai: "akt-selesai" };
  const statusIcon  = { akan: "fa-solid fa-calendar", berjalan: "fa-solid fa-spinner fa-spin", selesai: "fa-solid fa-check" };
  grid.innerHTML = kegiatanData.map(k => `
    <div class="aktiviti-card">
      <div class="akt-status ${statusClass[k.status]}">
        <i class="${statusIcon[k.status]}"></i> ${statusLabel[k.status]}
      </div>
      <div class="akt-nama">${k.nama}</div>
      <div class="akt-tarikh"><i class="fa-regular fa-calendar"></i> ${k.tarikh}</div>
      <div class="akt-lokasi"><i class="fa-solid fa-location-dot"></i> ${k.lokasi}</div>
    </div>
  `).join("");
}

// =============================================
// ST7: SIDEBAR NAVIGATION
// =============================================
function initNavigation() {
  const links = document.querySelectorAll(".nav-link");
  links.forEach(link => {
    link.addEventListener("click", e => {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Highlight active nav on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 80) {
        current = sec.id;
      }
    });
    links.forEach(l => {
      l.classList.toggle("active", l.getAttribute("href") === `#${current}`);
    });
  }, { passive: true });
}

// =============================================
// INIT — run all renders
// =============================================
document.addEventListener("DOMContentLoaded", () => {
  setHeaderDate();
  renderKPICards();
  renderNotifikasi();
  renderTrendChart();
  renderProgramChart();
  renderFunnelChart();
  renderMeterProgram();
  renderSekolahChart();
  renderDemografiCharts();
  renderSosialCards();
  renderJadualPermohonan(permohonanData);
  renderAktiviti();
  initNavigation();
});
