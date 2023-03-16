import React from 'react'
import { RoughNotation } from 'react-rough-notation';

const style = {
    width: 'fit-content',
    padding: '1em'
};

const headStyle = {
    fontSize: '1.6em',
    fontWeight: '500'
}

export const Title = ({title}) => {
  return (
    <div className="title" style={style}>
        <RoughNotation 
            type="underline" 
            show={true} 
            iterations={2}
            strokeWidth={2}
            color={"#76b687"}
        >
            <h1 style={headStyle}>{title}</h1>
        </RoughNotation>
    </div>
  )
}
