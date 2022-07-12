
// Grafico 1 - Principal general
let arrLabels = ["Sunday","M","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let arrDatos = [15339, 21345, 18483, 24003, 23489, 24092, 12034];
crearGrafico("myChart", "line", arrLabels, arrDatos);

// Grafico 2 - Secundario
arrLabels = ["Sabado","M","Tuesday","Wednesday","Thursday","Friday","Saturday"];
arrDatos = [15339, 21345, 18483, 24003, 23489, 24092, 12034];
crearGrafico("myChart2", "bar", arrLabels, arrDatos);

// Grafico 3 - Secundario
arrLabels = ["Sabado","M","Tuesday","Wednesday","Thursday","Friday","Saturday"];
arrDatos = [15339, 21345, 18483, 24003, 23489, 24092, 12034];
crearGrafico("myChart3", "line", arrLabels, arrDatos);

// Grafico 4 - Secundario
arrLabels = ["Sabado","M","Tuesday","Wednesday","Thursday","Friday","Saturday"];
arrDatos = [15339, 21345, 18483, 24003, 23489, 24092, 12034];
crearGrafico("myChart4", "bar", arrLabels, arrDatos);

// funcion de graficos
async function crearGrafico(id, tipo, arrEtiquetas, arrDatos){
  var ctx = document.getElementById(id);
  var myChart4 = new Chart(ctx, {
    type: tipo,
    data: {
      labels: arrEtiquetas,
      datasets: [
        {
          data: arrDatos,
          lineTension: 0,
          backgroundColor: "transparent",
          borderColor: "#007bff",
          borderWidth: 4,
          pointBackgroundColor: "#007bff",
        },
      ],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false,
          },
        },],
      },
      legend: {
        display: false,
      },
    },
  });
}
