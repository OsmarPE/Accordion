
import { typeAccordionItem } from "../types"
import Plus from '../assets/icons/Plus'

function AccordionItem({setvalueCurrent,valueCurrent,information,index}:typeAccordionItem) {

    const { answer, question} = information



  return (
        <article  className={ `accordion__item ${valueCurrent === index && 'active'}`}>
            <header onClick={() => setvalueCurrent(index)} className='question flex items-center gap-3 text-left p-4 cursor-pointer '>
                <div className={`accordion__plus ${valueCurrent === index && 'active'}`}>
                    <Plus />
                </div>
                <p className='font-medium'>{question}</p>
            </header>
            <div style={{maxHeight: valueCurrent === index ? '200px' : '0' }} className='accordion__body overflow-hidden '>
                <p className=' accordion__text px-4 pb-4 text-inherit '>
                    {answer}
                </p>
            </div>
        </article>
  )
  
}

export default AccordionItem