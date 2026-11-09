// DADES DE TOTES LES PEL·LÍCULES (20 pel·lícules) + TRAILER
const movies = [
    {
        id: 1,
        title: "Peaky Blinders: The Immortal Man",
        year: "2026",
        genre: "Drama, crims i cinema èpic",
        sinopsi: "Ambientada a Birmingham el 1940, Tommy Shelby torna de l'exili autoimposat per enfrontar-se a nous perills durant la Segona Guerra Mundial, on el seu fill Duke assumeix un rol més actiu.",
        img: "img/movie1.jpg",
        trailer: "https://www.youtube.com/watch?v=lcvUGs3xaDM",
        cast: [
            { actor: "Cillian Murphy", character: "Tommy Shelby" },
            { actor: "Sophie Rundle", character: "Ada Thorne" },
            { actor: "Barry Keoghan", character: "Duke Shelby" }
        ]
    },
    {
        id: 2,
        title: "John Wick: Chapter 4",
        year: "2023",
        genre: "Acció",
        sinopsi: "John Wick descobreix el camí per derrotar l'Alta Mesa i guanyar la seva llibertat, però abans ha d'enfrontar-se a un nou enemic amb aliances globals, el Marquès de Gramont.",
        img: "img/movie2.jpg",
        trailer: "https://www.youtube.com/watch?v=L0anWmmd8TI",
        cast: [
            { actor: "Keanu Reeves", character: "John Wick" },
            { actor: "Donnie Yen", character: "Caine" },
            { actor: "Bill Skarsgård", character: "Marquès de Gramont" }
        ]
    },
    {
        id: 3,
        title: "Gladiator",
        year: "2000",
        genre: "Acció",
        sinopsi: "Narra la història del general romà Màxim, que és traït i la seva família assassinada per un emperador corrupte, forçant-lo a lluitar com a gladiador per obtenir venjança.",
        img: "img/movie3.jpg",
        trailer: "https://www.youtube.com/watch?v=P5ieIbInFpg",
        cast: [
            { actor: "Russell Crowe", character: "Maximus" },
            { actor: "Joaquin Phoenix", character: "Commodus" }
        ]
    },
    {
        id: 4,
        title: "Tick, Tick... Boom!",
        year: "2021",
        genre: "Musical",
        sinopsi: "Mentre espera la seva gran oportunitat, Jon escriu una obra titulada Superbia, que espera sigui una gran musical. Quan s'acosta al seu trenta aniversari, se sent aclaparat per l'ansietat...",
        img: "img/movie4.jpg",
        trailer: "https://www.youtube.com/watch?v=YJserno8tyU",
        cast: [
            { actor: "Andrew Garfield", character: "Jon" }
        ]
    },
    {
        id: 5,
        title: "Oppenheimer",
        year: "2023",
        genre: "Històric",
        sinopsi: "La pel·lícula Oppenheimer explica la vida del físic J. Robert Oppenheimer, considerat el “Pare de la Bomba Atòmica”.",
        img: "img/movie5.jpg",
        trailer: "https://www.youtube.com/watch?v=JpUd4BS7yI0",
        cast: [
            { actor: "Cillian Murphy", character: "J. Robert Oppenheimer" },
            { actor: "Emily Blunt", character: "Kitty Oppenheimer" }
        ]
    },
    {
        id: 6,
        title: "L'Home del Nord",
        year: "2022",
        genre: "Històric",
        sinopsi: "Un jove príncep viking està en una missió per venjar l'assassinat del seu pare.",
        img: "img/movie6.jpg",
        trailer: "https://www.youtube.com/watch?v=oMSdFM12hOw",
        cast: [
            { actor: "Alexander Skarsgård", character: "Amleth" }
        ]
    },
    {
        id: 7,
        title: "Dune: Part Two",
        year: "2024",
        genre: "Ciència Ficció",
        sinopsi: "Paul Atreides s'uneix als Fremen mentre està en camí de venjar-se dels conspiradors que van destruir la seva família. Davant d'haver d'escollir entre l'amor de la seva vida i el destí de l'univers, s'esforça per evitar un futur terrible.",
        img: "img/movie7.jpg",
        trailer: "https://www.youtube.com/watch?v=Way9Dexny3w",
        cast: [
            { actor: "Timothée Chalamet", character: "Paul Atreides" }
        ]
    },
    {
        id: 8,
        title: "Top Gun Maverick",
        year: "2022",
        genre: "Acció",
        sinopsi: "La història tracta sobre Maverick enfrontant-se al seu passat mentre entrena un grup de joves graduats de Top Gun, inclòs el fill del seu difunt millor amic, per a una missió perillosa.",
        img: "img/movie8.jpg",
        trailer: "https://www.youtube.com/watch?v=qSqVVswa420",
        cast: [
            { actor: "Tom Cruise", character: "Pete 'Maverick' Mitchell" }
        ]
    },
    {
        id: 9,
        title: "La raó d'estar amb tu",
        year: "2017",
        genre: "Fantasia",
        sinopsi: "Un gos descobreix el significat de la seva pròpia existència a través de les vides dels humans a qui ensenya a riure i estimar. Reencarnat com múltiples gossos al llarg de cinc dècades, l'adorable gosset desenvolupa un vincle indestructible amb l'Ethan.",
        img: "img/movie9.jpg",
        trailer: "https://www.youtube.com/watch?v=1jLOOCADTGs",
        cast: [{ actor: "Dennis Quaid", character: "Ethan" }]
    },
    {
        id: 10,
        title: "La Balena",
        year: "2022",
        genre: "Drama",
        sinopsi: "Un professor d'anglès obès i solitari intenta tornar a connectar amb la seva filla adolescent.",
        img: "img/movie10.jpg",
        trailer: "https://www.youtube.com/watch?v=nWiQodhMvz4",
        cast: [{ actor: "Brendan Fraser", character: "Charlie" }]
    },
    {
        id: 11,
        title: "El Padrí",
        year: "1972",
        genre: "Drama",
        sinopsi: "El patriarca envellit d'una dinastia del crim organitzat transfereix el control del seu imperi clandestí al seu fill reticent.",
        img: "img/movie11.jpg",
        trailer: "https://www.youtube.com/watch?v=UaVTIH8mujA",
        cast: [{ actor: "Marlon Brando", character: "Don Vito Corleone" }]
    },
    {
        id: 12,
        title: "Interestellar",
        year: "2014",
        genre: "Ciència Ficció",
        sinopsi: "Quan la Terra esdevingui inhabitable en el futur, un granger i expilot de la NASA, Joseph Cooper, té la tasca de pilotar una nau espacial, juntament amb un equip d'investigadors, per trobar un nou planeta per als humans.",
        img: "img/movie12.jpg",
        trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
        cast: [{ actor: "Matthew McConaughey", character: "Cooper" }]
    },
    {
        id: 13,
        title: "The Matrix",
        year: "1999",
        genre: "Thriller",
        sinopsi: "Quan una bella desconeguda condueix el pirata informàtic Neo a un inframón prohibit, descobreix la sorprenent veritat: la vida que coneix és l'elaborat engany d'una ciberintel·ligència malvada.",
        img: "img/movie13.jpg",
        trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
        cast: [{ actor: "Keanu Reeves", character: "Neo" }]
    },
    {
        id: 14,
        title: "Shutter Island",
        year: "2010",
        genre: "Thriller",
        sinopsi: "Dos agents de l'ordre públic dels Estats Units són enviats a un centre psiquiàtric en una illa inhòspita per investigar la desaparició d'un pacient.",
        img: "img/movie14.jpg",
        trailer: "https://www.youtube.com/watch?v=v8yrZSkKxTA",
        cast: [{ actor: "Leonardo DiCaprio", character: "Teddy Daniels" }]
    },
    {
        id: 15,
        title: "Club de Lluita",
        year: "1999",
        genre: "Drama",
        sinopsi: "Un treballador d'oficina insomne ​​i un fabricant de sabó insensible formen un club de lluita clandestí que evoluciona en molt més.",
        img: "img/movie15.jpg",
        trailer: "https://www.youtube.com/watch?v=qtRKdVHc-cE",
        cast: [{ actor: "Brad Pitt", character: "Tyler Durden" }]
    },
    {
        id: 16,
        title: "Zodiac",
        year: "2007",
        genre: "Misteri",
        sinopsi: "Entre 1968 i 1983, un dibuixant de San Francisco es converteix en un detectiu aficionat obsessionat amb rastrejar l'assassí del zodíac, un individu no identificat que terroritza el nord de Califòrnia amb una onada de matances.",
        img: "img/movie16.jpg",
        trailer: "https://www.youtube.com/watch?v=yNncHPl1UXg",
        cast: [{ actor: "Jake Gyllenhaal", character: "Robert Graysmith" }]
    },
    {
        id: 17,
        title: "Dos Papes",
        year: "2019",
        genre: "Drama",
        sinopsi: "Darrere dels murs del Vaticà, el papa conservador Benet XVI i el futur papa liberal Francesc han de trobar punts en comú per forjar un nou camí per a l'Església Catòlica.",
        img: "img/movie17.jpg",
        trailer: "https://www.youtube.com/watch?v=T5OhkFY1PQE",
        cast: [{ actor: "Anthony Hopkins", character: "Papa Benet XVI" }]
    },
    {
        id: 18,
        title: "Conclave",
        year: "2024",
        genre: "Thriller",
        sinopsi: "Quan el cardenal Lawrence té l'encàrrec de liderar l'elecció d'un nou Papa, es troba immers en una xarxa de conspiracions i intrigues que podria sacsejar els fonaments mateixos de l'Església Catòlica.",
        img: "img/movie18.jpg",
        trailer: "https://www.youtube.com/watch?v=JX9jasdi3ic",
        cast: [{ actor: "Ralph Fiennes", character: "Cardenal Lawrence" }]
    },
    {
        id: 19,
        title: "Wall Street",
        year: "1987",
        genre: "Drama",
        sinopsi: "Un jove agent de borsa impacient està disposat a fer qualsevol cosa per arribar al cim, inclòs comerciar amb informació privilegiada il·legal obtinguda a través d'un assaltant corporatiu despietat i cobdiciós que el pren sota la seva protecció.",
        img: "img/movie19.jpg",
        trailer: "https://www.youtube.com/watch?v=NtTkHu8R2_Q",
        cast: [{ actor: "Michael Douglas", character: "Gordon Gekko" }]
    },
    {
        id: 20,
        title: "La Gran Aposta",
        year: "2015",
        genre: "Drama",
        sinopsi: "El 2006-2007, un grup d'inversors va apostar en contra del mercat hipotecari dels Estats Units. En la seva investigació, van descobrir com de defectuós i corrupte és el mercat.",
        img: "img/movie20.jpg",
        trailer: "https://www.youtube.com/watch?v=vgqG3ITMv1Q",
        cast: [{ actor: "Christian Bale", character: "Michael Burry" }]
    }
];

// LLEGIR ID + OMPLIR PÀGINA + TRAILER
const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('id'));
const movie = movies.find(m => m.id === id) || movies[0];

document.getElementById('poster').src = movie.img;
document.getElementById('title').textContent = movie.title;
document.getElementById('yearGenre').textContent = `${movie.year} | ${movie.genre}`;
document.getElementById('sinopsi').textContent = movie.sinopsi;

// TRAILER (el botó obre el vídeo real)
document.getElementById('trailerBtn').href = movie.trailer;

// REPARTIMENT
const repartimentDiv = document.getElementById('repartiment');
repartimentDiv.innerHTML = movie.cast.map(p => `
    <div class="col-6 col-md-4 col-lg-3 text-center">
        <div class="bg-dark p-3 rounded">
            <h6 class="text-warning mb-1">${p.actor}</h6>
            <small class="text-muted">com ${p.character}</small>
        </div>
    </div>
`).join('');