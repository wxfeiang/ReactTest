
import Acatar from './acatar';
const people = [
    '凯瑟琳·约翰逊: 数学家',
    '马里奥·莫利纳: 化学家',
    '穆罕默德·阿卜杜勒·萨拉姆: 物理学家',
    '珀西·莱温·朱利亚: 化学家',
    '苏布拉马尼扬·钱德拉塞卡: 天体物理学家',
];

interface ItemProps {
    name: string;
    isPacked: boolean;
}

function Item({ name, isPacked }: ItemProps) {
    if (isPacked) {
        return <li className="item">{name} ✔</li>;
    }
    return <li className="item">{name}</li>;
}

interface AlertButtonProps {
    message: string;
    children: React.ReactNode;
}
function AlertButton({ message, children }: AlertButtonProps) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}



export default function Article() {
    const a = 12
    function handleClick() {
        alert('你点击了我！');
    }
    function divClick(flog: boolean) {
        console.log('🍷[flog]:', flog);
        if (flog) {
            alert('你点击sdsd了我！');
        }

    }
    function handleClickbg() {
        console.log('🍏');
        const bodyStyle = document.body.style;
        if (bodyStyle.backgroundColor === 'black') {
            bodyStyle.backgroundColor = 'white';
        } else {
            bodyStyle.backgroundColor = 'black';
        }
    }
    return (
        <article>
            <h1 className='bg-slate-400 h-200px'>我的第一个组件</h1>
            <ol>
                <li>组件：UI 构成要素</li>
                <li>定义组件</li>
                <li>使用组件</li>
            </ol>
            <ul>
                {people.map((person, index) => (
                    <li key={index}>{person}</li>
                ))}
            </ul>
            <ul>
                <Item
                    isPacked={true}
                    name="宇航服"
                />
                <Item
                    isPacked={true}
                    name="带金箔的头盔"
                />
                <Item
                    isPacked={false}
                    name="Tam 的照片"
                />
            </ul>
            <p>{a}</p>
            <Acatar size={100}></Acatar>
            <button onClick={handleClick}>
                未绑定任何事件
            </button>

            <button onClick={() => alert('渲染的时候就点击了我！')}>内联系函数渲染</button>

            <AlertButton message="正在播放！">
                播放电影
            </AlertButton>
            <div onClick={() => divClick(true)} >
                就是个点击事件
            </div>
            <button onClick={handleClickbg}>
                切换背景
            </button>
            <button onClick={() => handleClickbg()}>
                切换背景
            </button>
        </article>

    )
}