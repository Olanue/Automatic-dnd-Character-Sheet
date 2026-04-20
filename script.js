function modifier(stat) {
    return Math.floor((stat - 10) / 2);
}

function generate() {
    let name = document.getElementById("name").value;
    let cls = document.getElementById("class").value;
    let level = parseInt(document.getElementById("level").value);
    let race = document.getElementById("race").value;

    let str = parseInt(document.getElementById("str").value);
    let dex = parseInt(document.getElementById("dex").value);
    let con = parseInt(document.getElementById("con").value);
    let int = parseInt(document.getElementById("int").value);
    let sab = parseInt(document.getElementById("sab").value);
    let car = parseInt(document.getElementById("car").value);

    // Apply background bonuses
    const bg = document.getElementById("background").value;
    if (backgroundMainStats[bg]) {
        const bonus1 = parseInt(document.getElementById("antatb1").value) || 0;
        const bonus2 = parseInt(document.getElementById("antatb2").value) || 0;
        const bonus3 = parseInt(document.getElementById("antatb3").value) || 0;

        const statMap = {
            "Força": "str",
            "Destreza": "dex",
            "Constituição": "con",
            "Inteligência": "int",
            "Sabedoria": "sab",
            "Carisma": "car"
        };

        const bonuses = [bonus1, bonus2, bonus3];
        backgroundMainStats[bg].forEach((stat, index) => {
            const statKey = statMap[stat];
            if (statKey) {
                eval(`${statKey} += bonuses[${index}];`);
            }
        });
    }

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
    <p><b>Raça:</b> ${race}</p>
    <p><b>Antecedente:</b> ${bg}</p>
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
    <p><b>Deslocamento:</b> ${desloc}m</p>
    <p><b>Iniciativa:</b> +${init}</p>
  `;
}

const backgroundMainStats = {
    "Acólito": ["Inteligência", "Sabedoria", "Carisma"],
    "Andarilho": ["Destreza", "Sabedoria", "Carisma"],
    "Artesão": ["Força", "Destreza", "Inteligência"],
    "Artista": ["Força", "Destreza", "Carisma"],
    "Charlatão": ["Destreza", "Constituição", "Carisma"],
    "Criminoso": ["Destreza", "Constituição", "Inteligência"],
    "Eremita": ["Constituição", "Sabedoria", "Carisma"],
    "Escriba": ["Destreza", "Inteligência", "Sabedoria"],
    "Fazendeiro": ["Força", "Constituição", "Sabedoria"],
    "Guarda": ["Força", "Inteligência", "Sabedoria"],
    "Guia": ["Destreza", "Constituição", "Sabedoria"],
    "Marinheiro": ["Força", "Destreza", "Sabedoria"],
    "Mercador": ["Constituição", "Inteligência", "Carisma"],
    "Nobre": ["Força", "Inteligência", "Carisma"],
    "Sábio": ["Constituição", "Inteligência", "Sabedoria"],
    "Soldado": ["Força", "Destreza", "Constituição"]
};

function updateBackgroundBonus() {
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
}