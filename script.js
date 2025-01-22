let mailInput = document.querySelector('.mailInput')
let passwordInput = document.querySelector('.passwordInput')
let phoneInput = document.querySelector('.phoneInput')
let signUpButton = document.querySelector('.signUpButton')
let conditions = document.querySelector('.conditions')
let conditionsDiv = document.querySelector('.conditionsDiv')

let validateEmail = (email) => {
    const checkMail = /\S+@\S+\.\S+/
    return checkMail.test(email)
}

let validatePhone = (phone) => {
    const checkPhone = /(^8|\+7)((\d{10}))/
    return checkPhone.test(phone)
}

signUpButton.onclick = () => {
    let mailValue = mailInput.value
    if (!validateEmail(mailValue)) {
        mailInput.style.border = '2px solid red'
    }
    
    let passwordValue = passwordInput.value
    if (!passwordValue) {
        passwordInput.style.border = '2px solid red'
    }

    let phoneValue = phoneInput.value
    if (!validatePhone(phoneValue)) {
        phoneInput.style.border = '2px solid red'
    }

    if (!conditions.checked) {
        conditionsDiv.style.color = 'red'
    }
}
