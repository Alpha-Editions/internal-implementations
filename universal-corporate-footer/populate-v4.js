const ucfContainer = document.getElementById('ucf-container');

if (ucfContainer != null) {
    fetch('https://cdn.jsdelivr.net/gh/Alpha-Editions/internal-implementations@main/universal-corporate-footer/template.html').then(function(response) {
        ucfContainer.innerHTML = response.text();
    });
}