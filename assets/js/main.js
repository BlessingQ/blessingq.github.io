(function () {
  'use strict';

  var STORAGE_LANG = 'lang-preference';
  var STORAGE_THEME = 'theme-preference';

  var SHOTS = [
    {
      src: 'assets/images/ymodem-usb.webp',
      titleKo: 'YMODEM Uploader — USB 시리얼 연결',
      titleEn: 'YMODEM Uploader — USB Serial Connection',
      altKo: 'YMODEM Uploader USB Serial Connection 화면 (FTDI / FT232R 115200 bps)',
      altEn: 'YMODEM Uploader USB Serial Connection screen showing FTDI FT232R at 115200 bps'
    },
    {
      src: 'assets/images/ymodem-upload.webp',
      titleKo: 'YMODEM Uploader — 펌웨어 전송',
      titleEn: 'YMODEM Uploader — YMODEM Firmware Upload',
      altKo: 'YMODEM Firmware Upload 파일 선택 및 전송 화면',
      altEn: 'YMODEM Firmware Upload file selection and block transfer screen'
    },
    {
      src: 'assets/images/ymodem-megaboot.webp',
      titleKo: 'YMODEM Uploader — MegaBoot 실시간 로그',
      titleEn: 'YMODEM Uploader — MegaBoot Progress & Logs',
      altKo: 'MegaBoot FLASH 페이지 전송 진행률 및 로그 화면',
      altEn: 'MegaBoot FLASH page progress bar and real-time terminal logs'
    },
    {
      src: 'assets/images/ymodem-protocol.webp',
      titleKo: 'YMODEM Uploader — 프로토콜 주소 설정',
      titleEn: 'YMODEM Uploader — Custom Protocol Addressing',
      altKo: '사용자 정의 프로토콜 Device · Controller · Gateway ID 설정 화면',
      altEn: 'Custom protocol screen for configuring Device, Controller, and Gateway IDs'
    }
  ];

  var COPY = {
    ko: {
      indexTitle: 'BlessingQ | 임베디드 · 앱 · 데스크톱 소프트웨어 엔지니어',
      thankDocTitle: '감사합니다 | BlessingQ',
      skipLink: '본문으로 건너뛰기',
      navAria: '주요 내비게이션',
      navAbout: '소개',
      navProjects: '프로젝트',
      navSkills: '기술 스택',
      navContact: '연락하기',
      langToggleText: 'EN',
      langToggleAria: 'Switch language to English',
      menuOpenAria: '메뉴 열기',
      menuCloseAria: '메뉴 닫기',
      themeGroupAria: '테마 선택',
      themeSystem: '자동',
      themeLight: '라이트',
      themeDark: '다크',

      heroBadge: '임베디드 · 앱 · 데스크톱 소프트웨어',
      heroTitleLine1: '현장의 하드웨어와',
      heroTitleLine2: '실용적인 소프트웨어를 잇습니다',
      heroLead: 'STM32 펌웨어부터 Flutter Android 앱, Python 데스크톱 유틸리티 및 MCP 개발 도구까지. 현업과 일상에서 바로 쓰이는 단단하고 직관적인 소프트웨어를 설계하고 구현합니다.',
      heroCtaProjects: '프로젝트 살펴보기',
      heroCtaContact: '문의하기',
      avatarAlt: 'BlessingQ 프로필 사진',
      profileRole: '임베디드 시스템 & 크로스플랫폼 개발자',

      showcaseAria: '대표 출시 앱 미리보기',
      showcaseTabsAria: '앱 화면 전환',
      ymodemIconAlt: 'YMODEM Uploader 앱 아이콘',
      showcaseSub: 'USB OTG 펌웨어 업로더',
      showcaseBadge: 'Google Play 출시',
      shotTab0: 'USB 연결',
      shotTab1: 'YMODEM',
      shotTab2: 'MegaBoot',
      shotTab3: '프로토콜',
      heroShotBtnAria: 'YMODEM Uploader 스크린샷 크게 보기',
      showcaseHint: '탭으로 화면 전환 · 이미지 클릭 시 크게 보기',

      aboutHeading: '개발 분야와 접근 방식',
      aboutSubheading: '하드웨어 제어부터 사용자 화면까지, 문제에 가장 잘 맞는 기술로 단단하게 만듭니다.',
      aboutCard1Title: '핵심 영역',
      aboutCard1List: [
        'STM32 마이크로컨트롤러 & 임베디드 C/C++ 펌웨어',
        'TouchGFX 기반 임베디드 UI 및 UART · SPI · I2C 통신',
        'Flutter Android 앱 (USB OTG 시리얼, 로컬 PDF 보안 처리)',
        'Python PyQt6 크로스플랫폼 유틸리티 및 MCP 개발 도구'
      ],
      aboutCard2Title: '설계 원칙',
      aboutCard2Body: '화려한 기능보다 현장에서 멈추지 않는 안정성과 직관적인 사용 흐름을 우선합니다. 민감한 문서 처리나 하드웨어 제어는 불필요한 외부 서버 의존 없이 기기 안에서 완결되도록 설계합니다.',
      aboutCard3Title: '모바일 · 데스크톱 앱',
      aboutCard3List: [
        'USB OTG 시리얼 및 부트로더 펌웨어 업로더 Google Play 출시',
        '100% 온디바이스 PDF 편집·전자서명·마스킹 모바일 앱 개발',
        'Windows · macOS · Linux 지원 PyQt6 데스크톱 유틸리티',
        'C/C++ 소스 UTF-8 변환 및 프레임 뷰어 유틸리티 배포'
      ],
      aboutCard4Title: '자동화 & 엔지니어링',
      aboutCard4List: [
        'PADS Logic/Layout 9.x 연동을 위한 MCP 서버 설계 및 구현',
        'Windows COM 자동화와 ASCII 설계 파일 파싱 결합',
        'Git 기반 버전 관리와 크로스플랫폼 빌드·릴리즈 패키징',
        '실사용 환경 피드백을 반영한 지속적인 유지보수'
      ],

      projectsHeading: '주요 프로젝트',
      projectsSubheading: '실제 배포 및 운영 중인 모바일 앱, 데스크톱 유틸리티, 엔지니어링 도구입니다.',
      proj1Kicker: 'Google Play · Android 앱',
      proj1Desc: '스마트폰 USB OTG 포트로 FTDI·CP210x 등 USB-to-Serial 어댑터에 연결해 YMODEM 및 MegaBoot 프로토콜로 MCU 펌웨어를 전송하는 Android 앱입니다. 통신 속도 설정, 실시간 블록/페이지 로그, 사용자 정의 프로토콜 주소 구성을 지원합니다.',
      linkPlayStore: 'Google Play에서 보기',
      thumbAria0: 'USB 연결 화면 확대',
      thumbAria1: 'YMODEM 전송 화면 확대',
      thumbAria2: 'MegaBoot 로그 화면 확대',
      thumbAria3: '프로토콜 설정 화면 확대',

      proj2Kicker: 'On-Device · 모바일 PDF 도구',
      proj2Title: 'LoupePDF (루페PDF)',
      proj2Desc: '서버 업로드 없이 기기 내부에서만 동작하는 오프라인 PDF 편집·보안 모바일 앱입니다. 2.5배 정밀 돋보기(Loupe) 전자서명·도장 생성, 신분증 대각선 워터마크, 개인정보 마스킹 평탄화, AES-256 암호화 및 병합·분할 기능을 제공합니다.',
      linkLoupeInfo: '기능 · 개인정보처리방침',
      linkPlayDev: '개발자 스토어',

      proj3Kicker: 'GitHub · 데스크톱 유틸리티',
      proj3Desc: 'Python과 PyQt6로 제작한 크로스플랫폼 PDF 용량 압축 데스크톱 앱입니다. Windows·macOS·Linux 환경에서 /screen, /ebook, /printer, /prepress 품질 프리셋을 선택해 PDF 파일을 일괄 압축하고 결과 폴더에 깔끔하게 저장합니다.',
      linkGithubRepo: 'GitHub 저장소',

      proj4Kicker: 'GitHub · 전자 CAD MCP 서버',
      proj4Desc: 'Mentor PADS Logic 및 PADS Layout 9.x를 위한 MCP(Model Context Protocol) 서버입니다. Windows COM 자동화와 ASCII 설계 파일 파싱을 결합해 회로도·PCB 넷 및 부품 조회, 설계 검토 작업을 AI 도구와 연동합니다.',

      proj5Kicker: 'GitHub · 개발자 유틸리티',
      proj5Title: 'Encoding Converter & ShowFrameApp',
      proj5Desc: '레거시 임베디드 C/C++(.c, .h, .cpp, .hpp) 소스 코드 인코딩을 UTF-8로 안전하게 일괄 변환하는 Tkinter GUI·CLI 유틸리티(Encoding Converter)와, Windows·macOS용 프레임 분석 앱(ShowFrameApp) 배포 릴리즈를 제공합니다.',

      skillsHeading: '기술 스택',
      skillsSubheading: '하드웨어 펌웨어부터 크로스플랫폼 앱과 자동화 도구까지 활용하는 주요 기술입니다.',
      skillCat1: 'Firmware & Hardware',
      skillSerial: 'Serial 통신',
      skillCat2: 'Mobile & Desktop Apps',
      skillCat3: 'Automation & Tooling',

      contactHeading: '연락하기',
      contactSubheading: '프로젝트 협업이나 출시 앱 관련 문의는 아래 이메일 또는 폼으로 보내주세요.',
      contactDirectTitle: '직접 연락 및 채널',
      contactDirectDesc: '이메일 주소를 복사해 메일을 보내거나, GitHub · Google Play에서 더 많은 작업물을 확인하실 수 있습니다.',
      copyEmailBtn: '이메일 복사',
      copySuccess: '이메일 주소가 클립보드에 복사되었습니다.',
      copyFail: '클립보드 복사에 실패했습니다. 직접 주소를 선택해 복사해 주세요.',

      labelName: '이름',
      hintName: '성함 또는 소속을 입력해 주세요.',
      placeholderName: '홍길동',
      labelEmail: '이메일',
      hintEmail: '답변받으실 이메일 주소를 입력해 주세요.',
      placeholderEmail: 'name@example.com',
      labelMessage: '문의 내용',
      hintMessage: '문의하실 프로젝트나 내용을 간단히 적어 주세요.',
      placeholderMessage: '안녕하세요, 프로젝트 협업 관련하여 문의드립니다.',
      submitBtn: '메시지 보내기',
      errSummary: '입력 내용을 확인해 주세요.',
      errName: '이름을 입력해 주세요.',
      errEmailReq: '이메일 주소를 입력해 주세요.',
      errEmailInvalid: '올바른 이메일 주소 형식이 아닙니다.',
      errMessage: '문의 내용을 입력해 주세요.',

      footerCopy: '© 2026 BlessingQ. All rights reserved.',
      footerPrivacy: 'LoupePDF 개인정보처리방침',
      dialogClose: '닫기',

      thankTitle: '감사합니다!',
      thankSubtitle: '메시지가 성공적으로 전송되었습니다. 확인 후 가능한 한 빠르게 회신드리겠습니다.',
      thankMeta: '수신 이메일: ejok9194@gmail.com',
      thankBack: '포트폴리오로 돌아가기'
    },
    en: {
      indexTitle: 'BlessingQ | Embedded, Mobile & Desktop Software Engineer',
      thankDocTitle: 'Thank You | BlessingQ',
      skipLink: 'Skip to main content',
      navAria: 'Primary Navigation',
      navAbout: 'About',
      navProjects: 'Projects',
      navSkills: 'Skills',
      navContact: 'Contact',
      langToggleText: 'KO',
      langToggleAria: '한국어로 전환',
      menuOpenAria: 'Open menu',
      menuCloseAria: 'Close menu',
      themeGroupAria: 'Theme preference',
      themeSystem: 'System',
      themeLight: 'Light',
      themeDark: 'Dark',

      heroBadge: 'Embedded · Mobile · Desktop Software',
      heroTitleLine1: 'Bridging field hardware',
      heroTitleLine2: 'and practical software',
      heroLead: 'From STM32 firmware to Flutter Android apps, Python desktop utilities, and MCP developer tooling—designing reliable software built for everyday engineering workflows.',
      heroCtaProjects: 'Explore Projects',
      heroCtaContact: 'Get in Touch',
      avatarAlt: 'BlessingQ profile photo',
      profileRole: 'Embedded Systems & Cross-Platform Developer',

      showcaseAria: 'Featured app showcase',
      showcaseTabsAria: 'Switch app screen preview',
      ymodemIconAlt: 'YMODEM Uploader app icon',
      showcaseSub: 'USB OTG Firmware Uploader',
      showcaseBadge: 'On Google Play',
      shotTab0: 'USB',
      shotTab1: 'YMODEM',
      shotTab2: 'MegaBoot',
      shotTab3: 'Protocol',
      heroShotBtnAria: 'Enlarge YMODEM Uploader screenshot',
      showcaseHint: 'Switch tabs · Click screenshot to enlarge',

      aboutHeading: 'About & Focus',
      aboutSubheading: 'From low-level hardware communication to clean end-user interfaces.',
      aboutCard1Title: 'Core Expertise',
      aboutCard1List: [
        'STM32 microcontrollers & embedded C/C++ firmware',
        'TouchGFX embedded UI and UART · SPI · I2C protocols',
        'Flutter Android apps (USB OTG serial, on-device PDF processing)',
        'Python PyQt6 cross-platform utilities & MCP tooling'
      ],
      aboutCard2Title: 'Engineering Approach',
      aboutCard2Body: 'Prioritizing field reliability and clear user workflows over unnecessary complexity. Sensitive PDF operations and hardware communication execute locally without unnecessary external server dependencies.',
      aboutCard3Title: 'Mobile & Desktop',
      aboutCard3List: [
        'Published USB OTG serial & firmware uploader on Google Play',
        '100% on-device PDF signing, redaction & security mobile app',
        'Cross-platform PyQt6 GUI utilities for Windows, macOS & Linux',
        'Legacy C/C++ UTF-8 encoding converter & desktop viewer releases'
      ],
      aboutCard4Title: 'Automation & Tooling',
      aboutCard4List: [
        'MCP server connecting PADS Logic/Layout 9.x with AI tools',
        'Combining Windows COM automation with ASCII design file parsing',
        'Git workflows and cross-platform binary release packaging',
        'Iterative refinement driven by real engineering feedback'
      ],

      projectsHeading: 'Selected Projects',
      projectsSubheading: 'Shipped Android apps, cross-platform desktop utilities, and CAD automation tools.',
      proj1Kicker: 'Google Play · Android App',
      proj1Desc: 'An Android utility connecting via USB OTG to FTDI and CP210x serial adapters to flash MCU firmware over YMODEM and MegaBoot protocols—featuring configurable baud rates, live block/page logs, and custom protocol addressing.',
      linkPlayStore: 'View on Google Play',
      thumbAria0: 'Enlarge USB Connect screenshot',
      thumbAria1: 'Enlarge YMODEM Upload screenshot',
      thumbAria2: 'Enlarge MegaBoot log screenshot',
      thumbAria3: 'Enlarge Protocol Settings screenshot',

      proj2Kicker: 'On-Device · Mobile PDF Utility',
      proj2Title: 'LoupePDF',
      proj2Desc: 'An offline PDF editing and document security app running strictly on-device with zero server uploads. Offers a 2.5x Loupe magnifier for e-signatures and stamps, diagonal ID watermarks, permanent redaction flattening, AES-256 encryption, merge, and split.',
      linkLoupeInfo: 'Features & Privacy',
      linkPlayDev: 'Developer Store',

      proj3Kicker: 'GitHub · Desktop Utility',
      proj3Desc: 'A cross-platform PDF size reduction desktop app built with Python and PyQt6. Runs on Windows, macOS, and Linux with Ghostscript /screen, /ebook, /printer, and /prepress presets and organized output folders.',
      linkGithubRepo: 'GitHub Repository',

      proj4Kicker: 'GitHub · EDA MCP Server',
      proj4Desc: 'A Model Context Protocol (MCP) server for Mentor PADS Logic and PADS Layout 9.x. Blends Windows COM automation with ASCII design file parsing so AI clients can inspect schematics, nets, and PCB parts.',

      proj5Kicker: 'GitHub · Developer Utilities',
      proj5Title: 'Encoding Converter & ShowFrameApp',
      proj5Desc: 'Includes Encoding Converter (Tkinter GUI & CLI to safely convert legacy C/C++ .c/.h/.cpp/.hpp source trees to UTF-8) alongside ShowFrameApp v1.2.0 desktop releases for Windows and macOS.',

      skillsHeading: 'Technical Skills',
      skillsSubheading: 'Core technologies used across firmware, cross-platform apps, and developer tooling.',
      skillCat1: 'Firmware & Hardware',
      skillSerial: 'Serial Communication',
      skillCat2: 'Mobile & Desktop Apps',
      skillCat3: 'Automation & Tooling',

      contactHeading: 'Get in Touch',
      contactSubheading: 'Reach out directly via email or use the inquiry form below for project collaboration.',
      contactDirectTitle: 'Direct Contact & Links',
      contactDirectDesc: 'Copy the email address below or explore published releases on GitHub and Google Play.',
      copyEmailBtn: 'Copy Email',
      copySuccess: 'Email address copied to clipboard.',
      copyFail: 'Copy failed. Please select and copy the email manually.',

      labelName: 'Name',
      hintName: 'Enter your name or organization.',
      placeholderName: 'Jane Doe',
      labelEmail: 'Email',
      hintEmail: 'Where should I send my reply?',
      placeholderEmail: 'name@example.com',
      labelMessage: 'Message',
      hintMessage: 'Briefly describe your project or inquiry.',
      placeholderMessage: 'Hello, I would like to discuss a project...',
      submitBtn: 'Send Message',
      errSummary: 'Please check the highlighted fields below.',
      errName: 'Please enter your name.',
      errEmailReq: 'Please enter your email address.',
      errEmailInvalid: 'Please enter a valid email address.',
      errMessage: 'Please enter a message.',

      footerCopy: '© 2026 BlessingQ. All rights reserved.',
      footerPrivacy: 'LoupePDF Privacy Policy',
      dialogClose: 'Close',

      thankTitle: 'Thank You!',
      thankSubtitle: 'Your message has been sent successfully. I will review it and get back to you soon.',
      thankMeta: 'Sent to: ejok9194@gmail.com',
      thankBack: 'Back to Portfolio'
    }
  };

  var currentLang = 'ko';
  var currentTheme = 'system';
  var currentShot = 0;
  var lastDialogTrigger = null;

  function readStorage(key, fallback) {
    try {
      var v = localStorage.getItem(key);
      return v || fallback;
    } catch (e) {
      return fallback;
    }
  }

  function writeStorage(key, val) {
    try {
      localStorage.setItem(key, val);
    } catch (e) {}
  }

  function applyTheme(pref) {
    currentTheme = (pref === 'light' || pref === 'dark') ? pref : 'system';
    if (currentTheme === 'system') {
      delete document.documentElement.dataset.theme;
    } else {
      document.documentElement.dataset.theme = currentTheme;
    }
    writeStorage(STORAGE_THEME, currentTheme);

    var buttons = document.querySelectorAll('.theme-choice[data-theme-choice]');
    buttons.forEach(function (btn) {
      var active = btn.getAttribute('data-theme-choice') === currentTheme;
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function applyLang(lang) {
    currentLang = lang === 'en' ? 'en' : 'ko';
    var dict = COPY[currentLang];
    document.documentElement.lang = currentLang;
    writeStorage(STORAGE_LANG, currentLang);

    var pageType = document.body.getAttribute('data-page');
    document.title = pageType === 'thank-you' ? dict.thankDocTitle : dict.indexTitle;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-list]').forEach(function (listEl) {
      var key = listEl.getAttribute('data-i18n-list');
      var items = dict[key];
      if (!Array.isArray(items)) return;
      listEl.textContent = '';
      items.forEach(function (text) {
        var li = document.createElement('li');
        li.textContent = text;
        listEl.appendChild(li);
      });
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.setAttribute('alt', dict[key]);
      }
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria-label');
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.setAttribute('aria-label', dict[key]);
      }
    });

    var langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      langBtn.textContent = dict.langToggleText;
      langBtn.setAttribute('aria-label', dict.langToggleAria);
    }

    var menuBtn = document.getElementById('menu-toggle');
    if (menuBtn) {
      var expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-label', expanded ? dict.menuCloseAria : dict.menuOpenAria);
    }

    selectShot(currentShot);
    refreshVisibleValidationErrors();
  }

  function selectShot(index) {
    var safeIdx = Math.max(0, Math.min(SHOTS.length - 1, Number(index) || 0));
    currentShot = safeIdx;
    var shot = SHOTS[safeIdx];
    var isEn = currentLang === 'en';

    var heroImg = document.getElementById('hero-shot-img');
    if (heroImg) {
      heroImg.src = shot.src;
      heroImg.alt = isEn ? shot.altEn : shot.altKo;
    }

    document.querySelectorAll('.showcase-tab[data-shot-index]').forEach(function (tab) {
      var active = Number(tab.getAttribute('data-shot-index')) === safeIdx;
      tab.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    var dialog = document.getElementById('shot-dialog');
    if (dialog && dialog.open) {
      syncDialogContent(safeIdx);
    }
  }

  function syncDialogContent(index) {
    var safeIdx = Math.max(0, Math.min(SHOTS.length - 1, Number(index) || 0));
    var shot = SHOTS[safeIdx];
    var isEn = currentLang === 'en';
    var titleEl = document.getElementById('dialog-title');
    var imgEl = document.getElementById('dialog-img');
    if (titleEl) titleEl.textContent = isEn ? shot.titleEn : shot.titleKo;
    if (imgEl) {
      imgEl.src = shot.src;
      imgEl.alt = isEn ? shot.altEn : shot.altKo;
    }
  }

  function openShotDialog(index, triggerEl) {
    selectShot(index);
    syncDialogContent(index);
    var dialog = document.getElementById('shot-dialog');
    if (!dialog || typeof dialog.showModal !== 'function') return;
    lastDialogTrigger = triggerEl || document.activeElement;
    dialog.showModal();
  }

  function setMenuOpen(open) {
    var nav = document.getElementById('primary-nav');
    var btn = document.getElementById('menu-toggle');
    if (!nav || !btn) return;
    nav.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    var dict = COPY[currentLang];
    btn.setAttribute('aria-label', open ? dict.menuCloseAria : dict.menuOpenAria);
  }

  function validateForm() {
    var form = document.getElementById('contact-form');
    if (!form) return true;

    var dict = COPY[currentLang];
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var msgInput = document.getElementById('message');
    var summary = document.getElementById('form-error-summary');

    var fields = [
      { input: nameInput, errId: 'name-error', check: function (v) { return v.trim() ? '' : dict.errName; } },
      {
        input: emailInput,
        errId: 'email-error',
        check: function (v) {
          var trimmed = v.trim();
          if (!trimmed) return dict.errEmailReq;
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return dict.errEmailInvalid;
          return '';
        }
      },
      { input: msgInput, errId: 'message-error', check: function (v) { return v.trim() ? '' : dict.errMessage; } }
    ];

    var firstInvalid = null;
    fields.forEach(function (f) {
      if (!f.input) return;
      var msg = f.check(f.input.value);
      var errEl = document.getElementById(f.errId);
      if (msg) {
        if (!firstInvalid) firstInvalid = f.input;
        f.input.setAttribute('aria-invalid', 'true');
        if (errEl) {
          errEl.textContent = msg;
          errEl.hidden = false;
        }
      } else {
        f.input.removeAttribute('aria-invalid');
        if (errEl) {
          errEl.textContent = '';
          errEl.hidden = true;
        }
      }
    });

    if (summary) {
      if (firstInvalid) {
        summary.textContent = dict.errSummary;
        summary.hidden = false;
      } else {
        summary.textContent = '';
        summary.hidden = true;
      }
    }

    return firstInvalid;
  }

  function refreshVisibleValidationErrors() {
    var summary = document.getElementById('form-error-summary');
    if (summary && !summary.hidden) {
      validateForm();
    }
  }

  function initRevealObserver() {
    var items = Array.prototype.slice.call(document.querySelectorAll('.reveal-item'));
    if (!items.length) return;

    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver !== 'function') {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    function revealVisibleOrPassed(observer) {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      var remaining = 0;
      items.forEach(function (el) {
        if (el.classList.contains('is-visible')) return;
        if (el.getBoundingClientRect().top <= vh * 1.05) {
          el.classList.add('is-visible');
          if (observer) observer.unobserve(el);
        } else {
          remaining += 1;
        }
      });
      return remaining;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        var triggered = false;
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
            triggered = true;
          }
        });
        if (triggered) revealVisibleOrPassed(observer);
      },
      { threshold: 0.04, rootMargin: '60px 0px' }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
    revealVisibleOrPassed(observer);

    function onScrollOrHash() {
      if (revealVisibleOrPassed(observer) === 0) {
        window.removeEventListener('scroll', onScrollOrHash);
        window.removeEventListener('hashchange', onScrollOrHash);
      }
    }

    window.addEventListener('scroll', onScrollOrHash, { passive: true });
    window.addEventListener('hashchange', onScrollOrHash);
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(readStorage(STORAGE_THEME, 'system'));
    applyLang(readStorage(STORAGE_LANG, 'ko'));
    initRevealObserver();

    var langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      langBtn.addEventListener('click', function () {
        applyLang(currentLang === 'ko' ? 'en' : 'ko');
      });
    }

    document.querySelectorAll('.theme-choice[data-theme-choice]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyTheme(btn.getAttribute('data-theme-choice'));
      });
    });

    var menuBtn = document.getElementById('menu-toggle');
    if (menuBtn) {
      menuBtn.addEventListener('click', function () {
        var expanded = menuBtn.getAttribute('aria-expanded') === 'true';
        setMenuOpen(!expanded);
      });
    }

    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        setMenuOpen(false);
      });
    });

    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') {
        var nav = document.getElementById('primary-nav');
        if (nav && nav.classList.contains('is-open')) {
          setMenuOpen(false);
          if (menuBtn) menuBtn.focus();
        }
      }
    });

    document.querySelectorAll('.showcase-tab[data-shot-index]').forEach(function (tab) {
      tab.addEventListener('click', function () {
        selectShot(tab.getAttribute('data-shot-index'));
      });
    });

    var heroShotBtn = document.getElementById('hero-shot-btn');
    if (heroShotBtn) {
      heroShotBtn.addEventListener('click', function () {
        openShotDialog(currentShot, heroShotBtn);
      });
    }

    document.querySelectorAll('.thumb-btn[data-shot-index]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        openShotDialog(btn.getAttribute('data-shot-index'), btn);
      });
    });

    var dialog = document.getElementById('shot-dialog');
    var dialogClose = document.getElementById('dialog-close');
    if (dialog && dialogClose) {
      dialogClose.addEventListener('click', function () {
        dialog.close();
      });
      dialog.addEventListener('close', function () {
        if (lastDialogTrigger && lastDialogTrigger.isConnected) {
          lastDialogTrigger.focus();
        }
        lastDialogTrigger = null;
      });
    }

    var copyBtn = document.getElementById('copy-email-btn');
    var emailAddr = document.getElementById('email-addr');
    var copyStatus = document.getElementById('copy-status');
    if (copyBtn && emailAddr) {
      copyBtn.addEventListener('click', function () {
        var text = emailAddr.textContent.trim();
        var dict = COPY[currentLang];
        if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
          navigator.clipboard.writeText(text).then(
            function () {
              if (copyStatus) copyStatus.textContent = dict.copySuccess;
            },
            function () {
              if (copyStatus) copyStatus.textContent = dict.copyFail;
            }
          );
        } else if (copyStatus) {
          copyStatus.textContent = dict.copyFail;
        }
      });
    }

    var form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', function (ev) {
        var firstInvalid = validateForm();
        if (firstInvalid) {
          ev.preventDefault();
          firstInvalid.focus();
        }
      });

      ['name', 'email', 'message'].forEach(function (id) {
        var input = document.getElementById(id);
        if (input) {
          input.addEventListener('input', function () {
            if (input.getAttribute('aria-invalid') === 'true') {
              validateForm();
            }
          });
        }
      });
    }
  });
})();
