const ucf = `
    <div id="ucf">
        <link href="https://github.com/twbs/bootstrap/blob/main/dist/css/bootstrap-grid.min.css">
        <style>
            #ucf *, #ucf *::before, #ucf *::after {
                box-sizing: border-box;
            }
            #ucf a {
                display: flex;
                justify-content: center;
                align-self: center;
                width: 100%;
                padding-top: 1rem;
                padding-bottom: 1rem;
            }
            #ucf .img-fluid {
                max-width: 100%;
                height: auto;
            }
            #ucf .w-75 {
                width: 75%;
            }
            #ucf .d-flex {
                display: flex;
            }
        </style>
        <div class="row">
            <div class="col-12 d-flex" style="padding: 1.5rem 0 2rem 0;">
                <a target="_blank" rel="noopener">
                    <img src="https://cdn.jsdelivr.net/gh/Alpha-Editions/internal-implementations@main/universal-corporate-footer/assets/alphaeditions.png" alt="" class="img-fluid" style="max-width: 250px;">
                </a>
            </div>
            <div class="col-12" style="padding: 1.5rem 2rem;">
                <div class="row" style="justify-content: center;">
                    <div class="col-6 col-md-4 col-xl-2 d-flex">
                        <a href="https://provocateur.gr/" target="_blank" rel="noopener">
                            <img src="https://cdn.jsdelivr.net/gh/Alpha-Editions/internal-implementations@main/universal-corporate-footer/assets/provocateur.png" alt="" class="img-fluid">
                        </a>
                    </div>
                    <div class="col-6 col-md-4 col-xl-2 d-flex">
                        <a href="https://gr.hellomagazine.com/" target="_blank" rel="noopener">
                            <img src="https://cdn.jsdelivr.net/gh/Alpha-Editions/internal-implementations@main/universal-corporate-footer/assets/hello.png" alt="" class="w-75 img-fluid">
                        </a>
                    </div>
                    <div class="col-6 col-md-4 col-xl-2 d-flex">
                        <a href="https://www.4troxoi.gr/" target="_blank" rel="noopener">
                            <img src="https://cdn.jsdelivr.net/gh/Alpha-Editions/internal-implementations@main/universal-corporate-footer/assets/4troxoi.png" alt="" class="w-75 img-fluid">
                        </a>
                    </div>
                    <div class="col-6 col-md-4 col-xl-2 d-flex">
                        <a href="https://www.thenotebook.gr/" target="_blank" rel="noopener">
                            <img src="https://cdn.jsdelivr.net/gh/Alpha-Editions/internal-implementations@main/universal-corporate-footer/assets/thenotebook.png" alt="" class="img-fluid">
                        </a>
                    </div>
                    <div class="col-6 col-md-4 col-xl-2 d-flex">
                        <a href="https://www.faysbook.gr/" target="_blank" rel="noopener">
                            <img src="https://cdn.jsdelivr.net/gh/Alpha-Editions/internal-implementations@main/universal-corporate-footer/assets/faysbook.png" alt="" class="img-fluid">
                        </a>
                    </div>
                    <div class="col-6 col-md-4 col-xl-2 d-flex">
                        <a href="https://nitro.gr/" target="_blank" rel="noopener">
                            <img src="https://cdn.jsdelivr.net/gh/Alpha-Editions/internal-implementations@main/universal-corporate-footer/assets/nitro.png" alt="" class="w-75 img-fluid">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

const ucfContainer = document.getElementById('ucf-container');

if (ucfContainer != null) {
    ucfContainer.innerHTML = ucf;
}