import { request } from '@/utils/http';
import { useRequest } from 'alova/client';
import React from 'react';
interface CordeProps {
    code: string
    data: string;
}
interface props {
    width?: string
    height?: string

}

const PREFIX = 'data:image/svg+xml;base64,'
const VerifyCode: React.FC<props> = (props) => {
    const style = {
        width: '100px',
        height: "30px",
        cursor: 'pointer',
        ...props
    }
    const { data, error, send } = useRequest(
        request.Post<CordeProps>("/api/v1/base/captchaImage",),
        {
            initialData: [], // 设置data状态的初始数据
            immediate: true // 是否立即发送请求，默认为true
        }
    )
    if (error) {
        return '加载出错'
    }
    return (
        <img
            style={style}
            src={PREFIX + data.data!}
            alt='验证码'
            onClick={send}
        />
    );
};

export default VerifyCode;

