import React from 'react'
import PropTypes from 'prop-types'

import { Container, Content } from './styles'

const serializeForm = (formData) => {
  return Array.from(formData).reduce((acc, [key, value]) => {
    if (value) {
      acc[key] = value
    }
    return acc
  }, {})
}

const setProps = (source, props) => {
  const { name } = props

  if (!name) {
    return props
  }

  const defaultValue = source[name]

  return { ...props, defaultValue }
}

const populateForm = (initialState, children) => {
  return [].concat(...children).map(({ props, ...rest }) => ({
    ...rest,
    props: setProps(initialState, props),
  }))
}

const wrapperSubmit = (callback, event) => {
  event.preventDefault()
  const formData = new FormData(event.target)
  callback(serializeForm(formData))
}

export const Form = ({ initialState, onSubmit, children }) => {
  return (
    <Container>
      <Content>
        <form onSubmit={(event) => wrapperSubmit(onSubmit, event)}>
          {initialState ? populateForm(initialState, children) : children}
        </form>
      </Content>
    </Container>
  )
}

export const Input = (props) => <input {...props} />

export const Select = ({ children, ...props }) => {
  return <select {...props}>{children}</select>
}

export const Textarea = (props) => <textarea {...props} />

Form.propTypes = {
  initialState: PropTypes.shape({}),
  onSubmit: PropTypes.func,
  children: PropTypes.element,
}

Form.defaultProps = {
  initialState: {},
  onSubmit: () => {},
  children: PropTypes.element,
}

Select.propTypes = {
  children: PropTypes.element,
}

Select.defaultProps = {
  children: PropTypes.element,
}
