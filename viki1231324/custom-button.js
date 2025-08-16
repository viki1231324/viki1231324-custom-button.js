// Création du bouton
const customButton = document.createElement('button');

// Style CSS (modifiable)
customButton.innerHTML = 'Cliquez-moi !';
customButton.style.backgroundColor = '#4CAF50';
customButton.style.color = 'white';
customButton.style.padding = '12px 24px';
customButton.style.border = 'none';
customButton.style.borderRadius = '4px';
customButton.style.cursor = 'pointer';
customButton.style.fontSize = '16px';
customButton.style.transition = 'background-color 0.3s';

// Effet hover
customButton.onmouseover = () => {
  customButton.style.backgroundColor = '#45a049';
};
customButton.onmouseout = () => {
  customButton.style.backgroundColor = '#4CAF50';
};

// Action au clic
customButton.onclick = () => {
  alert('Bouton cliqué !');
  // Optionnel : Redirection ou autre logique
  // window.location.href = 'https://www.exemple.com';
};

// Ajout du bouton à la page
document.currentScript.parentNode.appendChild(customButton);
