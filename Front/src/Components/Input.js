import React from 'react'

const styleBase = {
  general: {
    padding: '2vh'
  },
  input: {
    width: '100%',
    border: "none",
    outline: "none",
    background: 'inherit',
    borderBottom: '1px solid black',
    marginTop: '3%'
  },
  span: {
    padding: "15px"
  }
}


const Input = ({ keyState, title, style, func, value }) => {
  return <div style={styleBase.general}>
    <span style={styleBase.span}>
      {title + " :" || "nothing :"}
    </span>
    
    <input
      style={{ ...styleBase.input, ...style }}
      onChange={(e) => func && func(keyState, e)}
      value={value || ""}
    />
  </div>
}

export default Input