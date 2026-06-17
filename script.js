// ============================================
// script.js - نسخه کامل با پشتیبانی موبایل
// ============================================

// ====== محتوای انگلیسی ======
const SITE_CONTENT_EN = {
    nav: {
        home: 'Home',
        contact: 'Contact',
        about: '✦ About',
        whoAmI: '✦ Who Am I',
        skills: '✦ Skills',
        projects: '✦ Projects',
        faq: '✦ FAQ',
    },
    home: {
        title: 'PortFolio',
        subtitle: "Hey there, I'm Hesam",
        date: '2007 . 07 . 19',
    },
    about: {
        title: 'About Me',
        description: "I'm Hesam. I don't code — I command AI to do it for me. Been glued to computers since I was a kid, and I've mastered the digital playground: gaming, crypto, and markets are my turf. Photoshop? Got it. Video editing? I do it all on mobile, and I make it look clean. I don't just use tech — I bend it to my will.",
        badge: '✦ Available for work ✦',
        photoName: 'Hesam',
    },
    whoAmI: {
        title: 'Who Am I?',
        paragraphs: [
            "Hey! Glad you made it to my portfolio. I'm Hesam, born and raised in Gorgan, Golestan, Iran.",
            "I've been into digital and online spaces since I was 8 years old — and I'm still going strong. Always learning, always practicing, always leveling up.",
            "If you wanna know what I'm good at, I've laid it all out for you down below. Thanks for stopping by — enjoy!"
        ],
        info: {
            birthday: 'July 19, 2007',
            location: 'Gorgan, Iran',
            experience: '11+ Years',
        },
        map: {
            title: 'My Homeland',
            location: '🇮🇷 Gorgan, Golestan — North of Iran',
            badges: ['🏔️ Alborz Mountains', '🌊 Caspian Sea', '🌿 Green Nature'],
            description: 'Living in the historic and green city of Gorgan, inspired by rich Persian culture and modern innovation.',
        }
    },
    skills: {
        badge: '✦ MY EXPERTISE ✦',
        description: 'My specialty is in numbers and charts — each skill indicates my level of ability in that area.',
        interests: {
            title: 'Interests & Hobbies',
            items: [
                { icon: 'fas fa-desktop', label: 'Computer' },
                { icon: 'fas fa-gamepad', label: 'Gaming' },
                { icon: 'fas fa-code', label: 'Coding' },
                { icon: 'fas fa-brain', label: 'AI' },
                { icon: 'fas fa-coins', label: 'Crypto' },
                { icon: 'fas fa-credit-card', label: 'English' },
                { icon: 'fas fa-coffee', label: 'Designer' },
                { icon: 'fas fa-pen-fancy', label: 'Editor' },
            ]
        },
        categories: [
            {
                title: 'Skill - 1',
                icon: 'fas fa-rocket',
                skills: [
                    { name: 'Computer', icon: 'fas fa-desktop', percent: 90 },
                    { name: 'Gaming', icon: 'fas fa-gamepad', percent: 85 },
                    { name: 'Coding', icon: 'fas fa-code', percent: 50 },
                    { name: 'English', icon: 'fas fa-language', percent: 35 },
                ]
            },
            {
                title: 'Skill - 2',
                icon: 'fas fa-tools',
                skills: [
                    { name: 'Fixing App ...', icon: 'fas fa-gear', percent: 90 },
                    { name: 'Git & GitHub', icon: 'fab fa-git-alt', percent: 50 },
                    { name: 'PhotoShop', icon: 'fas fa-paint-brush', percent: 48 },
                    { name: 'AlightMotion ...', icon: 'fas fa-pen-fancy', percent: 42 },
                ]
            },
            {
                title: 'Skill - 3',
                icon: 'fas fa-chart-line',
                skills: [
                    { name: 'AI & ChatGPT', icon: 'fas fa-brain', percent: 60 },
                    { name: 'Social Media', icon: 'fas fa-globe', percent: 90 },
                    { name: 'Crypto', icon: 'fas fa-coins', percent: 50 },
                    { name: 'Arzdigital', icon: 'fas fa-book', percent: 50 },
                ]
            }
        ],
        highlights: [
            { label: 'Computer', percent: 90 },
            { label: 'Gaming', percent: 90 },
            { label: 'Crypto', percent: 50 },
            { label: 'Arzdigital', percent: 50 },
            { label: 'Social Media', percent: 90 },
            { label: 'English', percent: 35 },
            { label: 'PhotoShop', percent: 40 },
            { label: 'Editor', percent: 40 },
            { label: 'Ai & ChatGpt', percent: 60 },
        ]
    },
    projects: {
        title: 'My Projects',
        badge: '✨ Coming Soon ✨',
        items: [
            { icon: '⚙️', title: 'Coming Soon - 1', description: '.....................' },
            { icon: '⛩️', title: 'Coming Soon - 2', description: '.....................' },
            { icon: '🐲', title: 'Coming Soon - 3', description: '.....................' },
        ]
    },
    faq: {
        title: 'Frequently Asked Questions',
        items: [
            {
                question: 'How do you code with AI?',
                answer: 'I use tools like ChatGPT and Claude. I give ideas, write prompts, test, and finalize. I don\'t code — I command'
            },
            {
                question: 'How did you get into digital space as a kid?',
                answer: 'Started with computers at 8, got into gaming, then the internet, then crypto and digital marketing. All from pure curiosity.'
            },
            {
                question: 'Do you accept collaborations?',
                answer: 'Yes! If you have a project in my areas, I\'d love to work with you. Just know — I\'m not a coder, I work with AI'
            },
            {
                question: 'Where do you see yourself in the future?',
                answer: 'Staying in the digital lane, never stopping learning, leveling up every day. I wanna make a name in crypto and digital content.'
            },
            {
                question: 'How can I reach you?',
                answer: 'Hit me up on social media — check the contact section. Telegram or Discord is where I reply fastest.'
            }
        ]
    },
    contact: {
        badge: '✦ GET IN TOUCH ✦',
        title: "Let's Connect",
        description: "If you have any questions or would like to collaborate with me, I'd be happy to hear from you.",
        talkTitle: "Let's Talk",
        phone: '+98 911 410 4923',
        email: 'madpro01034@gmail.com',
        location: 'IRAN, Gorgan',
        availability: 'Available for freelance & collaboration',
        socials: [
            { platform: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/knownashesam' },
            { platform: 'Twitter', icon: 'fab fa-twitter', url: 'https://X.com/KnownAsHesam' },
            { platform: 'GitHub', icon: 'fab fa-github', url: 'https://Github.com/DiamondAsHesam' },
            { platform: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/known-ashesam-399039413?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
            { platform: 'Telegram', icon: 'fab fa-telegram', url: 'https://t.me/DiamondAsHesam' },
            { platform: 'Discord', icon: 'fab fa-discord', url: 'https://discord.gg/MWr2QCCMTv' },
        ]
    },
    footer: {
        brand: 'Hesam',
        tagline: 'Front-end developer & designer<br>Creating modern digital experiences',
        quickLinks: ['Home', 'About', 'Who Am I', 'Skills', 'Projects', 'FAQ', 'Contact'],
        contactInfo: {
            phone: '+98 911 410 4923',
            email: 'madpro01034@gmail.com',
            location: 'Gorgan, Iran'
        },
        socials: [
            { platform: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/knownashesam' },
            { platform: 'Twitter', icon: 'fab fa-twitter', url: 'https://X.com/KnownAsHesam' },
            { platform: 'GitHub', icon: 'fab fa-github', url: 'https://Github.com/DiamondAsHesam' },
            { platform: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/known-ashesam-399039413?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
            { platform: 'Telegram', icon: 'fab fa-telegram', url: 'https://t.me/DiamondAsHesam' },
            { platform: 'Discord', icon: 'fab fa-discord', url: 'https://discord.gg/MWr2QCCMTv' },
        ],
        copyright: '2025',
        rights: 'All rights reserved.',
        credit: 'Designed with ❤️'
    }
};

// ====== محتوای فارسی ======
const SITE_CONTENT_FA = {
    nav: {
        home: 'خانه',
        contact: 'تماس',
        about: '✦ درباره من',
        whoAmI: '✦ من کیستم',
        skills: '✦ مهارت‌ها',
        projects: '✦ پروژه‌ها',
        faq: '✦ سوالات متداول',
    },
    home: {
        title: 'پورتفولیو',
        subtitle: "سلام، من حسام هستم",
        date: '۲۰۰۷ . ۰۷ . ۱۹',
    },
    about: {
        title: 'درباره من',
        description: "من حسام هستم. من کد نمی‌نویسم — به هوش مصنوعی دستور می‌دم برام کد بنویسه. از بچگی به کامپیوتر چسبیدم و توی فضای دیجیتال استاد شدم: بازی، ارز دیجیتال و بازارها حوزه من هستند. فتوشاپ؟ بلدم. تدوین ویدیو؟ همه رو روی موبایل انجام می‌دم و تمیز درش می‌ارم. من فقط از تکنولوژی استفاده نمی‌کنم — بهش فرمان می‌دم.",
        badge: '✦ آماده همکاری ✦',
        photoName: 'حسام',
    },
    whoAmI: {
        title: 'من کیستم؟',
        paragraphs: [
            "سلام! خوشحالم که به پورتفولیوی من رسیدی. من حسام هستم، متولد و بزرگ‌شده گرگان، گلستان، ایران.",
            "از ۸ سالگی وارد فضای دیجیتال و آنلاین شدم — و هنوز هم با قدرت ادامه می‌دم. همیشه در حال یادگیری، تمرین و پیشرفت.",
            "اگه می‌خوای بدونی توی چی خوبم، همه رو برات پایین لیست کردم. ممنون که اومدی — لذت ببر!"
        ],
        info: {
            birthday: '۱۹ تیر ۱۳۸۶',
            location: 'گرگان، ایران',
            experience: '۱۱+ سال',
        },
        map: {
            title: 'سرزمین من',
            location: '🇮🇷 گرگان، گلستان — شمال ایران',
            badges: ['🏔️ رشته کوه البرز', '🌊 دریای خزر', '🌿 طبیعت سبز'],
            description: 'زندگی در شهر تاریخی و سبز گرگان، الهام‌گرفته از فرهنگ غنی پارسی و نوآوری مدرن.',
        }
    },
    skills: {
        badge: '✦ تخصص‌های من ✦',
        description: 'تخصص من در قالب اعداد و نمودارها — هر مهارت نشان‌دهنده سطح توانایی من در آن زمینه است',
        interests: {
            title: 'علاقه‌مندی‌ها',
            items: [
                { icon: 'fas fa-desktop', label: 'کامپیوتر' },
                { icon: 'fas fa-gamepad', label: 'بازی' },
                { icon: 'fas fa-code', label: 'برنامه‌نویسی' },
                { icon: 'fas fa-brain', label: 'هوش مصنوعی' },
                { icon: 'fas fa-coins', label: 'ارز دیجیتال' },
                { icon: 'fas fa-credit-card', label: 'انگلیسی' },
                { icon: 'fas fa-coffee', label: 'طراحی' },
                { icon: 'fas fa-pen-fancy', label: 'تدوین' },
            ]
        },
        categories: [
            {
                title: 'مهارت - ۱',
                icon: 'fas fa-rocket',
                skills: [
                    { name: 'کامپیوتر', icon: 'fas fa-desktop', percent: 90 },
                    { name: 'بازی', icon: 'fas fa-gamepad', percent: 85 },
                    { name: 'برنامه‌نویسی', icon: 'fas fa-code', percent: 50 },
                    { name: 'انگلیسی', icon: 'fas fa-language', percent: 35 },
                ]
            },
            {
                title: 'مهارت - ۲',
                icon: 'fas fa-tools',
                skills: [
                    { name: 'تعمیر اپ ...', icon: 'fas fa-gear', percent: 90 },
                    { name: 'گیت و گیت‌هاب', icon: 'fab fa-git-alt', percent: 50 },
                    { name: 'فتوشاپ', icon: 'fas fa-paint-brush', percent: 48 },
                    { name: 'آلایت موشن ...', icon: 'fas fa-pen-fancy', percent: 42 },
                ]
            },
            {
                title: 'مهارت - ۳',
                icon: 'fas fa-chart-line',
                skills: [
                    { name: 'هوش مصنوعی و چت‌جی‌پی‌تی', icon: 'fas fa-brain', percent: 60 },
                    { name: 'شبکه‌های اجتماعی', icon: 'fas fa-globe', percent: 90 },
                    { name: 'ارز دیجیتال', icon: 'fas fa-coins', percent: 50 },
                    { name: 'arzdigital', icon: 'fas fa-book', percent: 50 },
                ]
            }
        ],
        highlights: [
            { label: 'کامپیوتر', percent: 90 },
            { label: 'بازی', percent: 90 },
            { label: 'ارز دیجیتال', percent: 50 },
            { label: 'arzdigital', percent: 50 },
            { label: 'شبکه‌های اجتماعی', percent: 90 },
            { label: 'انگلیسی', percent: 35 },
            { label: 'فتوشاپ', percent: 40 },
            { label: 'تدوین', percent: 40 },
            { label: 'هوش مصنوعی و چت‌جی‌پی‌تی', percent: 60 },
        ]
    },
    projects: {
        title: 'پروژه‌های من',
        badge: '✨ به زودی ✨',
        items: [
            { icon: '⚙️', title: 'به زودی - ۱', description: '.....................' },
            { icon: '⛩️', title: 'به زودی - ۲', description: '.....................' },
            { icon: '🐲', title: 'به زودی - ۳', description: '.....................' },
        ]
    },
    faq: {
        title: 'سوالات متداول',
        items: [
            {
                question: 'چطور با هوش مصنوعی کد می‌نویسی؟',
                answer: 'از ابزارهایی مثل چت‌جی‌پی‌تی و کلود استفاده می‌کنم. ایده می‌دم، پرامپت می‌نویسم، تست می‌کنم و نهایی‌سازی می‌کنم. من کد نمی‌نویسم — فرمان می‌دم'
            },
            {
                question: 'چطور از بچگی وارد فضای دیجیتال شدی؟',
                answer: 'از ۸ سالگی با کامپیوتر شروع کردم، بعد بازی، بعد اینترنت، بعد ارز دیجیتال و بازاریابی دیجیتال. همه از روی کنجکاوی محض.'
            },
            {
                question: 'همکاری قبول می‌کنی؟',
                answer: 'بله! اگه پروژه‌ای توی حوزه‌های من داری، خوشحال می‌شم باهات کار کنم. فقط بدون — من کدنویس نیستم، با هوش مصنوعی کار می‌کنم'
            },
            {
                question: 'خودت رو در آینده کجا می‌بینی؟',
                answer: 'همین‌طور توی مسیر دیجیتال می‌مونم، هیچ‌وقت یادگیری رو متوقف نمی‌کنم، هر روز بهتر می‌شم. می‌خوام توی ارز دیجیتال و محتوای دیجیتال اسمی برام دست‌وپا کنم.'
            },
            {
                question: 'چطور می‌تونم باهات تماس بگیرم؟',
                answer: 'توی شبکه‌های اجتماعی پیام بده — بخش تماس رو ببین. تلگرام یا دیسکورد سریع‌ترین جواب رو می‌دم.'
            }
        ]
    },
    contact: {
        badge: '✦ ارتباط با من ✦',
        title: 'بیا ارتباط بگیریم',
        description: 'اگه سوالی داری یا می‌خوای باهات همکاری کنم، خوشحال می‌شم پیام بدی.',
        talkTitle: 'بیا حرف بزنیم',
        phone: '۰۹۱۱ ۴۱۰ ۴۹۲۳',
        email: 'madpro01034@gmail.com',
        location: 'ایران، گرگان',
        availability: 'آماده همکاری',
        socials: [
            { platform: 'اینستاگرام', icon: 'fab fa-instagram', url: 'https://www.instagram.com/knownashesam' },
            { platform: 'توییتر', icon: 'fab fa-twitter', url: 'https://X.com/KnownAsHesam' },
            { platform: 'گیت‌هاب', icon: 'fab fa-github', url: 'https://Github.com/DiamondAsHesam' },
            { platform: 'لینکدین', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/known-ashesam-399039413?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
            { platform: 'تلگرام', icon: 'fab fa-telegram', url: 'https://t.me/DiamondAsHesam' },
            { platform: 'دیسکورد', icon: 'fab fa-discord', url: 'https://discord.gg/MWr2QCCMTv' },
        ]
    },
    footer: {
        brand: 'حسام',
        tagline: 'توسعه‌دهنده فرانت‌اند و طراح<br>ساخت تجربه‌های دیجیتال مدرن',
        quickLinks: ['خانه', 'درباره من', 'من کیستم', 'مهارت‌ها', 'پروژه‌ها', 'سوالات متداول', 'تماس'],
        contactInfo: {
            phone: '۰۹۱۱ ۴۱۰ ۴۹۲۳',
            email: 'madpro01034@gmail.com',
            location: 'گرگان، ایران'
        },
        socials: [
            { platform: 'اینستاگرام', icon: 'fab fa-instagram', url: 'https://www.instagram.com/knownashesam' },
            { platform: 'توییتر', icon: 'fab fa-twitter', url: 'https://X.com/KnownAsHesam' },
            { platform: 'گیت‌هاب', icon: 'fab fa-github', url: 'https://Github.com/DiamondAsHesam' },
            { platform: 'لینکدین', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/known-ashesam-399039413?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
            { platform: 'تلگرام', icon: 'fab fa-telegram', url: 'https://t.me/DiamondAsHesam' },
            { platform: 'دیسکورد', icon: 'fab fa-discord', url: 'https://discord.gg/MWr2QCCMTv' },
        ],
        copyright: '۲۰۲۵',
        rights: 'تمامی حقوق محفوظ است.',
        credit: 'طراحی شده با ❤️'
    }
};

// ============================================
// تشخیص موبایل
// ============================================
function isMobile() {
    return window.innerWidth <= 768;
}

function isPhone() {
    return window.innerWidth <= 500;
}

// ============================================
// اجرای اصلی
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    let currentLang = 'en';
    let isChangingLang = false;
    let isMobileDevice = isMobile();
    let isPhoneDevice = isPhone();

    // ============================================
    // رندر محتوا
    // ============================================
    function renderContent(lang) {
        const C = lang === 'en' ? SITE_CONTENT_EN : SITE_CONTENT_FA;
        
        if (!C) return;

        // هدر
        document.getElementById('navHome').textContent = C.nav.home;
        document.getElementById('navContact').textContent = C.nav.contact;
        document.getElementById('navAbout').textContent = C.nav.about;
        document.getElementById('navWho').textContent = C.nav.whoAmI;
        document.getElementById('navSkills').textContent = C.nav.skills;
        document.getElementById('navProjects').textContent = C.nav.projects;
        document.getElementById('navFaq').textContent = C.nav.faq;

        // صفحه اول
        document.getElementById('homeDate').textContent = C.home.date;
        document.getElementById('homeTitle').textContent = C.home.title;
        document.getElementById('subtitleText').textContent = C.home.subtitle;

        // صفحه دوم
        document.getElementById('aboutTitle').textContent = C.about.title;
        document.getElementById('aboutDescription').textContent = C.about.description;
        document.getElementById('aboutBadge').textContent = C.about.badge;
        document.getElementById('aboutPhotoName').textContent = C.about.photoName;

        // صفحه سوم
        document.getElementById('whoTitle').textContent = C.whoAmI.title;
        document.getElementById('whoPara1').textContent = C.whoAmI.paragraphs[0];
        document.getElementById('whoPara2').textContent = C.whoAmI.paragraphs[1];
        
        const labels = lang === 'en' 
            ? { birthday: 'BIRTHDAY', location: 'LOCATION', experience: 'EXPERIENCE' }
            : { birthday: 'تاریخ تولد', location: 'مکان', experience: 'تجربه' };
            
        document.getElementById('labelBirthday').textContent = labels.birthday;
        document.getElementById('labelLocation').textContent = labels.location;
        document.getElementById('labelExperience').textContent = labels.experience;
        
        document.getElementById('whoBirthday').textContent = C.whoAmI.info.birthday;
        document.getElementById('whoLocation').textContent = C.whoAmI.info.location;
        document.getElementById('whoExperience').textContent = C.whoAmI.info.experience;

        document.getElementById('mapTitle').innerHTML = `<i class="fas fa-map-marked-alt"></i> ${C.whoAmI.map.title}`;
        document.getElementById('mapLocation').textContent = C.whoAmI.map.location;
        document.getElementById('mapDescription').textContent = C.whoAmI.map.description;

        const badgesContainer = document.getElementById('mapBadges');
        badgesContainer.innerHTML = '';
        C.whoAmI.map.badges.forEach(b => {
            const span = document.createElement('span');
            span.textContent = b;
            badgesContainer.appendChild(span);
        });

        // صفحه چهارم
        document.getElementById('skillsBadge').textContent = C.skills.badge;
        document.getElementById('skillsDesc').textContent = C.skills.description;
        document.getElementById('interestsTitle').innerHTML = `<i class="fas fa-heart"></i> ${C.skills.interests.title}`;

        const interestsGrid = document.getElementById('interestsGrid');
        interestsGrid.innerHTML = '';
        C.skills.interests.items.forEach(item => {
            const span = document.createElement('span');
            span.className = 'interest-item';
            span.innerHTML = `<i class="${item.icon}"></i> ${item.label}`;
            interestsGrid.appendChild(span);
        });

        const skillsGrid = document.getElementById('skillsGrid');
        skillsGrid.innerHTML = '';
        C.skills.categories.forEach(cat => {
            const card = document.createElement('div');
            card.className = 'skill-category-card';
            card.innerHTML = `
                <div class="category-title">
                    <i class="${cat.icon}"></i>
                    <h3>${cat.title}</h3>
                </div>
                <div class="skill-list">
                    ${cat.skills.map(s => `
                        <div class="skill-row">
                            <div class="skill-info">
                                <span class="skill-name"><i class="${s.icon}"></i> ${s.name}</span>
                                <span class="skill-percent">${s.percent}%</span>
                            </div>
                            <div class="progress-bar-container">
                                <div class="progress-fill" data-percent="${s.percent}"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            skillsGrid.appendChild(card);
        });

        const barsContainer = document.getElementById('barsContainer');
        barsContainer.innerHTML = '';
        const highlightsTitle = lang === 'en' ? 'Skill Highlights' : 'نکات برجسته مهارت‌ها';
        document.getElementById('highlightsTitle').innerHTML = `<i class="fas fa-chart-simple"></i> ${highlightsTitle}`;
        C.skills.highlights.forEach(h => {
            const item = document.createElement('div');
            item.className = 'bar-item';
            item.innerHTML = `
                <div class="vertical-bar"><div class="bar-fill" data-height="${h.percent}"></div></div>
                <div class="bar-label">${h.label}</div>
                <div class="bar-value">${h.percent}%</div>
            `;
            barsContainer.appendChild(item);
        });

        // صفحه پنجم
        document.getElementById('projectsTitle').textContent = C.projects.title;
        document.getElementById('projectsBadge').textContent = C.projects.badge;
        const projectsGrid = document.getElementById('projectsGrid');
        projectsGrid.innerHTML = '';
        C.projects.items.forEach(p => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <div class="project-icon">${p.icon}</div>
                <h3>${p.title}</h3>
                <p>${p.description}</p>
            `;
            projectsGrid.appendChild(card);
        });

        // صفحه ششم
        document.getElementById('faqTitle').textContent = C.faq.title;
        const faqContainer = document.getElementById('faqItems');
        faqContainer.innerHTML = '';
        C.faq.items.forEach((item) => {
            const div = document.createElement('div');
            div.className = 'faq-item';
            div.innerHTML = `
                <div class="faq-question">
                    <span>${item.question}</span>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="faq-answer">${item.answer}</div>
            `;
            faqContainer.appendChild(div);
        });

        // ====== صفحه هفتم - Contact با نمایش جداگانه برای موبایل ======
        document.getElementById('contactBadge').textContent = C.contact.badge;
        document.getElementById('contactTitle').textContent = C.contact.title;
        document.getElementById('contactDesc').textContent = C.contact.description;
        document.getElementById('talkTitle').textContent = C.contact.talkTitle;
        
        // نمایش تلفن و ایمیل - جداگانه برای موبایل
        const phoneElement = document.getElementById('contactPhone');
        if (isPhoneDevice) {
            // موبایل: دو خط جداگانه
            phoneElement.innerHTML = `
                <span class="phone-row"><i class="fas fa-phone-alt"></i> ${C.contact.phone}</span>
                <span class="email-row"><i class="fas fa-envelope"></i> ${C.contact.email}</span>
            `;
        } else {
            // دسکتاپ و تبلت: یک خط با جداکننده
            phoneElement.innerHTML = `
                <i class="fas fa-phone-alt"></i> ${C.contact.phone} &nbsp;&nbsp;|&nbsp;&nbsp; <i class="fas fa-envelope"></i> ${C.contact.email}
            `;
        }
        
        document.getElementById('contactLocation').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${C.contact.location}`;
        document.getElementById('contactAvailability').textContent = C.contact.availability;

        const contactSocials = document.getElementById('contactSocials');
        contactSocials.innerHTML = '';
        C.contact.socials.forEach(s => {
            const a = document.createElement('a');
            a.href = s.url;
            a.setAttribute('aria-label', s.platform);
            a.innerHTML = `<i class="${s.icon}"></i>`;
            contactSocials.appendChild(a);
        });

        // فوتر
        document.getElementById('footerBrand').textContent = C.footer.brand;
        document.getElementById('footerTagline').innerHTML = C.footer.tagline;
        
        const quickTitle = lang === 'en' ? 'Quick Links' : 'لینک‌های سریع';
        document.getElementById('footerQuickTitle').textContent = quickTitle;
        const contactTitle = lang === 'en' ? 'Contact Info' : 'اطلاعات تماس';
        document.getElementById('footerContactTitle').textContent = contactTitle;
        const socialTitle = lang === 'en' ? 'Follow me on social media' : 'من رو در شبکه‌های اجتماعی دنبال کن';
        document.getElementById('footerSocialTitle').textContent = socialTitle;

        const footerLinks = document.getElementById('footerLinks');
        footerLinks.innerHTML = '';
        C.footer.quickLinks.forEach((link, index) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#page${index + 1}`;
            a.textContent = link;
            li.appendChild(a);
            footerLinks.appendChild(li);
        });

        document.getElementById('footerContact').innerHTML = `
            📞 ${C.footer.contactInfo.phone}<br>
            ✉️ ${C.footer.contactInfo.email}<br>
            📍 ${C.footer.contactInfo.location}
        `;

        const footerSocials = document.getElementById('footerSocials');
        footerSocials.innerHTML = '';
        C.footer.socials.forEach(s => {
            const a = document.createElement('a');
            a.href = s.url;
            a.innerHTML = `<i class="${s.icon}"></i>`;
            footerSocials.appendChild(a);
        });

        document.getElementById('footerBottom').innerHTML = `
            &copy; ${C.footer.copyright} <span>${C.footer.brand}</span>. ${C.footer.rights} | ${C.footer.credit}
        `;

        setTimeout(initFaq, 200);
    }

    // ============================================
    // تغییر زبان
    // ============================================
    function changeLanguage(lang) {
        if (isChangingLang || lang === currentLang) return;
        isChangingLang = true;

        const loader = document.getElementById('loaderWrapper');
        const main = document.getElementById('mainContent');
        loader.classList.remove('hide');
        loader.style.display = 'flex';
        main.classList.remove('show');

        const loaderText = document.getElementById('loaderText');
        loaderText.textContent = lang === 'en' ? 'Loading...' : 'در حال بارگذاری...';

        setTimeout(() => {
            currentLang = lang;
            renderContent(lang);
            
            loader.classList.add('hide');
            main.classList.add('show');
            setTimeout(() => {
                loader.style.display = 'none';
                isChangingLang = false;
            }, 600);
        }, 5000);
    }

    // ============================================
    // منو
    // ============================================
    const menuStar = document.getElementById('menuStar');
    const navPopup = document.getElementById('navPopup');

    menuStar.addEventListener('click', (e) => {
        e.stopPropagation();
        navPopup.classList.toggle('open');
    });

    document.querySelectorAll('.nav-popup-links a').forEach(link => {
        link.addEventListener('click', () => {
            navPopup.classList.remove('open');
        });
    });

    document.addEventListener('click', (e) => {
        if (!menuStar.contains(e.target) && !navPopup.contains(e.target)) {
            navPopup.classList.remove('open');
        }
    });

    // ============================================
    // دکمه زبان
    // ============================================
    document.getElementById('langToggle').addEventListener('click', function(e) {
        e.stopPropagation();
        const newLang = currentLang === 'en' ? 'fa' : 'en';
        changeLanguage(newLang);
    });

    // ============================================
    // انیمیشن‌ها - فقط روی دسکتاپ
    // ============================================
    if (!isMobileDevice) {
        // انیمیشن‌های دسکتاپ با GSAP
        gsap.to("#firstPageContent", {
            scrollTrigger: {
                trigger: "#page1",
                start: "top top",
                end: "bottom top",
                scrub: 1.2
            },
            opacity: 0,
            scale: 0.85,
            filter: "blur(8px)"
        });

        gsap.to(".page-first .top-thin-line, .page-first .squares-horizontal, .page-first .date-outside", {
            scrollTrigger: {
                trigger: "#page1",
                start: "top top",
                end: "bottom top",
                scrub: 1
            },
            opacity: 0,
            y: -30
        });

        gsap.to("#fallContainer", {
            scrollTrigger: {
                trigger: "#page2",
                start: "top top",
                end: "bottom top",
                scrub: 1.2
            },
            y: 300,
            opacity: 0,
            scale: 0.7,
            rotation: 15
        });

        gsap.to("#suckLayer", {
            scrollTrigger: {
                trigger: "#page3",
                start: "top top",
                end: "bottom top",
                scrub: 1.2
            },
            scale: 300,
            duration: 1
        });

        // کارت About برای دسکتاپ
        gsap.set("#aboutCard", { opacity: 0, y: 100 });

        ScrollTrigger.create({
            trigger: "#page2",
            start: "top 70%",
            onEnter: () => {
                gsap.to("#aboutCard", {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "back.out(0.6)"
                });
            },
            onLeaveBack: () => {
                gsap.set("#aboutCard", { opacity: 0, y: 100 });
            }
        });

        // صفحه سوم برای دسکتاپ
        gsap.set("#aboutDetailContainer", { opacity: 0, y: 100 });
        gsap.set("#iranMapCard", { opacity: 0, x: 50 });

        ScrollTrigger.create({
            trigger: "#page3",
            start: "top 70%",
            onEnter: () => {
                gsap.to("#aboutDetailContainer", {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "back.out(0.6)"
                });
                gsap.to("#iranMapCard", {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: "back.out(0.6)"
                });
            },
            onLeaveBack: () => {
                gsap.set("#aboutDetailContainer", { opacity: 0, y: 100 });
                gsap.set("#iranMapCard", { opacity: 0, x: 50 });
                gsap.set("#suckLayer", { scale: 0 });
            }
        });

        // صفحه چهارم برای دسکتاپ
        gsap.set("#page4 .skills-container", { opacity: 0, y: 50 });

        ScrollTrigger.create({
            trigger: "#page4",
            start: "top 70%",
            onEnter: () => {
                gsap.to("#page4 .skills-container", {
                    opacity: 1,
                    y: 0,
                    duration: 0.8
                });
            },
            onLeaveBack: () => {
                gsap.set("#page4 .skills-container", { opacity: 0, y: 50 });
            }
        });

        // صفحه پنجم برای دسکتاپ
        gsap.set("#projectsContainer", { opacity: 0, y: 100 });

        ScrollTrigger.create({
            trigger: "#page5",
            start: "top 70%",
            onEnter: () => {
                gsap.to("#projectsContainer", {
                    opacity: 1,
                    y: 0,
                    duration: 0.8
                });
            },
            onLeaveBack: () => {
                gsap.set("#projectsContainer", { opacity: 0, y: 100 });
            }
        });

        // صفحه ششم برای دسکتاپ
        gsap.set("#faqContainer", { opacity: 0, y: 100 });

        ScrollTrigger.create({
            trigger: "#page6",
            start: "top 70%",
            onEnter: () => {
                gsap.to("#faqContainer", {
                    opacity: 1,
                    y: 0,
                    duration: 0.8
                });
            },
            onLeaveBack: () => {
                gsap.set("#faqContainer", { opacity: 0, y: 100 });
            }
        });

        // صفحه هفتم برای دسکتاپ
        gsap.set("#page7 .contact-header-outside", { opacity: 0, y: 30 });
        gsap.set("#page7 .contact-glass-card", { opacity: 0, y: 30 });

        ScrollTrigger.create({
            trigger: "#page7",
            start: "top 70%",
            onEnter: () => {
                gsap.to("#page7 .contact-header-outside", { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.8 
                });
                gsap.to("#page7 .contact-glass-card", { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.8, 
                    delay: 0.15 
                });
            },
            onLeaveBack: () => {
                gsap.set("#page7 .contact-header-outside", { opacity: 0, y: 30 });
                gsap.set("#page7 .contact-glass-card", { opacity: 0, y: 30 });
            }
        });

    } else {
        // ====== موبایل: فقط CSS انیمیشن ======
        // با Intersection Observer المان‌ها رو نمایش بده
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // المان‌هایی که باید در موبایل نمایش داده بشن
        const mobileElements = [
            '.about-card',
            '.about-detail-container',
            '.map-card',
            '.skills-container',
            '.projects-container',
            '.faq-container',
            '.contact-glass-card',
            '.contact-header-outside'
        ];

        mobileElements.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                observer.observe(el);
            });
        });

        // صفحه اول و دوم برای موبایل - فقط یک افکت خیلی خفیف
        gsap.to("#firstPageContent", {
            scrollTrigger: {
                trigger: "#page1",
                start: "top top",
                end: "bottom top",
                scrub: 0.3
            },
            opacity: 0.8,
            scale: 0.97
        });

        gsap.to("#fallContainer", {
            scrollTrigger: {
                trigger: "#page2",
                start: "top top",
                end: "bottom top",
                scrub: 0.3
            },
            opacity: 0.85,
            y: 20
        });
    }

    // ============================================
    // انیمیشن نوارهای مهارت (برای همه)
    // ============================================
    function animateSkillBars() {
        document.querySelectorAll('.progress-fill').forEach(bar => {
            const percent = bar.getAttribute('data-percent');
            if (percent) bar.style.width = percent + '%';
        });
        document.querySelectorAll('.bar-fill').forEach(bar => {
            const height = bar.getAttribute('data-height');
            if (height) bar.style.height = height + '%';
        });
    }

    // اجرای انیمیشن نوارها با اسکرول
    ScrollTrigger.create({
        trigger: "#page4",
        start: "top 60%",
        onEnter: animateSkillBars,
        onEnterBack: animateSkillBars
    });

    // برای موبایل هم با Intersection Observer
    if (isMobileDevice) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        document.querySelectorAll('#page4 .skills-container').forEach(el => {
            skillsObserver.observe(el);
        });
    }

    // ============================================
    // FAQ
    // ============================================
    function initFaq() {
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const q = item.querySelector('.faq-question');
            if (q) {
                const newQ = q.cloneNode(true);
                q.parentNode.replaceChild(newQ, q);
                
                newQ.addEventListener('click', function() {
                    const parent = this.parentElement;
                    const isActive = parent.classList.contains('active');
                    
                    document.querySelectorAll('.faq-item').forEach(i => {
                        if (i !== parent && i.classList.contains('active')) {
                            i.classList.remove('active');
                        }
                    });
                    
                    if (isActive) {
                        parent.classList.remove('active');
                    } else {
                        parent.classList.add('active');
                    }
                });
            }
        });
    }

    // ============================================
    // ریسایز
    // ============================================
    window.addEventListener('resize', function() {
        const wasMobile = isMobileDevice;
        const wasPhone = isPhoneDevice;
        isMobileDevice = isMobile();
        isPhoneDevice = isPhone();
        
        // اگه وضعیت تغییر کرده، صفحه رفرش بشه
        if (wasMobile !== isMobileDevice || wasPhone !== isPhoneDevice) {
            location.reload();
        }
        
        ScrollTrigger.refresh();
    });

    // ============================================
    // اجرای اولیه
    // ============================================
    renderContent('en');

    setTimeout(() => {
        const loader = document.getElementById('loaderWrapper');
        const main = document.getElementById('mainContent');
        if (loader && main) {
            loader.classList.add('hide');
            main.classList.add('show');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 600);
        }
    }, 2000);
});
