export const userLogin = (payload) => {
  return {
    type: "USER_LOGIN",
    payload: payload
  }
}

export const userLogout = () => {
  return{
    type: "USER_LOGOUT"
  }
}

export const userName = () => {
  console.log("user name")
  return{
    type: "USER_NAME"
  }
}