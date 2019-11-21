import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Form({ addCard }) {
  const [formData, setFormData] = useState({ question: '', answer: '' })
  const deaultFormState = formData

  const validData =
    formData.question !== '' && formData.answer !== '' ? onSubmit : ''
  const isButtonDisabled =
    formData.question === '' || formData.answer === '' ? 'disabled' : ''

  return (
    <FormBody id="cardForm" onSubmit={validData}>
      <FormInput
        name="question"
        onChange={onChange}
        required="required"
        placeholder="Question"
      ></FormInput>
      <FormTextArea
        name="answer"
        onChange={onChange}
        required="required"
        placeholder="Answer"
      ></FormTextArea>
      <FormButton disabled={isButtonDisabled}>Add Card</FormButton>
    </FormBody>
  )

  function onChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  function onSubmit(event) {
    event.preventDefault()
    console.log('formData', formData)
    addCard(formData)
    resetForm()
  }

  function resetForm() {
    document.getElementById('cardForm').reset()
    setFormData(deaultFormState)
    console.log('formData22', formData)
  }
}

const FormBody = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  margin: 20px 0;
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
`

const FormInput = styled.input`
  padding: 10px 20px;
  border: 1px solid #b7b7b7;
  border-radius: 3px;
  font: normal medium/normal Arial, Helvetica, sans-serif;
  color: black;
  text-overflow: clip;
  background: rgba(252, 252, 252, 1);
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2) inset;
  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.66);
  transition: all 200ms;
  &:hover {
    border: 1px solid #a3a3a3;
    background: rgba(255, 255, 255, 1);
    transition: all 100ms;
  }

  &:focus {
    border: 1px solid #018dc4;
    box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.2) inset;
    transition: all 50ms;
  }
`
const FormTextArea = styled.textarea`
  padding: 10px 20px;
  border: 1px solid #b7b7b7;
  border-radius: 3px;
  font: normal medium/normal Arial, Helvetica, sans-serif;
  color: black;
  text-overflow: clip;
  background: rgba(252, 252, 252, 1);
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2) inset;
  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.66);
  transition: all 200ms;
  &:hover {
    border: 1px solid #a3a3a3;
    background: rgba(255, 255, 255, 1);
    transition: all 100ms;
  }

  &:focus {
    border: 1px solid #018dc4;
    box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.2) inset;
    transition: all 50ms;
  }
`

const FormButton = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  border: 1px solid #018dc4;
  border-radius: 3px;
  font: normal medium/normal Arial, Helvetica, sans-serif;
  color: black;
  text-overflow: clip;
  background: #0199d9;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2);
  transition: all 300ms;

  &:hover {
    border: 1px solid #007cad;
    background: rgba(0, 142, 198, 1);
    box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.3);
    transition: all 200ms;
  }

  &:active {
    border: 1px solid #018dc4;
    background: #00a6e8;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2) inset;
    text-shadow: none;
    transition: all 50ms;
  }
  &:disabled {
    background: #006790;
  }
`
