const translations = {
  th: {
    'hero-title': 'ยินดีต้อนรับสู่เว็บไซต์ของเรา',
    'hero-desc':  'เริ่มต้นสร้างเว็บสวยๆ ด้วย HTML และ CSS',
    'hero-btn':   'เริ่มต้นเลย',
    'nav-home':   'หน้าแรก',
    'nav-about':  'เกี่ยวกับ',
    'nav-contact':'ติดต่อ',
  },
  en: {
    'hero-title': 'Welcome to Our Website',
    'hero-desc':  'Start building beautiful websites with HTML and CSS',
    'hero-btn':   'Get Started',
    'nav-home':   'Home',
    'nav-about':  'About',
    'nav-contact':'Contact',
  },
    fr: {
    'hero-title': 'Welcome to Our Website',
    'hero-desc':  'Start building beautiful websites with HTML and CSS',
    'hero-btn':   'Get Started',
    'nav-home':   'Home',
    'nav-about':  'About',
    'nav-contact':'Contact',
  }
};

function setLang(lang) {

  localStorage.setItem('lang', lang);
  
  document.documentElement.lang = lang;
  
  const t = translations[lang];
  if (!t) return;
    
  const safeTranslate = (id, text) => {
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = text;
    }
  };
  
  safeTranslate('description', t.description);
  safeTranslate('member', t.member);
  safeTranslate('member-title', t.member);
  safeTranslate('merchant', t.merchant);
  safeTranslate('merch-des', t.merchdes);
  safeTranslate('titlelink', t.titlelink);
  safeTranslate('foot', t.foot);
  safeTranslate('merchInfo1', t.merchInfo1);
  safeTranslate('merchInfo2', t.merchInfo2);
  safeTranslate('visitmerch', t.visitmerch);
  
  const langBtn = document.querySelector('.lang-btn');
  if (langBtn) {
    const labels = { fr: '🇫🇷 FR', th: '🇹🇭 TH', en: '🇬🇧 EN' };
    langBtn.innerHTML = `🌐 ${labels[lang] || lang.toUpperCase()} ▾`;
  }

  const langMenu = document.getElementById('lang-menu');
  if (langMenu) {
    langMenu.style.display = 'none';
  }
}
function toggleLangMenu() {
            var menu = document.getElementById("lang-menu");
            if (menu.style.display === "flex") {
                menu.style.display = "none";
            } else {
                menu.style.display = "flex";
            }
        }
        window.onclick = function(event) {
            if (!event.target.matches('.lang-btn')) {
                var menu = document.getElementById("lang-menu");
                if (menu && menu.style.display === "flex") {
                    menu.style.display = "none";
                }
            }
        }

window.addEventListener('click', function(e) {
  const switcher = document.querySelector('.lang-switcher');
  const menu = document.getElementById('lang-menu');
  if (switcher && menu && !switcher.contains(e.target)) {
    menu.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'fr';
  setLang(savedLang);

  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});

window.setLang = setLang;
window.toggleLangMenu = toggleLangMenu;
