const agents = [
    {
        name: "Astra",
        role: "Controller",
        description: "Controller dari Ghana yang menggunakan Stars untuk mengendalikan peta dengan gravity well, nova pulse, dan cosmic divide.",
        icon: "assets/icon/Astra_icon.webp",
        wallpaper: "assets/wallpaper/Astra.jpg"
    },
    {
        name: "Breach",
        role: "Initiator",
        description: "Initiator asal Swedia yang menciptakan kehancuran dengan flashpoint, aftershock, dan Rolling Thunder untuk membongkar pertahanan musuh.",
        icon: "assets/icon/Breach_icon.webp",
        wallpaper: "assets/wallpaper/Breach.jpg"
    },
    {
        name: "Brimstone",
        role: "Controller",
        description: "Seorang pemimpin veteran dengan kemampuan mengendalikan area melalui smoke, molly, dan orbital strike untuk mendominasi medan perang.",
        wallpaper: "assets/wallpaper/Brimstone.jpg",
        icon: "assets/icon/Brimstone_icon.webp"
    },
    {
        name: "Chamber",
        role: "Sentinel",
        description: "Agent asal Prancis yang membawa senjata khusus seperti headhunter dan tour de force, serta memiliki kemampuan rendezvous untuk mobilitas tinggi.",
        icon: "assets/icon/Chamber_icon.webp",
        wallpaper: "assets/wallpaper/Chamber.png"
    },
    {
        name: "Clove",
        role: "Controller",
        description: "Agent muda asal Skotlandia yang memiliki kekuatan untuk bangkit kembali setelah mati, melihat kematian sebagai sesuatu yang indah.",
        icon: "assets/icon/Clove_icon.webp",
        wallpaper: "assets/wallpaper/Clove.jpg"
    },
    {
        name: "Cypher",
        role: "Sentinel",
        description: "Spymaster asal Maroko yang mengumpulkan intel dengan tripwire, spycam, dan Neural Theft untuk mengetahui posisi musuh.",
        icon: "assets/icon/Cypher_icon.webp",
        wallpaper: "assets/wallpaper/Cypher.jpg"
    },
    {
        name: "Deadlock",
        role: "Sentinel",
        description: "Agent disiplin yang menggunakan teknologi untuk mengunci area dan melindungi tim dengan penghalang.",
        icon: "assets/icon/Deadlock_icon.webp",
        wallpaper: "assets/wallpaper/Deadlock.jpg"
    },
    {
        name: "Fade",
        role: "Initiator",
        description: "Initiator dari Turki yang mengandalkan prowler, seize, dan nightfall untuk memburu dan mengungkap musuh di kegelapan.",
        icon: "assets/icon/Fade_icon.webp",
        wallpaper: "assets/wallpaper/Fade.jpg"

    },
    {
        name: "Gekko",
        role: "Initiator",
        description: "Agent ceria yang mengendalikan wingman, dizzy, mosh pit, dan thrash untuk mengumpulkan informasi dan menyerang musuh.",
        icon: "assets/icon/Gekko_icon.webp",
        wallpaper: "assets/wallpaper/Gekko.png"
    },
    {
        name: "Harbor",
        role: "Controller",
        description: "Controller asal India yang menggunakan kekuatan air seperti cascade dan high tide untuk menghalangi pandangan musuh dan Reckoning untuk mengontrol area.",
        icon: "assets/icon/Harbor_icon.webp",
        wallpaper: "assets/wallpaper/Harbor.png"
    },
    {
        name: "Iso",
        role: "Duelist",
        description: "Agent misterius yang memanipulasi ruang dan waktu untuk menciptakan ilusi dan mengubah medan perang.",
        icon: "assets/icon/Iso_icon.webp",
        wallpaper: "assets/wallpaper/Iso.jpg"
    },
    {
      name: "Jett",
      role: "Duelist",
      description: "Duelist gesit dari Korea Selatan dengan kemampuan dash, updraft, serta Blade Storm yang mematikan.",
      icon: "assets/icon/Jett_icon.webp",
      wallpaper: "assets/wallpaper/Jett.jpg"
    },
    {
        name: "KAY/O",
        role: "Initiator",
        description: "Robot mesin perang yang dapat menonaktifkan kemampuan musuh, melempar grenade dan flash, serta menggunakan null/cmd untuk keuntungan dalam pertempuran.",
        icon: "assets/icon/KAYO_icon.webp",
        wallpaper: "assets/wallpaper/KAYO.jpg"
    },
    {
        name: "Killjoy",
        role: "Sentinel",
        description: "Engineer dari Jerman yang menggunakan turret, nanoswarm grenades, dan Lockdown untuk mengendalikan area secara efektif.",
        icon: "assets/icon/Killjoy_icon.webp",
        wallpaper: "assets/wallpaper/Killjoy.jpg"
    },
    {
        name: "Neon",
        role: "Duelist",
        description: "Duelist asal Filipina yang memanfaatkan kecepatan super dengan high gear dan fast lane, serta serangan mematikan dengan Overdrive.",
        icon: "assets/icon/Neon_icon.webp",
        wallpaper: "assets/wallpaper/Neon.jpg"
    },
    {
        name: "Omen",
        role: "Controller",
        description: "Agen misterius yang menguasai kegelapan, mampu teleportasi, membuat smoke gelap, dan membutakan musuh dengan Paranoia.",
        icon: "assets/icon/Omen_icon.webp",
        wallpaper: "assets/wallpaper/Omen.jpg"
    },
    {
        name: "Phoenix",
        role: "Duelist",
        description: "Duelist dari Inggris yang mengandalkan kemampuan api seperti curveball (flash) dan Blaze untuk menyerang, serta run it back yang membuatnya bisa hidup kembali setelah tereliminasi.",
        icon: "assets/icon/Phoenix_icon.webp",
        wallpaper: "assets/wallpaper/Phoenix.jpg"
    },
    {
        name: "Raze",
        role: "Duelist",
        description: "Ahli ledakan dari Brasil yang menggunakan granat, Boom Bot, dan Showstopper untuk menciptakan ledakan besar di area lawan.",
        icon: "assets/icon/Raze_icon.webp",
        wallpaper: "assets/wallpaper/Raze.jpg"
    },
    {
        name: "Reyna",
        role: "Duelist",
        description: "Duelist dari Meksiko yang unggul dalam pertempuran individu dengan Devour dan Dismiss, serta Empress untuk meningkatkan kemampuan tempur.",
        icon: "assets/icon/Reyna_icon.webp",
        wallpaper: "assets/wallpaper/Reyna.jpg"
    },
    {
        name: "Sage",
        role: "Sentinel",
        description: "Seorang support dari China, memiliki kemampuan heal, barrier orb untuk melindungi, dan resurrection untuk menghidupkan kembali rekan satu tim.",
        icon: "assets/icon/Sage_icon.webp",
        wallpaper: "assets/wallpaper/Sage.jpg"
    },
    {
        name: "Skye",
        role: "Initiator",
        description: "Initiator dari Australia yang membantu tim dengan heal area, seekers, dan guiding light untuk mengungkap posisi musuh.",
        icon: "assets/icon/Skye_icon.webp",
        wallpaper: "assets/wallpaper/Skye.jpg"
    },
    {
      name: "Sova",
      role: "Initiator",
      description: "Pemanah dari Rusia yang andal melacak dan mengeliminasi musuh dengan recon bolt, shock dart, serta Hunter's Fury untuk serangan jarak jauh.",
      icon: "assets/icon/Sova_icon.webp",
      wallpaper: "assets/wallpaper/Sova.jpg"
    },
    {
        name: "Viper",
        role: "Controller",
        description: "Ahli kimia beracun dari Amerika Serikat, menggunakan toxic screen, poison cloud, dan Viper's Pit untuk mengontrol area dan memaksa musuh keluar dari posisi mereka.",
        icon: "assets/icon/Viper_icon.webp",
        wallpaper: "assets/wallpaper/Viper.jpg"
    },
    {
        name: "Vyse",
        role: "Sentinel",
        description: "Agent karismatik yang menggunakan kekuatan magis dan elemen untuk bertarung dan memberikan dukungan kepada tim.",
        icon: "assets/icon/Vyse_icon.webp",
        wallpaper: "assets/wallpaper/Vyse.jpg"
    },
    {
        name: "Yoru",
        role: "Duelist",
        description: "Agen dari Jepang yang ahli infiltrasi, menggunakan gatecrash, fakeout, dan dimensional drift untuk menyelinap dan menyerang.",
        icon: "assets/icon/Yoru_icon.webp",
        wallpaper : "assets/wallpaper/Yoru.jpg"
    },
  ];

const mapDetails = {
    "Abyss": {
        name: "ABYSS",
        location: "Atlantis",
        description: "Peta bawah laut dengan arsitektur futuristik yang menggabungkan teknologi modern dengan reruntuhan kuno.",
        minimap: "assets/minimaps/Abyss_minimap.webp"
    },
    "Ascent": {
        name: "ASCENT",
        location: "Italy",
        description: "Taman terbuka untuk pertarungan posisi kecil dan pertempuran yang membagi dua site di Ascent.",
        minimap: "assets/minimaps/Ascent_minimap.webp"
    },
    "Bind": {
        name: "BIND",
        location: "Morocco",
        description: "Dua site. Tanpa tengah. Harus memilih kiri atau kanan. Apa pilihanmu?",
        minimap: "assets/minimaps/Bind_minimap.webp"
    },
    "Haven": {
        name: "HAVEN",
        location: "Bhutan",
        description: "Di bawah biara yang terlupakan, pertempuran sengit muncul dari para Agen yang berebut mengendalikan tiga site.",
        minimap: "assets/minimaps/Haven_minimap.webp"
    },
    "Split": {
        name: "SPLIT",
        location: "Jepan",
        description: "Jika kamu ingin pergi jauh, kamu harus naik ke atas.",
        minimap: "assets/minimaps/Split_minimap.webp"
    },
    "Icebox": {
        name: "ICEBOX",
        location: "Russia",
        description: "Medan pertempuran berikutnya adalah lokasi penggalian rahasia Kingdom yang diambil alih oleh wilayah arktik.",
        minimap: "assets/minimaps/Icebox_minimap.webp"
    },
    "Breeze": {
        name: "BREEZE",
        location: "Caribbean",
        description: "Nikmati pemandangan reruntuhan bersejarah atau gua tepi pantai di surga tropis ini.",
        minimap: "assets/minimaps/Breeze_minimap.webp"
    },
    "Fracture": {
        name: "FRACTURE",
        location: "USA",
        description: "Fasilitas penelitian rahasia yang terbelah akibat eksperimen radianite yang gagal.",
        minimap: "assets/minimaps/Fracture_minimap.webp"
    },
    "Pearl": {
        name: "PEARL",
        location: "Portugal",
        description: "Penyerang bergerak turun ke kota bawah laut.",
        minimap: "assets/minimaps/Pearl_minimap.webp"
    },
    "Lotus": {
        name: "LOTUS",
        location: "India",
        description: "Struktur misterius yang menyimpan saluran astral.",
        minimap: "assets/minimaps/Lotus_minimap.webp"
    },
    "Sunset": {
        name: "SUNSET",
        location: "USA",
        description: "Lokasi yang terletak di pusat hiburan Los Angeles dengan pemandangan matahari terbenam yang menakjubkan.",
        minimap: "assets/minimaps/Sunset_minimap.webp"
    },
};

document.addEventListener('DOMContentLoaded', () => {
    initializeAgentGrid();
    InitializeMap();
    initializeMinimapZoom();
});

function initializeAgentGrid() {
    const grid = document.getElementById('agent-grid');
    agents.forEach(agent => {
        const card = createAgentCard(agent);
        grid.appendChild(card);
    });
}

function createAgentCard(agent) {
    const card = document.createElement('div');
    card.className = 'agent-card';
    
    card.innerHTML = `
        <img src="${agent.icon}" alt="${agent.name}">
        <h3>${agent.name}</h3>
    `;
    
    card.addEventListener('click', () => selectAgent(agent, card));
    
    return card;
}

function selectAgent(agent, card) {
    document.querySelectorAll('.agent-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    
    document.getElementById('agent-name').textContent = agent.name;
    document.getElementById('agent-role').textContent = agent.role;
    document.getElementById('agent-description').textContent = agent.description;
    
    if (agent.wallpaper) {
        const section2 = document.getElementById('section-2');
        section2.style.backgroundImage = `url(${agent.wallpaper})`;
        section2.style.backgroundSize = 'cover';
        section2.style.backgroundPosition = 'center';
        section2.style.backgroundRepeat = 'no-repeat';
    }
}

function InitializeMap() {
    const mapCards = document.querySelectorAll('.map-card');
    const map = document.querySelector('.map');
    
    mapCards.forEach(card => {
        card.addEventListener('click', () => {
            const mapName = card.getAttribute('data-map');
            const mapData = mapDetails[mapName];
            
            document.getElementById('map-name').textContent = mapData.name;
            document.getElementById('map-location').textContent = mapData.location;
            document.getElementById('map-desc').textContent = mapData.description;
            document.getElementById('body-map-img').src = `assets/maps/${mapName}.webp`;
            document.getElementById('minimap-img').src = mapData.minimap;
            
            map.style.display = 'flex';
        });
    });

    const closeButton = document.querySelector('.close-button');
    closeButton.onclick = () => map.style.display = 'none';
    
    window.onclick = (event) => {
        if (event.target === map) {
            map.style.display = 'none';
        }
    };
}

function initializeMinimapZoom() {
    const minimap = document.querySelector('.minimap');
    const minimapZoom = document.querySelector('.minimap-zoom');
    const zoomedMinimap = document.getElementById('zoomed-minimap');
    const closeZoomBtn = document.querySelector('.close-zoom');
    const minimapIMG = document.getElementById('minimap-img');

    minimap.addEventListener('click', () => {
        minimapZoom.style.display = 'flex';
        zoomedMinimap.src = minimapIMG.src;
    });

    closeZoomBtn.addEventListener('click', () => {
        minimapZoom.style.display = 'none';
    });

    minimapZoom.addEventListener('click', (e) => {
        if (e.target === minimapZoom) {
            minimapZoom.style.display = 'none';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && minimapZoom.style.display === 'flex') {
            minimapZoom.style.display = 'none';
        }
    });
}