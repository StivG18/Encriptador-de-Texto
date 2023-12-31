const input = document.getElementById("input-text");
const output = document.getElementById("output-text");
const button = document.querySelectorAll("button");
const btnicon = document.getElementById('btnicon');
const iconImage = document.getElementById('iconImage');
const modeText = document.getElementById('modeText');
const dollImage = document.getElementById('dollImage');

btnicon.addEventListener('click', () => {
    if (iconImage.src.endsWith('fondoNight.png')) {
        iconImage.src = 'img/fondoDay.png';
        dollImage.src = 'img/buscando.png'; 
    } else {
        iconImage.src = 'img/fondoNight.png';
        dollImage.src = 'img/buscando2.png';
    }
    document.body.classList.toggle('dark');
});

function onlyContainsLowercase(str) {
    return /^[a-z0-9/ /ñ:;,.¿?¡!]+$/.test(str);
}

function encrypt() {
    const chars = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"        
    }

    if (onlyContainsLowercase(input.value)) {
        let encriptedText = input.value.replace(/[aeiou]/g, c => chars[c]);
        document.getElementById("not-found").style.display = "none";
        document.getElementById("result").style.display = "block";
        output.textContent = encriptedText;
    } else {
        alert("Recuerda, sólo letras minúsculas y sin acentos");
    }

    document.getElementById("paste").style.display = "none";
}

function encryptDark() {
    const chars = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"        
    }

    if (onlyContainsLowercase(input.value)) {
        let encriptedText = input.value.replace(/[aeiou]/g, c => chars[c]);
        document.getElementById("not-found").style.display = "none";
        document.getElementById("result").style.display = "block";
        output.textContent = encriptedText;
    } else {
        alert("Recuerda, sólo letras minúsculas y sin acentos");
    }

    document.getElementById("paste").style.display = "none";
}

function desencrypt() {
    const chars = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    }

    if (onlyContainsLowercase(input.value)) {
        let desencriptedText = input.value.replace(/ai|enter|imes|ober|ufat/g, c => chars[c]);
        document.getElementById("not-found").style.display = "none";
        document.getElementById("result").style.display = "block";
        output.textContent = desencriptedText;
    } else {
        alert("Recuerda, sólo letras minúsculas y sin acentos");
    }

    document.getElementById("paste").style.display = "none";
}

function desencryptDark() {
    const chars = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    }

    if (onlyContainsLowercase(input.value)) {
        let desencriptedText = input.value.replace(/ai|enter|imes|ober|ufat/g, c => chars[c]);
        document.getElementById("not-found").style.display = "none";
        document.getElementById("result").style.display = "block";
        output.textContent = desencriptedText;
    } else {
        alert("Recuerda, sólo letras minúsculas y sin acentos");
    }

    document.getElementById("paste").style.display = "none";
}

function copy() {
    let copyText = output.innerText;
    navigator.clipboard.writeText(copyText);
    document.getElementById("paste").style.display = "block";
}

function paste() {
    navigator.clipboard
        .readText()
        .then((clipText) => (input.value = clipText));
}

button.forEach(element => element.addEventListener("click", (event) => {
    element.classList.add("pulse");
    setTimeout(function() {
        element.classList.remove("pulse");
    }, 800);
}));