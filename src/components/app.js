import React from 'react'
import s from 'styled-components'
const Div=s.div`
font-family:sans-serif;
`

export const App=({name})=>
{
  return (
    <Div>Wellcome to {name}</Div>
  )
}
