/**
 *  登录
 * @param params
 */

import { request } from "@/utils/http"
import { RequestBody } from "alova"

const LOGIN = "/api/v1/employee/login"
export function Login<T>(
  data: RequestBody | undefined
) {
  return request.Post<T>(
    LOGIN, // 地址
    data
  )
}
