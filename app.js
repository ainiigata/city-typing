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
財政・会計|2|款|かん|予算科目の大きな区分。
財政・会計|2|項|こう|款の下にある予算区分。
財政・会計|2|目|もく|項の下にあるさらに細かい予算区分。
財政・会計|2|節|せつ|報酬、旅費、委託料など支出の性質ごとの区分。
財政・会計|1|財源|ざいげん|事業に使うお金の出どころ。
財政・会計|1|一般財源|いっぱんざいげん|使い道が限定されないお金。
財政・会計|1|特定財源|とくていざいげん|国庫補助金など使い道が決まっているお金。
財政・会計|2|国庫支出金|こっこししゅつきん|国から自治体に交付されるお金。
財政・会計|2|県支出金|けんししゅつきん|県から市町村に交付されるお金。
財政・会計|2|地方交付税|ちほうこうふぜい|自治体間の財源差を調整するため国から配られるお金。
財政・会計|1|市税|しぜい|市民税、固定資産税など市の税収。
財政・会計|1|使用料|しようりょう|公共施設などを使う人が支払うお金。
財政・会計|1|手数料|てすうりょう|証明書発行など特定の事務に対して支払うお金。
財政・会計|2|分担金|ぶんたんきん|特定の利益を受ける人が負担するお金。
財政・会計|2|負担金|ふたんきん|事業費の一部を関係者が負担するお金。
財政・会計|2|起債|きさい|自治体が借金をすること。
財政・会計|2|地方債|ちほうさい|自治体が発行する借金。
財政・会計|1|基金|ききん|特定目的のために積み立てる貯金。
財政・会計|2|繰入金|くりいれきん|基金や他会計から入れるお金。
財政・会計|2|繰出金|くりだしきん|一般会計から特別会計などへ出すお金。
財政・会計|2|繰越金|くりこしきん|前年度から翌年度に持ち越すお金。
財政・会計|3|繰越明許費|くりこしめいきょひ|年度内に終わらない見込みの事業費を、議会の議決を得て翌年度に使えるようにする予算。
財政・会計|3|債務負担行為|さいむふたんこうい|将来年度に支払いが発生する契約などを、あらかじめ議会で認めてもらう予算上の仕組み。
財政・会計|3|継続費|けいぞくひ|数年度にわたる大きな事業の総額と年割額を決める予算。
財政・会計|2|流用|りゅうよう|同じ予算内で、別の科目にお金を振り替えること。
財政・会計|1|予備費|よびひ|予想外の支出に備えるための予算。
財政・会計|1|執行|しっこう|予算や事業を実際に進めること。
財政・会計|2|支出負担行為|ししゅつふたんこうい|契約などにより、将来支払い義務を発生させる手続き。
財政・会計|2|支出命令|ししゅつめいれい|支払いを会計担当に命じる手続き。
財政・会計|2|調定|ちょうてい|税や使用料など、収入すべき金額を確定する手続き。
財政・会計|3|収入未済|しゅうにゅうみさい|入る予定だが、まだ納められていないお金。
財政・会計|3|不納欠損|ふのうけっそん|時効などで徴収できなくなった未収金を整理すること。
契約・検査|1|契約|けいやく|業務委託や工事などの約束を正式に結ぶこと。
契約・検査|1|入札|にゅうさつ|複数業者から価格等を出してもらい契約相手を選ぶ方法。
契約・検査|2|一般競争入札|いっぱんきょうそうにゅうさつ|条件を満たす業者が広く参加できる入札。
契約・検査|2|指名競争入札|しめいきょうそうにゅうさつ|自治体が指名した業者で行う入札。
契約・検査|2|随意契約|ずいいけいやく|入札ではなく、特定の相手と契約する方法。
契約・検査|2|予定価格|よていかかく|契約前に自治体が定める上限・基準価格。
契約・検査|1|仕様書|しようしょ|業務内容や条件を具体的に書いた文書。
契約・検査|1|見積書|みつもりしょ|業者が金額を示す書類。
契約・検査|2|請書|うけしょ|簡易な契約で、業者が契約内容を承諾する書類。
契約・検査|1|検査|けんさ|納品物や工事が契約どおりか確認すること。
契約・検査|1|検収|けんしゅう|納品物を確認して受け取ること。
議会・市民対応|1|議案|ぎあん|議会で審議・議決してもらう案件。
議会・市民対応|1|議決|ぎけつ|議会が賛否を決めること。
議会・市民対応|1|採決|さいけつ|議長が賛否をとること。
議会・市民対応|1|質疑|しつぎ|議案について疑問点を質問すること。
議会・市民対応|2|一般質問|いっぱんしつもん|議員が市政全般について質問すること。
議会・市民対応|2|請願|せいがん|議員紹介を通じて議会に要望を出すこと。
議会・市民対応|2|陳情|ちんじょう|議員紹介なしで議会などに要望を出すこと。
議会・市民対応|1|定例会|ていれいかい|定期的に開かれる議会。
議会・市民対応|1|臨時会|りんじかい|必要に応じて臨時に開かれる議会。
議会・市民対応|1|委員会|いいんかい|分野ごとに詳しく審査する場。
議会・市民対応|2|上程|じょうてい|議案を議会の議題にすること。
議会・市民対応|1|可決|かけつ|議案が認められること。
議会・市民対応|1|否決|ひけつ|議案が認められないこと。
議会・市民対応|2|認定|にんてい|決算などを議会が認めること。
議会・市民対応|2|同意|どうい|人事案件などに議会が賛成すること。
議会・市民対応|2|承認|しょうにん|専決処分などを議会が認めること。
財政発展|3|事故繰越|じこくりこし|支出負担行為後、避けがたい事故などで年度内に支出が終わらない場合に翌年度へ繰り越すこと。
財政発展|3|総計予算主義|そうけいよさんしゅぎ|収入と支出を相殺せず、すべて歳入・歳出予算に計上する原則。
財政発展|3|単年度主義|たんねんどしゅぎ|予算は原則として1会計年度ごとに使うという考え方。
財政発展|3|会計年度独立の原則|かいけいねんどどくりつのげんそく|ある年度の支出は、その年度の収入で処理するという原則。
財政発展|2|予算流用|よさんりゅうよう|予算科目間で、決められた範囲内で予算を移すこと。
財政発展|2|予算充用|よさんじゅうよう|予備費などから不足する予算へ充てること。
財政発展|2|執行残|しっこうざん|予算を使った後に残った金額。
財政発展|2|不用額|ふようがく|予算のうち、最終的に使わなかった金額。
財政発展|3|歳計現金|さいけいげんきん|一般会計・特別会計で日々出入りする現金。
財政発展|3|一時借入金|いちじかりいれきん|一時的な資金不足を補うために短期で借りるお金。
財政発展|2|財政調整基金|ざいせいちょうせいききん|災害や税収減などに備える自治体の貯金。
財政発展|2|減債基金|げんさいききん|地方債の返済に備えて積み立てる基金。
財政発展|2|特定目的基金|とくていもくてきききん|公共施設整備など、特定目的のための基金。
財政発展|3|実質収支|じっしつしゅうし|歳入歳出差引額から翌年度へ繰り越す財源を除いた収支。
財政発展|3|単年度収支|たんねんどしゅうし|その年度だけで見た実質収支の増減。
財政発展|3|実質単年度収支|じっしつたんねんどしゅうし|単年度収支に基金積立や地方債繰上償還などを加味した収支。
財政発展|3|経常収支比率|けいじょうしゅうしひりつ|毎年必要な経費が、自由に使える財源をどれだけ圧迫しているかを見る指標。
財政発展|3|実質公債費比率|じっしつこうさいひひりつ|借金返済の負担が財政規模に対してどれくらい重いかを見る指標。
財政発展|3|将来負担比率|しょうらいふたんひりつ|将来支払う可能性のある負担が、財政規模に対してどれくらいあるかを見る指標。
財政発展|3|健全化判断比率|けんぜんかはんだんひりつ|自治体財政の健全性を判断するための複数の財政指標。
財政発展|3|資金不足比率|しきんぶそくひりつ|公営企業会計の資金不足の程度を示す指標。
財政発展|3|標準財政規模|ひょうじゅんざいせいきぼ|自治体が通常使える一般財源の標準的な規模。
財政発展|3|基準財政需要額|きじゅんざいせいじゅようがく|標準的な行政サービスに必要とされる財政需要の額。
財政発展|3|基準財政収入額|きじゅんざいせいしゅうにゅうがく|標準的に見込まれる税収などの額。
財政発展|3|財政力指数|ざいせいりょくしすう|自治体の財政力を示す指標。高いほど自主財源に余裕がある。
財政発展|2|自主財源|じしゅざいげん|市税、使用料、手数料など自治体が自主的に得る財源。
財政発展|2|依存財源|いぞんざいげん|地方交付税、国庫支出金、地方債など国や県などに依存する財源。
財政発展|2|義務的経費|ぎむてきけいひ|人件費、扶助費、公債費など、削減しにくい経費。
財政発展|2|投資的経費|とうしてきけいひ|道路、学校、施設整備など将来に残るものに使う経費。
財政発展|2|扶助費|ふじょひ|生活保護、児童福祉、障がい福祉など福祉的給付に使う経費。
財政発展|2|公債費|こうさいひ|地方債の元金・利子を返済するための経費。
財政発展|2|補助費等|ほじょひとう|団体への補助金、負担金、報償費などの経費区分。
財政発展|2|物件費|ぶっけんひ|消耗品、委託料、光熱水費など物品・サービスに使う経費。
財政発展|2|維持補修費|いじほしゅうひ|道路や施設などを維持・修繕する経費。
法務・監査|3|法定受託事務|ほうていじゅたくじむ|本来は国や県の事務だが、法律により市町村が処理する事務。
法務・監査|3|自治事務|じちじむ|自治体が自らの責任で処理する事務。
法務・監査|3|機関委任事務|きかんいにんじむ|かつて国の事務を首長に委任していた制度。現在は廃止された。
法務・監査|3|法定外公共物|ほうていがいこうきょうぶつ|里道・水路など、道路法や河川法の対象外の公共物。
法務・監査|2|行政財産|ぎょうせいざいさん|庁舎、学校、公園など行政目的で使う公有財産。
法務・監査|2|普通財産|ふつうざいさん|行政目的に直接使っていない公有財産。売却や貸付の対象になりやすい。
法務・監査|2|指定管理者制度|していかんりしゃせいど|公の施設の管理を民間団体などに任せる制度。
法務・監査|2|公の施設|おおやけのしせつ|住民の利用に供するため自治体が設置する施設。体育館、公民館など。
法務・監査|2|行政処分|ぎょうせいしょぶん|許可、認可、取消し、命令など、行政庁が法的効果を発生させる行為。
法務・監査|3|不利益処分|ふりえきしょぶん|許可取消し、営業停止など相手に不利益を与える行政処分。
法務・監査|3|申請に対する処分|しんせいにたいするしょぶん|住民や事業者からの申請に対して、許可・不許可などを決めること。
法務・監査|3|審査基準|しんさきじゅん|申請を許可するかどうか判断するための基準。
法務・監査|3|処分基準|しょぶんきじゅん|不利益処分などを行う際の判断基準。
法務・監査|3|標準処理期間|ひょうじゅんしょりきかん|申請を受けてから処分するまでの標準的な期間。
法務・監査|2|行政指導|ぎょうせいしどう|助言、指導、勧告など、強制ではない形で相手に対応を求めること。
法務・監査|3|聴聞|ちょうもん|不利益処分の前に、相手方に意見を述べる機会を与える手続き。
法務・監査|3|弁明の機会の付与|べんめいのきかいのふよ|不利益処分の前に、相手に言い分を出してもらう手続き。
法務・監査|3|行政不服審査|ぎょうせいふふくしんさ|行政処分に不服がある場合に、行政機関へ見直しを求める制度。
法務・監査|3|審査請求|しんさせいきゅう|行政処分などに対し、不服を申し立てる手続き。
法務・監査|3|行政事件訴訟|ぎょうせいじけんそしょう|行政処分の取消しなどを裁判所に求める訴訟。
法務・監査|3|取消訴訟|とりけしそしょう|行政処分の取消しを求める裁判。
法務・監査|3|国家賠償|こっかばいしょう|公務員の違法行為などで損害が出た場合に、国や自治体が賠償する制度。
法務・監査|3|住民監査請求|じゅうみんかんさせいきゅう|違法・不当な公金支出などについて、住民が監査委員に監査を求める制度。
法務・監査|3|住民訴訟|じゅうみんそしょう|住民監査請求の結果に不服がある場合などに、住民が裁判で争う制度。
法務・監査|3|包括外部監査|ほうかつがいぶかんさ|外部の専門家が自治体の財務事務などを監査する制度。
法務・監査|3|個別外部監査|こべつがいぶかんさ|特定の案件について外部監査人が行う監査。
法務・監査|2|監査委員|かんさいいん|自治体の財務や事務が適正かをチェックする機関。
法務・監査|3|例月出納検査|れいげつすいとうけんさ|毎月、現金の出納が正しいか確認する監査。
法務・監査|2|定期監査|ていきかんさ|毎年度など定期的に行う事務・財務の監査。
法務・監査|2|随時監査|ずいじかんさ|必要があるときに随時行う監査。
契約・検査|3|指名停止|しめいていし|不正や事故などを起こした業者を、一定期間入札に参加させない措置。
契約・検査|2|入札参加資格|にゅうさつさんかしかく|入札に参加できる業者としての資格。
契約・検査|3|総合評価落札方式|そうごうひょうからくさつほうしき|価格だけでなく技術力や提案内容も評価して落札者を決める方式。
契約・検査|3|最低制限価格|さいていせいげんかかく|ダンピング防止のため、これを下回る入札を失格にする価格。
契約・検査|3|低入札価格調査|ていにゅうさつかかくちょうさ|極端に低い入札額でも適正に履行できるか調べること。
契約・検査|2|プロポーザル方式|ぷろぽーざるほうしき|価格だけでなく企画提案の内容で事業者を選ぶ方式。
契約・検査|2|企画提案書|きかくていあんしょ|プロポーザルなどで事業者が提出する提案書。
契約・検査|2|仕様発注|しようはっちゅう|仕様を細かく定めて、その通りに実施してもらう発注方式。
契約・検査|3|性能発注|せいのうはっちゅう|達成すべき性能や成果を示し、方法は事業者に任せる発注方式。
契約・検査|3|瑕疵担保責任|かしたんぽせきにん|旧民法で使われた、欠陥があった場合の責任。現在は契約不適合責任という考え方に移行。
契約・検査|3|契約不適合責任|けいやくふてきごうせきにん|納品物や成果物が契約内容に合っていない場合の責任。
議会・市民対応|3|専決処分|せんけつしょぶん|議会の議決が必要な案件について、緊急時などに市長が先に処理すること。後で議会への報告や承認が必要。
`;

const terms = RAW_TERMS.trim()
  .split("\n")
  .map((line) => {
    const [category, level, term, reading, meaning] = line.split("|");
    return {
      category,
      level: Number(level),
      term,
      reading,
      meaning,
      tags: [category, ["", "基礎", "標準", "発展"][Number(level)]]
    };
  })
  .reduce((unique, item) => {
    if (!unique.some((saved) => saved.term === item.term)) unique.push(item);
    return unique;
  }, []);

const RANKS = [
  { min: 0,    label: "書類迷子",     emoji: "📄", desc: "まだ役所の中で迷っています…" },
  { min: 60,   label: "窓口見習い",   emoji: "🪟", desc: "窓口に立てるようになってきた" },
  { min: 150,  label: "ハンコ係",     emoji: "🔴", desc: "ハンコをきれいに押せます" },
  { min: 270,  label: "事務係員",     emoji: "📋", desc: "書類を読んで処理できる" },
  { min: 420,  label: "主事補",       emoji: "🗂️", desc: "仕事が板についてきた" },
  { min: 600,  label: "主事",         emoji: "🏛️", desc: "一人前の地方公務員" },
  { min: 810,  label: "主任",         emoji: "⭐",  desc: "後輩から頼られる存在" },
  { min: 1050, label: "係長補佐",     emoji: "⭐⭐", desc: "係を縁の下から支える" },
  { min: 1320, label: "係長",         emoji: "⭐⭐⭐", desc: "係のまとめ役" },
  { min: 1620, label: "課長補佐",     emoji: "🏆",  desc: "課の方針を作る側へ" },
  { min: 1950, label: "課長",         emoji: "🏆🏆", desc: "課を率いるリーダー" },
  { min: 2310, label: "部長",         emoji: "👑",  desc: "複数の課を統括する" },
  { min: 2700, label: "局長",         emoji: "👑👑", desc: "局の頂点に立つ" },
  { min: 3120, label: "副市長",       emoji: "🗳️",  desc: "市政の最重要人物" },
  { min: 3570, label: "市長",         emoji: "🎖️",  desc: "市民が選んだトップ" },
  { min: 4050, label: "県知事",       emoji: "🎖️🎖️", desc: "県全体を統べる" },
  { min: 4560, label: "大臣",         emoji: "🌟",  desc: "国政の担い手" },
  { min: 5100, label: "総理大臣",     emoji: "💫",  desc: "国家の最高責任者" },
  { min: 5670, label: "伝説の公務員", emoji: "⚡",  desc: "語り継がれる行政の達人" },
  { min: 6270, label: "行政の神",     emoji: "🔱",  desc: "もはや神の領域。敬礼。" }
];

function getRank(score) {
  let idx = 0;
  for (let i = 0; i < RANKS.length; i++) {
    if (score >= RANKS[i].min) idx = i;
    else break;
  }
  return { rank: RANKS[idx], idx };
}

function showRankReveal(score) {
  const { rank, idx } = getRank(score);
  const scaleEl = document.getElementById("rankScale");
  const badgeEl = document.getElementById("rankBadge");
  if (!scaleEl || !badgeEl) return;

  document.getElementById("rankEmoji").textContent = rank.emoji;
  document.getElementById("rankName").textContent = rank.label;
  document.getElementById("rankDesc").textContent = rank.desc;
  document.getElementById("rankPosition").textContent = String(idx + 1);

  while (scaleEl.firstChild) scaleEl.removeChild(scaleEl.firstChild);
  RANKS.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "rank-dot" + (i < idx ? " filled" : "") + (i === idx ? " current" : "");
    if (i <= idx) dot.style.opacity = "0";
    scaleEl.appendChild(dot);
  });

  badgeEl.classList.remove("show");
  void badgeEl.offsetWidth;
  setTimeout(() => badgeEl.classList.add("show"), 350);

  scaleEl.querySelectorAll(".rank-dot").forEach((dot, i) => {
    if (i <= idx) {
      setTimeout(() => { dot.style.opacity = "1"; }, 620 + i * 44);
    }
  });
}

const TEST_SETTINGS = {
  all: { label: "総合", seconds: 180, size: 40, multiplier: 1 },
  1: { label: "基礎", seconds: 60, size: 20, multiplier: 1 },
  2: { label: "標準", seconds: 120, size: 25, multiplier: 1.25 },
  3: { label: "発展", seconds: 180, size: 30, multiplier: 1.55 }
};

const state = {
  queue: [],
  current: null,
  score: 0,
  attempts: 0,
  misses: 0,
  completed: 0,
  streak: 0,
  bestStreak: 0,
  typedChars: 0,
  timerId: null,
  startedAt: 0,
  secondsLeft: 0,
  testSeconds: 0,
  finished: false,
  composing: false,
  review: JSON.parse(localStorage.getItem("cityTypingReview") || "[]"),
  records: JSON.parse(localStorage.getItem("cityTypingRecords") || "[]")
};

const els = {
  homeScreen: document.querySelector("#homeScreen"),
  setupScreen: document.querySelector("#setupScreen"),
  playActions: document.querySelector("#playActions"),
  practiceZone: document.querySelector("#practiceZone"),
  lowerGrid: document.querySelector("#lowerGrid"),
  choosePractice: document.querySelector("#choosePractice"),
  chooseTest: document.querySelector("#chooseTest"),
  setupBack: document.querySelector("#setupBack"),
  playBack: document.querySelector("#playBack"),
  quickRestart: document.querySelector("#quickRestart"),
  setupModeLabel: document.querySelector("#setupModeLabel"),
  setupTitle: document.querySelector("#setupTitle"),
  categoryChoices: document.querySelector("#categoryChoices"),
  levelChoices: document.querySelector("#levelChoices"),
  timeChoices: document.querySelector("#timeChoices"),
  startSummary: document.querySelector("#startSummary"),
  startHint: document.querySelector("#startHint"),
  startRun: document.querySelector("#startRun"),
  category: document.querySelector("#category"),
  level: document.querySelector("#level"),
  mode: document.querySelector("#mode"),
  timer: document.querySelector("#timer"),
  restart: document.querySelector("#restart"),
  score: document.querySelector("#score"),
  accuracy: document.querySelector("#accuracy"),
  streak: document.querySelector("#streak"),
  speed: document.querySelector("#speed"),
  termCategory: document.querySelector("#termCategory"),
  termLevel: document.querySelector("#termLevel"),
  reading: document.querySelector("#reading"),
  target: document.querySelector("#target"),
  typingGhost: document.querySelector("#typingGhost"),
  progressBar: document.querySelector("#progressBar"),
  input: document.querySelector("#typingInput"),
  timeLeft: document.querySelector("#timeLeft"),
  termTitle: document.querySelector("#termTitle"),
  meaning: document.querySelector("#meaning"),
  gameMessage: document.querySelector("#gameMessage"),
  tagRow: document.querySelector("#tagRow"),
  resultPanel: document.querySelector("#resultPanel"),
  resultSummary: document.querySelector("#resultSummary"),
  retryTest: document.querySelector("#retryTest"),
  remainingCount: document.querySelector("#remainingCount"),
  queueList: document.querySelector("#queueList"),
  reviewList: document.querySelector("#reviewList"),
  clearReview: document.querySelector("#clearReview"),
  recordList: document.querySelector("#recordList"),
  clearRecords: document.querySelector("#clearRecords"),
  comboDisplay: document.querySelector("#comboDisplay")
};

function spawnScoreFloat(pts) {
  const el = document.createElement("div");
  el.className = "score-float";
  el.textContent = `+${pts}`;
  el.style.setProperty("--x", `${25 + Math.random() * 50}%`);
  document.querySelector(".term-panel").appendChild(el);
  el.addEventListener("animationend", () => el.remove());
}

function showCombo(streak) {
  const el = els.comboDisplay;
  if (!el) return;
  const labels = ["", "", "", "NICE!", "GREAT!", "AMAZING!", "SUPER!!",
                  "ULTRA!!", "HYPER!!", "LEGEND!!", "🔥 GODLIKE!!"];
  el.textContent = streak >= 10 ? `🔥 ${streak} COMBO!!`
    : `${labels[streak] || ""} ${streak} COMBO!`;
  el.classList.remove("show");
  void el.offsetWidth;
  el.classList.add("show");
}

function shakeTerm() {
  const panel = document.querySelector(".term-panel");
  if (!panel) return;
  panel.classList.remove("shake");
  void panel.offsetWidth;
  panel.classList.add("shake");
  panel.addEventListener("animationend", () => panel.classList.remove("shake"), { once: true });
}

function setBodyComboLevel(streak) {
  document.body.dataset.combo = streak >= 10 ? "max" : streak >= 5 ? "high" : streak >= 3 ? "mid" : "";
}

const LEVEL_OPTIONS = [
  { value: "all", label: "すべて", note: "全レベルを混ぜる" },
  { value: "1", label: "基礎", note: "よく見る基本語" },
  { value: "2", label: "標準", note: "実務で使う語" },
  { value: "3", label: "発展", note: "財政・法務も含む" }
];

const TIME_OPTIONS = [
  { value: "0", label: "標準", practice: "無制限", test: "難易度別" },
  { value: "30", label: "30秒", practice: "短く練習", test: "ミニテスト" },
  { value: "60", label: "1分", practice: "軽く練習", test: "基礎向け" },
  { value: "120", label: "2分", practice: "じっくり", test: "標準向け" },
  { value: "180", label: "3分", practice: "長め", test: "発展向け" },
  { value: "300", label: "5分", practice: "集中", test: "総合練習" }
];

function uniqueCategories() {
  return ["すべて", ...new Set(terms.map((item) => item.category))];
}

function levelLabel(level) {
  return ["", "基礎", "標準", "発展"][Number(level)] || "すべて";
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function filteredTerms() {
  const category = els.category.value;
  const level = els.level.value;
  return terms.filter((item) => {
    const categoryMatch = category === "すべて" || item.category === category;
    const levelMatch = level === "all" || String(item.level) === level;
    return categoryMatch && levelMatch;
  });
}

function testSize() {
  return TEST_SETTINGS[els.level.value].size;
}

function selectedTestSeconds() {
  const selected = Number(els.timer.value);
  if (selected > 0) return selected;
  return TEST_SETTINGS[els.level.value].seconds;
}

function currentAccuracy() {
  if (state.attempts === 0) return 100;
  return Math.max(0, Math.round(((state.attempts - state.misses) / state.attempts) * 100));
}

function currentKpm() {
  const elapsedMinutes = Math.max((Date.now() - state.startedAt) / 60000, 1 / 60);
  return Math.round(state.typedChars / elapsedMinutes);
}

function availableCount() {
  return filteredTerms().length;
}

function showView(viewName) {
  document.querySelectorAll("[data-view]").forEach((section) => {
    section.classList.toggle("active", section.dataset.view === viewName);
  });
}

function stopSession() {
  clearInterval(state.timerId);
  state.current = null;
  state.finished = true;
  els.input.disabled = true;
  els.resultPanel.classList.remove("show");
}

function openSetup(mode) {
  stopSession();
  els.mode.value = mode;
  els.setupModeLabel.textContent = mode === "test" ? "Test" : "Practice";
  els.setupTitle.textContent = mode === "test" ? "テストを始める" : "練習を始める";
  renderChoiceButtons();
  updateChoiceButtons();
  showView("setup");
}

function selectOption(selectEl, value) {
  selectEl.value = value;
  updateChoiceButtons();
}

function renderChoiceButtons() {
  els.categoryChoices.textContent = "";
  uniqueCategories().forEach((category) => {
    const count = category === "すべて" ? terms.length : terms.filter((item) => item.category === category).length;
    const btn = document.createElement("button");
    btn.className = "choice-button";
    btn.type = "button";
    btn.dataset.choice = "category";
    btn.dataset.value = category;
    btn.textContent = category;
    const small = document.createElement("small");
    small.textContent = count + "語";
    btn.appendChild(small);
    btn.addEventListener("click", () => selectOption(els.category, category));
    els.categoryChoices.appendChild(btn);
  });

  els.levelChoices.textContent = "";
  LEVEL_OPTIONS.forEach((level) => {
    const btn = document.createElement("button");
    btn.className = "choice-button";
    btn.type = "button";
    btn.dataset.choice = "level";
    btn.dataset.value = level.value;
    btn.textContent = level.label;
    const small = document.createElement("small");
    small.textContent = level.note;
    btn.appendChild(small);
    btn.addEventListener("click", () => selectOption(els.level, level.value));
    els.levelChoices.appendChild(btn);
  });

  els.timeChoices.textContent = "";
  TIME_OPTIONS.forEach((time) => {
    const note = els.mode.value === "test" ? time.test : time.practice;
    const btn = document.createElement("button");
    btn.className = "choice-button";
    btn.type = "button";
    btn.dataset.choice = "timer";
    btn.dataset.value = time.value;
    btn.textContent = time.label;
    const small = document.createElement("small");
    small.textContent = note;
    btn.appendChild(small);
    btn.addEventListener("click", () => selectOption(els.timer, time.value));
    els.timeChoices.appendChild(btn);
  });
}

function updateChoiceButtons() {
  if (!els.categoryChoices.firstChild) renderChoiceButtons();
  if (els.timeChoices.children.length !== TIME_OPTIONS.length) renderChoiceButtons();
  document.querySelectorAll("[data-choice]").forEach((button) => {
    const target = button.dataset.choice;
    button.classList.toggle("selected", els[target].value === button.dataset.value);
  });
  updateStartSummary();
}

function updateStartSummary() {
  const modeLabel = els.mode.value === "test" ? "テスト" : "練習";
  const levelText = LEVEL_OPTIONS.find((level) => level.value === els.level.value)?.label || "すべて";
  const time = TIME_OPTIONS.find((item) => item.value === els.timer.value);
  const count = availableCount();
  const plannedSize = Math.min(testSize(), count);
  const timeText =
    els.mode.value === "test" && els.timer.value === "0"
      ? `${selectedTestSeconds()}秒`
      : els.mode.value === "practice" && els.timer.value === "0"
        ? "無制限"
        : time?.label || "標準";
  els.startSummary.textContent = `${modeLabel} / ${els.category.value} / ${levelText} / ${timeText}`;
  els.startRun.disabled = count === 0;
  if (count === 0) {
    els.startHint.textContent = "この組み合わせは出題できる用語がありません。分野か難易度を変えてください。";
    return;
  }
  els.startHint.textContent =
    els.mode.value === "test"
      ? `${plannedSize}問、${selectedTestSeconds()}秒でスコアを記録します。`
      : `${count}語から出題します。意味を見ながら、自分のペースで練習します。`;
}

function startSession() {
  clearInterval(state.timerId);
  const pool = shuffle(filteredTerms());
  if (pool.length === 0) {
    updateStartSummary();
    return;
  }
  state.queue = els.mode.value === "test" ? pool.slice(0, testSize()) : pool;
  state.score = 0;
  state.attempts = 0;
  state.misses = 0;
  state.completed = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.typedChars = 0;
  state.startedAt = Date.now();
  state.finished = false;
  state.testSeconds = els.mode.value === "test" ? selectedTestSeconds() : Number(els.timer.value);
  state.secondsLeft = state.testSeconds;
  els.input.disabled = false;
  els.input.placeholder = "";
  els.resultPanel.classList.remove("show");
  updateStats();
  updateTimer();
  renderReview();
  renderRecords();
  showView("play");
  nextTerm();

  if (state.secondsLeft > 0) {
    state.timerId = setInterval(() => {
      state.secondsLeft -= 1;
      updateTimer();
      if (state.secondsLeft <= 0) finishSession("時間切れ");
    }, 1000);
  }
}

function nextTerm() {
  if (state.finished) return;
  if (state.queue.length === 0) {
    if (els.mode.value === "test") {
      finishSession("テスト完了");
      return;
    }
    state.queue = shuffle(filteredTerms());
  }

  state.current = state.queue.shift();
  els.input.value = "";
  els.input.dataset.previousLength = "0";
  els.input.classList.remove("miss", "correct");
  els.gameMessage.textContent =
    els.mode.value === "test"
      ? `${TEST_SETTINGS[els.level.value].label}テスト: 漢字変換まで合わせて入力します。`
      : "漢字に変換して、用語と同じ文字で入力してください。";
  renderTerm();
  renderQueue();
  updateGhost("");
  els.input.focus();
}

function renderTerm() {
  const item = state.current;
  if (!item) return;

  els.termCategory.textContent = item.category;
  els.termLevel.textContent = levelLabel(item.level);
  els.reading.textContent = item.reading;
  els.target.textContent = item.term;
  els.termTitle.textContent = item.term;
  els.meaning.textContent = item.meaning;
  els.tagRow.textContent = "";
  item.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.textContent = tag;
    els.tagRow.appendChild(span);
  });
  els.progressBar.style.width = "0%";
}

function renderQueue() {
  const upcoming = state.queue.slice(0, 8);
  const count = state.queue.length + (state.current ? 1 : 0);
  els.remainingCount.textContent = `${count} terms`;
  els.queueList.textContent = "";
  if (upcoming.length === 0) {
    const li = document.createElement("li");
    li.className = "empty";
    li.textContent = "ラストです";
    els.queueList.appendChild(li);
  } else {
    upcoming.forEach((item) => {
      const li = document.createElement("li");
      const strong = document.createElement("strong");
      strong.textContent = item.term;
      li.appendChild(strong);
      li.append(" " + item.reading);
      els.queueList.appendChild(li);
    });
  }
}

function renderReview() {
  els.reviewList.textContent = "";
  if (state.review.length === 0) {
    const li = document.createElement("li");
    li.className = "empty";
    li.textContent = "まだありません";
    els.reviewList.appendChild(li);
    return;
  }
  state.review.slice(0, 8).forEach((item) => {
    const li = document.createElement("li");
    const strong = document.createElement("strong");
    strong.textContent = item.term;
    li.appendChild(strong);
    li.append(" " + item.meaning);
    els.reviewList.appendChild(li);
  });
}

function renderRecords() {
  els.recordList.textContent = "";
  if (state.records.length === 0) {
    const li = document.createElement("li");
    li.className = "empty";
    li.textContent = "テスト完了後に記録されます";
    els.recordList.appendChild(li);
    return;
  }
  [...state.records]
    .sort((a, b) => b.score - a.score || b.completed - a.completed || b.date - a.date)
    .slice(0, 8)
    .forEach((record) => {
      const date = new Date(record.date).toLocaleDateString("ja-JP", {
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
      const li = document.createElement("li");
      const strong = document.createElement("strong");
      strong.textContent = record.score;
      li.appendChild(strong);
      li.append(` ${record.levelLabel} ${record.seconds}秒`);
      const meta = document.createElement("span");
      meta.className = "record-meta";
      meta.textContent = `${record.completed}問 / 正確率 ${record.accuracy}% / ${record.kpm} kpm / ${date}`;
      li.appendChild(meta);
      els.recordList.appendChild(li);
    });
}

function updateStats() {
  els.score.textContent = String(state.score);
  els.accuracy.textContent = `${currentAccuracy()}%`;
  els.streak.textContent = String(state.streak);
  els.speed.textContent = String(currentKpm());
}

function updateTimer() {
  if (state.secondsLeft <= 0 && els.mode.value !== "test") {
    els.timeLeft.textContent = "--:--";
    return;
  }
  const minutes = String(Math.floor(state.secondsLeft / 60)).padStart(2, "0");
  const seconds = String(state.secondsLeft % 60).padStart(2, "0");
  els.timeLeft.textContent = `${minutes}:${seconds}`;
}

function finishSession(reason) {
  if (state.finished) return;
  state.finished = true;
  clearInterval(state.timerId);
  state.current = null;
  els.input.disabled = true;
  els.input.value = "";
  els.input.placeholder = reason;
  els.progressBar.style.width = "100%";
  els.typingGhost.textContent = "";
  const accuracy = currentAccuracy();
  const kpm = currentKpm();
  if (els.mode.value === "test") saveRecord(reason, accuracy, kpm);
  setBodyComboLevel(0);
  els.resultSummary.textContent = `${reason} — ${state.completed}問 / ${state.score}pts / 正確率${accuracy}% / ${kpm}kpm / 最高${state.bestStreak}コンボ`;
  els.resultPanel.classList.add("show");
  showRankReveal(state.score);
}

function saveRecord(reason, accuracy, kpm) {
  const setting = TEST_SETTINGS[els.level.value];
  const record = {
    date: Date.now(),
    reason,
    score: state.score,
    completed: state.completed,
    accuracy,
    kpm,
    bestStreak: state.bestStreak,
    category: els.category.value,
    level: els.level.value,
    levelLabel: setting.label,
    seconds: state.testSeconds
  };
  state.records = [record, ...state.records].slice(0, 50);
  localStorage.setItem("cityTypingRecords", JSON.stringify(state.records));
  renderRecords();
}

function saveReview(item) {
  const next = [item, ...state.review.filter((saved) => saved.term !== item.term)];
  state.review = next.slice(0, 30);
  localStorage.setItem("cityTypingReview", JSON.stringify(state.review));
  renderReview();
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char];
  });
}

function updateGhost(value) {
  if (!state.current) return;
  const target = state.current.term;
  const typed = escapeHtml(target.slice(0, value.length));
  const rest = escapeHtml(target.slice(value.length));
  const wrong = value && !target.startsWith(value) ? `<em>${escapeHtml(value)}</em>` : "";
  els.typingGhost.innerHTML = wrong || `<b>${typed}</b>${rest}`;
}

function handleInput() {
  if (state.composing) return;
  if (!state.current) return;

  const value = els.input.value.trim();
  const target = state.current.term;
  const isPrefix = target.startsWith(value);
  const isComplete = value === target;
  const progress = Math.min(100, Math.round((value.length / target.length) * 100));

  els.progressBar.style.width = `${progress}%`;
  els.input.classList.toggle("miss", value.length > 0 && !isPrefix);
  els.input.classList.toggle("correct", isComplete);
  updateGhost(value);

  state.attempts += 1;
  state.typedChars += Math.max(0, value.length - (els.input.dataset.previousLength || 0));
  els.input.dataset.previousLength = String(value.length);

  if (!isPrefix) {
    state.misses += 1;
    state.streak = 0;
    els.gameMessage.textContent = "ミス。復習リストに入れました。";
    saveReview(state.current);
    shakeTerm();
    setBodyComboLevel(0);
    updateStats();
    return;
  }

  if (isComplete) {
    state.completed += 1;
    const multiplier = els.mode.value === "test" ? TEST_SETTINGS[els.level.value].multiplier : 1;
    const earned = Math.round((10 + state.current.level * 4 + Math.min(state.streak * 2, 30)) * multiplier);
    state.score += earned;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    els.input.dataset.previousLength = "0";
    els.gameMessage.textContent = `正解。${state.streak}コンボ`;
    spawnScoreFloat(earned);
    if (state.streak >= 3) showCombo(state.streak);
    setBodyComboLevel(state.streak);
    updateStats();
    setTimeout(nextTerm, 180);
    return;
  }

  updateStats();
}

function handleKeydown(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    handleInput();
  }
}

function setupCategoryOptions() {
  els.category.textContent = "";
  uniqueCategories().forEach((category) => {
    const opt = document.createElement("option");
    opt.value = category;
    opt.textContent = category;
    els.category.appendChild(opt);
  });
}

setupCategoryOptions();
renderChoiceButtons();
renderReview();
renderRecords();
showView("home");

els.choosePractice.addEventListener("click", () => openSetup("practice"));
els.chooseTest.addEventListener("click", () => openSetup("test"));
els.setupBack.addEventListener("click", () => {
  stopSession();
  showView("home");
});
els.playBack.addEventListener("click", () => {
  stopSession();
  openSetup(els.mode.value);
});
els.startRun.addEventListener("click", startSession);
els.input.addEventListener("input", handleInput);
els.input.addEventListener("keydown", handleKeydown);
els.input.addEventListener("compositionstart", () => {
  state.composing = true;
});
els.input.addEventListener("compositionend", () => {
  state.composing = false;
  handleInput();
});
els.restart.addEventListener("click", startSession);
els.quickRestart.addEventListener("click", startSession);
els.retryTest.addEventListener("click", startSession);
els.category.addEventListener("change", updateChoiceButtons);
els.level.addEventListener("change", updateChoiceButtons);
els.mode.addEventListener("change", () => openSetup(els.mode.value));
els.timer.addEventListener("change", updateChoiceButtons);
els.clearReview.addEventListener("click", () => {
  state.review = [];
  localStorage.removeItem("cityTypingReview");
  renderReview();
  els.input.focus();
});
els.clearRecords.addEventListener("click", () => {
  state.records = [];
  localStorage.removeItem("cityTypingRecords");
  renderRecords();
  els.input.focus();
});
