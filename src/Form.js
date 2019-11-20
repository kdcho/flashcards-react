import React from 'react'
import styled from 'styled-components/macro'

export default function Form({ addCard }) {
  return (
    <FormBody
      onClick={event => event.preventDefault()}
      /* addCard={getFormData} */
    >
      <label>Question: </label>
      <input></input>
      <label>Answer: </label>
      <textarea></textarea>
      <button>Add Card</button>
    </FormBody>
  )
/*   function getFormData() {
    const obj = {
      question: input.value,
      answer: textarea.value
    }
  } */
}

const FormBody = styled.form``
