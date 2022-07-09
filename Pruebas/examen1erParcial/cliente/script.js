// const API = "https://damp-beach-17296.herokuapp.com/https://dataserverdaw.herokuapp.com/recetas";
const API = "http://localhost:8080/DAWM_kchevez/Pruebas/examen1erParcial/servidor/recetas.json";
const container_encabezado = document.getElementById("encabezado");
const container_tiempos = document.getElementById("tiempos");
const container_ingredientes = document.getElementById("ingre_lista");
const container_instrucciones = document.getElementById("instru_p");
const container_vegetarian = document.getElementById("vegeta_lista");
const container_fusion = document.getElementById("fusion_lista");

window.onload = function () {
    fetch(API)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let tituloInner = data.recipes[0].TranslatedRecipeName;
            let ellink = data.recipes[0].URL;
            let titulo = 
            `<div id="contenedorTitulo" onclick="location.href='${ellink}'" style="cursor:pointer" >
                <h1>${tituloInner}</h1>
            </div>
            <aside id="tipos">
                <p id="fusion_box" style="cursor:pointer">Fusion</p>
                <p id="sdish_box" style="cursor:pointer">Side Dish</p>
                <p id="vegeta_box" style="cursor:pointer">Vegetarian</p>
            </aside>
            `
            ;
            container_encabezado.innerHTML += titulo;

            let prepTime = data.recipes[0].PrepTimeInMins;
            let cookTime = data.recipes[0].CookTimeInMins;
            let totalTime = data.recipes[0].TotalTimeInMins;
            let tiemposInner =
                `<div class="subtimes">
                    <div class="circle"><p>${prepTime}'</p></div>
                    <h2>Preparación</h2>
                </div>
                <div class="subtimes">
                    <div class="circle"><p>${cookTime}'</p></div>
                    <h2>Cocción</h2>
                </div>
                <div class="subtimes">
                    <div class="circle"><p>${totalTime}'</p></div>
                    <h2>Tiempo total</h2>
                </div>`
            ;
            container_tiempos.innerHTML = tiemposInner;

            let listaIngre = data.recipes[0].TranslatedIngredients.split(",");
            for (const elemento of listaIngre) {
                let ingreLisInner = `<label><input type="checkbox">&nbsp${elemento}</label><br></br>`;
                container_ingredientes.innerHTML += ingreLisInner;
            }

            let textInstruct = data.recipes[0].TranslatedInstructions;
            container_instrucciones.innerHTML = textInstruct;

            let listaRecipes = data.recipes;

            document.getElementById("vegeta_box").addEventListener("click", ()=>{
                let diet_act = listaRecipes[0].Diet;
                let listaRecorrer = listaRecipes.filter((receta)=>{
                    return receta.Diet == diet_act;
                })
                for (const name_recipe of listaRecorrer) {
                    let innerListVeg = `<li>${name_recipe.TranslatedRecipeName}</li>`;
                    container_vegetarian.innerHTML += innerListVeg;
                }
            })
            
            document.getElementById("fusion_box").addEventListener("click", ()=>{
                let cuisine_act = listaRecipes[0].Cuisine;
                let listaRecorrer = listaRecipes.filter((receta)=>{
                    return receta.Cuisine == cuisine_act;
                })
                for (const name_recipe of listaRecorrer) {
                    let innerListVeg = `<li>${name_recipe.TranslatedRecipeName}</li>`;
                    container_fusion.innerHTML += innerListVeg;
                }
            })
        })
        // .catch((error) => {
        //     document.write(error);
        // })
    ;
    console.log("Hola");
}