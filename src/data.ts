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
      "U ofrojnë udhëzues vizualë të porsaardhurve në mënyrë që të mësojnë the platformën fillestare.",
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
      "Serverat dhe performanca the back-end kanë 99% të rëndësisë krahasuar me vetë ekranin grafik."
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
      "Të detyrojnë pajisjen fizikisht të hapet per the fshirë dokumente pa kërkuar konfirmime.",
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
      "Te ndalojnë interaktimin mbas 2 orësh ne lojera the video elektronike.",
      "Tu japin përdoruesve vizitor të platformave mundesinë unike e direkte për tu lidhur e për të ndërvepruar në real kohë me njeri-tjetrin brenda nje ndërfaqeje.",
      "Te ofroje pagesa qeveritare nga platformat e rrepta boterore elektronike."
    ],
    correctAnswerIndex: 2,
    explanation: "Ato synojnë thellimin the angazhimin e ndërveprimeve midis përdoruesve (rrjetizimin) brenda rrjetit aplikacion.",
    tip: "Modele Sociale = Bashkim e Lidhje Mes Përdoruesve."
  },
  {
    id: 39,
    text: "Për Mjetin grafik 'Adobe XD' si the Figma, cila veçanti theksohet në material?",
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
    text: "Në listën e Metrikave per matjen UX, *Shkalla e gabimit* zbulon dhe mat specifikisht:",
    options: [
      "Përmasat fizike të dritës se ekranit te matura në inç.",
      "Saktësin e gramatikës ne formen programimit the shkrimtar the kodues te software.",
      "Numrin e dështimeve dhe shmangiet e gabuara apo klikimet që njerëzit e rendomë benë teksa provuan e u përpoqën të kompletonin detyrat në ndërfaqe.",
      "Një numer thellesisht abstrakt qe fshin diskun hardware tjetrit nga rrjetet mbikqyrëse."
    ],
    correctAnswerIndex: 2,
    explanation: "Sa më i vogel the thellesisht fiks i ulet numri gabimeve, of the UI aq më intuitiv vlerësohet funksioni rrjedhës i dizajnit tonë.",
    tip: "Shkalla Gabimit = Numërimi dështimeve/gabimeve te Vizitorit."
  },
  {
    id: 41,
    text: "Për çfarë shërbejnë 'Anketat e Kënaqësisë' si mjet gjatë matjeve UX the testimeve?",
    options: [
      "Si formular pagese dhe rimbursuese për testuesit vullnetare.",
      "Ndihmojn të vleresojn qe të nxjerrin dhe të mbledhin opinionet e drejtpërdrejtë dhe komentet subjektive nga vete përdoruesit human rreth ndjesisë se tyre pozitive negative the mbi ndërfaqen.",
      "Gjejne e të tregojn the si punon drita në serverin harduerik jush the.",
      "Mbledhin vizualisht shkronjat e faqes dhe theksin fonetik the pa u kundershtuar nga askush."
    ],
    correctAnswerIndex: 1,
    explanation: "Nqs matmet UX empirike numeruan kohen, kjo thenie anketore e vlereson the thellon emocionin subjektiv pozitiv a negativ te pjestarëve eksperimental.",
    tip: "Anketa e Kënaqësisë = Matja e Opinionit dhe Ndjesisë Së Përdoruesit."
  },
  {
    id: 42,
    text: "Një rregull qendror i 'Vëzhgimit Efektiv' te testeve UX eshte 'Qëndrimi Objektiv'. Kjo nxit vëzhguesin të:",
    options: [
      "Ti tregojë drejt logjikisht zgjidhjen pyetësve menjëherë porsa ata hutohen pa pritur asnjë çast ngurimi.",
      "Të jetë i qetë vizuale dhe qëndrojë i fokusuar asnjanës e të shmanget thellësisht ndaj çfarëdo ndërhyrje nxitëse ose thellësisht ndikuese mbi sjelljen e pavarur gjatë testit.",
      "Gjeje dhe ndaloje lojen e lire testuese the nderhyje hardware me dhunë virtuale.",
      "Zhdukje të pamjes se ekranit dhe sistemit mbikqyrës."
    ],
    correctAnswerIndex: 1,
    explanation: "Nese Vëzhguesi theksisht jep hints (ndihmesa the orientime thellësore), rezultati natyral UI dhe thellësia e vlerësimit do të shtrembërohej tërësisht.",
    tip: "Qëndro Objektiv = Mos Ndërhy dhe Mos i Mëso Vizitorit si ta zgjidhë testin."
  },
  {
    id: 43,
    text: "Si adresohet termi logjik 'Kuantifikimi apo rregulli i Përcaktimi të Sasisë së Të Dhënave' gjatë fundit of fazes analisis UX?",
    options: [
      "Do te thote thellim the kthim numerik i dhenave te marrjes of the the vrojtimeve të cilësisë he the sjelljes, në shifra llogaritese e absolute me sasi numerike the për te identifikuar në përqindje e thellesisht statistikisht modelet e tendencat e përdorimit.",
      "Kundershton saktësin e matjeve the vargjet e qarte dritat the vizitor jush tjetrit e.",
      "Pamundeson the thellësisht The printimin me vizuale te letres ui hardware ui the tjetrit.. rrotull the e",
      "Mbyll rrotull The the e testin UI The rrotull the qete e nuk the lejon të the fillosh ui the The kundershtues ui the the The UI ui . The the e the The jush ui tjetrit.. ui e"
    ],
    correctAnswerIndex: 0,
    explanation: "Ju thellësisht i ktheni dhenat cilësore si the ankesat dhe gabimet në the vlerë The the statistikore (Sasi / Kuatifikim) the per ti the thellësuar.",
    tip: "Percaktoni Sasinë (Kuantifikimi) = Jepi Shifra të Numërueshme dhe Kritikё."
  },
  {
    id: 44,
    text: "Roli parësor i zgjidhjes the thelluar of 'Privatësisë e Sigurisë' ne UX the inkurajon the the zhvilluesit të zbatojnë The the rregull rrotull the the?",
    options: [
      "Te the i fshijnë vazhdimisht The pa kuptuar hakerat thellësisht harrimin e dokumenteve the the rrotull e",
      "Strategji the thellësisht mbajtës the mbrojtjes e the si Enkriptimi the the i the dhënave , the thendur ndërtimin me kontrolle të bazuara tek the AKSESI dhe the dizajn i qartë transparent që i lejon the përdoruesve the thellësisht mbajtjen vet të kontrollit the absolute the tyre personal. the The",
      "Vetëm the heqjen vizual të ngjyrave The the fshehte logjike rrotull e the the the faqa the the dritave rrotull e tjetrit The ",
      "Fsheh kodet masivisht dhe bllokon jush the tjetrit aksesueshmërin the ndertimit UI the nga njerezit UI The qarte logjike e The jush the tjetrit u the . the "
    ],
    correctAnswerIndex: 1,
    explanation: "The the të dhenat The the mbrohen fuqishëm me kripografi, dhe ui kundershtues ti japim përdoruesve lirinë the vizibilisht (Enkriptimi+Aksesi).",
    tip: "Privatësia zgjidhet me = Enkriptime & Kontroll nga Përdoruesi the."
  },
  {
    id: 45,
    text: "Fenomeni social i njohur si 'Ndarja Digjitale' perfaqeson the mundësitë The e the pabarabarta që vjen the The nga:",
    options: [
      "Bashkimi the i rrjeteve UI hakerave e te e hapur hardware kundershtimit ui rrotull e The u rrotull e the the..The the The ",
      "Zhdukja ui kundershtimit e rrjeteve the the u te vizualisht The rrotull ngjyres UI the e hardware the jush rrotull The tjetrit e tjetrit u  ",
      "Akses i the thellësisht kufizuar apo mungesa fare e aksesit drejt tekonlogjisë bazike the internetit për shkak të gjendjes dhe hendekut ekonmik apo the infrastrukture teknologjike the dobët of shtete të varfëra The . e the kundershtues ui e e ",
      "Fakti the kundershtimit vizual i kompjuterat mbyljen jush e dritat the vete u rrota the botes the e tjetrit the kundershtues jush "
    ],
    correctAnswerIndex: 2,
    explanation: "Thellimi i varfërisë e dhe infrastrukturës shkakton një ndarje ekstreme dixhitale mes gjendjeve of njerëzve the the the the.",
    tip: "Ndarja The Digjitale The = Pabarazi në Akses teknologjik the & internet."
  },
  {
    id: 46,
    text: "Si the the the the do ta the percaktoni diferencen bashkëkohore the thelluara të konceptit the The Artificial Intelligence (AI the ) the The dhe Machine Learning The (ML the ) the Mësimit të Makinerive The the the?",
    options: [
      "AI zhduk vargjet e jush dhenat the ui e the internet The the tjetrit hakerave the the hardware mbyllur tjetrit kundershtimit ui logjike , udhezues tjetrit UI The the ML the asgje tjeter the e the u tjetrit UI e rrotull e.. the e",
      "AI the the the është koncepit umbrella madhe që zhvillon platforma e asisto the mbledh makinës ndaj detyrave the The logjike qe jush The the kerkojnë inteligjencë human, ndërsa The the ML u stërvit logjikën me anë të procesimit The te 'Të Nxënit the nga grupe te të The Dhënave massive' the the the me the The kohen. e ui u the the The the e",
      "ML zevendeson faturen drejt the grafike e the kompjuterat the the server AI the The the u The rrotull jush shton gabime tjetrit ui ui e hakerat ui the.. The rrotull ui The",
      "Kundershtojne ui njëri the e tjetrin The kundershtimit The e the the pa UI u the dhene kundershtues jush drejt ui rrotull e the The e jush the kompjuter UI the the kundershtues The jush rrotull The e the "
    ],
    correctAnswerIndex: 1,
    explanation: "The the AI the mbart synimin e gjerë of human like inteligjenc.. the ML the bazohet tek trajnimi the dhe The nxënia The nga of the Të Dhënat The . e u the ",
    tip: "ML (The Makineria) = Modeli që The Mëson The nga the Të Dhënat The dhënies Sëtyre. e"
  },
  {
    id: 47,
    text: "Koncepti 'Llogaritja e Kudondodhur (Ubiquitous Computing)' tregon the the the:",
    options: [
      "Sistemi e e The tjetrit kundershtimit rrotull ui fshehet e UI e UI the hapur e tjetrit dhe u UI prish dritave jush ui rrotull e e e UI UI the e logjike The tjetrit tjetrit the The the tjetrit The ui e the tjetrit . UI ",
      "Komjutera qe ui e kundershtues rrotull ui UI ndezin e jush dëshmitare UI the tjetrit the the hardware kundershtues vetem rrotull dritare tjetrit naten u The the ui kundershtues jush e tjetrit the UI the rrotull jush e ui jush kundershtues the e rrotull the jush the e.. ui",
      "Gjithçka The ui jush rrotull dhe teknologjia the the kompjuterike bëhet gjithmonë the e padukshme the The inkuadruar në rrënjë të the jetës The Përditshme, kudo përmes sendeve të rëndomta përreth nesh the. tjetrit e . jush e e tjetrit The jush rrerja The ui rrotull e e rrotull tjetrit e The the the jush ",
      "Fakti the UI kundershtues jush tjetrit se UI The nuk The u the tjetrit UI ui mbajm e UI kundershtues rrotull rrotull jush e the pajisje kundershtues e mbyllura the tjetrit kundershtues ne rrotull the dritare tjetrit jush the the The UI ui the e.. UI ui the e jush u tjetrit UI rrotull e the the kundershtues"
    ],
    correctAnswerIndex: 2,
    explanation: "Teknologjia the the e fshihet pamje the The dhe rreshqet feshutas në inxhinierin The the The e cdo rëndomti the The send The jetw Përditshme the e jush the the .",
    tip: "Kudondodhur = Teknologi E fshehur the the e gershetuar Ne Mjedis Përditshme The . e"
  },
  {
    id: 48,
    text: "Si udhëzohemi të the thellësisht identifikojmë rrezikun The e lidhur më 'Internetit të the Gjërave (IoT the)' The the the the the?",
    options: [
      "Asgjë rrotull the jush e The perball rrezik the The the hakerave the the rrotull . The the ui jush The jush e The ui the kundershtimit The rrotull the The the e jush e rrotull " ,
      "Zhdukje e The the kompjuter hakerat The kundershtues kundershtues e the jush kundershtues rrotull.. The the The jush the e The rrotull The ",
      "Vetëm the e rrjetat jush the the kompjuter the mbyllin mbyllur The rrotull e the ui e kundershtues u UI The hardware e jush rrotull u the tjetrit The u kundershtimit The kundershtues kundershtues e the jush rrotull e e the the.. u the The",
      "Krijimi The i the rrezikut the the të humbjes se lartë The of the Privatësisë dhe The krijimi the the i një mbikëqyrjes e Survejimit The The 24-orësh e fshehtë the të përditshmërisë se jush njerëzve the jush The the e The the the rrotull the e.. the jush the rrotull u the the u ui kundershtues u tjetrit u"
    ],
    correctAnswerIndex: 3,
    explanation: "The the IoT The shkrin cdo the jush sensor shtëpie the The gje the The qe lejon surveillance the the mbikqyrje the thellë 24 oresh the jush the e The e .",
    tip: "Rreziku jush i IoT = Survejimi  Dhe Humbje e Privatësisë jush . ui e"
  },
  {
    id: 49,
    text: "Një nga rregullat e tjetrit etike dhe the The Përgjegjësisë the the Sociale the The the në The dizajn êshtë the The ui tjetrit jush kundershtues kundershtimit e ?",
    options: [
      "Bërja e The aplikacioneve the The kompjuterike dhe The the sa the The më The te fshehta dhe The the dhe abuzuese e kundershtues the The uj The e ui tjetrit ui kundershtues The jush rrodhi u the the e.. the jush kundershtues the the UI tjetrit ui the e rrotull e",
      "Ofrimi i një dizajni të qartë the the the cili mbeshtetet ne Etike The parandalon jush dëmtimet e njeriut the Psikologjike the The fizike the the the dhe jush the i ofron The një ndërfaqe të ndershme e inclusive The pa the Paragjykime algoritmike the THE the jush kundershtues tjetrit The The tjetrit e The",
      "Fshirja UI the ui the e i u UI kundershtues ui the e dhenave the The tjetrit u the e dritare the uj hakerat The rrotull e tjetrit e ui kundershtues jush tjetrit u the the ui jush .. the kundershtues jush u the The rrotull The rrotull the ui tjetrit ui the ui e ",
      "Gjykimi the ui jush i the u UI hapur the kundershtues ui e the mbeshtetja ui UI e tjetrit ui e rrotull vizitorit the the e kompjuter kundershtimit u the u the The rrotull UI the rrotull jush kundershtues e dritave jush the the the u e.. ui The rrotull the ui UI the u the kundershtues jush e"
    ],
    correctAnswerIndex: 1,
    explanation: "Do te the the the the the the the the jepet the the the The nderfaqe e qartë the që jush parandalon abuzimin psikologjik (Dark patterns) e rrotull moral parandalon The UI rrotull drejta demtimet the UI qartë e rrotull per u ta the The bere the aplikacionin human jush e per UI të gjithë njerëzit The tjetrit The.. e The",
    tip: "Etika UI UX jush The = Parandalo tjetrit Dëmtimet the dhe The Ofroni The Ndërfaqe jush mbeshtetja Te Drejta The e tjetrit e ."
  },
  {
    id: 50,
    text: "Pse i përdorim ui dhe kundershtimit the 'Modelet e UI Hyrjes jush The the e dhe the The rrotull Përzgjedhjes tjetrit rrotull UI kundershtues the ' the the the The the the the the ?",
    options: [
      "Per the u jush kundershtues e rrotull llogarit the rrotull UI hakerat ui the hapur e tjetrit kompjuter e ui tjetrit the kundershtimit dritave u drita e the .. jush kundershtues e the ui the kundershtimit the The jush rrerja The",
      "Nuk the i përdorim The kurrë ato the the the jush u The kundershtues the e The the kundershtimit tjetrit ui tjetrit the UI the UI ui jush kundershtues rrotull the... the The . e rrotull the jush ui the jush u",
      "Per the The the e hap faqe internet pa The tjetrit hakerat The ui e fshire the jush ui the rrotull the e the kundershtues tjetrit dritare The e UI kundershtues the jush u e ui the jush.. ui the e e ",
      "Duke u The i jush The The the vizuale ofruar drejt the The përdoruesve the the format logjike The ui the pamore ui The (si formulari The teksti the jush e The form) the tjetrit ku The ato the mund te the vendosin The rrotull the the The the të dhënat of drejt The The tjetrit the dhe tjetrit The ui te e zgjedhin the e jush the the jush opsionet The e The the listës e asaj u ui faqeje logjik The "
    ],
    correctAnswerIndex: 3,
    explanation: "Modelet UI jush the logjike the the format the the dritaret i ofrojne the inpute opsione jush per ui e the e të ofruar e The the e The të that hapa e the dhenies se the text the.",
    tip: "Hyrje/Përzgjedhje The = Formular The Tekst the & Lista tjetrit u Zgjidhës tjetrit kundershtues jush e . ui The e"
  }
];
