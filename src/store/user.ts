import { getUserMenu, Login } from "@/api/system"
import { router } from "@/router"
import { loginParams, User } from "@/typings"
import { setStorage } from "@/utils/storge"


// import { resetPermissionRoutes } from "../router"


export const userStore = new (class {
  user: User | undefined = undefined
  menu: any[] = []

  async login(data: loginParams) {
    try {
      const userInfo = await Login<User>(data)
      this.user = userInfo
      setStorage("userInfo", userInfo,)
      router.navigate("/")
    } catch (error) {
      throw error
    }
  }




  async getMenu() {
    this.menu = await getUserMenu({
      id: this.user!.id
    })
    console.log("🍾", this.menu)
    // resetPermissionRoutes(this.user)
  }

  logout() {
    // removeToken()
    this.user = undefined
    // resetPermissionRoutes()
  }
})()
