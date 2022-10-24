const ucf = `
    <div id="ucf">
        <style>
            #ucf *, #ucf *::before, #ucf *::after {
                box-sizing: border-box;
            }
            #ucf a {
                display: flex;
                justify-content: center;
                align-self: center;
                width: 100%;
            }
            #ucf img {
                max-width: 100%;
            }
            #ucf .row {
                display: flex;
                flex-wrap: wrap;
            }
            #ucf .row > * {
                flex-shrink: 0;
                width: 100%;
                max-width: 100%;
                padding: 1rem;
                display: flex;
            }
            #ucf .col-6 {
                flex: 0 0 auto;
                width: 50%;
            }
            #ucf .col-12 {
                flex: 0 0 auto;
                width: 100%;
            }
            #ucf .w-75 {
                width: 75%;
            }
            @media (min-width: 992px) {
                #ucf .col-lg-3 {
                    flex: 0 0 auto;
                    width: 25%;
                }
                #ucf .col-lg-9 {
                    flex: 0 0 auto;
                    width: 75%;
                }
            }
        </style>
        <div class="row">
            <div class="col-12 col-lg-3" style="padding: 1.5rem 2rem;">
                <a target="_blank" rel="noopener">
                    <img src="https://cdn.jsdelivr.net/gh/Alpha-Editions/internal-implementations@main/universal-corporate-footer/assets/alphaeditions.png" alt="" style="max-width: 300px;">
                </a>
            </div>
            <div class="col-12 col-lg-9" style="padding: 1.5rem 2rem;">
                <div class="row" style="justify-content: center;">
                    <div class="col-6 col-lg-3">
                        <a href="https://provocateur.gr/" target="_blank" rel="noopener">
                            <img src="https://cdn.jsdelivr.net/gh/Alpha-Editions/internal-implementations@main/universal-corporate-footer/assets/provocateur.png" alt="">
                        </a>
                    </div>
                    <div class="col-6 col-lg-3">
                        <a href="https://gr.hellomagazine.com/" target="_blank" rel="noopener">
                            <img src="https://cdn.jsdelivr.net/gh/Alpha-Editions/internal-implementations@main/universal-corporate-footer/assets/hello.png" alt="" class="w-75">
                        </a>
                    </div>
                    <div class="col-6 col-lg-3">
                        <a href="https://www.4troxoi.gr/" target="_blank" rel="noopener">
                            <img src="https://cdn.jsdelivr.net/gh/Alpha-Editions/internal-implementations@main/universal-corporate-footer/assets/4troxoi.png" alt="" class="w-75">
                        </a>
                    </div>
                    <div class="col-6 col-lg-3">
                        <a href="https://www.thenotebook.gr/" target="_blank" rel="noopener">
                            <img src="https://cdn.jsdelivr.net/gh/Alpha-Editions/internal-implementations@main/universal-corporate-footer/assets/thenotebook.png" alt="">
                        </a>
                    </div>
                    <div class="col-6 col-lg-3">
                        <a href="https://www.faysbook.gr/" target="_blank" rel="noopener">
                            <img src="https://cdn.jsdelivr.net/gh/Alpha-Editions/internal-implementations@main/universal-corporate-footer/assets/faysbook.png" alt="">
                        </a>
                    </div>
                    <div class="col-6 col-lg-3">
                        <a href="https://nitro.gr/" target="_blank" rel="noopener">
                            <img src="https://cdn.jsdelivr.net/gh/Alpha-Editions/internal-implementations@main/universal-corporate-footer/assets/nitro.png" alt="" class="w-75">
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