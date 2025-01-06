interface loginParams {
  username: string
  password: string
  verifyCode: string
}
type Role = {
  id: string
  createTime: string
  updateTime: string
  createUser: string
  updateUser: string
  rId: string
  eId: string
}

type User = {
  id: string
  createTime: string
  updateTime: string
  createUser: string
  updateUser: string
  name: string
  birthday: string
  gender: number
  idNumber: string
  phone: string
  nickname: string | null
  email: string | null
  username: string
  status: number
  avatar: string
  pId: number
  remark: string | null
  role: Role[]
  token: string
}

export type { Role, User, loginParams }
