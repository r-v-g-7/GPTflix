
const validation = (email, password) => {
    const isEmailValid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$/.test(email)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(password)

    if (!isEmailValid) return "Email is Invalid"
    if (!isPasswordValid) return "Password is not Valid"

    return null
}

export default validation