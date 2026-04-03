export type Language = 'ja' | 'zh' | 'en';

export const translations = {
  ja: {
    nav: {
      overview: '物件概要',
      revenue: '収益シミュレーション',
      prospects: '展望',
      gallery: 'ギャラリー',
      contact: 'お問い合わせ'
    },
    hero: {
      title: '登別山静館',
      subtitle: '登別カルルス温泉郷にある山あいの静かな湯宿',
      priceLabel: '販売価格',
      price: '2億5,000',
      currency: '万円',
      location: '北海道登別市カルルス町',
      capacity: '客室17室（最大43名収容）',
      hotspring: '源泉かけ流し100%'
    },
    highlights: {
      title: '極めて高い投資価値',
      subtitle: '本物件は、以下の点から非常に魅力的な投資機会となっております。',
      items: [
        {
          title: '資産性',
          desc: '自社温泉所有で2億5,000万円は非常に割安な価格設定です。'
        },
        {
          title: '高評価',
          desc: 'Google口コミ4.0。泉質と料理で既に確固たる評判を確立済みです。'
        },
        {
          title: '収益性',
          desc: '17室（最大43名）稼働で、年間売上1億円超のポテンシャルを秘めています。'
        }
      ]
    },
    overview: {
      title: '物件概要',
      landTitle: '土地情報',
      buildingTitle: '建物情報',
      land: [
        { label: '登別市カルルス町16番9（宅地）', value: '944.10㎡', sub: '（所有者：有限会社 山静館）' },
        { label: '登別市カルルス町16番10（宅地）', value: '320.21㎡', sub: '（所有者：有限会社 山静館）' }
      ],
      totalLand: { label: '地積合計', value: '1,264.31㎡（約382坪）' },
      building: [
        { label: '家屋番号', value: '16番2の5' },
        { label: '種類・構造', value: '旅館 / 木造亜鉛メッキ鋼板葺2階建' },
        { label: '登記床面積', value: '1階：580.63㎡\n2階：503.50㎡\n延床面積：1,084.13㎡' },
        { label: '建築時期', value: '昭和38年新築\n（以降、S51、S55、S63年に増築）' },
        { label: '所有者', value: '有限会社 山静館' }
      ]
    },
    history: {
      title: 'リフォーム・工事等履歴',
      subtitle: '直近5年間で主要なインフラ・共用部の改修が実施されています。',
      items: [
        { year: '2020年', events: ['自動ドアを非接触装置へ変更'] },
        { year: '2021年', events: ['別館 外壁耐震壁工事', '大広間 改修（畳から絨毯への変更、基礎補強工事、内窓の複層ガラス化、全クロス張替、床下24時間換気システム導入）', '脱衣室 床の絨毯敷きへ改修', 'Wi-Fi新規設置（光回線開通に伴う）'] },
        { year: '2024年', events: ['男女内風呂 ペンキ塗り替え', '浴室棟 屋根張替、南側外壁改修工事'] },
        { year: '2025年', events: ['5月：調理場ボイラーを新規購入'] },
        { year: '随時', events: ['客室の畳張替'] }
      ]
    },
    revenue: {
      title: '収益シミュレーション',
      subtitle: '最大定員（43名）活用時の売上ポテンシャルです。',
      basicTitle: '基本設定',
      basicItems: [
        { label: '全17室', value: '最大43名収容' },
        { label: '単価（素泊まり・税別）', value: '10,000円 ※現状維持' },
        { label: '営業日数', value: '年間336日（月2回休館）' },
        { label: '目標稼働率', value: '75%' }
      ],
      calcTitle: '計算式',
      calcSteps: [
        { label: '1. 最大キャパシティ', value: '43名 × 336日 = 14,448名/年' },
        { label: '2. 稼働予測（75%）', value: '14,448名 × 0.75 = 10,836名/年' },
        { label: '3. 想定年間売上', value: '10,836名 × 10,000円 = 108,360,000円' }
      ],
      rooms: [
        { type: '1名部屋', count: '1室' },
        { type: '2名部屋', count: '11室' },
        { type: '3名部屋', count: '2室' },
        { type: '4名部屋', count: '2室' },
        { type: '6名部屋', count: '1室' }
      ]
    },
    staffing: {
      title: '人員配置シミュレーション',
      subtitle: '労働基準法を遵守しつつ、収益性を高めるための計10名体制案です。',
      items: [
        { role: '常勤（支配人クラス）', count: '2名', desc: '事務所・フロント周り兼務' },
        { role: '調理場', count: '2名', desc: '' },
        { role: '通常スタッフ', count: '5名', desc: '盛付補助、配膳、接客、撤収、清掃をマルチに担当' },
        { role: 'その他', count: '1名', desc: '営繕、送迎、諸業務担当' }
      ],
      efficiencyTitle: '効率化のポイント',
      efficiencyItems: [
        '従来の「客室案内」を廃止し、セルフサービス化を促進。',
        '清掃は1名あたり4部屋を担当し、マルチタスクで生産性を向上。'
      ]
    },
    issues: {
      title: '予見される課題とトラブル',
      ryokanTitle: '旅館本体',
      ryokanItems: [
        'LED化：廊下・客室の一部は完了済みだが、未完了箇所あり。',
        '客室：ウォシュレットの水漏れ、テレビの衛星放送非対応。',
        '修繕：大広間の舞台床改修、浴室側外壁の追加改修。',
        '車両：所有する大型バス・ハイエースは年式が古いため更新推奨。'
      ],
      dormTitle: '社員寮（最優先課題）',
      dormDesc: 'ここを直すことが「住み込みスタッフ（リゾバ等）の確保＝売上1億円達成」の鍵となります。',
      dormItems: [
        '現状：全室和式トイレ、LED未完了。',
        '修繕：屋根張替、水道パイプ修繕、暖房器具の更新、雨漏り修繕が必要。'
      ],
      dormNote: '※社員寮は現在、火災保険支払請求の手続き中です。'
    },
    prospects: {
      title: '展望と「伸びしろ」',
      items: [
        { title: '飲食店事業の展開', desc: 'カルルス地区には飲食店がないため、寮の1階をカフェや食堂へ改修することで、日帰り客や近隣宿の宿泊客をターゲットにした独占的な収益源を作れます。' },
        { title: 'コテージ増設', desc: '借地部分の余力地にコテージを建設。温泉は旅館本体のものを利用することで、1棟あたりの建築コストを抑えた拡張が可能です。' },
        { title: '地域支援の活用', desc: '登別市のタクシーチケット補助（外国人労働者も利用可）や商工会議所のサポートを活用した安定運営が見込めます。' }
      ]
    },
    gallery: {
      title: 'ギャラリー',
      subtitle: '館内および周辺の様子',
      tabRyokan: '旅館',
      tabDorm: '社員寮'
    },
    contact: {
      title: 'お問い合わせ',
      subtitle: '本物件に関する詳細な資料請求、現地視察のご希望、価格交渉等につきましては、お気軽にお問い合わせください。',
      company: '株式会社Ambitious',
      address1: '〒063-0863',
      address2: '北海道札幌市西区八軒3条東4丁目1-1',
      license: '北海道知事 石狩（1）第9451号',
      hours: '営業時間：月〜土 9:00〜18:00（日曜祝日定休）',
      type: '取引態様：仲介'
    }
  },
  zh: {
    nav: {
      overview: '物业概要',
      revenue: '收益预测',
      prospects: '发展前景',
      gallery: '照片画廊',
      contact: '联系我们'
    },
    hero: {
      title: '登别山静馆',
      subtitle: '位于登别卡鲁鲁斯温泉乡的宁静山间温泉旅馆',
      priceLabel: '售价',
      price: '2亿5千',
      currency: '万日元',
      location: '北海道登别市卡鲁鲁斯町',
      capacity: '客房17间（最多可容纳43人）',
      hotspring: '100%源泉直供温泉'
    },
    highlights: {
      title: '极高的投资价值',
      subtitle: '从以下几点来看，本物业是一个非常有吸引力的投资机会。',
      items: [
        {
          title: '资产价值',
          desc: '拥有自有温泉，2亿5千万日元的定价非常划算。'
        },
        {
          title: '高评价',
          desc: 'Google评分4.0。凭借温泉水质和美食已建立起稳固的良好口碑。'
        },
        {
          title: '收益性',
          desc: '17间客房（最多43人）满负荷运转下，具有年营业额超过1亿日元的潜力。'
        }
      ]
    },
    overview: {
      title: '物业概要',
      landTitle: '土地信息',
      buildingTitle: '建筑信息',
      land: [
        { label: '登别市卡鲁鲁斯町16番9（宅地）', value: '944.10㎡', sub: '（所有者：有限会社 山静馆）' },
        { label: '登别市卡鲁鲁斯町16番10（宅地）', value: '320.21㎡', sub: '（所有者：有限会社 山静馆）' }
      ],
      totalLand: { label: '土地总面积', value: '1,264.31㎡（约382坪）' },
      building: [
        { label: '房屋编号', value: '16番2の5' },
        { label: '种类/结构', value: '旅馆 / 木造镀锌钢板屋顶2层建筑' },
        { label: '登记建筑面积', value: '1层：580.63㎡\n2层：503.50㎡\n总面积：1,084.13㎡' },
        { label: '建筑时期', value: '昭和38年新建\n（其后于S51、S55、S63年扩建）' },
        { label: '所有者', value: '有限会社 山静馆' }
      ]
    },
    history: {
      title: '翻新及工程履历',
      subtitle: '近5年内对主要基础设施和公共区域进行了改造。',
      items: [
        { year: '2020年', events: ['自动门更换为非接触式设备'] },
        { year: '2021年', events: ['别馆 外墙抗震墙工程', '大厅 改造（榻榻米改为地毯、基础加固工程、内窗改为双层玻璃、全面更换壁纸、引入地板下24小时换气系统）', '更衣室 地板改为铺设地毯', '新设Wi-Fi（伴随光纤开通）'] },
        { year: '2024年', events: ['男女室内浴池 重新粉刷', '浴室栋 更换屋顶、南侧外墙改造工程'] },
        { year: '2025年', events: ['5月：新购入厨房锅炉'] },
        { year: '随时', events: ['客房榻榻米更换'] }
      ]
    },
    revenue: {
      title: '收益预测',
      subtitle: '满员（43人）时的销售额潜力。',
      basicTitle: '基本设定',
      basicItems: [
        { label: '全17室', value: '最多容纳43人' },
        { label: '单价（仅住宿・不含税）', value: '10,000日元 ※维持现状' },
        { label: '营业天数', value: '每年336天（每月休馆2次）' },
        { label: '目标入住率', value: '75%' }
      ],
      calcTitle: '计算公式',
      calcSteps: [
        { label: '1. 最大容量', value: '43人 × 336天 = 14,448人/年' },
        { label: '2. 预计入住（75%）', value: '14,448人 × 0.75 = 10,836人/年' },
        { label: '3. 预计年销售额', value: '10,836人 × 10,000日元 = 108,360,000日元' }
      ],
      rooms: [
        { type: '1人房', count: '1间' },
        { type: '2人房', count: '11间' },
        { type: '3人房', count: '2间' },
        { type: '4人房', count: '2间' },
        { type: '6人房', count: '1间' }
      ]
    },
    staffing: {
      title: '人员配置方案',
      subtitle: '在遵守劳动基准法的同时，提高收益性的10人体制方案。',
      items: [
        { role: '常驻（经理级别）', count: '2名', desc: '兼任办公室及前台工作' },
        { role: '厨房', count: '2名', desc: '' },
        { role: '普通员工', count: '5名', desc: '负责装盘辅助、配餐、接待、撤收、清洁等多项工作' },
        { role: '其他', count: '1名', desc: '负责维修、接送及其他杂务' }
      ],
      efficiencyTitle: '提高效率的要点',
      efficiencyItems: [
        '废除传统的“客房引导”，促进自助服务。',
        '每人负责4间客房的清洁，通过多任务处理提高生产力。'
      ]
    },
    issues: {
      title: '预见的问题与挑战',
      ryokanTitle: '旅馆主体',
      ryokanItems: [
        'LED化：走廊及部分客房已完成，但仍有未完成区域。',
        '客房：智能马桶漏水，电视不支持卫星广播。',
        '修缮：大厅舞台地板改造，浴室侧外墙追加改造。',
        '车辆：拥有的中巴及海狮面包车年份较老，建议更新。'
      ],
      dormTitle: '员工宿舍（最优先课题）',
      dormDesc: '修复此处是确保住店员工（度假打工等）并达成1亿日元销售额的关键。',
      dormItems: [
        '现状：全室和式厕所，LED未完成。',
        '修缮：需要更换屋顶、修复水管、更新供暖设备、修复漏雨。'
      ],
      dormNote: '※员工宿舍目前正在办理火灾保险理赔手续。'
    },
    prospects: {
      title: '发展前景与“增长空间”',
      items: [
        { title: '餐饮业务拓展', desc: '卡鲁鲁斯地区没有餐饮店，将宿舍一楼改造成咖啡厅或食堂，可针对一日游游客或附近旅馆的住宿客创造独家收益源。' },
        { title: '增建小木屋', desc: '在借地部分的空地上建设小木屋。利用旅馆本馆的温泉，可控制建筑成本进行扩张。' },
        { title: '活用地区支援', desc: '利用登别市的出租车票补贴（外国劳工也可使用）及商工会议所的支持，实现稳定运营。' }
      ]
    },
    gallery: {
      title: '照片画廊',
      subtitle: '馆内及周边环境',
      tabRyokan: '旅馆',
      tabDorm: '员工宿舍'
    },
    contact: {
      title: '联系我们',
      subtitle: '关于本物业的详细资料索取、实地考察申请及价格谈判等，请随时与我们联系。',
      company: '株式会社Ambitious',
      address1: '〒063-0863',
      address2: '北海道札幌市西区八轩3条东4丁目1-1',
      license: '北海道知事 石狩（1）第9451号',
      hours: '营业时间：周一至周六 9:00〜18:00（周日及节假日休息）',
      type: '交易形态：中介'
    }
  },
  en: {
    nav: {
      overview: 'Overview',
      revenue: 'Revenue',
      prospects: 'Prospects',
      gallery: 'Gallery',
      contact: 'Contact'
    },
    hero: {
      title: 'Noboribetsu Sanseikan',
      subtitle: 'A quiet hot spring inn nestled in the mountains of Noboribetsu Karurusu Onsen',
      priceLabel: 'Sale Price',
      price: '250',
      currency: 'Million JPY',
      location: 'Karurusu-cho, Noboribetsu, Hokkaido',
      capacity: '17 Rooms (Max 43 guests)',
      hotspring: '100% Free-flowing Hot Spring'
    },
    highlights: {
      title: 'Extremely High Investment Value',
      subtitle: 'This property presents a highly attractive investment opportunity for the following reasons.',
      items: [
        {
          title: 'Asset Value',
          desc: 'Priced at 250 million JPY with a privately owned hot spring, it is highly undervalued.'
        },
        {
          title: 'High Ratings',
          desc: 'Google rating 4.0. Already established a solid reputation for its hot spring quality and cuisine.'
        },
        {
          title: 'Profitability',
          desc: 'With 17 rooms (max 43 guests) operating, it has the potential to generate over 100 million JPY in annual revenue.'
        }
      ]
    },
    overview: {
      title: 'Property Overview',
      landTitle: 'Land Information',
      buildingTitle: 'Building Information',
      land: [
        { label: '16-9 Karurusu-cho, Noboribetsu', value: '944.10㎡', sub: '(Owner: Sanseikan Co., Ltd.)' },
        { label: '16-10 Karurusu-cho, Noboribetsu', value: '320.21㎡', sub: '(Owner: Sanseikan Co., Ltd.)' }
      ],
      totalLand: { label: 'Total Land Area', value: '1,264.31㎡' },
      building: [
        { label: 'House Number', value: '16-2-5' },
        { label: 'Type / Structure', value: 'Ryokan / 2-story wooden building with galvanized steel roof' },
        { label: 'Registered Floor Area', value: '1st Floor: 580.63㎡\n2nd Floor: 503.50㎡\nTotal: 1,084.13㎡' },
        { label: 'Construction Period', value: 'Built in 1963\n(Expanded in 1976, 1980, 1988)' },
        { label: 'Owner', value: 'Sanseikan Co., Ltd.' }
      ]
    },
    history: {
      title: 'Renovation History',
      subtitle: 'Major infrastructure and common areas have been renovated over the past 5 years.',
      items: [
        { year: '2020', events: ['Changed automatic doors to non-contact devices'] },
        { year: '2021', events: ['Annex exterior seismic wall construction', 'Grand hall renovation (tatami to carpet, foundation reinforcement, double-glazed inner windows, wallpaper replacement, underfloor 24h ventilation)', 'Dressing room floor changed to carpet', 'New Wi-Fi installation'] },
        { year: '2024', events: ['Repainted men\'s and women\'s indoor baths', 'Bathhouse roof replacement, south exterior wall renovation'] },
        { year: '2025', events: ['May: Purchased new kitchen boiler'] },
        { year: 'Ongoing', events: ['Tatami replacement in guest rooms'] }
      ]
    },
    revenue: {
      title: 'Revenue Simulation',
      subtitle: 'Sales potential at maximum capacity (43 guests).',
      basicTitle: 'Basic Settings',
      basicItems: [
        { label: 'Total 17 Rooms', value: 'Max 43 guests' },
        { label: 'Unit Price (Room only, ex. tax)', value: '10,000 JPY *Current rate' },
        { label: 'Operating Days', value: '336 days/year (Closed twice a month)' },
        { label: 'Target Occupancy Rate', value: '75%' }
      ],
      calcTitle: 'Calculation Formula',
      calcSteps: [
        { label: '1. Max Capacity', value: '43 guests × 336 days = 14,448 guests/year' },
        { label: '2. Expected Occupancy (75%)', value: '14,448 guests × 0.75 = 10,836 guests/year' },
        { label: '3. Expected Annual Revenue', value: '10,836 guests × 10,000 JPY = 108,360,000 JPY' }
      ],
      rooms: [
        { type: '1-Person Room', count: '1 Room' },
        { type: '2-Person Room', count: '11 Rooms' },
        { type: '3-Person Room', count: '2 Rooms' },
        { type: '4-Person Room', count: '2 Rooms' },
        { type: '6-Person Room', count: '1 Room' }
      ]
    },
    staffing: {
      title: 'Staffing Simulation',
      subtitle: 'A 10-person system proposed to improve profitability while complying with labor laws.',
      items: [
        { role: 'Full-time (Manager class)', count: '2', desc: 'Office and front desk duties' },
        { role: 'Kitchen', count: '2', desc: '' },
        { role: 'General Staff', count: '5', desc: 'Multitasking: plating assistance, serving, customer service, clearing, cleaning' },
        { role: 'Other', count: '1', desc: 'Maintenance, transportation, miscellaneous duties' }
      ],
      efficiencyTitle: 'Efficiency Points',
      efficiencyItems: [
        'Abolish traditional "room guidance" and promote self-service.',
        'Each person is responsible for cleaning 4 rooms, improving productivity through multitasking.'
      ]
    },
    issues: {
      title: 'Foreseen Issues & Challenges',
      ryokanTitle: 'Main Ryokan Building',
      ryokanItems: [
        'LED lighting: Partially completed in corridors and guest rooms, but some areas remain.',
        'Guest rooms: Washlet water leaks, TVs do not support satellite broadcasting.',
        'Repairs: Grand hall stage floor renovation, additional renovation of the bathroom exterior wall.',
        'Vehicles: Owned large bus and Hiace are old and recommended for renewal.'
      ],
      dormTitle: 'Staff Dormitory (Top Priority)',
      dormDesc: 'Fixing this is the key to securing live-in staff and achieving 100 million JPY in sales.',
      dormItems: [
        'Current status: All rooms have Japanese-style toilets, LED incomplete.',
        'Repairs: Roof replacement, water pipe repair, heating equipment renewal, and rain leak repair are required.'
      ],
      dormNote: '* The staff dormitory is currently undergoing fire insurance claim procedures.'
    },
    prospects: {
      title: 'Prospects & "Room for Growth"',
      items: [
        { title: 'F&B Business Expansion', desc: 'Since there are no restaurants in the Karurusu area, renovating the first floor of the dorm into a cafe or dining hall can create an exclusive revenue source targeting day-trippers and guests from nearby inns.' },
        { title: 'Cottage Addition', desc: 'Build cottages on the surplus leased land. By utilizing the hot spring of the main ryokan building, expansion is possible while keeping construction costs low.' },
        { title: 'Utilization of Regional Support', desc: 'Stable operation can be expected by utilizing Noboribetsu City\'s taxi ticket subsidies (also available to foreign workers) and support from the Chamber of Commerce.' }
      ]
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Inside and around the facility',
      tabRyokan: 'Ryokan',
      tabDorm: 'Staff Dormitory'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Please feel free to contact us for detailed materials, site inspection requests, price negotiations, etc.',
      company: 'Ambitious Co., Ltd.',
      address1: '063-0863',
      address2: '1-1, Hachiken 3-jo Higashi 4-chome, Nishi-ku, Sapporo, Hokkaido',
      license: 'Hokkaido Governor Ishikari (1) No. 9451',
      hours: 'Business Hours: Mon-Sat 9:00-18:00 (Closed Sun & Holidays)',
      type: 'Transaction Type: Brokerage'
    }
  }
};
