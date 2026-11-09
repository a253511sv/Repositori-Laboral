//  DADES DE LES 20 PEL·LÍCULES 
const pelicules = [
    {id:1, img:"img/movie1.jpg", title:"Peaky Blinders: The Immortal Man", year:"2026", genre:"Drama"},
    {id:2, img:"img/movie2.jpg", title:"John Wick: Chapter 4", year:"2023", genre:"Acció"},
    {id:3, img:"img/movie3.jpg", title:"Gladiator", year:"2000", genre:"Acció"},
    {id:4, img:"img/movie4.jpg", title:"Tick, Tick... Boom!", year:"2021", genre:"Musical"},
    {id:5, img:"img/movie5.jpg", title:"Oppenheimer", year:"2023", genre:"Històric"},
    {id:6, img:"img/movie6.jpg", title:"L'Home del Nord", year:"2022", genre:"Històric"},
    {id:7, img:"img/movie7.jpg", title:"Dune: Part Two", year:"2024", genre:"Ciència Ficció"},
    {id:8, img:"img/movie8.jpg", title:"Top Gun Maverick", year:"2022", genre:"Acció"},
    {id:9, img:"img/movie9.jpg", title:"La raó d'estar amb tu", year:"2017", genre:"Fantasia"},
    {id:10, img:"img/movie10.jpg", title:"La Balena", year:"2022", genre:"Drama"},
    {id:11, img:"img/movie11.jpg", title:"El Padrí", year:"1972", genre:"Drama"},
    {id:12, img:"img/movie12.jpg", title:"Interestellar", year:"2014", genre:"Ciència Ficció"},
    {id:13, img:"img/movie13.jpg", title:"The Matrix", year:"1999", genre:"Thriller"},
    {id:14, img:"img/movie14.jpg", title:"Shutter Island", year:"2010", genre:"Thriller"},
    {id:15, img:"img/movie15.jpg", title:"Club de Lluita", year:"1999", genre:"Drama"},
    {id:16, img:"img/movie16.jpg", title:"Zodiac", year:"2007", genre:"Misteri"},
    {id:17, img:"img/movie17.jpg", title:"Dos Papes", year:"2019", genre:"Drama"},
    {id:18, img:"img/movie18.jpg", title:"Conclave", year:"2024", genre:"Thriller"},
    {id:19, img:"img/movie19.jpg", title:"Wall Street", year:"1987", genre:"Drama"},
    {id:20, img:"img/movie20.jpg", title:"La Gran Aposta", year:"2015", genre:"Drama"}
];

// SISTEMA DE FAVORITS 
let favorits = JSON.parse(localStorage.getItem('favorits')) || {};

// Afegir a favorits (des de detall.html)
function afegirAFavorits(id, title) {
    if (!favorits["Favorits"]) favorits["Favorits"] = [];
    
    if (!favorits["Favorits"].some(p => p.id === id)) {
        favorits["Favorits"].push({id, title});
        localStorage.setItem('favorits', JSON.stringify(favorits));
        alert(`❤️ "${title}" afegit als teus Favorits!`);
    } else {
        alert("Aquesta pel·lícula ja està als teus favorits.");
    }
}

// Mostrar llistes de favorits a perfil.html
function mostrarFavorits() {
    const container = document.getElementById('llistesFavorits');
    if (!container) return;

    container.innerHTML = '';
    Object.keys(favorits).forEach(llista => {
        const div = document.createElement('div');
        div.className = 'mb-4';
        div.innerHTML = `
            <h5>${llista} <span class="badge bg-primary">${favorits[llista].length}</span></h5>
            <div class="row g-3" id="llista-${llista}"></div>
        `;
        container.appendChild(div);

        const sub = div.querySelector(`#llista-${llista}`);
        favorits[llista].forEach(p => {
            sub.innerHTML += `
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h6>${p.title}</h6>
                            <button onclick="eliminarFavorit('${llista}', ${p.id})" class="btn btn-sm btn-danger">Eliminar</button>
                        </div>
                    </div>
                </div>
            `;
        });
    });
}

function eliminarFavorit(llista, id) {
    favorits[llista] = favorits[llista].filter(p => p.id !== id);
    localStorage.setItem('favorits', JSON.stringify(favorits));
    mostrarFavorits();
}

// HISTORIAL DE VISUALITZACIONS 
let historial = JSON.parse(localStorage.getItem('historial')) || [];

function afegirAlHistorial(id, title, img) {
    // Evitar duplicats recents
    historial = historial.filter(item => item.id !== id);
    historial.unshift({id, title, img, data: new Date().toISOString().split('T')[0]});
    if (historial.length > 10) historial.pop(); // màxim 10
    localStorage.setItem('historial', JSON.stringify(historial));
}

function mostrarHistorial() {
    const container = document.getElementById('historialGrid');
    if (!container) return;

    container.innerHTML = '';
    historial.forEach(item => {
        container.innerHTML += `
            <div class="col-6 col-md-4">
                <div class="card text-center">
                    <img src="${item.img}" class="card-img-top" style="height:140px; object-fit:cover;">
                    <div class="card-body p-2">
                        <small class="text-muted">${item.data}</small><br>
                        <strong class="text-light">${item.title}</strong>
                    </div>
                </div>
            </div>
        `;
    });
}

// CERCA GLOBAL 
window.onload = () => {
    // Cerca global des de qualsevol pàgina
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');

    // Si estem a pelicules.html
    if (document.getElementById('movieGrid')) {
        if (query) {
            document.getElementById('searchInput').value = query;
            filterMovies();
        } else {
            renderCards(pelicules);
        }
    }

    // Si estem a perfil.html
    if (document.getElementById('llistesFavorits')) {
        mostrarFavorits();
        mostrarHistorial();
    }
};

// FUNCIONS DE FILTRATGE (per pelicules.html) 
function renderCards(moviesToShow) {
    const container = document.getElementById('movieGrid');
    if (!container) return;
    container.innerHTML = '';
    moviesToShow.forEach(movie => {
        container.innerHTML += `
            <div class="col">
                <div class="card h-100">
                    <img src="${movie.img}" class="card-img-top" alt="${movie.title}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="text-muted">${movie.year} | ${movie.genre}</p>
                        <div class="mt-auto">
                            <a href="detall.html?id=${movie.id}" class="btn btn-detail w-100">Veure Detall</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

function filterMovies() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const genre = document.getElementById('genreFilter').value;

    let filtered = pelicules.filter(movie => {
        const matchTitle = movie.title.toLowerCase().includes(search);
        const matchGenre = (genre === "Tots" || movie.genre === genre);
        return matchTitle && matchGenre;
    });

    renderCards(filtered);
}