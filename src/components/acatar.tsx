import { usealova } from "alova/client"
import React from "react"

import { Table } from "antd"
interface AvatarProps {
    size: number
}
interface User {
    id: number
    name: string
    email: string
}
const columns = [
    {
        title: "姓名",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "年龄",
        dataIndex: "id",
        key: "id"
    },
    {
        title: "住址",
        dataIndex: "email",
        key: "email"
    },
    {
        title: 'Action',
        dataIndex: '',
        key: 'Action',
        render: () => <a onClick={(row) => { console.log(row) }}>Delete</a>,
    },
]

const Avatar: React.FC<AvatarProps> = (props) => {
    console.log("🥡[size]:", props)

    // 使用alova实例创建method并传给usealova即可发送请求
    const { loading, data, error } = usealova(
        alova.Get<User[]>("/users"),
        {
            initialData: [], // 设置data状态的初始数据
            immediate: true // 是否立即发送请求，默认为true
        }
    )
    if (error) {
        return <div>error</div>
    }
    function itemclick(item: User) {
        console.log(item)
    }

    return (
        <>
            <Table
                dataSource={data}
                columns={columns}
                rowKey={(record) => record.id}
                loading={loading}
            />
        </>
    )
}

export default Avatar
