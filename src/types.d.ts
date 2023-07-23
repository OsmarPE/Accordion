
export interface accordionType {
    question: string,
    answer: string
}
export interface typeAccordionItem {
    information:accordionType,
    index:number,
    valueCurrent:number | null,
    setvalueCurrent:(value:number | null) => void
}