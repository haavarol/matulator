'use client'
import { useState } from "react"
import Step from "./step"
import styles from './step.module.css'

const maxSteps = 4


export default function Stepper(){
  const [activeStep, setActiveStep] = useState(0)

  const [wanted, setWanted] = useState(0)
  const [preCooking, setPreCooking] = useState(0)
  const [postCooking, setPostCooking] = useState(0)

  
  const steps = [
    {
      title: 'Før tilberedning',
      value: preCooking,
      callback: (value: number) => {
        setPreCooking(value)
      }
    },
    {
      title: 'Etter tilberedning',
      value: postCooking,
      callback: (value: number) => {
        setPostCooking(value)
      }
    },
    {
      title: 'Ønsket mengde',
      value: wanted,
      callback: (value: number) => {
        setWanted(value)
      }
    },
    {
      title: 'Resultat',
      value: Math.round((wanted / postCooking) * preCooking),
      callback: (value: number) => {
        // Do nothing
      }
    }
  ]

  const nextStep = () => {
    if(activeStep < maxSteps - 1){
      setActiveStep(activeStep + 1)
    }
  }

  const prevStep = () => {
    if(activeStep > 0){
      setActiveStep(activeStep - 1)
    }
  }

  return (
    <>
        <Step {...steps[activeStep]} key={steps[activeStep].title} />
      <div className={styles.buttonGroup}>
        <button onClick={prevStep}>⬅</button>
        <button onClick={nextStep}>➡</button>
      </div>
    </>
  )
}