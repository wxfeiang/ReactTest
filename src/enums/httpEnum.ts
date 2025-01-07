/**
 * @description: 请求结果设置
 */
export enum ResultEnum {
  SUCCESS = 10000,
  FAIL = 10001,
  ERROR = 1,
  TIMEOUT = 401,
  TYPE = "success",
  CODE = 200
}

/**
 * @description: contentType
 */
export enum ContentTypeEnum {
  // json
  JSON = "application/json;charset=UTF-8",
  // form-data qs
  FORM_URLENCODED = "application/x-www-form-urlencoded;charset=UTF-8",
  // form-data  upload
  FORM_DATA = "multipart/form-data;charset=UTF-8"
}

export enum RequestEnum {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE"
}

export interface ResultData<T = any> {
  code: number
  data: T
  message: string
}
