let ejecutarCodigo = () => {
    // alert('Hola, mundo!');
    // console.log("Aqui voy");

    let elemento;
    elemento = document.getElementById("titulo1");
    elemento.textContent = "Album de fotos";

    let arreglo = document.getElementsByClassName("text-muted");
    let elemento2 = arreglo[1];
    elemento2.innerHTML = `<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>`;

    let arreglo2;
    let elemento3;
    arreglo2 = document.getElementsByTagName("p");
    elemento3 = arreglo2[2];
    elemento3.setAttribute("class", "d-none");

    let arregloImgs = [ 
        { url: 'https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'camino'}, 
        { url: 'https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'energia'}, 
        { url: 'https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'papá'} 
    ];
    const svg = document.querySelectorAll("svg");
    // let elementos = [];
    for (let i = 0; i < arregloImgs.length; i++) {
        const img = document.createElement("img");
        img.setAttribute('src', arregloImgs[i].url);
        img.setAttribute('alt', arregloImgs[i].alt);

        // elementos.push(img);

        svg[i+1].parentNode.replaceChild(img, svg[i+1]);
    }
    // svg.parentNode.replaceChildren(elementos, svg);
};
ejecutarCodigo();
