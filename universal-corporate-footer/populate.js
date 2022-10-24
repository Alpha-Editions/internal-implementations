const container = document.getElementById('ucf-container');

if (container != null) {
    const shadow = container.attachShadow({mode: 'open'});

    fetch('https://cdn.jsdelivr.net/gh/Alpha-Editions/internal-implementations@main/universal-corporate-footer/template.html').then(function(response) {
        shadow.innerHTML = response;
    });
}