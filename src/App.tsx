
import { useState } from 'react'
import AccordionItem from './components/AccordionItem'
import { accordionObject } from './utils/data'

function App() {

  const [valueCurrent, setvalueCurrent] = useState<number | null>(null)


  function handleClick(index: number | null): void {
    if (index === valueCurrent) {
      setvalueCurrent(null)
      return
    }

    setvalueCurrent(index)
  }


  return (
    <>
      <header className='header'>
          <h1 className='header__title text-center py-8 text-3xl font-medium'>Some Common Question</h1>
      </header>
      <main className=' accordion mx-auto w-[90%]  max-w-lg shadow-md'>
        {accordionObject.map((item, index) => <AccordionItem index={index} setvalueCurrent={handleClick} valueCurrent={valueCurrent} key={index} information={item} />)}
      </main>
    </>
  )
}

export default App
