import {
  ContentTypeEnum,
  ResultData,
  ResultEnum
} from "@/enums/httpEnum"
import { checkStatus } from "@/utils/http/checkStatus"
import { createAlova } from "alova"
import adapterFetch from "alova/fetch"
import ReactHook from "alova/react"

const timeOut = import.meta.env
  .VITE_SERVER_TIME_OUT

const HEADER = {
  "Content-Type": ContentTypeEnum.JSON,
  Accept: "application/json, text/plain, */*"
}

/**
 * alova 请求实例
 * @link
 */

export const alovaInstance = createAlova({
  // baseURL: baseUrl(), //TODO:多服务配置情况下不需要基本前缀
  statesHook: ReactHook,
  requestAdapter: adapterFetch(),

  timeout: timeOut,
  cacheFor: null,
  beforeRequest: (method) => {
    // const userStore = useUserStore()
    // beforeQuest(method)
    // // 默认不是用全局加载状态。。。
    // if (method?.meta?.loading) {
    //   Loading('加载中...')
    // }

    // let token = {}
    // if (!method?.meta?.ignorToken) {
    //   token = userStore.getAuthorization()
    // }
    // method.config.headers = assign(method.config.headers, HEADER, token)
    method.config.headers = { ...HEADER }
  },
  responded: {
    /**
     * 请求成功的拦截器
     * 第二个参数为当前请求的method实例，你可以用它同步请求前后的配置信息
     * @param response
     * @param method
     */
    onSuccess: async (response, method) => {
      // console.log('🍱[response]:', response, method, await response.json());
      const { meta } = method

      // // if (meta?.loading) {
      // //   HideLoading()
      // // }

      //const { enableDownload, enableUpload, responseType } = config as any
      // 返回所有结果
      const {
        status: statusCode,
        data: rawData
      } = response as any
      // const { msg, data, code } = rawData as any

      // 返回所有结果
      if (statusCode === 200 && meta?.resAll) {
        return response
      } else {
        if (statusCode === 200) {
          // if (enableDownload) {
          //   // 下载处理
          //   return rawData
          // }
          // if (enableUpload) {
          //   // 上传处理
          //   return rawData
          // }
          // 返回不解析的数据 ()
          const resAllData =
            (await response.json()) as ResultData

          const {
            data: rdata,
            code: rode,
            message: rmsg
          } = resAllData
          console.log(
            method.url + "====>🍯[解析后的数据]:",
            resAllData
          )
          if (rode !== ResultEnum.CODE) {
            !meta?.Tips &&
              rmsg &&
              checkStatus(statusCode, rmsg ?? "")
            return Promise.reject(resAllData)
          } else {
            console.log("🍇", rdata)
            return rdata as ResultData
          }
        }
      }
      !meta?.Tips && checkStatus(statusCode, "")
      return Promise.reject(rawData)
      // return response.json()
    },

    /**
     * 请求失败的拦截器，请求错误时将会进入该拦截器。
     * 第二个参数为当前请求的method实例，你可以用它同步请求前后的配置信息
     * @param err
     * @param method
     */
    onError: (err, method) => {
      // const { config, meta } = method
      // if (meta?.loading) {
      //   HideLoading()
      // }
      checkStatus(500)
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ err, method })
    }
  }
})

export const request = alovaInstance
