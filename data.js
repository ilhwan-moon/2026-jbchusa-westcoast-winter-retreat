// ─────────────────────────────────────────────────────────────
//  2026 미주서부 동계수련회 내용 (이 파일만 고치면 앱 내용이 바뀝니다)
//  각 항목은 [한국어, English, Español, 中文] 순서입니다.
//  시간은 24시간제(LA 시간)로 적습니다. 예: 오후 6시 50분 → '18:50'
// ─────────────────────────────────────────────────────────────
(function () {
  function L(ko, en, es, zh) { return { ko: ko, en: en, es: es, zh: zh == null ? en : zh }; }

  var MAIN = L('본관', 'Main Bldg', 'Edificio 1540', '主楼');
  var LEE = L('이정국 목사', 'P. Lee Jeong-kuk', 'P. Lee Jeong-kuk', 'P. Lee Jeong-kuk');
  var BAE = L('배택우 목사', 'P. Bae Taek-woo', 'P. Bae Taek-woo', 'P. Bae Taek-woo');
  var HALL = L('대강당 (본관 1540)', 'Main Hall (1540)', 'Salón Principal (1540)', '大礼堂 (1540)');

  window.RETREAT = {
    tz: 'America/Los_Angeles',
    start: '2026-11-27', end: '2026-11-29',
    title: L('2026 미주서부 동계수련회', '2026 West Coast Winter Retreat', '2026 Retiro de Invierno · Costa Oeste', '2026 西海岸冬季培灵会'),
    short: L('동계수련회', 'Winter Retreat', 'Retiro de Invierno', '冬季培灵会'),
    theme: L('예수그리스도를 본받아', 'Imitating Jesus Christ', 'Imitando a Jesucristo', '效法基督'),
    themeRef: L('고린도전서 11:1', '1 Corinthians 11:1', '1 Corintios 11:1', '哥林多前书 11:1'),
    themeVerse: L('내가 그리스도를 본받는 자가 된 것같이 너희는 나를 본받는 자 되라',
      'Imitate me, just as I also imitate Christ.',
      'Sed imitadores de mí, así como yo de Cristo.',
      '你们该效法我，像我效法基督一样。'),
    tagline: 'A Life, Piece by Piece, to Be Like Him',
    host: 'Jesus Baptist U.S.A. Conference',
    dateText: L('2026년 11월 27일(금) ~ 29일(일) · 2박 3일', 'Fri, Nov 27 – Sun, Nov 29, 2026', 'Vie 27 – Dom 29 de noviembre de 2026', '2026年11月27日(周五) – 29日(周日)'),
    churches: L('LA중앙 · LA코로나 · LA · 라스베가스 · 샌프란시스코 교회', 'LA Central · LA Corona · LA · Las Vegas · San Francisco churches', 'Iglesias LA Central · LA Corona · LA · Las Vegas · San Francisco', 'LA Central · LA Corona · LA · Las Vegas · San Francisco 教会'),

    venue: {
      name: L('아메리카 미션센터 (서부 수양관)', 'America Mission Center', 'America Mission Center', 'America Mission Center'),
      address: '1540 E First St, Santa Ana, CA 92701',
      map: 'https://www.google.com/maps/search/?api=1&query=1540+E+First+St,+Santa+Ana,+CA+92701',
      buildings: L('본관 = 1540 건물 · 별관 = 1530 건물', 'Main building = 1540 · Annex = 1530', 'Edificio principal = 1540 · Anexo = 1530', '主楼 = 1540 · 附楼 = 1530'),
    },

    // 전체 말씀(신앙생활 말씀) — 일정표의 sermon 번호와 연결
    sermons: {
      1: { title: L('긍휼과 용서', 'Mercy and Forgiveness', 'Misericordia y perdón', '怜悯与饶恕'), speaker: LEE,
           praise: L('LA교회', 'LA Church', 'Iglesia de LA', 'LA教会'), song: L('나 사랑받았네', '나 사랑받았네 (Korean)', '나 사랑받았네 (coreano)', '나 사랑받았네 (韩语)') },
      2: { title: L('순종과 희생', 'Obedience and Sacrifice', 'Obediencia y sacrificio', '顺服与牺牲'), speaker: BAE,
           praise: L('LA코로나교회', 'LA Corona Church', 'Iglesia de LA Corona', 'LA Corona教会'), song: L('434장 나의 갈길 다 가도록 (영어)', 'All the Way My Savior Leads Me (#434)', 'All the Way My Savior Leads Me (#434, inglés)', 'All the Way My Savior Leads Me (#434)') },
      3: { title: L('겸손과 온유', 'Humility and Gentleness', 'Humildad y mansedumbre', '谦卑与温柔'), speaker: LEE,
           praise: L('라스베가스교회', 'Las Vegas Church', 'Iglesia de Las Vegas', 'Las Vegas教会'), song: L('499장 저 장미꽃 위에 이슬 (영어)', 'In the Garden (#499)', 'In the Garden (#499, inglés)', 'In the Garden (#499)') },
      4: { title: L('전도', 'Evangelism', 'Evangelización', '传福音'), speaker: LEE,
           praise: L('LA중앙교회', 'LA Central Church', 'Iglesia de LA Central', 'LA Central教会'), song: L('469장 내 영혼의 그윽히 깊은데서', '469 내 영혼의 그윽히 깊은데서 (Korean)', '469 내 영혼의 그윽히 깊은데서 (coreano)', '469 내 영혼의 그윽히 깊은데서 (韩语)') },
    },

    // 일정표: k = 종류(meal 식사, sermon 말씀, fellow 교제, praise 찬양의 밤, rest 휴식, sleep 취침, wash 세면, reg 등록, supper 성찬, leave 귀가)
    days: [
      { date: '2026-11-27', label: L('첫째 날 · 11/27(금)', 'Day 1 · Fri 11/27', 'Día 1 · Vie 27/11', '第一天 · 11/27(周五)'), tab: L('27일 금', 'Fri 27', 'Vie 27', '27日 周五'), items: [
        { s: '12:00', e: '13:00', k: 'meal', t: L('점심식사', 'Lunch', 'Almuerzo', '午餐') },
        { s: '13:00', e: '17:30', k: 'reg', t: L('등록 & 숙소배정', 'Registration & lodging assignment', 'Registración y asignación del alojamiento', '登记 & 寝室分配') },
        { s: '17:30', e: '18:40', k: 'meal', t: L('저녁식사', 'Dinner', 'Cena', '晚餐') },
        { s: '18:50', e: '20:40', k: 'sermon', n: 1 },
        { s: '21:00', e: '22:30', k: 'fellow', t: L('자유 교제', 'Free fellowship', 'Reunión libre', '自由团契') },
        { s: '22:30', e: '', k: 'sleep', t: L('취침', 'Sleep', 'Dormir', '休息') },
      ] },
      { date: '2026-11-28', label: L('둘째 날 · 11/28(토)', 'Day 2 · Sat 11/28', 'Día 2 · Sáb 28/11', '第二天 · 11/28(周六)'), tab: L('28일 토', 'Sat 28', 'Sáb 28', '28日 周六'), items: [
        { s: '07:00', e: '08:00', k: 'wash', t: L('세면 & 청소', 'Wash up & clean', 'Despertarse y ducharse', '洗漱 & 清洁') },
        { s: '08:00', e: '09:30', k: 'meal', t: L('아침식사', 'Breakfast', 'Desayuno', '早餐') },
        { s: '09:50', e: '11:40', k: 'sermon', n: 2 },
        { s: '13:00', e: '14:00', k: 'meal', t: L('점심식사', 'Lunch', 'Almuerzo', '午餐') },
        { s: '14:30', e: '16:30', k: 'fellow', lang: true, t: L('언어권별 전체 교제', 'Fellowship by language', 'Reunión por idioma', '按语别分组交通') },
        { s: '16:30', e: '17:30', k: 'rest', t: L('휴식', 'Rest', 'Descansar', '休息') },
        { s: '17:30', e: '18:40', k: 'meal', t: L('저녁식사', 'Dinner', 'Cena', '晚餐') },
        { s: '18:50', e: '20:30', k: 'sermon', n: 3 },
        { s: '20:45', e: '22:30', k: 'praise', t: L('찬양의 밤', 'Praise Night', 'Noche de Alabanza', '赞美晚会') },
        { s: '22:30', e: '', k: 'sleep', t: L('취침', 'Sleep', 'Dormir', '休息') },
      ] },
      { date: '2026-11-29', label: L('셋째 날 · 11/29(일)', 'Day 3 · Sun 11/29', 'Día 3 · Dom 29/11', '第三天 · 11/29(周日)'), tab: L('29일 일', 'Sun 29', 'Dom 29', '29日 周日'), items: [
        { s: '07:00', e: '08:00', k: 'wash', t: L('세면 & 청소', 'Wash up & clean', 'Despertarse y ducharse', '洗漱 & 清洁') },
        { s: '08:00', e: '09:30', k: 'meal', t: L('아침식사', 'Breakfast', 'Desayuno', '早餐') },
        { s: '09:50', e: '11:40', k: 'sermon', n: 4 },
        { s: '12:00', e: '13:00', k: 'supper', t: L('성찬식 & 단체사진', "Lord's Supper & group photo", 'Santa Cena y foto grupal', '圣餐 & 集体合影') },
        { s: '13:00', e: '14:00', k: 'meal', t: L('점심식사', 'Lunch', 'Almuerzo', '午餐') },
        { s: '14:00', e: '', k: 'leave', t: L('다같이 정리 후 귀가 · 후발대', 'Clean up together & leave', 'Limpieza y regreso', '清洁 & 离开') },
      ] },
    ],
    youthNote: L('중고등부와 초등부는 별도의 스케줄이 있습니다.', 'Youth Group and Elementary follow a separate schedule.', 'El grupo juvenil y la primaria tienen un horario aparte.', '中高等部和小学部会遵循另外的时间安排。'),

    // 말씀 안내 (통역)
    sermonNotes: [
      L('성인 생활말씀은 대강당에서 한국어와 스페인어로 진행됩니다 (순차 통역).', 'Korean and Spanish are interpreted side-by-side in the Main Hall.', 'Los sermones para adultos son en el Salón Principal, en coreano y español (interpretación consecutiva).', '基督徒生活话语（成人）西班牙语及韩语在大讲堂进行交替传译。'),
      L('영어권과 중국어권은 대강당에서 동시 통역으로 듣습니다 (통역기).', 'English and Chinese are interpreted simultaneously in the Main Hall (interpreter device).', 'Inglés y chino: interpretación simultánea en el Salón Principal (con receptor).', '英语及中文在大讲堂通过翻译器同声传译。'),
      L('중고등부 말씀은 별관 2층 중강당에서 따로 진행됩니다.', 'Youth Group sermons are held in the Annex (1530) 2F Medium Hall.', 'Los sermones del grupo juvenil son en 1530, 2do piso, Sala Mediana.', '初高中部话语在附楼2楼中高等学校教室同时进行。'),
      L('언어별 성경 강연회(전도 집회)는 아래 장소에서 진행됩니다.', 'Bible Seminars are held in separate rooms for each language (see below).', 'Los seminarios bíblicos son en salas separadas por idioma (ver abajo).', '各语言圣经研讨会在下列地点进行。'),
    ],

    // 말씀 장소 안내 (포스터 번호 ①~⑦)
    places: [
      { n: 1, where: L('대강당', 'Main Hall', 'Salón Principal', '大礼堂'), what: L('성인 말씀', 'Adult sermon', 'Sermón para adultos', '成人话语') },
      { n: 2, where: L('본관 2층 중강당', 'Main (1540) 2F English Hall', '1540 2do piso, Sala Mediana', '1540 二楼 中礼堂'), what: L('영어 성경 강연회', 'English Bible Seminar', 'Seminario bíblico en inglés', '英文布道会') },
      { n: 3, where: L('본관 1층 상담실', 'Main (1540) 1F Counseling Room', '1540 1er piso, Sala Pequeña', '1540 一楼 辅导室'), what: L('한국어 성경 강연회', 'Korean Bible Seminar', 'Seminario bíblico en coreano', '韩文布道会') },
      { n: 4, where: L('본관 1층 소강당', 'Main (1540) 1F Latino Hall', '1540 1er piso, Sala Mediana', '1540 一楼 中礼堂'), what: L('스페인어 성경 강연회', 'Spanish Bible Seminar', 'Seminario bíblico en español', '西班牙语布道会') },
      { n: 5, where: L('별관 2층 집회실', 'Annex (1530) 2F Chinese Hall', '1530 2do piso, Sala Pequeña', '1530 二楼 小礼堂'), what: L('중국어 성경 강연회', 'Chinese Bible Seminar', 'Seminario bíblico en chino', '中文布道会') },
      { n: 6, where: L('별관 2층 중강당', 'Annex (1530) 2F Medium Hall', '1530 2do piso, Sala Mediana', '1530 二楼 中礼堂'), what: L('중고등부 말씀', 'Youth Group sermon', 'Sermón para el grupo juvenil', '青少年话语') },
      { n: 7, where: L('본관 2층 초등2실 · 1층 초등1실', 'Main (1540) 2F E2 Room · 1F E1 Room', '1540 2do piso Sala E2 · 1er piso Sala E1', '1540 二楼 E2教室 · 一楼 E1教室'), what: L('초등부 2 · 초등부 1 말씀', 'Elementary 2 · Elementary 1 sermon', 'Sermón para E2 · E1', '小学二年级 · 一年级信息') },
    ],

    // 성경 강연회 (언어별 장소·강사)
    seminars: [
      { lang: 'ko', name: L('한국어', 'Korean', 'Coreano', '韩语'), where: L('본관 1층 상담실', 'Main (1540) 1F Counseling Room', '1540 1er piso, Sala Pequeña', '1540 1楼小讲堂'), who: L('박철민 목사', 'P. Samuel Park', 'P. Samuel Park', 'P. Samuel Park') },
      { lang: 'en', name: L('영어', 'English', 'Inglés', '英语'), where: L('본관 2층 중강당', 'Main (1540) 2F English Hall', '1540 2do piso, Sala Mediana', '1540 2楼中讲堂'), who: L('정성호 목사 · 신종근 전도사', 'P. Jacob Jeong · E. Jong-geun Shin', 'P. Jacob Jeong · E. Jong-geun Shin', 'P. Jacob Jeong · E. Jong-geun Shin') },
      { lang: 'es', name: L('스페인어', 'Spanish', 'Español', '西班牙语'), where: L('본관 1층 소강당', 'Main (1540) 1F Latino Hall', '1540 1er piso, Sala Mediana', '1540 1楼中讲堂'), who: L('이재준 목사 · 김태우 전도사', 'P. Ezra Lee · E. Jonas Kim', 'P. Ezra Lee · E. Jonas Kim', 'P. Ezra Lee · E. Jonas Kim') },
      { lang: 'zh', name: L('중국어', 'Chinese', 'Chino', '中文'), where: L('별관 2층 집회실', 'Annex (1530) 2F Chinese Hall', '1530 2do piso, Sala Pequeña', '1530 2楼小讲堂'), who: L('박철오 목사', 'P. Joel Park', 'P. Joel Park', 'P. Joel Park') },
      { name: L('초등부 1', 'Elementary 1', 'Primaria 1', '小学1'), where: L('본관 1층 초등1', 'Main (1540) 1F E1 Room', '1540 1er piso, Sala E1', '1540 1楼小学组1'), who: L('에스테반 형제 · 마리오 형제', 'B. Esteban · B. Mario', 'B. Esteban · B. Mario', 'B. Esteban · B. Mario') },
      { name: L('초등부 2', 'Elementary 2', 'Primaria 2', '小学2'), where: L('본관 2층 초등2', 'Main (1540) 2F E2 Room', '1540 2do piso, Sala E2', '1540 2楼小学组2'), who: L('이노아 형제 · 알렉스 조 형제', 'B. Noah · B. Alex Cho', 'B. Noah · B. Alex Cho', 'B. Noah · B. Alex Cho') },
    ],
    seminarTimes: [
      { n: 1, when: L('1일차 저녁 (11/27)', 'Day 1 evening (11/27)', 'Día 1, noche (27/11)', '第一天 晚上 (11/27)'), s: '18:50', e: '21:00' },
      { n: 2, when: L('2일차 아침 (11/28)', 'Day 2 morning (11/28)', 'Día 2, mañana (28/11)', '第二天 上午 (11/28)'), s: '09:50', e: '12:00' },
      { n: 3, when: L('2일차 오후 (11/28)', 'Day 2 afternoon (11/28)', 'Día 2, tarde (28/11)', '第二天 下午 (11/28)'), s: '14:30', e: '16:30' },
      { n: 4, when: L('2일차 저녁 (11/28)', 'Day 2 evening (11/28)', 'Día 2, noche (28/11)', '第二天 晚上 (11/28)'), s: '18:50', e: '21:00' },
      { n: 5, when: L('3일차 아침 (11/29)', 'Day 3 morning (11/29)', 'Día 3, mañana (29/11)', '第三天 上午 (11/29)'), s: '09:50', e: '12:00' },
    ],

    // 2일차 언어권별 전체 교제 장소
    fellowship: [
      { lang: 'ko', name: L('한국어권', 'Korean', 'Coreano', '韩语'), where: L('본관 대강당 (이정국 목사)', '1540 Main Hall (P. Lee Jeong-kuk)', '1540 Salón Principal (P. Lee Jeong-kuk)', '大讲堂 (P. Lee Jeong-kuk)') },
      { lang: 'en', name: L('영어권', 'English', 'Inglés', '英语'), where: L('별관 2층 중고등부 집회실 (배택우 목사)', '1530 Youth Group Room (P. Bae Taek-woo)', '1530 Sala del grupo juvenil (P. Bae Taek-woo)', '1530 青年团契室 (P. Bae Taek-woo)') },
      { lang: 'es', name: L('스페인어권', 'Spanish', 'Español', '西班牙语'), where: L('별관 식당 (문동찬 목사)', '1530 Cafeteria (P. Moon Dong-chan)', '1530 Cafetería (P. Moon Dong-chan)', '1530 餐厅 (P. Moon Dong-chan)') },
      { lang: 'zh', name: L('중국어권', 'Chinese', 'Chino', '中文'), where: L('특별활동', 'Special activity', 'Actividad especial', '特别活动') },
    ],

    // 숙소 안내
    lodging: [
      { where: L('본관 1층 전층', '1540 1F, all rooms', '1540 1er piso, todos los cuartos', '主楼1楼 所有房间'), who: L('자매숙소', "Sisters' lodge", 'Hermanas (mujeres)', '姊妹寝室') },
      { where: L('본관 2층 영아방', '1540 2F, infant room', '1540 2do piso, cuarto de bebés', '主楼2楼 母婴室'), who: L('영아 및 부모숙소', "Infants & parents' lodge", 'Bebés con sus madres', '母婴寝室') },
      { where: L('본관 2층 청년회실', '1540 2F, YA room', '1540 2do piso, cuarto de jóvenes', '主楼2楼 青年会室'), who: L('은장회 자매숙소', "Senior sisters' lodge", 'Hermanas mayores', '长者会姊妹寝室') },
      { where: L('본관 2층 그 외 숙소', '1540 2F, other rooms', '1540 2do piso, otros cuartos', '主楼2楼 其余房间'), who: L('자매숙소', "Sisters' lodge", 'Hermanas (mujeres)', '姊妹寝室') },
      { where: L('별관 2층 중고등부 강당', '1530 2F, youth sermon room', '1530 2do piso, salón pequeño', '附楼2楼 中高等部讲堂'), who: L('교회학교 형제숙소', "Church school brothers' lodge", 'Hermanos varones estudiantes', '教会学校弟兄寝室') },
      { where: L('별관 2층 그 외 숙소', '1530 2F, other rooms', '1530 2do piso, otros cuartos', '附楼2楼 其他房间'), who: L('봉사회, 청년형제 숙소', "Fathers' & YA brothers' lodge", 'Padres y hermanos varones', '侍奉会和青年会弟兄') },
    ],
    lodgingRules: [
      L('오후 11:00 ~ 오전 8:00 형제님들은 본관 남자화장실 사용금지', "11:00 PM – 8:00 AM: brothers may not use the men's bathroom in the main building (1540)", '11:00 pm – 8:00 am: los hermanos no pueden usar el baño de hombres del edificio 1540', '11:00pm – 08:00am 禁止弟兄们使用主楼洗手间'),
      L('오후 11:00 ~ 오전 8:00 자매님들은 별관 2층 여자화장실 사용금지', "11:00 PM – 8:00 AM: sisters may not use the women's bathroom in the annex (1530)", '11:00 pm – 8:00 am: las hermanas no pueden usar el baño de mujeres del edificio 1530', '11:00pm – 08:00am 禁止姊妹们使用附楼洗手间'),
    ],

    // 수양관에서 이것만은 꼭!
    rules: [
      L('수양회 기간 동안 <b>항상 명찰을 착용</b>해 주세요.', 'Please <b>wear your name tag</b> at all times.', 'Use su <b>gafete en todo momento</b>.', '在培灵会期间请<b>一直佩戴名字卡片</b>。'),
      L('숙소는 <b>반드시 배정받은 곳</b>을 이용해 주세요.', 'Please sleep in your <b>assigned lodging area</b>.', 'Duerma <b>en el alojamiento asignado</b>.', '请确保在<b>指定寝室</b>就寝。'),
      L('본관 2층 영아방은 위생상 <b>부모가 아닌 분들은 출입을 삼가</b>해 주세요.', 'For hygiene, <b>only parents</b> may enter the infant room.', 'Por higiene, <b>solo los padres</b> pueden entrar al cuarto de bebés.', '由于卫生原因，<b>仅父母允许</b>进入婴幼儿室。'),
      L('<b>개인 소지품 관리</b>에 주의해 주세요.', 'Please watch your <b>personal belongings</b>.', 'Cuide sus <b>pertenencias personales</b>.', '请看管好您的<b>随身用品</b>。'),
      L('내 주변과 숙소는 <b>늘 청결하고 정돈된 상태</b>로 유지해 주세요.', 'Keep your surroundings and lodging <b>clean and tidy</b>.', 'Mantenga su entorno y alojamiento <b>limpio y ordenado</b>.', '请随时保持您周围和寝室的<b>清洁</b>。'),
      L('<b>샤워는 간단히</b> 하시고, <b>화장실을 깨끗이</b> 사용해 주세요.', 'Take <b>short showers</b> and use the <b>bathroom cleanly</b>.', 'Tome <b>duchas cortas</b> y use el <b>baño limpiamente</b>.', '请<b>尽快淋浴</b>并保持<b>浴室清洁</b>。'),
      L('<b>11/29 오전 말씀 후 단체 사진촬영</b>이 있습니다. 모두 참여해 주세요.', 'After the sermon on <b>11/29</b>, there will be a <b>group photo</b>.', 'Después del sermón del <b>29/11</b> habrá <b>foto grupal</b>.', '<b>29号第四篇话语结束后，有合照</b>。'),
      L('숙소의 청결을 위해 <b>음식 반입을 삼가</b> 주세요.', 'Please <b>do not bring food</b> into rooms.', 'Por favor, <b>no lleve comida</b> a las habitaciones.', '为保持房间清洁，<b>请不要携带食物</b>进入。'),
    ],
    kidsTitle: L('소중한 자녀들을 위한 약속!', 'For parents of children', 'Padres de los niños de primaria', '教会学校公告'),
    kids: [
      L('유치부·유아부 자녀들에게는 <b>보호자의 연락처</b>를 꼭 기재해 주세요.', "Please provide the <b>parent's contact information</b> for E1 & E2 students.", 'Entregue la <b>información de contacto de los padres</b> para Primaria 1 y 2.', '请为小学组的学生提供<b>监护人联络方式</b>。'),
      L('초등부·유치부·유아부 보호자께서는 <b>집회 10분 전에</b> 아이들을 말씀 장소로 인도하시고, <b>말씀 후에도</b> 데려가 주세요.', 'Please bring E1 & E2 children to class <b>10 minutes before</b> the sermon and <b>pick them up</b> after it ends.', 'Traiga a los niños a clase <b>10 minutos antes</b> y <b>recójalos después</b> del sermón.', '监护人必须将小学组的学生在课前<b>10分钟</b>带到班级，并在<b>课后接他们</b>下课。'),
    ],

    counsel: {
      url: 'https://counsel.jbchusa.org/west/counseling',
      text: L('전도 및 생활상담은 <b>본관(1540) 1층 상담 접수 코너</b>에서 신청하거나, 아래 버튼(QR코드)으로 신청해 주세요.',
        'Counseling is available. Sign up at the <b>counseling table in the 1540 1F lobby</b>, or with the button below (same as the QR code).',
        'Hay consejería disponible. Inscríbase en la <b>mesa de consulta (1540, 1er piso)</b> o con el botón de abajo (igual al código QR).',
        '本次培灵会提供信仰生活商谈及得救商谈，请在<b>1540 一楼商谈报名处</b>登记，或点击下方按钮（与二维码相同）。'),
    },

    // 3일째 후발대 청소 구역
    cleanup: [
      { who: L('LA중앙교회, 청년회(1)', 'LA Central Church, Young Adults (1)', 'Iglesia LA Central, Jóvenes (1)', 'LA Central教会, 青年会(1)'), where: L('본관 2층', '1540 2F', '1540 2do piso', '主楼2楼') },
      { who: L('라티노, LA교회, LA코로나교회', 'Latino members, LA Church, LA Corona Church', 'Latinos, Iglesia de LA, Iglesia de LA Corona', '拉丁裔, LA教会, LA Corona教会'), where: L('본관 1층', '1540 1F', '1540 1er piso', '主楼1楼') },
      { who: L('청년회(2)', 'Young Adults (2)', 'Jóvenes (2)', '青年会(2)'), where: L('별관 2층', '1530 2F', '1530 2do piso', '附楼2楼') },
      { who: L('라스베가스교회, 샌프란시스코교회', 'Las Vegas Church, San Francisco Church', 'Iglesias de Las Vegas y San Francisco', 'Las Vegas教会, San Francisco教会'), where: L('외부 청소 및 쓰레기 정리', 'Outside cleaning & trash', 'Limpieza exterior y basura', '外部清洁及垃圾整理') },
    ],

    // 회비
    fees: [
      { who: L('성인', 'Adults', 'Adultos', '成人'), ko: '$120', other: '$80' },
      { who: L('중고등부 (13세 이상)', 'Youth (13+, middle/high school)', 'Jóvenes (13+ años)', '中学生 (13岁以上)'), ko: '$100', other: '$60' },
      { who: L('초등부 (6세 이상 ~ 13세 미만)', 'Elementary (6–12)', 'Primaria (6–12 años)', '小学生 (6–12岁)'), ko: '$100', other: '$60' },
      { who: L('처음 참석자 · 미취학 · 전도대상', 'First-time attendees · preschoolers · guests', 'Primera vez · preescolares · invitados', '首次参加者 · 学龄前 · 福音对象'), free: true },
    ],
    feeCols: L(['한인', '라티노·중국인'], ['Korean', 'Latino · Chinese'], ['Coreanos', 'Latinos · Chinos'], ['韩人', '拉丁裔 · 华人']),

    supplies: [
      { id: 'bible', t: L('성경', 'Bible', 'Biblia', '圣经') },
      { id: 'pen', t: L('필기도구', 'Pen & notebook', 'Útiles para escribir', '笔和笔记本') },
      { id: 'bag', t: L('침낭', 'Sleeping bag', 'Bolsa de dormir', '睡袋') },
      { id: 'wash', t: L('세면도구', 'Toiletries', 'Artículos de aseo', '洗漱用品') },
    ],

    // 연락처
    contacts: {
      emergency: { who: L('김선 자매', 'S. Sun Kim', 'Hna. Sun Kim', 'S. Sun Kim'), tel: '(760) 318-5238',
        note: L('환자 발생 및 의약품 문의는 의무 담당자에게 즉시 연락해 주세요.', 'For medical help or medicine, call right away.', 'Para asistencia médica o medicinas, llame de inmediato.', '所有医疗紧急事故和医疗用品，请立即联系。') },
      inquiry: { who: L('신재현d', 'D. Tito Shin', 'D. Tito Shin', 'D. Tito Shin'), tel: '(213) 446-7575',
        note: L('수련회 진행 사항 문의', 'Questions about the retreat schedule', 'Consultas sobre el horario del retiro', '培灵会进行相关咨询') },
      depts: [
        { d: L('등록접수부', 'Registration', 'Registración', '登记'), who: L('이영철, 이원준', 'Young C Lee, Won J Lee', 'Young C Lee, Won J Lee', 'Young C Lee, Won J Lee'), tel: '(213) 268-3214' },
        { d: L('상담부', 'Counseling', 'Consulta', '商谈'), who: L('김규동', 'Kyudong Kim', 'Kyudong Kim', 'Kyudong Kim'), tel: '(951) 446-6323' },
        { d: L('서적부', 'Books & merch', 'Libros y artículos', '周边商品'), who: L('오폴', 'Paul Oh', 'Paul Oh', 'Paul Oh'), tel: '(415) 866-4490' },
        { d: L('교회학교', 'Church School', 'Escuela', '教会学校'), who: L('알렉스 조, 신우영', 'Alex Cho, Brian Shin', 'Alex Cho, Brian Shin', 'Alex Cho, Brian Shin'), tel: '(714) 823-7704' },
        { d: L('유아관리부', 'Nursery', 'Guardería', '幼儿部'), who: L('유경진, 엘리자베스', 'Maria Yu, Elizabeth', 'Maria Yu, Elizabeth', 'Maria Yu, Elizabeth'), tel: '(714) 383-1742' },
      ],
    },

    // 말씀 · 기도 · 교제 · 전도
    pillars: [
      { h: L('말씀', 'Word', 'Palabra', '话语'), v: L('너희는 귀를 기울이고 내게로 나아와 들으라 그리하면 너희 영혼이 살리라', 'Incline your ear, and come to Me. Hear, and your soul shall live.', 'Inclinad vuestro oído, y venid a mí; oíd, y vivirá vuestra alma.', '你们当就近我来，侧耳而听，就必得活。'), r: L('이사야 55:3', 'Isaiah 55:3', 'Isaías 55:3', '赛 55:3') },
      { h: L('기도', 'Prayer', 'Oración', '祷告'), v: L('또한 우리를 위하여 기도하되 하나님이 전도할 문을 우리에게 열어 주사 그리스도의 비밀을 말하게 하시기를 구하라 내가 이것을 인하여 매임을 당하였노라', 'Meanwhile praying also for us, that God would open to us a door for the word, to speak the mystery of Christ, for which I am also in chains.', 'Orando también al mismo tiempo por nosotros, para que el Señor nos abra puerta para la palabra, a fin de dar a conocer el misterio de Cristo.', '也要为我们祷告，求神给我们开传道的门，能以讲基督的奥秘（我为此被捆锁）。'), r: L('골로새서 4:3', 'Colossians 4:3', 'Colosenses 4:3', '西 4:3') },
      { h: L('교제', 'Fellowship', 'Comunión', '团契'), v: L('형제가 연합하여 동거함이 어찌 그리 선하고 아름다운고 … 거기서 여호와께서 복을 명하셨나니 곧 영생이로다', 'Behold, how good and how pleasant it is for brethren to dwell together in unity! … For there the Lord commanded the blessing — life forevermore.', '¡Mirad cuán bueno y cuán delicioso es habitar los hermanos juntos en armonía! … Porque allí envía Jehová bendición, y vida eterna.', '看哪，弟兄和睦同居，是何等地善，何等地美！… 因为在那里有耶和华所命定的福，就是永远的生命。'), r: L('시편 133:1,3', 'Psalm 133:1,3', 'Salmos 133:1,3', '诗 133:1,3') },
      { h: L('전도', 'Evangelism', 'Predicación', '传福音'), v: L('너는 말씀을 전파하라 때를 얻든지 못 얻든지 항상 힘쓰라', 'Preach the word! Be ready in season and out of season.', 'Que prediques la palabra; que instes a tiempo y fuera de tiempo.', '务要传道，无论得时不得时。'), r: L('디모데후서 4:2', '2 Timothy 4:2', '2 Timoteo 4:2', '提后 4:2') },
    ],
  };
})();
