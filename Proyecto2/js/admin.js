const API = "https://covid19.mathdro.id/api";
const API_Muertes_Sorted = "https://covid19.mathdro.id/api/deaths";

for (const listItem of document.getElementsByClassName("list-group-item-action")) {
  listItem.addEventListener("click", clickEvent => {
    document.getElementsByClassName("list-group-item list-group-item-action py-2 ripple active").forEach(element => {
      element.className = "list-group-item list-group-item-action py-2 ripple";
    });
    listItem.className = "list-group-item list-group-item-action py-2 ripple active";
  })
}

window.onload = function () {
  fetch(API)
    .then(response => response.json())
    .then(data => {
      let mensajeNoChart = 
      `<p class="text-danger justify-content-center align-self-center text-center">
        Grafico no ha podido ser añadido debido a que no se ha encontrado datos.
      </p>`;
      console.log(data);
      let linkCountries = data.countries;
      fetch(linkCountries)
        .then(response => response.json())
        .then(dataCountries => {
          console.log(dataCountries);
          let countries = dataCountries.countries;
          for (const country of countries) {
            let plantillaOption = `<option value="${country.iso3}">${country.name}</option>`
            document.querySelector('div.input-group > select').innerHTML += plantillaOption;
          }
        })
      ;
      // Grafico 1 - Principal general
      let arrLabels = [];
      let arrDatos = [];
      let coloresBG = ['rgb(255, 99, 132)','rgb(54, 162, 235)','rgb(255, 205, 86)'];
      let coloresBordes = ['rgb(255, 99, 132)','rgb(255, 159, 64)','rgb(255, 205, 86)'];
      arrLabels.push("Confirmados");
      arrDatos.push(data.confirmed.value);

      arrLabels.push("Muertes");
      arrDatos.push(data.deaths.value);

      arrLabels.push("Recuperados");
      arrDatos.push(data.recovered.value);

      crearGrafico("myChart", "bar", "Gráfico del resumen general" ,arrLabels, arrDatos, coloresBG, "white");

      // Grafico 2 - Secundario
      // Hacemos la peticion asincronica para la data de todos los paises ordenados por muertes
      let linkDeathsSort= data.deaths.detail;
      fetch(linkDeathsSort)
        .then(response => response.json())
        .then(detailsCountries =>{
          console.log(detailsCountries);
          let arrLabels = [];
          let arrDatosDeaths = [];
          let arrDatosRecovered = [];
          let arrDatosConfirmed = [];
          let coloresBG = ['rgb(255, 99, 132)','rgb(54, 162, 235)','rgb(255, 205, 86)'];
          let coloresBordes = ['rgb(255, 99, 132)','rgb(255, 159, 64)','rgb(255, 205, 86)'];
          let counter = 0;
          for (const country of detailsCountries) {
            if(country.countryRegion != null){
              arrLabels.push(country.countryRegion);
            }
            if(country.deaths != 0 && country.deaths != null){
              arrDatosDeaths.push(country.deaths);
            }
            if(country.recovered != 0 && country.recovered != null){
              arrDatosRecovered.push(country.recovered);
            }
            if(country.confirmed != 0 && country.confirmed != null){
              arrDatosConfirmed.push(country.confirmed);
            }
            coloresBG.push(generateRandomColor());
            counter++;
            if(counter >= 11){
              break;
            }
          }
 
          // Grafico 2 - Secundario
          if(arrDatosDeaths.length > 0){
            crearGrafico("myChart2", "polarArea", "Gráfico de muertes",arrLabels, arrDatosDeaths, coloresBG, "transparent");
          }else{
            document.getElementById("cardChart2").innerHTML = mensajeNoChart;
          }

          // Grafico 3 - Secundario
          if(arrDatosRecovered.length > 0){
            crearGrafico("myChart3", "doughnut", "Gráfico de recuperados",arrLabels, arrDatosRecovered, coloresBG, "white");
          }else{
            document.getElementById("cardChart3").innerHTML = mensajeNoChart;
          }

          // Grafico 4 - Secundario
          if(arrDatosConfirmed.length > 0){
            crearGrafico("myChart4", "pie", "Gráfico de confirmados",arrLabels, arrDatosConfirmed, coloresBG, "white");
          }else{
            document.getElementById("cardChart4").innerHTML = mensajeNoChart;
          }
        })
      ;
      
      document.getElementById("imagenOG").src = data.image;
    })
    ;
}

document.querySelector('div.input-group > select').addEventListener('change', (eventSelect) => {
  fetch()
});


// funcion de graficos
async function crearGrafico(id, tipo, titulo, arrEtiquetas, arrDatos, bgColor, bdColor) {
  var ctx = document.getElementById(id);
  switch (tipo) {
    case "bar":
    case "line":
      new Chart(ctx, {
        type: tipo,
        data: {
          labels: arrEtiquetas,
          datasets: [{
              label: titulo,
              data: arrDatos,
              lineTension: 0,
              backgroundColor: bgColor,
              borderColor: bdColor,
              borderWidth: 1,
              pointBackgroundColor: "#007bff",
            }
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      });
      break;

    case "doughnut":
    case "polarArea":
    case "pie":
      new Chart(ctx, {
        type: tipo,
        data:  {
          labels: arrEtiquetas,
          datasets: [{
            label: titulo,
            data: arrDatos,
            backgroundColor: bgColor,
            borderColor: bdColor,
            borderWidth: 2,
            hoverOffset: 4
          }]
        },
      });
      break;

    default:
      break;
  }

}

// Funcion para obtener el .json del API (data)
async function getDataAPI(API) {
  fetch(API)
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => {
      return error;
    })
    ;
}

function generateRandomColor(){
  let maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.random() * maxVal; 
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);   
  return `#${randColor.toUpperCase()}`
}
console.log(generateRandomColor()); 