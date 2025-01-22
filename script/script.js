let mailInput = document.querySelector('.mailInput')
let passwordInput = document.querySelector('.passwordInput')
let phoneInput = document.querySelector('.phoneInput')
let signUpButton = document.querySelector('.signUpButton')
let conditions = document.querySelector('.conditions')
let conditionsDiv = document.querySelector('.conditionsDiv')
let mailWarning = document.querySelector('.mailWarning')
let passWarning = document.querySelector('.passWarning')
let phoneWarning = document.querySelector('.phoneWarning')

let validateEmail = (email) => {
    const checkMail = /\S+@\S+\.\S+/
    return checkMail.test(email)
}

let validatePhone = (phone) => {
    const checkPhone = /(^8|\+7)((\d{10}))/
    return checkPhone.test(phone)
}

phoneInput.onclick = () => {
    phoneInput.value = '+'
}

signUpButton.onclick = () => {
    let mailValue = mailInput.value
    if (!validateEmail(mailValue)) {
        mailInput.style.border = '2px solid red'
        mailWarning.style = 'visibility: visible'
        mailInput.value = null
    }
    
    let passwordValue = passwordInput.value
    if (!passwordValue) {
        passwordInput.style.border = '2px solid red'
        passWarning.style = 'visibility: visible'
        passwordInput.value = null
    }

    let phoneValue = phoneInput.value
    if (!validatePhone(phoneValue)) {
        phoneInput.style.border = '2px solid red'
        phoneWarning.style = 'visibility: visible'
        phoneInput.value = null
    }

    if (!conditions.checked) {
        conditionsDiv.style.color = 'red'
    }
}
