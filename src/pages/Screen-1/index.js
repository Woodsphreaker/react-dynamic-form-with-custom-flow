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

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="name1" placeholder="Name" />
        <Input type="password" name="pass" />
        <button type="submit"> Send </button>
      </Form>

      <Form
        initialState={{ name2: 'lorem ipsum', text1: 'lorem ipsum dolor' }}
        onSubmit={handleSubmit}
      >
        <Input type="text" name="name2" />
        <Input type="password" name="pass" />
        <Textarea name="text1" />
        <button type="submit"> Send </button>
      </Form>

      <Form
        initialState={{ name3: 'lorem ipsum 3', select1: '3' }}
        onSubmit={handleSubmit}
      >
        <Input type="text" name="name3" />
        <Input type="password" name="pass" />
        <Select name="select1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </Select>
        <button type="submit"> Send </button>
      </Form>
    </>
  )
}

export default Screen1
