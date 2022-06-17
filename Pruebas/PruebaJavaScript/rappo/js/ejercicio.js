function cargarDatos() {
    alert("Cargando elementos")
}

window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos();
});

fetch("https://dataserverdaw.herokuapp.com/escritores/xml")
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "application/xml");
        // console.log(xml);

        // let escritores = xml.getElementsByTagName('escritor')

        for (let escritor of xml.getElementsByTagName('escritor')) {
            let id = escritor.getElementsByTagName('id')[0].textContent
            let nombre = escritor.getElementsByTagName('nombre')[0].textContent

            const option = document.createElement("option");
            option.setAttribute('value', id);
            option.innerHTML = nombre;

            // let plantilla = `<option value="${id}">${nombre}</option>`
            // document.querySelector('div.input-group > select').innerHTML += plantilla
            document.querySelector('div.input-group > select').appendChild(option)
        }
    })
    .catch(console.error)
;

document.querySelector('div.input-group > select').addEventListener('change', (eventSelect) => {
    // console.log(eventSelect.target.value)
    fetch("https://dataserverdaw.herokuapp.com/escritores/frases")
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            const arr_frases = data.frases.filter( (frase) => {
                return frase.id_autor == parseInt(eventSelect.target.value);
            })
            // console.log(arr_frases)
            // console.log(data.frases)
            let nombre = document.getElementsByTagName('option')[eventSelect.target.selectedIndex].innerHTML;
            let frase;
            frase = arr_frases[0].texto;
            let plantilla = 
            `<div class="col-lg-3">
                <div class="test-inner ">
                    <div class="test-author-thumb d-flex">
                        <div class="test-author-info">
                            <h4>${nombre}</h4>                                            
                        </div>
                    </div>
                    <span>${frase}</span>
                    <i class="fa fa-quote-right"></i>
                </div>
            </div>`
            document.getElementById("frases").innerHTML = plantilla;
            for (let i = 1; i < arr_frases.length; i++) {
                frase = arr_frases[i].texto;
                plantilla = 
                `<div class="col-lg-3">
                    <div class="test-inner ">
                        <div class="test-author-thumb d-flex">
                            <div class="test-author-info">
                                <h4>${nombre}</h4>                                            
                            </div>
                        </div>
                        <span>${frase}</span>
                        <i class="fa fa-quote-right"></i>
                    </div>
                </div>`
                document.getElementById("frases").innerHTML += plantilla;
            }
        })
        .catch(console.error)
    ;
})
