async function gatherInfoFromJSON(){
    const response = await fetch("http://localhost:3000/resumes")
    const resumesObj = response.json()
    .then((e) => {
        let listaOfResumes = e
        listaOfResumes.forEach((e) => {
            displayResumes(e)
        })
    })
}

gatherInfoFromJSON()