/**
 *  登录
 * @param params
 */

import { request } from "@/utils/http"
import { RequestBody } from "alova"

const LOGIN = "/api/v1/employee/login"
const GET_USER_INFO =
  "/api/v1/employee/getUserMenu"

export function Login<T>(
  data: RequestBody | undefined
) {
  return request.Post<T>(
    LOGIN, // 地址
    data
  )
}

export function getUserMenu<T>(
  data: RequestBody | undefined
) {
  return request.Post<T>(GET_USER_INFO, data)
}
