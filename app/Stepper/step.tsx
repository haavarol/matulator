'use client'
import { useState } from "react"
import styles from './step.module.css'

type StepProps = {
    title: string
    value: number
    callback: (value: number) => void
}

export default function Step({ title, value, callback }: StepProps) {
  const [inputValue, setInputValue] = useState(value)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value)
    setInputValue(value)
    callback(value)
  }

  return (
    <div className={styles.step}>
      <h2>{title}</h2>
      <input type="number" value={inputValue} onChange={onChange} />
    </div>
  )
}