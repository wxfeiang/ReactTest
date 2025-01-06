import { Login } from "@/api/system"
import { router } from "@/router"
import { loginParams, User } from "@/typings"

// import { resetPermissionRoutes } from "../router"
import {
  removeToken,
  setToken
} from "@/utils/token"

export const userStore = new (class {
  async login(data: loginParams) {
    try {
      const userInfo = await Login<User>(data)
      setToken(userInfo.token)
      router.navigate("/")
    } catch (error) {
      throw error
    }
  }

  user: any

  async fetchUser() {
    // this.user = await getUserInfo()
    // resetPermissionRoutes(this.user)
  }

  logout() {
    removeToken()
    this.user = undefined
    // resetPermissionRoutes()
  }
})()
