const API = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const container = document.getElementById("respuesta");

document.getElementById("buscar").addEventListener("click", (eventBoton) => {
    let text = document.getElementById("texto").value;
    const array_of_words = text.split(" ");
    //Clean the container
    container.innerHTML = ` `;
    for (let palabra of array_of_words) {
        // console.log(palabra);
        fetch(API+palabra)
            .then(response => response.json())
            .then(data => {
                let plantilla
                let word = "Word not exis";
                let phon_text = "Text does not exist";
                let phon_audio = "Audio does not exist";
                let phon_source = "sourceUrl does not exist";
                let synon = "Synonym does not exist";
                let anton = "Antonym does not exist";
                if (typeof data[0] !== "undefined" || data.length !== 0) {
                    word = data[0].word === null ? "Word not exist" : data[0].word;
                    if (typeof data[0].phonetics !== "undefined") {
                        phon_text = data[0].phonetics[0].text == null ? "Text does not exist" : data[0].phonetics[0].text;
                        phon_audio = data[0].phonetics[0].audio == null ? "audio does not exist" : data[0].phonetics[0].audio;
                        phon_source = data[0].phonetics[0].sourceUrl == null ? "sourceUrl does not exist" : data[0].phonetics[0].sourceUrl;
                    }
                    if (typeof data[0].meanings !== "undefined") {
                        synon = data[0].meanings[0].synonyms.length > 0 ? data[0].meanings[0].synonyms.toString() : "Synonym does not exist";
                        anton = data[0].meanings[0].antonyms.length > 0 ? data[0].meanings[0].antonyms.toString() : "Antonym does not exist";
                    }
                }

                plantilla =
                    `<div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"><a href="${phon_source}" target="_blank">${word}</a></h5>
                        <audio controls>
                        <source src="${phon_audio}" type="audio/mpeg">
                        Your browser does not support the audio element.
                        </audio>
                        <h6 class="card-subtitle mb-2 text-muted">${phon_text}</h6>
                        <p class="card-text text-primary">${synon}</p>
                        <p class="card-text text-danger">${anton}</p>
                    </div>
                </div>
            </div>`;

                container.innerHTML += plantilla;
            })
            .catch((error) => {
                container.innerHTML += error;
                container.innerHTML += `<h2>404 error</h2>`;
            })
            ;
    }
})
