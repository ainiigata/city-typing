const RAW_TERMS = `
行政一般|1|自治体|じちたい|市町村や都道府県など、地域の行政を行う団体。
行政一般|1|地方公共団体|ちほうこうきょうだんたい|法律上の自治体の正式な言い方。
行政一般|1|市町村|しちょうそん|市・町・村のこと。住民に一番近い自治体。
行政一般|1|都道府県|とどうふけん|市町村を含む広域的な自治体。
行政一般|1|首長|しゅちょう|市長・町長・村長・知事など自治体のトップ。
行政一般|2|執行機関|しっこうきかん|市長部局や教育委員会など、行政を実際に進める機関。
行政一般|2|議決機関|ぎけつきかん|議会のこと。予算や条例などを決める機関。
行政一般|1|条例|じょうれい|自治体が定める地域のルール。
行政一般|1|規則|きそく|条例を実施するための細かいルール。
行政一般|2|要綱|ようこう|事務の進め方や制度の運用を定めた内部ルール。
行政一般|2|要領|ようりょう|要綱よりさらに具体的な手続き・基準。
行政一般|1|通知|つうち|国や県などから出される事務上の連絡・指示。
行政一般|2|通達|つうたつ|上級機関から下級機関へ出す行政上の指示。
行政一般|2|例規|れいき|条例・規則・要綱などルール類の総称。
行政一般|1|告示|こくじ|住民などに公式に知らせること。
行政一般|1|公告|こうこく|入札や募集などを広く知らせること。
行政一般|1|施行|しこう|条例や制度を実際に効力あるものとして始めること。
行政一般|1|改正|かいせい|条例や規則などの内容を変えること。
行政一般|1|廃止|はいし|制度や条例などをやめること。
行政一般|1|所管|しょかん|その仕事を担当する部署・範囲。
行政一般|1|主管課|しゅかんか|その案件を中心になって担当する課。
行政一般|1|関係課|かんけいか|その案件に関係する他の課。
行政一般|2|合議|ごうぎ|関係課に内容を確認してもらうこと。
行政一般|1|決裁|けっさい|上司が文書や方針を確認し、正式に承認すること。
行政一般|2|専決|せんけつ|本来上位者が決める事項を、権限を受けた者が決めること。
行政一般|2|代決|だいけつ|決裁者が不在のとき、代理者が決裁すること。
行政一般|1|起案|きあん|決裁を受けるために文書を作ること。
行政一般|1|伺い|うかがい|上司に判断・決裁を求める文書。
行政一般|1|供覧|きょうらん|関係者に文書を見てもらうこと。
行政一般|2|回議|かいぎ|決裁文書を関係者に順番に回すこと。
行政一般|2|稟議|りんぎ|文書で承認を得る手続き。
文書・情報|1|文書管理|ぶんしょかんり|公文書を作成・保存・廃棄する仕組み。
文書・情報|1|公文書|こうぶんしょ|役所が業務で作成・取得した文書。
文書・情報|2|保存年限|ほぞんねんげん|文書を保存しておく期間。
文書・情報|2|情報公開|じょうほうこうかい|住民などの請求に応じて公文書を公開する制度。
文書・情報|1|個人情報|こじんじょうほう|氏名・住所など個人を特定できる情報。
行政一般|1|照会|しょうかい|他部署や外部機関に問い合わせること。
行政一般|1|回答|かいとう|照会や質問に答えること。
行政一般|1|依頼|いらい|他部署や団体に対応をお願いすること。
行政一般|1|協議|きょうぎ|関係者で相談して方向性を決めること。
行政一般|1|調整|ちょうせい|関係者の意見や日程を整えること。
行政一般|2|事務分掌|じむぶんしょう|各部署・各職員の担当業務の分担。
行政一般|2|組織改正|そしきかいせい|部署の新設・統合・名称変更など。
行政一般|1|人事異動|じんじいどう|職員の配属先や役職が変わること。
行政一般|2|兼務|けんむ|本務のほかに別の職務も担当すること。
行政一般|2|併任|へいにん|別の機関や職もあわせて任命されること。
財政・会計|1|会計年度|かいけいねんど|自治体の予算・決算の1年間。通常4月1日から翌年3月31日。
財政・会計|1|一般会計|いっぱんかいけい|福祉、教育、道路など基本的な行政サービスの会計。
財政・会計|2|特別会計|とくべつかいけい|国保や介護など、特定事業を分けて管理する会計。
財政・会計|2|公営企業会計|こうえいきぎょうかいけい|水道・下水道・病院など企業的に運営する会計。
財政・会計|1|予算|よさん|1年間の収入と支出の見込み・使い道。
財政・会計|1|当初予算|とうしょよさん|年度開始前に決める基本の予算。
財政・会計|1|補正予算|ほせいよさん|年度途中で追加・変更する予算。
財政・会計|2|暫定予算|ざんていよさん|本予算が成立しない場合の一時的な予算。
財政・会計|1|決算|けっさん|1年間で実際に入ったお金・使ったお金の結果。
財政・会計|1|歳入|さいにゅう|自治体に入ってくるお金。
財政・会計|1|歳出|さいしゅつ|自治体から出ていくお金。
財政・会計|1|財源|ざいげん|事業に使うお金の出どころ。
財政・会計|1|一般財源|いっぱんざいげん|使い道が限定されないお金。
財政・会計|1|特定財源|とくていざいげん|国庫補助金など使い道が決まっているお金。
財政・会計|2|国庫支出金|こっこししゅつきん|国から自治体に交付されるお金。
財政・会計|2|県支出金|けんししゅつきん|県から市町村に交付されるお金。
財政・会計|2|地方交付税|ちほうこうふぜい|自治体間の財源差を調整するため国から配られるお金。
財政・会計|1|市税|しぜい|市民税、固定資産税など市の税収。
財政・会計|1|使用料|しようりょう|公共施設などを使う人が支払うお金。
財政・会計|1|手数料|てすうりょう|証明書発行など特定の事務に対して支払うお金。
財政・会計|2|基金|ききん|特定目的のために積み立てる貯金。
財政・会計|1|予備費|よびひ|予想外の支出に備えるための予算。
財政・会計|1|執行|しっこう|予算や事業を実際に進めること。
契約・検査|1|契約|けいやく|業務委託や工事などの約束を正式に結ぶこと。
契約・検査|1|入札|にゅうさつ|複数業者から価格等を出してもらい契約相手を選ぶ方法。
契約・検査|2|一般競争入札|いっぱんきょうそうにゅうさつ|条件を満たす業者が広く参加できる入札。
契約・検査|2|指名競争入札|しめいきょうそうにゅうさつ|自治体が指名した業者で行う入札。
契約・検査|2|随意契約|ずいいけいやく|入札ではなく、特定の相手と契約する方法。
契約・検査|1|仕様書|しようしょ|業務内容や条件を具体的に書いた文書。
契約・検査|1|見積書|みつもりしょ|業者が金額を示す書類。
契約・検査|1|検査|けんさ|納品物や工事が契約どおりか確認すること。
契約・検査|1|検収|けんしゅう|納品物を確認して受け取ること。
議会・市民対応|1|議案|ぎあん|議会で審議・議決してもらう案件。
議会・市民対応|1|議決|ぎけつ|議会が賛否を決めること。
議会・市民対応|1|採決|さいけつ|議長が賛否をとること。
議会・市民対応|1|質疑|しつぎ|議案について疑問点を質問すること。
議会・市民対応|2|一般質問|いっぱんしつもん|議員が市政全般について質問すること。
議会・市民対応|1|定例会|ていれいかい|定期的に開かれる議会。
議会・市民対応|1|臨時会|りんじかい|必要に応じて臨時に開かれる議会。
議会・市民対応|1|委員会|いいんかい|分野ごとに詳しく審査する場。
議会・市民対応|1|可決|かけつ|議案が認められること。
議会・市民対応|1|否決|ひけつ|議案が認められないこと。
法務・監査|2|行政財産|ぎょうせいざいさん|庁舎、学校、公園など行政目的で使う公有財産。
法務・監査|2|普通財産|ふつうざいさん|行政目的に直接使っていない公有財産。
法務・監査|2|行政処分|ぎょうせいしょぶん|許可、認可、取消し、命令など、行政庁が法的効果を発生させる行為。
法務・監査|2|行政指導|ぎょうせいしどう|助言、指導、勧告など、強制ではない形で相手に対応を求めること。
法務・監査|2|監査委員|かんさいいん|自治体の財務や事務が適正かをチェックする機関。
法務・監査|2|定期監査|ていきかんさ|毎年度など定期的に行う事務・財務の監査。
`;

const terms = RAW_TERMS.trim().split('\n').map(line => {
  const [category, level, term, reading, meaning] = line.split('|');
  return { category, level: Number(level), term, reading, meaning, tags: [category, ['', '基礎', '標準', '発展'][Number(level)]] };
}).reduce((unique, item) => {
  if (!unique.some(saved => saved.term === item.term)) unique.push(item);
  return unique;
}, []);

const TEST_SETTINGS = {
  all: { label: '総合', seconds: 180, size: 40, multiplier: 1 },
  1: { label: '基礎', seconds: 60, size: 20, multiplier: 1 },
  2: { label: '標準', seconds: 120, size: 25, multiplier: 1.25 },
  3: { label: '発展', seconds: 180, size: 30, multiplier: 1.55 }
};

const state = {
  queue: [], current: null, score: 0, attempts: 0, misses: 0, completed: 0,
  streak: 0, bestStreak: 0, typedChars: 0, timerId: null, startedAt: 0,
  secondsLeft: 0, testSeconds: 0, finished: false, composing: false,
  review: JSON.parse(localStorage.getItem('cityTypingReview') || '[]'),
  records: JSON.parse(localStorage.getItem('cityTypingRecords') || '[]')
};

const els = {
  homeScreen: document.querySelector('#homeScreen'),
  setupScreen: document.querySelector('#setupScreen'),
  playActions: document.querySelector('#playActions'),
  practiceZone: document.querySelector('#practiceZone'),
  lowerGrid: document.querySelector('#lowerGrid'),
  choosePractice: document.querySelector('#choosePractice'),
  chooseTest: document.querySelector('#chooseTest'),
  setupBack: document.querySelector('#setupBack'),
  playBack: document.querySelector('#playBack'),
  quickRestart: document.querySelector('#quickRestart'),
  setupModeLabel: document.querySelector('#setupModeLabel'),
  setupTitle: document.querySelector('#setupTitle'),
  categoryChoices: document.querySelector('#categoryChoices'),
  levelChoices: document.querySelector('#levelChoices'),
  timeChoices: document.querySelector('#timeChoices'),
  startSummary: document.querySelector('#startSummary'),
  startHint: document.querySelector('#startHint'),
  startRun: document.querySelector('#startRun'),
  category: document.querySelector('#category'),
  level: document.querySelector('#level'),
  mode: document.querySelector('#mode'),
  timer: document.querySelector('#timer'),
  restart: document.querySelector('#restart'),
  score: document.querySelector('#score'),
  accuracy: document.querySelector('#accuracy'),
  streak: document.querySelector('#streak'),
  speed: document.querySelector('#speed'),
  termCategory: document.querySelector('#termCategory'),
  termLevel: document.querySelector('#termLevel'),
  reading: document.querySelector('#reading'),
  target: document.querySelector('#target'),
  typingGhost: document.querySelector('#typingGhost'),
  progressBar: document.querySelector('#progressBar'),
  input: document.querySelector('#typingInput'),
  timeLeft: document.querySelector('#timeLeft'),
  termTitle: document.querySelector('#termTitle'),
  meaning: document.querySelector('#meaning'),
  gameMessage: document.querySelector('#gameMessage'),
  tagRow: document.querySelector('#tagRow'),
  resultPanel: document.querySelector('#resultPanel'),
  resultSummary: document.querySelector('#resultSummary'),
  retryTest: document.querySelector('#retryTest'),
  remainingCount: document.querySelector('#remainingCount'),
  queueList: document.querySelector('#queueList'),
  reviewList: document.querySelector('#reviewList'),
  clearReview: document.querySelector('#clearReview'),
  recordList: document.querySelector('#recordList'),
  clearRecords: document.querySelector('#clearRecords')
};

const LEVEL_OPTIONS = [
  { value: 'all', label: 'すべて', note: '全レベルを混ぜる' },
  { value: '1', label: '基礎', note: 'よく見る基本語' },
  { value: '2', label: '標準', note: '実務で使う語' },
  { value: '3', label: '発展', note: '財政・法務も含む' }
];

const TIME_OPTIONS = [
  { value: '0', label: '標準', practice: '無制限', test: '難易度別' },
  { value: '30', label: '30秒', practice: '短く練習', test: 'ミニテスト' },
  { value: '60', label: '1分', practice: '軽く練習', test: '基礎向け' },
  { value: '120', label: '2分', practice: 'じっくり', test: '標準向け' },
  { value: '180', label: '3分', practice: '長め', test: '発展向け' },
  { value: '300', label: '5分', practice: '集中', test: '総合練習' }
];

function uniqueCategories() { return ['すべて', ...new Set(terms.map(item => item.category))]; }
function levelLabel(level) { return ['', '基礎', '標準', '発展'][Number(level)] || 'すべて'; }
function shuffle(items) { return [...items].sort(() => Math.random() - 0.5); }

function filteredTerms() {
  const category = els.category.value;
  const level = els.level.value;
  return terms.filter(item => {
    const categoryMatch = category === 'すべて' || item.category === category;
    const levelMatch = level === 'all' || String(item.level) === level;
    return categoryMatch && levelMatch;
  });
}

function testSize() { return TEST_SETTINGS[els.level.value].size; }
function selectedTestSeconds() {
  const selected = Number(els.timer.value);
  return selected > 0 ? selected : TEST_SETTINGS[els.level.value].seconds;
}
function currentAccuracy() {
  if (state.attempts === 0) return 100;
  return Math.max(0, Math.round(((state.attempts - state.misses) / state.attempts) * 100));
}
function currentKpm() {
  const elapsedMinutes = Math.max((Date.now() - state.startedAt) / 60000, 1 / 60);
  return Math.round(state.typedChars / elapsedMinutes);
}
function availableCount() { return filteredTerms().length; }

function showView(viewName) {
  document.querySelectorAll('[data-view]').forEach(section => {
    section.classList.toggle('active', section.dataset.view === viewName);
  });
}

function stopSession() {
  clearInterval(state.timerId);
  state.current = null;
  state.finished = true;
  els.input.disabled = true;
  els.resultPanel.classList.remove('show');
}

function openSetup(mode) {
  stopSession();
  els.mode.value = mode;
  els.setupModeLabel.textContent = mode === 'test' ? 'Test' : 'Practice';
  els.setupTitle.textContent = mode === 'test' ? 'テストを始める' : '練習を始める';
  renderChoiceButtons();
  updateChoiceButtons();
  showView('setup');
}

function selectOption(selectEl, value) { selectEl.value = value; updateChoiceButtons(); }

function renderChoiceButtons() {
  els.categoryChoices.innerHTML = uniqueCategories().map(category => {
    const count = category === 'すべて' ? terms.length : terms.filter(item => item.category === category).length;
    return `<button class="choice-button" type="button" data-choice="category" data-value="${category}">${category}<small>${count}語</small></button>`;
  }).join('');

  els.levelChoices.innerHTML = LEVEL_OPTIONS.map(level =>
    `<button class="choice-button" type="button" data-choice="level" data-value="${level.value}">${level.label}<small>${level.note}</small></button>`
  ).join('');

  els.timeChoices.innerHTML = TIME_OPTIONS.map(time => {
    const note = els.mode.value === 'test' ? time.test : time.practice;
    return `<button class="choice-button" type="button" data-choice="timer" data-value="${time.value}">${time.label}<small>${note}</small></button>`;
  }).join('');

  document.querySelectorAll('[data-choice]').forEach(button => {
    button.addEventListener('click', () => selectOption(els[button.dataset.choice], button.dataset.value));
  });
}

function updateChoiceButtons() {
  if (!els.categoryChoices.innerHTML) renderChoiceButtons();
  if (els.timeChoices.children.length !== TIME_OPTIONS.length) renderChoiceButtons();
  document.querySelectorAll('[data-choice]').forEach(button => {
    button.classList.toggle('selected', els[button.dataset.choice].value === button.dataset.value);
  });
  updateStartSummary();
}

function updateStartSummary() {
  const modeLabel = els.mode.value === 'test' ? 'テスト' : '練習';
  const levelText = LEVEL_OPTIONS.find(level => level.value === els.level.value)?.label || 'すべて';
  const time = TIME_OPTIONS.find(item => item.value === els.timer.value);
  const count = availableCount();
  const timeText = els.mode.value === 'test' && els.timer.value === '0'
    ? `${selectedTestSeconds()}秒`
    : els.mode.value === 'practice' && els.timer.value === '0'
      ? '無制限' : time?.label || '標準';
  els.startSummary.textContent = `${modeLabel} / ${els.category.value} / ${levelText} / ${timeText}`;
  els.startRun.disabled = count === 0;
  els.startHint.textContent = count === 0
    ? 'この組み合わせは出題できる用語がありません。'
    : els.mode.value === 'test'
      ? `${Math.min(testSize(), count)}問、${selectedTestSeconds()}秒でスコアを記録します。`
      : `${count}語から出題します。意味を見ながら、自分のペースで練習します。`;
}

function startSession() {
  clearInterval(state.timerId);
  const pool = shuffle(filteredTerms());
  if (pool.length === 0) { updateStartSummary(); return; }
  state.queue = els.mode.value === 'test' ? pool.slice(0, testSize()) : pool;
  Object.assign(state, { score: 0, attempts: 0, misses: 0, completed: 0, streak: 0, bestStreak: 0, typedChars: 0, startedAt: Date.now(), finished: false });
  state.testSeconds = els.mode.value === 'test' ? selectedTestSeconds() : Number(els.timer.value);
  state.secondsLeft = state.testSeconds;
  els.input.disabled = false;
  els.input.placeholder = '';
  els.resultPanel.classList.remove('show');
  updateStats(); updateTimer(); renderReview(); renderRecords();
  showView('play');
  nextTerm();
  if (state.secondsLeft > 0) {
    state.timerId = setInterval(() => {
      state.secondsLeft -= 1; updateTimer();
      if (state.secondsLeft <= 0) finishSession('時間切れ');
    }, 1000);
  }
}

function nextTerm() {
  if (state.finished) return;
  if (state.queue.length === 0) {
    if (els.mode.value === 'test') { finishSession('テスト完了'); return; }
    state.queue = shuffle(filteredTerms());
  }
  state.current = state.queue.shift();
  els.input.value = '';
  els.input.dataset.previousLength = '0';
  els.input.classList.remove('miss', 'correct');
  els.gameMessage.textContent = els.mode.value === 'test'
    ? `${TEST_SETTINGS[els.level.value].label}テスト: 漢字変換まで合わせて入力します。`
    : '漢字に変換して、用語と同じ文字で入力してください。';
  renderTerm(); renderQueue(); updateGhost(''); els.input.focus();
}

function renderTerm() {
  const item = state.current; if (!item) return;
  els.termCategory.textContent = item.category;
  els.termLevel.textContent = levelLabel(item.level);
  els.reading.textContent = item.reading;
  els.target.textContent = item.term;
  els.termTitle.textContent = item.term;
  els.meaning.textContent = item.meaning;
  els.tagRow.innerHTML = item.tags.map(tag => `<span>${tag}</span>`).join('');
  els.progressBar.style.width = '0%';
}

function renderQueue() {
  const upcoming = state.queue.slice(0, 8);
  els.remainingCount.textContent = `${state.queue.length + (state.current ? 1 : 0)} terms`;
  els.queueList.innerHTML = upcoming.length
    ? upcoming.map(item => `<li><strong>${item.term}</strong> ${item.reading}</li>`).join('')
    : '<li class="empty">ラストです</li>';
}

function renderReview() {
  els.reviewList.innerHTML = state.review.length === 0
    ? '<li class="empty">まだありません</li>'
    : state.review.slice(0, 8).map(item => `<li><strong>${item.term}</strong> ${item.meaning}</li>`).join('');
}

function renderRecords() {
  els.recordList.innerHTML = state.records.length === 0
    ? '<li class="empty">テスト完了後に記録されます</li>'
    : [...state.records].sort((a, b) => b.score - a.score || b.completed - a.completed || b.date - a.date).slice(0, 8).map(record => {
        const date = new Date(record.date).toLocaleDateString('ja-JP', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        return `<li><strong>${record.score}</strong> ${record.levelLabel} ${record.seconds}秒<span class="record-meta">${record.completed}問 / 正確率 ${record.accuracy}% / ${record.kpm} kpm / ${date}</span></li>`;
      }).join('');
}

function updateStats() {
  els.score.textContent = String(state.score);
  els.accuracy.textContent = `${currentAccuracy()}%`;
  els.streak.textContent = String(state.streak);
  els.speed.textContent = String(currentKpm());
}

function updateTimer() {
  if (state.secondsLeft <= 0 && els.mode.value !== 'test') { els.timeLeft.textContent = '--:--'; return; }
  els.timeLeft.textContent = `${String(Math.floor(state.secondsLeft / 60)).padStart(2, '0')}:${String(state.secondsLeft % 60).padStart(2, '0')}`;
}

function finishSession(reason) {
  if (state.finished) return;
  state.finished = true; clearInterval(state.timerId); state.current = null;
  els.input.disabled = true; els.input.value = ''; els.input.placeholder = reason;
  els.progressBar.style.width = '100%'; els.typingGhost.textContent = '';
  const accuracy = currentAccuracy(); const kpm = currentKpm();
  if (els.mode.value === 'test') saveRecord(reason, accuracy, kpm);
  els.resultSummary.textContent = `${reason}: ${state.completed}問完了 / score ${state.score} / 正確率 ${accuracy}% / ${kpm} kpm / 最高コンボ ${state.bestStreak}`;
  els.resultPanel.classList.add('show');
}

function saveRecord(reason, accuracy, kpm) {
  const setting = TEST_SETTINGS[els.level.value];
  const record = { date: Date.now(), reason, score: state.score, completed: state.completed, accuracy, kpm, bestStreak: state.bestStreak, category: els.category.value, level: els.level.value, levelLabel: setting.label, seconds: state.testSeconds };
  state.records = [record, ...state.records].slice(0, 50);
  localStorage.setItem('cityTypingRecords', JSON.stringify(state.records));
  renderRecords();
}

function saveReview(item) {
  state.review = [item, ...state.review.filter(saved => saved.term !== item.term)].slice(0, 30);
  localStorage.setItem('cityTypingReview', JSON.stringify(state.review));
  renderReview();
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[char]);
}

function updateGhost(value) {
  if (!state.current) return;
  const target = state.current.term;
  const wrong = value && !target.startsWith(value) ? `<em>${escapeHtml(value)}</em>` : '';
  els.typingGhost.innerHTML = wrong || `<b>${escapeHtml(target.slice(0, value.length))}</b>${escapeHtml(target.slice(value.length))}`;
}

function handleInput() {
  if (state.composing || !state.current) return;
  const value = els.input.value.trim();
  const target = state.current.term;
  const isPrefix = target.startsWith(value);
  const isComplete = value === target;
  els.progressBar.style.width = `${Math.min(100, Math.round((value.length / target.length) * 100))}%`;
  els.input.classList.toggle('miss', value.length > 0 && !isPrefix);
  els.input.classList.toggle('correct', isComplete);
  updateGhost(value);
  state.attempts += 1;
  state.typedChars += Math.max(0, value.length - (els.input.dataset.previousLength || 0));
  els.input.dataset.previousLength = String(value.length);
  if (!isPrefix) {
    state.misses += 1; state.streak = 0;
    els.gameMessage.textContent = 'ミス。復習リストに入れました。';
    saveReview(state.current); updateStats(); return;
  }
  if (isComplete) {
    state.completed += 1;
    state.score += Math.round((10 + state.current.level * 4 + Math.min(state.streak * 2, 30)) * (els.mode.value === 'test' ? TEST_SETTINGS[els.level.value].multiplier : 1));
    state.streak += 1; state.bestStreak = Math.max(state.bestStreak, state.streak);
    els.input.dataset.previousLength = '0';
    els.gameMessage.textContent = `正解。${state.streak}コンボ`;
    updateStats(); setTimeout(nextTerm, 180); return;
  }
  updateStats();
}

function handleKeydown(event) { if (event.key === 'Enter') { event.preventDefault(); handleInput(); } }

function setupCategoryOptions() {
  els.category.innerHTML = uniqueCategories().map(category => `<option value="${category}">${category}</option>`).join('');
}

setupCategoryOptions(); renderChoiceButtons(); renderReview(); renderRecords(); showView('home');

els.choosePractice.addEventListener('click', () => openSetup('practice'));
els.chooseTest.addEventListener('click', () => openSetup('test'));
els.setupBack.addEventListener('click', () => { stopSession(); showView('home'); });
els.playBack.addEventListener('click', () => { stopSession(); openSetup(els.mode.value); });
els.startRun.addEventListener('click', startSession);
els.input.addEventListener('input', handleInput);
els.input.addEventListener('keydown', handleKeydown);
els.input.addEventListener('compositionstart', () => { state.composing = true; });
els.input.addEventListener('compositionend', () => { state.composing = false; handleInput(); });
els.restart.addEventListener('click', startSession);
els.quickRestart.addEventListener('click', startSession);
els.retryTest.addEventListener('click', startSession);
els.category.addEventListener('change', updateChoiceButtons);
els.level.addEventListener('change', updateChoiceButtons);
els.mode.addEventListener('change', () => openSetup(els.mode.value));
els.timer.addEventListener('change', updateChoiceButtons);
els.clearReview.addEventListener('click', () => { state.review = []; localStorage.removeItem('cityTypingReview'); renderReview(); els.input.focus(); });
els.clearRecords.addEventListener('click', () => { state.records = []; localStorage.removeItem('cityTypingRecords'); renderRecords(); els.input.focus(); });
