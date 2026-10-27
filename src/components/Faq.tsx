import { useState } from 'react'
import type { FaqItem } from '../data/faq'
import { Icon } from './Icon'

export function Faq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="faq">
      {items.map((item, i) => {
        const open = openIndex === i
        return (
          <div key={item.question} className={`faq__item ${open ? 'is-open' : ''}`}>
            <button
              className="faq__question"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              {item.question}
              <Icon name="chevron-down" size={22} strokeWidth={2.25} />
            </button>
            {open && <p className="faq__answer">{item.answer}</p>}
          </div>
        )
      })}
    </div>
  )
}
