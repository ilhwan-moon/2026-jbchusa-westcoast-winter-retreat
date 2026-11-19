(function () {
  'use strict';
  var R = window.RETREAT;
  var LANGS = ['ko', 'en', 'es', 'zh'];
  var APP_NAME = '2026 Winter Retreat';   // 홈 화면 바로가기 이름 (모든 언어 같음)

  var T = {
    ko: {
      counselBtnShort: '상담 신청하기', counselSub: '전도·생활 상담', videoBtn: '홍보 영상 보기', videoSub: '바로 재생', videoTitle: '2026 동계수련회 홍보 영상', videoOpen: '유튜브 앱에서 보기',
      noticeClose: '닫기', noticeLabel: '공지', soonIn: '{n}분 후 시작', sermonsAt: '전체 말씀 · 대강당', nextSermon: '다음 말씀', viewDay: '날짜별 보기', viewTable: '전체 일정표', tableNote: '시간은 오후·오전 표시 없이 줄였습니다. 칸을 누르면 그날 자세한 일정으로 갑니다.',
      sub: '미주서부 · 11/27~29', ok: '알겠어요', sizeHint: '글씨가 작으면 오른쪽 위 「가 가 가」에서 큰 글씨를 누르세요',
      textSize: '글씨 크기', textSizeN: ['보통 글씨', '큰 글씨', '아주 큰 글씨'], themeN: { auto: '화면: 자동', light: '화면: 밝게', dark: '화면: 어둡게' },
      nav: { schedule: '일정', word: '말씀·장소', info: '생활 안내', contact: '연락처' },
      now: '지금', next: '다음 순서', nowDone: '오늘 일정이 모두 끝났습니다. 편히 쉬세요.', today: '오늘',
      countBefore: '수련회까지 {n}일 남았습니다', countTomorrow: '내일 수련회가 시작됩니다!', countToday: '오늘 수련회가 시작됩니다!', during: '수련회 {n}일째입니다', after: '은혜로운 수련회였습니다. 감사합니다!',
      sermonN: '전체 말씀 {n}', speaker: '강사', praise: '특별찬양', song: '특송', place: '장소',
      seeSeminar: '같은 시간 언어별 성경 강연회 장소', seeCleanup: '후발대 청소 구역 보기', myLang: '내 언어', seeAll: '다른 언어 장소',
      mainSermons: '전체 말씀 (신앙생활 말씀)', places: '말씀 장소 안내', seminar: '성경 강연회 (언어별)', seminarLead: '언어별로 아래 장소에서 따로 진행됩니다.', seminarTimes: '강연회 시간', seminarN: '{n}강',
      langFellow: '언어권별 전체 교제 · 11/28(토) 오후 2:30~4:30', counsel: '전도 · 생활 상담', counselBtn: '상담 신청하기 (QR코드)',
      lodging: '숙소 안내', rules: '수양관에서 이것만은 꼭! 지켜주세요', supplies: '준비물 체크', suppliesLead: '챙긴 것을 누르면 체크됩니다. 이 휴대폰에 기억돼요.',
      cleanup: '3일째 후발대 청소 구역', cleanupLead: '11/29(일) 점심식사 후 다같이 정리하고 귀가합니다.',
      emergency: '응급 의료 연락', depts: '부서 책임자', venue: '오시는 길', openMap: '지도에서 보기', callTap: '누르면 전화가 걸립니다',
      installTitle: '휴대폰 홈 화면에 추가', installSub: '앱처럼 한 번에 열 수 있어요', installed: '홈 화면에 추가되었습니다',
      share: '공유하기', qr: 'QR 코드', qrTitle: '휴대폰 카메라로 찍으면 수련회 안내가 열립니다', close: '닫기', copied: '링크를 복사했습니다', updatedReload: '새 내용으로 바뀌었습니다',
      iosTitle: '🍎 아이폰: 홈 화면에 추가하기', iosSteps: ['사파리 아래 <b>주소창 왼쪽 아이콘</b> {menu} 을 누르세요', '메뉴에서 <b>「공유」</b>를 누르세요', '목록을 위로 올려 <b>「홈 화면에 추가」</b>를 누르세요', '오른쪽 위 <b>「추가」</b>를 누르면 끝!'],
      andTitle: '🤖 안드로이드: 홈 화면에 추가하기', andSteps: ['크롬 오른쪽 위 <b>⋮ (점 3개)</b> 를 누르세요', '<b>「홈 화면에 추가」</b> 또는 <b>「앱 설치」</b>를 누르세요', '<b>「설치」</b>(또는 「추가」)를 누르면 끝!'],
      inappTitle: '먼저 사파리/크롬으로 열어 주세요', inappSteps: ['오른쪽 위(또는 아래) <b>메뉴</b>를 누르세요', '<b>「다른 브라우저로 열기」</b> 또는 <b>「Safari로 열기」</b>를 누르세요', '열린 화면에서 이 버튼을 다시 누르세요'],
    },
    en: {
      counselBtnShort: 'Counseling sign-up', counselSub: 'Same as QR code', videoBtn: 'Watch the promo video', videoSub: 'Plays here', videoTitle: '2026 Winter Retreat promo video', videoOpen: 'Open in YouTube',
      noticeClose: 'Close', noticeLabel: 'Notice', soonIn: 'Starts in {n} min', sermonsAt: 'Main Sermons · Main Hall', nextSermon: 'Next', viewDay: 'By day', viewTable: 'Full table', tableNote: 'Times are shortened (no AM/PM). Tap a cell to see that day in detail.',
      sub: 'West Coast · Nov 27–29', ok: 'Got it', sizeHint: 'Text too small? Tap a bigger “A” at the top right.',
      textSize: 'Text size', textSizeN: ['Normal text', 'Large text', 'Extra large'], themeN: { auto: 'Theme: Auto', light: 'Theme: Light', dark: 'Theme: Dark' },
      nav: { schedule: 'Schedule', word: 'Sermons', info: 'Guide', contact: 'Contacts' },
      now: 'Now', next: 'Next', nowDone: "Today's program is over. Have a good rest.", today: 'Today',
      countBefore: '{n} days until the retreat', countTomorrow: 'The retreat starts tomorrow!', countToday: 'The retreat starts today!', during: 'Retreat day {n}', after: 'Thank you for a blessed retreat!',
      sermonN: 'Main Sermon {n}', speaker: 'Speaker', praise: 'Special praise', song: 'Song', place: 'Place',
      seeSeminar: 'Bible Seminar rooms at the same time', seeCleanup: 'See clean-up areas', myLang: 'My language', seeAll: 'Other languages',
      mainSermons: 'Main Sermons (Christian Life)', places: 'Sermon Locations', seminar: 'Bible Seminars (by language)', seminarLead: 'Each language meets in its own room:', seminarTimes: 'Seminar times', seminarN: 'Session {n}',
      langFellow: 'Fellowship by Language · Sat 11/28, 2:30–4:30 PM', counsel: 'Counseling', counselBtn: 'Sign up for counseling (QR)',
      lodging: 'Accommodation', rules: 'Please Keep the Following', supplies: 'What to Bring', suppliesLead: 'Tap each item you have packed. It is saved on this phone.',
      cleanup: 'Day 3 Clean-up Areas', cleanupLead: 'After lunch on Sun 11/29, everyone cleans up together before leaving.',
      emergency: 'Medical help', depts: 'Departments', venue: 'Location', openMap: 'Open in Maps', callTap: 'Tap to call',
      installTitle: 'Add to Home Screen', installSub: 'Open it like an app, in one tap', installed: 'Added to Home Screen',
      share: 'Share', qr: 'QR code', qrTitle: 'Scan with your phone camera to open', close: 'Close', copied: 'Link copied', updatedReload: 'Updated to the latest version',
      iosTitle: '🍎 iPhone: Add to Home Screen', iosSteps: ['Tap the <b>icon on the left of the address bar</b> {menu} at the bottom of Safari', 'Tap <b>“Share”</b> in the menu', 'Scroll up and tap <b>“Add to Home Screen”</b>', 'Tap <b>“Add”</b> at the top right. Done!'],
      andTitle: '🤖 Android: Add to Home Screen', andSteps: ['Tap <b>⋮ (3 dots)</b> at the top right of Chrome', 'Tap <b>“Add to Home screen”</b> or <b>“Install app”</b>', 'Tap <b>“Install”</b> (or “Add”). Done!'],
      inappTitle: 'Please open in Safari/Chrome first', inappSteps: ['Tap the <b>menu</b> at the top (or bottom) right', 'Tap <b>“Open in browser”</b> or <b>“Open in Safari”</b>', 'Then tap this button again'],
    },
    es: {
      counselBtnShort: 'Consejería', counselSub: 'Inscribirse (QR)', videoBtn: 'Ver video promocional', videoSub: 'Ver aquí', videoTitle: 'Video promocional del retiro 2026', videoOpen: 'Abrir en YouTube',
      noticeClose: 'Cerrar', noticeLabel: 'Aviso', soonIn: 'Empieza en {n} min', sermonsAt: 'Sermones · Salón Principal', nextSermon: 'Próximo', viewDay: 'Por día', viewTable: 'Tabla completa', tableNote: 'Horas abreviadas (sin a. m./p. m.). Toque una celda para ver el día en detalle.',
      sub: 'Costa Oeste · 27–29 nov', ok: 'Entendido', sizeHint: '¿Letra pequeña? Toque una “A” más grande arriba a la derecha.',
      textSize: 'Tamaño de letra', textSizeN: ['Letra normal', 'Letra grande', 'Letra muy grande'], themeN: { auto: 'Tema: automático', light: 'Tema: claro', dark: 'Tema: oscuro' },
      nav: { schedule: 'Horario', word: 'Sermones', info: 'Guía', contact: 'Contactos' },
      now: 'Ahora', next: 'Siguiente', nowDone: 'El programa de hoy terminó. Que descanse.', today: 'Hoy',
      countBefore: 'Faltan {n} días para el retiro', countTomorrow: '¡El retiro empieza mañana!', countToday: '¡El retiro empieza hoy!', during: 'Día {n} del retiro', after: '¡Gracias por un retiro de bendición!',
      sermonN: 'Sermón {n}', speaker: 'Predicador', praise: 'Alabanza especial', song: 'Canto', place: 'Lugar',
      seeSeminar: 'Seminarios bíblicos a la misma hora', seeCleanup: 'Ver zonas de limpieza', myLang: 'Mi idioma', seeAll: 'Otros idiomas',
      mainSermons: 'Sermones principales (vida cristiana)', places: 'Ubicación de los sermones', seminar: 'Seminarios bíblicos (por idioma)', seminarLead: 'Cada idioma se reúne en su propia sala:', seminarTimes: 'Horario de seminarios', seminarN: 'Sesión {n}',
      langFellow: 'Reunión por idioma · Sáb 28/11, 2:30–4:30 p. m.', counsel: 'Consejería', counselBtn: 'Inscribirse en consejería (QR)',
      lodging: 'Alojamiento', rules: 'Mantenga lo siguiente', supplies: 'Qué traer', suppliesLead: 'Toque cada cosa que ya preparó. Se guarda en este teléfono.',
      cleanup: 'Limpieza del día 3', cleanupLead: 'Después del almuerzo del domingo 29/11, todos limpian juntos antes de irse.',
      emergency: 'Ayuda médica', depts: 'Departamentos', venue: 'Cómo llegar', openMap: 'Abrir en el mapa', callTap: 'Toque para llamar',
      installTitle: 'Agregar a la pantalla de inicio', installSub: 'Ábralo como una app, con un toque', installed: 'Agregado a la pantalla de inicio',
      share: 'Compartir', qr: 'Código QR', qrTitle: 'Escanee con la cámara del teléfono', close: 'Cerrar', copied: 'Enlace copiado', updatedReload: 'Actualizado a la última versión',
      iosTitle: '🍎 iPhone: Agregar a inicio', iosSteps: ['Toque el <b>ícono a la izquierda de la barra de dirección</b> {menu} abajo en Safari', 'Toque <b>«Compartir»</b> en el menú', 'Deslice y toque <b>«Agregar a inicio»</b>', 'Toque <b>«Agregar»</b> arriba a la derecha. ¡Listo!'],
      andTitle: '🤖 Android: Agregar a inicio', andSteps: ['Toque <b>⋮ (3 puntos)</b> arriba a la derecha en Chrome', 'Toque <b>«Agregar a la pantalla principal»</b> o <b>«Instalar app»</b>', 'Toque <b>«Instalar»</b> (o «Agregar»). ¡Listo!'],
      inappTitle: 'Primero ábralo en Safari/Chrome', inappSteps: ['Toque el <b>menú</b> arriba (o abajo) a la derecha', 'Toque <b>«Abrir en el navegador»</b> o <b>«Abrir en Safari»</b>', 'Luego toque este botón otra vez'],
    },
    zh: {
      counselBtnShort: '报名商谈', counselSub: '同二维码', videoBtn: '观看宣传视频', videoSub: '点击播放', videoTitle: '2026 冬季培灵会宣传视频', videoOpen: '在 YouTube 中打开',
      noticeClose: '关闭', noticeLabel: '公告', soonIn: '{n}分钟后开始', sermonsAt: '全体话语 · 大礼堂', nextSermon: '下一场', viewDay: '按日期', viewTable: '总日程表', tableNote: '时间已简写（不标上午/下午）。点一下即可查看当天详细日程。',
      sub: '西海岸 · 11/27–29', ok: '知道了', sizeHint: '字太小？请点右上角较大的「A」。',
      textSize: '字体大小', textSizeN: ['标准字体', '大字体', '特大字体'], themeN: { auto: '画面：自动', light: '画面：明亮', dark: '画面：深色' },
      nav: { schedule: '日程', word: '话语·地点', info: '生活须知', contact: '联系' },
      now: '现在', next: '下一项', nowDone: '今天的日程已全部结束，请好好休息。', today: '今天',
      countBefore: '距离培灵会还有 {n} 天', countTomorrow: '培灵会明天开始！', countToday: '培灵会今天开始！', during: '培灵会第 {n} 天', after: '感谢大家，培灵会蒙恩结束！',
      sermonN: '话语 {n}', speaker: '讲员', praise: '特别赞美', song: '诗歌', place: '地点',
      seeSeminar: '同一时间各语言圣经研讨会地点', seeCleanup: '查看清洁区域', myLang: '我的语言', seeAll: '其他语言',
      mainSermons: '基督徒生活话语（全体）', places: '信息与聚会地点', seminar: '圣经研讨会（按语言）', seminarLead: '各语言在以下地点分别进行：', seminarTimes: '研讨会时间', seminarN: '讲道 {n}',
      langFellow: '按语别分组交通 · 11/28(周六) 下午 2:30–4:30', counsel: '商谈', counselBtn: '报名商谈（二维码）',
      lodging: '寝室', rules: '请在培灵会期间遵守以下事项', supplies: '准备物品', suppliesLead: '点一下已准备好的物品即可打勾，会保存在这部手机上。',
      cleanup: '第三天清洁区域', cleanupLead: '11/29(周日)午餐后，大家一起整理后离开。',
      emergency: '医疗紧急联系', depts: '部门', venue: '地址', openMap: '在地图中打开', callTap: '点一下即可拨打',
      installTitle: '添加到手机主屏幕', installSub: '像应用一样一点即开', installed: '已添加到主屏幕',
      share: '分享', qr: '二维码', qrTitle: '用手机相机扫描即可打开', close: '关闭', copied: '链接已复制', updatedReload: '已更新为最新内容',
      iosTitle: '🍎 iPhone：添加到主屏幕', iosSteps: ['点 Safari 下方<b>地址栏左侧的图标</b> {menu}', '在菜单中点<b>「分享」</b>', '向上滑动，点<b>「添加到主屏幕」</b>', '点右上角<b>「添加」</b>即可！'],
      andTitle: '🤖 安卓：添加到主屏幕', andSteps: ['点 Chrome 右上角 <b>⋮（三个点）</b>', '点<b>「添加到主屏幕」</b>或<b>「安装应用」</b>', '点<b>「安装」</b>（或「添加」）即可！'],
      inappTitle: '请先用 Safari/Chrome 打开', inappSteps: ['点右上角（或下方）的<b>菜单</b>', '点<b>「用浏览器打开」</b>或<b>「在 Safari 中打开」</b>', '然后再点一次这个按钮'],
    },
  };

  var ICONS = {
    calendar: '<svg viewBox="0 0 24 24"><rect x="3" y="4.5" width="18" height="16.5" rx="2.5"/><path d="M16 2.5v4M8 2.5v4M3 10h18"/></svg>',
    bible: '<svg viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 21H20v-3"/><path d="M12 7v6M9.5 9.5h5"/></svg>',
    info: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.01"/></svg>',
    phone: '<svg viewBox="0 0 24 24"><path d="M5 3.5h3.5l2 5-2.5 1.5a11 11 0 0 0 6 6l1.5-2.5 5 2V19a2 2 0 0 1-2 2A16.5 16.5 0 0 1 3 5.5a2 2 0 0 1 2-2z"/></svg>',
    pin: '<svg viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    book: '<svg viewBox="0 0 24 24"><path d="M2 5.5c3-1.5 7-1.5 10 1 3-2.5 7-2.5 10-1V19c-3-1.5-7-1.5-10 1-3-2.5-7-2.5-10-1z"/><path d="M12 6.5V20"/></svg>',
    people: '<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.5a5 5 0 0 1 5.5 5"/></svg>',
    chat: '<svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/></svg>',
    heart: '<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-9.5-9.3C1 8 3.3 4.5 6.9 4.5c2 0 3.6 1.1 5.1 3 1.5-1.9 3.1-3 5.1-3 3.6 0 5.9 3.5 4.4 7.2C19.5 16.4 12 21 12 21z"/></svg>',
    bed: '<svg viewBox="0 0 24 24"><path d="M3 19V6M3 15h18v4M21 15v-3a3 3 0 0 0-3-3h-7v6"/><circle cx="7" cy="11" r="2"/></svg>',
    bell: '<svg viewBox="0 0 24 24"><path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/></svg>',
    child: '<svg viewBox="0 0 24 24"><circle cx="12" cy="5.5" r="2.5"/><path d="M12 8.5v6M7 11l5-1.5 5 1.5M9 21l3-6.5 3 6.5"/></svg>',
    check: '<svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M8 12l3 3 5-6"/></svg>',
    ticket: '<svg viewBox="0 0 24 24"><path d="M3 8a2 2 0 0 0 0 4v4h18v-4a2 2 0 0 1 0-4V4H3z" transform="translate(0 2)"/><path d="M14 6v12" stroke-dasharray="2 2"/></svg>',
    broom: '<svg viewBox="0 0 24 24"><path d="M14 3l-3.5 8M6 12h9l2 9H4z"/><path d="M8 16v5M12 16v5"/></svg>',
    medical: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 7.5v9M7.5 12h9"/></svg>',
    map: '<svg viewBox="0 0 24 24"><path d="M9 4L3 6.5v13.5l6-2.5 6 2.5 6-2.5V4l-6 2.5z"/><path d="M9 4v13.5M15 6.5V20"/></svg>',
    ext: '<svg viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-9 9M18 14v4.5A1.5 1.5 0 0 1 16.5 20h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10"/></svg>',
    share: '<svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>',
    qr: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 20h4v-3"/></svg>',
    phoneDl: '<svg viewBox="0 0 24 24"><rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M12 8v6M9 11l3 3 3-3M10.5 18.5h3"/></svg>',
    play: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.5"/><path d="M10 8.5v7l6-3.5z" fill="currentColor"/></svg>',
    pageMenu: '<svg viewBox="0 0 24 24"><rect x="3" y="4.5" width="6.5" height="6.5" rx="1.2"/><path d="M13 6h8M13 9.5h8M3 14.5h18M3 19h12"/></svg>',
    sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8L6 18M18 6l1.8-1.8"/></svg>',
    moon: '<svg viewBox="0 0 24 24"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>',
    auto: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/></svg>',
    meal: '<svg viewBox="0 0 24 24"><path d="M7 3v8a2 2 0 0 0 2 2v8M5 3v5M9 3v5M17 21V3c-2 1.5-3 4-3 7v4h3"/></svg>',
    music: '<svg viewBox="0 0 24 24"><path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/></svg>',
    moonS: '<svg viewBox="0 0 24 24"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>',
    drop: '<svg viewBox="0 0 24 24"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/></svg>',
    cup: '<svg viewBox="0 0 24 24"><path d="M6 3h12l-1.5 8a4.5 4.5 0 0 1-9 0zM12 15.5V21M8 21h8"/></svg>',
    car: '<svg viewBox="0 0 24 24"><path d="M4 16V11l2-5h12l2 5v5zM4 16v3M20 16v3M4 11h16"/><circle cx="7.5" cy="13.5" r=".8"/><circle cx="16.5" cy="13.5" r=".8"/></svg>',
    clip: '<svg viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 10h6M9 14h6"/></svg>',
    rest: '<svg viewBox="0 0 24 24"><path d="M4 11h13a3 3 0 0 1 0 6h-1M4 11v4a6 6 0 0 0 6 6h0a6 6 0 0 0 6-6v-4"/><path d="M8 3v3M12 3v3"/></svg>',
  };
  var KIND_ICON = { meal: 'meal', sermon: 'bible', fellow: 'people', praise: 'music', rest: 'rest', sleep: 'moonS', wash: 'drop', reg: 'clip', supper: 'cup', leave: 'car' };
  var VIEWS = [['schedule', 'calendar'], ['word', 'bible'], ['info', 'info'], ['contact', 'phone']];

  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  var $ = function (id) { return document.getElementById(id); };
  var params = new URLSearchParams(location.search);

  /* ── 언어: ① 주소의 lang → ② 전에 고른 언어 → ③ 휴대폰 언어 ── */
  function saveLang(l) { store('rt_lang', l); try { document.cookie = 'rt_lang=' + l + '; max-age=31536000; path=/; SameSite=Lax'; } catch (e) {} }
  function savedLang() {
    var s = store('rt_lang'); if (LANGS.indexOf(s) !== -1) return s;
    var m = (document.cookie || '').match(/(?:^|;\s*)rt_lang=(ko|en|es|zh)/); return m ? m[1] : null;
  }
  function launchedFromHome() { return params.get('source') === 'home' || isStandalone(); }
  function isStandalone() { return (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true; }
  function pickLang() {
    var p = params.get('lang');
    if (LANGS.indexOf(p) !== -1) {
      var sv = launchedFromHome() ? savedLang() : null;   // 홈 화면 앱: 앱 안에서 고른 언어 우선
      if (sv) return sv;
      saveLang(p); return p;
    }
    var s = savedLang(); if (s) { saveLang(s); return s; }
    var n = (navigator.language || 'ko').slice(0, 2).toLowerCase();
    return LANGS.indexOf(n) !== -1 ? n : 'ko';
  }

  var state = { lang: pickLang(), size: Number(store('rt_size') || 1), view: 'schedule', day: null, dayPicked: false, sig: '', lastDate: '', mode: 'day' };
  if ([1, 2, 3].indexOf(state.size) === -1) state.size = 1;

  function t(k) { var v = T[state.lang][k]; return v == null ? T.ko[k] : v; }
  function x(o) { return o == null ? '' : typeof o === 'string' ? o : (o[state.lang] != null ? o[state.lang] : o.ko); }
  function fmt(s, o) { return String(s).replace(/\{(\w+)\}/g, function (_, k) { return o[k] == null ? '' : o[k]; }); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  // 줄바꿈 정리: 「 · 」로 나뉜 덩어리와 (괄호)는 한 덩어리로 묶어, 줄이 넘치면 덩어리째 다음 줄로 내려갑니다
  // 짧은 덩어리(예: 「2박 3일」)만 묶습니다. 긴 문장을 통째로 묶으면 앞의 표시(✱, 「한국어권:」) 옆에 못 붙고 아래로 떨어지기 때문
  function short(p) { return p.replace(/<[^>]*>|&[a-z#0-9]+;/g, 'x').length <= 16; }
  function nb(h) {
    var parts = String(h).split(' · ');
    return parts.map(function (p, i) {
      p = p.replace(/((?:오전|오후|上午|下午|晚上|早上)?\s?\d{1,2}:\d\d\s?(?:AM|PM|a\. m\.|p\. m\.)?\s?[~–-]\s?(?:오전|오후|上午|下午|晚上|早上)?\s?\d{1,2}:\d\d(?:\s?(?:AM|PM|a\. m\.|p\. m\.))?)/g, '<span class="nw">$1</span>');   // 시간 범위
      p = p.replace(/([^\s(>]+\([^)\s]{1,3}\))/g, '<span class="nw">$1</span>');   // 29일(일)
      p = p.replace(/ (\([^)]*\))/g, function (m, g) { return short(g) ? ' <span class="nw">' + g + '</span>' : m; });
      var sep = i < parts.length - 1 ? ' ·' : '';   // 「·」는 앞 덩어리 끝에 붙여 줄 맨 앞에 오지 않게
      if (parts.length > 1 && short(p)) return '<span class="nw">' + p + sep + '</span>';
      if (sep && /<\/span>$/.test(p)) return p.replace(/<\/span>$/, sep + '</span>');   // 「29일(일) ·」처럼 마지막 덩어리에 붙임
      if (sep) return p.replace(/(\S+)$/, '<span class="nw">$1' + sep + '</span>');
      return p;   // 한 문장짜리는 묶지 않음 (목록 점 위치 유지)
    }).join(' ');
  }
  function xb(o) { return nb(esc(x(o))); }
  function tm(s, e) { return '<span class="nw">' + esc(fmtTime(s, e)) + '</span>'; }
  function ico(n) { return '<span class="ico" aria-hidden="true">' + (ICONS[n] || '') + '</span>'; }
  function tel(s) { return 'tel:' + String(s).replace(/[^\d+]/g, ''); }

  /* ── LA 시간 (테스트: ?now=2026-11-28T10:15) ── */
  function nowLA() {
    var o = params.get('now');
    if (o && /^\d{4}-\d\d-\d\dT\d\d:\d\d$/.test(o)) return { date: o.slice(0, 10), min: Number(o.slice(11, 13)) * 60 + Number(o.slice(14, 16)) };
    var p = {};
    try {
      new Intl.DateTimeFormat('en-CA', { timeZone: R.tz, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })
        .formatToParts(new Date()).forEach(function (q) { p[q.type] = q.value; });
    } catch (e) { var d = new Date(); return { date: d.toISOString().slice(0, 10), min: d.getHours() * 60 + d.getMinutes() }; }
    return { date: p.year + '-' + p.month + '-' + p.day, min: Number(p.hour) % 24 * 60 + Number(p.minute) };
  }
  function toMin(s) { return s ? Number(s.slice(0, 2)) * 60 + Number(s.slice(3, 5)) : null; }
  function daysBetween(a, b) { return Math.round((Date.parse(b + 'T00:00:00Z') - Date.parse(a + 'T00:00:00Z')) / 86400000); }

  // 12시간제 표기: 한국어 「오후 6:50 ~ 8:40」, English 「6:50 – 8:40 PM」
  function hm(s) { var h = Number(s.slice(0, 2)), m = s.slice(3, 5); return { h12: (h % 12) || 12, m: m, pm: h >= 12 }; }
  function per(pm) { return { ko: pm ? '오후' : '오전', zh: pm ? '下午' : '上午', en: pm ? 'PM' : 'AM', es: pm ? 'p. m.' : 'a. m.' }[state.lang]; }
  function fmtTime(s, e) {
    var a = hm(s), b = e ? hm(e) : null, L = state.lang;
    var A = a.h12 + ':' + a.m, B = b ? b.h12 + ':' + b.m : '';
    if (L === 'ko' || L === 'zh') {
      return per(a.pm) + ' ' + A + (b ? ' ~ ' + (b.pm !== a.pm ? per(b.pm) + ' ' : '') + B : ' ~');
    }
    if (!b) return A + ' ' + per(a.pm) + ' –';
    return A + (b.pm !== a.pm ? ' ' + per(a.pm) : '') + ' – ' + B + ' ' + per(b.pm);
  }

  /* ── 화면 모드 ── */
  function themeMode() { var m = store('rt_theme') || ((document.cookie.match(/(?:^|;\s*)rt_theme=(light|dark|auto)/) || [])[1]); return m === 'dark' || m === 'auto' ? m : 'light'; }   // 처음에는 밝게
  function applyTheme(m) {
    if (m === 'auto') document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme', m);
    var dark = m === 'dark' || (m === 'auto' && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
    var meta = document.querySelector('meta[name="theme-color"]'); if (meta) meta.setAttribute('content', dark ? '#1c1716' : '#7a2e22');
    $('themeIco').innerHTML = ICONS[m === 'light' ? 'sun' : m === 'dark' ? 'moon' : 'auto'];
    $('themeLabel').textContent = T[state.lang].themeN[m];
    $('themeBtn').title = T[state.lang].themeN[m]; $('themeBtn').setAttribute('aria-label', T[state.lang].themeN[m]);
  }

  /* ── 공통 글자 ── */
  function renderStatic() {
    var L = state.lang;
    applyTheme(themeMode());
    document.documentElement.lang = L === 'zh' ? 'zh-Hans' : L;
    document.documentElement.setAttribute('data-size', String(state.size));
    document.title = x(R.title);
    var mf = document.querySelector('link[rel="manifest"]');
    var mfHref = L === 'ko' ? 'manifest.webmanifest' : 'manifest.' + L + '.webmanifest';
    if (mf && mf.getAttribute('href') !== mfHref) mf.setAttribute('href', mfHref);
    var at = document.querySelector('meta[name="apple-mobile-web-app-title"]'); if (at) at.setAttribute('content', APP_NAME);
    $('brandName').textContent = x(R.short) + ' 2026';
    $('brandSub').textContent = t('sub');
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.innerHTML = nb(esc(t(el.getAttribute('data-i18n')))); });
    document.querySelectorAll('[data-ico]').forEach(function (el) { el.innerHTML = ICONS[el.getAttribute('data-ico')] || ''; el.setAttribute('aria-hidden', 'true'); });
    document.querySelectorAll('#langSeg button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === L)); });
    $('sizeSeg').setAttribute('aria-label', T[L].textSize); $('sizeSeg').title = T[L].textSize;
    document.querySelectorAll('#sizeSeg button').forEach(function (bt) {
      var n = Number(bt.getAttribute('data-size'));
      bt.setAttribute('aria-pressed', String(n === state.size));
      bt.setAttribute('aria-label', T[L].textSizeN[n - 1]);
      bt.querySelector('.g').textContent = L === 'ko' ? '가' : L === 'zh' ? '字' : 'A';
    });
    $('sizeHintText').textContent = T[L].sizeHint;
    $('bottomnav').innerHTML = VIEWS.map(function (v) {
      return '<a href="#' + v[0] + '" data-view="' + v[0] + '"' + (state.view === v[0] ? ' aria-current="page"' : '') + '>' + ico(v[1]) + '<span>' + esc(T[L].nav[v[0]]) + '</span></a>';
    }).join('');
  }

  /* ── 일정 ── */
  function itemInfo(it) {
    if (it.k === 'sermon') { var s = R.sermons[it.n]; return { title: x(s.title), label: fmt(t('sermonN'), { n: it.n }), place: xb(R.places[0].where) }; }
    if (it.lang) { var mine = R.fellowship.filter(function (f) { return f.lang === state.lang; })[0]; return { title: x(it.t), place: mine ? xb(mine.where) : '' }; }
    return { title: x(it.t) };
  }
  function status() {
    var n = nowLA(), idx = -1;
    R.days.forEach(function (d, i) { if (d.date === n.date) idx = i; });
    if (n.date < R.start) return { phase: 'before', n: n, days: daysBetween(n.date, R.start) };
    if (n.date > R.end) return { phase: 'after', n: n };
    if (idx === -1) return { phase: 'before', n: n, days: 0 };
    var items = R.days[idx].items, cur = -1, nxt = -1;
    items.forEach(function (it, i) {
      var s = toMin(it.s), e = it.e ? toMin(it.e) : (items[i + 1] ? toMin(items[i + 1].s) : 24 * 60);
      if (n.min >= s && n.min < e) cur = i;
      if (nxt === -1 && s > n.min) nxt = i;
    });
    if (cur === -1 && nxt === -1 && items[items.length - 1] && !items[items.length - 1].e) cur = items.length - 1;
    return { phase: 'during', n: n, day: idx, cur: cur, next: nxt };
  }

  var SOON = 30;   // 말씀 시작 몇 분 전부터 「⏰ ○분 후 시작」을 보여 줄지
  // 다시 그려야 하는지 판단: 지금/다음이 바뀌거나, 말씀 30분 전부터는 1분마다
  function sigOf(st) {
    var soon = '';
    if (st.phase === 'during') R.days[st.day].items.forEach(function (it) { var l = toMin(it.s) - st.n.min; if (it.k === 'sermon' && l > 0 && l <= SOON) soon = l; });
    return st.phase + st.day + '/' + st.cur + '/' + st.next + '/' + soon;
  }
  function renderSchedule() {
    var st = status();
    // 날짜 탭: 직접 고르지 않았으면 항상 「오늘」을 따라감 (자정이 지나도 자동으로 다음 날)
    if (st.n.date !== state.lastDate) { state.lastDate = st.n.date; state.dayPicked = false; }   // 날짜가 바뀌면 (27→28→29일) 그날 일정으로 자동 이동
    if (!state.dayPicked) state.day = st.phase === 'during' ? st.day : st.phase === 'after' ? 2 : 0;
    state.sig = sigOf(st);
    // 수련회 기간에는 큰 그림을 줄여 「지금 / 다음」이 첫 화면에 보이게
    $('hero').classList.toggle('compact', st.phase === 'during');
    $('heroTitle').textContent = x(R.title);
    $('heroTheme').innerHTML = (state.lang === 'en' ? '' : xb(R.theme) + ' · ') + xb(R.themeRef);   // 영어는 위 필기체와 같은 말이라 생략
    $('heroDate').innerHTML = xb(R.dateText);
    $('heroPlace').innerHTML = ico('pin') + '<span>' + xb(R.venue.name) + '</span>';
    var c = $('heroCount'); c.hidden = false;
    if (st.phase === 'before') c.textContent = st.days > 1 ? fmt(t('countBefore'), { n: st.days }) : st.days === 1 ? t('countTomorrow') : t('countToday');
    else if (st.phase === 'during') c.textContent = st.day === 0 && st.cur === -1 && st.next === 0 ? t('countToday') : fmt(t('during'), { n: st.day + 1 });
    else c.textContent = t('after');

    // 지금 / 다음
    var nc = $('nowCard');
    if (st.phase === 'during') {
      var items = R.days[st.day].items, h = '';
      if (st.cur !== -1) {
        var a = items[st.cur], ai = itemInfo(a);
        h += '<div class="now-row now-cur"><span class="now-k"><span class="dot"></span>' + esc(t('now')) + '</span><span class="now-t">' + (ai.label ? '<small>' + esc(ai.label) + '</small>' : '') + esc(ai.title) + '</span><span class="now-time">' + tm(a.s, a.e) + (ai.place ? '<span class="now-place">' + ico('pin') + ai.place + '</span>' : '') + '</span></div>';
      }
      var b = st.next !== -1 ? items[st.next] : null, bDay = '';
      if (!b && R.days[st.day + 1]) { b = R.days[st.day + 1].items[0]; bDay = x(R.days[st.day + 1].tab) + ' '; }   // 오늘 끝났으면 내일 첫 일정
      if (b) {
        var bi = itemInfo(b), bl = !bDay ? toMin(b.s) - st.n.min : 9999;
        var soonHtml = bl > 0 && bl <= SOON ? '<span class="now-soon">⏰ ' + esc(fmt(t('soonIn'), { n: bl })) + '</span>' : '';
        h += '<div class="now-row"><span class="now-k">' + esc(t('next')) + '</span><span class="now-t">' + soonHtml + (bi.label ? '<small>' + esc(bi.label) + '</small>' : '') + esc(bi.title) + '</span><span class="now-time"><span class="nw">' + esc(bDay) + '</span>' + tm(b.s, b.e) + (bi.place ? '<span class="now-place">' + ico('pin') + bi.place + '</span>' : '') + '</span></div>';
      }
      if (!h) h = '<p class="now-done">' + esc(t('nowDone')) + '</p>';
      nc.innerHTML = h; nc.hidden = false;
    } else nc.hidden = true;

    $('dayTabs').innerHTML = R.days.map(function (d, i) {
      var isToday = st.phase === 'during' && st.day === i;
      return '<button type="button" role="tab" data-day="' + i + '" aria-selected="' + (state.day === i) + '">' + xb(d.tab) + (isToday ? '<small>' + esc(t('today')) + '</small>' : '') + '</button>';
    }).join('');
    var day = R.days[state.day];
    $('dayLabel').innerHTML = xb(day.label);
    $('sched').innerHTML = day.items.map(function (it, i) {
      var live = st.phase === 'during' && st.day === state.day && st.cur === i;
      var past = st.phase === 'after' || (st.phase === 'during' && st.day === state.day && (it.e ? toMin(it.e) <= st.n.min : false) && !live) || (st.phase === 'during' && state.day < st.day);
      var cls = 'k-' + it.k + (live ? ' live' : '') + (past ? ' past' : '');
      var body = '';
      if (it.k === 'sermon') {
        var s = R.sermons[it.n];
        body = '<span class="s-label">' + esc(fmt(t('sermonN'), { n: it.n })) + '</span>' +
          '<span class="s-title">' + xb(s.title) + '</span>' +
          '<span class="s-meta"><b>' + xb(s.speaker) + '</b></span>' +
          '<span class="s-meta"><span>' + esc(t('praise')) + ': ' + xb(s.praise) + '</span></span>' + (s.song ? '<span class="s-meta"><span>' + esc(t('song')) + ': ' + xb(s.song) + '</span></span>' : '') +
          '<span class="s-meta">' + ico('pin') + esc(t('place')) + ': ' + xb(R.places[0].where) + '</span>' +
          '<a class="s-link" href="#word-seminar">' + esc(t('seeSeminar')) + ' ›</a>';
      } else if (it.lang) {
        var mine = R.fellowship.filter(function (f) { return f.lang === state.lang; })[0];
        body = '<span class="i-title">' + xb(it.t) + '</span>' +
          (mine ? '<span class="s-meta mine">' + ico('pin') + '<span><b>' + xb(mine.name) + '</b>: ' + xb(mine.where) + '</span></span>' : '') +
          '<details class="others"><summary>' + esc(t('seeAll')) + '</summary><ul>' + R.fellowship.filter(function (f) { return f !== mine; }).map(function (f) {
            return '<li><b>' + xb(f.name) + '</b>: ' + xb(f.where) + '</li>';
          }).join('') + '</ul></details>';
      } else if (it.k === 'leave') {
        body = '<span class="i-title">' + xb(it.t) + '</span><a class="s-link" href="#info-cleanup">' + esc(t('seeCleanup')) + ' ›</a>';
      } else body = '<span class="i-title">' + xb(it.t) + '</span>';
      return '<li class="' + cls + '"><span class="i-time">' + tm(it.s, it.e) + '</span><span class="i-ico">' + ico(KIND_ICON[it.k]) + '</span><span class="i-body">' +
        (live ? '<span class="live-tag"><span class="dot"></span>' + esc(t('now')) + '</span>' : '') + body + '</span></li>';
    }).join('');
    $('youthNote').textContent = '※ ' + x(R.youthNote);

    // 전체 말씀 바로 보기: 날짜·시간·제목 (다음 말씀 표시, 누르면 그날 일정으로)
    var nextFound = false, nowKey = st.n.date + ' ' + String(Math.floor(st.n.min / 60)).padStart(2, '0') + ':' + String(st.n.min % 60).padStart(2, '0');
    $('sqList').innerHTML = R.days.map(function (d, di) {
      return d.items.map(function (it) {
        if (it.k !== 'sermon') return '';
        var s = R.sermons[it.n], endKey = d.date + ' ' + it.e, startKey = d.date + ' ' + it.s;
        var cls = '', tag = '';
        if (endKey <= nowKey) cls = 'past';
        else if (startKey <= nowKey) { cls = 'live'; tag = '<span class="sq-tag live-tag"><span class="dot"></span>' + esc(t('now')) + '</span>'; nextFound = true; }
        else if (!nextFound) {
          nextFound = true; cls = 'next'; tag = '<span class="sq-tag">' + esc(t('nextSermon')) + '</span>';
          var left = d.date === st.n.date ? toMin(it.s) - st.n.min : 9999;   // 30분 전부터 남은 시간 표시
          if (left > 0 && left <= SOON) { cls = 'next soon'; tag = '<span class="sq-tag soon-tag">⏰ ' + esc(fmt(t('soonIn'), { n: left })) + '</span>'; }
        }
        return '<li class="' + cls + '"><button type="button" data-goday="' + di + '"><span class="sq-when"><b class="nw">' + esc(x(d.tab)) + '</b> ' + tm(it.s, it.e) + '</span>' +
          '<span class="sq-what"><small>' + it.n + '</small><b>' + esc(x(s.title)) + '</b>' + tag + '</span><span class="sq-who">' + xb(s.speaker) + '</span></button></li>';
      }).join('');
    }).join('');

    // 전체 일정표 (포스터처럼 3칸)
    $('tgrid').innerHTML = R.days.map(function (d, di) {
      var today = st.phase === 'during' && st.day === di;
      return '<div class="tcol' + (today ? ' today' : '') + '"><button type="button" class="thead" data-goday="' + di + '">' + esc(x(d.tab)) + (today ? '<small>' + esc(t('today')) + '</small>' : '') + '</button>' +
        d.items.map(function (it, i) {
          var live = today && st.cur === i, info = itemInfo(it);
          var tt = (function (s, e) { function h(v) { var q = hm(v); return q.h12 + ':' + q.m; } return h(s) + '~' + (e ? h(e) : ''); })(it.s, it.e);
          return '<button type="button" class="tcell k-' + it.k + (live ? ' live' : '') + '" data-goday="' + di + '"><span class="tt">' + tt + '</span>' +
            (info.label ? '<span class="tl">' + esc(info.label) + '</span>' : '') + '<span class="tn">' + esc(info.title) + '</span></button>';
        }).join('') + '</div>';
    }).join('');
    $('dayMode').hidden = state.mode !== 'day'; $('tableMode').hidden = state.mode !== 'table';
    document.querySelectorAll('#viewSeg button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-mode') === state.mode)); });
  }

  /* ── 말씀·장소 ── */
  function renderWord() {
    $('sermonList').innerHTML = [1, 2, 3, 4].map(function (n) {
      var s = R.sermons[n], when = '';
      R.days.forEach(function (d) { d.items.forEach(function (it) { if (it.k === 'sermon' && it.n === n) when = x(d.tab) + ' · ' + fmtTime(it.s, it.e); }); });
      return '<li><span class="sn">' + n + '</span><div><b class="st">' + xb(s.title) + '</b><span class="sm">' + nb(esc(x(s.speaker) + ' · ' + when)) + '</span><span class="sm">' + esc(t('praise')) + ': ' + xb(s.praise) + '</span></div></li>';
    }).join('');
    $('sermonNotes').innerHTML = R.sermonNotes.map(function (s) { return '<li>' + xb(s) + '</li>'; }).join('');
    $('placeList').innerHTML = R.places.map(function (p) { return '<li><span class="pn">' + p.n + '</span><div><b>' + xb(p.where) + '</b><span>' + xb(p.what) + '</span></div></li>'; }).join('');
    $('buildingNote').innerHTML = '※ ' + xb(R.venue.buildings);
    $('seminarList').innerHTML = R.seminars.map(function (s) {
      var mine = s.lang === state.lang;
      return '<li' + (mine ? ' class="mine"' : '') + '><span class="rk">' + xb(s.name) + (mine ? ' <small>' + esc(t('myLang')) + '</small>' : '') + '</span><span class="rv"><b>' + xb(s.where) + '</b><span>' + xb(s.who) + '</span></span></li>';
    }).join('');
    $('seminarTimes').innerHTML = R.seminarTimes.map(function (s) {
      return '<li><span class="rk">' + esc(fmt(t('seminarN'), { n: s.n })) + '</span><span class="rv"><b>' + tm(s.s, s.e) + '</b><span>' + xb(s.when) + '</span></span></li>';
    }).join('');
    $('fellowList').innerHTML = R.fellowship.map(function (f) {
      var mine = f.lang === state.lang;
      return '<li' + (mine ? ' class="mine"' : '') + '><span class="rk">' + xb(f.name) + '</span><span class="rv"><b>' + xb(f.where) + '</b></span></li>';
    }).join('');
    $('counselText').innerHTML = x(R.counsel.text);
    $('counselBtn').href = R.counsel.url; $('qCounsel').href = R.counsel.url;
    $('themeHead').textContent = x(R.theme);
    $('themeVerse').textContent = x(R.themeVerse);
    $('themeRef').textContent = x(R.themeRef);
    $('pillars').innerHTML = R.pillars.map(function (p) { return '<div class="pillar"><b>' + xb(p.h) + '</b><p>' + xb(p.v) + '</p><cite>' + xb(p.r) + '</cite></div>'; }).join('');
  }

  /* ── 생활 안내 ── */
  function supplies() { try { return JSON.parse(store('rt_sup') || '{}') || {}; } catch (e) { return {}; } }
  function renderInfo() {
    $('lodgingList').innerHTML = R.lodging.map(function (l) { return '<li><span class="rk">' + xb(l.where) + '</span><span class="rv"><b>' + xb(l.who) + '</b></span></li>'; }).join('');
    $('lodgingRules').innerHTML = R.lodgingRules.map(function (r) { return '<li><span><b class="nw">' + esc(x(r.time)) + '</b> ' + esc(x(r.text)) + '</span></li>'; }).join('');
    $('ruleList').innerHTML = R.rules.map(function (s) { return '<li>' + x(s) + '</li>'; }).join('');
    $('kidsTitle').textContent = x(R.kidsTitle);
    $('kidsList').innerHTML = R.kids.map(function (s) { return '<li>' + x(s) + '</li>'; }).join('');
    var sp = supplies();
    $('supplyList').innerHTML = R.supplies.map(function (s) {
      return '<li><button type="button" data-sup="' + s.id + '" aria-pressed="' + !!sp[s.id] + '"><span class="box">' + ICONS.check + '</span>' + xb(s.t) + '</button></li>';
    }).join('');
    $('cleanupList').innerHTML = R.cleanup.map(function (c) { return '<li><span class="rk">' + xb(c.where) + '</span><span class="rv"><b>' + xb(c.who) + '</b></span></li>'; }).join('');
  }

  /* ── 연락처 ── */
  function renderContact() {
    var C = R.contacts;
    $('emBtn').href = tel(C.emergency.tel);
    $('emWho').textContent = x(C.emergency.who); $('emTel').textContent = C.emergency.tel; $('emNote').textContent = x(C.emergency.note);
    $('inqBtn').href = tel(C.inquiry.tel);
    $('inqWho').textContent = x(C.inquiry.who); $('inqTel').textContent = C.inquiry.tel; $('inqNote').textContent = x(C.inquiry.note);
    $('deptList').innerHTML = C.depts.map(function (d) {
      return '<li><a href="' + tel(d.tel) + '"><span class="dk">' + xb(d.d) + '</span><span class="dw">' + xb(d.who) + '</span><span class="dt">' + ICONS.phone + esc(d.tel) + '</span></a></li>';
    }).join('');
    $('venueName').innerHTML = xb(R.venue.name);
    $('venueAddr').innerHTML = R.venue.address.split(/, (?=[A-Z][a-z])/).map(function (p, i, a) { return '<span class="nw">' + esc(p) + (i < a.length - 1 ? ',' : '') + '</span>'; }).join(' ');
    $('venueBldg').innerHTML = '※ ' + xb(R.venue.buildings);
    $('mapBtn').href = R.venue.map;
    $('footMeta').textContent = R.host;
  }

  /* ── 공지 띠 ── */
  function closedNotices() { try { return JSON.parse(store('rt_closed') || '[]') || []; } catch (e) { return []; } }
  function renderNotices() {
    var n = nowLA(), key = n.date + ' ' + String(Math.floor(n.min / 60)).padStart(2, '0') + ':' + String(n.min % 60).padStart(2, '0');
    var closed = closedNotices();
    var list = (R.notices || []).filter(function (o) {
      return (!o.from || o.from <= key) && (!o.until || key < o.until) && closed.indexOf(o.id) === -1;
    });
    $('notices').innerHTML = list.map(function (o) {
      return '<div class="notice ' + (o.level === 'urgent' ? 'urgent' : 'info') + '"><span class="ico" aria-hidden="true">' + ICONS.bell + '</span>' +
        '<p><b>' + esc(t('noticeLabel')) + '</b> ' + xb(o.text) + '</p>' +
        '<button type="button" data-close="' + esc(o.id) + '" aria-label="' + esc(t('noticeClose')) + '">✕</button></div>';
    }).join('');
  }
  $('notices').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-close]'); if (!b) return;
    var c = closedNotices(); c.push(b.getAttribute('data-close')); store('rt_closed', JSON.stringify(c.slice(-50))); renderNotices();
  });

  function render() { renderStatic(); renderNotices(); renderSchedule(); renderWord(); renderInfo(); renderContact(); showView(false); syncUrl(); }

  /* ── 화면 전환 (#schedule #word #info #contact) ── */
  function viewFromHash() {
    var h = (location.hash || '').slice(1), v = h.split('-')[0];
    return VIEWS.some(function (q) { return q[0] === v; }) ? { v: v, anchor: h.indexOf('-') !== -1 ? h : '' } : { v: 'schedule', anchor: '' };
  }
  var ANCHORS = { 'word-seminar': 'seminarList', 'info-cleanup': 'cleanupList' };
  function showView(scroll) {
    var r = viewFromHash(); state.view = r.v;
    document.querySelectorAll('.view').forEach(function (s) { s.hidden = s.getAttribute('data-view') !== r.v; });
    document.querySelectorAll('#bottomnav a').forEach(function (a) { if (a.getAttribute('data-view') === r.v) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    if (scroll) {
      var el = r.anchor && $(ANCHORS[r.anchor]);
      if (el) setTimeout(function () { el.closest('.card').scrollIntoView({ block: 'start' }); }, 30);
      else window.scrollTo(0, 0);
    }
  }
  window.addEventListener('hashchange', function () { showView(true); syncUrl(); });
  $('bottomnav').addEventListener('click', function (e) {
    var a = e.target.closest('a[data-view]');
    if (a && a.getAttribute('data-view') === state.view && location.hash.split('-')[0] === '#' + state.view) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  });

  /* ── 주소에 언어 남기기 ── */
  function syncUrl() {
    var p = new URLSearchParams(location.search);
    p.set('lang', state.lang); p.delete('source');
    var u = location.pathname + '?' + p.toString() + location.hash;
    try { history.replaceState(null, '', u); } catch (e) {}
  }
  var UA = navigator.userAgent || '';
  var isIOS = /iPhone|iPad|iPod/.test(UA) || (/Macintosh/.test(UA) && navigator.maxTouchPoints > 1);
  var isKakao = /KAKAOTALK/i.test(UA);
  var isInApp = isKakao || /FBAN|FBAV|Instagram|Line\/|NAVER\(inapp|DaumApps|Band\/|WeChat|MicroMessenger/i.test(UA);
  // 카톡 등 앱 안 브라우저: 주소를 조용히 바꾸면 「다른 브라우저로 열기」가 모르므로 실제로 다시 엽니다
  function goWithLang() {
    if (!isInApp) return false;
    var p = new URLSearchParams(location.search);
    if (p.get('lang') === state.lang) return false;
    p.set('lang', state.lang); p.delete('source');
    location.replace(location.pathname + '?' + p.toString() + location.hash);
    return true;
  }

  function toast(msg) { var el = $('toast'); el.textContent = msg; el.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(function () { el.classList.remove('show'); }, 2200); }
  function shareUrl() { return location.origin + location.pathname + '?lang=' + state.lang; }

  /* ── 이벤트 ── */
  document.querySelectorAll('#langSeg button').forEach(function (b) {
    b.addEventListener('click', function () {
      state.lang = b.getAttribute('data-lang'); saveLang(state.lang);
      if (goWithLang()) return;
      render();
    });
  });
  document.querySelectorAll('#sizeSeg button').forEach(function (bt) {
    bt.addEventListener('click', function () {
      state.size = Number(bt.getAttribute('data-size')); store('rt_size', String(state.size));
      store('rt_hint', '1'); $('sizeHint').hidden = true;
      renderStatic(); toast(T[state.lang].textSizeN[state.size - 1]);
    });
  });
  if (!store('rt_hint') && state.size === 1) {
    $('sizeHint').hidden = false;
    setTimeout(function () { store('rt_hint', '1'); }, 5000);
    setTimeout(function () { $('sizeHint').hidden = true; }, 12000);
  }
  $('sizeHintClose').addEventListener('click', function () { $('sizeHint').hidden = true; store('rt_hint', '1'); });
  $('themeBtn').addEventListener('click', function () {
    var next = { light: 'dark', dark: 'auto', auto: 'light' }[themeMode()];
    store('rt_theme', next); try { document.cookie = 'rt_theme=' + next + '; max-age=31536000; path=/; SameSite=Lax'; } catch (e) {}
    applyTheme(next); toast(T[state.lang].themeN[next]);
  });
  if (window.matchMedia) { var mq = matchMedia('(prefers-color-scheme: dark)'); if (mq.addEventListener) mq.addEventListener('change', function () { applyTheme(themeMode()); }); }
  function goDay(di) {
    state.day = di; state.dayPicked = true; state.mode = 'day'; renderSchedule();
    var el = $('viewSeg'); setTimeout(function () { el.scrollIntoView({ block: 'start', behavior: 'smooth' }); }, 30);
  }
  ['sqList', 'tgrid'].forEach(function (id) { $(id).addEventListener('click', function (e) { var b = e.target.closest('[data-goday]'); if (b) goDay(Number(b.getAttribute('data-goday'))); }); });
  $('viewSeg').addEventListener('click', function (e) { var b = e.target.closest('button[data-mode]'); if (b) { state.mode = b.getAttribute('data-mode'); renderSchedule(); } });
  $('dayTabs').addEventListener('click', function (e) { var b = e.target.closest('button[data-day]'); if (b) { state.day = Number(b.getAttribute('data-day')); state.dayPicked = true; renderSchedule(); } });
  $('supplyList').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-sup]'); if (!b) return;
    var sp = supplies(), id = b.getAttribute('data-sup'); sp[id] = !sp[id]; store('rt_sup', JSON.stringify(sp));
    b.setAttribute('aria-pressed', String(!!sp[id]));
  });
  $('shareBtn').addEventListener('click', function () {
    var url = shareUrl();
    if (navigator.share) { navigator.share({ title: document.title, url: url }).catch(function () {}); return; }
    (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject()).then(function () { toast(t('copied')); }, function () { prompt('URL', url); });
  });
  $('qrBtn').addEventListener('click', function () {
    var url = shareUrl(); $('qrUrl').textContent = url;
    var box = $('qrCode');
    var draw = function () { box.innerHTML = ''; new window.QRCode(box, { text: url, width: 440, height: 440, correctLevel: window.QRCode.CorrectLevel.M }); };
    if (window.QRCode) draw();
    else { var s = document.createElement('script'); s.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'; s.onload = draw; document.head.appendChild(s); }
    $('qrDialog').showModal();
  });
  // 홍보 영상: 누를 때만 불러옵니다 (데이터 절약)
  $('qVideo').addEventListener('click', function () {
    $('videoFrame').src = 'https://www.youtube-nocookie.com/embed/' + R.video.youtube + '?autoplay=1&playsinline=1&rel=0&modestbranding=1';
    $('videoOpen').href = 'https://youtu.be/' + R.video.youtube;
    $('videoDialog').showModal();
  });
  $('videoClose').addEventListener('click', function () { $('videoDialog').close(); });
  $('videoDialog').addEventListener('close', function () { $('videoFrame').src = 'about:blank'; });   // 닫으면 소리도 멈춤
  $('videoDialog').addEventListener('click', function (e) { if (e.target === $('videoDialog')) $('videoDialog').close(); });
  $('qrClose').addEventListener('click', function () { $('qrDialog').close(); });

  /* ── 다시 열었을 때 자동 새로고침 ──
   * 홈 화면 앱은 메모리에 남아 있다가 그대로 다시 보여서, 바뀐 내용이 안 보일 수 있습니다.
   * 돌아올 때마다 사이트 파일(ETag)이 바뀌었는지 확인해 바뀌었으면 다시 불러오고, 「지금/다음」은 항상 새로 계산합니다. */
  var APP_FILES = ['index.html', 'app.js', 'styles.css', 'data.js', 'snow.js'];
  var fileSigs = null, lastResume = Date.now();
  function readSigs() {
    return Promise.all(APP_FILES.map(function (f) {
      return fetch(f + '?v=' + Date.now(), { method: 'HEAD', cache: 'no-store' }).then(function (r) { return r.ok ? (r.headers.get('etag') || r.headers.get('last-modified') || '') : ''; }).catch(function () { return ''; });
    })).then(function (a) { return a.join('|'); });
  }
  function checkForNewVersion() {
    return readSigs().then(function (sig) {
      if (!sig.replace(/\|/g, '')) return false;
      if (fileSigs === null) { fileSigs = sig; return false; }
      if (sig !== fileSigs) { store('rt_updated', '1'); location.reload(); return true; }
      return false;
    });
  }
  function onResume() {
    if (document.hidden) return;
    if (Date.now() - lastResume > 30 * 60000) state.dayPicked = false;   // 오래 있다가 돌아오면 다시 「오늘」로
    lastResume = Date.now();
    checkForNewVersion().then(function (reloaded) { if (!reloaded) renderSchedule(); });
  }
  document.addEventListener('visibilitychange', onResume);
  window.addEventListener('pageshow', function (e) { if (e.persisted) onResume(); });
  window.addEventListener('focus', function () { if (Date.now() - lastResume > 60000) onResume(); });
  setInterval(function () { if (!document.hidden) renderNotices(); }, 30000);   // 공지 기간 시작/끝
  setInterval(function () { if (!document.hidden) checkForNewVersion(); }, 3 * 60000);   // 앱을 켜 둔 채여도 새 공지가 3분 안에 보이게
  setInterval(function () { if (document.hidden || state.view !== 'schedule') return; var st = status(); if (sigOf(st) !== state.sig) renderSchedule(); }, 30000);   // 1분마다 「지금」 갱신
  setTimeout(function () { readSigs().then(function (s) { fileSigs = s; }); }, 1500);
  if (store('rt_updated')) { try { localStorage.removeItem('rt_updated'); } catch (e) {} setTimeout(function () { toast(t('updatedReload')); }, 600); }

  /* ── 홈 화면에 추가 ── */
  var deferredPrompt = null;
  function updateInstallBtn() { $('installBtn').hidden = isStandalone(); }
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); deferredPrompt = e; updateInstallBtn(); });
  window.addEventListener('appinstalled', function () { deferredPrompt = null; $('installBtn').hidden = true; toast(t('installed')); });
  function showGuide(kind) {
    var L = T[state.lang];
    $('insTitle').textContent = L[kind + 'Title'];
    $('insSteps').innerHTML = L[kind + 'Steps'].map(function (s) { return '<li>' + s.replace('{menu}', '<span class="ins-ico">' + ICONS.pageMenu + '</span>') + '</li>'; }).join('');
    $('installDialog').showModal();
  }
  $('installBtn').addEventListener('click', function () {
    if (deferredPrompt) { deferredPrompt.prompt(); deferredPrompt.userChoice.then(function () { deferredPrompt = null; }).catch(function () {}); return; }
    if (isKakao) { location.href = 'kakaotalk://web/openExternal?url=' + encodeURIComponent(location.href.split('#')[0]); setTimeout(function () { showGuide('inapp'); }, 800); return; }
    if (isInApp) { showGuide('inapp'); return; }
    showGuide(isIOS ? 'ios' : 'and');
  });
  $('insClose').addEventListener('click', function () { $('installDialog').close(); });
  updateInstallBtn();
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' }).then(function (reg) { if (reg && reg.update) reg.update(); }).catch(function () {});
    });
  }

  if (goWithLang()) return;
  render();
  showView(!!location.hash);
})();
