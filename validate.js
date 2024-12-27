let isInvalid = {
    email: (value) => {
        if (!value) return "Please add you email here"
        if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(value)) return "Whoops, make sure it’s an email"
        return false
    }
}
let form = document.querySelector('form')
let input = document.querySelector('input[name="email"]')
let hanldeError = (inValid) => {
    input.toggleAttribute("error", inValid ? true : false)
    input.nextElementSibling.textContent = inValid
}
let handleSubmit = (e) => {
    e.preventDefault()
    let data = Object.fromEntries(new FormData(form))
    for (const key in data) {
        let inValid = isInvalid[key](data[key])
        hanldeError(inValid)
    }

}
form.addEventListener('submit', handleSubmit)