import React from 'react';
import './Title.css';

interface TitleProps {
  title: string,
  show: boolean
}

function Title({title = '', show = false}: TitleProps) {
  return (
    <div className="title">
      {title}
    </div>
  )
}

export default Title;