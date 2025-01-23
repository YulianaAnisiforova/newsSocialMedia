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
    } else {
        mailInput.style.border = '2px solid rgb(250, 250, 250)'
        mailWarning.style = 'visibility: hidden'
    }
    
    let passwordValue = passwordInput.value
    if (!passwordValue) {
        passwordInput.style.border = '2px solid red'
        passWarning.style = 'visibility: visible'
        passwordInput.value = null
    } else {
        passwordInput.style.border = '2px solid rgb(250, 250, 250)'
        passWarning.style = 'visibility: hidden'
    }

    let phoneValue = phoneInput.value
    if (!validatePhone(phoneValue)) {
        phoneInput.style.border = '2px solid red'
        phoneWarning.style = 'visibility: visible'
        phoneInput.value = null
    } else {
        phoneInput.style.border = '2px solid rgb(250, 250, 250)'
        phoneWarning.style = 'visibility: hidden'
    }

    if (!conditions.checked) {
        conditionsDiv.style.color = 'red'
    } else {
        conditionsDiv.style.color = 'rgb(71, 71, 71)'
    }
}
