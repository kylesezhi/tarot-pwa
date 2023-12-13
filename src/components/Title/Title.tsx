import React from 'react';
import './Title.css';

interface TitleProps {
  title: string,
  show: boolean
}

function Title({title = 'temp', show = false}: TitleProps) {
  return (
    <div className="title" style={{opacity: show ? 0.7 : 0}}>
      {title}
    </div>
  )
}

export default Title;