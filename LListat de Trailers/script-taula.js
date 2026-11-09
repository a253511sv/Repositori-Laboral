document.addEventListener("DOMContentLoaded", () => {
    const cos = document.getElementById('cos-taula');

    fetch('movies.json')
        .then(res => res.json())
        .then(dades => {
            dades.forEach(peli => {
                // ENLLAÇ IDÈNTIC AL DE LA CARTELLERA
                const link = `index.html?file=${encodeURIComponent(peli.arxiu)}&title=${encodeURIComponent(peli.titol)}&poster=${encodeURIComponent(peli.poster)}&subca=${encodeURIComponent(peli.subsCa || '')}&subes=${encodeURIComponent(peli.subsEs || '')}&suben=${encodeURIComponent(peli.subsEn || '')}`;
                
                cos.innerHTML += `
                    <tr>
                        <td><img src="${peli.poster}" class="poster-min" style="width:60px; height:auto; border-radius:4px;"></td>
                        <td>${peli.titol}</td>
                        <td>${peli.any}</td>
                        <td>${peli.genere}</td>
                        <td><a href="${link}" style="color:#ad0000; font-weight:bold; text-decoration:none;">Reproduir</a></td>
                    </tr>`;
            });
            
            // Activar DataTables un cop s'han afegit totes les files
            $('#taulaPelis').DataTable({
                language: { url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/ca.json' }
            });
        })
        .catch(error => console.error("Error carregant el JSON:", error));
});