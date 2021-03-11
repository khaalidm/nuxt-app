export const state = () => ({
  gender: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  height: 0.0,
  weight: 0.0,
  isSick: false,
})

export const mutations = {
  resetData(state) {
    Object.keys(state.data).forEach(function (key) {
      state[key] = ''
    })
  },
  setFirstName(state, fName) {
    localStorage.setItem('firstName', fName)
    state.firstName = fName
  },
  setLastName(state, lName) {
    localStorage.setItem('lastName', lName)
    state.lastName = lName
  },
  setGender(state, gender) {
    localStorage.setItem('gender', gender)
    state.gender = gender
  },
  setPhoneNumber(state, phoneNumber) {
    localStorage.setItem('phoneNumber', phoneNumber)
    state.phoneNumber = phoneNumber
  },
  setEmail(state, email) {
    localStorage.setItem('email', email)
    state.email = email
  },
  setHeight(state, height) {
    localStorage.setItem('height', height)
    state.height = height
  },
  setWeight(state, weight) {
    localStorage.setItem('weight', weight)
    state.weight = weight
  },
  setIsSick(state, isSick) {
    localStorage.setItem('isSick', isSick)
    state.isSick = isSick
  },
}
