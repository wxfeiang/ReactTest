import { Button } from "antd"
import Artic from "./components/artic"
import Testfef from "./components/testfef"
import Title from "./components/title"

function App() {
  const tclick = () => {
    console.log("tclick")
  }
  return (
    <>
      <Testfef></Testfef>
      <Button type="primary">
        Primary Button
      </Button>
      <Artic></Artic>
      <Title></Title>
    </>
  )
}

export default App
