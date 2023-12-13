import React from 'react';
import './Keyword.css';

interface TitleProps {
  keyword: string,
}

function Keyword({keyword}: TitleProps) {
  return (
    <div className="keyword">
      {keyword}
    </div>
  )
}

export default Keyword;