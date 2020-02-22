let submit_btn = document.querySelector("#submit_dictionary");
let inputv = document.querySelector(".jsword");
let sec1 = document.querySelector("section:nth-child(1)");
let footer = document.querySelector("footer");

let x = null;
let sec2 = document.querySelector("section:nth-child(2)");
let start_search = 0;

let words = [{
        word: 'apple',
        trans: 'JABŁKO',
        mean: 'OWOC'

    },
    {
        word: 'banana',
        trans: 'BANAN',
        mean: 'OWOC'
    },
    {
        word: 'pineapple',
        trans: 'JABŁKO',
        mean: 'OWOC'

    },
];
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
    sec1.style.display = 'flex';
    sec2.style.display = 'none';
    submit_btn.style.width = '30%';
    submit_btn.style.display = 'flex';
    submit_btn.style.height = "100px";
    location.reload();
};
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e;
    showInstallPromotion();
});