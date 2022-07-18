const API = "https://covid19.mathdro.id/api";
// const API = "localhots:8000"
const container = document.getElementsByClassName("container-lista")[0];
const tab = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp";

document.getElementById("selector").addEventListener("change", (eventoSelect) => {
    let pais = eventoSelect.target.value;
    fetch(API+"/countries/"+pais+"/confirmed")
        .then(response => response.json())
        .then(data => {
            let countryName, numConfirmed, numDeaths, numRecovered, plantilla;
            if(data.length !== 0){
                countryName = data[0].countryRegion;
                numConfirmed = data[0].confirmed == null ? 0 : data[0].confirmed;
                numDeaths = data[0].deaths == null ? 0 : data[0].deaths;
                numRecovered = data[0].recovered == null ? 0 : data[0].recovered;
                plantilla = 
                    `<ul class="container-lista__inner">
                        <li> <strong>País :${tab}${tab}${tab}${tab}${tab}${countryName}</strong> </li>
                        <li><strong>Número de confirmados:</strong>${numConfirmed}</li>
                        <li><strong>Número de muertes: </strong> ${tab}${numDeaths}</li>
                        <li><strong>Número de recuperados: </strong> ${numRecovered}</li>
                    </ul>`
                ;
                container.innerHTML = plantilla;
            }
            else{
                container.innerHTML = `${tab}`;
            }
        })
    ;
})

function llenarSelector(api) {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            setElementsSelect(data.countries);
        })
        .catch(console.error)
    ;
} 

const setElementsSelect = lpaises => {
    let pais, iso3, name;
    for (pais of lpaises) {
        name = pais.name;
        iso3 = pais.iso3;
        let plantilla = `<option value="${iso3}">${name}</option>`;
        document.querySelector(".cuerpo__select ").innerHTML += plantilla;
    }
}

llenarSelector(API+"/countries");