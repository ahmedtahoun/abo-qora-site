/* Abo Qora — shared menu data (used by the customer site and the admin panel) */
/* =========================================================
   MENU DATA  (from منيوجديد.xlsx)
   ========================================================= */
const IMG={tray:'assets/fb/fb6.jpg',tray2:'assets/m_mix_tray.jpg',kofta:'assets/m_kofta.jpg',tarb:'assets/m_tarb.jpg',sujuk:'assets/fb/fb3.jpg',
  breast:'assets/fb/fb4.jpg',chickrice:'assets/m_chicken_rice.jpg',tikka:'assets/m_tikka.jpg',whole:'assets/fb/fb5.jpg',
  okkawi:'assets/fb/fb8.jpg',tagine:'assets/fb/fb9.jpg',tagine2:'assets/fb/fb7.jpg',roqaq:'assets/fb/fb2.jpg'};
const CATS=[
 {id:'grill',ar:'مشويات اللحوم',en:'Meat Grills',ic:'🔥',note:{ar:'يقدم مع الأطباق: طحينة + سلطة + عيش',en:'Served with tahini, salad & bread'}},
 {id:'cgrill',ar:'مشويات الفراخ',en:'Chicken Grills',ic:'🍢'},
 {id:'chicken',ar:'ركن الفراخ (شيش أو تكة)',en:'Chicken Corner (Shish or Tikka)',ic:'🍗'},
 {id:'shawaya',ar:'فراخ الشواية والمندي',en:'Rotisserie & Mandi',ic:'🐓',note:{ar:'فراخ الشواية بتيجي مع مخلل وتومية وعيش',en:'Rotisserie comes with pickles, toumeya & bread'}},
 {id:'pigeon',ar:'ركن الحمام والبط',en:'Pigeon & Duck',ic:'🕊️'},
 {id:'mandi',ar:'لحمة مندي',en:'Mandi Lamb',ic:'🍖'},
 {id:'meals',ar:'الوجبات',en:'Meals',ic:'🍱',note:{ar:'كل الوجبات بتيجي مع سلطة وطحينة وعيش',en:'All meals include salad, tahini & bread'}},
 {id:'sand',ar:'الساندويتشات',en:'Sandwiches',ic:'🥙',note:{ar:'تيك أواي ودليفري · بييجي معاه مخلل وطحينة',en:'Takeaway & delivery · with pickles & tahini'}},
 {id:'tagine',ar:'طواجن أبو قورة',en:'Abo Qora Tagines',ic:'🥘'},
 {id:'fatta',ar:'الفتات والطاسات',en:'Fatta & Skillets',ic:'🍲'},
 {id:'sharqi',ar:'المطبخ الشرقي',en:'Oriental Kitchen',ic:'🫑'},
 {id:'soup',ar:'ركن الشوربة',en:'Soups',ic:'🥣'},
 {id:'rice',ar:'الرز',en:'Rice',ic:'🍚'},
 {id:'pasta',ar:'مكرونات وخضار',en:'Pasta & Veg',ic:'🍝'},
 {id:'salad',ar:'ركن السلطات',en:'Salads',ic:'🥗'},
 {id:'drinks',ar:'المشروبات',en:'Drinks',ic:'☕',note:{ar:'المشروبات في الصالة بس',en:'Drinks are dine-in only'}},
];
const WL={k:{ar:'كيلو',en:'1 kg',f:4},h:{ar:'نص كيلو',en:'½ kg',f:2},t:{ar:'تلت كيلو',en:'⅓ kg',f:1.33},q:{ar:'ربع كيلو',en:'¼ kg',f:1}};
const W=(...ps)=>ps.map(([k,p])=>({k,ar:WL[k].ar,en:WL[k].en,p,f:WL[k].f}));
const V=(k,ar,en,p,f)=>({k,ar,en,p,f});
const ADD={nuts:{ar:'مكسرات على الصينية',en:'Nuts on the tray',p:175},breast:{ar:'صدر بدل ورك',en:'Breast instead of leg',p:20},
 tahina:{ar:'طحينة زيادة',en:'Extra tahini',p:25},baba:{ar:'بابا غنوج',en:'Baba ghanoush',p:30},toum:{ar:'تومية',en:'Toumeya',p:25},
 dakous:{ar:'سلطة دقوس',en:'Dakous salad',p:25},cheese:{ar:'جبنة قديمة',en:'Aged cheese',p:40}};
const GR=['tahina','baba','toum','dakous'];
const it=(o)=>Object.assign({tags:[],add:[],f:1},o);
const ITEMS0=[
 // meat grills
 it({id:'kebab',cat:'grill',ar:'كباب ضاني',en:'Lamb Kebab',img:IMG.tray2,v:W(['k',1265],['h',645],['t',485],['q',330]),tags:['pop'],add:GR}),
 it({id:'reyash',cat:'grill',ar:'ريش ضاني',en:'Lamb Chops',img:IMG.tray,v:W(['k',1380],['h',705],['t',530]),tags:['premium'],add:GR}),
 it({id:'koftakan',cat:'grill',ar:'كفتة كندوز',en:'Veal Kofta',img:IMG.kofta,v:W(['k',740],['h',375],['t',290],['q',190]),add:GR}),
 it({id:'koftadani',cat:'grill',ar:'كفتة ضاني',en:'Lamb Kofta',img:IMG.kofta,v:W(['k',850],['h',430],['t',330],['q',220]),tags:['pop'],add:GR}),
 it({id:'kebda',cat:'grill',ar:'كبد وكلاوي',en:'Liver & Kidneys',em:'🍖',v:W(['k',690],['h',350],['t',235]),add:GR}),
 it({id:'steak',cat:'grill',ar:'استيك',en:'Steak',img:IMG.breast,v:W(['k',1380],['h',700],['t',530],['q',360]),tags:['premium'],add:GR}),
 it({id:'tarb',cat:'grill',ar:'طرب',en:'Tarb',img:IMG.tarb,v:W(['k',945],['h',485],['t',365],['q',250]),tags:['pop'],add:GR}),
 it({id:'sujuk',cat:'grill',ar:'سجق',en:'Sujuk Sausage',img:IMG.sujuk,v:W(['k',750],['h',380],['t',290],['q',195]),tags:['hot'],add:GR}),
 it({id:'mashkal',cat:'grill',ar:'مشكل (كباب + كفتة)',en:'Kebab & Kofta Mix',img:IMG.tray2,v:W(['k',980],['h',500],['q',255]),add:GR}),
 it({id:'mixgrill',cat:'grill',ar:'ميكس جريل',en:'Mixed Grill',d:{ar:'كباب + كفتة + شيش + طرب',en:'Kebab, kofta, shish & tarb'},img:IMG.tray,v:W(['k',920],['h',470]),tags:['sig'],add:GR}),
 it({id:'nifa',cat:'grill',ar:'نيفة',en:'Nifa (Goat Ribs)',img:IMG.tray2,v:W(['k',980],['h',500],['q',260]),add:GR}),
 // chicken grills
 it({id:'shish',cat:'cgrill',ar:'شيش طاووق',en:'Shish Tawook',img:IMG.tikka,v:W(['k',550],['h',280],['t',215],['q',145]),tags:['pop'],add:GR}),
 it({id:'panehg',cat:'cgrill',ar:'بانيه مشوي',en:'Grilled Escalope',img:IMG.breast,v:W(['k',575],['h',300],['q',155]),add:GR}),
 it({id:'panehf',cat:'cgrill',ar:'بانيه مقلي',en:'Fried Escalope',em:'🍗',v:W(['k',580],['h',305],['q',155]),add:GR}),
 // chicken corner
 it({id:'chick',cat:'chicken',ar:'فرخة مشوية',en:'Grilled Chicken',d:{ar:'اختار شيش أو تكة، سادة أو مع رز',en:'Shish or tikka style, plain or with rice'},img:IMG.chickrice,
   v:[V('w','فرخة سادة','Whole',415,2.5),V('wr','فرخة مع رز','Whole + rice',460,3),V('h','نص فرخة','Half',225,1.25),V('hr','نص فرخة مع رز','Half + rice',240,1.5),V('q','ربع فرخة','Quarter',125,.7),V('qr','ربع فرخة مع رز','Quarter + rice',145,1)],
   style:[{k:'shish',ar:'شيش',en:'Shish'},{k:'tikka',ar:'تكة',en:'Tikka'}],tags:['pop'],add:['breast','toum','tahina']}),
 // shawaya & mandi chicken
 it({id:'shawaya',cat:'shawaya',ar:'فرخة شواية',en:'Rotisserie Chicken',img:IMG.whole,v:[V('w','فرخة','Whole',425,2.5),V('wr','فرخة مع رز','Whole + rice',470,3),V('h','نص فرخة','Half',225,1.25),V('hr','نص فرخة مع رز','Half + rice',240,1.5)],tags:['pop'],add:['toum','tahina']}),
 it({id:'mandichick',cat:'shawaya',ar:'فرخة مندي مع رز',en:'Chicken Mandi with Rice',img:IMG.whole,v:[V('w','فرخة','Whole',425,3),V('h','نص فرخة','Half',240,1.5)],tags:['sig'],add:['toum','dakous']}),
 // pigeon & duck
 it({id:'quail',cat:'pigeon',ar:'سمان مشوي',en:'Grilled Quail',em:'🐦',p:195,f:.6}),
 it({id:'pigrice',cat:'pigeon',ar:'حمام محشي رز',en:'Pigeon Stuffed with Rice',em:'🕊️',p:240,f:1,tags:['sig','pop']}),
 it({id:'pigfreek',cat:'pigeon',ar:'حمام محشي فريك',en:'Pigeon Stuffed with Freekeh',em:'🕊️',p:255,f:1,tags:['sig']}),
 it({id:'duck',cat:'pigeon',ar:'بطة',en:'Duck',em:'🦆',v:[V('w','بطة كاملة','Whole',785,3),V('h','نص بطة','Half',405,1.5)]}),
 // mandi lamb
 it({id:'mandilamb',cat:'mandi',ar:'لحمة مندي',en:'Lamb Mandi',img:IMG.whole,v:[V('n','نفر','Single',480,1),V('8','تمن تيس','⅛ Goat',995,2.5),V('4','ربع تيس','¼ Goat',1995,5),V('2','نص تيس','½ Goat',3995,10)],tags:['sig']}),
 // meals
 it({id:'m_paneh',cat:'meals',ar:'وجبة بانيه',en:'Escalope Meal',d:{ar:'فراخ بانيه + بطاطس + مكرونة اسباكيتي',en:'Escalope, fries & spaghetti'},em:'🍱',p:235}),
 it({id:'m_breast',cat:'meals',ar:'وجبة صدور مشوية',en:'Grilled Breast Meal',d:{ar:'صدور مشوية + بطاطس + رز أبيض + خضار سوتيه',en:'Grilled breast, fries, white rice & sautéed veg'},img:IMG.breast,p:230}),
 it({id:'m_super',cat:'meals',ar:'وجبة السوبر',en:'Super Meal',d:{ar:'ربع فرخة + رز',en:'Quarter chicken & rice'},img:IMG.chickrice,p:145,tags:['pop']}),
 it({id:'m_gamed',cat:'meals',ar:'وجبة الجامد',en:'Gamed Meal',d:{ar:'ربع فرخة + رز + خضار',en:'Quarter chicken, rice & veg'},img:IMG.chickrice,p:190}),
 it({id:'m_dyn',cat:'meals',ar:'وجبة الديناميت',en:'Dynamite Meal',d:{ar:'ربع فرخة + تمن كفتة + رز + خضار',en:'Quarter chicken, ⅛ kofta, rice & veg'},img:IMG.kofta,p:240,tags:['hot']}),
 it({id:'m_single',cat:'meals',ar:'وجبة السنجل',en:'Single Meal',d:{ar:'ربع فرخة + تمن كفتة + رز',en:'Quarter chicken, ⅛ kofta & rice'},img:IMG.kofta,p:225}),
 it({id:'m_kebab',cat:'meals',ar:'وجبة الكباب',en:'Kebab Meal',d:{ar:'تمن كباب + تمن كفتة + تمن شيش + رز',en:'⅛ kebab, ⅛ kofta, ⅛ shish & rice'},img:IMG.tray2,p:360,tags:['premium']}),
 it({id:'tablia',cat:'meals',ar:'طبلية أبو قورة',en:'Abo Qora Tablia',d:{ar:'رز معمر باللحمة + 8 رقاق + طاجن بطاطس باللحمة + فتة كوارع + عكاوي بصل + نص فرخة + بطة روستو + 6 ملوخية + 6 شوربة',en:'Meat ma\'ammar rice, 8 roqaq, potato & meat tagine, trotter fatta, oxtail, half chicken, roast duck, 6 molokhia & 6 soups'},img:IMG.tagine,p:2875,f:6,tags:['sig']}),
 it({id:'shawayaaq',cat:'meals',ar:'شواية أبو قورة',en:'Abo Qora Grill Board',d:{ar:'كباب + كفتة + سجق + طرب + شيش + استيك + صدور + حواوشي',en:'Kebab, kofta, sujuk, tarb, shish, steak, breast & hawawshi'},img:IMG.tray,p:865,f:3,dine:1}),
 // sandwiches
 ...[['s_kd','كفتة ضاني','Lamb Kofta',115],['s_kk','كفتة كندوز','Veal Kofta',105],['s_hd','حواوشي ضاني','Lamb Hawawshi',115],['s_hk','حواوشي كندوز','Veal Hawawshi',105],['s_kb','كباب','Kebab',175],['s_tr','طرب','Tarb',120],['s_sh','شيش','Shish',95],['s_sj','سجق','Sujuk',105]]
   .map(([id,ar,en,p])=>it({id,cat:'sand',ar:'ساندويتش '+ar,en:en+' Sandwich',em:id.startsWith('s_h')?'🫓':'🥙',p,f:.7,tags:id==='s_hd'?['pop']:[]})),
 // tagines
 ...[['t1','طاجن عكاوي بالبصل','Oxtail & Onion Tagine',405,IMG.okkawi,['sig']],['t2','طاجن عكاوي ورق عنب','Oxtail & Vine Leaves Tagine',425,IMG.okkawi],['t3','طاجن ورق عنب بالكوارع','Vine Leaves & Trotters Tagine',425,IMG.tagine2],['t4','طاجن ملوخية بالكوارع','Molokhia & Trotters Tagine',425,IMG.tagine],
    ['t5','طاجن لحمة محمرة','Braised Beef Tagine',325,IMG.tagine2,['pop']],['t6','طاجن كرنب باللحمة','Cabbage & Beef Tagine',370],['t7','طاجن لسان عصفور باللحمة','Orzo & Beef Tagine',340],['t8','خضار مشكل باللحمة','Mixed Veg & Beef',330],['t9','لحمة بالبصل','Beef with Onions',315],['t10','لحمة بالبطاطس','Beef with Potatoes',315],
    ['t11','بامية باللحمة','Okra & Beef',340,IMG.tagine,['pop']],['t12','طاجن سجق','Sujuk Tagine',325,IMG.sujuk],['t13','طاجن ملوخية باللحمة','Molokhia & Beef Tagine',315],['t14','طاجن مسقعة باللحمة المفرومة','Moussaka Tagine',265]]
   .map(([id,ar,en,p,img,tags])=>it({id,cat:'tagine',ar,en,p,img,em:'🥘',f:1.5,tags:tags||[]})),
 // fatta & skillets
 it({id:'f1',cat:'fatta',ar:'موزة فتة',en:'Lamb Shank Fatta',em:'🍲',p:520,f:1.5,tags:['premium']}),
 it({id:'f2',cat:'fatta',ar:'فتة سادة',en:'Plain Fatta',em:'🍚',p:60,f:.5}),
 it({id:'f3',cat:'fatta',ar:'فتة كوارع',en:'Trotters Fatta',em:'🍲',p:415,f:1.5,tags:['pop']}),
 it({id:'f4',cat:'fatta',ar:'فتة لحمة محمرة',en:'Braised Beef Fatta',em:'🍲',p:370,f:1.5}),
 it({id:'w1',cat:'fatta',ar:'ورقة لحمة',en:'Meat Wara\'a',em:'🥘',p:310,f:1.5}),
 it({id:'w2',cat:'fatta',ar:'ورقة سجق',en:'Sujuk Wara\'a',em:'🥘',p:290,f:1.5}),
 it({id:'w3',cat:'fatta',ar:'طاسة كبدة بلدي',en:'Baladi Liver Skillet',em:'🍳',p:310,f:1.2}),
 it({id:'w4',cat:'fatta',ar:'طاسة كبدة ضاني',en:'Lamb Liver Skillet',em:'🍳',p:310,f:1.2}),
 // sharqi
 it({id:'moza',cat:'sharqi',ar:'موزة سادة',en:'Lamb Shank',em:'🍖',p:460,f:1.2}),
 it({id:'ouzi',cat:'sharqi',ar:'أوزي سادة',en:'Ouzi',em:'🍖',p:460,f:1.2}),
 it({id:'warak',cat:'sharqi',ar:'طبق ورق عنب',en:'Vine Leaves',em:'🍃',p:95,f:.7}),
 it({id:'mahshi',cat:'sharqi',ar:'محشي مشكل',en:'Mixed Mahshi',em:'🫑',v:[V('L','كبير','Large',205,2),V('M','وسط','Medium',135,1.2)],tags:['pop']}),
 it({id:'koronb',cat:'sharqi',ar:'طبق محشي كرنب',en:'Stuffed Cabbage',em:'🥬',p:95,f:.7}),
 it({id:'mombar',cat:'sharqi',ar:'ممبار',en:'Mombar',em:'🌭',v:W(['k',440],['h',230],['q',115])}),
 it({id:'roqaq',cat:'sharqi',ar:'رقاق باللحمة المفرومة',en:'Minced Meat Roqaq',d:{ar:'4 قطع',en:'4 pieces'},img:IMG.roqaq,p:155,f:1,tags:['pop']}),
 it({id:'samc',cat:'sharqi',ar:'سمبوسة جبنة',en:'Cheese Sambousek',d:{ar:'6 قطع',en:'6 pieces'},em:'🥟',p:105,f:.5}),
 it({id:'samm',cat:'sharqi',ar:'سمبوسك لحمة',en:'Meat Sambousek',d:{ar:'6 قطع',en:'6 pieces'},em:'🥟',p:110,f:.5}),
 it({id:'samx',cat:'sharqi',ar:'سمبوسك ميكس',en:'Mixed Sambousek',d:{ar:'6 قطع',en:'6 pieces'},em:'🥟',p:110,f:.5}),
 it({id:'fries',cat:'sharqi',ar:'باكت بطاطس محمرة',en:'Fries',em:'🍟',p:55,f:.3}),
 // soups
 ...[['so1','شوربة لسان عصفور','Orzo Soup',40],['so2','شوربة عدس','Lentil Soup',45],['so3','شوربة كوارع مخلية','Boneless Trotters Soup',165],['so4','شوربة حمام','Pigeon Soup',185],['so5','شوربة كريمة بالفراخ','Cream of Chicken',105]]
   .map(([id,ar,en,p])=>it({id,cat:'soup',ar,en,em:'🥣',p,f:.3})),
 // rice
 it({id:'r1',cat:'rice',ar:'رز معمر سادة',en:'Plain Ma\'ammar Rice',img:IMG.roqaq,p:150,f:1}),
 it({id:'r2',cat:'rice',ar:'رز معمر باللحمة',en:'Ma\'ammar Rice with Meat',img:IMG.roqaq,p:245,f:1.5,tags:['sig']}),
 ...[['r3','رز بسمتي أصفر','Yellow Basmati',65],['r4','رز شعرية','Vermicelli Rice',55],['r5','رز أبيض','White Rice',50],['r6','رز خلطة','Khalta Rice',65]].map(([id,ar,en,p])=>it({id,cat:'rice',ar,en,em:'🍚',p,f:.4})),
 // pasta & veg
 ...[['p1','مكرونة بشاميل','Béchamel Pasta',105,'🍝',1],['p2','اسباكيتي بلونيز','Spaghetti Bolognese',125,'🍝',1],['p3','مكرونة بالصلصة','Pasta in Tomato Sauce',75,'🍝',.8],
    ['v1','بامية','Okra',60,'🥘',.5],['v2','خضار مشكل','Mixed Veg',50,'🥕',.5],['v3','بطاطس','Potatoes',50,'🥔',.5],['v4','ملوخية','Molokhia',50,'🍵',.5],['v5','خضار سوتيه','Sautéed Veg',50,'🥦',.4]]
   .map(([id,ar,en,p,em,f])=>it({id,cat:'pasta',ar,en,p,em,f,tags:id[0]==='v'||id==='p3'?['veg']:[]})),
 // salads
 ...[['sa1','سلطة خضراء','Green Salad',25,'🥗'],['sa2','مياه سلطة','Salad Dressing',15,'🫙'],['sa3','سلطة طحينة','Tahini',25,'🥣'],['sa4','بابا غنوج','Baba Ghanoush',30,'🍆'],['sa5','طماطم متبلة','Spiced Tomatoes',30,'🍅'],['sa6','تومية','Toumeya',25,'🧄'],
    ['sa7','مخلل','Pickles',25,'🥒'],['sa8','بتنجان مخلل','Pickled Eggplant',25,'🍆'],['sa9','جبنة قديمة','Aged Cheese',40,'🧀'],['sa10','سلطة دقوس','Dakous',25,'🌶️'],['sa11','سلطة زبادي','Yogurt Salad',40,'🥛']]
   .map(([id,ar,en,p,em])=>it({id,cat:'salad',ar,en,p,em,f:.1,tags:['veg']})),
 // drinks (dine-in)
 ...[['d1','شاي','Tea',35,'🍵'],['d2','براد شاي (فردين)','Tea Pot (2)',45,'🫖'],['d3','قهوة','Coffee',40,'☕'],['d4','قهوة فرنساوي','French Coffee',65,'☕'],['d5','ينسون','Anise',30,'🍵'],['d6','شاي أخضر','Green Tea',30,'🍵'],['d7','كانز','Soft Drink',30,'🥫'],['d8','مياه معدنية صغيرة','Small Water',15,'💧'],['d9','عصير فريش','Fresh Juice',65,'🍹']]
   .map(([id,ar,en,p,em])=>it({id,cat:'drinks',ar,en,p,em,f:0,dine:1})),
];
const SAWANI0=[
 ['الحبايب','Al-Habayeb',2,805,'ربع كفتة + نص فرخة + ربع طرب + ربع ممبار + نص كيلو رز + سلطات + عيش','¼ kofta, ½ chicken, ¼ tarb, ¼ mombar, ½ kg rice, salads & bread'],
 ['الشملول','Al-Shamloul',4,1265,'فرخة مشوية + نص كفتة + نص سجق + محشي مشكل + كيلو رز + سلطة خضراء + طحينة + عيش','Grilled chicken, ½ kofta, ½ sujuk, mixed mahshi, 1 kg rice, salad, tahini & bread'],
 ['عمدة البلد','The Village Mayor',5,1725,'نص كفتة + نص طرب + نص شيش طاووق + نص فرخة مشوية + 4 رقاق + 3 قطع مندي لحم + 2 كيلو رز + سلطات + عيش','½ kofta, ½ tarb, ½ shish, ½ chicken, 4 roqaq, 3 lamb mandi pieces, 2 kg rice, salads & bread'],
 ['العتاولة','Al-Atawla',5,1900,'نص فرخة مشوية + نص فرخة مندي + نص كفتة + نص سجق + نفر لحمة مندي + محشي مشكل + رز + سلطات + عيش','½ grilled chicken, ½ mandi chicken, ½ kofta, ½ sujuk, lamb mandi, mahshi, rice, salads & bread'],
 ['العريس','The Groom',5,1955,'فرخة مندي + نص استيك + ربع بانيه مشوي + ربع شيش طاووق + ربع ممبار + 6 سمبوسة ميكس + كيلو ونص رز + سلطات + عيش','Mandi chicken, ½ steak, ¼ escalope, ¼ shish, ¼ mombar, 6 sambousek, 1.5 kg rice, salads & bread'],
 ['الأكيلة','The Big Eaters',6,2070,'نص كباب + نص بط + نص كفتة + نص فرخة مشوية + 4 رقاق + نص سجق + 2 كيلو رز + سلطات + عيش','½ kebab, ½ duck, ½ kofta, ½ chicken, 4 roqaq, ½ sujuk, 2 kg rice, salads & bread'],
 ['الكبير أوي','El-Kebir Awi',6,2130,'4 حمام + نفر لحمة مندي + ربع طرب + ربع سجق + ربع شيش طاووق + نص فرخة مشوية + محشي مشكل + رز + سلطات + عيش','4 pigeons, lamb mandi, ¼ tarb, ¼ sujuk, ¼ shish, ½ chicken, mahshi, rice, salads & bread'],
 ['الوحوش','The Beasts',7,2300,'نص كفتة + نص شيش طاووق + نص سجق + نص طرب + ربع ممبار + نفر لحمة مندي + 2 كيلو رز + سلطة خضراء + طحينة + عيش','½ kofta, ½ shish, ½ sujuk, ½ tarb, ¼ mombar, lamb mandi, 2 kg rice, salad, tahini & bread'],
 ['البلد','El-Balad',8,2590,'نص فرخة مندي + نص كفتة + نص شيش طاووق + نص طرب + نص سجق + نص ممبار + 2 كيلو رز + سلطة خضراء + طحينة + دقوس + عيش','½ mandi chicken, ½ kofta, ½ shish, ½ tarb, ½ sujuk, ½ mombar, 2 kg rice, salads & bread'],
 ['العنتيل','Al-Antil',8,2705,'نص كفتة + نص نيفة + نص طرب + نص كباب + نص سجق + نص ريش + 2 كيلو رز + سلطات + عيش','½ kofta, ½ nifa, ½ tarb, ½ kebab, ½ sujuk, ½ chops, 2 kg rice, salads & bread'],
 ['زلزال الأرض','Earthquake',9,2850,'نفر لحم مندي + 3 أرباع فراخ مندي + 3 حمام + ربع شيش + ربع كفتة + ربع طرب + ربع سجق + 4 رقاق + نص كيلو ورق عنب + 2 كيلو رز + سلطات + عيش','Lamb mandi, 3 quarter mandi chickens, 3 pigeons, ¼ shish/kofta/tarb/sujuk, 4 roqaq, ½ kg vine leaves, 2 kg rice, salads & bread'],
 ['أهل الحدائق','Ahl El-Hadayek',10,3210,'5 أرباع فراخ + 5 حمام + 5 صوابع طرب + 5 صوابع كفتة + 5 شيش + 5 سجق + 5 ممبار + محشي مشكل + 3 كيلو رز + سلطات + عيش','5 chicken quarters, 5 pigeons, 5 tarb, 5 kofta, 5 shish, 5 sujuk, 5 mombar, mahshi, 3 kg rice, salads & bread'],
 ['أبو قورة','Abo Qora',12,3795,'كيلو لحم مندي + فرخة مشوية + تلت طرب + تلت كفتة + تلت سجق + تلت ريش + تلت شيش + محشي مشكل + 8 سمبوسة + نص ورق عنب + 2 كيلو رز + سلطات + عيش','1 kg lamb mandi, whole chicken, ⅓ each of tarb, kofta, sujuk, chops & shish, mahshi, 8 sambousek, ½ vine leaves, 2 kg rice, salads & bread'],
].map(([ar,en,n,p,dar,den],i)=>it({id:'sn'+i,cat:'sawani',ar,en,p,f:n,ppl:n,d:{ar:dar,en:den},img:[IMG.tray,IMG.tray2,IMG.tagine,IMG.tagine2][i%4],add:['nuts'],tags:i===12?['sig']:i===1||i===6?['pop']:[]}));

const TAGS={pop:[{ar:'الأكثر طلباً',en:'Popular'},''],sig:[{ar:'توقيع أبو قورة',en:'Signature'},'sand'],premium:[{ar:'بريميوم',en:'Premium'},'teal'],hot:[{ar:'حراق',en:'Spicy'},''],veg:[{ar:'نباتي',en:'Veggie'},'teal']};
const AREAS0={'حدائق الأهرام':{en:'Hadayek El Ahram',fee:20,eta:30},'الهرم':{en:'Haram',fee:30,eta:40},'فيصل':{en:'Faisal',fee:30,eta:40},'6 أكتوبر':{en:'6th of October',fee:45,eta:50},'الشيخ زايد':{en:'Sheikh Zayed',fee:50,eta:55},'الدقي':{en:'Dokki',fee:45,eta:50},'المهندسين':{en:'Mohandessin',fee:45,eta:50}};
const STAGES=[['✅',{ar:'استلمنا',en:'Received'}],['🔥',{ar:'على الفحم',en:'On the coals'}],['📦',{ar:'بيتغلف',en:'Packing'}],['🛵',{ar:'في الطريق',en:'On the way'}],['🏠',{ar:'وصل',en:'Delivered'}]];

/* =========================================================
   ADMIN OVERRIDES — the admin panel writes here, both pages read it.
   (Live version: this becomes the database + API.)
   ========================================================= */
const ADMIN_LS='aboqora_admin_v1';
/* =========================================================
   OPENING HOURS — index 0 = Sunday … 6 = Saturday.
   "to" earlier than "from" means the shift ends after midnight.
   Placeholder hours until the restaurant confirms them.
   ========================================================= */
const DAY_AR=['الأحد','الاتنين','التلات','الأربع','الخميس','الجمعة','السبت'];
const DAY_EN=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const DEFAULT_HOURS=[0,1,2,3,4,5,6].map(d=>({open:true,from:d===5?'14:00':'13:00',to:'02:00'}));
const hm=s=>{const[h,m]=String(s||'0:0').split(':').map(Number);return[h||0,m||0]};
/* the shift that STARTS on the calendar day of `dayTs` → [startMs,endMs] or null */
function shiftOf(dayTs,hours){const d=new Date(dayTs),h=hours[d.getDay()];if(!h||!h.open)return null;
  const[fh,fm]=hm(h.from),[th,tm]=hm(h.to),s=new Date(d.getFullYear(),d.getMonth(),d.getDate(),fh,fm).getTime();
  const cross=th*60+tm<=fh*60+fm,e=new Date(d.getFullYear(),d.getMonth(),d.getDate()+(cross?1:0),th,tm).getTime();return[s,e]}
const dayStart=(ts,k=0)=>{const d=new Date(ts);return new Date(d.getFullYear(),d.getMonth(),d.getDate()+k).getTime()};
/* shift that contains `ts` (yesterday's late shift counts) */
function shiftAt(ts,hours){for(const k of[0,-1]){const s=shiftOf(dayStart(ts,k),hours);if(s&&ts>=s[0]&&ts<s[1])return s}return null}
function nextOpenAfter(ts,hours){for(let k=0;k<8;k++){const s=shiftOf(dayStart(ts,k),hours);if(s&&s[0]>ts)return s[0]}return null}
/* bookable delivery times: [{day:dayStartMs, slots:[ms…]}] for today + preDays */
function bookableSlots(now,C,leadMin){
  const out=[],step=(C.slotMin||30)*60000,earliest=now+leadMin*60000;
  for(let k=0;k<=C.preDays;k++){const day=dayStart(now,k),s=shiftOf(day,C.hours);if(!s)continue;
    const list=[];let t=Math.max(s[0]+step,Math.ceil(earliest/step)*step);   // first slot = half an hour after opening
    for(;t<=s[1]-step;t+=step)list.push(t);
    if(list.length)out.push({day,slots:list})}
  /* also yesterday's after-midnight shift if we're inside it */
  const y=shiftOf(dayStart(now,-1),C.hours);if(y&&y[1]>earliest){const list=[];for(let t=Math.ceil(earliest/step)*step;t<=y[1]-step;t+=step)list.push(t);if(list.length)out.unshift({day:dayStart(now,-1),slots:list})}
  return out}
const DEFAULT_SETTINGS={freeDelivery:1500,pgRate:.5,pgCap:.3,refGift:100,cancelSec:20,open:true,closedMsg:'',busyExtra:0,autoAdvance:true,
  hours:DEFAULT_HOURS,leadMin:60,bigOrder:2500,bigLeadMin:120,preDays:3,slotMin:30,schedCancelMin:60,
  confirmFirstCash:true,confirmAbove:2000,leadNewMin:60,abandonMin:30,minOrder:100};
const DEFAULT_PROMOS=[{code:'QORA10',pct:10,active:true}];
function loadAdmin(){let A;try{A=JSON.parse(localStorage.getItem(ADMIN_LS))||{}}catch(e){A={}}
  if(!A.offers){A.offers=seedOffers();try{localStorage.setItem(ADMIN_LS,JSON.stringify(A))}catch(e){}}  // first run: demo offers
  return A}
function saveAdmin(A){try{localStorage.setItem(ADMIN_LS,JSON.stringify(A));return true}catch(e){return false}}
function patchItem(x,A){const o=(A.items||{})[x.id];if(!o)return x;const {v:vp,...rest}=o;const y={...x,...rest};
  if(vp&&x.v)y.v=x.v.map(v=>({...v,p:vp[v.k]??v.p}));return y}
/* forAdmin=true returns hidden items too */
function buildMenu(A,forAdmin){
  const added=(A.added||[]).map(a=>it({...a}));
  const all=[...ITEMS0,...added].map(x=>patchItem(x,A)),saw=SAWANI0.map(x=>patchItem(x,A));
  const vis=i=>forAdmin||!i.hidden;
  return{items:all.filter(vis),sawani:saw.filter(vis),hiddenAll:[...all,...saw].filter(i=>i.hidden),
    areas:A.areas||AREAS0,settings:{...DEFAULT_SETTINGS,...(A.settings||{})},promos:A.promos||DEFAULT_PROMOS,
    offers:A.offers||[],wa:{...DEFAULT_WA,...(A.wa||{})}};
}

/* =========================================================
   OFFERS — special price on one dish (optionally one size),
   between start/end dates and/or inside a daily time window,
   with optional total stock and a per-order limit.
   ========================================================= */
function seedOffers(now=Date.now()){
  const endToday=new Date(now);endToday.setHours(23,59,0,0);
  return[
    {id:'of1',item:'sn0',v:null,price:699,badge:{ar:'🔥 النهارده بس',en:'🔥 Today only'},title:{ar:'صينية الحبايب بسعر خاص',en:'Al-Habayeb tray, special price'},start:null,end:endToday.getTime(),daily:null,stock:20,limit:2,active:true},
    {id:'of2',item:'s_hd',v:null,price:89,badge:{ar:'🌙 عرض السهرة',en:'🌙 Late-night deal'},title:{ar:'حواوشي ضاني للسهرانين',en:'Lamb hawawshi for night owls'},start:null,end:null,daily:{from:'22:00',to:'02:00'},stock:null,limit:4,active:true},
    {id:'of3',item:'chick',v:'hr',price:199,badge:{ar:'⏰ ساعة الغدا',en:'⏰ Lunch hour'},title:{ar:'نص فرخة مع رز',en:'Half chicken with rice'},start:null,end:null,daily:{from:'13:00',to:'16:00'},stock:null,limit:3,active:true},
  ]}
/* window that contains `now`, or the next one → {on, until, next} */
function offerState(of,now=Date.now()){
  if(!of||!of.active)return{on:false};
  if(of.end&&now>=of.end)return{on:false,ended:true};
  if(of.start&&now<of.start&&!of.daily)return{on:false,next:of.start};
  if(!of.daily){const s=of.start||0;return now>=s?{on:true,until:of.end||null}:{on:false,next:s}}
  const win=k=>{const d=new Date(dayStart(now,k)),[fh,fm]=hm(of.daily.from),[th,tm]=hm(of.daily.to);
    const s=new Date(d.getFullYear(),d.getMonth(),d.getDate(),fh,fm).getTime(),cross=th*60+tm<=fh*60+fm;
    return[s,new Date(d.getFullYear(),d.getMonth(),d.getDate()+(cross?1:0),th,tm).getTime()]};
  for(const k of[-1,0]){const[s,e]=win(k);if(now>=s&&now<e&&(!of.start||now>=of.start))return{on:true,until:of.end?Math.min(e,of.end):e}}
  for(const k of[0,1,2]){const[s]=win(k);if(s>now&&(!of.end||s<of.end))return{on:false,next:Math.max(s,of.start||0)}}
  return{on:false,ended:true}}
/* how many were sold (non-cancelled orders) */
function offerSold(of,users){let n=0;Object.values(users||{}).forEach(u=>(u.orders||[]).forEach(o=>{if(o.status!=='cancelled')o.lines.forEach(l=>{if(l.o&&l.o.offer===of.id)n+=l.qty})}));return n}

/* =========================================================
   WHATSAPP — every order creates messages in an outbox.
   Prototype: stored + shown in the admin (simulated send).
   Live: the server sends them via the WhatsApp Business (Cloud) API.
   ========================================================= */
const WA_LS='aboqora_wa_v1';
const DEFAULT_WA={restaurant:'01000000000',notifyRestaurant:true,confirmCustomer:true,statusUpdates:true};
function loadWA(){try{return JSON.parse(localStorage.getItem(WA_LS))||[]}catch(e){return[]}}
function pushWA(msgs){const box=loadWA();msgs.forEach(m=>box.unshift({id:'m'+Date.now().toString(36)+Math.random().toString(36).slice(2,6),at:Date.now(),status:'sent',...m}));
  try{localStorage.setItem(WA_LS,JSON.stringify(box.slice(0,300)))}catch(e){}}
const waMoney=n=>Math.round(n).toLocaleString('en-US')+' ج.م';
/* full order summary for the restaurant (Arabic) */
function waOrderSummary(o,u,BY){
  const line=l=>{const it=BY[l.id];if(!it)return`• ${l.qty}× صنف`;const v=it.v&&(it.v.find(x=>x.k===l.o?.v)||it.v[0]);const st=it.style&&l.o?.s?it.style.find(x=>x.k===l.o.s):null;
    const adds=(l.o?.add||[]).map(a=>ADD[a]?.ar).filter(Boolean);
    return`• ${l.qty}× ${it.ar}${v?' ('+v.ar+')':''}${st?' – '+st.ar:''}${adds.length?' + '+adds.join(' + '):''}${l.o?.offer?' 🏷️عرض':''}${l.o?.note?`\n   ↳ «${l.o.note}»`:''}${l.price!=null?` — ${waMoney(l.price*l.qty)}`:''}`};
  const a=o.addr,pay={card:'💳 كارت (مدفوع أونلاين)',wallet:'📱 محفظة (مدفوع أونلاين)',cash:'💵 كاش عند الاستلام'}[o.pay];
  return[`🔥 *طلب جديد ${o.id}*`,`👤 ${u.name} — ${u.phone}`,
    o.mode==='pickup'?'🏃 استلام من الفرع':`🛵 توصيل: ${a.area} — ${a.street}، عمارة ${a.building}${a.floor?'، دور '+a.floor:''}${a.apt?'، شقة '+a.apt:''}${a.landmark?`\n📌 ${a.landmark}`:''}${a.lat?`\n🗺️ https://maps.google.com/?q=${a.lat},${a.lng}`:''}`,
    o.time?`🗓️ متجدول: ${o.time}`:'⚡ فوري',
    '━━━━━━━━━━',...o.lines.map(line),'━━━━━━━━━━',
    `الحساب: ${waMoney(o.sub)}`,`التوصيل: ${o.fee?waMoney(o.fee):'ببلاش'}`,
    ...(o.disc?[`خصم الكود: −${waMoney(o.disc)}`]:[]),...(o.pgVal?[`خصم الحمام: −${waMoney(o.pgVal)}`]:[]),
    `💰 *الإجمالي: ${waMoney(o.total)}*`,pay,
    ...(o.kitchenNote?[`⚠️ للمطبخ: ${o.kitchenNote}`]:[]),...(o.riderNote?[`📝 للطيار: ${o.riderNote}`]:[])].join('\n')}
/* short confirmation for the customer, in their language */
function waCustomerConfirm(o,u,BY,lang){
  const ar=lang!=='en',items=o.lines.map(l=>`• ${l.qty}× ${BY[l.id]?(ar?BY[l.id].ar:BY[l.id].en):''}`).join('\n');
  return ar?[`أهلاً ${u.name} 👋`,`طلبك *${o.id}* وصل لأبو قورة ✅`,items,`💰 الإجمالي: ${waMoney(o.total)}`,o.time?`🗓️ معادك: ${o.time}`:`🛵 هيوصلك خلال ~${o.eta} دقيقة`,'هنبعتلك هنا أول ما يتحط على الفحم ويخرج مع الطيار 🕊️'].join('\n')
    :[`Hi ${u.name} 👋`,`Your order *${o.id}* reached Abo Qora ✅`,items,`💰 Total: EGP ${Math.round(o.total)}`,o.time?`🗓️ Scheduled: ${o.time}`:`🛵 Arriving in ~${o.eta} min`,'We\'ll message you here when it\'s on the grill and out for delivery 🕊️'].join('\n')}
const WA_STATUS={1:'🔥 طلبك {id} اتحط على الفحم دلوقتي!',2:'📦 طلبك {id} بيتغلف عشان يوصلك سخن',3:'🛵 طلبك {id} خرج مع الطيار — جهّز السفرة!',4:'✅ طلبك {id} وصل — بالهنا والشفا ❤️ متنساش تقيّمنا من صفحة الطلب',pickup3:'✅ طلبك {id} جاهز في الفرع — مستنيينك'};
