import { useRef } from 'react'
import { RoughNotation } from 'react-rough-notation';
import useOnScreen from '../use-on-screen'

const style = {
    width: 'fit-content',
    padding: '1em',
    marginInline: 'auto'
};

const headStyle = {
    fontSize: '1.6em',
    fontWeight: '500'
}

export const Title = ({title}) => {
  const ref = useRef(null);
  const isOnScreen = useOnScreen(ref, '16px');
  return (
    <div className="title" ref={ref} style={style}>
        <RoughNotation 
            type="underline" 
            animationDelay={600}
            iterations={2}
            strokeWidth={2}
            color={"#76b687"}
            show={isOnScreen}
        >
            <h1 style={headStyle}>{title}</h1>
        </RoughNotation>
    </div>
  )
};
