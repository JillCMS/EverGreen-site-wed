// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour changer la couleur de fond au survol
    function changeBackgroundColorOnHover(element, colors) {
        let originalColor = element.style.backgroundColor;

        element.addEventListener('mouseover', function() {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            this.style.backgroundColor = randomColor;
        });

        element.addEventListener('mouseout', function() {
            this.style.backgroundColor = originalColor;
        });
    }

    // Sélectionnez les éléments que vous souhaitez affecter
    const header = document.querySelector('header');
    const productSections = document.querySelectorAll('section');

    // Appliquez la fonction de changement de couleur de fond au survol aux éléments sélectionnés
    const secondaryColors = ['#505C44', '#8E916F'];

    changeBackgroundColorOnHover(header, secondaryColors);

    productSections.forEach(function(section) {
        changeBackgroundColorOnHover(section, secondaryColors);
    });

    // Fonction de défilement automatique du texte pour la section de description
    function autoScrollText(element, speed) {
        let scrollAmount = 0;

        function scroll() {
            element.scrollTop = scrollAmount;
            scrollAmount += 1;

            if (scrollAmount > element.scrollHeight - element.clientHeight) {
                scrollAmount = 0;
            }
        }

        setInterval(scroll, speed);
    }

    // Sélectionnez la section de description
    const descriptionSection = document.getElementById('description');

    // Appliquez la fonction de défilement automatique au texte de la section de description
    autoScrollText(descriptionSection, 50);
});