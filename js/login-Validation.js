const loginForm = document.getElementById("login-form")
const signinForm = document.getElementById("signin-form")

const loginInputs = document.querySelectorAll("#login-form input")
const signinInputs = document.querySelectorAll("#signin-form input")

function watchInputs (nodeList, type) {
    nodeList.forEach((elem) => {
        elem.addEventListener("blur", (e) => {
            let element = e.target
            if (type == "login") {
                verifyLoginInElems(element, element.name)
            } else if (type == "signin"){
                verifySignInElems(element, element.name)
            }
        })
    })
}

function verifyLoginInElems (elem, fieldName) {
    if (fieldName == "email-login") {
        let passwordIsValid = verifyPassword(elem.value, 7)
        if (passwordIsValid) {
            addValidField(elem)
        } else {
            addInvalidField(elem)
        }
    } else if (fieldName == "password-login") {
        let emailIsValid = verifyEmail(elem.value)
        if (emailIsValid) {
            addValidField(elem)
        } else {
            addInvalidField(elem)
        }
    }
}

function verifySignInElems (elem, fieldName) {
    if (fieldName == "name-signin") {
        let nameIsValid = verifyNameSignIn(elem.value, 3)
        if (nameIsValid) {
            addValidField(elem)
        } else {
            addInvalidField(elem)
        }
    } else if (fieldName == "surname-signin") {
        let surnameIsValid = verifyNameSignIn(elem.value, 4)
        if (surnameIsValid) {
            addValidField(elem)
        } else {
            addInvalidField(elem)
        }
    } else if (fieldName == "email-signin") {
        let emailIsValid = verifyEmail(elem.value)
        if (emailIsValid) {
            addValidField(elem)
        } else {
            addInvalidField(elem)
        }
    }
}

function verifyPassword (elem, lenght) {
    if (elem.length <= lenght) {
        return false
    }
    return true
}

function verifyNameSignIn (name, lenght) {
    if (name.length <= lenght) {
        return false
    }
    return true
}

function addValidField (elem) {
    elem.classList.remove("invalid")
    elem.classList.add("valid")
}

function addInvalidField (elem) {
    elem.classList.remove("valid")
    elem.classList.add("invalid")
}

function verifyEmail (elem) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(elem)
}

watchInputs(loginInputs, "login")
watchInputs(signinInputs, "signin")