let allResumes = null

async function gatherInfoFromJSON(){
    try {
        const response = await fetch("http://localhost:3000/resumes")
        const resumesObj = await response.json()
        .then((e) => {
            let listaOfResumes = e.resumes
            listaOfResumes.forEach((e) => {
                displayResumes(e)
            })
        })
    } catch (error) {
        if (error instanceof TypeError) {
            readJsonInFiles()
        }
    }
}

/**
 * This function is meant to run only when we dont have any server working,
 * like the "json-server". This could be fixed by using an VM
 */
async function readJsonInFiles(){
    try {
        const response = await fetch("../api/eeJobsAPI.json")
        const resumesList = await response.json()
        .then((e) => {
            let resumes = e.resumes
            resumes.forEach((resume) => {
                displayResumes(resume)
            })
        })    
        gatherAllCandidates()
    } catch (error) {
        console.log(`Error ${error.message}`)
    }
}

function gatherAllCandidates(){
    const candidates = document.querySelectorAll(".clickable__div")
    candidates.forEach((e) => {
        e.addEventListener("click", () => {
            sendToCandidatePage(e.id)
        })
    })
}

async function sendToCandidatePage(id, url){
    const response = await fetch(`http://localhost:3000/resumes/${id}`)
    const candidate = response.json()
    .then((e) => {
        localStorage.setItem("candidatoSelecionado", JSON.stringify(e))
        window.location.href = "candidate-profile.html"
    })
}
gatherInfoFromJSON()