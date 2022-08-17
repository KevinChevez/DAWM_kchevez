document
  .getElementById("selectorProds")
  .addEventListener("change", (eventSelect) => {
    // console.log(eventSelect.target);
    fetch(
      "https://dbnr-kch-proy3-dawm-default-rtdb.firebaseio.com/collection_products.json"
    )
      .then((response) => response.json())
      .then((data) => {
        let producto = document.getElementsByTagName("option")[
            eventSelect.target.selectedIndex
          ].innerHTML;
        console.log(producto);
        const arr_prods = data.filter( (prod) => {
            return prod.productoNombre == producto;
        })
        console.log(arr_prods)
        document.getElementById("tabla").innerHTML = '';
        for (let i = 0; i < arr_prods.length; i++) {
            // console.log(arr_prods)
            let plantilla = `<tr>
            <td>${arr_prods[i].id}</td>
            <td>${arr_prods[i].comprador.nombre} ${arr_prods[i].comprador.apellido}</td>
            <td>${arr_prods[i].fechaCompra}</td>
            <td>${arr_prods[i].valor}</td>
            <td>
              <a
                href="#"
                class="settings"
                title="Settings"
                data-toggle="tooltip"
                ><i class="material-icons">&#xE8B8;</i></a
              >
              <a href="#" class="delete" title="Delete" data-toggle="tooltip"
                ><i class="material-icons">&#xE5C9;</i></a
              >
            </td>
          </tr>
          `;
          document.getElementById("tabla").innerHTML += plantilla;
        }
      })
      .catch(console.error);
  });
