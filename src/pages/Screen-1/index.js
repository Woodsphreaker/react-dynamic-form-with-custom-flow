import React from 'react'

import { Form, Input, Select, Textarea } from '../../components/Form'

// import { Container } from './styles';

function Screen1() {
  const handleSubmit = (values) => {
    console.log(values)
  }

  const INITIAL = {
    name1: 'lalalala',
    pass: '123456',
  }

  const formMaping = (keyId, fieldName) => {
    const fields = {
      name1: () => (
        <Input key={keyId} type="text" name="name1" placeholder="Name 1" />
      ),
      name2: () => (
        <Input key={keyId} type="text" name="name2" placeholder="Name 2" />
      ),
      name3: () => (
        <Input key={keyId} type="text" name="name3" placeholder="Name 3" />
      ),
      pass: () => <Input key={keyId} type="password" name="pass" />,
      select1: () => (
        <Select key={keyId} name="select1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </Select>
      ),
      text1: () => <Textarea key={keyId} name="text1" />,
    }

    return fields[fieldName]()
  }

  const loadFormFields = (requestedFields = []) => {
    return requestedFields.map((field, key) => formMaping(key, field))
  }

  return (
    <>
      <Form initialState={{ name1: 'ola' }} onSubmit={handleSubmit}>
        {loadFormFields(['name1', 'pass'])}
        <button type="submit"> Send </button>
      </Form>

      <Form
        initialState={{ name2: 'lorem ipsum', text1: 'lorem ipsum dolor' }}
        onSubmit={handleSubmit}
      >
        {loadFormFields(['name2', 'pass', 'text1'])}
        <button type="submit"> Send </button>
      </Form>

      <Form
        initialState={{ name3: 'lorem ipsum 3', select1: '3' }}
        onSubmit={handleSubmit}
      >
        {loadFormFields(['name3', 'pass', 'select1'])}
        <button type="submit"> Send </button>
      </Form>
    </>
  )
}

export default Screen1
