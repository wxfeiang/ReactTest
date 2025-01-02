import { useRequest } from 'alova/client';
import { alovaInstance } from '../utils/http';
interface AvatarProps {
    size: number;
}

export default function Avatar({ size }: AvatarProps) {
    // 使用alova实例创建method并传给useRequest即可发送请求
    const { loading, data, error } = useRequest(
        alovaInstance.Get('/users',),
        {
            initialData: [], // 设置data状态的初始数据
            immediate: true, // 是否立即发送请求，默认为true
        }
    )
    if (loading) {
        return <div>正在请求数据------...</div>;
    } else if (error) {
        return <div>{error.message}</div>;
    }
    function itemclick(item: any) {
        console.log(item)
    }

    return (
        <div className='bg-[#b42a2a]'>
            {
                data?.map((item, index) => (
                    <div key={item.id} className='flex h-[50px] my-[20px]'>
                        <p onClick={() => itemclick(item)}>{item.name}</p>
                        <h3 className='bg-red-900/10'>{item.email}</h3>
                        <h1 className='text-center'>我的第{index}个组件</h1>
                    </div>
                )) ?? null
            }

        </div>

    )
}