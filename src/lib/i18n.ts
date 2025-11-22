'use client'

export type Language = "cs" | "uk" | "ru" | "en";

export const defaultLanguage: Language = "cs";

export type TranslationDict = Record<string, string>;
export type Translations = Record<Language, TranslationDict>;

export const translations: Translations = {
  cs: {
    // Global
    "app.title": "Seznamka",
    "app.tagline": "Propoj se • Poznej • Patři",
    "cta.join": "Přidej se ke komunitě",
    "cta.sub": "Buď součástí něčeho výjimečného. Tvé nové spojení čeká.",
    "footer.copy": "© 2025 Seznamka • Tvoříme spojení, budujeme komunitu",

    // Home
    "home.hero.title": "Seznamka",
    "home.hero.subtitle": "Propoj se • Poznej • Patři",
    "home.section.title": "Poznávej nové lidi. Buduj opravdové vztahy.",
    "home.section.desc":
      "Po střední je těžší poznávat nové lidi. Seznamka vytváří bezpečné, organizované akce, kde se studenti mohou přirozeně setkávat tváří v tvář bez tlaku.",

    "benefit.safe.title": "Bezpečné prostředí",
    "benefit.safe.desc": "Žádné falešné profily. Skuteční lidé v organizovaném prostředí.",
    "benefit.natural.title": "Přirozená setkání",
    "benefit.natural.desc": "Poznávej se skrze hry a aktivity, ne trapné small talky.",
    "benefit.community.title": "Komunita na prvním místě",
    "benefit.community.desc": "Propojujeme studenty napříč fakultami a univerzitami.",

    // Join Page
    "nav.back": "← Zpět",
    "join.welcome.title": "Vítej v Seznamce!",
    "join.welcome.desc": "Děkujeme, že ses přidal/a! Brzy se ozveme s detaily o dalším eventu.",
    "join.whatsnext": "Co dál?",
    "join.check.email": "Zkontroluj e-mail – posíláme potvrzení",
    "join.follow.ig": "Sleduj nás na Instagramu pro novinky",
    "join.get.ready": "Připrav se poznat skvělé lidi!",

    "join.header.title": "Seznamka",
    "join.header.back": "← Zpět",

    "join.main.title": "Přidej se ke komunitě",
    "join.main.subtitle": "Vyplň formulář a staň se součástí něčeho výjimečného",

    "form.name": "Celé jméno *",
    "form.name.placeholder": "Zadej své jméno",
    "form.email": "E-mailová adresa *",
    "form.email.placeholder": "tvoje.email@university.cz",
    "form.university": "Univerzita *",
    "form.university.placeholder": "např. ČVUT, UK, VŠE",
    "form.faculty": "Fakulta *",
    "form.faculty.placeholder": "např. FIT, FEL",
    "form.year": "Ročník studia *",
    "form.year.select": "Vyber ročník",
    "form.year.1": "1. ročník",
    "form.year.2": "2. ročník",
    "form.year.3": "3. ročník",
    "form.year.4": "4. ročník",
    "form.year.5plus": "5. ročník+",
    "form.year.masters": "Magisterské",
    "form.year.phd": "Doktorské",
    "form.looking": "Co hledáš? *",
    "form.looking.friends": "Nové přátele",
    "form.looking.relationship": "Vztah",
    "form.looking.both": "Obojí",
    "form.looking.networking": "Networking",
    "form.interests": "Tvé zájmy a koníčky",
    "form.interests.placeholder": "Napiš o svých zájmech nebo o tom, co tě baví...",
    "form.instagram": "Instagram (volitelné)",
    "form.instagram.placeholder": "@tveuzivatelskejmeno",
    "form.submit": "Přidej se do komunity Seznamka",
    "form.agree": "Vstupem souhlasíš s bezpečnou a respektující komunitou",

    "join.expect.title": "🎯 Co očekávat",
    "join.expect.1": "• Pravidelné měsíční nebo dvoutýdenní akce",
    "join.expect.2": "• Zábavné hry a aktivity",
    "join.expect.3": "• Seznámení se studenty z různých fakult",
    "join.expect.4": "• Bezpečné a organizované prostředí",

    "join.why.title": "💡 Proč se přidat?",
    "join.why.1": "• Vystoupíš z komfortní zóny",
    "join.why.2": "• Bez tlaku, jen opravdová spojení",
    "join.why.3": "• Méně samoty a izolace",
    "join.why.4": "• Buduj svou sociální síť",

    "home.cta.small": "Staň se součástí něčeho výjimečného. Tvé další spojení čeká.",
  },
  uk: {
    // Global
    "app.title": "Seznamka",
    "app.tagline": "Знайомся • Зустрічай • Належ",
    "cta.join": "Приєднатися до спільноти",
    "cta.sub": "Стань частиною чогось особливого. Твоє нове знайомство вже чекає.",
    "footer.copy": "© 2025 Seznamka • Створюємо зв'язки, будуємо спільноту",

    // Home
    "home.hero.title": "Seznamka",
    "home.hero.subtitle": "Знайомся • Зустрічай • Належ",
    "home.section.title": "Знайом нових людей. Створюй справжні зв'язки.",
    "home.section.desc":
      "Після школи знайомитися стає складніше. Seznamka організовує безпечні події, де студенти можуть природно спілкуватися вживу без тиску.",

    "benefit.safe.title": "Безпечне середовище",
    "benefit.safe.desc": "Жодних фейкових профілів. Лише реальні люди в організованій обстановці.",
    "benefit.natural.title": "Природні зустрічі",
    "benefit.natural.desc": "Знайомся через ігри та активності, а не ніякові розмови.",
    "benefit.community.title": "Спільнота понад усе",
    "benefit.community.desc": "Об'єднуємо студентів різних факультетів і університетів.",

    // Join Page
    "nav.back": "← Назад",
    "join.welcome.title": "Ласкаво просимо до Seznamka!",
    "join.welcome.desc": "Дякуємо за приєднання! Незабаром надішлемо деталі наступної події.",
    "join.whatsnext": "Що далі?",
    "join.check.email": "Перевір свій email — надішлемо підтвердження",
    "join.follow.ig": "Підписуйся на Instagram для оновлень",
    "join.get.ready": "Готуйся знайомитися з чудовими людьми!",

    "join.header.title": "Seznamka",
    "join.header.back": "← Назад",

    "join.main.title": "Приєднайся до спільноти",
    "join.main.subtitle": "Заповни форму та стань частиною чогось особливого",

    "form.name": "Повне ім'я *",
    "form.name.placeholder": "Введи своє ім'я",
    "form.email": "Електронна адреса *",
    "form.email.placeholder": "your.email@university.cz",
    "form.university": "Університет *",
    "form.university.placeholder": "наприклад, ČVUT, UK, VŠЕ",
    "form.faculty": "Факультет *",
    "form.faculty.placeholder": "наприклад, FIT, FEL",
    "form.year": "Рік навчання *",
    "form.year.select": "Обери рік",
    "form.year.1": "1-й рік",
    "form.year.2": "2-й рік",
    "form.year.3": "3-й рік",
    "form.year.4": "4-й рік",
    "form.year.5plus": "5-й рік+",
    "form.year.masters": "Магістратура",
    "form.year.phd": "PhD",
    "form.looking": "Що шукаєш? *",
    "form.looking.friends": "Нові друзі",
    "form.looking.relationship": "Стосунки",
    "form.looking.both": "Обидва",
    "form.looking.networking": "Нетворкінг",
    "form.interests": "Твої інтереси та хобі",
    "form.interests.placeholder": "Розкажи про свої інтереси або що тебе надихає...",
    "form.instagram": "Instagram (необов'язково)",
    "form.instagram.placeholder": "@твійнікнейм",
    "form.submit": "Приєднатися до спільноти Seznamka",
    "form.agree": "Приєднуючись, ти погоджуєшся з правилами безпечної та поважної спільноти",

    "join.expect.title": "🎯 Чого очікувати",
    "join.expect.1": "• Регулярні щомісячні або двотижневі події",
    "join.expect.2": "• Веселі ігри та активності",
    "join.expect.3": "• Знайомство зі студентами різних факультетів",
    "join.expect.4": "• Безпечне та організоване середовище",

    "join.why.title": "💡 Чому варто долучитися?",
    "join.why.1": "• Вийдеш із зони комфорту",
    "join.why.2": "• Без тиску, лише щирі знайомства",
    "join.why.3": "• Менше самотності та ізоляції",
    "join.why.4": "• Розширюй своє коло спілкування",

    "home.cta.small": "Стань частиною чогось особливого. Твоє наступне знайомство чекає.",
  },
  ru: {
    // Global
    "app.title": "Seznamka",
    "app.tagline": "Знакомься • Встречайся • Принадлежи",
    "cta.join": "Присоединиться к сообществу",
    "cta.sub": "Стань частью чего-то особенного. Твоё новое знакомство уже ждёт.",
    "footer.copy": "© 2025 Seznamka • Создаём связи, строим сообщество",

    // Home
    "home.hero.title": "Seznamka",
    "home.hero.subtitle": "Знакомься • Встречайся • Принадлежи",
    "home.section.title": "Знакомься с новыми людьми. Строй настоящие связи.",
    "home.section.desc":
      "После школы знакомиться становится сложнее. Seznamka организует безопасные мероприятия, где студенты могут естественно общаться лицом к лицу без давления.",

    "benefit.safe.title": "Безопасная среда",
    "benefit.safe.desc": "Никаких фейковых профилей. Только реальные люди в организованной обстановке.",
    "benefit.natural.title": "Естественные встречи",
    "benefit.natural.desc": "Знакомься через игры и активности, а не неловкий small talk.",
    "benefit.community.title": "Сообщество прежде всего",
    "benefit.community.desc": "Соединяем студентов разных факультетов и университетов.",

    // Join Page
    "nav.back": "← Назад",
    "join.welcome.title": "Добро пожаловать в Seznamka!",
    "join.welcome.desc": "Спасибо за присоединение! Скоро свяжемся с деталями следующего мероприятия.",
    "join.whatsnext": "Что дальше?",
    "join.check.email": "Проверь почту — пришлём подтверждение",
    "join.follow.ig": "Подписывайся на Instagram для обновлений",
    "join.get.ready": "Готовься знакомиться с классными людьми!",

    "join.header.title": "Seznamka",
    "join.header.back": "← Назад",

    "join.main.title": "Присоединяйся к сообществу",
    "join.main.subtitle": "Заполни форму и стань частью чего-то особенного",

    "form.name": "Полное имя *",
    "form.name.placeholder": "Введите ваше имя",
    "form.email": "Электронная почта *",
    "form.email.placeholder": "your.email@university.cz",
    "form.university": "Университет *",
    "form.university.placeholder": "например, ČVUT, UK, VŠE",
    "form.faculty": "Факультет *",
    "form.faculty.placeholder": "например, FIT, FEL",
    "form.year": "Курс обучения *",
    "form.year.select": "Выберите курс",
    "form.year.1": "1 курс",
    "form.year.2": "2 курс",
    "form.year.3": "3 курс",
    "form.year.4": "4 курс",
    "form.year.5plus": "5 курс+",
    "form.year.masters": "Магистратура",
    "form.year.phd": "Аспирантура",
    "form.looking": "Что вы ищете? *",
    "form.looking.friends": "Новых друзей",
    "form.looking.relationship": "Отношения",
    "form.looking.both": "И то, и другое",
    "form.looking.networking": "Нетворкинг",
    "form.interests": "Ваши интересы и хобби",
    "form.interests.placeholder": "Расскажите о своих интересах или увлечениях...",
    "form.instagram": "Instagram (необязательно)",
    "form.instagram.placeholder": "@вашникнейм",
    "form.submit": "Вступить в сообщество Seznamka",
    "form.agree": "Присоединяясь, вы соглашаетесь с правилами безопасного и уважительного сообщества",

    "join.expect.title": "🎯 Чего ожидать",
    "join.expect.1": "• Регулярные ежемесячные или раз в две недели мероприятия",
    "join.expect.2": "• Весёлые игры и активности",
    "join.expect.3": "• Знакомства со студентами разных факультетов",
    "join.expect.4": "• Безопасная и организованная среда",

    "join.why.title": "💡 Зачем присоединяться?",
    "join.why.1": "• Выйдешь из зоны комфорта",
    "join.why.2": "• Без давления — только искренние знакомства",
    "join.why.3": "• Меньше одиночества и изоляции",
    "join.why.4": "• Расширяй свой круг общения",

    "home.cta.small": "Стань частью чего-то особенного. Твоё следующее знакомство уже ждёт.",
  },
  en: {
    // Global
    "app.title": "Seznamka",
    "app.tagline": "Connect • Meet • Belong",
    "cta.join": "Join the Community",
    "cta.sub": "Be part of something special. Your next connection awaits.",
    "footer.copy": "© 2025 Seznamka • Creating connections, building community",

    // Home
    "home.hero.title": "Seznamka",
    "home.hero.subtitle": "Connect • Meet • Belong",
    "home.section.title": "Meet New People. Build Real Connections.",
    "home.section.desc":
      "After high school, meeting new people becomes challenging. Seznamka creates safe, organized events where university students can connect face-to-face in a natural, pressure-free environment.",

    "benefit.safe.title": "Safe Environment",
    "benefit.safe.desc": "No fake profiles. Real people, real connections in organized settings.",
    "benefit.natural.title": "Natural Meetings",
    "benefit.natural.desc": "Meet people through games and activities, not awkward small talk.",
    "benefit.community.title": "Community First",
    "benefit.community.desc": "Connect students from different faculties and universities.",

    // Join Page
    "nav.back": "← Back",
    "join.welcome.title": "Welcome to Seznamka!",
    "join.welcome.desc": "Thank you for joining our community! We'll contact you soon with details about our next event.",
    "join.whatsnext": "What's Next?",
    "join.check.email": "Check your email for a confirmation message",
    "join.follow.ig": "Follow us on Instagram for event updates",
    "join.get.ready": "Get ready to meet amazing people!",

    "join.header.title": "Seznamka",
    "join.header.back": "← Back",

    "join.main.title": "Join Our Community",
    "join.main.subtitle": "Fill out the form below and become part of something special",

    "form.name": "Full Name *",
    "form.name.placeholder": "Enter your name",
    "form.email": "Email Address *",
    "form.email.placeholder": "your.email@university.cz",
    "form.university": "University *",
    "form.university.placeholder": "e.g., ČVUT, UK, VŠE",
    "form.faculty": "Faculty *",
    "form.faculty.placeholder": "e.g., FIT, FEL",
    "form.year": "Year of Study *",
    "form.year.select": "Select year",
    "form.year.1": "1st Year",
    "form.year.2": "2nd Year",
    "form.year.3": "3rd Year",
    "form.year.4": "4th Year",
    "form.year.5plus": "5th Year+",
    "form.year.masters": "Master's",
    "form.year.phd": "PhD",
    "form.looking": "What are you looking for? *",
    "form.looking.friends": "New Friends",
    "form.looking.relationship": "A Relationship",
    "form.looking.both": "Both",
    "form.looking.networking": "Networking",
    "form.interests": "Your Interests & Hobbies",
    "form.interests.placeholder": "Tell us about your interests, hobbies, or what you're passionate about...",
    "form.instagram": "Instagram Handle (Optional)",
    "form.instagram.placeholder": "@yourusername",
    "form.submit": "Join Seznamka Community",
    "form.agree": "By joining, you agree to participate in a safe, respectful community",

    "join.expect.title": "🎯 What to Expect",
    "join.expect.1": "• Regular monthly or bi-weekly events",
    "join.expect.2": "• Fun games and activities",
    "join.expect.3": "• Meet students from different faculties",
    "join.expect.4": "• Safe and organized environment",

    "join.why.title": "💡 Why Join?",
    "join.why.1": "• Break out of your comfort zone",
    "join.why.2": "• No pressure, just genuine connections",
    "join.why.3": "• Reduce loneliness and isolation",
    "join.why.4": "• Build your social network",

    "home.cta.small": "Be part of something special. Your next connection awaits.",
  },
};
