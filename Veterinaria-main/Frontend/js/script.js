// Obtención de elementos 
const form = document.getElementById('citaForm');
const mensajeDiv = document.getElementById('mensaje');

// Envío del formulario
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Obtención de datos del formulario
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
        // Envío de los datos del formulario mediante una solicitud POST
        const response = await fetch('http://localhost:3000/guardar_cita', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Error al guardar la cita');
        }

        // Manejo de la respuesta
        const result = await response.json();
        mensajeDiv.textContent = result.message;

    } catch (error) {
        // Manejo de errores
        mensajeDiv.textContent = 'Error al procesar la solicitud';
        console.error('Error:', error);
    }
});

// Función para controlar el botón de scroll hacia arriba
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTop").style.display = "block";
    } else {
        document.getElementById("scrollToTop").style.display = "none";
    }
}

// Función para realizar el scroll hacia arriba al hacer clic en el botón correspondiente
document.getElementById("scrollToTop").onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// Funciones para manejar el popup de información sobre razas de perros
function openPopup(breed, title) {
    let popupContent = '';
    switch (breed) {
        case 'perrolobo':
            // Contenido del popup para la raza "Perro Lobo"
            popupContent = "El Perro Lobo, también conocido como Perro Lobo Checoslovaco, es una raza híbrida resultado del cruce entre lobos y perros domésticos. <br><br> Son animales impresionantes, con una apariencia salvaje y un temperamento leal. Debido a su herencia de lobo, los Perros Lobos suelen ser más independientes que otras razas, pero pueden formar fuertes lazos con sus dueños cuando se socializan adecuadamente. <br><br> Requieren un manejo especializado y una socialización temprana para ser buenos compañeros.";
            break;
        case 'pomerania':
            // Contenido del popup para la raza "Pomerania"
            popupContent = "El Pomerania, también conocido como Spitz enano alemán, es una raza pequeña de perros de origen alemán. <br><br> A pesar de su tamaño diminuto, los Pomeranias son conocidos por su gran personalidad. Son animales valientes, curiosos y llenos de energía, lo que los convierte en excelentes compañeros para personas activas. <br><br> Su pelaje exuberante y esponjoso requiere un cuidado regular para mantenerlo en óptimas condiciones, pero su naturaleza afectuosa y juguetona hace que valga la pena el esfuerzo.";
            break;
        case 'chowchow':
            // Contenido del popup para la raza "Chow Chow"
            popupContent = "El Chow Chow es una antigua raza de perros originaria de China. Con su distintivo pelaje abundante y su lengua de color negro-azulado, el Chow Chow es fácilmente reconocible. <br><br> Esta raza es conocida por su temperamento independiente y reservado, pero también puede ser leal y protectora con su familia. Los Chow Chow necesitan una socialización temprana y un entrenamiento consistente para superar su tendencia a la timidez y la agresividad hacia extraños. <br><br> Son perros inteligentes y dignos que pueden ser excelentes compañeros para dueños pacientes y dedicados.";
            break;
        case 'referencias':
            // Contenido del popup para las referencias
            popupContent = `
                <ul>
                    <li>Coppola, M. (2023, julio 19). <i>Etiquetas de HTML: qué son, para qué sirven y tipos principales.</i> Hubspot.es. <a href="https://blog.hubspot.es/website/etiquetas-html">https://blog.hubspot.es/website/etiquetas-html</a></li>
                    <li>La guía de estilo web: concepto de diseño para páginas web. (2023, septiembre 27). IONOS Digital Guide; IONOS. <a href="https://www.ionos.es/digitalguide/paginas-web/diseno-web/la-guia-de-estilo-perfecta-para-paginas-web/">https://www.ionos.es/digitalguide/paginas-web/diseno-web/la-guia-de-estilo-perfecta-para-paginas-web/</a></li>
                    <li>Singh, G. (2023, noviembre 27). <i>Más de 26 de los mejores sitios web minimalistas para inspirarte (2024 actualizado).</i> Pixpa. <a href="https://www.pixpa.com/es/blog/best-minimalist-websites">https://www.pixpa.com/es/blog/best-minimalist-websites</a></li>
                    <li>Soloaga, C. D. (2021, abril 20). <i>Guía de estilo web, cómo crearla en pocos pasos para tu proyecto.</i> Social Media Pymes. <a href="https://www.socialmediapymes.com/guia-de-estilo-web/">https://www.socialmediapymes.com/guia-de-estilo-web/</a></li>
                    <li>Teoría del Color - Concepto, propiedades del color, RGB y CMYK. Recuperado 11 de abril de 2024, de <a href="https://concepto.de/teoria-del-color/">https://concepto.de/teoria-del-color/</a></li>
                    <li>Varangouli, E. (2023, enero 20). <i>Lista de tags HTML: hoja de trucos HTML. ¿Qué son y para qué sirven?</i> Semrush Blog; Semrush. <a href="https://es.semrush.com/blog/lista-de-html-tags/">https://es.semrush.com/blog/lista-de-html-tags/</a></li>
                    <li>Villalobos, C. (2021, noviembre 18). <i>¿Qué es la teoría del color? Definición y características.</i> Hubspot.es. <a href="https://blog.hubspot.es/marketing/teoria-del-color">https://blog.hubspot.es/marketing/teoria-del-color</a></li>
                </ul>`;
            break;
        default:
            break;
    }

    // Mostrar el popup con el contenido correspondiente
    let popup = document.getElementById('popup');
    let popupTitle = document.getElementById('popup-title');
    let popupContentElement = document.getElementById('popup-content');
    popup.style.display = 'block';
    popupTitle.textContent = title;
    popupContentElement.innerHTML = popupContent;
}

// Función para cerrar el popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}