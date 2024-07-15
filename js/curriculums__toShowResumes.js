const caixaDeCurriculos = document.getElementById("listaDeCurriculos")

function displayResumes(curriculos){
    const resumeCard = `
    <div class="card col-12 col-sm-12 offset-sm-0 col-md-6 col-lg-4 clickable__div" id="${curriculos.id}">
            <div class="card-body">
                <div class="text-center">
                    <img class="img-fluid" src="assets/logo_ee_old.png">
                </div>
                <h4 class="lead text-center font-weight-bold">${curriculos.name}</h4>
                <p>
                    <ul class="list-unstyled">
                        <li>${curriculos.age} anos, ${curriculos.gender};</li>
                        <li>${curriculos.generalRole};</li>
                        <li>${curriculos.lastJob};</li>
                        <li>${curriculos.address.city} — ${curriculos.address.state}</li>
                    </ul>
                </p>
            </div>
    </div>
    `

    caixaDeCurriculos.innerHTML += resumeCard
}