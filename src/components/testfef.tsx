import { useRef } from "react";

function testfef() {

    //首先，声明一个 初始值 为 null 的 ref 对象
    const div = useRef(null)
    const heandleClick = () => {
        //当 React 创建 DOM 节点并将其渲染到屏幕时，React 将会把 DOM 节点设置为 ref 对象的 current 属性
        console.log(div.current)
    }
    return (
        <>
            {/*然后将 ref 对象作为 ref 属性传递给想要操作的 DOM 节点的 JSX*/}
            <div ref={div}>dom元素</div>
            <button onClick={heandleClick}>获取dom元素</button>
        </>
    )

}

export default testfef;