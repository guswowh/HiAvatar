import React, { useMemo, useCallback } from 'react'
import * as S from './style'
import { useAppDispatch } from 'store'
import { changeOption } from 'store/slices/optionSlice'

interface VoiceControllerProps {
  label: string
  min: number
  max: number
  step: number
  controlType: string
  optionValue: number
}
export const VoiceController = React.memo(
  ({
    label,
    min,
    max,
    step,
    controlType,
    optionValue
  }: VoiceControllerProps) => {
    const dispatch = useAppDispatch()
    const onChangeHandler = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        dispatch(
          changeOption({
            name,
            value: Number(value)
          })
        )
      },
      []
    )

    const progressCalculator = useCallback(
      (optionValue: number, min: number, max: number) => {
        return ((optionValue - min) / (max - min)) * 100
      },
      []
    )

    const progress = useMemo(() => {
      return progressCalculator(optionValue, min, max)
    }, [optionValue, min, max])

    return (
      <S.Container>
        <label>{label}</label>
        <S.RangeContainer controlType={controlType} progress={progress}>
          <div className='slider-label'>{min.toFixed(1)}</div>
          <div className='slider-container'>
            <div className='slider-balloon'>{optionValue.toFixed(1)}</div>
            <input
              type='range'
              name={controlType} // ex) speed, pitch, sentenceSpacing
              value={optionValue}
              min={min}
              max={max}
              step={step}
              onChange={onChangeHandler}
            />
          </div>
          <div className='slider-label'>{max.toFixed(1)}</div>
        </S.RangeContainer>
      </S.Container>
    )
  }
)
