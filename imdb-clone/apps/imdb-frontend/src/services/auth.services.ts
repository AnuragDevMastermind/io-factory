import { LoginData, SignUpData } from "../types/auth"
import http from "../Utils/http-common"
import { LOGIN_ENDPOINT, SIGNUP_ENDPOINT } from "../constants/strings"

class AuthServices {
  register(signUpData: SignUpData) {
    return http.post<String>(SIGNUP_ENDPOINT, signUpData)
  }
  login(loginData: LoginData) {
    return http.post<String>(LOGIN_ENDPOINT, loginData)
  }
}

export default new AuthServices()
