import React, { useState } from 'react'

import { Form, Input, Select, Textarea } from '../../components/Form'

import {
  Container,
  PreviewDataPannel,
  InfoPannel,
} from '../../components/Common/styles'

function Screen1() {
  const [formData, setFormData] = useState({})

  const handleSubmit = (values) => {
    setFormData(values)
  }

  const INITIAL = {
    name1: 'lalalala',
    pass: '123456',
  }

  // const formMaping = (keyId, fieldName) => {
  //   const fields = {
  //     name1: () => (
  //       <Input key={keyId} type="text" name="name1" placeholder="Name 1" />
  //     ),
  //     name2: () => (
  //       <Input key={keyId} type="text" name="name2" placeholder="Name 2" />
  //     ),
  //     name3: () => (
  //       <Input key={keyId} type="text" name="name3" placeholder="Name 3" />
  //     ),
  //     pass: () => <Input key={keyId} type="password" name="pass" />,
  //     select1: () => (
  //       <Select key={keyId} name="select1">
  //         <option value="1">1</option>
  //         <option value="2">2</option>
  //         <option value="3">3</option>
  //         <option value="4">4</option>
  //         <option value="5">5</option>
  //         <option value="6">6</option>
  //       </Select>
  //     ),
  //     text1: () => <Textarea key={keyId} name="text1" />,
  //   }

  //   return fields[fieldName]()
  // }

  // const loadFormFields = (requestedFields = []) => {
  //   return requestedFields.map((field, key) => formMaping(key, field))
  // }

  return (
    <>
      <Form initialState={INITIAL} onSubmit={handleSubmit}>
        <InfoPannel>
          <h1>Screen 1</h1>
          <h4>Flow 1</h4>
        </InfoPannel>
        <Input type="text" name="name1" placeholder="Name 1" />
        <Input type="text" name="name2" placeholder="Name 2" />
        <Input type="text" name="name3" placeholder="Name 3" />
        <Input type="password" name="pass" placeholder="Enter your pass" />
        <Select name="select1" placeholder="Enter your pass">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </Select>
        <Textarea name="desc" />
        <Container>
          <button type="button"> Prev </button>
          <button type="submit"> Preview Data </button>
          <button type="button"> Next </button>
        </Container>
        <PreviewDataPannel>
          <h1>Payload</h1>
          <div>{JSON.stringify(formData)}</div>
        </PreviewDataPannel>
      </Form>
    </>
  )
}

export default Screen1
