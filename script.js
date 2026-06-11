// ==========================================================================
// توقعات دي زاد - Scripting and Interactivity
// ==========================================================================

// Global state
let currentDay = "الخميس";
let currentTicketFilter = "ALL"; // ALL, FREE, VIP
let isVipUser = false;
let selectedPlan = { name: "أسبوعي 🎟️", price: 600, key: "WEEKLY" };

// Matches Database
const matchesData = [
    // --- THURSDAY (الخميس) ---
    {
        id: "m_thu_1",
        homeTeam: "المكسيك",
        homeFlagEmoji: "🇲🇽",
        awayTeam: "جنوب أفريقيا",
        awayFlagEmoji: "🇿🇦",
        leagueName: "مباريات ودية دولية 🌍",
        leagueType: "مباريات ودية دولية",
        matchTime: "21:00",
        matchDateDay: "الخميس",
        isVip: true,
        firstHalfGoalsPredict: "أكثر من 0.5 هدف",
        secondHalfGoalsPredict: "أكثر من 1.5 هدف",
        firstHalfScorePredict: "1 - 0",
        secondHalfScorePredict: "1 - 1",
        fullTimeScorePredict: "2 - 1",
        firstHalfCardsPredict: "أقل من 1.5 بطاقة",
        secondHalfCardsPredict: "أكثر من 1.5 بطاقة",
        totalCardsPredict: "أكثر من 2.5 بطاقات",
        firstHalfCornersPredict: "أكثر من 3.5 ركنيات",
        secondHalfCornersPredict: "أكثر من 4 ركنيات",
        totalCornersPredict: "أكثر من 8.5 ركنيات",
        firstToScorePredict: "المكسيك 🇲🇽",
        finalResultPredict: "فوز المكسيك (1)",
        freeCorePredict: "توقع أداء قوي من المكسيك مع استغلال اللعب الهجومي والتمريرات السريعة لحسم الفوز.",
        freeScorePredict: "2 - 1",
        isLive: true,
        liveMinute: 65,
        liveHomeScore: 1,
        liveAwayScore: 1,
        liveCorners: 5,
        liveCards: 2,
        lastEvent: "🔄 تبديل للمكسيك بنزول المهاجم لتنشيط الجبهة الهجومية!"
    },

    // --- FRIDAY (الجمعة) ---
    {
        id: "m_fri_1",
        homeTeam: "كندا",
        homeFlagEmoji: "🇨🇦",
        awayTeam: "البوسنة",
        awayFlagEmoji: "🇧🇦",
        leagueName: "مباريات ودية دولية 🌍",
        leagueType: "مباريات ودية دولية",
        matchTime: "18:30",
        matchDateDay: "الجمعة",
        isVip: false,
        firstHalfGoalsPredict: "أقل من 1.5 هدف",
        secondHalfGoalsPredict: "أكثر من 0.5 هدف",
        firstHalfScorePredict: "0 - 0",
        secondHalfScorePredict: "1 - 0",
        fullTimeScorePredict: "1 - 0",
        firstHalfCardsPredict: "أقل من 1.5 بطاقة",
        secondHalfCardsPredict: "أكثر من 1.5 بطاقة",
        totalCardsPredict: "أقل من 3.5 بطاقات",
        firstHalfCornersPredict: "أقل من 4 ركنيات",
        secondHalfCornersPredict: "أكثر من 4 ركنيات",
        totalCornersPredict: "أكثر من 7.5 ركنيات",
        firstToScorePredict: "كندا 🇨🇦",
        finalResultPredict: "فوز كندا أو تعادل (1X)",
        freeCorePredict: "مباراة متكافئة دفاعياً مع أفضلية تكتيكية لصالح الفريق الكندي في الشوط الثاني.",
        freeScorePredict: "1 - 0",
        isLive: false
    },
    {
        id: "m_fri_2",
        homeTeam: "كوريا الجنوبية",
        homeFlagEmoji: "🇰🇷",
        awayTeam: "التشيك",
        awayFlagEmoji: "🇨🇿",
        leagueName: "مباريات ودية دولية 🌍",
        leagueType: "مباريات ودية دولية",
        matchTime: "20:00",
        matchDateDay: "الجمعة",
        isVip: true,
        firstHalfGoalsPredict: "أكثر من 0.5 هدف",
        secondHalfGoalsPredict: "أكثر من 0.5 هدف",
        firstHalfScorePredict: "1 - 0",
        secondHalfScorePredict: "1 - 1",
        fullTimeScorePredict: "2 - 1",
        firstHalfCardsPredict: "أقل من 1.5 بطاقة",
        secondHalfCardsPredict: "أكثر من 1.5 بطاقة",
        totalCardsPredict: "أكثر من 3.5 بطاقات",
        firstHalfCornersPredict: "أكثر من 4 ركنيات",
        secondHalfCornersPredict: "أكثر من 4 ركنيات",
        totalCornersPredict: "أكثر من 8.5 ركنيات",
        firstToScorePredict: "كوريا الجنوبية 🇰🇷",
        finalResultPredict: "فوز كوريا الجنوبية (1)",
        freeCorePredict: "السرعة الكورية ستصنع الفارق هجومياً أمام دفاع التشيك الصلب والمنظم.",
        freeScorePredict: "2 - 1",
        isLive: false
    },

    // --- SATURDAY (السبت) ---
    {
        id: "m_sat_1",
        homeTeam: "امريكا",
        homeFlagEmoji: "🇺🇸",
        awayTeam: "البارغواي",
        awayFlagEmoji: "🇵🇾",
        leagueName: "مباريات ودية دولية 🌍",
        leagueType: "مباريات ودية دولية",
        matchTime: "17:00",
        matchDateDay: "السبت",
        isVip: false,
        firstHalfGoalsPredict: "أقل من 1.5 هدف",
        secondHalfGoalsPredict: "أكثر من 0.5 هدف",
        firstHalfScorePredict: "0 - 0",
        secondHalfScorePredict: "1 - 1",
        fullTimeScorePredict: "1 - 1",
        firstHalfCardsPredict: "أكثر من 1.5 بطاقة",
        secondHalfCardsPredict: "أكثر من 1.5 بطاقة",
        totalCardsPredict: "أكثر من 3.5 بطاقات",
        firstHalfCornersPredict: "أقل من 4 ركنيات",
        secondHalfCornersPredict: "أكثر من 4 ركنيات",
        totalCornersPredict: "أكثر من 8.5 ركنيات",
        firstToScorePredict: "امريكا 🇺🇸",
        finalResultPredict: "تعادل إيجابي (X)",
        freeCorePredict: "مواجهة قوية وتنافسية وصعوبة تكتيكية واضحة تنتهي بالتعادل العادل لكلا الطرفين.",
        freeScorePredict: "1 - 1",
        isLive: false
    },
    {
        id: "m_sat_2",
        homeTeam: "قطر",
        homeFlagEmoji: "🇶🇦",
        awayTeam: "سويسرا",
        awayFlagEmoji: "🇨🇭",
        leagueName: "مباريات ودية دولية 🌍",
        leagueType: "مباريات ودية دولية",
        matchTime: "19:30",
        matchDateDay: "السبت",
        isVip: true,
        firstHalfGoalsPredict: "أقل من 1.5 هدف",
        secondHalfGoalsPredict: "أكثر من 1.5 هدف",
        firstHalfScorePredict: "0 - 1",
        secondHalfScorePredict: "1 - 1",
        fullTimeScorePredict: "1 - 2",
        firstHalfCardsPredict: "أقل من 1.5 بطاقة",
        secondHalfCardsPredict: "أكثر من 1.5 بطاقة",
        totalCardsPredict: "أقل من 3.5 بطاقات",
        firstHalfCornersPredict: "أكثر من 3.5 ركنيات",
        secondHalfCornersPredict: "أكثر من 4.5 ركنيات",
        totalCornersPredict: "أكثر من 8.5 ركنيات",
        firstToScorePredict: "سويسرا 🇨🇭",
        finalResultPredict: "فوز سويسرا (2)",
        freeCorePredict: "سويسرا الأكثر خبرة وتنظيماً ستحسم اللقاء بفارق ضئيل بالرغم من الندية القطرية.",
        freeScorePredict: "1 - 2",
        isLive: false
    },
    {
        id: "m_sat_3",
        homeTeam: "المغرب",
        homeFlagEmoji: "🇲🇦",
        awayTeam: "البرازيل",
        awayFlagEmoji: "🇧🇷",
        leagueName: "مباريات ودية دولية 🌍",
        leagueType: "مباريات ودية دولية",
        matchTime: "21:00",
        matchDateDay: "السبت",
        isVip: true,
        firstHalfGoalsPredict: "أكثر من 0.5 هدف",
        secondHalfGoalsPredict: "أكثر من 1.5 هدف",
        firstHalfScorePredict: "1 - 1",
        secondHalfScorePredict: "1 - 0",
        fullTimeScorePredict: "2 - 1",
        firstHalfCardsPredict: "أكثر من 1.5 بطاقة",
        secondHalfCardsPredict: "أكثر من 1.5 بطاقة",
        totalCardsPredict: "أكثر من 3.5 بطاقات",
        firstHalfCornersPredict: "أكثر من 4 ركنيات",
        secondHalfCornersPredict: "أكثر من 4 ركنيات",
        totalCornersPredict: "أكثر من 8.5 ركنيات",
        firstToScorePredict: "البرازيل 🇧🇷",
        finalResultPredict: "فوز المغرب أو تعادل (1X)",
        freeCorePredict: "قمة عالمية مثيرة بذكاء تكتيكي ودعم جماهيري مغربي كبير يصنع التاريخ للمرة الثانية.",
        freeScorePredict: "2 - 1",
        isLive: false
    },

    // --- SUNDAY (الأحد) ---
    {
        id: "m_sun_1",
        homeTeam: "هايتي",
        homeFlagEmoji: "🇭🇹",
        awayTeam: "أسكتلندا",
        awayFlagEmoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        leagueName: "مباريات ودية دولية 🌍",
        leagueType: "مباريات ودية دولية",
        matchTime: "15:00",
        matchDateDay: "الأحد",
        isVip: false,
        firstHalfGoalsPredict: "أقل من 1.5 هدف",
        secondHalfGoalsPredict: "أكثر من 1.5 هدف",
        firstHalfScorePredict: "0 - 1",
        secondHalfScorePredict: "0 - 1",
        fullTimeScorePredict: "0 - 2",
        firstHalfCardsPredict: "أقل من 1.5 بطاقة",
        secondHalfCardsPredict: "أقل من 1.5 بطاقة",
        totalCardsPredict: "أقل من 2.5 بطاقات",
        firstHalfCornersPredict: "أقل من 4 ركنيات",
        secondHalfCornersPredict: "أكثر من 4 ركنيات",
        totalCornersPredict: "أكثر من 8 ركنيات",
        firstToScorePredict: "أسكتلندا 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        finalResultPredict: "فوز أسكتلندا (2)",
        freeCorePredict: "تنظيم بدني ودفاعي صلب لأسكتلندا يضمن فوزاً مريحاً ونظيفاً خارج الديار.",
        freeScorePredict: "0 - 2",
        isLive: false
    },
    {
        id: "m_sun_2",
        homeTeam: "استراليا",
        homeFlagEmoji: "🇦🇺",
        awayTeam: "تركيا",
        awayFlagEmoji: "🇹🇷",
        leagueName: "مباريات ودية دولية 🌍",
        leagueType: "مباريات ودية دولية",
        matchTime: "17:30",
        matchDateDay: "الأحد",
        isVip: true,
        firstHalfGoalsPredict: "أقل من 1.5 هدف",
        secondHalfGoalsPredict: "أكثر من 0.5 هدف",
        firstHalfScorePredict: "0 - 0",
        secondHalfScorePredict: "1 - 1",
        fullTimeScorePredict: "1 - 1",
        firstHalfCardsPredict: "أكثر من 1.5 بطاقة",
        secondHalfCardsPredict: "أكثر من 1.5 بطاقة",
        totalCardsPredict: "أكثر من 3.5 بطاقات",
        firstHalfCornersPredict: "أكثر من 4 ركنيات",
        secondHalfCornersPredict: "أقل من 4 ركنيات",
        totalCornersPredict: "أقل من 8.5 ركنيات",
        firstToScorePredict: "تركيا 🇹🇷",
        finalResultPredict: "تعادل أو فوز تركيا (X2)",
        freeCorePredict: "مباراة متكافئة جداً تكتيكياً وصراع بدني شرس بالوسط ينتهي بنتيجة متقاربة.",
        freeScorePredict: "1 - 1",
        isLive: false
    },
    {
        id: "m_sun_3",
        homeTeam: "ألمانيا",
        homeFlagEmoji: "🇩🇪",
        awayTeam: "كوراساو",
        awayFlagEmoji: "🇨🇼",
        leagueName: "مباريات ودية دولية 🌍",
        leagueType: "مباريات ودية دولية",
        matchTime: "19:00",
        matchDateDay: "الأحد",
        isVip: false,
        firstHalfGoalsPredict: "أكثر من 1.5 هدف",
        secondHalfGoalsPredict: "أكثر من 2.5 أهدف",
        firstHalfScorePredict: "2 - 0",
        secondHalfScorePredict: "2 - 0",
        fullTimeScorePredict: "4 - 0",
        firstHalfCardsPredict: "أقل من 1.5 بطاقة",
        secondHalfCardsPredict: "أقل من 1.5 بطاقة",
        totalCardsPredict: "أقل من 2.5 بطاقات",
        firstHalfCornersPredict: "أكثر من 5 ركنيات",
        secondHalfCornersPredict: "أكثر من 5 ركنيات",
        totalCornersPredict: "أكثر من 9.5 ركنيات",
        firstToScorePredict: "ألمانيا 🇩🇪",
        finalResultPredict: "فوز ألمانيا (1)",
        freeCorePredict: "استعراض هجومي متوقع وتفوق كاسح لمنتخب الماكينات على أرضية ميدانه.",
        freeScorePredict: "4 - 0",
        isLive: false
    },
    {
        id: "m_sun_4",
        homeTeam: "هولندا",
        homeFlagEmoji: "🇳🇱",
        awayTeam: "اليابان",
        awayFlagEmoji: "🇯🇵",
        leagueName: "مباريات ودية دولية 🌍",
        leagueType: "مباريات ودية دولية",
        matchTime: "20:45",
        matchDateDay: "الأحد",
        isVip: true,
        firstHalfGoalsPredict: "أكثر من 0.5 هدف",
        secondHalfGoalsPredict: "أكثر من 1.5 هدف",
        firstHalfScorePredict: "1 - 0",
        secondHalfScorePredict: "1 - 1",
        fullTimeScorePredict: "2 - 1",
        firstHalfCardsPredict: "أقل من 1.5 بطاقة",
        secondHalfCardsPredict: "أكثر من 1.5 بطاقة",
        totalCardsPredict: "أكثر من 2.5 بطاقات",
        firstHalfCornersPredict: "أكثر من 4 ركنيات",
        secondHalfCornersPredict: "أكثر من 4 ركنيات",
        totalCornersPredict: "أكثر من 8.5 ركنيات",
        firstToScorePredict: "هولندا 🇳🇱",
        finalResultPredict: "فوز هولندا (1)",
        freeCorePredict: "تحدي تكتيكي عالي السرعة، تنظيم هولندا سينتصر على مرونة الساموراي الياباني.",
        freeScorePredict: "2 - 1",
        isLive: false
    },
    {
        id: "m_sun_5",
        homeTeam: "كوت ديفوار",
        homeFlagEmoji: "🇨🇮",
        awayTeam: "الإكوادور",
        awayFlagEmoji: "🇪🇨",
        leagueName: "مباريات ودية دولية 🌍",
        leagueType: "مباريات ودية دولية",
        matchTime: "22:00",
        matchDateDay: "الأحد",
        isVip: false,
        firstHalfGoalsPredict: "أقل من 1.5 هدف",
        secondHalfGoalsPredict: "أكثر من 0.5 هدف",
        firstHalfScorePredict: "0 - 0",
        secondHalfScorePredict: "1 - 1",
        fullTimeScorePredict: "1 - 1",
        firstHalfCardsPredict: "أكثر من 1.5 بطاقة",
        secondHalfCardsPredict: "أكثر من 1.5 بطاقة",
        totalCardsPredict: "أكثر من 3.5 بطاقات",
        firstHalfCornersPredict: "أقل من 4 ركنيات",
        secondHalfCornersPredict: "أكثر من 4 ركنيات",
        totalCornersPredict: "أكثر من 7.5 ركنيات",
        firstToScorePredict: "كوت ديفوار 🇨🇮",
        finalResultPredict: "تعادل (X)",
        freeCorePredict: "صراع قوي بالاندفاع البدني بين بطل أفريقيا وموهبة أمريكا الجنوبية ينتهي بالتعادل.",
        freeScorePredict: "1 - 1",
        isLive: false
    },

    // --- MONDAY (الإثنين) ---
    {
        id: "m_mon_1",
        homeTeam: "السويد",
        homeFlagEmoji: "🇸🇪",
        awayTeam: "تونس",
        awayFlagEmoji: "🇹🇳",
        leagueName: "مباريات ودية دولية 🌍",
        leagueType: "مباريات ودية دولية",
        matchTime: "16:00",
        matchDateDay: "الإثنين",
        isVip: false,
        firstHalfGoalsPredict: "أقل من 1.5 هدف",
        secondHalfGoalsPredict: "أقل من 1.5 هدف",
        firstHalfScorePredict: "0 - 0",
        secondHalfScorePredict: "1 - 0",
        fullTimeScorePredict: "1 - 0",
        firstHalfCardsPredict: "أقل من 1.5 بطاقة",
        secondHalfCardsPredict: "أكثر من 1.5 بطاقة",
        totalCardsPredict: "أكثر من 2.5 بطاقات",
        firstHalfCornersPredict: "أكثر من 4 ركنيات",
        secondHalfCornersPredict: "أقل من 4 ركنيات",
        totalCornersPredict: "أكثر من 7.5 ركنيات",
        firstToScorePredict: "السويد 🇸🇪",
        finalResultPredict: "فوز السويد أو تعادل (1X)",
        freeCorePredict: "تونس تبلي البلاء الحسن دفاعياً وتستبسل أمام كرات السويد العرضية الخطرة والمكثفة.",
        freeScorePredict: "1 - 0",
        isLive: false
    },
    {
        id: "m_mon_2",
        homeTeam: "إسبانيا",
        homeFlagEmoji: "🇪🇸",
        awayTeam: "الرأس الأخضر",
        awayFlagEmoji: "🇨🇻",
        leagueName: "مباريات ودية دولية 🌍",
        leagueType: "مباريات ودية دولية",
        matchTime: "18:00",
        matchDateDay: "الإثنين",
        isVip: true,
        firstHalfGoalsPredict: "أكثر من 1.5 هدف",
        secondHalfGoalsPredict: "أكثر من 1.5 هدف",
        firstHalfScorePredict: "2 - 0",
        secondHalfScorePredict: "1 - 0",
        fullTimeScorePredict: "3 - 0",
        firstHalfCardsPredict: "أقل من 1.5 بطاقة",
        secondHalfCardsPredict: "أقل من 1.5 بطاقة",
        totalCardsPredict: "أقل من 2.5 بطاقات",
        firstHalfCornersPredict: "أكثر من 5 ركنيات",
        secondHalfCornersPredict: "أكثر من 4 ركنيات",
        totalCornersPredict: "أكثر من 9.5 ركنيات",
        firstToScorePredict: "إسبانيا 🇪🇸",
        finalResultPredict: "فوز إسبانيا بفارق مريح (1)",
        freeCorePredict: "استحواذ تام وتمريرات تيكي تاكا الإسبانية تفكك حصون دفاع الرأس الأخضر بسهولة تامة.",
        freeScorePredict: "3 - 0",
        isLive: false
    },
    {
        id: "m_mon_3",
        homeTeam: "مصر",
        homeFlagEmoji: "🇪🇬",
        awayTeam: "بلجيكا",
        awayFlagEmoji: "🇧🇪",
        leagueName: "مباريات ودية دولية 🌍",
        leagueType: "مباريات ودية دولية",
        matchTime: "20:00",
        matchDateDay: "الإثنين",
        isVip: true,
        firstHalfGoalsPredict: "أكثر من 0.5 هدف",
        secondHalfGoalsPredict: "أكثر من 1.5 هدف",
        firstHalfScorePredict: "1 - 1",
        secondHalfScorePredict: "1 - 1",
        fullTimeScorePredict: "2 - 2",
        firstHalfCardsPredict: "أكثر من 1.5 بطاقة",
        secondHalfCardsPredict: "أكثر من 1.5 بطاقة",
        totalCardsPredict: "أكثر من 3.5 بطاقات",
        firstHalfCornersPredict: "أكثر من 3.5 ركنيات",
        secondHalfCornersPredict: "أكثر من 4 ركنيات",
        totalCornersPredict: "أكثر من 8.5 ركنيات",
        firstToScorePredict: "بلجيكا 🇧🇪",
        finalResultPredict: "تعادل مثير أو فوز بلجيكا (X2)",
        freeCorePredict: "تألق هجومي ملحوظ للمنتخب المصري بقيادة محمد صلاح في هجمات مرتدة قوية أمام بلجيكا.",
        freeScorePredict: "2 - 2",
        isLive: false
    },
    {
        id: "m_mon_4",
        homeTeam: "السعودية",
        homeFlagEmoji: "🇸🇦",
        awayTeam: "الاوروغواي",
        awayFlagEmoji: "🇺🇾",
        leagueName: "مباريات ودية دولية 🌍",
        leagueType: "مباريات ودية دولية",
        matchTime: "21:30",
        matchDateDay: "الإثنين",
        isVip: false,
        firstHalfGoalsPredict: "أقل من 1.5 هدف",
        secondHalfGoalsPredict: "أكثر من 1.5 هدف",
        firstHalfScorePredict: "0 - 1",
        secondHalfScorePredict: "1 - 1",
        fullTimeScorePredict: "1 - 2",
        firstHalfCardsPredict: "أكثر من 1.5 بطاقة",
        secondHalfCardsPredict: "أكثر من 2.5 بطاقتين",
        totalCardsPredict: "أكثر من 4.5 بطاقات",
        firstHalfCornersPredict: "أقل من 4 ركنيات",
        secondHalfCornersPredict: "أكثر من 4 ركنيات",
        totalCornersPredict: "أكثر من 7.5 ركنيات",
        firstToScorePredict: "الأوروغواي 🇺🇾",
        finalResultPredict: "فوز الأوروغواي (2)",
        freeCorePredict: "اندفاع الأخضر يقابل بصلابة وخبرة السيليستي اللاتيني، الذي يستغل الأخطاء الدفاعية.",
        freeScorePredict: "1 - 2",
        isLive: false
    },

    // --- TUESDAY (الثلاثاء) ---
    {
        id: "m_tue_1",
        homeTeam: "ايران",
        homeFlagEmoji: "🇮🇷",
        awayTeam: "نيوزيلاندا",
        awayFlagEmoji: "🇳🇿",
        leagueName: "مباريات ودية دولية 🌍",
        leagueType: "مباريات ودية دولية",
        matchTime: "17:00",
        matchDateDay: "الثلاثاء",
        isVip: false,
        firstHalfGoalsPredict: "أقل من 1.5 هدف",
        secondHalfGoalsPredict: "أكثر من 0.5 هدف",
        firstHalfScorePredict: "0 - 0",
        secondHalfScorePredict: "1 - 0",
        fullTimeScorePredict: "1 - 0",
        firstHalfCardsPredict: "أقل من 1.5 بطاقة",
        secondHalfCardsPredict: "أكثر من 1.5 بطاقة",
        totalCardsPredict: "أكثر من 2.5 بطاقات",
        firstHalfCornersPredict: "أكثر من 3.5 ركنيات",
        secondHalfCornersPredict: "أقل من 4 ركنيات",
        totalCornersPredict: "أقل من 8.5 ركنيات",
        firstToScorePredict: "إيران 🇮🇷",
        finalResultPredict: "فوز إيران (1)",
        freeCorePredict: "تنظيم دفاعي محكم لإيران على أرضها يضمن تحقيق انتصار تكتيكي بهدف وحيد.",
        freeScorePredict: "1 - 0",
        isLive: false
    },
    {
        id: "m_tue_2",
        homeTeam: "فرنسا",
        homeFlagEmoji: "🇫🇷",
        awayTeam: "السينغال",
        awayFlagEmoji: "🇸🇳",
        leagueName: "مباريات ودية دولية 🌍",
        leagueType: "مباريات ودية دولية",
        matchTime: "19:30",
        matchDateDay: "الثلاثاء",
        isVip: true,
        firstHalfGoalsPredict: "أكثر من 0.5 هدف",
        secondHalfGoalsPredict: "أكثر من 1.5 هدف",
        firstHalfScorePredict: "1 - 0",
        secondHalfScorePredict: "1 - 1",
        fullTimeScorePredict: "2 - 1",
        firstHalfCardsPredict: "أقل من 1.5 بطاقة",
        secondHalfCardsPredict: "أكثر من 1.5 بطاقة",
        totalCardsPredict: "أكثر من 3.5 بطاقات",
        firstHalfCornersPredict: "أكثر من 4 ركنيات",
        secondHalfCornersPredict: "أكثر من 5 ركنيات",
        totalCornersPredict: "أكثر من 9.5 ركنيات",
        firstToScorePredict: "فرنسا 🇫🇷",
        finalResultPredict: "فوز فرنسا بصلابة (1)",
        freeCorePredict: "قمة عالمية أفريقية مشوقة ومفتوحة للغاية، تحسمها دقة ورشاقة هجوم الديوك الفرنسية.",
        freeScorePredict: "2 - 1",
        isLive: false
    },
    {
        id: "m_tue_3",
        homeTeam: "العراق",
        homeFlagEmoji: "🇮🇶",
        awayTeam: "النرويج",
        awayFlagEmoji: "🇳🇴",
        leagueName: "مباريات ودية دولية 🌍",
        leagueType: "مباريات ودية دولية",
        matchTime: "21:00",
        matchDateDay: "الثلاثاء",
        isVip: true,
        firstHalfGoalsPredict: "أقل من 1.5 هدف",
        secondHalfGoalsPredict: "أكثر من 1.5 هدف",
        firstHalfScorePredict: "0 - 1",
        secondHalfScorePredict: "1 - 1",
        fullTimeScorePredict: "1 - 2",
        firstHalfCardsPredict: "أكثر من 1.5 بطاقة",
        secondHalfCardsPredict: "أكثر من 1.5 بطاقة",
        totalCardsPredict: "أكثر من 3.5 بطاقات",
        firstHalfCornersPredict: "أكثر من 3 ركنيات",
        secondHalfCornersPredict: "أكثر من 4 ركنيات",
        totalCornersPredict: "أكثر من 7.5 ركنيات",
        firstToScorePredict: "النرويج 🇳🇴",
        finalResultPredict: "فوز النرويج بقيادة هالاند (2)",
        freeCorePredict: "صراع تكتيكي حاد جداً، حسم الكرات العرضية والاندفاع البدني يصب في مصلحة النرويج.",
        freeScorePredict: "1 - 2",
        isLive: false
    },

    // --- WEDNESDAY (الأربعاء) ---
    {
        id: "m_wed_1",
        homeTeam: "الأرجنتين",
        homeFlagEmoji: "🇦🇷",
        awayTeam: "الجزائر",
        awayFlagEmoji: "🇩🇿",
        leagueName: "مباريات ودية دولية 🌍",
        leagueType: "مباريات ودية دولية",
        matchTime: "19:00",
        matchDateDay: "الأربعاء",
        isVip: true,
        firstHalfGoalsPredict: "أكثر من 0.5 هدف",
        secondHalfGoalsPredict: "أكثر من 1.5 هدف",
        firstHalfScorePredict: "1 - 1",
        secondHalfScorePredict: "1 - 1",
        fullTimeScorePredict: "2 - 2",
        firstHalfCardsPredict: "أكثر من 1.5 بطاقة",
        secondHalfCardsPredict: "أكثر من 1.5 بطاقة",
        totalCardsPredict: "أكثر من 3.5 بطاقات",
        firstHalfCornersPredict: "أكثر من 4 ركنيات",
        secondHalfCornersPredict: "أكثر من 4 ركنيات",
        totalCornersPredict: "أكثر من 8.5 ركنيات",
        firstToScorePredict: "الأرجنتين 🇦🇷",
        finalResultPredict: "تعادل تاريخي أو فوز الأرجنتين (1X)",
        freeCorePredict: "ملحمة كروية كبرى بين أبطال العالم ومحاربي الصحراء تنتهي بتعادل تاريخي شيق وممتع.",
        freeScorePredict: "2 - 2",
        isLive: false
    },
    {
        id: "m_wed_2",
        homeTeam: "النمسا",
        homeFlagEmoji: "🇦🇹",
        awayTeam: "الأردن",
        awayFlagEmoji: "🇯🇴",
        leagueName: "مباريات ودية دولية 🌍",
        leagueType: "مباريات ودية دولية",
        matchTime: "17:00",
        matchDateDay: "الأربعاء",
        isVip: false,
        firstHalfGoalsPredict: "أقل من 1.5 هدف",
        secondHalfGoalsPredict: "أكثر من 0.5 هدف",
        firstHalfScorePredict: "0 - 0",
        secondHalfScorePredict: "1 - 0",
        fullTimeScorePredict: "1 - 0",
        firstHalfCardsPredict: "أقل من 1.5 بطاقة",
        secondHalfCardsPredict: "أقل من 1.5 بطاقة",
        totalCardsPredict: "أقل من 3.5 بطاقات",
        firstHalfCornersPredict: "أكثر من 3.5 ركنيات",
        secondHalfCornersPredict: "أقل من 4 ركنيات",
        totalCornersPredict: "أقل من 8.5 ركنيات",
        firstToScorePredict: "النمسا 🇦🇹",
        finalResultPredict: "فوز النمسا (1)",
        freeCorePredict: "أداء دفاعي باسيل وبطولي للنشامى يحرج النمسا المنظمة بملعبها، لتنتهي النتيجة بفارق ضئيل.",
        freeScorePredict: "1 - 0",
        isLive: false
    },
    {
        id: "m_wed_3",
        homeTeam: "البرتغال",
        homeFlagEmoji: "🇵🇹",
        awayTeam: "الكونغو الديموقراطية",
        awayFlagEmoji: "🇨🇩",
        leagueName: "مباريات ودية دولية 🌍",
        leagueType: "مباريات ودية دولية",
        matchTime: "20:30",
        matchDateDay: "الأربعاء",
        isVip: true,
        firstHalfGoalsPredict: "أكثر من 0.5 هدف",
        secondHalfGoalsPredict: "أكثر من 1.5 هدف",
        firstHalfScorePredict: "2 - 0",
        secondHalfScorePredict: "1 - 1",
        fullTimeScorePredict: "3 - 1",
        firstHalfCardsPredict: "أقل من 1.5 بطاقة",
        secondHalfCardsPredict: "أقل من 1.5 بطاقة",
        totalCardsPredict: "أقل من 2.5 بطاقات",
        firstHalfCornersPredict: "أكثر من 4 ركنيات",
        secondHalfCornersPredict: "أكثر من 4 ركنيات",
        totalCornersPredict: "أكثر من 8.5 ركنيات",
        firstToScorePredict: "البرتغال 🇵🇹",
        finalResultPredict: "فوز البرتغال (1)",
        freeCorePredict: "براعة وعمق الهجوم البرتغالي بقيادة الدون رونالدو تضمن فوزاً رائعاً للجماهير.",
        freeScorePredict: "3 - 1",
        isLive: false
    },
    {
        id: "m_wed_4",
        homeTeam: "إنجلترا",
        homeFlagEmoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        awayTeam: "كرواتيا",
        awayFlagEmoji: "🇭🇷",
        leagueName: "مباريات ودية دولية 🌍",
        leagueType: "مباريات ودية دولية",
        matchTime: "21:45",
        matchDateDay: "الأربعاء",
        isVip: true,
        firstHalfGoalsPredict: "أقل من 1.5 هدف",
        secondHalfGoalsPredict: "أكثر من 0.5 هدف",
        firstHalfScorePredict: "0 - 0",
        secondHalfScorePredict: "1 - 1",
        fullTimeScorePredict: "1 - 1",
        firstHalfCardsPredict: "أقل من 1.5 بطاقة",
        secondHalfCardsPredict: "أكثر من 1.5 بطاقة",
        totalCardsPredict: "أكثر من 3.5 بطاقات",
        firstHalfCornersPredict: "أكثر من 4 ركنيات",
        secondHalfCornersPredict: "أكثر من 4 ركنيات",
        totalCornersPredict: "أكثر من 8.5 ركنيات",
        firstToScorePredict: "كرواتيا 🇭🇷",
        finalResultPredict: "تعادل إيجابي تكتيكي (X)",
        freeCorePredict: "صراع كلاسيكي ساخن بالوسط ينتهي بتقاسم السيطرة والنتيجة العادلة بين جيلين مميزين.",
        freeScorePredict: "1 - 1",
        isLive: false
    },
    {
        id: "m_wed_5",
        homeTeam: "غانا",
        homeFlagEmoji: "🇬🇭",
        awayTeam: "بنما",
        awayFlagEmoji: "🇵🇦",
        leagueName: "مباريات ودية دولية 🌍",
        leagueType: "مباريات ودية دولية",
        matchTime: "18:00",
        matchDateDay: "الأربعاء",
        isVip: false,
        firstHalfGoalsPredict: "أقل من 1.5 هدف",
        secondHalfGoalsPredict: "أكثر من 0.5 هدف",
        firstHalfScorePredict: "0 - 0",
        secondHalfScorePredict: "1 - 0",
        fullTimeScorePredict: "1 - 0",
        firstHalfCardsPredict: "أقل من 1.5 بطاقة",
        secondHalfCardsPredict: "أكثر من 1.5 بطاقة",
        totalCardsPredict: "أكثر من 2.5 بطاقات",
        firstHalfCornersPredict: "أكثر من 3.5 ركنيات",
        secondHalfCornersPredict: "أقل من 4 ركنيات",
        totalCornersPredict: "أقل من 8.5 ركنيات",
        firstToScorePredict: "غانا 🇬🇭",
        finalResultPredict: "فوز غانا أو تعادل (1X)",
        freeCorePredict: "مواجهة بدنية أفريقية لاتينية تنتهي لصالح منتخب النجوم السوداء غانا بفارق هدف.",
        freeScorePredict: "1 - 0",
        isLive: false
    }
];

// Major Leagues catalog
const leaguesData = [
    { type: "الرابطة الجزائرية الأولى", name: "🇩🇿 الرابطة الجزائرية الأولى", icon: "🇩🇿" },
    { type: "كأس العالم", name: "🏆 تصفيات كأس العالم 2026", icon: "🏆" },
    { type: "مباريات ودية دولية", name: "🌍 مباريات ودية دولية", icon: "🌍" }
];

// Update the VIP button in the header depending on the active state
function updateVipHeaderButton() {
    const btn = document.getElementById('vip-header-toggle');
    if (!btn) return;
    
    if (isVipUser) {
        btn.className = 'vip-status-badge vip-active';
        btn.innerHTML = '👑 VIP نشط';
    } else {
        btn.className = 'vip-status-badge free-user';
        btn.innerHTML = '🔑 تجربة VIP';
    }
}

// Toggle VIP mode from the header button
function toggleVipHeaderMode() {
    isVipUser = !isVipUser;
    localStorage.setItem('isVipUser', isVipUser ? 'true' : 'false');
    
    if (isVipUser) {
        const expiryTime = Date.now() + 7 * 24 * 60 * 60 * 1000;
        localStorage.setItem('vipExpiryTime', expiryTime);
        showToast("👑 تم تفعيل تجربة الـ VIP الذهبية بنجاح! جميع التوقعات مفتوحة الآن.");
    } else {
        localStorage.removeItem('vipExpiryTime');
        showToast("ℹ️ تم تبديل الوضع إلى العضوية المجانية المحدودة.");
    }
    
    // Re-render and reload views
    updateVipHeaderButton();
    renderVipSubscriptionBox();
    loadDashboardMatches();
    loadLiveMatches();
}

// Initialize assets on DOM elements ready
window.addEventListener('DOMContentLoaded', () => {
    // Check welcome subscription popup status first
    const welcomePopup = document.getElementById('welcome-subscription-popup');
    if (welcomePopup) {
        if (localStorage.getItem('telegram_subscribed') === 'true') {
            welcomePopup.style.display = 'none';
        } else {
            welcomePopup.style.display = 'flex';
        }
    }

    // Check if user has active VIP code, default to true on first run so they see all matches completely!
    if (localStorage.getItem('isVipUser') === null) {
        localStorage.setItem('isVipUser', 'true');
        isVipUser = true;
    } else {
        isVipUser = localStorage.getItem('isVipUser') === 'true';
    }

    // Set up the VIP button UI state in the header
    updateVipHeaderButton();

    // Render Day chips, Leagues catalog and first initial screen
    renderDayChips();
    renderLeagues();
    loadDashboardMatches();
    loadLiveMatches();
    updatePlanSelection();
    
    // Render the VIP code activation / countdown container
    renderVipSubscriptionBox();
});

// Tab Switcher Controller
function switchTab(tabId) {
    // Remove active class from all tab content wrappers
    document.querySelectorAll('.tab-content').forEach(element => {
        element.classList.remove('active');
    });
    // Add active class to selected tab content
    document.getElementById(`tab-${tabId}`).classList.add('active');

    // Remove active class from bottom bar navigation buttons
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('active');
    });
    // Add active class to clicked button
    document.getElementById(`nav-btn-${tabId}`).classList.add('active');

    // Execute tab specific loaders
    if (tabId === 'home') {
        loadDashboardMatches();
    } else if (tabId === 'live') {
        loadLiveMatches();
    } else if (tabId === 'leagues') {
        resetLeagueFilter();
    }
}

// Generate Day selector chips
function renderDayChips() {
    const chipContainer = document.getElementById('day-chips');
    chipContainer.innerHTML = '';
    const days = ["الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد", "الإثنين", "الثلاثاء"];
    
    days.forEach(day => {
        const btn = document.createElement('button');
        btn.className = `chip ${day === currentDay ? 'active' : ''}`;
        btn.textContent = day;
        btn.onclick = () => selectDay(day);
        chipContainer.appendChild(btn);
    });
}

// Select active day
function selectDay(dayName) {
    currentDay = dayName;
    renderDayChips();
    document.getElementById('current-day-title').textContent = `مباريات اليوم (${currentDay})`;
    loadDashboardMatches();
}

// Switch Ticket filters (Free, VIP, ALL)
function selectTicketFilter(filter) {
    currentTicketFilter = filter;
    
    // Update active visual chips states
    document.getElementById('filter-all-btn').classList.remove('active');
    document.getElementById('filter-free-btn').classList.remove('active');
    document.getElementById('filter-vip-btn').classList.remove('active');
    
    if (filter === 'ALL') document.getElementById('filter-all-btn').classList.add('active');
    if (filter === 'FREE') document.getElementById('filter-free-btn').classList.add('active');
    if (filter === 'VIP') document.getElementById('filter-vip-btn').classList.add('active');
    
    loadDashboardMatches();
}

// Redirects users to the VIP subscription/code section (free toggler disabled)
function toggleVipMode() {
    if (isVipUser) {
        showToast("👑 عضوية VIP نشطة وفعالة حالياً بالكامل!");
        return;
    }
    
    // Switch to the subscription tab
    switchTab('subscription');
    
    // Smooth scroll to the VIP code section
    setTimeout(() => {
        const vipCodeCard = document.querySelector('.vip-code-card');
        if (vipCodeCard) {
            vipCodeCard.scrollIntoView({ behavior: 'smooth' });
        }
    }, 150);
    
    showToast("🔑 تفعيل الـ VIP يتطلب إدخال رمز تفعيل! اشترك لإستلام كودك الخاص.");
}

// Render major leagues catalog list
function renderLeagues() {
    const gridEl = document.getElementById('leagues-list-grid');
    gridEl.innerHTML = '';
    
    leaguesData.forEach(league => {
        const item = document.createElement('div');
        item.className = "league-card";
        item.onclick = () => filterByLeague(league.type, league.name);
        
        item.innerHTML = `
            <div class="league-icon">${league.icon}</div>
            <span>${league.name}</span>
        `;
        gridEl.appendChild(item);
    });
}

// Filter matches of selected league
function filterByLeague(leagueType, leagueName) {
    document.getElementById('leagues-list-grid').classList.add('hidden');
    
    const detailContainer = document.getElementById('league-matches-detail-container');
    detailContainer.classList.remove('hidden');
    
    document.getElementById('selected-league-title').textContent = leagueName;
    
    const gridEl = document.getElementById('league-matches-grid');
    gridEl.innerHTML = '';
    
    // Filter matches belonging to this league type
    const matches = matchesData.filter(m => m.leagueType === leagueType);
    
    if (matches.length === 0) {
        gridEl.innerHTML = `
            <div class="prediction-locked-overlay" style="border:none; grid-column: 1/-1;">
                <span style="font-size: 1.25rem;">📭 لا توجد توقعات منشورة لهذه البطولة اليوم.</span>
                <span>يرجى تفقد الأيام الأخرى في قائمة المباريات الرئيسية.</span>
            </div>
        `;
        return;
    }
    
    matches.forEach(match => {
        gridEl.appendChild(createMatchCard(match));
    });
}

// Reset league detail view back to grid
function resetLeagueFilter() {
    document.getElementById('leagues-list-grid').classList.remove('hidden');
    document.getElementById('league-matches-detail-container').classList.add('hidden');
}

// Load current dashboard matches based on Day, Search, and Ticket filters
function loadDashboardMatches() {
    const gridEl = document.getElementById('matches-grid');
    gridEl.innerHTML = '';
    
    const searchQuery = document.getElementById('search-input').value.trim().toLowerCase();
    
    // Perform standard filters
    let filtered = matchesData.filter(match => match.matchDateDay === currentDay);
    
    if (currentTicketFilter === 'FREE') {
        filtered = filtered.filter(match => !match.isVip);
    } else if (currentTicketFilter === 'VIP') {
        filtered = filtered.filter(match => match.isVip);
    }
    
    if (searchQuery !== '') {
        filtered = filtered.filter(match => 
            match.homeTeam.toLowerCase().includes(searchQuery) || 
            match.awayTeam.toLowerCase().includes(searchQuery) ||
            match.leagueName.toLowerCase().includes(searchQuery)
        );
    }
    
    // Update amount badges text
    document.getElementById('match-count-badge').textContent = `${filtered.length} مباريات`;
    
    if (filtered.length === 0) {
        gridEl.innerHTML = `
            <div class="prediction-locked-overlay" style="border:none;">
                <span style="font-size: 1.15rem;">📭 لا تتوفر مباريات تطابق هذا الفلتر اليوم.</span>
                <span>يرجى كتابة كلمة بحث أخرى أو تغيير تصفية اليوم.</span>
            </div>
        `;
        return;
    }
    
    filtered.forEach(match => {
        gridEl.appendChild(createMatchCard(match));
    });
}

// Factory to spawn a match card on prediction grid
function createMatchCard(match) {
    const card = document.createElement('div');
    card.className = "match-card";
    card.onclick = () => openMatchDetails(match.id);
    
    const badgeType = match.isVip ? "vip" : "free";
    const badgeText = match.isVip ? "👑 VIP ذهبي" : "مجاني";
    
    // Decide prediction block layout if locked:
    let predictionSnippet = '';
    if (match.isVip && !isVipUser) {
        predictionSnippet = `
            <div class="prediction-locked-overlay" onclick="event.stopPropagation(); switchTab('subscription')">
                <div class="lock-icon">🔒</div>
                <span>هذا التوقع مخصص للأعضاء المشتركين بباقة VIP</span>
                <button>اشترك الآن للفتح 🚀</button>
            </div>
        `;
    } else {
        predictionSnippet = `
            <div class="match-prediction-snippet">
                <span class="snippet-tag">التوقع الموصى به:</span>
                <span class="snippet-predict-text text-gold">${match.finalResultPredict}</span>
            </div>
        `;
    }
    
    card.innerHTML = `
        <div class="match-card-header">
            <span class="match-league-label">${match.leagueName}</span>
            <span class="level-badge ${badgeType}">${badgeText}</span>
        </div>
        <div class="match-teams-row">
            <div class="teams-wrapper">
                <div class="team-box home">
                    <span class="flag">${match.homeFlagEmoji}</span>
                    <span class="team-name">${match.homeTeam}</span>
                </div>
                <div class="vs-or-time">${match.matchTime}</div>
                <div class="team-box away">
                    <span class="flag">${match.awayFlagEmoji}</span>
                    <span class="team-name">${match.awayTeam}</span>
                </div>
            </div>
        </div>
        ${predictionSnippet}
    `;
    
    return card;
}

// Open detailed prediction overlay Dialog modal
function openMatchDetails(matchId) {
    const match = matchesData.find(m => m.id === matchId);
    if (!match) return;
    
    const contentBox = document.getElementById('modal-details-content');
    contentBox.innerHTML = '';
    
    // Compile interactive content blocks
    let predictionDeets = '';
    if (match.isVip && !isVipUser) {
        predictionDeets = `
            <div class="prediction-locked-overlay" onclick="toggleModal(false); switchTab('subscription')" style="margin-top:20px;">
                <div class="lock-icon" style="font-size:2.5rem;">🔒</div>
                <h3 style="color:var(--color-accent-gold);">الحقائق والتوقعات مغلقة</h3>
                <span>توقعات نصف الوقت والأهداف والبطاقات التفصيلية لهذا اللقاء متاحة لباقة VIP فقط.</span>
                <button style="padding:10px 20px; font-size:0.85rem; margin-top:10px;">انتقل لصفحة الاشتراك 🚀</button>
            </div>
        `;
    } else {
        predictionDeets = `
            <div class="prediction-block-group" style="margin-top:20px;">
                <!-- Section 1: Full-Time predictions -->
                <div class="predict-section-box">
                    <h4>توقعات الوقت الأصلي للمباراة ⏱️</h4>
                    <div class="box-grid-predictions">
                        <div class="mini-pred-item full-width">
                            <span>النتيجة النهائية الرئيسية:</span>
                            <span class="text-gold">${match.finalResultPredict}</span>
                        </div>
                        <div class="mini-pred-item">
                            <span>النتيجة المتوقعة الحرة:</span>
                            <span>${match.freeCorePredict}</span>
                        </div>
                        <div class="mini-pred-item">
                            <span>توقع الأهداف الدقيق:</span>
                            <span class="text-gold">${match.freeScorePredict}</span>
                        </div>
                    </div>
                </div>

                <!-- Section 2: Half-Times predictions -->
                <div class="predict-section-box">
                    <h4>توقعات الشوط الأول والشوط الثاني 🌓</h4>
                    <div class="box-grid-predictions">
                        <div class="mini-pred-item">
                            <span>أهداف الشوط الأول:</span>
                            <span>${match.firstHalfGoalsPredict}</span>
                        </div>
                        <div class="mini-pred-item">
                            <span>أهداف الشوط الثاني:</span>
                            <span>${match.secondHalfGoalsPredict}</span>
                        </div>
                        <div class="mini-pred-item">
                            <span>نتيجة الشوط الأول:</span>
                            <span>${match.firstHalfScorePredict}</span>
                        </div>
                        <div class="mini-pred-item">
                            <span>نتيجة الشوط الثاني:</span>
                            <span>${match.secondHalfScorePredict}</span>
                        </div>
                    </div>
                </div>

                <!-- Section 3: Corners and Cards predictions -->
                <div class="predict-section-box">
                    <h4>توقعات الركنيات والبطاقات الملونة 🚩🟨</h4>
                    <div class="box-grid-predictions">
                        <div class="mini-pred-item">
                            <span>ملخص ركنيات اللقاء:</span>
                            <span>${match.totalCornersPredict}</span>
                        </div>
                        <div class="mini-pred-item">
                            <span>ملخص بطاقات اللقاء:</span>
                            <span>${match.totalCardsPredict}</span>
                        </div>
                        <div class="mini-pred-item">
                            <span>ركنيات الشوط الأول:</span>
                            <span>${match.firstHalfCornersPredict}</span>
                        </div>
                        <div class="mini-pred-item">
                            <span>بطاقات الشوط الأول:</span>
                            <span>${match.firstHalfCardsPredict}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    contentBox.innerHTML = `
        <div class="modal-teams-header">
            <div class="teams-wrapper">
                <div class="team-box home">
                    <span class="flag">${match.homeFlagEmoji}</span>
                    <span class="team-name">${match.homeTeam}</span>
                </div>
                <div class="vs-or-time">${match.matchTime}</div>
                <div class="team-box away">
                    <span class="flag">${match.awayFlagEmoji}</span>
                    <span class="team-name">${match.awayTeam}</span>
                </div>
            </div>
            <span class="modal-league-sub">${match.leagueName}</span>
        </div>
        ${predictionDeets}
    `;
    
    toggleModal(true);
}

// Toggle modal visibility
function toggleModal(show) {
    const modal = document.getElementById('match-details-modal');
    if (show) {
        modal.classList.remove('hidden');
    } else {
        modal.classList.add('hidden');
    }
}

// Close Modal on overlay backdrop clicks
function closeModal(event) {
    if (event.target.id === 'match-details-modal') {
        toggleModal(false);
    }
}

// Live Match State Simulation Loops
function loadLiveMatches() {
    const gridEl = document.getElementById('live-matches-grid');
    gridEl.innerHTML = '';
    
    const liveMatches = matchesData.filter(m => m.isLive);
    
    liveMatches.forEach(match => {
        const liveCard = document.createElement('div');
        liveCard.className = "live-match-card";
        liveCard.id = `live-card-${match.id}`;
        
        let livePredictSnippet = '';
        if (match.isVip && !isVipUser) {
            livePredictSnippet = `
                <div class="prediction-locked-overlay" onclick="switchTab('subscription')" style="margin-top:12px;">
                    <div class="lock-icon">🔒 توقعات اللايف مغلقة</div>
                    <span>اشترك في باقة VIP لتتبع توصيات اللايف من مدرجات الملعب</span>
                </div>
            `;
        } else {
            livePredictSnippet = `
                <div class="match-prediction-snippet" style="margin-top:12px; border-top:1px dashed rgba(255,255,255,0.05); padding-top:12px;">
                    <span class="snippet-tag">توصية لايف عاجلة 🔥:</span>
                    <span class="snippet-predict-text text-gold">${match.finalResultPredict} - ${match.freeScorePredict}</span>
                </div>
            `;
        }
        
        const currentEvent = match.lastEvent || "أحداث المباراة المباشرة مستمرة بين الفريقين بكل حماس والتنافس يشتد.";
        
        liveCard.innerHTML = `
            <div class="live-indicator-wrapper">
                <span class="match-league-label">${match.leagueName}</span>
                <span class="live-minute-badge" id="live-min-${match.id}">${match.liveMinute}'</span>
            </div>
            
            <div class="live-scores-row">
                <div class="live-score-team home">
                    <span class="flag">${match.homeFlagEmoji}</span>
                    <span class="team-name">${match.homeTeam}</span>
                </div>
                <div class="live-score-digits" id="live-score-${match.id}">${match.liveHomeScore} - ${match.liveAwayScore}</div>
                <div class="live-score-team away">
                    <span class="flag">${match.awayFlagEmoji}</span>
                    <span class="team-name">${match.awayTeam}</span>
                </div>
            </div>
            
            <div class="live-stats-row">
                <div class="live-stat-item">
                    <span>🚩 ركنيات:</span>
                    <strong id="live-corners-${match.id}">${match.liveCorners}</strong>
                </div>
                <div class="live-stat-item">
                    <span>🟨 بطاقات:</span>
                    <strong id="live-cards-${match.id}">${match.liveCards}</strong>
                </div>
            </div>
            
            <div class="live-ticker-timeline">
                <h4>🎙️ شريط الأحداث المباشر:</h4>
                <div class="ticker-event-text" id="live-event-${match.id}">${currentEvent}</div>
            </div>
            
            ${livePredictSnippet}
        `;
        
        gridEl.appendChild(liveCard);
    });
}

// Live simulation tick events (Runs every 10 seconds to mimic ticking sports state)
setInterval(() => {
    const activeMatch = matchesData.find(m => m.id === 'm_wed_1');
    if (!activeMatch) return;
    
    // Tick current minute up to 90
    if (activeMatch.liveMinute < 90) {
        activeMatch.liveMinute += 1;
        
        const curMin = activeMatch.liveMinute;
        
        if (curMin === 55) {
            activeMatch.liveCorners = 5;
            activeMatch.lastEvent = "⏱️ بداية الشوط الثاني وسط أداء تكتيكي حذر ومحاولات من غينيا لتعديل النتيجة.";
        } else if (curMin === 65) {
            activeMatch.liveCards = 2;
            activeMatch.lastEvent = "🟨 بطاقة صفراء ثانية للاعب غينيا بعد احتكاك خشن مع صانع الألعاب الجزائري.";
        } else if (curMin === 72) {
            activeMatch.liveHomeScore = 2;
            activeMatch.lastEvent = "⚽ قووووول ثاني للجزائر! تسديدة من خارج منطقة العمليات تهز الشباك وتعلن تقدم الخضر 2-0 🎉!";
            showToast("📣 قوووووول ثاااني للجزائر! النتيجة الآن 2 - 0.");
        } else if (curMin === 88) {
            activeMatch.liveHomeScore = 3;
            activeMatch.lastEvent = "⚽ قووووول ثالث للجزائر! رأسية متقنة تنهي آمال المنافس وترفع النتيجة إلى 3-0 🥳!";
            showToast("📣 الهدف الثالث للجزائر! ثلاثية ساحقة في الشباك الغينية.");
        } else if (curMin === 90) {
            activeMatch.lastEvent = "🏁 نهاية القمة الكروية بفوز مستحق وجماهيري لمحاربي الصحراء 3-1! تهانينا لجميع المشتركين.";
            showToast("🏁 صفارة نهاية اللقاء: الجزائر تفوز 3 - 1.");
        } else {
            // Minor general events to maintain realism
            const randomInPlaySentences = [
                "صراعات بدنية قوية في خط الوسط ومحاولات لبناء هجمات منظمة.",
                "تمريرات قصيرة لمنتخب الجزائر لاستعادة السيطرة وتهدئة ريتم اللقاء.",
                "انطلاقة هجومية سريعة للجزائر عبر الجناح تقطع بتدخل دفاعي قوي.",
                "ضغط منظم من الجزائر وغينيا ترجع للتغطية الدفاعية الكاملة.",
                "تسديدة قوية ومباغتة لصالح منتخب الجزائر خارج أرضية الملعب ركنية لم تستغل."
            ];
            
            if (curMin % 7 === 0) {
                activeMatch.lastEvent = randomInPlaySentences[Math.floor(Math.random() * randomInPlaySentences.length)];
            }
        }
        
        // Dynamically update elements in the DOM if currently viewing the Live tab
        const liveMinEl = document.getElementById(`live-min-${activeMatch.id}`);
        const liveScoreEl = document.getElementById(`live-score-${activeMatch.id}`);
        const liveCornersEl = document.getElementById(`live-corners-${activeMatch.id}`);
        const liveCardsEl = document.getElementById(`live-cards-${activeMatch.id}`);
        const liveEventEl = document.getElementById(`live-event-${activeMatch.id}`);
        
        if (liveMinEl) liveMinEl.textContent = `${curMin}'`;
        if (liveScoreEl) liveScoreEl.textContent = `${activeMatch.liveHomeScore} - ${activeMatch.liveAwayScore}`;
        if (liveCornersEl) liveCornersEl.textContent = activeMatch.liveCorners;
        if (liveCardsEl) liveCardsEl.textContent = activeMatch.liveCards;
        if (liveEventEl && activeMatch.lastEvent) {
            liveEventEl.textContent = activeMatch.lastEvent;
            liveEventEl.classList.add('animate-pulse');
            setTimeout(() => liveEventEl.classList.remove('animate-pulse'), 1000);
        }
    }
}, 7000);

// Pricing Plan Selection Controller
function selectPlan(planKey, price) {
    let name = '';
    if (planKey === 'DAILY') name = 'يومي 📅';
    if (planKey === 'WEEKLY') name = 'أسبوعي 🎟️';
    if (planKey === 'MONTHLY') name = 'شهري 🚀';
    if (planKey === 'YEARLY') name = 'سنوي 👑';
    
    selectedPlan = { name, price, key: planKey };
    
    // Remove selected state from all plans
    document.querySelectorAll('.plan-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selected state to the clicked plan card element
    event.currentTarget.classList.add('selected');
    
    updatePlanSelection();
}

// Render subscription plan selection info box
function updatePlanSelection() {
    document.getElementById('preview-plan-name').textContent = selectedPlan.name;
    document.getElementById('preview-plan-price').textContent = `${selectedPlan.price} د.ج`;
}

// Filter matches search input handler
function filterMatches() {
    loadDashboardMatches();
}

// Copy account RIP or CCP to clipboard with visual Feedbacks
function copyText(elementId, successMsg) {
    const textToCopy = document.getElementById(elementId).textContent;
    
    // HTML-5 clipboard copy API
    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(successMsg);
    }).catch(err => {
        console.error('Failed to copy RIP/CCP:', err);
        showToast("⚠️ حدث خطأ أثناء النسخ التلقائي.");
    });
}

// Spawns and animations of Toast popup
function showToast(message) {
    const toast = document.getElementById('toast-notification');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('hidden');
    
    // Auto clear after 3 seconds
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// Function to track clicking Telegram channel connection before activation
function trackVipTelegramClick() {
    sessionStorage.setItem('vip_channel_joined', 'true');
    showToast("📢 تم فتح رابط قناة التوقعات! شكراً لانضمامك.");
}

// Function to deactivate VIP (for testing or switching codes)
function deactivateVipForDemo() {
    isVipUser = false;
    localStorage.setItem('isVipUser', 'false');
    localStorage.removeItem('vipExpiryTime');
    if (window.vipInterval) clearInterval(window.vipInterval);
    updateVipHeaderButton();
    renderVipSubscriptionBox();
    loadDashboardMatches();
    loadLiveMatches();
    showToast("ℹ️ تم إلغاء تفعيل الـ VIP بنجاح.");
}

// Function to start the active subscription timer
function startVipCountdown() {
    let expiry = localStorage.getItem('vipExpiryTime');
    if (!expiry) {
        // Default 7 days from now
        expiry = Date.now() + 7 * 24 * 60 * 60 * 1000;
        localStorage.setItem('vipExpiryTime', expiry);
    }
    
    function updateTimer() {
        const timerEl = document.getElementById('vip-countdown-timer');
        if (!timerEl) return;
        
        const now = Date.now();
        const diff = expiry - now;
        
        if (diff <= 0) {
            isVipUser = false;
            localStorage.setItem('isVipUser', 'false');
            localStorage.removeItem('vipExpiryTime');
            if (window.vipInterval) clearInterval(window.vipInterval);
            renderVipSubscriptionBox();
            loadDashboardMatches();
            loadLiveMatches();
            showToast("⚠️ انتهى وقت اشتراك الـ VIP الخاص بك! يرجى إدخال رمز جديد للتفعيل.");
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        const pad = (num) => String(num).padStart(2, '0');
        
        timerEl.innerHTML = `
            <div style="background: rgba(255,255,255,0.05); padding: 5px 8px; border-radius: 4px; min-width: 40px; text-align: center;"><span style="color: var(--color-accent-gold); font-weight: 900;">${pad(days)}</span><small style="display:block; font-size:0.6rem; color:#64748b; margin-top:2px;">يوم</small></div>
            <div style="color: var(--color-accent-gold); font-weight: bold; font-size: 1.2rem; align-self: center; margin-bottom: 12px;">:</div>
            <div style="background: rgba(255,255,255,0.05); padding: 5px 8px; border-radius: 4px; min-width: 40px; text-align: center;"><span style="color: #f8fafc; font-weight: 900;">${pad(hours)}</span><small style="display:block; font-size:0.6rem; color:#64748b; margin-top:2px;">ساعة</small></div>
            <div style="color: var(--color-accent-gold); font-weight: bold; font-size: 1.2rem; align-self: center; margin-bottom: 12px;">:</div>
            <div style="background: rgba(255,255,255,0.05); padding: 5px 8px; border-radius: 4px; min-width: 40px; text-align: center;"><span style="color: #f8fafc; font-weight: 900;">${pad(minutes)}</span><small style="display:block; font-size:0.6rem; color:#64748b; margin-top:2px;">دقيقة</small></div>
            <div style="color: var(--color-accent-gold); font-weight: bold; font-size: 1.2rem; align-self: center; margin-bottom: 12px;">:</div>
            <div style="background: rgba(255,255,255,0.05); padding: 5px 8px; border-radius: 4px; min-width: 40px; text-align: center;"><span style="color: #fca5a5; font-weight: 900;">${pad(seconds)}</span><small style="display:block; font-size:0.6rem; color:#64748b; margin-top:2px;">ثانية</small></div>
        `;
    }
    
    updateTimer();
    if (window.vipInterval) clearInterval(window.vipInterval);
    window.vipInterval = setInterval(updateTimer, 1000);
}

// Render subscription card or active countdown dynamic elements
function renderVipSubscriptionBox() {
    const container = document.getElementById('vip-subscription-box');
    if (!container) return;
    
    const topMessage = document.getElementById('vip-top-message');
    if (topMessage) {
        topMessage.style.display = isVipUser ? 'none' : 'flex';
    }
    
    if (isVipUser) {
        container.innerHTML = `
            <div class="vip-active-card" style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); border: 2px solid var(--color-accent-gold); border-radius: 12px; padding: 22px; box-shadow: 0 4px 22px rgba(251, 191, 36, 0.22); text-align: center; position: relative; overflow: hidden; width: 100%; box-sizing: border-box;">
                <div style="position: absolute; top: 12px; right: -25px; background: var(--color-accent-gold); color: #000; font-size: 0.65rem; font-weight: bold; padding: 3px 25px; transform: rotate(45deg); box-shadow: 0 2px 4px rgba(0,0,0,0.3);">نشط 👑</div>
                <div style="font-size: 2.3rem; margin-bottom: 6px;">👑</div>
                <h3 style="color: var(--color-accent-gold); font-size: 1.3rem; font-weight: 800; margin-bottom: 5px;">أنت الآن عضو VIP ذهبي!</h3>
                <p style="color: #cbd5e1; font-size: 0.85rem; margin-bottom: 15px; line-height: 1.45;">تم تفعيل العضوية الذهبية وتأمين حسابك بالكامل. يمكنك تصفح مجريات الشوط الأول والبطاقات والركنيات لكل اللقاءات والبطولات بدون أي حظر.</p>
                
                <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(251,191,36,0.12); border-radius: 10px; padding: 14px; margin-bottom: 14px;">
                    <span style="display: block; color: #a1a1aa; font-size: 0.75rem; margin-bottom: 8px;">الوقت المتبقي لانتهاء صلاحية اشتراكك:</span>
                    <div id="vip-countdown-timer" style="font-family: inherit; font-size: 1.2rem; font-weight: bold; color: #f8fafc; display: flex; justify-content: center; align-items: stretch; gap: 8px; direction: ltr;">
                        <!-- Updated elegantly under timer interval -->
                    </div>
                </div>
                
                <button onclick="deactivateVipForDemo()" style="background: transparent; border: 1px dashed rgba(255,255,255,0.15); color: #71717a; font-size: 0.72rem; padding: 5px 12px; border-radius: 6px; cursor: pointer; transition: color 0.15s; outline: none; margin-top: 5px;">
                    ✖ إلغاء تشغيل باقة الـ VIP للتجربة
                </button>
            </div>
        `;
        startVipCountdown();
    } else {
        container.innerHTML = `
            <div class="vip-code-header">
                <span class="vip-gem-icon">👑</span>
                <h3>تنشيط باقة الـ VIP الذهبية</h3>
            </div>
            
            <p style="color: #cbd5e1; font-size: 0.88rem; margin: -5px 0 16px 0; line-height: 1.45; text-align: right;">
                يرجى تطبيق الخطوتين الإجباريتين بالترتيب لتنشيط اشتراكك ورؤية توقعات المحترفين فوراً:
            </p>
            
            <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 10px; padding: 14px; margin-bottom: 16px; border-right: 4px solid #0088cc;">
                <div style="display: flex; gap: 10px; align-items: start; margin-bottom: 10px;">
                    <div style="background: #0088cc; color: #fff; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.8rem; flex-shrink: 0;">1</div>
                    <p style="margin: 0; font-size: 0.85rem; color: #f1f5f9; line-height: 1.4; text-align: right; font-weight: bold;">
                        الانضمام لقناة التوقعات الرسمية (إجباري للغاية):
                    </p>
                </div>
                
                <a href="https://t.me/+ehjpXxVwbdVkZTc8" target="_blank" onclick="trackVipTelegramClick()" class="telegram-join-btn" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: linear-gradient(135deg, #0088cc 0%, #00a2ed 100%); color: white; padding: 11px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: opacity 0.2s; box-shadow: 0 4px 10px rgba(0, 136, 204, 0.25); font-size: 0.88rem;">
                    <span>📢 اضغط هنا أولاً للاشتراك بالقناة الرسمية</span>
                </a>
            </div>

            <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 10px; padding: 14px; margin-bottom: 16px; border-right: 4px solid var(--color-accent-gold);">
                <div style="display: flex; gap: 10px; align-items: start; margin-bottom: 10px;">
                    <div style="background: var(--color-accent-gold); color: #000; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.8rem; flex-shrink: 0;">2</div>
                    <p style="margin: 0; font-size: 0.85rem; color: #f1f5f9; line-height: 1.4; text-align: right; font-weight: bold;">
                        أدخل كود تفعيل الـ VIP الخاص بك:
                    </p>
                </div>
                
                <div class="vip-input-group">
                    <input type="text" id="vip-code-input" placeholder="ادخل رمز VIP المكون من كود أو أحرف 🔒" class="vip-input-field">
                    <button class="vip-submit-btn" onclick="submitVipCode()">تفعيل العضوية ⚡</button>
                </div>
            </div>
            
            <p style="font-size: 0.78rem; color: #94a3b8; text-align: center; margin: 0; line-height: 1.4;">
                ⚠️ لا تملك كود تفعيل؟ اختر باقة جارية في الأسفل واحصل على رمزك من المشرف بعد الدوران الدفعي.
            </p>
        `;
    }
}

// Function to submit VIP Code
function submitVipCode() {
    // 1. Enforce Telegram channel joining check
    if (sessionStorage.getItem('vip_channel_joined') !== 'true') {
        showToast("⚠️ خطوة إجبارية: يجب الضغط أولاً على رابط الانضمام لقناة التوقعات بالتيليغرام (الخطوة 1) لتفعيل باقة الـ VIP!");
        return;
    }
    
    const inputEl = document.getElementById('vip-code-input');
    if (!inputEl) return;
    
    const code = inputEl.value.trim().toUpperCase();
    if (!code) {
        showToast("⚠️ الرجاء إدخال رمز VIP أولاً!");
        return;
    }
    
    // Array of active VIP validation codes, randomized and completely hidden from the user interface
    const validCodes = [
        "DZ-VIP-2026-N9", "TALAL-PREM-99", "DZ-PRO-7128-X", "VIP-GOLD-559", 
        "VIP-6633-DZ", "DZ-CH-7789-V", "ALGERIA-PREM-88", "DZ-WINNER-2026",
        "VIP-DZ-8812-P", "VIP2026", "DZ2026", "TALAL", "CCP-PAID-99", "DZ-777",
        "CHARAF-GOLD-26", "PREM-DZ-3341", "VIP-SLOT-091", "SECURE-VIP-425",
        "DZ-ACTIVE-88", "DZ-CHAMPS-2026", "DZ-PRO-2026", "SPORT-VIP-88", "ALGER-DRAFT"
    ];
    if (validCodes.includes(code)) {
        isVipUser = true;
        localStorage.setItem('isVipUser', 'true');
        
        // Define exact expiration time (e.g. 7 days from now)
        const expiryTime = Date.now() + 7 * 24 * 60 * 60 * 1000;
        localStorage.setItem('vipExpiryTime', expiryTime);
        
        showToast("👑 تم تفعيل رمز الـ VIP بنجاح! تم تنشيط ميزات VIP الذهبية لمدة 7 أيام كاملة 🎉");
        
        // Reload matching lists and layout containers
        updateVipHeaderButton();
        renderVipSubscriptionBox();
        loadDashboardMatches();
        loadLiveMatches();
    } else {
        showToast("❌ الرمز المدخل غير صحيح أو منتهي الصلاحية! يرجى التواصل مع الإدارة واستلام كود مرخص.");
    }
}

// --- MANDATORY WELCOME TELEGRAM SUBSCRIPTION POPUP HANDLERS ---
let hasClickedTelegramLink = false;

function markWelcomeLinkClicked() {
    hasClickedTelegramLink = true;
    localStorage.setItem('telegram_link_clicked', 'true');
    showToast("📢 تم فتح رابط القناة! يرجى الاشتراك بمجرد فتح تيليجرام ثم العودة للتفعيل.");
}

function confirmSubscriptionAndProceed() {
    const btn = document.getElementById('btn-confirm-subscription');

    if (btn) {
        btn.disabled = true;
        btn.innerHTML = `⏳ جاري التحقق من الاشتراك...`;
    }

    setTimeout(() => {
        showToast("✅ تم تفعيل حسابك بنجاح! أهلاً بك في توقعات دي زاد.");
        localStorage.setItem('telegram_subscribed', 'true');
        localStorage.setItem('telegram_link_clicked', 'true');
        
        const popup = document.getElementById('welcome-subscription-popup');
        if (popup) {
            popup.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            popup.style.opacity = '0';
            popup.style.transform = 'scale(0.95)';
            setTimeout(() => {
                popup.style.display = 'none';
            }, 400);
        }
    }, 1500);
}
