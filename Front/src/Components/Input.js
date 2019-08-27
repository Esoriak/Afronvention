import React from 'react'

const styleBase = {
  general: {
    padding: '5px'
  },
  input: {
    width: '100%',
    border: "none",
    outline: "none",
    padding: "5px",
    background: 'inherit',
    borderBottom: '1px solid black' 
  },
  span: {
    padding: "5px"
  },
  button: {
    float: 'right'
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