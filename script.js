<<<<<<< HEAD
function modifier(stat) {
    return Math.floor((stat - 10) / 2);
}

function generate() {
    let name = document.getElementById("name").value;
    let cls = document.getElementById("class").value;
    let level = parseInt(document.getElementById("level").value);

    let str = parseInt(document.getElementById("str").value);
    let dex = parseInt(document.getElementById("dex").value);
    let con = parseInt(document.getElementById("con").value);
    let int = parseInt(document.getElementById("int").value);
    let sab = parseInt(document.getElementById("sab").value);
    let car = parseInt(document.getElementById("car").value);

    let hpBase = {
        "Bárbaro": 12,
        "Bardo": 8,
        "Bruxo": 8,
        "Clérigo": 8,
        "Druida": 8,
        "Feiticeiro": 6,
        "Guardião": 10,
        "Guerreiro": 10,
        "Ladino": 8,
        "Mago": 6,
        "Monge": 8,
        "Paladino": 10
    };

    let hp = hpBase[cls] + ((level - 1) * Math.floor(hpBase[cls] / 2 + 1)) + (modifier(con)*level)  ;
    let ac = 10 + modifier(dex);

    document.getElementById("sheet").innerHTML = `
    <h3>${name}</h3>
    <p><b>Classe:</b> ${cls}</p>
    <p><b>Nível:</b> ${level}</p>
    <hr>
    <p><b>FOR:</b> ${str} (mod ${modifier(str)})</p>
    <p><b>DES:</b> ${dex} (mod ${modifier(dex)})</p>
    <p><b>CON:</b> ${con} (mod ${modifier(con)})</p>
    <p><b>INT:</b> ${int} (mod ${modifier(int)})</p>
    <p><b>SAB:</b> ${sab} (mod ${modifier(sab)})</p>
    <p><b>CAR:</b> ${car} (mod ${modifier(car)})</p>
    <hr>
    <p><b>HP:</b> ${hp}</p>
    <p><b>AC:</b> ${ac}</p>
  `;
=======
function modifier(stat) {
    return Math.floor((stat - 10) / 2);
}

function generate() {
    let name = document.getElementById("name").value;
    let cls = document.getElementById("class").value;
    let level = parseInt(document.getElementById("level").value);

    let str = parseInt(document.getElementById("str").value);
    let dex = parseInt(document.getElementById("dex").value);
    let con = parseInt(document.getElementById("con").value);
    let int = parseInt(document.getElementById("int").value);
    let sab = parseInt(document.getElementById("sab").value);
    let car = parseInt(document.getElementById("car").value);

    let hpBase = {
        "Bárbaro": 12,
        "Bardo": 8,
        "Bruxo": 8,
        "Clérigo": 8,
        "Druida": 8,
        "Feiticeiro": 6,
        "Guardião": 10,
        "Guerreiro": 10,
        "Ladino": 8,
        "Mago": 6,
        "Monge": 8,
        "Paladino": 10
    };

    let hp = hpBase[cls] + ((level - 1) * Math.floor(hpBase[cls] / 2 + 1)) + (modifier(con) * level);
    let ac = 10 + modifier(dex);
    let desloc = 9;
    let init = modifier(dex);

    document.getElementById("sheet").innerHTML = `
    <h3>${name}</h3>
    <p><b>Classe:</b> ${cls}</p>
    <p><b>Nível:</b> ${level}</p>
    <hr>
    <p><b>FOR:</b> ${str} (mod ${modifier(str)})</p>
    <p><b>DES:</b> ${dex} (mod ${modifier(dex)})</p>
    <p><b>CON:</b> ${con} (mod ${modifier(con)})</p>
    <p><b>INT:</b> ${int} (mod ${modifier(int)})</p>
    <p><b>SAB:</b> ${sab} (mod ${modifier(sab)})</p>
    <p><b>CAR:</b> ${car} (mod ${modifier(car)})</p>
    <hr>
    <p><b>HP:</b> ${hp}</p>
    <p><b>AC:</b> ${ac}</p>
  `;
}

const backgroundMainStats = {
    "Acólito": ["Sabedoria", "Carisma", "Inteligência"],
    "Andarilho": ["Força", "Constituição", "Sabedoria"],
    "Artesão": ["Força", "Inteligência", "Destreza"],
    "Artista": ["Carisma", "Destreza", "Inteligência"],
    "Charlatão": ["Carisma", "Destreza", "Inteligência"],
    "Criminoso": ["Destreza", "Inteligência", "Carisma"],
    "Eremita": ["Sabedoria", "Constituição", "Inteligência"],
    "Mercador": ["Carisma", "Inteligência", "Sabedoria"],
    "Escriba": ["Inteligência", "Sabedoria", "Destreza"],
    "Nobre": ["Carisma", "Inteligência", "Sabedoria"],
    "Fazendeiro": ["Constituição", "Força", "Sabedoria"],
    "Sábio": ["Inteligência", "Sabedoria", "Carisma"],
    "Guarda": ["Força", "Constituição", "Sabedoria"],
    "Soldado": ["Força", "Constituição", "Destreza"],
    "Guia": ["Destreza", "Sabedoria", "Constituição"],
    "Marinheiro": ["Força", "Destreza", "Constituição"]
};

function updateBackgroundBonus() {
    let antatb1 = parseInt(document.getElementById("antatb1").value);
    let antatb2 = parseInt(document.getElementById("antatb2").value);
    let antatb3 = parseInt(document.getElementById("antatb3").value);
    const bg = document.getElementById("background").value;

    const labels = [
        document.getElementById("label1"),
        document.getElementById("label2"),
        document.getElementById("label3")
    ];

    if (!backgroundMainStats[bg]) return;

    backgroundMainStats[bg].forEach((stat, index) => {
        labels[index].innerText = stat + ":";
    });
>>>>>>> 2337802 (Updating the site)
}