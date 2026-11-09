document.addEventListener("DOMContentLoaded", () => {
    const contenidor = document.getElementById("llista-pelis");

    fetch('movies.json')
        .then(res => res.json())
        .then(dades => {
            dades.forEach(peli => {
                // Enllaç complet amb tota la info (vídeo + subs)
                const link = `index.html?file=${encodeURIComponent(peli.arxiu)}&title=${encodeURIComponent(peli.titol)}&poster=${encodeURIComponent(peli.poster)}&subca=${encodeURIComponent(peli.subsCa || '')}&subes=${encodeURIComponent(peli.subsEs || '')}&suben=${encodeURIComponent(peli.subsEn || '')}`;
                
                // Creem la targeta utilitzant classes CSS en lloc d'estils en línia
                contenidor.innerHTML += `
                    <div class="targeta-peli">
                        <img src="${peli.poster}" alt="Pòster de ${peli.titol}">
                        <h3>${peli.titol}</h3>
                        <p>${peli.any} | ${peli.genere}</p>
                        <a href="${link}" class="btn-reproduir">Reproduir</a>
                    </div>`;
            });
        })
        .catch(error => console.error("Error carregant el JSON:", error));
});

