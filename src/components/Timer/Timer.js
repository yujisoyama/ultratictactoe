import React from 'react'
import './Timer.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
//import { easeQuadInOut } from "d3-ease";
//import AnimatedProgressProvider from "./AnimatedProgressProvider";
//import ChangingProgressProvider from "./ChangingProgressProvider";

export const Timer = () => {

  return (
    <div className='timer'>
      {/*
      <div className='progression' style={{ width: 50, height: 50 }}>
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={66}
        duration={1.4}
        easingFunction={easeQuadInOut}
        repeat
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation.
              styles={buildStyles({ pathTransition: "none" })} 
            />
          );
        }}
      </AnimatedProgressProvider>
      </div>
      */}
    </div>
  )
}
