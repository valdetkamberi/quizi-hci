import { Question } from './types';

export const quizData: Question[] = [
  {
    id: 1,
    text: "Çfarë është Ndërveprimi njeri-kompjuter (HCI)?",
    options: [
      "Studimi i komponentëve të brendshëm të kompjuterit.",
      "Studimi se si njerëzit ndërveprojnë me teknologjinë dhe si të përmirësohet ai ndërveprim.",
      "Procesi i programimit të aplikacioneve mobile.",
      "Zhvillimi i rrjeteve dhe sigurisë kibernetike."
    ],
    correctAnswerIndex: 1,
    explanation: "HCI është studimi se si njerëzit ndërveprojnë me teknologjinë dhe se si teknologjia mund të dizajnohet për të përmirësuar atë ndërveprim, duke rritur efektivitetin.",
    tip: "Ndërveprimi = Lidhja mes Njeriut ↔ Teknologjisë."
  },
  {
    id: 2,
    text: "Pse është HCI kritike në hartimin e teknologjisë?",
    options: [
      "Fokusohet ekskluzivisht në reduktimin e kostove.",
      "Sepse bën programimin më të shpejtë për zhvilluesit.",
      "Fokusohet në përmirësimin e përvojës së përdoruesit (User Experience).",
      "Sepse përmirëson performancën e procesorëve (CPU)."
    ],
    correctAnswerIndex: 2,
    explanation: "HCI është kritike sepse vendos theksin kryesor në përmirësimin e përvojës së përdoruesit dhe e bën teknologjinë të aksesueshme për të gjithë.",
    tip: "HCI = Përvoja e Përdoruesit (UX) në qendër."
  },
  {
    id: 3,
    text: "Cilat janë dy konceptet kritike për të kuptuar se si përdoruesit perceptojnë informacionin në ekrane?",
    options: [
      "Memoria dhe RAM-i",
      "Perceptimi dhe Vëmendja",
      "Gjuha dhe Dëgjimi",
      "Grafika dhe Kodimi"
    ],
    correctAnswerIndex: 1,
    explanation: "Perceptimi dhe vëmendja janë koncepte thelbësore sepse shpjegojnë se si interpretojmë dhe fokusohemi në informacionet e paraqitura në një ndërfaqe.",
    tip: "Shiko (Percepto) dhe Fokusohu (Kushto Vëmendje)."
  },
  {
    id: 4,
    text: "Cili është dallimi mes Vëmendjes Selektive dhe Vëmendjes së Ndarë?",
    options: [
      "E selektivja injoron informacionin e parëndësishëm, e ndara proceson stimuj të shumtë.",
      "E selektivja proceson detyra të shumta njëkohësisht, e ndara injoron zhurmën.",
      "Të dyja janë e njëjta gjë, varet nga pajisja.",
      "E selektivja përdoret vetëm për tekste, e ndara për audio."
    ],
    correctAnswerIndex: 0,
    explanation: "Vëmendja selektive na lë të fokusohemi në një stimul duke filtruar të tjerët, ndërsa vëmendja e ndarë i lejon përdoruesit të bëjnë 'multitasking' duke procesuar shumë stimuj njëherësh.",
    tip: "Selektive = 1 FOKUS (Filtro). E Ndarë = SHUMË detyra njëherësh."
  },
  {
    id: 5,
    text: "Si përkufizohet kujtesa?",
    options: [
      "Si ruajtja e të dhënave në kompjuter.",
      "Krijimi i mendimeve të reja bazuar në iluzione.",
      "Procesi i kodimit, ruajtjes dhe marrjes së informacionit.",
      "Aftësia për të përqendruar vëmendjen tek stimujt pamorë."
    ],
    correctAnswerIndex: 2,
    explanation: "Kujtesa është njohje njerëzore dhe ndahet në procesin tre-hapësh: kodimi, ruajtja dhe marrja (retrieval) e informacionit.",
    tip: "3 Hapat e Kujtesës: Kodo → Ruaj → Merr."
  },
  {
    id: 6,
    text: "Cili lloj i kujtesës mban informacionin për një periudhë shumë të shkurtër (para se ta kalojë më tej ose ta harrojë)?",
    options: [
      "Kujtesa Shqisore",
      "Kujtesa Afatshkurtër",
      "Kujtesa Afatgjatë",
      "Kujtesa e Përhershme"
    ],
    correctAnswerIndex: 1,
    explanation: "Kujtesa afatshkurtër e mban informacionin zakonisht nga disa sekonda në një minutë. Kujtesa shqisore e mban edhe më shkurt, vetëm aq sa për të dalluar stimulin fillestar.",
    tip: "Afatshkurtër = Disa sekonda deri 1 minutë (Si numrat e verifikimit)."
  },
  {
    id: 7,
    text: "Bazuar në modelet e të mësuarit, çfarë parashtron Behaviourism (Sjellja)?",
    options: [
      "Të mësuarit është proces social në grup.",
      "Të mësuarit vjen përmes përpunimit aktiv kognitiv.",
      "Të mësuarit është një proces pasiv i drejtuar nga stimuj të jashtëm (shpërblime/ndëshkime).",
      "Të mësuarit ndodh vetëm përmes teknologjisë."
    ],
    correctAnswerIndex: 2,
    explanation: "Behaviourismi fokusohet tek përgjigjet ndaj stimujve, duke sugjeruar që të mësuarit ndodh duke ofruar shpërblime ose reagime rreth vendimeve (feedback i menjëhershëm).",
    tip: "Behaviourism = Stimul → Reagim (Shpërblim/Ndëshkim)."
  },
  {
    id: 8,
    text: "Cila është rëndësia e Konstruktivizmit në HCI?",
    options: [
      "Fokusohet tek performanca e harduerit.",
      "Sugjeron që të mësuarit ndërtohet përmes ndërveprimeve sociale dhe me mjedisin.",
      "Inkurajon përdoruesit të mësojnë bazuar në frikë.",
      "Detyron dizajnin të fokusohet vetëm tek ngjyrat."
    ],
    correctAnswerIndex: 1,
    explanation: "Konstruktivizmi e sheh të nxënit si proces social që ndërtohet logjikisht gjatë ndërveprimit me sistemin dhe njerëzit e tjerë.",
    tip: "Konstruktivizëm = Konstruktojmë njohuri së bashku (Social).",
  },
  {
    id: 9,
    text: "Çfarë studion ergonomia në kontekstin e kompjuterëve?",
    options: [
      "Sistemin operativ.",
      "Si të ulim dritën e ekranit automatikisht.",
      "Dizajnimin e pajisjeve/ndërfaqeve të rehatshme për të ulur lodhjen dhe parandaluar dëmtimet.",
      "Sasinë e fuqisë që harxhon një monitor."
    ],
    correctAnswerIndex: 2,
    explanation: "Ergonomia merret me mjedisin fizik dhe si mund të ndërtohen mjete që ulin sforcimin fizik, lodhjen, dhe reduktojnë dëmtimet nga përdorimi i zgjatur.",
    tip: "Ergonomi = Rehati fizike dhe shëndet për përdoruesin."
  },
  {
    id: 10,
    text: "Çfarë është Antropometria?",
    options: [
      "Studimi i lëvizjeve të syve.",
      "Matjet dhe përmasat e trupit të njeriut (gjatësia, pesha, forma) për të dizajnuar pajisje unike.",
      "Matja e shpejtësisë së internetit.",
      "Studimi i psikologjisë së ngjyrave në ekrane."
    ],
    correctAnswerIndex: 1,
    explanation: "Antropometria ndihmon ergonominë duke siguruar të dhëna se sa të mëdha/vogla duhet të jenë mausat, tastierat apo karriget duke matur përmasat fizike të njerëzve.",
    tip: "Antropo (Njeri) + Metri (Matje) = Matjet e trupit."
  },
  {
    id: 11,
    text: "Cila është ideja bazë pas 'Dizajnit Universal' (Universal Design)?",
    options: [
      "Produktet duhet të shiten në çdo shtet.",
      "Nëse diçka i përshtatet personave me aftësi të kufizuara, do të jetë më e lehtë për këdo tjetër.",
      "Të gjithë programuesit duhet të përdorin të njëjtën gjuhë programimi.",
      "Krijimi i UI vetëm në gjuhën angleze."
    ],
    correctAnswerIndex: 1,
    explanation: "Dizajni universal nxit zhvillimin që nga fillimi për t'iu përshtatur kufizimeve, duke ditur se përmirësimet e aksesueshmërisë i bëjnë përdorimin më të lehtë për të gjithë.",
    tip: "Universal = Për TË GJITHË (përfshirë personat me aftësi të kufizuara)."
  },
  {
    id: 12,
    text: "Cili nga të mëposhtmit është një shkaktar kryesor i 'Gabimit Njerëzor' (Human Error) sipas mësimeve?",
    options: [
      "Shpejtësia e procesorit tepër e lartë.",
      "Mosha e përdoruesit.",
      "Shpërqendrimet, lodhja, stresi ose mungesa e stërvitjes.",
      "Madhlësia e ekranit që përdoret."
    ],
    correctAnswerIndex: 2,
    explanation: "Sipas leksionit rreth Gabimit Njerëzor, fajtori i madh shpesh vjen nga rrethanat shtesë të mjedisit/personit si stresi, shpërqendrimi, apo trajnimi i dobët.",
    tip: "Gabim = Lodhje + Stres + Mungesë Trajnimi."
  },
  {
    id: 13,
    text: "Cili parim i dizajnimit ndihmon përdoruesit të mësojnë dhe ta kujtojnë ndërfaqen duke ripërdorur formatizimin dhe butonat e përbashkët?",
    options: [
      "Testimi i Përdorshmërisë",
      "Thjeshtësia",
      "Konsistenca (Qëndrueshmëria)",
      "Modelet e Reagimit"
    ],
    correctAnswerIndex: 2,
    explanation: "Konsistenca eviton hapat ku përdoruesi duhet të ri-mësojë kuptimin e funksioneve të ngjashme duke përdorur standarde të njëjta kudo.",
    tip: "Konsistent = I Njëjtë Kudo (Ndihmon kujtesën)."
  },
  {
    id: 14,
    text: "Çfarë roli luan 'Feedback' (Reagimi) në një ndërfaqe (UI)?",
    options: [
      "Ai shfaqet vetëm pasi aplikacioni fshihet.",
      "Ndihmon përdoruesit të bëjnë blerje online.",
      "Ndihmon përdoruesit të kuptojnë rezultatin e veprimeve të tyre, a po ecën siç duhet apo jo.",
      "E kthen aplikacionin tek gjendja fillestare."
    ],
    correctAnswerIndex: 2,
    explanation: "Reagimi duhet të jetë në kohë, vizual ose dëgjimor për ta njoftuar një përdorues që veprimi i kërkuar mbaroi (ose dështoi).",
    tip: "Feedback = Ndjesia e konfirmimit ('Mora vesh')."
  },
  {
    id: 15,
    text: "Për çfarë përdoren 'Modelet e Navigimit'?",
    options: [
      "Për t'u lidhur me përdoruesit e tjerë.",
      "Për t'i ofruar një mënyrë të qartë përdoruesit për të lëvizur midis pjesëve të ndërfaqes.",
      "Për t'i shpërblyer përdoruesit pas një logini.",
      "Për të vendosur të dhëna në një formë."
    ],
    correctAnswerIndex: 1,
    explanation: "Navigimi ka të bëjë thelbësisht me menutë, link-et dhe rrugët për të arritur nga pika A në pikën B në platformë.",
    tip: "Navigim = Harta e aplikacionit (Si të lëvizësh)."
  },
  {
    id: 16,
    text: "Cili nga programet e mëposhtme përshkruhet si 'një mjet dizajni i bazuar në web, i cili lejon bashkëpunim në kohë reale'?",
    options: [
      "Adobe XD",
      "Sketch",
      "Axure RP",
      "Figma"
    ],
    correctAnswerIndex: 3,
    explanation: "Figma veçohet në material specifikisht si lider për bashkëpunim midis dizajnerëve në web live/kohë e vërtetë.",
    tip: "Figma = Web + LIVE bashkëpunim."
  },
  {
    id: 17,
    text: "Çfarë mat metrika 'Koha e përfundimit të funksionalitetit' gjatë testimit?",
    options: [
      "Koha sa duhet për të nisur kompjuterin.",
      "Koha që i duhet një përdoruesi për të përfunduar saktë një detyrë të kërkuar në ndërfaqe.",
      "Jetëgjatësia e baterisë.",
      "Koha e printimit të një raporti dizajni."
    ],
    correctAnswerIndex: 1,
    explanation: "Është një nga metrikat kryesore sasiore që mat përdorshmërinë: Nëse do shumë kohë, dizajni mund të jetë hutaq ose kompleks.",
    tip: "Koha e përfundimit = Shpejtësia për të kryer një task."
  },
  {
    id: 18,
    text: "Në Testimin e Përdorshmërisë, çfarë thekson 'Protokolli Think Aloud'?",
    options: [
      "Përdoruesit i kërkohet të shprehë zëshëm mendimet e tij gjatë kohës që provon ndërfaqen.",
      "Programuesit llogarisin algoritmin me zë të lartë.",
      "Pajisja flet dhe orienton përdoruesin hap pas hapi.",
      "Ndërfaqja pranon vetëm komanda zanore (voice access)."
    ],
    correctAnswerIndex: 0,
    explanation: "Kjo metodë i ndihmon testuesit të kuptojnë logjikën dhe pengesat, sepse përdoruesi flet 'mendjen e vet' (Pse e klikova atë, ku po e kërkoj këtë buton, etj.).",
    tip: "Think Aloud = Mendo me Zë."
  },
  {
    id: 19,
    text: "Cili është hapi i parë në procesin thelbësor të testimit të përdoruesit?",
    options: [
      "Rekrutoni pjesëmarrës.",
      "Përcaktoni objektivat.",
      "Analizoni rezultatet.",
      "Mblidhni komente."
    ],
    correctAnswerIndex: 1,
    explanation: "Para se të masim diçka apo të gjejmë testues, ne duhet të qartësojmë objektivat: Pse po e bëjmë këtë test?.",
    tip: "Hapi 1: Pse po testojmë? (Objektivat)."
  },
  {
    id: 20,
    text: "Pse nevojitet që vëzhguesi të lexojë 'Shenjat joverbale' si gjuha e trupit gjatë testimit?",
    options: [
      "Sepse testuesit mund të gënjejnë verbalisht gjithmonë.",
      "Sepse është i vetmi tip testi që ofrohet.",
      "Sepse ofrojnë njohuri mbi emocionet e përdoruesit dhe nivelin e zhgënjimit (frustrimit) përtej asaj që ata thonë.",
      "Thjesht për ta ngatërruar përdoruesin."
    ],
    correctAnswerIndex: 2,
    explanation: "Shprehjet e fytyrës dhe gjuha e trupit zbulojnë konfuzion apo frustrim që ndoshta testuesi nuk i thotë me fjalë nga mirësjellja apo stresi.",
    tip: "Joverbale = Lexo fshehtësitë e Frustrimit."
  },
  {
    id: 21,
    text: "Cila njihet si një Sfidë e zakonshme për 'Ndërfaqet me Touch dhe Gjeste'?",
    options: [
      "Janë shumë më të vështira për t'u mësuar sepse ngjajnë si programime klasike.",
      "Krijojnë gabime të paqëllimshme (klikime pa dashje) dhe probleme me aksesueshmëri.",
      "Kërkojnë medoemos mjedis të ndriçuar mjaftueshëm, perndryshe fshihet ekrani.",
      "Nuk kërkojnë harduer të posaçëm si ekrani me prekje."
    ],
    correctAnswerIndex: 1,
    explanation: "Një 'fat finger' (prekje gabim), ose vështirësia për rrota të papritura tek njerëz me probleme lëvizjeje tregon sfidën kryesore tek gjestet.",
    tip: "Touch = Lehtësi, por edhe Prekje të Paqëllimshme."
  },
  {
    id: 22,
    text: "Cili është një kufizim/sfidë inxhinierike e Ndërfaqeve të të folurit (p.sh. Siri, Alexa)?",
    options: [
      "Askush nuk do ti përdorë për aksesueshmëri.",
      "Njohja e saktë e thekseve, dialekteve të forta ose zhurmave në sfond.",
      "Bëhet vetëm përmes një monitori me tastierë.",
      "Kërkon syza 3D që shtohen mbi mjedis."
    ],
    correctAnswerIndex: 1,
    explanation: "Procesimi natyral i gjuhës (NLP) ka shpesh vështirësi tek saktësia e përgjigjeve kur theksi ose gjuha nuk është standarde.",
    tip: "Voice UI Sfidë = Dialektet dhe Thekset."
  },
  {
    id: 23,
    text: "Cili është diferencimi kryesor mes Teknologjisë VR (Virtual Reality) dhe AR (Augmented Reality)?",
    options: [
      "AR simulon një botë fiktive 100%, VR shton elementë tek rruga digjitale.",
      "Të dyja përdorin vetëm zërin e përdoruesit për tu kyçur.",
      "VR është botë tërësisht zhytëse, ndërsa AR mbivendos të dhëna dixhital mbi botën tënde reale.",
      "VR nuk njihet për lëvizjen teknike. AR është vetëm vizatime."
    ],
    correctAnswerIndex: 2,
    explanation: "VR u inkuadron juve krejtësisht në një simulim imagjinar. AR ruan sfondin tuaj vizual në dhomë/rrugë dhe shton rrafshe sipër tij.",
    tip: "VR = Zhytëse (Tjetër planet) | AR = Mbivendos (Bota jote + Dixhitale)."
  },
  {
    id: 24,
    text: "Cilat masa i rezervohen Privatësisë dhe Sigurisë së të Dhënave personale në HCI?",
    options: [
      "Zgjerimi i internetit.",
      "Krijimi i rrjeteve më të mëdha pa passworde.",
      "Enkriptimi, kontrollet e aksesit, dizajn transparent ku përdoruesi kontrollon të dhënat.",
      "Mbikëqyrja me shumë kamera në zyrat e zhvillimit."
    ],
    correctAnswerIndex: 2,
    explanation: "Privatësia në dizajnin HCI thekson dizajnet ku përdoruesi vendos vetë sa nga të dhënat kalojnë aty, pra transparencë dhe theks tek enkriptimi.",
    tip: "Siguria = Enkriptim & Kontroll nga vetë Përdoruesi."
  },
  {
    id: 25,
    text: "Çfarë dëshiron të zgjidhë rregulli i thellimit të 'Ndarjes Digjitale' (Digital Divide)?",
    options: [
      "Faktin që disqet hard drive kërkojnë particione të veçanta.",
      "Problemin e aksesit të kufizuar në teknologji për shkak të ndryshimeve ekonomike, fizike apo internetit të dobët.",
      "Veçimin mes zhvilluesve Apple dhe Android.",
      "Problemin e mbrojtjes nga hakerat digjitalë."
    ],
    correctAnswerIndex: 1,
    explanation: "Ndarja Digjitale është gropa sociale midis atyre që kanë internet/teknologji bazike modern vs atyre që nuk e kanë.",
    tip: "Ndarja Digjitale = Pabarazi në Aksesin Ekonomik/Internet."
  },
  {
    id: 26,
    text: "Kur integrojmë Inteligjencën Artificiale (AI), një nga rreziqet kryesore sociale tek HCI është:",
    options: [
      "Ngarkimi tepër i pakët i RAM-it.",
      "Njohja shumë e saktë pamore.",
      "Paragjykimet/Biaset brenda algoritmeve dhe humbja e privatësisë.",
      "Pamundësia që teknologjia të lexojë dokumente të shtypura."
    ],
    correctAnswerIndex: 2,
    explanation: "AI mëson nga të dhënat, gjë që mund të pasqyrojë paragjykime (Biases) njerëzore të hershme duke dëmtuar drejtësinë e UI-së.",
    tip: "Rreziku AI = Paragjykimi Algoritmik (Bias)."
  },
  {
    id: 27,
    text: "Cilat janë dy Llojet e Vëmendjes siç është përcaktuar në Javën 2?",
    options: [
      "Vëmendje pozitive dhe negative",
      "Vëmendje logjike dhe matematikore",
      "Vëmendje selektive dhe e ndarë",
      "Vëmendje manuale dhe automatike"
    ],
    correctAnswerIndex: 2,
    explanation: "Le të fokusohemi tek vëmendja selektive (fokus në 1 stimul) e asaj të ndarë (shumë stimuj).",
    tip: "Vëmendja = Selektive & E ndarë."
  },
  {
    id: 28,
    text: "Çfarë kuptimi mbart IoT (Interneti i Gjërave) në thelb?",
    options: [
      "Zërat natyror që incizohen gjatë një bisede reale.",
      "Pajisjet e përditshme shtëpiake (si frigoriferi) që janë lidhur drejt e komunikojnë në internet.",
      "Robotë që ndërtojnë një kompjuter pa dorën e njeriut.",
      "Strukturat dhe funksionimi i aplikacioneve 3D virtuale."
    ],
    correctAnswerIndex: 1,
    explanation: "IoT lidh pajisjet fizike të zakonshme në internet për të optimizuar jetën dhe informacionin.",
    tip: "IoT = Pajisje të zgjuara (TV, Frigorifer) në Internet."
  },
  {
    id: 29,
    text: "Vlerësimi Heuristik si lloj i gjetjes së të metave të Përdorshmërisë, përfshin:",
    options: [
      "Përdorues rëndomtë nga jashtë pa eksperiencë.",
      "Algoritme që analizojnë kodin rresht për rresht.",
      "Ekspertët e përdorshmërisë, që vlerësojnë elementët duke e krahasuar me një regjim udhëzimesh heuristike.",
      "Ndërhyrjen e hakerave pro."
    ],
    correctAnswerIndex: 2,
    explanation: "Heuristics janë rregulla të arta (udhëzime ekspertize) përmes të cilave eksperët matin ndërfaqet manualisht.",
    tip: "Heuristik = Inspektim nga Ekspertët UI/UX."
  },
  {
    id: 30,
    text: "Ne theksuam Modelet e 'Onboarding'. Çfarë rëndësie kanë?",
    options: [
      "Lidhin paisjen me internetin lokal.",
      "Nxisin shpenzimet e fshehta tek vizitorët e rinj.",
      "U ofrojnë udhëzues vizualë të porsaardhurve në mënyrë që të mësojnë platformën fillestare.",
      "Zhvlerësojnë testimet vizuale."
    ],
    correctAnswerIndex: 2,
    explanation: "Onboarding është ndërfaqja udhëzuese ('Tutori' juaj digjital) kur e hap aplikacionin për herë të parë.",
    tip: "Onboard = Udhëzuesi i parë, mirëseardhja."
  },
  {
    id: 31,
    text: "Sipas perspektivës së Kognitivizmit, çfarë theksohet gjatë fazës së të mësuarit tek njeriu?",
    options: [
      "Mësimi vjen thjesht si reaksion muskular pasiv ndaj stimujve fiziologjikë.",
      "Theksohet përpunimi aktiv i të dhënave, informacioneve dhe roli i proceseve mendore logjike.",
      "Njerëzit mendojnë thellësisht vetëm përmes zhvillimit ekskluziv në grup.",
      "Të nxënit arrihet kur kompjuteri e merr përsipër të gjithë detyrën fizike."
    ],
    correctAnswerIndex: 1,
    explanation: "Kognitivizmi e sheh mësimin si një proces mendor aktivisht logjik dhe perceptues nga ana e përdoruesit (si përpunim informacioni nga një kompjuter).",
    tip: "Kognitivizëm = Proces Aktiv Mendor."
  },
  {
    id: 32,
    text: "Pse përdoren 'Kornizat konceptuale' gjatë planifikimit në HCI?",
    options: [
      "Janë plastika mbrojtëse fizike për ekranet e pajisjeve.",
      "Përdoren për të kufizuar sasinë e tekstit në tërë aplikacionin.",
      "Ato janë struktura më të gjera që organizojnë vizualisht dhe kategorizojnë informacionin për të udhëhequr dizajnin.",
      "Janë modele matematikore dëgjimore për inxhinierët audio."
    ],
    correctAnswerIndex: 2,
    explanation: "Kornizat konceptuale u shërbejnë designers të orientojnë mendjen e tyre lidhur me thelbin dhe organizimin e informacionit dhe funksioneve të sistemit në aplikacion.",
    tip: "Korniza Konceptuale = Strukturë për të Organizuar Informacionin."
  },
  {
    id: 33,
    text: "Një nga synimet kryesore dhe thelbësore të Ergonomisë në pajisje dhe ndërfaqe është:",
    options: [
      "Rritja e rezolucionit të ngjyrave në platformat web.",
      "Pjesëmarrja në tregti online duke shtuar reklamimet e produkteve kompjuterike.",
      "Projektimi i tyre sa më të rehatshme për të zvogëluar lodhjen dhe për të minimizuar rrezikun e dëmtimit shëndetësor gjatë përdorimit.",
      "Krijimi i rrjeteve virtuale private për punonjësit."
    ],
    correctAnswerIndex: 2,
    explanation: "Ergonomia optimizon pajisjet që njerëzit të shmangin sforcimet fizike (p.sh tendinit rreth kyçeve, dështim pamor).",
    tip: "Ergonomia = Rehati fizike dhe shëndet për përdoruesin."
  },
  {
    id: 34,
    text: "Për çfarë thekson parimi thelbësor: 'Dizajni me në qendër përdoruesin' (User Centered Design)?",
    options: [
      "Zhvilluesit theksojnë preferencat e tyre artistike personale mbi çdo gjë tjetër.",
      "Buxheti i projektit cakton pamjen perfundimtare pa asnjë testim publik.",
      "Aplikacioni fokusohet kryekëput në thellimin e kuptuarit të nevojave, qëllimeve, frustrimeve dhe preferencave të përdoruesve qysh në fillim.",
      "Serverat dhe performanca back-end kanë 99% të rëndësisë krahasuar me vetë ekranin grafik."
    ],
    correctAnswerIndex: 2,
    explanation: "Procesi nis dhe e mbron përdoruesin si orientim bazë për thellimin e nevojave reale të aplikacionit tonë.",
    tip: "Në Qendër Përdoruesi = Kupto Neojat e Tij si Fillesë Parësore."
  },
  {
    id: 35,
    text: "Çfarë përfaqëson rregulli specifik i 'Aksesueshmërisë' brenda parimeve të 'Dizajnit Universal' (Universal Design)?",
    options: [
      "Të bëhen pagesa ekstra për njerëzit që ndodhen në vështirësi vizuale.",
      "Përdoruesit duhet të përdorin dhe bliejnë aparaturat e fundit kompjuterike për të marrë pjesë në testime.",
      "Garancia thellësore që ndërfaqja ofron mënyra alternative bashkëveprimi (psh audio tekst, komanda zanore) dhe rezulton e lehtë dhe e qasshme për të gjithë njerëzit pavarësisht aftësive.",
      "Tekstet ofrojnë vetëm përshtatshmëri një-gjuhësore anglisht si model universal standard i rrjeteve online."
    ],
    correctAnswerIndex: 2,
    explanation: "Dizajni ofron mundësi e opsione teknologjike alternative që askush të mos ndihet i përjashtuar dhe të ketë mundësi veprimi barabartë.",
    tip: "Aksesueshmëri = Ofro Mënyra Alternative  të Barabarta Për Gjithësecilin."
  },
  {
    id: 36,
    text: "Cili është një shembull e qëllim tipik i aplikimit të 'Modeleve të Dialogut' në kompjuter ose faqe rrjetesh?",
    options: [
      "Ato shërbejnë për të bashkuar mesazhe zëri midis lidhjeve e celularëve Bluetooth.",
      "U drejtojnë vizitorëve opsione bazike si njoftime vizuale dhe dritare paralajmërimi me qëllim konfirmimin e një hapi të padëshiruar.",
      "Krijimi i bisedave virtuale private me kompjuterat dhe robotë në server qendror.",
      "Leximi dhe rritja e rezolucionit të figurave fotografike dhe ngjyrave vizuale."
    ],
    correctAnswerIndex: 1,
    explanation: "Dialog-modelet inkuadrohen shkëlqyeshëm tek alert-et dhe konfirmimet që na shmangin fshirjet e pakuptimta apo të gabuara të veprimeve.",
    tip: "Model Dialogu = Pop up Konfirmimi psh 'A je i Sigurt?'."
  },
  {
    id: 37,
    text: "Si manifestohen 'Modelet e Përzgjedhjes dhe të Hyrjes' në platformat grafike web te sotme?",
    options: [
      "Bllokojnë aksesin e rreptë përdoruesve tjerë e ashtuquajturave hakerave.",
      "Përmes formave të vendosjes se te dhënave në fushata teksti ose permes kutive te shënimit dhe listat opsion rënëse të zgjedhjes (input e checkboxes).",
      "Të detyrojnë pajisjen fizikisht të hapet për të fshirë dokumente pa kërkuar konfirmime.",
      "Sigurojnë lidhjen grafike midis ngjyrave dhe ngjyrimeve gradient te dritave te hardware."
    ],
    correctAnswerIndex: 1,
    explanation: "Keto elemente grafikë mundësojnë që njerëzit te fusin datat, numrin vetiak textet dhe te mbushin forma zgjedhore.",
    tip: "Modele Hyrje/Zgjedhje = Fusha Teksti dhe Lista Zgjedhor."
  },
  {
    id: 38,
    text: "Për funksionimin e 'Modeleve Sociale' mund të themi se qëllimi tyre qendror është:",
    options: [
      "Te mbikqyrë vizualisht sytë dhe kamerat jashtme te njerëzve pandërprerë.",
      "Te ndalojnë interaktimin mbas 2 orësh në lojëra video elektronike.",
      "Tu japin përdoruesve vizitor të platformave mundesinë unike e direkte për tu lidhur e për të ndërvepruar në real kohë me njeri-tjetrin brenda nje ndërfaqeje.",
      "Te ofroje pagesa qeveritare nga platformat e rrepta boterore elektronike."
    ],
    correctAnswerIndex: 2,
    explanation: "Ato synojnë thellimin e angazhimit e ndërveprimeve midis përdoruesve (rrjetizimin) brenda rrjetit aplikacion.",
    tip: "Modele Sociale = Bashkim e Lidhje Mes Përdoruesve."
  },
  {
    id: 39,
    text: "Për Mjetin grafik 'Adobe XD' dhe Figma, cila veçanti theksohet në material?",
    options: [
      "Ndërtimi nga inxhinjerët të database backend të huaja masive.",
      "Lejon dizajnerët të krijojnë vizualisht wireframes, prototipe skicuese me interaktivitet të lartë dhe besueshmëri vizuale.",
      "Kompleton printimin fotokopje 3D të letres zyrtare softuerike.",
      "Konverton tekstin vizual ne gjuhë audio pa asnjë gabim strukturor."
    ],
    correctAnswerIndex: 1,
    explanation: "Ky opsion veçorizohet per ofrimin e interaktivitetit në prototipe dhe thellimin vizual të wireframes.",
    tip: "Adobe XD = Wireframes & Prototipe Interaktive."
  },
  {
    id: 40,
    text: "Në listën e metrikave për matjen UX, çfarë mat specifikisht *shkalla e gabimit*?",
    options: [
      "Përmasat fizike të dritës së ekranit, të matura në inç.",
      "Saktësinë gramatikore të kodit ose të tekstit në program.",
      "Numrin e gabimeve, klikimeve të pasakta ose dështimeve që bëjnë përdoruesit gjatë kryerjes së detyrave në ndërfaqe.",
      "Një numër abstrakt që tregon sa shpesh fshihet disku i pajisjes."
    ],
    correctAnswerIndex: 2,
    explanation: "Sa më i ulët të jetë numri i gabimeve gjatë përdorimit, aq më intuitive dhe më e përdorshme konsiderohet ndërfaqja.",
    tip: "Shkalla e gabimit = numërimi i dështimeve ose veprimeve të gabuara të përdoruesit."
  },
  {
    id: 41,
    text: "Për çfarë shërbejnë 'Anketat e Kënaqësisë' si mjet gjatë matjeve dhe testimeve UX?",
    options: [
      "Si formular pagese ose rimbursimi për testuesit vullnetarë.",
      "Për të mbledhur opinionet, komentet dhe ndjesitë subjektive të përdoruesve rreth ndërfaqes.",
      "Për të treguar si punon drita në serverin harduerik.",
      "Për të mbledhur shkronjat e faqes dhe theksin fonetik të përdoruesve."
    ],
    correctAnswerIndex: 1,
    explanation: "Ndryshe nga metrikat numerike, anketat matin përjetimin subjektiv: sa të kënaqur, të qetë ose të frustruar ndihen përdoruesit.",
    tip: "Anketa e kënaqësisë = matja e opinionit dhe ndjesisë së përdoruesit."
  },
  {
    id: 42,
    text: "Në testet UX, çfarë nënkupton rregulli i 'Qëndrimit Objektiv' gjatë vëzhgimit?",
    options: [
      "T'i tregosh menjëherë pjesëmarrësit zgjidhjen sa herë që hutohet.",
      "Të qëndrosh neutral, i qetë dhe të shmangësh ndërhyrjet që mund të ndikojnë sjelljen natyrale të pjesëmarrësit.",
      "Të ndalosh testin dhe të ndërhysh teknikisht sa herë që përdoruesi bën gabim.",
      "Të fikësh ekranin dhe sistemin e vëzhgimit."
    ],
    correctAnswerIndex: 1,
    explanation: "Nëse vëzhguesi jep sugjerime ose orientime, rezultati i testit shtrembërohet dhe nuk pasqyron sjelljen reale të përdoruesit.",
    tip: "Qëndro objektiv = mos ndërhy dhe mos ia mëso përdoruesit zgjidhjen."
  },
  {
    id: 43,
    text: "Si përdoret kuantifikimi gjatë fazës së analizës së të dhënave në UX?",
    options: [
      "Të dhënat cilësore, si vëzhgimet dhe sjelljet e përdoruesve, kthehen në shifra të matshme për të identifikuar modele, përqindje dhe tendenca përdorimi.",
      "Kuantifikimi e kundërshton saktësinë e matjeve dhe nuk përdoret në analizë.",
      "Kuantifikimi shërben vetëm për printimin e dokumenteve të testimit.",
      "Kuantifikimi mbyll testin dhe nuk lejon fillimin e analizës."
    ],
    correctAnswerIndex: 0,
    explanation: "Kuantifikimi ndihmon që komente, gabime ose sjellje të vëzhguara të kthehen në vlera statistikore të krahasueshme.",
    tip: "Kuantifikimi = kthimi i të dhënave në shifra të numërueshme."
  },
  {
    id: 44,
    text: "Çfarë i inkurajon zhvilluesit të zbatojnë trajtimi i thelluar i 'Privatësisë dhe Sigurisë' në UX?",
    options: [
      "Fshirjen e vazhdueshme të dokumenteve pa dijeninë e përdoruesit.",
      "Strategji mbrojtëse si enkriptimi i të dhënave, kontrollet e aksesit dhe dizajni transparent që i jep përdoruesit kontroll mbi të dhënat personale.",
      "Vetëm ndryshimin e ngjyrave vizuale të faqes.",
      "Fshehjen e kodit dhe bllokimin e aksesueshmërisë për përdoruesit."
    ],
    correctAnswerIndex: 1,
    explanation: "Privatësia dhe siguria në UX kërkojnë mbrojtje teknike, transparencë dhe kontroll të qartë për përdoruesin.",
    tip: "Privatësia = enkriptim, kontroll aksesi dhe kontroll nga përdoruesi."
  },
  {
    id: 45,
    text: "Çfarë përfaqëson fenomeni social i njohur si 'Ndarja Digjitale'?",
    options: [
      "Bashkimin e rrjeteve të hapura për qëllime sulmesh kibernetike.",
      "Zhdukjen e rrjeteve dhe ngjyrave nga ndërfaqet grafike.",
      "Pabarazinë në aksesin ndaj teknologjisë bazike dhe internetit për shkak të gjendjes ekonomike ose infrastrukturës së dobët.",
      "Faktin që kompjuterët mbyllen vetë në fund të ditës."
    ],
    correctAnswerIndex: 2,
    explanation: "Ndarja digjitale lidhet me pabarazinë mes njerëzve ose komuniteteve që kanë akses në teknologji dhe atyre që nuk kanë.",
    tip: "Ndarja digjitale = pabarazi në akses teknologjik dhe internet."
  },
  {
    id: 46,
    text: "Si dallojnë konceptet Artificial Intelligence (AI) dhe Machine Learning (ML)?",
    options: [
      "AI zhduk të dhënat nga interneti, ndërsa ML nuk ka rol të veçantë.",
      "AI është koncepti më i gjerë i sistemeve që kryejnë detyra që kërkojnë inteligjencë, ndërsa ML është një nënfushë ku modelet mësojnë nga të dhënat.",
      "ML zëvendëson vetëm grafikën e kompjuterit, ndërsa AI merret vetëm me serverë.",
      "AI dhe ML janë koncepte që e kundërshtojnë plotësisht njëri-tjetrin."
    ],
    correctAnswerIndex: 1,
    explanation: "AI përfshin synimin e përgjithshëm për të imituar aftësi inteligjente, ndërsa ML fokusohet në trajnimin e modeleve nga të dhënat.",
    tip: "ML = modeli që mëson nga të dhënat; AI = fusha më e gjerë."
  },
  {
    id: 47,
    text: "Çfarë tregon koncepti 'Llogaritja e Kudondodhur' (Ubiquitous Computing)?",
    options: [
      "Një sistem që prish qëllimisht ndërfaqen dhe fsheh funksionet kryesore.",
      "Kompjuterë që ndizen vetëm natën dhe nuk lidhen me përdoruesin.",
      "Teknologjia kompjuterike bëhet gjithnjë e më e padukshme dhe integrohet në objektet e jetës së përditshme përreth nesh.",
      "Fakti që përdoruesit nuk duhet të përdorin pajisje të lidhura."
    ],
    correctAnswerIndex: 2,
    explanation: "Në llogaritjen e kudondodhur, teknologjia nuk shfaqet vetëm si kompjuter klasik, por ndërthuret në mjedisin dhe objektet e përditshme.",
    tip: "Kudondodhur = teknologji e fshehur dhe e integruar në mjedisin e përditshëm."
  },
  {
    id: 48,
    text: "Cili është një rrezik i rëndësishëm që lidhet me Internetin e Gjërave (IoT)?",
    options: [
      "Nuk paraqet asnjë rrezik për përdoruesit ose privatësinë.",
      "Zhduk automatikisht kompjuterët dhe pajisjet nga rrjeti.",
      "Mbyll vetëm rrjetet lokale pa prekur të dhënat personale.",
      "Mund të krijojë rrezik për humbje privatësie dhe mbikëqyrje të vazhdueshme përmes pajisjeve e sensorëve të lidhur."
    ],
    correctAnswerIndex: 3,
    explanation: "Pajisjet IoT mbledhin shumë të dhëna nga mjedisi dhe jeta e përditshme, prandaj keqpërdorimi i tyre mund të çojë në survejim dhe cenim privatësie.",
    tip: "Rreziku i IoT = survejim dhe humbje privatësie."
  },
  {
    id: 49,
    text: "Cili është një rregull etik dhe i përgjegjësisë sociale në dizajn?",
    options: [
      "Të bëhen aplikacionet sa më të fshehta, manipuluese dhe abuzuese.",
      "Të ofrohet një dizajn i qartë, i ndershëm dhe gjithëpërfshirës, që shmang dëmtimin psikologjik ose fizik dhe redukton paragjykimet algoritmike.",
      "Të fshihen të dhënat pa paralajmërim dhe pa lejen e përdoruesit.",
      "Të gjykohet përdoruesi dhe të kufizohet qasja e tij pa arsye."
    ],
    correctAnswerIndex: 1,
    explanation: "Dizajni etik shmang manipulimin, dark patterns, diskriminimin dhe dëmtimin e përdoruesve.",
    tip: "Etika në UX = parandalim dëmi, drejtësi dhe gjithëpërfshirje."
  },
  {
    id: 50,
    text: "Pse përdoren 'Modelet e Hyrjes dhe Përzgjedhjes' në ndërfaqe?",
    options: [
      "Për të llogaritur gabime të fshehta në kompjuter.",
      "Nuk përdoren kurrë në dizajnin e ndërfaqeve.",
      "Për të hapur faqe interneti pa kontroll nga përdoruesi.",
      "Për t'u ofruar përdoruesve forma pamore, si fusha teksti, formularë, kuti zgjedhjeje dhe lista, ku mund të vendosin të dhëna ose të zgjedhin opsione."
    ],
    correctAnswerIndex: 3,
    explanation: "Këto modele e bëjnë të qartë mënyrën se si përdoruesi fut informacion ose zgjedh mes alternativave në ndërfaqe.",
    tip: "Hyrje/Përzgjedhje = fusha teksti, formularë dhe lista opsionesh."
  }
];
