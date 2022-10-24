const container = document.getElementById('ucf-container');

if (container != null) {
    const shadow = container.attachShadow({mode: 'open'});

    fetch('template.html').then(function(response) {
        shadow.innerHTML = response;
    });
}