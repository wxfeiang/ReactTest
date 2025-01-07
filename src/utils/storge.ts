/*
 * @Author: wxfeiang wxfeiang@qq.com
 * @Date: 2025-01-07 11:18:41
 * @Description: 本地数据读取 默认local
 * @FilePath: /reactTest/src/utils/storge.ts
 * @LastEditTime: 2025-01-07 15:03:17
 * @LastEditors: wxfeiang wxfeiang@qq.com
 * Copyright (c) 2025 by ${git_name} email: ${git_email}, All Rights Reserved.
 */

type StorageType = "session" | "local"
/**
 * @description:  设置本地存储
 * @param {string} key
 * @param {any} value
 * @param { StorageType} type
 * @return {}
 */
export const setStorage = (
  key: string,
  value: any,
  type?: StorageType
) => {
  value = JSON.stringify(value)
  if (type === "session") {
    sessionStorage.setItem(key, value)
  } else {
    localStorage.setItem(key, value)
  }
}

/**
 * @description:  本地存储读取
 * @param {string} key
 * @param { string} type
 * @return {}
 */

export const getStorage = (
  key: string,
  type?: StorageType
) => {
  let value = ""

  try {
    if (type === "session") {
      value = sessionStorage.getItem(key) || ""
    } else {
      value = localStorage.getItem(key) || ""
    }
    return JSON.parse(value)
  } catch (error) {
    return ""
  }
}

/**
 * @description:  本地存储删除
 * @param {string} key
 * @param { string} type
 * @return {}
 */
export const removeStorage = (
  key: string,
  type?: StorageType
) => {
  if (type === "session") {
    sessionStorage.removeItem(key)
  } else {
    localStorage.removeItem(key)
  }
}

/**
 * @description:  清空本地存储
 * @param {string} type
 * @return {}
 * */

export const clearStorage = (
  type?: StorageType
) => {
  if (type === "session") {
    sessionStorage.clear()
  } else {
    localStorage.clear()
  }
}
