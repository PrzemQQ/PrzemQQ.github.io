let submit_btn = document.querySelector("#submit_dictionary");
let inputv = document.querySelector(".jsword");
let sec1 = document.querySelector("section:nth-child(1)");
let footer = document.querySelector("footer");


let h3 = document.querySelector('h3');
h3.addEventListener('click', () => {
    main_view = 1;
    main_view == 1 ? menu() : x;
});
h3.addEventListener('touch', () => {
    main_view = 1;
    main_view == 1 ? menu() : x;
});
const menu = () => {
    setTimeout(function() {
        sec1.style.display = 'flex';
        sec2.style.display = 'none';
        submit_btn.style.width = '30%';
        submit_btn.style.display = 'flex';
        submit_btn.style.height = "100px";
        location.reload();
    }, 700);

};
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e;
    showInstallPromotion();
});

let x = null;
let sec2 = document.querySelector("section:nth-child(2)");
let start_search = 0;
let inputword;
let main_view = 0;
let i = 0;
const writeword = () => {
    footer.style.display = 'flex';
    sec2.style.display = 'grid';
    let h1 = document.createElement('h1');
    let textp1 = document.createTextNode('    Your word: \n' + inputv.value);

    let span1 = document.createElement('p');
    let textp = document.createTextNode('  \n  Translation: ' + words[i].trans);
    let span2 = document.createElement('h2');
    let textp2 = document.createTextNode('  \n   Meaning: ' + words[i].mean);

    h1.appendChild(textp1);
    span1.appendChild(textp);
    span2.appendChild(textp2);
    sec2.appendChild(h1);
    sec2.appendChild(span1);
    sec2.appendChild(span2);
}

submit_btn.addEventListener('click', function() {
    if ((inputv.value).length > 0) {
        submit_btn.style.width = '0%';
        setTimeout(() => { submit_btn.style.display = 'none'; }, 1000);
        sec1.style.display = 'none';
        footer.style.display = 'none';
        start_search = 1;
        main_view = 0;
    } else;
    i = 0;
    do {
        var wartosc = inputv.value;
        inputv.value == words[i].word ? writeword() : x;
        i++;

    }
    while (i < words.length);

});
submit_btn.addEventListener('touch', function() {
    if ((inputv.value).length > 0) {
        submit_btn.style.width = '0%';
        setTimeout(() => { submit_btn.style.display = 'none'; }, 1000);
        sec1.style.display = 'none';
        footer.style.display = 'none';
        start_search = 1;
        main_view = 0;
    } else;
    i = 0;
    do {
        var wartosc = inputv.value;
        inputv.value == words[i].word ? writeword() : x;
        i++;

    }
    while (i < words.length);

});

function clear() {
    inputv = null;
}
let words = [{
        word: 'archaeology',
        trans: 'archeologia',
        mean: 'My friend is a professor of archaeology - Mój przyjaciel jest profesorem archeologii'

    },
    {
        word: 'architecture',
        trans: 'architektura',
        mean: 'He was amazed by the architecture of the city. - On był pod wrażeniem architektury tego miasta'
    },
    {
        word: 'art and design',
        trans: 'sztuka i wzornictwo',
        mean: 'I don\'t like modern art. - Nie lubię sztuki wspołczesnej '

    },
    {
        word: 'banking and finance',
        trans: 'bankowość i finanse',
        mean: 'I\'m starting a career in finance. - Zaczynam karierę w finansach'
    },
    {
        word: 'biotechnology',
        trans: 'biotechnologia',
        mean: 'Biotechnology offers a number of potential solutions to the current situation. - Biotechnologia oferuje wiele potencjalnych rozwiazań do obecnych sytuacji'
    },
    {
        word: 'choreography',
        trans: 'choreografia',
        mean: ' He has created over 200 choreographies. - Stworzył ponad 200 choreografi'
    },
    {
        word: 'economics',
        trans: 'ekonomia',
        mean: 'He is an economics student. - On jest studentem ekonomii'
    },
    {
        word: 'engineering',
        trans: 'inżynieria',
        mean: 'Jack is studying chemical engineering. - Jack studiuje inżynierię chemiczną'
    },
    {
        word: 'environmental studies',
        trans: 'ochrona środowiska',
        mean: ' Environmental studies is an important element of human life. - Ochrona środowiska jest ważnym elementem życia ludzkiego'
    },
    {
        word: 'filmmaking',
        trans: 'robienie filmów',
        mean: 'Filmmaking involves a number of  stages. - Filmowanie obejmuje kilka etapów '
    },
    {
        word: 'foreign philology',
        trans: 'filologia obca',
        mean: ' My friend studies foreign philology. - Mój przyjaciel studiuje filologię obcą'
    },
    {
        word: 'it',
        trans: 'informatyka',
        mean: ' We\'ll have to run it by the IT department. - Musimy sprawdzić to z działem informatycznym.  '
    },
    {
        word: 'information technolgy',
        trans: 'informatyka',
        mean: 'We\'ll have to run it by the information technology department. - Musimy sprawdzic to z działem informatycznym. '
    },
    {
        word: 'journalism',
        trans: 'dziennikarstwo',
        mean: 'Journalism in England has reached a high standard of excellence. Dziennikarstwo w Angli osiagneło wysoki poziom doskonałości'
    },
    {
        word: 'law',
        trans: 'prawo',
        mean: 'I don\'t want to break the law. - Nie chcę złamać prawa'
    },
    {
        word: 'marketing and management',
        trans: 'marketing i zarządzanie',
        mean: ''
    },
    {
        word: 'media studies',
        trans: 'medioznawstwo',
        mean: 'She is currently professor of film and media studies. -Obecnie jest profesorem filmu i medioznawstwa'
    },
    {
        word: 'medicine',
        trans: 'medycyna',
        mean: 'Chinese medicine delineates acupuncture points. - Medycyna chińska opiera się na punktach akupunkturowych.'
    },
    {
        word: 'political science',
        trans: 'politologia',
        mean: ' I teach political science. - Wykładam nauki polityczne '
    },
    {
        word: 'psychology',
        trans: 'psychologia',
        mean: ' I think psychology might be my major. - Psychologia chyba zostanie moim głównym przedmiotem'
    },
    {
        word: 'sociology',
        trans: 'socjologia',
        mean: ' He \'s got a degree in sociology. -  On posiada stopień naukowy w dziedzinie socjologii. '
    },
    {
        word: 'veterinary medicine',
        trans: 'weterynaria',
        mean: ' She studies veterinary medicine. - Ona studiuje weterynarie'
    },
    {
        word: 'attend school',
        trans: 'uczęszczać do szkoły',
        mean: 'Children have to attend school from the age of 7. - Dzieci muszą uczęszczać do szkoły od 7 roku życia.'
    },
    {
        word: 'catch up on sth',
        trans: 'nadrabiać coś',
        mean: 'I have to catch up on polish lessons. - Muszę nadrobić lekcje z polskiego.'
    },
    {
        word: 'coursework',
        trans: 'projekt',
        mean: 'I must work on coursework. - Muszę popracować nad projektem.'
    },
    {
        word: 'cram',
        trans: 'wkuwać',
        mean: 'I had to cram for a test. - Musiałem wkuwać do testu.'
    },
    {
        word: 'fail an exam',
        trans: 'oblać egzamin',
        mean: 'Tom failed an exam. - Tom nie zaliczył testu.'
    },
    {
        word: 'get a good point average',
        trans: 'miec dobrą średnią',
        mean: 'Lily got a good point average last year. - W zeszłym roku Lily miała dobrą średnią.'
    },
    {
        word: 'get a school certificate',
        trans: 'otrzymać świadectwo szkolne',
        mean: 'In June I\'ll get a school certificate. - W czerwcu otrzymam świadectwo szkolne.'
    },
    {
        word: 'get out of sth',
        trans: 'unikac czegos',
        mean: 'Help me to get out of a punishment. - Pomóż mi uniknąć kary.'
    },
    {
        word: 'grade the students',
        trans: 'oceniac uczniow',
        mean: 'Teachers must grade the students. - Nauczyciele muszą oceniać uczniów.'
    },
    {
        word: 'graduate from school',
        trans: 'ukonczyć szkołę',
        mean: 'In June I\'ll graduate from school. - W czerwcu ukończę szkołę.'
    },
    {
        word: 'hand sth in',
        trans: 'oddawać',
        mean: 'I handed in my paper and left the room. -  Oddałem swoją pracę i wyszedłem z sali.'
    },
    {
        word: 'learn sth by heart',
        trans: 'uczyć sie czegoś na pamięć',
        mean: 'You should simply learn it by heart. - Powinieneś po prostu nauczyć się tego na pamięć.'
    },
    {
        word: 'look sth up',
        trans: 'sprawdzać coś',
        mean: 'I\'ll look up his number in the phone book. - Sprawdzę jeo numer w kontaktach'
    },
    {
        word: 'make mistakes',
        trans: 'popełniać błędy',
        mean: 'People makes mistakes. - Ludzie popełniają błędy.'
    },
    {
        word: 'memorise',
        trans: 'zapamiętywać',
        mean: 'I must memorise important dates in polish history.'
    },
    {
        word: 'mock exam',
        trans: 'egzamin próbny',
        mean: 'I hate taking a mock exams. - Nie znosze egzaminów próbnych.'
    },
    {
        word: 'pass an exam',
        trans: 'zdać egzamin',
        mean: 'She finally passed an exam. - Wreszcie zdała egzamin.'
    },
    {
        word: 'pick sth up',
        trans: 'podchwycić coś, wychwycić',
        mean: 'I couldn\'t pick up my favourite radio station. - Nie mogłam złapać mojej ulubionej radiostacji.'
    },
    {
        word: 'repeat the year',
        trans: 'powtarzac rok',
        mean: 'If you don\'t pass an exam you will repeat the year. - Jeśli nie zdasz egzaminu, będziesz musiał powtórzyć rok.'
    },
    {
        word: 'resit an exam',
        trans: 'zdawać ponownie egzamin',
        mean: 'Tomorrow I resit and exam. - Jutro zdaję poprawkę z egzaminu.'
    },
    {
        word: 'revise for an exam',
        trans: 'uczyć sie do egzaminu',
        mean: 'We have to revise for an exam. - Musimy przygotować się na egzamin.'
    },
    {
        word: 'take an exam',
        trans: 'zdawać egzamin',
        mean: 'Tomorrow I take an exam. - jutro zdaję egzamin.'
    },
    {
        word: 'take sth up',
        trans: 'zajać się czyms',
        mean: 'I am not going to take up much of your time. - Nie zajmę państwu wiele czasu.'
    },
    {
        word: 'wear a school uniform',
        trans: 'nosić mundurek szkolny',
        mean: 'I have to wear a school uniform. - Muszę nosić mundurek szkolny. :C'
    },
    {
        word: 'come throught',
        trans: 'docierać',
        mean: 'It came through to him. - To dotarło do niego.'
    },
    {
        word: 'drop out of school',
        trans: 'rzucac szkołe',
        mean: 'he dropped out of school to work  with his father. - Porzucił szkołę, aby pracowac ze swoim ojcem.'
    },
    {
        word: 'get a grade a',
        trans: 'dostać piątke',
        mean: 'I get a grade A at chemistry lesson. - Dostałem piątkę podczas lekcji chemii.'
    },
    {
        word: 'get down to sth',
        trans: 'zabrać się za coś',
        mean: 'I finally got down to work. - Ostatecznie zabrałem się do pracy.'
    },
    {
        word: 'get one\'s tongue round sth',
        trans: 'wymowić coś',
        mean: 'I get one\'s tongue round german word.'
    },
    {
        word: 'get through sth',
        trans: 'uporać się z czyms',
        mean: 'I got through about half the first page. - Przebrnąłem przez około połowę pierwszej strony.'
    },
    {
        word: 'grade down',
        trans: 'obniżać ocenę',
        mean: 'Teachers in my school don\'t grade down. - Nauczyciele w mojej szkole nie obniżają ocen.'
    },
    {
        word: 'hobby horse',
        trans: 'zainteresowanie',
        mean: 'My hobby horse is IT. - Moim zaintersowaniem jest informatyka'
    },
    {
        word: 'improve on sth',
        trans: 'udoskonalać',
        mean: 'The restaurant has to improve on the food. - Restauracja musi podnieść jakość jedzenia.'
    },
    {
        word: 'major in sth',
        trans: 'specjalizować się w czymś',
        mean: 'Tom majors in biology. - Tom spejcalizuje się w biologii.'
    },
    {
        word: 'mark absent',
        trans: 'wstwiać nieobecność',
        mean: 'My teacher marked absent. - Mój nauczyciel wstawił nieobecność.'
    },
    {
        word: 'mark tests',
        trans: 'sprawdzać testy',
        mean: 'My teacher marked tests. - Mój nauczyciel sprawdził testy.'
    },
    {
        word: 'pass an exam',
        trans: 'zdać egzamin',
        mean: 'Did you pass the exam? -Czy zdałeś egzamin? '
    },
    {
        word: 'pass sb',
        trans: 'przepuscić kogoś na egzaminie',
        mean: 'He knew nothing but I  passed him anyway.  - On nic nie wiedział, ale i tak go przepuściłem na egzaminie.'
    },
    {
        word: 'scrape through sth',
        trans: 'przebrnąć przez cos',
        mean: 'You have to scrape through it. - Musisz przebrnąć przez to.'
    },
    {
        word: 'sail through sth',
        trans: 'poradzić sobie z czyms bez trudu',
        mean: 'Brad sail through exercises. - Brad poradził sobie z ćwiczeniami bez trudu.'
    },
    {
        word: 'swot up',
        trans: 'wkuwać',
        mean: 'I spent all last night swotting up on French - Spędziłem całą noc nad wkuwaniem francuskiego'
    },
    {
        word: 'top marks',
        trans: 'najlepsze oceny',
        mean: 'Tom always gets top marks. - Tom zawsze dostaje najlepsze oceny.'
    },
    {
        word: 'careers adviser',
        trans: 'doradca zawodowy',
        mean: 'His mother is a career adviser in New York. - Jego matka jest doradcą zawodowym w NY.'
    },
    {
        word: 'caretaker',
        trans: 'woźny',
        mean: 'The caretaker told us nobody came in or out. - Woźny powiedział nam, że nikt nie wchodził ani nie wychodził.'
    },
    {
        word: 'form tutor',
        trans: 'wychowawca',
        mean: 'My form master  had no problem with my decision. - Mój wychowawca nie ma problemów z moją decyzją :))'
    },
    {
        word: 'head girls',
        trans: 'przewodnicząca',
        mean: 'She was head girl of the school in 1956. - Ona była przewodniczącą klasy w 1956 roku.'
    },
    {
        word: 'head teacher',
        trans: 'dyrektor',
        mean: 'The head teacher called his parents. - Dyrektor zadzwonił do jego rodziców.'
    },
    {
        word: 'lecturer',
        trans: 'wykładowca',
        mean: 'A new lecturer arrived at the college today. - Nowy wykładowca przyjechał dzisiaj do college\'u. '
    },
    {
        word: 'librarian',
        trans: 'bibliotekarz',
        mean: 'Giles was the librarian at my high school. - Giles był bibliotekarzem w moim liceum.'
    },
    {
        word: 'staff memeber',
        trans: 'członek grona pedagogicznego, personel',
        mean: 'Their staff  is always very helpful. - Ich personel jest zawsze bardzo pomocny.'
    },
    {
        word: 'student council representative',
        trans: 'przedstawicielka rady uczniów/ samorządu uczniowskiego',
        mean: 'Taylor is student council representative. - Taylor jest przedtawicielką samorządu uczniowskiego. '
    },
    {
        word: 'teacher',
        trans: 'nauczyciel',
        mean: 'She works as a teacher in a primary school. -  Ona pracuje jako nauczyciel w szkole podstawowej.'
    },
    {
        word: 'canteen',
        trans: 'stołówka',
        mean: 'We eat lunch in the school canteen. - Jadamy lunch w szkolnej stołówce. '
    },
    {
        word: 'classroom',
        trans: 'sala lekcyjna',
        mean: 'There aren\' t enough classrooms in our school. - W naszej szkole jest za mało sal lekcyjnych.'
    },
    {
        word: '',
        trans: '',
        mean: ''
    },
    {
        word: 'corridor',
        trans: 'korytarz',
        mean: 'The school corridors are full of smiling children. -  Korytarze szkolne są pełne uśmiechniętych dzieci.'
    },
    {
        word: 'gym',
        trans: 'sala gimnastyczna',
        mean: 'They were playing basketball in the gym. - Oni grali w koszykówkę na sali gimnastycznej. '
    },
    {
        word: 'lab',
        trans: 'pracownia fizyczno-chemiczna, laboratorium ',
        mean: 'I have sent the blood sample to the lab. - Wysłałem próbkę krwi do laboratorium. '
    },
    {
        word: 'locker room',
        trans: 'szatnia',
        mean: 'I leave my things in the changing room when I go swimming. - Zostawiam swoje rzeczy w szatni, kiedy idę pływać. '
    },
    {
        word: 'playing field',
        trans: 'boisko',
        mean: 'There is still one playing field for the school to use. - Tutaj jest nadal tylko jedno boisko dla szkoły'
    },
    {
        word: 'secretary\'s office',
        trans: 'sekretariat ',
        mean: 'Secretary\'s office works all 24 hours without any break. - Sekretariat czynny jest 24 godziny, bez żadnych przerw. '
    },
    {
        word: 'staffroom',
        trans: 'pokój nauczycielski',
        mean: 'The staff room was moved to the ground floor. - Pokój nauczycielski został przeniesoiny na parter.'
    },
    {
        word: 'blackboard',
        trans: 'tablica',
        mean: 'Would you clean the blackboard? - Czy możesz zmazać tablicę? '
    },
    {
        word: 'chalk',
        trans: 'kreda',
        mean: 'The student went to get some chalk. - Uczeń poszedł przynieść trochę kredy.) '
    },
    {
        word: 'compasses',
        trans: 'cyrkiel',
        mean: 'I need a compass. - Potrzebuję cyrkla'
    },
    {
        word: 'correction tape',
        trans: 'korektor',
        mean: 'Tim has correction tape. - Tim ma korektor.'
    },
    {
        word: 'felt-tip pen',
        trans: 'mazak',
        mean: 'Use felt-tip pen to color picture. - Użyj mazaka aby pokolorować obrazek.'
    },
    {
        word: 'folder',
        trans: 'teczka',
        mean: 'He keeps all the bils in a red folder. -  On trzyma wszystkie rachunki w czerwonej teczce.'
    },
    {
        word: 'highlighter',
        trans: 'mazak, zakreślacz',
        mean: 'Use a highlighter to mark the most important sentences. -  Użyj zakreślacza, żeby zaznaczyć najważniejsze zdania.'
    },
    {
        word: 'paper clips',
        trans: 'spinacz biurowy',
        mean: 'Attach it with a paper clip. - Przymocuj to spinaczem do papieru. '
    },
    {
        word: 'pencil case',
        trans: 'piórnik',
        mean: 'He keeps the ruler in his pencil case. - On trzyma linijkę w swoim piórniku. '
    },
    {
        word: 'pencil sharpener',
        trans: 'temperówka',
        mean: 'Have you got a pencil sharpener? My pencil is blunt. - Masz temperówkę? Mój ołówek jest tępy.'
    },
    {
        word: 'rubber',
        trans: 'gumka do ścierania ',
        mean: 'Many pencils have an eraser on one end. -  Wiele ołówków ma na jednym końcu gumkę do mazania.'
    },
    {
        word: 'ruler',
        trans: 'linijka',
        mean: 'Take a ruler and measure it. - Weź linijkę i zmierz to.'
    },
    {
        word: 'set square',
        trans: 'ekierka',
        mean: 'He used a set square to draw a right angle.  - On użył ekierki, żeby narysować kąt prosty.'
    },
    {
        word: 'stapler',
        trans: 'zszywacz',
        mean: 'I need stalper for my documents. - Potrzebuję zszywacza do moich dokumentów.'
    },
    {
        word: 'whiteboard',
        trans: ' tablica suchościerlana',
        mean: 'The school doesn\' t have moneyfor new whiteboards. - Szkoła nie ma pieniędzy na nowe tablice suchościeralne.'
    },
    {
        word: 'be a school leaver ',
        trans: 'być absolwentem',
        mean: 'I want to be a school leaver. - Chciałbym być absolwentem szkoły.'
    },
    {
        word: 'be absent from school',
        trans: 'być nieobecnym w szkole',
        mean: ' Tommy is absent from school. - Tommy jest nieobecny w szkole.'
    },
    {
        word: 'be present at school',
        trans: 'być obecnym w szkole',
        mean: 'Tamara is\'t present at school. - Tamara jest nieobecna w szkole.'
    },
    {
        word: 'class',
        trans: 'klasa',
        mean: 'nly half of the class came to school today. - Tylko połowa klasy przyszła dzisiaj do szkoły.  '
    },
    {
        word: 'concentrate on sth',
        trans: 'koncentrować się na czymś',
        mean: 'I can\' t concentrate on anything. - Nie mogę się na niczym skoncentrować.'
    },
    {
        word: 'do your studying',
        trans: 'uczyć się',
        mean: 'You do your studing at afternoon. - Uczysz się popołudniu'
    },
    {
        word: 'end of term',
        trans: 'koniec semestru',
        mean: 'At the end of term We make party. - Na koniec semestru organizujemy imprezę.'
    },
    {
        word: 'get into trouble',
        trans: 'wpaść w kłopoty',
        mean: 'She got into trouble, so I wanted to help her. - Wpadłą w kłopoty, więc chciałem jej pomóc.'
    },
    {
        word: 'get top marks',
        trans: 'dostawać najlepsze oceny',
        mean: 'Tom always gets top marks. - Tom zawsze dostaje najlepsze oceny.'
    },
    {
        word: 'give a talk',
        trans: 'wygłaszać prezentację',
        mean: 'I heard him give a talk a few months ago. - Słyszałem jak on wygłaszał prezentację kilka miesięcy temu.'
    },
    {
        word: 'learn',
        trans: 'uczyć się',
        mean: ' You cannot learn everything at once. - Nie możesz się uczyć wszystkiego naraz. '
    },
    {
        word: 'packed lunch',
        trans: 'drugie śniadanie',
        mean: ' I always take my packed lunch from home. - Zawsze biorę moje drugie śniadanie z domu. '
    },
    {
        word: 'pass with flying colours',
        trans: 'zdać w pięknym stylu',
        mean: 'I think I can pass with flying colours. - Uważam, że mogę zdać w pięknym stylu.'
    },
    {
        word: 'pe kit',
        trans: 'strój na wf',
        mean: 'Provide the necessary PE kit. - Zapewnij niezbędny stroj na wf'
    },
    {
        word: 'pop quiz',
        trans: 'kartkówka',
        mean: 'Peter had left lesson in the middle of a pop quiz . - Peter opuścił lekcje w połowie kartkówki.'
    },
    {
        word: 'school routine',
        trans: 'szkolna rutyna',
        mean: 'William soon became used to the school routine. - William niedługo przyzwyczaji się do szkolnej rutyny.'
    },
    {
        word: 'school year',
        trans: 'rok szkolny',
        mean: 'School year lasts 10 months. - Rok szkolny trwa 10 miesięcy.'
    },
    {
        word: 'sick note',
        trans: 'zwolnienie z powodu choroby',
        mean: 'Do you need a sick note? - Czy potrzebujesz zwolnienia lekarskiego?'
    },
    {
        word: 'strict',
        trans: 'restrykcyjny, surowy',
        mean: 'My Polish teacher is strict. - Mój nauczyciel polskiego jest wymagający.'
    },
    {
        word: 'study',
        trans: 'uczyć się, studiować',
        mean: 'I have to get down to study. - Muszę się wziąć za naukę.'
    },
    {
        word: 'study from coursebooks',
        trans: 'uczyć się z podręczników',
        mean: 'I usually study from coursebooks. - Zazwyczaj uczę sę z podręczników.'
    },
    {
        word: 'take an exam',
        trans: 'podchodzić do egzaminu',
        mean: 'I take an exam three times in row. - Podchodze do egzaminu trzy razy z rzędu.'
    },
    {
        word: 'take notes',
        trans: 'robić notatki',
        mean: 'I take notes on iPad. - Robię notatki na iPadzie.'
    },
    {
        word: 'take the register',
        trans: 'sprawdzać obecność',
        mean: 'Did she take the register? - Czy ona sprawdzała obecność?'
    },
    {
        word: 'test',
        trans: 'klasówka',
        mean: 'I don\'t like tests. - Nie lubię klasówek.'
    },
    {
        word: 'work hard',
        trans: 'ciężko pracować',
        mean: 'I work really hard. - Pracuję naprawdę ciężko.'
    },
    {
        word: 'work on a project',
        trans: 'pracować nad projektem',
        mean: 'I work on a projekt with my friend. - Pracuję nad projektem z moimi przyjaciółmi.'
    },
    {
        word: 'write an essay',
        trans: 'pisać esej',
        mean: 'Teacher said that we had to write an essay. - Nauczyciel powiedział, że musimy napisać esej.'
    },
    {
        word: 'answer back',
        trans: 'odpowiadać niegrzecznie ',
        mean: 'Why you answered back? - Dlaczego odpowiedziałeś niegrzecznie?'
    },
    {
        word: 'cheat',
        trans: 'ściągać, oszukiwać',
        mean: 'I have never cheated. - Nigdy nie ściągałem'
    },
    {
        word: 'cut classes',
        trans: 'opuszczać lekcje, wagarować',
        mean: 'I have never cut classes. - Nigdy nie wagarowałem'
    },
    {
        word: 'disrupt lessons',
        trans: 'przeszkadzać na lekcjach',
        mean: 'Someone is disrupting right now. - Ktoś przeszkadza teraz.'
    },
    {
        word: 'do one\'s homework',
        trans: 'odrabiać pracę domową',
        mean: 'Jimmy did her homework. - Jimmy zrobił jej pracę domową.'
    },
    {
        word: 'pay attention in class',
        trans: 'uważać na lekcji',
        mean: 'Normani pays attention in class. - Normani uważa na lekcji.'
    },
    {
        word: 'pick things up quickly',
        trans: 'szybko chłonąć wiedzę',
        mean: 'He picks things up quickly as sponge. - On szybko chłonie wiedzę jak sponge.'
    },
    {
        word: 'play truant',
        trans: 'wagarować',
        mean: 'Let\'s play truant on Monday. - Wagarujmy w poniedziałek.'
    },
    {
        word: 'stick to deadlines',
        trans: 'przestrzegać terminów',
        mean: 'David never sicks to deadlines. - David nigdy nie przestrzega terminów.'
    },
    {
        word: 'use cribs',
        trans: 'korzystać ze ściąg',
        mean: 'I have never used cribs. - Nigdy nie ściągałem!'
    },
    {
        word: 'attend a course',
        trans: 'uczęszczać na kurs',
        mean: 'Twice a week I attend a course. - Dwa razy w tygodniu uczęszczam na kurs.'
    },
    {
        word: 'exchange programme',
        trans: 'wymiana międzyuczelniana/międzyszkolna',
        mean: 'I join to exchange programme. - Dołączyłem do programu wymiany międzyszkolnej.'
    },
    {
        word: 'extracurricular',
        trans: 'pozalekcyjny, ponadprogramowy',
        mean: 'This task is extracurricular. - To zadanie jest dodatkowe.'
    },
    {
        word: 'join',
        trans: 'dołączyć do',
        mean: 'Can I join? - Czy mogę dołączyć?'
    },
    {
        word: 'prepare for exams',
        trans: 'przygotować się do egzaminów',
        mean: 'I need to prepare for exam. - Muszę przygotować się na egzamin.'
    },
    {
        word: 'private tuition',
        trans: 'prywatne lekcje, korepetycje',
        mean: 'There is a large number of teachers giving private tuition. - Jest wielu nauczycieli dających korepetycje.'
    },
    {
        word: 'school trip',
        trans: 'wycieczka szkolna',
        mean: 'The teacher took the children on an outing to the zoo. - Nauczyciel zabrał dzieci na wycieczkę do zoo. '
    },
    {
        word: 'society',
        trans: 'towarzystwo, stowarzyszenie',
        mean: 'The society of national history is organizing a banquet. - Towarzystwo historii narodowej organizuje bankiet. '
    },
    {
        word: 'timetable',
        trans: 'rozkład, plan',
        mean: 'The timetable  is very busy this season. -  Kalendarium wydarzeń  jest pełne w tym sezonie.'
    },
    {
        word: 'voluntary charity work',
        trans: 'wolontariat',
        mean: 'She did some voluntary work for the foundation. - Ona popracowała nieodpłatnie dla fundacji.)'
    },
    {
        word: 'boarding school',
        trans: 'szkoła z internatem',
        mean: 'I went to boarding school. - Chodziłem do szkoły z internatem.'
    },
    {
        word: 'college',
        trans: 'kolegium, uniwersytet',
        mean: 'He\'s studying English at college - On studiuje angielski na uniwersytecie. '
    },
    {
        word: 'extramural school',
        trans: 'szkoła zaoczna',
        mean: 'I have never heard about extramural school. - Nigdy nie słyszałem o szkole zaocznej. '
    },
    {
        word: 'kindergarten',
        trans: 'przedszkole',
        mean: 'I have a daughter in kindergarten. -  Mam córkę w przedszkolu.'
    },
    {
        word: 'night school',
        trans: 'szkoła wieczorowa',
        mean: 'I went to night school. - Chodziłem do szkoły wieczorowej.'
    },
    {
        word: 'nursery',
        trans: 'żłobek',
        mean: 'Before work, she leaves her children at the nursery . Przed pracą zostawia swoje dzieci w żłobku.'
    },
    {
        word: 'primary school',
        trans: 'szkoła podstawowa',
        mean: 'We were at the same primary school in London. - Chodziliśmy do tej samej podstawówki w Londynie.'
    },
    {
        word: 'public school',
        trans: 'szkoła prywatna, opłacana przez rodziców',
        mean: 'The building was used as a public school. - Ten budynek był używany jako szkoła publiczna.'
    },
    {
        word: 'secondary school',
        trans: 'szkoła średnia',
        mean: 'He never even finished high school - On nigdy nawet nie ukończył szkoły średniej.'
    },
    {
        word: 'state school',
        trans: 'szkoła państwowa',
        mean: 'I went to a state school. -  Chodziłem do szkoły państwowej.'
    },
    {
        word: 'university',
        trans: 'uniwersytet',
        mean: 'I graduated from the University of Manchester - Ukończyłem Uniwersytet w Manchesterze.'
    },
    {
        word: 'vocational school',
        trans: 'szkoła zawodowa',
        mean: 'At this time it was the only vocational school in the city for female students. - Była tylko jedna zawodówka w mieście dla kobiet.'
    },
    {
        word: 'apply for a grant',
        trans: 'ubiegać się o stypendium',
        mean: 'Did you apply for a grant? - Ubiegałeś się o stypendium?'
    },
    {
        word: 'attend a tutorial',
        trans: 'uczęszczać na seminarium',
        mean: 'Two day ago I attended a tutorial. - Dwa dni temu byłem na seminarium.'
    },
    {
        word: 'do a degree course',
        trans: 'iść na studia',
        mean: 'I will do a degree course. - Pójdę na studia.'
    },
    {
        word: 'do background reading',
        trans: 'czytać lekturę uzupełniającą',
        mean: 'I\' ve never done background reading. - Nigdy nie przeczytałem lektury uzupełniającej. '
    },
    {
        word: 'entry requirements',
        trans: 'wymagania wstępne',
        mean: 'There\'s no entry requirements. - Brak wymagań wstępnych.'
    },
    {
        word: 'pay tuition fees',
        trans: 'opłacać czesne',
        mean: 'My parents pays tuition fees. - Moi rodzice opłacają czesne.'
    },
    {
        word: 'submit an application form',
        trans: 'złożyć aplikacje/podanie',
        mean: 'I submited an appliction form. - Złożyłem podanie.'
    },
    {
        word: 'write one\'s thesis',
        trans: 'pisać pracę dyplomową',
        mean: ' He wrote his thesis on management of the American companies. - Napisał pracę dyplomową o zarządzaniu amerykańskimi firmami'
    },
    {
        word: 'be down to sth',
        trans: 'mieć swoją przyczynę w',
        mean: 'It downs to weather. - To zależało od pogody.'
    },
    {
        word: 'class with sth',
        trans: 'kolidować z czymś',
        mean: 'My exam classes with yoga lessons. '
    },
    {
        word: 'help sb out',
        trans: 'pomóc komuś',
        mean: 'Can I help you out? - Czy mogę ci pomóc?'
    },
    {
        word: 'pick sb up',
        trans: 'odbierać kogoś',
        mean: ' Could you pick me up from the station? -  Czy mógłbyś odebrać mnie ze stacji?'
    },
    {
        word: 'take sb aside',
        trans: 'wziąć kogoś na stronę ',
        mean: 'Can I take Natalie aside? - Czy mogę wziąć Natalię na stronę?pikc up'
    },
    {
        word: 'blow sb\'s own trumpet',
        trans: 'przechwalać się',
        mean: 'He blows his own trumpet. - On się przechwala.'
    },
    {
        word: 'get a lot of bad press',
        trans: 'mieć złą opinię',
        mean: 'He get a lot of bad press. - On ma złą opinię.'
    },
    {
        word: 'give up at first hurdle',
        trans: 'poddawać się po pierwszym napotkanym problemie',
        mean: 'Don\'t give up at first hurdle. - Nie poddawaj się po pierwszej przeszkodzie.s'
    },
    {
        word: 'go for sth',
        trans: 'zawalczyć o coś, zdecydować się na coś',
        mean: ' If you really want the job, go for it. - Jeśli naprawdę chcesz tej pracy, postaraj się o nią zawalczyć.'
    },
    {
        word: 'go on to do sth',
        trans: 'przejść do zrobienia czegoś',
        mean: 'Let\'s go on to do a game. - Przejdźmy do zrobienia gry.'
    },
    {
        word: 'invest heavily in sth',
        trans: 'dużo inwestować w coś',
        mean: 'I invest heavily in myself and my hobbies. - Inwestuję w siebie i moje zaintersowania.'
    },
    {
        word: 'play around',
        trans: 'wygłupiać się',
        mean: 'Do not play about, Tom! Be serious.- Nie wygłupiaj się Tom! Bądź poważny.'
    },
    {
        word: 'read people',
        trans: 'rozumieć ludzi',
        mean: 'I\' m supposed to be good at reading people. - Powinienem być dobry w rozumowaniu ludzi.'
    },
    {
        word: 'reap the rewards',
        trans: 'zdobywać nagrody',
        mean: 'SHe reaps the reward every year. - Ona zdobywa nagrody każdego roku.'
    },
    {
        word: 'brainstorm ideas',
        trans: 'przeprowadzać burzę mózgów',
        mean: 'Let\'s make brainstrom ideas. - Przeprowadźmy burzę mózgów.'
    },
    {
        word: 'collaborate on a presentation',
        trans: 'wspólnie przygotować prezentację',
        mean: 'I hate collaborate on a presentation. - Nienawidzę wspólnie przygotowywac prezentacji.'
    },
    {
        word: 'develop a skill',
        trans: 'rozwijac umiejętności',
        mean: 'He develops IT skills. - On rozwija umiejętności informatyczne.'
    },
    {
        word: 'make a successful career',
        trans: 'zrobić karierę',
        mean: 'He made a successful career. - On zrobił karierę.'
    },
    {
        word: 'prepare for future life',
        trans: 'przygotować się na przyszłość',
        mean: 'I\'am not prepared for future life. - Nie jestem przygotowany na przyszłość'
    },
    {
        word: 'understand other points of view',
        trans: 'rozumieć inne punkty widzenia',
        mean: 'Why you don\'t understand other points of view? - Dlaczego nie rozumiesz innych punktów widzenia?'
    },
    {
        word: 'work out solutions to problems',
        trans: 'rozwiązywać problemy',
        mean: 'We worked out solutions to problems. That\'s amazing. - Rozwiązaliśmy problemy. To niesamowite.'
    },
    {
        word: 'anxious',
        trans: 'zaniepokojony',
        mean: 'My mother is always anxious about me. - Moja mama zawsze się o mnie niepokoi'
    },
    {
        word: 'be a disappointment to sb',
        trans: 'sprawić komuś zawód',
        mean: 'I felt disappointment at this movie. - Czułem rozczarowanie tym filmem.'
    },
    {
        word: 'consuming passion',
        trans: 'pochłaniająca pasja',
        mean: 'She loved to fly, it is a consuming passion. - Ona uwielbia latać, jest to pochłaniająca pasja.'
    },
    {
        word: 'distracted',
        trans: 'nieobecny, zamyślony',
        mean: ' She keeps distracting me.- Ona ciągle mnie rozprasza.'
    },
    {
        word: 'interpersonal skills',
        trans: 'zdolności interpersonalne',
        mean: 'Training in interpersonal skills is important. - Szkolenie kompetencji społecznych jest ważne. '
    },
    {
        word: 'priceless',
        trans: 'becenny',
        mean: 'This ring is priceless. Ten pierścionek jest bezcenny.'
    },
    {
        word: 'relevance',
        trans: 'związek',
        mean: 'I cannot see that it has any relevancy. - Nie  widzę żadnego związku.'
    },
    {
        word: 'resourceful',
        trans: 'zaradny',
        mean: 'My daughter is more resourceful than you might think. - Moja córka jest bardziej zaradna niż byś pomyślał.'
    },
    {
        word: 'classic',
        trans: 'typowy, klasyczny',
        mean: 'He drives a classic, Sebix car - BMW. - On jeżdzi typowym autem sebixów '
    },
    {
        word: 'classical',
        trans: 'tradycyjny, klasyczny',
        mean: 'He plays classical guitar - On gra na gitarze klasycznej.'
    },
    {
        word: 'comprehensible',
        trans: 'zrozumiały',
        mean: 'I had to believe that this was a comprehensible thing. - Musiałem wierzyć, że to była zrozumiana rzecz.'
    },
    {
        word: 'comprehensive',
        trans: 'wszechstronny, wyczerpujący',
        mean: 'He lent me a comprehensive book on Italian cuisine. - Pożyczył mi obszerną książkę o kuchnii włoskiej.'
    },
    {
        word: 'economics',
        trans: 'gospodarczy, ekonomiczny',
        mean: 'He is an economics student. - On jest studentem ekonomii.'
    },
    {
        word: 'economical',
        trans: 'oszczędny',
        mean: 'Maluch is more economical than Porsche - Maluch jes bardziej oszczędny niż Porsche.'
    },
    {
        word: 'historic',
        trans: 'historyczny',
        mean: 'This piece of art on the wall is historic. -  To dzieło sztuki na ścianie jest historyczne.'
    },
    {
        word: 'historical',
        trans: 'historyczny',
        mean: ' I discovered an interesting historical fact today. - Poznałem dziś ciekawy historyczny fakt. '
    },
    {
        word: 'industrial',
        trans: 'przemysłowy',
        mean: 'He lives in the industrial district of our town. - On mieszka w przemysłowej dzielnicy naszego miasta.'
    },
    {
        word: 'industrious',
        trans: 'pracowity',
        mean: 'He was industrious man, so he developed his own company. - Był pracowitym człowiekiem, więc stworzył swoją firmę.'
    },
    {
        word: 'physician',
        trans: 'lekarz',
        mean: 'You are ill. I\'ll take you to a physician.  Jesteś chory. Zabiorę cię do lekarza.'
    },
    {
        word: 'physicist',
        trans: 'fizyk',
        mean: 'Leonard grew up to be an experimental physicist. - Leonard wyrósł na fizyka eksperymentalnego.'
    },
    {
        word: 'adrenaline junkie',
        trans: 'osoba lubiąca ryzykowne zachowania, sporty itp.',
        mean: 'He loves adrenaline junkie. - On uwielbia ryzykowne zachowania.'
    },
    {
        word: 'bookworm',
        trans: 'mól książkowy',
        mean: 'He reads two books every week, he is a real bookworm. - On czyta dwie książki tygodniowo  jest prawdziwym molem książkowym.'
    },
    {
        word: 'chess fancier',
        trans: 'miłośnik szachów',
        mean: 'She started to play chess at the age of 9. She is a chess fancier. - Zaczęła gra w szachy w wieku 9 lat. Jest ona miłośniczą szachów.'
    },
    {
        word: 'cinema fan',
        trans: 'miłośnik kina',
        mean: 'He is a cinema fan since 2001. - Jest fanem kina od 2001 roku'
    },
    {
        word: 'eco freak',
        trans: 'osoba fanatycznie dbająca o środowisko',
        mean: 'You are a eco freak. - Jesteś "ekofanatykiem"'
    },
    {
        word: 'shutterbug',
        trans: 'miłośnik fotografii',
        mean: 'If you\'re a serious shutterbug, you should buy a digital camera. - Jeśli jesteś miłośnikiem fotografii, to powinieneś zakupić kamerę cyfrową'
    },
    {
        word: 'technophile',
        trans: 'miłośnik nowych technologii',
        mean: 'You\'re a technophile like me. - Jesteś miłośnikiem technologii jak ja'
    }
];