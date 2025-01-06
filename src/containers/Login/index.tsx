import VerifyCode from "@/hooks/VerifyCode"
import { userStore } from "@/store/user"
import {
    AlipayOutlined,
    FireFilled,
    LockOutlined,
    MobileOutlined,
    TaobaoOutlined,
    UserOutlined,
    WeiboOutlined
} from "@ant-design/icons"
import {
    LoginFormPage,
    ProConfigProvider,
    ProFormCaptcha,
    ProFormCheckbox,
    ProFormText
} from "@ant-design/pro-components"
import {
    Divider,
    Space,
    Tabs,
    message,
    theme
} from "antd"
import type { CSSProperties } from "react"
import { useState } from "react"

type LoginType = "phone" | "account"

interface loginParams {
    username: string,
    password: string,
    verifyCode: string
}


const iconStyles: CSSProperties = {
    color: "rgba(0, 0, 0, 0.2)",
    fontSize: "18px",
    verticalAlign: "middle",
    cursor: "pointer"
}

const Page: React.FC = () => {
    const [loginType, setLoginType] =
        useState<LoginType>("account")
    const { token } = theme.useToken()
    const items = [
        { label: "账户密码登录", key: "account" },
        { label: "手机号登录", key: "phone" }
    ]
    const onSubmit = async (values: loginParams) => {
        console.log(values)
        userStore.login(values)

    }
    return (
        <div
            style={{
                backgroundColor: "white",
                height: "100vh"
            }}
        >
            <LoginFormPage
                logo="https://github.githubassets.com/favicons/favicon.png"
                backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
                title={'管理平台'}
                containerStyle={{
                    backgroundColor: "rgba(0, 0, 0,0.65)",
                    backdropFilter: "blur(4px)"
                }}
                actions={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column"
                        }}
                    >
                        <Divider plain>
                            <span
                                style={{
                                    color:
                                        token.colorTextPlaceholder,
                                    fontWeight: "normal",
                                    fontSize: 14
                                }}
                            >
                                其他登录方式
                            </span>
                        </Divider>
                        <Space align="center" size={24}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    height: 40,
                                    width: 40,
                                    border:
                                        "1px solid " +
                                        token.colorPrimaryBorder,
                                    borderRadius: "50%"
                                }}
                            >
                                <AlipayOutlined
                                    style={{
                                        ...iconStyles,
                                        color: "#1677FF"
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    height: 40,
                                    width: 40,
                                    border:
                                        "1px solid " +
                                        token.colorPrimaryBorder,
                                    borderRadius: "50%"
                                }}
                            >
                                <TaobaoOutlined
                                    style={{
                                        ...iconStyles,
                                        color: "#FF6A10"
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    height: 40,
                                    width: 40,
                                    border:
                                        "1px solid " +
                                        token.colorPrimaryBorder,
                                    borderRadius: "50%"
                                }}
                            >
                                <WeiboOutlined
                                    style={{
                                        ...iconStyles,
                                        color: "#1890ff"
                                    }}
                                />
                            </div>
                        </Space>
                    </div>
                }
                onFinish={onSubmit}
            >
                <Tabs
                    centered
                    activeKey={loginType}
                    items={items}
                    onChange={(activeKey) =>
                        setLoginType(activeKey as LoginType)
                    }
                ></Tabs>
                {loginType === "account" && (
                    <>
                        <ProFormText
                            name="username"
                            fieldProps={{
                                size: "large",
                                prefix: (
                                    <UserOutlined
                                        style={{
                                            color: token.colorText
                                        }}
                                        className={"prefixIcon"}
                                    />
                                )
                            }}
                            placeholder={
                                "用户名: admin or user"
                            }
                            rules={[
                                {
                                    required: true,
                                    message: "请输入用户名!"
                                }
                            ]}
                            initialValue={"admin"}
                        />
                        <ProFormText.Password
                            name="password"
                            fieldProps={{
                                size: "large",
                                prefix: (
                                    <LockOutlined
                                        style={{
                                            color: token.colorText
                                        }}
                                        className={"prefixIcon"}
                                    />
                                )
                            }}
                            placeholder={"密码: 123456admin"}
                            rules={[
                                {
                                    required: true,
                                    message: "请输入密码！"
                                }
                            ]}
                            initialValue={"123456admin"}
                        />
                        <ProFormText
                            name="verifyCode"
                            fieldProps={{
                                size: "large",
                                prefix: (
                                    <FireFilled
                                        style={{
                                            color: token.colorText
                                        }}
                                        className={"prefixIcon"}
                                    />
                                ),
                                suffix: <VerifyCode />
                            }}
                            placeholder={"请输入验证码!"}
                            rules={[
                                {
                                    required: true,
                                    message: "请输入验证码!"
                                },
                                {
                                    min: 4,
                                    max: 4,
                                    message: '验证码长度不符合规范!',
                                },


                            ]}
                        />
                    </>
                )}
                {loginType === "phone" && (
                    <>
                        <ProFormText
                            fieldProps={{
                                size: "large",
                                prefix: (
                                    <MobileOutlined
                                        style={{
                                            color: token.colorText
                                        }}
                                        className={"prefixIcon"}
                                    />
                                )
                            }}
                            name="mobile"
                            placeholder={"手机号"}
                            rules={[
                                {
                                    required: true,
                                    message: "请输入手机号！"
                                },
                                {
                                    pattern: /^1\d{10}$/,
                                    message: "手机号格式错误！"
                                }
                            ]}
                        />
                        <ProFormCaptcha
                            fieldProps={{
                                size: "large",
                                prefix: (
                                    <LockOutlined
                                        style={{
                                            color: token.colorText
                                        }}
                                        className={"prefixIcon"}
                                    />
                                )
                            }}
                            captchaProps={{
                                size: "large"
                            }}
                            placeholder={"请输入验证码"}
                            captchaTextRender={(
                                timing,
                                count
                            ) => {
                                if (timing) {
                                    return `${count} ${"获取验证码"}`
                                }
                                return "获取验证码"
                            }}
                            name="captcha"
                            rules={[
                                {
                                    required: true,
                                    message: "请输入验证码！"
                                }
                            ]}
                            onGetCaptcha={async () => {
                                message.success(
                                    "获取验证码成功！验证码为：1234"
                                )
                            }}
                        />
                    </>
                )}
                <div
                    style={{
                        marginBlockEnd: 24
                    }}
                >
                    <ProFormCheckbox
                        noStyle
                        name="autoLogin"
                    >
                        自动登录
                    </ProFormCheckbox>
                    <a
                        style={{
                            float: "right"
                        }}
                    >
                        忘记密码
                    </a>
                </div>
            </LoginFormPage>
        </div>
    )
}

export default () => {
    return (
        <ProConfigProvider dark>
            <Page />
        </ProConfigProvider>
    )
}
