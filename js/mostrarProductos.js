// Datos de categorías
const categorias = {
    "Bebidas": {
        Img: ["../img/coca.jpg", ""],
        Title: ["Coca-Cola 600ml", ""],
        Precios: ["$20.00", ""],
        Descripciones: ["Refresco Coca Cola sabor original 600 ml", ""]
    },
    "Galletas": {
        Img: ["../img/", "../img/"],
        Title: ["", ""],
        Precios: ["$", "$"],
        Descripciones: ["", ""]
    },
    "Botanas": {
        Img: ["../img/doritos.png", "../img/"],
        Title: ["Doritos xtra flamin’ hot", ""],
        Precios: ["$18.00", "$"],
        Descripciones: ["Botana Doritos xtra flamin’ hot 61 g", ""]
    }
};

// Datos de productos más vendidos
const masVendidos = {
    Img: [
        "../img/coca.jpg",
        "../img/doritos.png",
        "../img/chilaquilesVerdes.png",
        "../img/tortaJamon.jpg"
    ],
    Title: [
        "Coca-Cola 600ml",
        "Doritos xtra flamin’ hot",
        "Chilaquiles",
        "Torta de jamón"
    ],
    Precios: [
        "$20.00",
        "$18.00",
        "$45.00",
        "$45.00"
    ],
    Descripciones: [
        "Refresco Coca Cola sabor original 600 ml",
        "Botana Doritos xtra flamin’ hot 61 g",
        "Chilaquiles verdes con pollo",
        "Torta de jamón con lechuga y jitomate"
    ]
};

// Datos de marcas
const marcas = {
    "Gamesa": {
        Img: ["../img/", "../img/"],
        Title: ["", ""],
        Precios: ["$", "$"],
        Descripciones: ["", ""]
    },
    "Coca-cola": {
        Img: ["../img/coca.jpg", "../img/"],
        Title: ["Coca-Cola 600ml", ""],
        Precios: ["$20.00", "$"],
        Descripciones: ["Refresco Coca Cola sabor original 600 ml", ""]
    },
    "Doritos": {
        Img: ["../img/doritos.png", "../img/"],
        Title: ["Doritos xtra flamin’ hot", ""],
        Precios: ["$20.00", "$"],
        Descripciones: ["Botana Doritos xtra flamin’ hot 61 g", ""]
    }
};

//FUNCION GENERAL PARA MOSTRAR LOS CARDS
function mostrarProductos(imgArray, titleArray, priceArray, descArray) {
    const container = document.getElementById("product-cards-container");
    container.innerHTML = ''; // Limpiar el contenedor antes de añadir las tarjetas

    imgArray.forEach((url, index) => {
        const cardHTML = `
            <div class="col-md-3 mb-2">
                <div class="card h-100">
                    <img src="${url}" class="card-img-top" height="60%" alt="${titleArray[index]}">
                    <div class="card-body">
                        <h3 class="card-title">${titleArray[index]}</h3>
                        <p class="card-text">${priceArray[index]}</p>
                        <p class="card-text">${descArray[index]}</p>
                        <div class="container mt-3">
                            <div class="row justify-content-center">
                                <button class="btn btn-success col-md-3 mb-2 me-2">+</button>
                                <input disabled type="number" class="col-md-3 mb-2 me-2">
                                <button class="btn btn-danger col-md-3 mb-2">-</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// Al cargar la página, en automático se muestran los más vendidos
window.addEventListener("load", () => {
    mostrarProductos(masVendidos.Img, masVendidos.Title, masVendidos.Precios, masVendidos.Descripciones);
});

// Mostrar por CATEGORIAS
const categorySelect = document.getElementById("SelectCategoria");
const titulo = document.getElementById("titSeccion");

categorySelect.addEventListener("change", (event) => {//cuando select Categorias cambia, se muestra la categoria correspondiente
    const selectedCategory = event.target.value;

    const categoriaSeleccionada = categorias[selectedCategory];
    titulo.innerHTML = `Categoría de ${selectedCategory}`;

    if (categoriaSeleccionada) {
        mostrarProductos(categoriaSeleccionada.Img, categoriaSeleccionada.Title, categoriaSeleccionada.Precios, categoriaSeleccionada.Descripciones);
    }
});

//Mostrar por MARCAS
const categorySelectMarca = document.getElementById("SelectMarca");

categorySelectMarca.addEventListener("change", (event) => {
    const selectedCategory = event.target.value;

    const marcaSeleccionada = marcas[selectedCategory];
    titulo.innerHTML = `Productos de marca ${selectedCategory}`;

    if (marcaSeleccionada) {
        mostrarProductos(marcaSeleccionada.Img, marcaSeleccionada.Title, marcaSeleccionada.Precios, marcaSeleccionada.Descripciones);
    }
});


