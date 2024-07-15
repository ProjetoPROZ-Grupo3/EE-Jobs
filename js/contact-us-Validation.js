const inputsFormulary = document.querySelectorAll(".formulario-empresas")
const btnSubmit = document.getElementById("submit-company-form")
const formCompany = document.getElementById("company-form")

formCompany.addEventListener("submit", (e) => {
    e.preventDefault()
})

function watchTheInputs (nodeList) {
    nodeList.forEach((elem) => {
        elem.addEventListener("focus", (e) => {
        })

        elem.addEventListener("blur", (e) => {
            let value = e.target.value
            verifyAfterBlur(e)
        })
    })
}

function verifyAfterBlur (elem) {
    let selectedElem = elem.target
    if (selectedElem.name == "companyName") {
        let companyValid = isCompanyValid(selectedElem)
        if (companyValid) {
            addValidField(selectedElem)
        } else {
            addInvalidField(selectedElem)
        }

    } else if (selectedElem.name == "companyEmail") {
        let isEmailValid = isCompanyEmailValid(selectedElem.value)
        if (isEmailValid){
            addValidField(selectedElem)
        } else {
            addInvalidField(selectedElem)
        }

    } else if (selectedElem.name == "companySector") {
        let sectorValid = isSectorValid(selectedElem)
        if (sectorValid) {
            addValidField(selectedElem)
        } else {
            addInvalidField(selectedElem)
        }

    } else {
        let intentionValid = isIntentionValid(selectedElem)
        if (intentionValid) {
            addValidField(selectedElem)
        } else {
            addInvalidField(selectedElem)
        }
    }
}

function addValidField (e) {
    e.classList.remove("invalid")
    e.classList.add("valid")
}

function addInvalidField (e) {
    e.classList.remove("valid")
    e.classList.add("invalid")
}

function isCompanyValid (e) {
    let companyName = e.value
    if (companyName.length <= 6){
        return false
    }
    return true
}

function isSectorValid (e) {
    let sectorValue = e.value
    if (sectorValue == "placeholder") {
        return false
    }
    return true
}

function isIntentionValid (e) {
    let intentionValue = e.value
    if (intentionValue == "placeholder") {
        return false
    }
    return true
}

function isCompanyEmailValid (e) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e)
}

watchTheInputs(inputsFormulary)