import React from 'react';
import './Description.css';

interface DescriptionProps {
  children: string,
  show: boolean
}

function Description({children, show = false}: DescriptionProps) {
  return (
    <div className="description" style={{opacity: show ? 0.7 : 0}}>
      {children}
    </div>
  )
}

export default Description;