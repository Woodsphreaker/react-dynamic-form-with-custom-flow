import React from 'react'

// import { Container } from './styles'

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
  const defaultValue = source[name]

  return { ...props, defaultValue }
}

const populateForm = (initialState, children) => {
  return children.map(({ props, ...rest }) => ({
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
    <form onSubmit={(event) => wrapperSubmit(onSubmit, event)}>
      {initialState ? populateForm(initialState, children) : children}
    </form>
  )
}

export const Input = (props) => <input {...props} />

export const Select = ({ children, ...props }) => {
  return <select {...props}>{children}</select>
}
