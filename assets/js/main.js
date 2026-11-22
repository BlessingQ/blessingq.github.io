(function () {
  'use strict';

  var STORAGE_LANG = 'lang-preference';
  var STORAGE_THEME = 'theme-preference';

  function shot(src, w, h, ko, en) {
    return { src: src, w: w, h: h, titleKo: ko, titleEn: en };
  }

  var GALLERIES = {
    et: {
      nameKo: 'Embedded Toolkit',
      nameEn: 'Embedded Toolkit',
      shots: [
        shot('assets/images/et-1-firmware.webp', 720, 1280, '현장에서 바로 펌웨어 쓰기 (YModem · MegaBoot)', 'Flash firmware in the field (YModem · MegaBoot)'),
        shot('assets/images/et-2-stm32.webp', 720, 1280, 'STM32·STM8 쓰기·읽기 (ST-LINK · UART 부트로더)', 'Write and read STM32 · STM8 (ST-LINK · UART bootloader)'),
        shot('assets/images/et-3-modbus.webp', 720, 1280, 'Modbus RTU 읽기·쓰기·폴링', 'Modbus RTU read, write and polling'),
        shot('assets/images/et-4-nas.webp', 720, 1280, 'NAS(WebDAV)에서 펌웨어 받기', 'Download firmware from a NAS (WebDAV)'),
        shot('assets/images/et-5-avr.webp', 720, 1280, 'AVR JTAG 쓰기·퓨즈·백업', 'AVR JTAG write, fuses and backup'),
        shot('assets/images/et-6-terminal.webp', 720, 1280, '시리얼 터미널 텍스트·HEX 송수신', 'Serial terminal with text and hex'),
        shot('assets/images/et-7-dark.webp', 720, 1280, '다크 모드', 'Dark mode')
      ]
    },
    lp: {
      nameKo: '루페PDF',
      nameEn: 'LoupePDF',
      shots: [
        shot('assets/images/lp-1-home.webp', 720, 1280, '내 기기 안에서 끝나는 안전한 PDF 도구', 'A safe PDF toolkit that stays on your device'),
        shot('assets/images/lp-2-loupe-sign.webp', 720, 1280, '2.5배 돋보기로 정확한 서명', 'Precise signing with a 2.5x loupe'),
        shot('assets/images/lp-3-sign-pad.webp', 1280, 720, '문서를 비춰 보며 넓게 서명하는 가로 서명 패드', 'Landscape signing pad with the document showing through'),
        shot('assets/images/lp-4-stamp.webp', 720, 1280, '인장체부터 붓글씨까지 도장 만들기', 'Make seals and stamps in four typefaces'),
        shot('assets/images/lp-5-pages.webp', 720, 1280, '페이지 회전·삭제·분할', 'Rotate, delete and split pages'),
        shot('assets/images/lp-6-watermark.webp', 720, 1280, '제출처 워터마크로 사본 도용 방지', 'Recipient watermark to stop ID copy misuse'),
        shot('assets/images/lp-7-redact.webp', 720, 1280, '민감한 번호를 되살릴 수 없게 가리기', 'Redact sensitive numbers for good'),
        shot('assets/images/lp-8-encrypt.webp', 720, 1280, '중요한 PDF에 AES-256 암호 걸기', 'Lock important PDFs with AES-256')
      ]
    }
  };

  var HERO_GALLERY = 'et';

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
      etIconAlt: 'Embedded Toolkit 앱 아이콘',
      showcaseSub: '펌웨어 · 시리얼 도구',
      showcaseBadge: 'Google Play 출시',
      shotTab0: '펌웨어',
      shotTab1: 'STM32',
      shotTab2: 'Modbus',
      shotTab3: '터미널',
      heroShotBtnAria: 'Embedded Toolkit 스크린샷 크게 보기',
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
        'YModem·ST-LINK·AVR 펌웨어 쓰기와 Modbus RTU 도구 Google Play 출시',
        '100% 온디바이스 PDF 편집·전자서명·마스킹 모바일 앱 개발',
        '연차 계산·같이 쉬는 날 공유 앱 연차메이트 (출시 준비 중)',
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
      proj1Kicker: 'Google Play · 펌웨어·시리얼 도구',
      proj1Desc: '엔지니어와 현장 기술자를 위한 펌웨어·시리얼 도구입니다. 휴대폰(USB OTG)이나 Windows PC를 장치에 연결해 펌웨어를 쓰고, 읽고, 확인하는 일을 한 앱에서 처리합니다. FTDI·CP210x·CH34x·PL2303 USB-시리얼 어댑터, ST-LINK/V2·V2-1·STLINK-V3, Atmel-ICE·MPLAB Snap·PICkit 4를 지원합니다.',
      proj1Points: [
        ['펌웨어 쓰기', 'YModem(1K) IAP 업로드와 HEX→BIN 자동 변환, ATmega128 MegaBoot, 진행률·남은 시간·전송 속도 표시'],
        ['STM32 · STM8 · AVR', 'ST-LINK(SWD·SWIM)로 쓰기·검증·읽기·백업과 양산 모드, AVR JTAG·UPDI 쓰기와 퓨즈·락 비트'],
        ['Modbus RTU', 'FC 01~06·15·16 읽기·쓰기, 주기 폴링 결과 표, CRC·예외 코드 프레임 로그, 값 그래프'],
        ['시리얼 터미널', '텍스트·HEX 송수신, 반복 전송, DTR·RTS, 매크로, 수신 기록 파일'],
        ['작업 관리 · NAS', '작업 프로필 공유, 월별 CSV 작업 기록, HTTPS WebDAV로 펌웨어 받기와 백업 올리기']
      ],
      etGalleryAria: 'Embedded Toolkit 스크린샷',
      linkPlayStore: 'Google Play에서 보기',
      linkPrivacy: '개인정보처리방침',
      enlargePrefix: '크게 보기: ',

      proj2Kicker: 'Google Play · 모바일 PDF 앱',
      proj2Title: '루페PDF (LoupePDF)',
      proj2Desc: '모든 PDF·이미지 작업을 외부 서버 전송 없이 100% 기기 안에서 처리하는 올인원 문서·보안 도구입니다. 좁은 계약서 서명 칸도 2.5배 돋보기로 정확히 맞추고, 신분증 사본은 워터마크와 마스킹으로 안전하게 제출합니다. 오프라인(비행기 모드)에서도 작동합니다.',
      proj2Points: [
        ['2.5배 돋보기 정밀 서명', '손가락 위 돋보기와 십자선으로 위치를 잡고, 문서를 40% 비춰 보는 가로 전체화면 서명 패드에 사인'],
        ['도장 · 서명 생성기', '한국 인감·막도장, 일본 마루인, 중화권 인장, 영문 서명을 4종 서체로 만들고 종이 배경 제거'],
        ['병합 · 분할 · 페이지 편집', 'PDF와 사진 합치기, 범위 추출·회전·삭제·순서 변경, 페이지 번호 넣기'],
        ['워터마크 · 영구 마스킹', '제출처 대각선 워터마크, 주민번호·계좌번호 자동 찾기와 평탄화로 복원 불가능한 가리기'],
        ['암호 · 스캔 · 변환', 'AES-256 암호 설정·해제, 문서 스캔과 용량 압축, 이미지↔PDF 변환, 기기 안 글자 인식']
      ],
      lpGalleryAria: '루페PDF 스크린샷',

      proj6Kicker: 'Android · 출시 준비 중',
      proj6Title: '연차메이트 (DayOff Mate)',
      proj6Pill1: '남은 연차 · 소멸일',
      proj6Pill2: '연휴 추천',
      proj6Pill3: '같이 쉬는 날',
      proj6Desc: '입사일만 넣으면 남은 연차와 소멸일을 계산하는 앱입니다. 입사일·회계연도 기준을 모두 지원하고, 반차·반반차·시간 단위 휴가를 달력에 기록하며, 공휴일에 붙여 쉬는 연휴를 추천합니다. 로그인하면 커플·가족·팀 그룹과 쉬는 날을 함께 보고 모두 쉬는 날을 찾습니다.',
      proj6Tag1: '근로기준법 연차 계산',
      proj6Tag2: '위젯 · 알림',
      linkDayoffInfo: '앱 소개',

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
      dialogPrevAria: '이전 화면',
      dialogNextAria: '다음 화면',

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
      etIconAlt: 'Embedded Toolkit app icon',
      showcaseSub: 'Firmware & Serial Tool',
      showcaseBadge: 'On Google Play',
      shotTab0: 'Firmware',
      shotTab1: 'STM32',
      shotTab2: 'Modbus',
      shotTab3: 'Terminal',
      heroShotBtnAria: 'Enlarge Embedded Toolkit screenshot',
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
        'Published a YModem, ST-LINK & AVR firmware and Modbus RTU tool on Google Play',
        '100% on-device PDF signing, redaction & security mobile app',
        'DayOff Mate: annual leave calculator with shared days off (coming soon)',
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
      proj1Kicker: 'Google Play · Firmware & Serial Tool',
      proj1Desc: 'A firmware and serial tool for engineers and field technicians. Connect your phone (USB OTG) or Windows PC to a device to flash, read and check firmware in one app. Works with FTDI, CP210x, CH34x and PL2303 USB-serial adapters, ST-LINK/V2, V2-1 and STLINK-V3, and Atmel-ICE, MPLAB Snap and PICkit 4.',
      proj1Points: [
        ['Firmware flashing', 'YModem (1K) IAP upload with automatic HEX to BIN conversion, ATmega128 MegaBoot, progress, remaining time and transfer speed'],
        ['STM32 · STM8 · AVR', 'Write, verify, read and back up over ST-LINK (SWD, SWIM) with production mode; AVR JTAG and UPDI writing with fuses and lock bits'],
        ['Modbus RTU', 'Read and write with FC 01–06, 15 and 16, periodic polling table, frame log with CRC and exception decoding, value charts'],
        ['Serial terminal', 'Text and hex send/receive, repeat sending, DTR/RTS, macros and capture to a file'],
        ['Work management · NAS', 'Shared work profiles, monthly CSV work records, firmware download and backup upload over HTTPS WebDAV']
      ],
      etGalleryAria: 'Embedded Toolkit screenshots',
      linkPlayStore: 'View on Google Play',
      linkPrivacy: 'Privacy Policy',
      enlargePrefix: 'Enlarge: ',

      proj2Kicker: 'Google Play · Mobile PDF App',
      proj2Title: 'LoupePDF',
      proj2Desc: 'A 100% on-device PDF and image security toolkit. Every document you open, sign, merge, encrypt or watermark stays on your phone and is never uploaded to a server. A 2.5x loupe lands signatures on tight contract lines, and watermarks and redaction keep ID copies safe. Works offline.',
      proj2Points: [
        ['2.5x loupe signing', 'A loupe with crosshairs above your finger, then a full-screen landscape signing pad with the document showing through at 40%'],
        ['Stamp & seal generator', 'Korean, Japanese and Chinese seals and cursive signatures in 4 typefaces, plus paper background removal'],
        ['Merge, split & page editing', 'Combine PDFs and photos, extract ranges, rotate, delete, reorder and add page numbers'],
        ['Watermark & permanent redaction', 'Diagonal recipient watermarks, automatic detection of ID and account numbers, and flattening so hidden data cannot be recovered'],
        ['Encrypt, scan & convert', 'AES-256 lock and unlock, document scanning and compression, image ↔ PDF, on-device text recognition']
      ],
      lpGalleryAria: 'LoupePDF screenshots',

      proj6Kicker: 'Android · Coming soon',
      proj6Title: 'DayOff Mate (연차메이트)',
      proj6Pill1: 'Leave left · Expiry',
      proj6Pill2: 'Long weekends',
      proj6Pill3: 'Days off together',
      proj6Desc: 'Enter your hire date to see your remaining annual leave and when it expires. Supports hire-date and fiscal-year bases, records half, quarter and hourly leave on a calendar, and suggests long weekends around public holidays. Sign in to share days off with your partner, family or team and find days when everyone is off.',
      proj6Tag1: 'Korean labor law leave calc',
      proj6Tag2: 'Widgets · Reminders',
      linkDayoffInfo: 'About the app',

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
      dialogPrevAria: 'Previous screen',
      dialogNextAria: 'Next screen',

      thankTitle: 'Thank You!',
      thankSubtitle: 'Your message has been sent successfully. I will review it and get back to you soon.',
      thankMeta: 'Sent to: ejok9194@gmail.com',
      thankBack: 'Back to Portfolio'
    }
  };

  var currentLang = 'ko';
  var currentTheme = 'system';
  var currentShot = 0;
  var dialogGallery = HERO_GALLERY;
  var dialogIndex = 0;
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
      items.forEach(function (item) {
        var li = document.createElement('li');
        if (Array.isArray(item)) {
          var strong = document.createElement('strong');
          strong.textContent = item[0];
          li.appendChild(strong);
          li.appendChild(document.createTextNode(item[1]));
        } else {
          li.textContent = item;
        }
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

    document.querySelectorAll('.thumb-btn[data-gallery]').forEach(function (btn) {
      var s = getShot(btn.getAttribute('data-gallery'), btn.getAttribute('data-shot-index'));
      if (s) btn.setAttribute('aria-label', dict.enlargePrefix + shotTitle(s));
    });

    selectShot(currentShot);
    var dialog = document.getElementById('shot-dialog');
    if (dialog && dialog.open) syncDialogContent();
    refreshVisibleValidationErrors();
  }

  function clampIndex(galleryKey, index) {
    var shots = GALLERIES[galleryKey].shots;
    return Math.max(0, Math.min(shots.length - 1, Number(index) || 0));
  }

  function getShot(galleryKey, index) {
    var gallery = GALLERIES[galleryKey];
    if (!gallery) return null;
    return gallery.shots[clampIndex(galleryKey, index)];
  }

  function shotTitle(shot) {
    return currentLang === 'en' ? shot.titleEn : shot.titleKo;
  }

  function selectShot(index) {
    var safeIdx = clampIndex(HERO_GALLERY, index);
    currentShot = safeIdx;
    var shot = getShot(HERO_GALLERY, safeIdx);

    var heroImg = document.getElementById('hero-shot-img');
    if (heroImg) {
      heroImg.src = shot.src;
      heroImg.alt = GALLERIES[HERO_GALLERY].nameEn + ' — ' + shotTitle(shot);
    }

    document.querySelectorAll('.showcase-tab[data-shot-index]').forEach(function (tab) {
      var active = Number(tab.getAttribute('data-shot-index')) === safeIdx;
      tab.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function syncDialogContent() {
    var gallery = GALLERIES[dialogGallery];
    var shot = getShot(dialogGallery, dialogIndex);
    var isEn = currentLang === 'en';
    var appName = isEn ? gallery.nameEn : gallery.nameKo;
    var dialog = document.getElementById('shot-dialog');
    var titleEl = document.getElementById('dialog-title');
    var imgEl = document.getElementById('dialog-img');
    var countEl = document.getElementById('dialog-count');
    if (dialog) dialog.classList.toggle('is-landscape', shot.w > shot.h);
    if (titleEl) titleEl.textContent = appName + ' — ' + shotTitle(shot);
    if (imgEl) {
      imgEl.width = shot.w;
      imgEl.height = shot.h;
      imgEl.src = shot.src;
      imgEl.alt = appName + ' — ' + shotTitle(shot);
    }
    if (countEl) countEl.textContent = (dialogIndex + 1) + ' / ' + gallery.shots.length;
  }

  function stepDialog(delta) {
    var count = GALLERIES[dialogGallery].shots.length;
    dialogIndex = (dialogIndex + delta + count) % count;
    syncDialogContent();
  }

  function openShotDialog(galleryKey, index, triggerEl) {
    if (!GALLERIES[galleryKey]) return;
    dialogGallery = galleryKey;
    dialogIndex = clampIndex(galleryKey, index);
    syncDialogContent();
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
        openShotDialog(HERO_GALLERY, currentShot, heroShotBtn);
      });
    }

    document.querySelectorAll('.thumb-btn[data-gallery]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        openShotDialog(btn.getAttribute('data-gallery'), btn.getAttribute('data-shot-index'), btn);
      });
    });

    var dialog = document.getElementById('shot-dialog');
    var dialogClose = document.getElementById('dialog-close');
    if (dialog && dialogClose) {
      dialogClose.addEventListener('click', function () {
        dialog.close();
      });
      var prevBtn = document.getElementById('dialog-prev');
      var nextBtn = document.getElementById('dialog-next');
      if (prevBtn) prevBtn.addEventListener('click', function () { stepDialog(-1); });
      if (nextBtn) nextBtn.addEventListener('click', function () { stepDialog(1); });
      dialog.addEventListener('keydown', function (ev) {
        if (ev.key === 'ArrowLeft') {
          ev.preventDefault();
          stepDialog(-1);
        } else if (ev.key === 'ArrowRight') {
          ev.preventDefault();
          stepDialog(1);
        }
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
