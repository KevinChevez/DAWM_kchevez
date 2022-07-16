const API = "https://covid19.mathdro.id/api";
const API_Muertes_Sorted = "https://covid19.mathdro.id/api/deaths";
const mensajeNoChart =
`<p class="text-danger justify-content-center align-self-center text-center">
Grafico no ha podido ser añadido debido a que no se ha encontrado datos de ciudades, estados o países.
</p>`;

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
      let rutaFlag = "https://countryflagsapi.com/png/";
      let linkCountries = data.countries;
      fetch(linkCountries)
        .then(response => response.json())
        .then(dataCountries => {
          let countries = dataCountries.countries;
          for (const country of countries) {
            let plantillaOption = `<option value="${country.iso3}">${country.name}</option>`
            document.querySelector('div.input-group > select').innerHTML += plantillaOption;

            fetch(API + "/countries/" + country.name)
              .then(async response => {
                if (response.status != 404) return await response.json();
                else throw new Error(response.status + " - El país " + country.name + " no existe en la base de datos");
              })
              .then(dataCountry => {
                let numConfirmados, numMuertos, numRecuperados, total;
                if (dataCountry.confirmed != null) {
                  numConfirmados = dataCountry.confirmed.value;
                }
                if (dataCountry.deaths != null) {
                  numMuertos = dataCountry.deaths.value;
                }
                if (dataCountry.recovered != null) {
                  numRecuperados = dataCountry.recovered.value;
                }
                total = numConfirmados + numRecuperados + numMuertos;

                fetch(rutaFlag + country.name)
                  .then(async response => {
                    if (response.ok) {
                      return response.url;
                    }
                    else throw new Error(response.status + " - La bandera del país " + country.name + " no existe en la base de datos");
                  })
                  .then(dataUrlImagen => {
                    let plantillaCarta = cartaBanderas(dataUrlImagen, country.name, total, numMuertos, numConfirmados, numRecuperados);
                    document.getElementById("paisesSection").innerHTML += plantillaCarta;
                  })
                  .catch(error => {
                    console.log(error);
                  })
                  ;
              })
              .catch((error) => {
                console.log(error);
              })
              ;
          }
        })
        .catch((error) => {
          console.log(error);
        })
        ;
      // Grafico 1 - Principal general
      let arrLabels = [];
      let arrDatos = [];
      let coloresBG = ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'];
      // let coloresBordes = ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)'];
      arrLabels.push("Confirmados");
      arrDatos.push(data.confirmed.value);

      arrLabels.push("Muertes");
      arrDatos.push(data.deaths.value);

      arrLabels.push("Recuperados");
      arrDatos.push(data.recovered.value);

      crearGrafico("Gráfico general", "cardChart", "myChart", "bar", "Gráfico del resumen general", arrLabels, arrDatos, coloresBG, "white");

      // Graficos Secundarios
      // Hacemos la peticion asincronica para la data de todos los paises ordenados por muertes
      let linkDeathsSort = data.deaths.detail;
      fetch(linkDeathsSort)
        .then(response => response.json())
        .then(detailsCountries => {
          let arrLabels = [];
          let arrDatosDeaths = [];
          let arrDatosRecovered = [];
          let arrDatosConfirmed = [];
          let coloresBG = ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'];
          // let coloresBordes = ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)'];
          let counter = 0;
          for (const country of detailsCountries) {
            if (country.countryRegion != null) {
              arrLabels.push(country.countryRegion);
            }
            if (country.deaths != 0 && country.deaths != null) {
              arrDatosDeaths.push(country.deaths);
            }
            if (country.recovered != 0 && country.recovered != null) {
              arrDatosRecovered.push(country.recovered);
            }
            if (country.confirmed != 0 && country.confirmed != null) {
              arrDatosConfirmed.push(country.confirmed);
            }
            coloresBG.push(generateRandomColor());
            counter++;
            if (counter >= 11) {
              break;
            }
          }

          // Grafico 2 - Secundario
          if (arrDatosDeaths.length > 0) {
            crearGrafico("Gráfico de muertes", "cardChart2", "myChart2", "doughnut", "Gráfico de muertes", arrLabels, arrDatosDeaths, coloresBG, "transparent");
          } else {
            document.getElementById("cardChart2").innerHTML = mensajeNoChart;
          }

          // Grafico 3 - Secundario
          if (arrDatosRecovered.length > 0) {
            crearGrafico("Gráfico de recuperados", "cardChart3", "myChart3", "pie", "Gráfico de recuperados", arrLabels, arrDatosRecovered, coloresBG, "white");
          } else {
            document.getElementById("cardChart3").innerHTML = mensajeNoChart;
          }

          // Grafico 4 - Secundario
          if (arrDatosConfirmed.length > 0) {
            crearGrafico("Gráfico de confirmados", "cardChart4", "myChart4", "polarArea", "Gráfico de confirmados", arrLabels, arrDatosConfirmed, coloresBG, "white");
          } else {
            document.getElementById("cardChart4").innerHTML = mensajeNoChart;
          }
        })
        .catch((error) => {
          console.log(error);
        })
        ;
      document.getElementById("imagenOG").src = data.image;
    })
    .catch((error) => {
      console.log(error);
    })
    ;
}

// Cuando se seleccione un pais
document.querySelector('div.input-group > select').addEventListener('change', (eventSelect) => {
  fetch(API+"/countries/"+eventSelect.target.value)
    .then(async response => await response.json())
    .then(data => {
      // Grafico 1 - Principal general
      let arrLabels = [];
      let arrDatos = [];
      let coloresBG = ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'];
      // let coloresBordes = ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)'];
      arrLabels.push("Confirmados");
      arrDatos.push(data.confirmed.value);

      arrLabels.push("Muertes");
      arrDatos.push(data.deaths.value);

      arrLabels.push("Recuperados");
      arrDatos.push(data.recovered.value);

      crearGrafico("Gráfico general", "cardChart", "myChart", "bar", "Gráfico del resumen general", arrLabels, arrDatos, coloresBG, "white");

      // Graficos Secundarios
      // Hacemos la peticion asincronica para la data de todos los paises ordenados por muertes
      let linkDeathsSort = data.deaths.detail;
      fetch(linkDeathsSort)
        .then(response => response.json())
        .then(detailsCountries => {
          let arrLabels = [];
          let arrDatosDeaths = [];
          let arrDatosRecovered = [];
          let arrDatosConfirmed = [];
          let coloresBG = ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'];
          // let coloresBordes = ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)'];
          let counter = 0;
          for (const country of detailsCountries) {
            if (country.provinceState != null) {
              arrLabels.push(country.provinceState);
              if (country.deaths != 0 && country.deaths != null) {
                arrDatosDeaths.push(country.deaths);
              }
              if (country.recovered != 0 && country.recovered != null) {
                arrDatosRecovered.push(country.recovered);
              }
              if (country.confirmed != 0 && country.confirmed != null) {
                arrDatosConfirmed.push(country.confirmed);
              }
              coloresBG.push(generateRandomColor());
              counter++;
              if (counter >= 21) {
                break;
              }
            }
          }

          // Grafico 2 - Secundario
          if (arrDatosDeaths.length > 0) {
            crearGrafico("Gráfico de muertes", "cardChart2", "myChart2", "doughnut", "Gráfico de muertes", arrLabels, arrDatosDeaths, coloresBG, "transparent");
          } else {
            document.getElementById("cardChart2").innerHTML = mensajeNoChart;
          }

          // Grafico 3 - Secundario
          if (arrDatosRecovered.length > 0) {
            crearGrafico("Gráfico de recuperados", "cardChart3", "myChart3", "pie", "Gráfico de recuperados", arrLabels, arrDatosRecovered, coloresBG, "white");
          } else {
            document.getElementById("cardChart3").innerHTML = mensajeNoChart;
          }

          // Grafico 4 - Secundario
          if (arrDatosConfirmed.length > 0) {
            crearGrafico("Gráfico de confirmados", "cardChart4", "myChart4", "polarArea", "Gráfico de confirmados", arrLabels, arrDatosConfirmed, coloresBG, "white");
          } else {
            document.getElementById("cardChart4").innerHTML = mensajeNoChart;
          }
        })
        .catch((error) => {
          console.log(error);
        })
      ;
      fetch(API+"/countries/"+eventSelect.target.value+"/og")
        .then(response => response.url)
        .then(dataLink => {
          document.getElementById("imagenOG").src = dataLink;
        })
        .catch((error) => {
          console.log(error);
        })
      ;
    })
    .catch((error) => {
      console.log(error);
    })
  ;
})

// funcion de graficos
function crearGrafico(subtitle, id, idChart, tipo, titulo, arrEtiquetas, arrDatos, bgColor, bdColor) {
  
  document.getElementById(id).innerHTML =
    `<canvas class="my-4 h-100" id="${idChart}"></canvas>
    <h5 class="mb-0 text-center fs-6">${subtitle}</h5>`
  ;
  
  var ctx = document.getElementById(idChart);
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
        data: {
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

// https://www.educative.io/answers/how-to-generate-a-random-color-in-javascript
function generateRandomColor() {
  let maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`
}

function cartaBanderas(rutaIMG, paisName, numTotal, numMuertos, numConfir, numRecu) {
  return `
  <div class="row pt-4 mx-1 my-4 rounded-3 bg-info shadow-3-strong">
    <div class="col-xl-3 col-sm-6 col-12 mb-4 align-self-center">
      <div class="card"> 
        <div class="card-body">
          <div class="d-flex justify-content-between px-md-1">
            <div class="align-self-center">
              <figure class="figure m-0 border border-black rounded">
                <img id="${paisName}" src="${rutaIMG}" class="figure-img img-fluid rounded size-flag" alt="Bandera de ${paisName}" onerror="this.src='img/imageNotAvailable.png'">
              </figure>
            </div>
            <div class="text-end">
              <h3>${paisName}</h3>
              <p class="mb-0">Total personas afectadas: ${numTotal}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    ${subCardPaises("fa-chart-pie text-danger", "Muertos", numMuertos)}
    ${subCardPaises("fa-chart-line text-warning", "Confirmados", numConfir)}
    ${subCardPaises("fa-user text-success", "Recuperados", numRecu)}
  `
    ;
}

function subCardPaises(iconAndColor, mensaje, valor) {
  return `
  <div class="col-xl-3 col-sm-6 col-12 mb-4 align-self-center">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between px-md-1">
          <div class="align-self-center">
            <i class="fas ${iconAndColor} fa-3x"></i>
          </div>
          <div class="text-end">
            <h3>${valor}</h3>
            <p class="mb-0">${mensaje}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
    ;
}

