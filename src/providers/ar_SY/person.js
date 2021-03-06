var glues = ['.', '-', '_', null];

var provider = {
	phone_formats: ['033-###-####', '011-###-####', '094#-###-###',
    '095#-###-###', '096#-###-###', '093#-###-###', '092#-###-###'],

	prefix: ['السيد', 'السيدة', 'الآنسة', 'د.', 'الأستاذ', 'الحاج', 'الحاجة', 'أم', 'أبو'],

	company_suffixes: ['المتحدة', 'وأبناؤه', 'محدودة المسؤولية', 'المحدودة'],

	catch_phrase_words: [
		['موقع', 'شركة', 'مؤسسة', 'خدمات'],
		['من نوع' ,'قائمة على مبدأ', 'ذات هيكل', 'مبني على أساس', 'ذو'],
		['طيلة أيام الأسبوع', 'فوري', 'رائع', 'سريع', 'جذاب', 'براق', 'ممتاز', 'لا غنى عنه']
	],

	first_names: ["أبي","أحمد","أحنف","أزهر","أسامة","أسد","أسمر","أشرف","أكرم","الأخضر","المثنى","النعمان","الوليد","إمام","آمر","أمية","أمين","أنصاري","أنور","أوس","إياد","إيثار","أيسر","أيمن","إيناس","إيهاب","بادي","باسل","باشر","باهر","بجاد","بدر","بدري","بدوي","براء","براق","براك","برعم","برهان","برهوم","برئ","بسام","بسطام","بسيم","بشامة","بشير","بطل","بكر","بكري","بلال","بلبل","بنداري","بندر","بهاء","تامر","تركي","تمام","تيجاني","تيسير","ثنيان","ثواب","جاسر","جاسم","جاهد","جبير","جحا","جعيفر","جعيل","جلال","جليل","جمال","جمعة","جندل","جواد","جوهري","حاتم","حبشي","حبيب","حجاج","حجازي","حجي","حداد","حذيفه","حسام","حسان","حسنين","حسون","حسيب","حسين","حفيظ","حلمي","حماد","حمادة","حمدان","حمدي","حمزة","حمود","حمودة","حميدو","حنبل","حنظلة","حنفي","حيدر","حيدرة","خازم","خالد","خطاب","خلدون","خميس","خويلد","خيري","داوود","دريد","رابح","راشد","ربيع","رجاء","رسول","رشدي","رضا","رضوان","رمضان","رياض","زاهد","زايد","زهران","زياد","ساري","سالم","سامر","سامي","سرحان","سعد","سلطان","سمير","سهيل","شادي","شكيب","شهاب","صابر","صفوان","صلاح","صياح","ضاحي","ضرغام","طارق","طلال","طه","عادل","عامر","عايد","عبد الإله","عبد الحميد","عبد الرحمن","عبد الله","عبد المعين","عبيدة","عثمان","عدنان","عروة","عزيز","علاء","علي","عمار","غازي","غسان","غياث","فادي","فاروق","فراس","فهد","فواز","قتادة","قتيبة","قحطان","قصي","قيس","كايد","كمال","كنعان","لقمان","لؤي","ليث","ماجد","مازن","مأمون","محمد","محمد نور","مرهف","مسعود","مشاري","مشعل","مصطفى","مصعب","مطلق","معاذ","معاوية","معتصم","معز","ممدوح","مناف","مهند","مؤيد","ناصر","نايف","نديم","نذير","نزار","نعمان","نواف","نوفل","هاني","هزاع","هشام","هلال","هواش","هيثم","وائل","وسام","وضاح","وليد","ياسر","يامن","ابتسام","إبتهال","أبية","أرجوان","أرواح","أريج","أريحا","إسراء","أسرار","إسعاد","أسلية","إسمهان","أسمى","أسوة","أسيل","أسيمة","أمة الله","إشراق","إشفاق","أشواق","أصالة","أصيلة","إفتكار","أفراح","أفكار","أفنان","ألحان","ألطاف","إلهام","أليفة","آمال","أماني","آمنة","أمنية","أميرة","أمينة","إناس","إنتصار","انجي","إنصاف","إنعام","أنيسة","آيات","إيناس","بارعة","بتلاء","بدوية","بديعة","براءة","براح","براعم","برلنتي","بريكة","بريهان","بريئة","بشرى","بصيرة","بلبلة","بنان","بنانة","بنفسج","بهية","بهيجة","بوران","بيان","بيداء","بيسان","بيضاء","بينة","تحفة","تحية","تذكار","تراث","تركية","تسامح","تسبيح","تسنيم","تقاء","تقوى","تلال","تماضر","تهامة","تهاني","تهنيد","توحيدة","تودد","توسل","توفيقة","تي","تيجان","تيماء","ثابتة","ثائرة","ثراء","ثناء","جلاء","جمانة","جميلة","جهام","جهراء","جورية","جويرية","جيهان","حاكمة","حبيبة","حسناء","حصة","حلا","حميدة","حنان","حوراء","حياة","خاتون","ختام","خديجة","خلود","خواطر","خولة","خيرية","دانة","دانية","درية","دعاء","دعد","دلال","ديمة","ذكرى","راغدة","رامه","رامية","رانية","راوية","ربى","رحاب","رزان","رشا","رضوى","رفيف","رقية","رمزية","رهام","رهف","روضة","روعة","رؤى","ريم","ريما","زكية","زمردة","زينب","سارة","سالي","سحر","سلوى","سماهر","سمر","سمية","سناء","سهى","سهير","شادية","شذى","شمائل","شيماء","صابرين","صبا","عاتكة","عبلة","عبير","عزة","عصمت","عفاف","علا","عنود","غادة","غزل","غيداء","فاتن","فاطمة","فتحية","فدوى","فريال","فهمية","فوزية","فيحاء","كوثر","لبنى","لمى","لؤلؤة","ليلى","ماجدة","محاسن","مرام","مرح","مروة","مريم","مزنة","مسرة","منال","منى","منيرة","مها","مي","ميادة","ميساء","ميسون","نابغة","نادية","نبيلة","نجود","ندى","نرمين","نشوى","نغم","نهى","نوال","نورا","نوفة","هالة","هبة","هدى","هديل","هلا","هنادي","هند","هيفاء","وداد","وعد","ولاء","يمنى"],

	last_names: ["أسعد","الأحمد","الأسعد","البشير","البكور","الحداد","الحسني","الحسين","الحسيني","الحلبوني","الحلبي","الحمصي","الحمود","الحموي","الروح","السحار","الشامي","الشققي","الصالح","الطويل","العمر","القيسي","المصري","المنجد","الموصلي","النجار","باذنجان","بارودي","بكور","تركاوي","حديد","حسين","حوراني","خليل","دياب","ريس","زكار","شعار","عبد الرؤوف","عثمان","عرابي","عمر","قصاب","قطان","لاذقاني","مؤذن"],

	username_formats: [
		'{{first_name}}.{{last_name}}',
		'{{first_name}}_{{last_name}}'
	],

	name_formats: [
		'{{name_prefix}} {{full_name}}'
	],

	full_name_formats: [
		'{{first_name}} {{last_name}}'
	],

	company_name_formats: [
		'{{last_name}} {{company_suffix}}'
	],

	name: function() {
		return this.populate_one_of(this.name_formats);
	},

	username: function() {
		return this.populate_one_of(this.username_formats);
	},

	full_name: function() {
		return this.populate_one_of(this.full_name_formats);
	},

	first_name: function() {
		return this.random_element(this.first_names);
	},

	last_name: function() {
		return this.random_element(this.last_names);
	},

	password: function() {
		return this.numerify('#' + this.first_name + '##');
	},

	phone: function() {
		return this.numerify(this.random_element(this.phone_formats));
	},

	name_prefix: function() {
		return this.random_element(this.prefix);
	},

	name_suffix: function() {
		return this.random_element(this.suffix);
	},

	company_suffix: function() {
		return this.random_element(this.company_suffixes);
	},

	company_name: function() {
		return this.populate_one_of(this.company_name_formats);
	},

	catch_phrase: function() {
		var result = [];

		for (var i in this.catch_phrase_words) {
			result.push(this.random_element(this.catch_phrase_words[i]));
		}

        return result.join(' ');
	}
};

module.exports = provider;
