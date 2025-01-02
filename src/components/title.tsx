import { Button } from "antd";
import { useState } from "react";





function Title() {
    const [title, setTitle] = useState("Hello World");
    const [titleProps, setTitleProps] = useState({ name: "Hello World", age: 20 });
    const handTitlePro = () => {
        setTitleProps({ name: "Hello React", age: 1000 });
    }
    return (
        <>
            <div>{title}</div>
            <p>{titleProps.name}</p>
            <p>{titleProps.age}</p>
            <Button danger onClick={() => setTitle("Hello React")}>Change Title</Button>

            <Button danger onClick={handTitlePro}>handTitlePro</Button>
        </>
    )
}

export default Title;