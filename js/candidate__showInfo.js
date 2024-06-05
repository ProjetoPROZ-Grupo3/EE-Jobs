let curriculosNaTela = null
const currentWindow = window
currentWindow.addEventListener("load", () => {
    console.log("Aba")
    curriculosNaTela = document.querySelectorAll(".curriculum__diff")
    curriculosNaTela.forEach((curriculo) => {
        curriculo.addEventListener("click", (infos) => {
            infos.preventDefault()
            let userDecision = confirm("Deseja ver o perfil de X?")
            let result = userDecision? window.open("candidate-profile.html") : ""
        })
    })
})

async function openCandidateProfile(obj){
    const requisition = await fetch("http://localhost:3000/resumes")
    const value = requisition.json()
    .then((e) => {
        
    })
}