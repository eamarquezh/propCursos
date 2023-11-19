import '/style.css'
import WhatsApplogo from './whatsapp-fill.svg'
import 'remixicon/fonts/remixicon.css'

const contenedor = document.getElementById('app');

const titulo = document.createElement('h1');
titulo.textContent = 'Centro evaluador';

const subtitulo = document.createElement('h2');
subtitulo.textContent = 'Tu Éxito, Nuestra Medida: Centro Evaluador, Transformando Potencial en Resultados.';


// Funciónes
function abrirChatWhatsApp() {
  window.open('https://wa.me/7711208704/?text=solicitud%20Informes', '_blank');
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
  cardPrice.textContent = 'Precio: $' + price;

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
        var card1 = createCard('curso 1', 'curso1.jpg', 29.99, 'https://wa.me/7711208704/?text=Informes%20curso1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
        var card2 = createCard('curso 2', 'curso2.jpg', 39.99, 'https://wa.me/7711208704/?text=Informes%20curso2', 'Morbi blandit auctor malesuada. Praesent efficitur mollis pretium.');

        // Agregar las tarjetas al cuerpo del documento
        bodyCard1.appendChild(card1);
        bodyCard1.appendChild(card2);


        var bodyCard2 = document.createElement('div');
        bodyCard2.className="bodyCard";
        var card3 = createCard('curso 3', 'curso3.jpg', 29.99, 'https://wa.me/7711208704/?text=Informes%20curso3', 'Descripción del Producto 1');
        var card4 = createCard('curso 4', 'curso4.jpg', 39.99, 'https://wa.me/7711208704/?text=Informes%20curso4', 'Descripción del Producto 2');

        // Agregar las tarjetas al cuerpo del documento
        bodyCard2.appendChild(card3);
        bodyCard2.appendChild(card4);

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
contenedor.appendChild(bodyCard1);
contenedor.appendChild(bodyCard2);