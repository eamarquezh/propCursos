import '/style.css'
import 'remixicon/fonts/remixicon.css'

const contenedor = document.getElementById('app');

const titulo = document.createElement('h1');
titulo.innerHTML = 'CEDULAB <i class="ri-graduation-cap-fill"></i>';

const subtitulo = document.createElement('h2');
subtitulo.innerHTML='Servicios de Consultoría Educativa y Laboral';


const slideContenedor = document.createElement('div');
slideContenedor.className='slider-container';

const slideSubItem1 = document.createElement('div');
slideSubItem1.className='slide';
slideSubItem1.innerHTML='<h3>Cursos alineados en Estándares de Competencia</h3>';

const slideSubItem2 = document.createElement('div');
slideSubItem2.className='slide';
slideSubItem2.innerHTML='<h3>Formación de Instructores, evaluadores y Verificadores Externos</h3>';

const slideSubItem3 = document.createElement('div');
slideSubItem3.className='slide';
slideSubItem3.innerHTML='<h3>Cursos a tu medida en diferentes funciones productivas y laborales</h3>';

const slideSubItem4 = document.createElement('div');
slideSubItem4.className='slide';
slideSubItem4.innerHTML='<h3>Certificaciones de Competencia Laboral avaladas por el CONOCER</h3>';



slideContenedor.appendChild(slideSubItem1);
slideContenedor.appendChild(slideSubItem2);
slideContenedor.appendChild(slideSubItem3);
slideContenedor.appendChild(slideSubItem4);


// Funciónes
function abrirChatWhatsApp() {
  window.open('https://wa.me/6612923092/?text=solicitud%20Informes', '_blank');
}

function createCard(title, imageSrc, price, contactLink, description) {
  var card = document.createElement('div');
  card.classList.add('card');

  var cardTitle = document.createElement('h3');
  cardTitle.textContent = title;

  var cardImage = document.createElement('img');
  cardImage.src = imageSrc;
  cardImage.alt = title;

  var cardPrice = document.createElement('p');
  cardPrice.innerHTML = price;

  var cardDescription = document.createElement('p');
  cardDescription.textContent = description;

  var contactButton = document.createElement('button');
  contactButton.innerHTML = 'Contactar <i class="ri-whatsapp-fill"></i>';
  contactButton.addEventListener('click', function () {
    window.open(contactLink, '_blank');
});

  card.appendChild(cardTitle);
  card.appendChild(cardImage);
  card.appendChild(cardPrice);
  card.appendChild(cardDescription);
  card.appendChild(contactButton);

  return card;
} 

        // Ejemplo de uso
        var bodyCard1 = document.createElement('div');
        bodyCard1.className="bodyCard";
        var card1 = createCard('CERTIFICACION 1 EC0217.01', 'curso1.jpg', '$2,500', 'https://wa.me/6612923092/?text=Informes%20curso1', 'Imparticion de cursos de formación de capital humano de manera presencial grupal.');
        var card3 = createCard('CERTIFICACIÓN 3 EC0091', 'curso3.jpg', '$2,500', 'https://wa.me/6612923092/?text=Informes%20curso3', 'Verificación externa de la operación de los centros de evaluación y evaluadores independientes.');
        var card2 = createCard('CERTIFICACIÓN 2 EC0301', 'curso2.jpg', '$2,500', 'https://wa.me/6612923092/?text=Informes%20curso2', 'Diseño de cursos de formación del capital humano de manera presencial grupal, sus instrumentos de evaluación y manuales del curso.');
        // Agregar las tarjetas al cuerpo del documento
        bodyCard1.appendChild(card1);
        bodyCard1.appendChild(card2);
        bodyCard1.appendChild(card3);


        var bodyCard2 = document.createElement('div');
        bodyCard2.className="bodyCard";
        
        var card4 = createCard('CERTIFICACIÓN 4 EC0076', 'curso4.jpg', '$2,500', 'https://wa.me/6612923092/?text=Informes%20curso4', 'Evaluación de la competencia de candidatos con base en Estándares de Competencia');
        var card5 = createCard('CERTIFICACIÓN 5 EC0305', 'curso5.jpg', '$2,500', 'https://wa.me/6612923092/?text=Informes%20curso5', 'Prestación de servicios de atención a clientes');
        // Agregar las tarjetas al cuerpo del documento
        bodyCard2.appendChild(card4);
        bodyCard2.appendChild(card5);

// Crear el botón de WhatsApp dinámicamente
var whatsappButton = document.createElement('button');
whatsappButton.id = 'whatsappButton';
whatsappButton.innerHTML = `<i class="ri-whatsapp-fill whatsapp-icon"></i>`;
whatsappButton.addEventListener('click', abrirChatWhatsApp);

// Agregar el botón al cuerpo del documento
document.body.appendChild(whatsappButton);


// Agregar elementos al contenedor
contenedor.appendChild(titulo);
contenedor.appendChild(subtitulo);
contenedor.appendChild(slideContenedor);
contenedor.appendChild(bodyCard1);
contenedor.appendChild(bodyCard2);

