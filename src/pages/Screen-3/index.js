import React from 'react'

import { Form, Input, Select, Textarea } from '../../components/Form'

// import { Container } from './styles';

function Screen3() {
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
      <Form initialState={{ name: 'lalala', gen: 'c' }} onSubmit={handleSubmit}>
        {loadFormFields(['name1', 'pass'])}
        <button type="submit"> Send </button>
      </Form>
    </>
  )
}

export default Screen3
