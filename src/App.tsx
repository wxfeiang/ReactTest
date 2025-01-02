
import Artic from './components/artic'
import { Button } from './components/ui/button'
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-slate-600 font-20px color-red">
        Hello world!
      </h1>
      <Button onClick={() => console.log('🌭')}>Click me</Button >
      <h1 className='bg-slate-500'>
        dafvad
      </h1>
      <Artic></Artic>
    </>
  )
}

export default App
